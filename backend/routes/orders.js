const express     = require('express');
const pool        = require('../db');
const requireAuth = require('../middleware/auth');
const optionalCustomerAuth = require('../middleware/optionalCustomerAuth');

const router = express.Router();

const VALID_STATUSES = ['nuevo', 'confirmado', 'listo', 'entregado', 'cancelado'];

function parsePrice(raw) {
  return parseFloat(String(raw).replace(/[^0-9.]/g, '')) || 0;
}

// POST /api/orders — público, recibe pedido desde el sitio web
// Si viene un token de cliente válido (Authorization: Bearer), el pedido queda
// asociado a esa cuenta. Si no, el pedido se guarda como invitado (customer_id = NULL).
router.post('/', optionalCustomerAuth, async (req, res) => {
  const {
    customerName, customerEmail, customerPhone,
    pickupDate, pickupTime, notes,
    orderItems, language,
  } = req.body || {};

  if (!customerName || !customerEmail || !customerPhone ||
      !pickupDate || !pickupTime ||
      !Array.isArray(orderItems) || orderItems.length === 0) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }

  const total = orderItems.reduce((sum, item) => {
    return sum + parsePrice(item.price) * (parseInt(item.quantity) || 1);
  }, 0);

  const customerId = req.customer ? req.customer.customerId : null;

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    const [result] = await conn.query(
      `INSERT INTO orders
         (customer_id, customer_name, customer_email, customer_phone,
          pickup_date, pickup_time, notes, language, total_amount)
       VALUES (?,?,?,?,?,?,?,?,?)`,
      [customerId, customerName, customerEmail, customerPhone,
       pickupDate, pickupTime, notes || null,
       language || 'en', total.toFixed(2)]
    );

    const orderId = result.insertId;

    for (const item of orderItems) {
      const unitPrice = parsePrice(item.price);
      await conn.query(
        `INSERT INTO order_items (order_id, product_title, unit_price, quantity, options_details)
         VALUES (?,?,?,?,?)`,
        [orderId, item.title, unitPrice.toFixed(2),
         parseInt(item.quantity) || 1, item.details || null]
      );
    }

    await conn.commit();
    res.status(201).json({ ok: true, orderId });
  } catch (err) {
    await conn.rollback();
    console.error('Error saving order:', err);
    res.status(500).json({ error: 'Error al guardar el pedido' });
  } finally {
    conn.release();
  }
});

// GET /api/orders — protegido (admin), lista pedidos con filtros opcionales
router.get('/', requireAuth, async (req, res) => {
  const { status, date, page = 1, limit = 50 } = req.query;
  const offset = (parseInt(page) - 1) * parseInt(limit);

  const conditions = [];
  const params     = [];

  if (status && VALID_STATUSES.includes(status)) {
    conditions.push('o.status = ?');
    params.push(status);
  }
  if (date) {
    conditions.push('o.pickup_date = ?');
    params.push(date);
  }

  const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';

  params.push(parseInt(limit), offset);

  try {
    const [rows] = await pool.query(
      `SELECT o.id, o.created_at, o.status,
              o.customer_name, o.customer_email, o.customer_phone,
              o.pickup_date, o.pickup_time, o.notes, o.language, o.total_amount,
              COUNT(i.id) AS item_count
       FROM orders o
       LEFT JOIN order_items i ON i.order_id = o.id
       ${where}
       GROUP BY o.id
       ORDER BY o.created_at DESC
       LIMIT ? OFFSET ?`,
      params
    );
    res.json(rows.map(r => ({ ...r, item_count: Number(r.item_count) })));
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).json({ error: 'Error al obtener pedidos' });
  }
});

// GET /api/orders/:id — protegido (admin), detalle completo con items
router.get('/:id', requireAuth, async (req, res) => {
  const id = parseInt(req.params.id);
  if (!id) return res.status(400).json({ error: 'ID inválido' });

  try {
    const [orderRows] = await pool.query('SELECT * FROM orders WHERE id = ?', [id]);
    if (orderRows.length === 0) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }

    const [itemRows] = await pool.query(
      'SELECT * FROM order_items WHERE order_id = ? ORDER BY id',
      [id]
    );

    res.json({ ...orderRows[0], items: itemRows });
  } catch (err) {
    console.error('Error fetching order detail:', err);
    res.status(500).json({ error: 'Error al obtener el pedido' });
  }
});

// PATCH /api/orders/:id/status — protegido (admin), cambia estado
router.patch('/:id/status', requireAuth, async (req, res) => {
  const id     = parseInt(req.params.id);
  const { status } = req.body || {};

  if (!id) return res.status(400).json({ error: 'ID inválido' });

  if (!VALID_STATUSES.includes(status)) {
    return res.status(400).json({
      error: `Estado inválido. Válidos: ${VALID_STATUSES.join(', ')}`,
    });
  }

  try {
    const [result] = await pool.query(
      'UPDATE orders SET status = ? WHERE id = ?',
      [status, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }
    const [rows] = await pool.query('SELECT * FROM orders WHERE id = ?', [id]);
    res.json(rows[0]);
  } catch (err) {
    console.error('Error updating status:', err);
    res.status(500).json({ error: 'Error al actualizar estado' });
  }
});

module.exports = router;
