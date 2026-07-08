-- Migración para BD YA EXISTENTE (la de Railway/Hostinger con datos).
-- Añade el soporte de pagos Stripe sin borrar nada.
-- Ejecutar una sola vez: mysql -u usuario -p cookiesbyjackie < migration-stripe.sql

ALTER TABLE orders
  ADD COLUMN payment_status        VARCHAR(20)  NOT NULL DEFAULT 'unpaid' AFTER status,
  ADD COLUMN stripe_session_id     VARCHAR(255) NULL AFTER payment_status,
  ADD COLUMN stripe_payment_intent VARCHAR(255) NULL AFTER stripe_session_id;

CREATE INDEX idx_orders_payment_status ON orders(payment_status);

-- Los pedidos que ya existían quedan como 'unpaid' y NO se mostrarán en el
-- dashboard (que filtra a 'paid' por defecto). Si son pedidos reales que
-- quieres seguir viendo, márcalos como pagados descomentando la línea:
-- UPDATE orders SET payment_status = 'paid' WHERE created_at < NOW();
