-- Migración para BD YA EXISTENTE.
-- Añade la tabla de historial de estados (timeline que muestra el dashboard
-- en el detalle de cada pedido). Ejecutar una sola vez:
-- mysql -u usuario -p cookiesbyjackie < migration-status-history.sql

CREATE TABLE IF NOT EXISTS order_status_history (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  order_id    INT UNSIGNED NOT NULL,
  status      VARCHAR(20)  NOT NULL,
  changed_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  changed_by  VARCHAR(100) NOT NULL DEFAULT 'sistema',
  CONSTRAINT fk_status_history_order FOREIGN KEY (order_id)
    REFERENCES orders(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_status_history_order ON order_status_history(order_id);

-- Pedidos que ya existían quedan sin historial previo (el timeline empezará
-- vacío para ellos); los pedidos nuevos sí lo registran automáticamente.
-- Opcional: sembrar un registro inicial "nuevo" para los pedidos existentes:
-- INSERT INTO order_status_history (order_id, status, changed_by, changed_at)
--   SELECT id, status, 'sistema', created_at FROM orders;
