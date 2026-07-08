const express = require('express');
const pool    = require('../db');
const optionalCustomerAuth = require('../middleware/optionalCustomerAuth');
const { createOrder, validateOrderData, parsePrice } = require('./orders');
const { validateCart } = require('../catalog');

const router = express.Router();

// Modo de validación de precios: 'strict' (rechaza), 'warn' (registra y sigue),
// 'off' (desactiva). Por defecto 'strict'.
const PRICE_VALIDATION = (process.env.PRICE_VALIDATION || 'strict').toLowerCase();

// Cliente de Stripe (se inicializa solo si hay clave configurada)
const stripe = process.env.STRIPE_SECRET_KEY
  ? require('stripe')(process.env.STRIPE_SECRET_KEY)
  : null;

const CURRENCY = (process.env.STRIPE_CURRENCY || 'usd').toLowerCase();

// POST /api/checkout/session
// Crea el pedido como 'unpaid' y una sesión de Stripe Checkout. Devuelve { url }
// para redirigir al cliente a la pasarela de pago alojada por Stripe.
// El pedido se marca 'paid' vía webhook cuando el cobro se confirma.
router.post('/session', optionalCustomerAuth, async (req, res) => {
  if (!stripe) {
    return res.status(503).json({ error: 'Pagos no configurados (falta STRIPE_SECRET_KEY)' });
  }

  const data = req.body || {};
  const validationError = validateOrderData(data);
  if (validationError) return res.status(400).json({ error: validationError });

  // Validación de precios contra el catálogo (anti-manipulación).
  if (PRICE_VALIDATION !== 'off') {
    const bad = validateCart(data.orderItems);
    if (bad) {
      console.warn(`[precio] Línea sospechosa: "${bad.title}" @ ${bad.price} — ${bad.reason}`);
      if (PRICE_VALIDATION === 'strict') {
        return res.status(400).json({ error: 'No se pudo validar el precio de un producto. Actualiza la página e intenta de nuevo.' });
      }
    }
  }

  // Construir line items desde el carrito. Los precios ya fueron validados
  // arriba contra el catálogo del servidor (catalog.js).
  const lineItems = data.orderItems.map(item => {
    const unitAmount = Math.round(parsePrice(item.price) * 100); // en centavos
    return {
      quantity: parseInt(item.quantity) || 1,
      price_data: {
        currency: CURRENCY,
        unit_amount: unitAmount,
        product_data: {
          name: String(item.title || 'Producto').slice(0, 250),
          ...(item.details ? { description: String(item.details).slice(0, 490) } : {}),
        },
      },
    };
  });

  const total = data.orderItems.reduce(
    (sum, it) => sum + parsePrice(it.price) * (parseInt(it.quantity) || 1), 0
  );
  if (total <= 0) {
    return res.status(400).json({ error: 'El total del pedido debe ser mayor a 0' });
  }

  const customerId = req.customer ? req.customer.customerId : null;
  const siteUrl = (process.env.SITE_URL || '').replace(/\/$/, '');

  try {
    // 1) Guardar el pedido (unpaid)
    const { orderId } = await createOrder(data, customerId);

    // 2) Crear la sesión de Stripe Checkout
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      customer_email: data.customerEmail,
      client_reference_id: String(orderId),
      metadata: { orderId: String(orderId) },
      success_url: `${siteUrl}/?checkout=success`,
      cancel_url: `${siteUrl}/?checkout=cancel`,
    });

    // 3) Guardar el id de sesión para reconciliación
    await pool.query('UPDATE orders SET stripe_session_id = ? WHERE id = ?', [session.id, orderId]);

    res.json({ url: session.url, orderId });
  } catch (err) {
    console.error('Error creando sesión de checkout:', err);
    res.status(500).json({ error: 'No se pudo iniciar el pago' });
  }
});

module.exports = router;
