require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { router: ordersRouter } = require('./routes/orders');
const authRouter = require('./routes/auth');
const customersRouter = require('./routes/customers');
const checkoutRouter = require('./routes/checkout');
const { stripeWebhookHandler } = require('./routes/webhooks');

const app = express();

// CORS multi-origen: lista separada por comas en ALLOWED_ORIGINS
// (compatibilidad con ALLOWED_ORIGIN singular). '*' permite todos (solo dev).
const allowedOrigins = (process.env.ALLOWED_ORIGINS || process.env.ALLOWED_ORIGIN || '*')
  .split(',').map(s => s.trim()).filter(Boolean);

app.use(cors({
  origin(origin, cb) {
    // Sin origin = peticiones server-to-server / curl / mismo origen
    if (allowedOrigins.includes('*') || !origin || allowedOrigins.includes(origin)) {
      return cb(null, true);
    }
    return cb(new Error(`Origen no permitido por CORS: ${origin}`));
  },
  methods: ['GET', 'POST', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Webhook de Stripe: DEBE ir antes de express.json() y con el body en crudo
// para poder verificar la firma.
app.post('/api/webhooks/stripe', express.raw({ type: 'application/json' }), stripeWebhookHandler);

app.use(express.json());

app.use('/api/orders', ordersRouter);
app.use('/api/auth', authRouter);
app.use('/api/customers', customersRouter);
app.use('/api/checkout', checkoutRouter);

app.get('/api/health', (_req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend corriendo en puerto ${PORT}`));
