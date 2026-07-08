/*
==========================================================================
  CATÁLOGO DE PRECIOS — validación server-side (anti-manipulación)
==========================================================================
  Los precios llegan desde el carrito del cliente (navegador) y NO deben
  confiarse. Aquí validamos que el precio de cada línea sea uno REAL de la
  tienda antes de cobrar con Stripe. Bloquea el ataque de editar el precio
  (ej. cambiar $85.95 a $0.50) desde las devtools.

  FUENTE DE VERDAD: los precios del sitio (index.html data-price + los
  extras/tamaños de cakes en script.js -> cakeOptions).
  ⚠️  SI CAMBIAS PRECIOS EN EL SITIO, ACTUALIZA ESTE ARCHIVO.
==========================================================================
*/

// Trabajamos en centavos (enteros) para evitar problemas de coma flotante.
const toCents = (n) => Math.round(parseFloat(String(n).replace(/[^0-9.]/g, '')) * 100);

// --- Precios fijos de la tienda (data-price en index.html) -----------------
// Galletas, cupcakes, macarons, mini, pies, prepacks, bundles y cakes de
// precio fijo. Los sabores/opciones NO cambian el precio en estos productos.
const FIXED_PRICES = [
  24.50, 26.95, 29.95, 39.95, 45.95, 46.00, 49.95, 52.95, 55.95, 56.25,
  67.50, 75.95, 85.95, 91.00, 98.95, 109.95, 112.50, 132.50, 179.95, 225.00,
];

// --- Cakes con precio VARIABLE (base + extras aditivos) --------------------
// Validamos por NOMBRE exacto: el precio debe ser una combinación alcanzable.
//   extras: lista de grupos; cada grupo son los montos posibles de ese extra.
//   bases:  si el precio base depende de una opción (tamaño), lista de bases.
const CAKES = {
  // Vintage: cerezas (0 / +8) y moños (0 / +8)
  'Vintage Heart Cakes': { base: 85.95, extras: [[0, 8], [0, 8]] },
  'Vintage Round Cakes': { base: 45.95, extras: [[0, 8], [0, 8]] },
  // Naked: tamaño 8" (49.95) o 10" (59.95) + frosting cream cheese (0 / +5)
  'Naked Cake': { bases: [49.95, 59.95], extras: [[0, 5]] },
  // Tipo "message" (sin extras que sumen): precio fijo
  'Chocolate Fudge Brownie Cake 12 pc': { base: 52.95, extras: [] },
  'Chocolate Fudge Brownie Cake 24 pc': { base: 98.95, extras: [] },
  'The Big Celebration Bash Bundle #2': { base: 179.95, extras: [] },
  'The Big Celebration Bash Bundle #3': { base: 109.95, extras: [] },
};

// Conjunto de precios alcanzables (en centavos) para un cake dado.
function achievableCents(cake) {
  const bases = cake.bases || [cake.base];
  let sums = [0];
  for (const group of (cake.extras || [])) {
    const next = [];
    for (const s of sums) for (const e of group) next.push(s + e);
    sums = next;
  }
  const set = new Set();
  for (const b of bases) for (const s of sums) set.add(toCents(b) + toCents(s));
  return set;
}

// Cache de sets por cake
const CAKE_CENTS = {};
for (const [name, cake] of Object.entries(CAKES)) {
  CAKE_CENTS[name] = achievableCents(cake);
}

// Lista blanca global (centavos): fijos + todos los alcanzables de cakes.
const VALID_CENTS = new Set(FIXED_PRICES.map(toCents));
for (const set of Object.values(CAKE_CENTS)) {
  for (const c of set) VALID_CENTS.add(c);
}

const normalize = (s) => String(s || '').trim().replace(/\s+/g, ' ');

// Valida el precio unitario de una línea. Devuelve { ok, reason }.
function validateUnitPrice(title, unitPrice) {
  const cents = toCents(unitPrice);
  const t = normalize(title);

  // Si el título coincide con un cake conocido, exigir precio alcanzable.
  const cakeName = Object.keys(CAKES).find((n) => normalize(n) === t);
  if (cakeName) {
    if (CAKE_CENTS[cakeName].has(cents)) return { ok: true };
    return { ok: false, reason: `Precio no válido para "${cakeName}"` };
  }

  // Resto de productos: debe ser un precio real de la tienda.
  if (VALID_CENTS.has(cents)) return { ok: true };
  return { ok: false, reason: `Precio no reconocido para "${t}"` };
}

// Valida todas las líneas de un carrito. Devuelve null si todo OK, o
// { title, price, reason } de la primera línea inválida.
function validateCart(orderItems) {
  for (const item of orderItems) {
    const r = validateUnitPrice(item.title, item.price);
    if (!r.ok) {
      return { title: item.title, price: item.price, reason: r.reason };
    }
  }
  return null;
}

module.exports = { validateUnitPrice, validateCart, VALID_CENTS, CAKE_CENTS };
