# Despliegue y conexión — Cookies by Jackie

Guía para subir el sitio + backend a **Hostinger** (plan Business con Node.js y MySQL)
y dejar **conectados** el dashboard del dueño y los pagos con **Stripe**.

---

## 1. Arquitectura

```
Sitio (estático: index.html, mi-cuenta.html, script.js, style.css, assets/)
        │  fetch  →  API_BASE_URL
        ▼
Backend Node/Express (esta carpeta backend/)  ──►  MySQL
        ▲
Dashboard del dueño (en TU hosting)  ── llama a las mismas rutas /api/orders (admin)
        ▲
Stripe  ── webhook ──►  /api/webhooks/stripe   (marca los pedidos como pagados)
```

- El **pedido solo cuenta como válido cuando el pago se completa**: el checkout crea
  el pedido como `unpaid` y el webhook de Stripe lo pasa a `paid`. El dashboard, por
  defecto, **solo muestra pedidos pagados**.

---

## 2. Variables de entorno del backend

Copia `.env.example` a `.env` y rellena:

| Variable | Qué es |
|---|---|
| `PORT` | Puerto (Hostinger suele fijarlo; usa el que indique el panel). |
| `ALLOWED_ORIGINS` | Orígenes permitidos separados por coma. **Incluye el dominio del sitio Y el del dashboard.** Ej: `https://cookiesbyjackie.com,https://admin.tudominio.com` |
| `SITE_URL` | URL pública del sitio (para las URLs de retorno de Stripe). Sin barra final. |
| `DB_*` | Credenciales MySQL de Hostinger. |
| `ADMIN_USERNAME` / `ADMIN_PASSWORD_HASH` | Login del dashboard. Genera el hash: `node hash-password.js <tu-password>` |
| `JWT_SECRET` | Cadena aleatoria larga (≥32 chars). |
| `STRIPE_SECRET_KEY` | `sk_test_...` (pruebas) o `sk_live_...` (producción). |
| `STRIPE_WEBHOOK_SECRET` | `whsec_...` del endpoint de webhook (ver §5). |
| `STRIPE_CURRENCY` | Moneda ISO en minúsculas: `usd`, `mxn`, `eur`... |

---

## 3. Base de datos

- **BD nueva:** `mysql -u USER -p NOMBRE_BD < schema.sql`
- **BD que ya existe con datos** (la de Railway migrada), en orden:
  1. `mysql -u USER -p NOMBRE_BD < migration-stripe.sql` (columnas de pago)
  2. `mysql -u USER -p NOMBRE_BD < migration-status-history.sql` (timeline de estados del dashboard)

---

## 4. Cambiar la URL del backend en el frontend

Al migrar de Railway a Hostinger, actualiza `API_BASE_URL` en **DOS archivos**:

- `script.js`  (constante `API_BASE_URL`)
- `account.js` (constante `API_BASE_URL`)

Pon la URL del backend en Hostinger (ej. `https://api.tudominio.com`).
Sube también el `?v=` de `script.js` en `index.html` para romper caché.

---

## 5. Conectar Stripe (pruebas → producción)

1. Crea cuenta en https://stripe.com y activa **modo test** (toggle arriba a la derecha).
2. **Claves:** Developers → API keys → copia la *Secret key* (`sk_test_...`) a `STRIPE_SECRET_KEY`.
3. **Webhook:** Developers → Webhooks → *Add endpoint*:
   - URL: `https://TU-BACKEND/api/webhooks/stripe`
   - Evento: `checkout.session.completed`
   - Copia el *Signing secret* (`whsec_...`) a `STRIPE_WEBHOOK_SECRET`.
4. Reinicia el backend.
5. **Probar el flujo completo:**
   - En el sitio, agrega productos → checkout → "Proceder al Pago Seguro".
   - Serás redirigido a Stripe. Usa la tarjeta de prueba `4242 4242 4242 4242`,
     cualquier fecha futura, cualquier CVC/código postal.
   - Al pagar, Stripe redirige a `SITE_URL/?checkout=success` (carrito se vacía).
   - Verifica que el pedido aparece como **pagado** en el dashboard.
6. **Pruebas locales del webhook** (opcional): usa el Stripe CLI:
   `stripe listen --forward-to localhost:3001/api/webhooks/stripe`
7. **Pasar a producción:** repite con las claves `live` y un endpoint de webhook nuevo.

### Validación de precios (anti-manipulación)

El backend **valida cada precio contra un catálogo en el servidor**
(`catalog.js`) antes de cobrar con Stripe, para que nadie pueda editar el
precio desde las devtools del navegador (ej. pagar un pastel de $85.95 por
$0.50). Controlado por `PRICE_VALIDATION` (`strict` por defecto).

> ⚠️  **`catalog.js` debe mantenerse en sincronía con los precios del sitio.**
> Si cambias un precio en `index.html` (o los extras de cakes en `script.js`),
> actualiza también `catalog.js`, o los pedidos con ese precio serán rechazados.
>
> **Antes de lanzar:** prueba una compra de CADA tipo de producto (galleta,
> cupcake, macaron, mini, pie, prepack, y cada cake con y sin extras) para
> confirmar que ningún precio legítimo se rechaza. Si algo falla, revisa
> `catalog.js` o pon `PRICE_VALIDATION=warn` temporalmente mientras lo ajustas.

---

## 6. Conectar el dashboard del dueño

Repo del dashboard: `dashboardjackie` (estático, un solo `index.html`). Verificado
contra este backend con una prueba de integración real (MySQL + servidor) — el
contrato de API coincide punto por punto. Para conectarlo:

1. En `ALLOWED_ORIGINS` del backend, añade el dominio donde sirvas el dashboard.
2. En `index.html` del dashboard, edita las dos líneas marcadas `← CONECTAR`:
   - `const API_BASE = 'https://api.cookiesbyjackie.com';` → tu URL real de backend.
   - `const MOCK_MODE = true;` → cambiar a `false`.
3. Sube el dashboard a tu hosting (es 100% estático: `index.html`, `manifest.json`, `icon.svg`, `sw.js`).

**Autenticación:** `POST /api/auth/login` con `{ username, password }` → devuelve
`{ token }`. El dashboard lo guarda en `localStorage` y lo manda como
`Authorization: Bearer <token>` en las demás llamadas.

| Método | Ruta | Uso |
|---|---|---|
| POST | `/api/auth/login` | Login admin. |
| GET | `/api/orders` | Lista de pedidos **pagados** (por defecto). Filtros: `?status=`, `?date=` (fecha de retiro), `?order_date=` (fecha en que se hizo el pedido), `?payment=all\|paid\|unpaid`, `?page=`, `?limit=`. |
| GET | `/api/orders/:id` | Detalle de un pedido: items + `status_history` (timeline). |
| PATCH | `/api/orders/:id/status` | Cambia estado: `{ status: "nuevo\|confirmado\|listo\|entregado\|cancelado" }`. Registra la entrada correspondiente en el historial. |

> El dashboard no tiene ningún concepto de "pagado/no pagado" en su interfaz —
> simplemente no verá los pedidos `unpaid` (carritos abandonados en Stripe),
> que es el comportamiento buscado.

---

## 7. Checklist final antes de producción

- [ ] `npm install` en `backend/` en Hostinger.
- [ ] `.env` completo (con claves **live** de Stripe y `JWT_SECRET` fuerte).
- [ ] `schema.sql` (o `migration-stripe.sql`) ejecutado en la BD.
- [ ] `API_BASE_URL` actualizado en `script.js` y `account.js`.
- [ ] `ALLOWED_ORIGINS` incluye el sitio y el dashboard.
- [ ] Webhook de Stripe (live) creado y `STRIPE_WEBHOOK_SECRET` cargado.
- [ ] Prueba de compra real de punta a punta (pago → pedido pagado en dashboard).
