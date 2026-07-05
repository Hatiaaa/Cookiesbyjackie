require('dotenv').config();
const express = require('express');
const cors = require('cors');

const ordersRouter = require('./routes/orders');
const authRouter = require('./routes/auth');
const customersRouter = require('./routes/customers');

const app = express();

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN || '*',
  methods: ['GET', 'POST', 'PATCH'],
}));

app.use(express.json());

app.use('/api/orders', ordersRouter);
app.use('/api/auth', authRouter);
app.use('/api/customers', customersRouter);

app.get('/api/health', (_req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend corriendo en puerto ${PORT}`));
