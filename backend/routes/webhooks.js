const pool = require('../db');

const stripe = process.env.STRIPE_SECRET_KEY
  ? require('stripe')(process.env.STRIPE_SECRET_KEY)
  : null;

// Handler del webhook de Stripe. Se monta con express.raw (cuerpo sin parsear)
// porque la verificación de firma necesita el body original en crudo.
// Marca el pedido como 'paid' cuando el pago se completa.
async function stripeWebhookHandler(req, res) {
  if (!stripe || !process.env.STRIPE_WEBHOOK_SECRET) {
    return res.status(503).send('Webhook no configurado');
  }

  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Firma de webhook inválida:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        // Solo marcar pagado si el pago realmente quedó cubierto
        if (session.payment_status === 'paid') {
          const orderId = (session.metadata && session.metadata.orderId) || session.client_reference_id;
          if (orderId) {
            await pool.query(
              "UPDATE orders SET payment_status = 'paid', stripe_payment_intent = ? WHERE id = ?",
              [session.payment_intent || null, orderId]
            );
          }
        }
        break;
      }
      default:
        // Otros eventos se ignoran silenciosamente
        break;
    }
    res.json({ received: true });
  } catch (err) {
    console.error('Error procesando webhook:', err);
    res.status(500).send('Error interno');
  }
}

module.exports = { stripeWebhookHandler };
