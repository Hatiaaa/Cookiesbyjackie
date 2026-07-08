-- Cookies by Jackie — esquema de base de datos (MySQL/MariaDB)
-- Ejecutar una sola vez en una BD nueva: mysql -u usuario -p cookiesbyjackie < schema.sql
-- (Si la BD YA existe con datos, usa en su lugar migration-stripe.sql)

CREATE TABLE IF NOT EXISTS customers (
  id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  created_at     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  name           VARCHAR(255) NOT NULL,
  email          VARCHAR(255) NOT NULL UNIQUE,
  phone          VARCHAR(50)  NOT NULL,
  birthday       DATE         NULL,
  password_hash  VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS orders (
  id                    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  created_at            DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status                VARCHAR(20)  NOT NULL DEFAULT 'nuevo',   -- nuevo|confirmado|listo|entregado|cancelado (validado en la app)
  payment_status        VARCHAR(20)  NOT NULL DEFAULT 'unpaid',  -- unpaid|paid|refunded
  stripe_session_id     VARCHAR(255) NULL,
  stripe_payment_intent VARCHAR(255) NULL,
  customer_id           INT UNSIGNED NULL,
  customer_name         VARCHAR(255) NOT NULL,
  customer_email        VARCHAR(255) NOT NULL,
  customer_phone        VARCHAR(50)  NOT NULL,
  pickup_date           DATE         NOT NULL,
  pickup_time           TIME         NOT NULL,
  notes                 TEXT,
  language              VARCHAR(2)   NOT NULL DEFAULT 'en',
  total_amount          DECIMAL(10,2),
  -- FK a nivel de tabla (la sintaxis inline `REFERENCES` en la columna la ignora InnoDB)
  CONSTRAINT fk_orders_customer FOREIGN KEY (customer_id)
    REFERENCES customers(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS order_items (
  id              INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  order_id        INT UNSIGNED NOT NULL,
  product_title   VARCHAR(255) NOT NULL,
  unit_price      DECIMAL(10,2) NOT NULL,
  quantity        INT          NOT NULL DEFAULT 1,
  options_details TEXT,
  CONSTRAINT fk_order_items_order FOREIGN KEY (order_id)
    REFERENCES orders(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS order_status_history (
  id          INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  order_id    INT UNSIGNED NOT NULL,
  status      VARCHAR(20)  NOT NULL,
  changed_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  changed_by  VARCHAR(100) NOT NULL DEFAULT 'sistema',
  CONSTRAINT fk_status_history_order FOREIGN KEY (order_id)
    REFERENCES orders(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_orders_pickup_date     ON orders(pickup_date);
CREATE INDEX idx_orders_status          ON orders(status);
CREATE INDEX idx_orders_payment_status  ON orders(payment_status);
CREATE INDEX idx_orders_customer        ON orders(customer_id);
CREATE INDEX idx_order_items_order      ON order_items(order_id);
CREATE INDEX idx_customers_birthday     ON customers(birthday);
CREATE INDEX idx_status_history_order   ON order_status_history(order_id);
