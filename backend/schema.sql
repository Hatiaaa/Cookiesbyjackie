-- Cookies by Jackie — esquema de base de datos (MySQL/MariaDB)
-- Ejecutar una sola vez: mysql -u usuario -p cookiesbyjackie < schema.sql

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
  id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  created_at     DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status         VARCHAR(20)  NOT NULL DEFAULT 'nuevo'
                 CHECK (status IN ('nuevo','confirmado','listo','entregado','cancelado')),
  customer_id    INT UNSIGNED NULL REFERENCES customers(id) ON DELETE SET NULL,
  customer_name  VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50)  NOT NULL,
  pickup_date    DATE         NOT NULL,
  pickup_time    TIME         NOT NULL,
  notes          TEXT,
  language       VARCHAR(2)   NOT NULL DEFAULT 'en',
  total_amount   DECIMAL(10,2)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS order_items (
  id              INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  order_id        INT UNSIGNED NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  product_title   VARCHAR(255) NOT NULL,
  unit_price      DECIMAL(10,2) NOT NULL,
  quantity        INT          NOT NULL DEFAULT 1,
  options_details TEXT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE INDEX idx_orders_pickup_date  ON orders(pickup_date);
CREATE INDEX idx_orders_status       ON orders(status);
CREATE INDEX idx_orders_customer     ON orders(customer_id);
CREATE INDEX idx_order_items_order   ON order_items(order_id);
CREATE INDEX idx_customers_birthday  ON customers(birthday);
