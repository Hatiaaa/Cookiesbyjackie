const express = require('express');
const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');
const pool    = require('../db');
const requireCustomerAuth = require('../middleware/requireCustomerAuth');

const router = express.Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function signCustomerToken(customerId) {
  return jwt.sign({ role: 'customer', customerId }, process.env.JWT_SECRET, { expiresIn: '30d' });
}

// POST /api/customers/register
router.post('/register', async (req, res) => {
  const { name, email, phone, birthday, password } = req.body || {};

  if (!name || !email || !phone || !birthday || !password) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Correo electrónico inválido' });
  }
  if (!DATE_RE.test(birthday) || isNaN(Date.parse(birthday)) || new Date(birthday) > new Date()) {
    return res.status(400).json({ error: 'Fecha de nacimiento inválida' });
  }
  if (password.length < 8) {
    return res.status(400).json({ error: 'La contraseña debe tener al menos 8 caracteres' });
  }

  try {
    const [existing] = await pool.query('SELECT id FROM customers WHERE email = ?', [email]);
    if (existing.length > 0) {
      return res.status(409).json({ error: 'Ya existe una cuenta con ese correo' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      'INSERT INTO customers (name, email, phone, birthday, password_hash) VALUES (?,?,?,?,?)',
      [name, email, phone, birthday, passwordHash]
    );

    const token = signCustomerToken(result.insertId);
    res.status(201).json({ token, customer: { id: result.insertId, name, email, phone, birthday } });
  } catch (err) {
    console.error('Error registrando cliente:', err);
    res.status(500).json({ error: 'Error al crear la cuenta' });
  }
});

// POST /api/customers/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ error: 'Correo y contraseña requeridos' });
  }

  try {
    const [rows] = await pool.query(
      'SELECT id, name, email, phone, birthday, password_hash FROM customers WHERE email = ?',
      [email]
    );
    if (rows.length === 0) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    const customer = rows[0];
    const valid = await bcrypt.compare(password, customer.password_hash);
    if (!valid) {
      return res.status(401).json({ error: 'Credenciales incorrectas' });
    }

    const token = signCustomerToken(customer.id);
    res.json({
      token,
      customer: {
        id: customer.id, name: customer.name, email: customer.email,
        phone: customer.phone, birthday: customer.birthday,
      },
    });
  } catch (err) {
    console.error('Error en login de cliente:', err);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
});

// GET /api/customers/me — datos de la cuenta autenticada
router.get('/me', requireCustomerAuth, async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, name, email, phone, birthday, created_at FROM customers WHERE id = ?',
      [req.customer.customerId]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Cuenta no encontrada' });
    res.json(rows[0]);
  } catch (err) {
    console.error('Error obteniendo cuenta:', err);
    res.status(500).json({ error: 'Error al obtener la cuenta' });
  }
});

// GET /api/customers/me/orders — historial de pedidos de la cuenta autenticada
router.get('/me/orders', requireCustomerAuth, async (req, res) => {
  try {
    const [orders] = await pool.query(
      `SELECT id, created_at, status, pickup_date, pickup_time, total_amount
       FROM orders WHERE customer_id = ? ORDER BY created_at DESC`,
      [req.customer.customerId]
    );

    if (orders.length === 0) return res.json([]);

    const orderIds = orders.map(o => o.id);
    const [items] = await pool.query(
      `SELECT order_id, product_title, unit_price, quantity, options_details
       FROM order_items WHERE order_id IN (?)`,
      [orderIds]
    );

    const itemsByOrder = {};
    items.forEach(item => {
      if (!itemsByOrder[item.order_id]) itemsByOrder[item.order_id] = [];
      itemsByOrder[item.order_id].push(item);
    });

    res.json(orders.map(o => ({ ...o, items: itemsByOrder[o.id] || [] })));
  } catch (err) {
    console.error('Error obteniendo historial:', err);
    res.status(500).json({ error: 'Error al obtener el historial de pedidos' });
  }
});

module.exports = router;
