const express     = require('express');
const pool        = require('../db');
const requireAuth = require('../middleware/auth');
const optionalCustomerAuth = require('../middleware/optionalCustomerAuth');

const router = express.Router();

const VALID_STATUSES = ['nuevo', 'confirmado', 'listo', 'entregado', 'cancelado'];

function parsePrice(raw) {
  return parseFloat(String(raw).replace(/[^0-9.]/g, '')) || 0;
}

// Valida el payload de un pedido. Devuelve un mensaje de error o null si es válido.
function validateOrderData(data) {
  const { customerName, customerEmail, customerPhone, pickupDate, pickupTime, orderItems } = data || {};
  if (!customerName || !customerEmail || !customerPhone ||
      !pickupDate || !pickupTime ||
      !Array.isArray(orderItems) || orderItems.length === 0) {
    return 'Faltan campos requeridos';
  }
  return null;
}

// Crea un pedido + sus items en una transacción. Reutilizable desde el flujo de
// checkout con Stripe. El pedido se crea SIEMPRE como 'unpaid'; el webhook de
// Stripe lo marca 'paid' cuando el cobro se confirma.
// Devuelve { orderId, total }.
async function createOrder(data, customerId = null) {
  const {
    customerName, customerEmail, customerPhone,
    pickupDate, pickupTime, notes, orderItems, language,
  } = data;

  const total = orderItems.reduce((sum, item) => {
    return sum + parsePrice(item.price) * (parseInt(item.quantity) || 1);
  }, 0);

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();

    const [result] = await conn.query(
      `INSERT INTO orders
         (customer_id, customer_name, customer_email, customer_phone,
          pickup_date, pickup_time, notes, language, total_amount, payment_status)
       VALUES (?,?,?,?,?,?,?,?,?, 'unpaid')`,
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

    // Primer registro del historial de estados (para el timeline del dashboard)
    await conn.query(
      `INSERT INTO order_status_history (order_id, status, changed_by) VALUES (?, 'nuevo', 'sistema')`,
      [orderId]
    );

    await conn.commit();
    return { orderId, total };
  } catch (err) {
    await conn.rollback();
    throw err;
  } finally {
    conn.release();
  }
}

// POST /api/orders — LEGACY / manual. Crea un pedido sin pasar por Stripe
// (queda como 'unpaid', invisible en el dashboard). El sitio web ya NO usa esta
// ruta; el checkout real pasa por POST /api/checkout/session. Se conserva por
// compatibilidad y para altas manuales.
router.post('/', optionalCustomerAuth, async (req, res) => {
  const data = req.body || {};
  const validationError = validateOrderData(data);
  if (validationError) return res.status(400).json({ error: validationError });

  const customerId = req.customer ? req.customer.customerId : null;
  try {
    const { orderId } = await createOrder(data, customerId);
    res.status(201).json({ ok: true, orderId });
  } catch (err) {
    console.error('Error saving order:', err);
    res.status(500).json({ error: 'Error al guardar el pedido' });
  }
});

// GET /api/orders — protegido (admin/dashboard).
// Por defecto solo devuelve pedidos PAGADOS (payment=paid). Usa ?payment=all
// para ver todos, o ?payment=unpaid para los no pagados/abandonados.
// Filtros de fecha: ?date= (fecha de RETIRO/pickup_date) y
// ?order_date= (fecha en que se HIZO el pedido/created_at) — el dashboard usa ambos.
router.get('/', requireAuth, async (req, res) => {
  const { status, date, order_date, payment = 'paid', page = 1, limit = 50 } = req.query;
  const offset = (parseInt(page) - 1) * parseInt(limit);

  const conditions = [];
  const params     = [];

  if (payment && payment !== 'all') {
    conditions.push('o.payment_status = ?');
    params.push(payment);
  }
  if (status && VALID_STATUSES.includes(status)) {
    conditions.push('o.status = ?');
    params.push(status);
  }
  if (date) {
    conditions.push('o.pickup_date = ?');
    params.push(date);
  }
  if (order_date) {
    conditions.push('DATE(o.created_at) = ?');
    params.push(order_date);
  }

  const where = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';

  params.push(parseInt(limit), offset);

  try {
    const [rows] = await pool.query(
      `SELECT o.id, o.created_at, o.status, o.payment_status,
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

// GET /api/orders/:id — protegido (admin), detalle completo con items + historial de estados
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
    const [historyRows] = await pool.query(
      'SELECT status, changed_at, changed_by FROM order_status_history WHERE order_id = ? ORDER BY changed_at ASC, id ASC',
      [id]
    );

    res.json({ ...orderRows[0], items: itemRows, status_history: historyRows });
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

  const changedBy = process.env.ADMIN_USERNAME || 'admin';

  try {
    const [result] = await pool.query(
      'UPDATE orders SET status = ? WHERE id = ?',
      [status, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Pedido no encontrado' });
    }
    await pool.query(
      'INSERT INTO order_status_history (order_id, status, changed_by) VALUES (?, ?, ?)',
      [id, status, changedBy]
    );
    const [rows] = await pool.query('SELECT * FROM orders WHERE id = ?', [id]);
    const [historyRows] = await pool.query(
      'SELECT status, changed_at, changed_by FROM order_status_history WHERE order_id = ? ORDER BY changed_at ASC, id ASC',
      [id]
    );
    res.json({ ...rows[0], status_history: historyRows });
  } catch (err) {
    console.error('Error updating status:', err);
    res.status(500).json({ error: 'Error al actualizar estado' });
  }
});

module.exports = { router, createOrder, validateOrderData, parsePrice };
