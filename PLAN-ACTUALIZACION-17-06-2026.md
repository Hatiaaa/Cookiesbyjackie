# Plan de Actualización de Catálogo — Cookies by Jackie

**Fecha:** 17/06/2026
**Fuente:** `/home/xavier/Escritorio/WEB IMAGENES ACT 17-06-2026/` (fotos oficiales + 40 docx de instrucciones)
**Objetivo:** Reemplazar las fotos placeholder por las oficiales del cliente, actualizar precios/descripciones, añadir productos nuevos, implementar extras de personalización y borrar productos descontinuados.

---

## Reglas globales (decisiones ya tomadas con el cliente)

1. **Trabajo categoría por categoría.** Una categoría → verificar en preview → commit → push → siguiente. No avanzar hasta confirmar que la anterior quedó bien.
2. **Imágenes → WebP optimizado** con `optimizar-imagenes.sh` (calidad ~80, ancho máx 1080). Mantener el rendimiento PageSpeed ya logrado.
3. **Bilingüe ES/EN.** Los docx traen texto solo en inglés → el inglés va en la versión EN; **yo traduzco al español** para la versión ES. Ambos vía las claves i18n en `script.js`.
4. **Numeración de imágenes = orden del carrusel.** `1.jpg` = primera foto (la `active`), `2.jpg` = segunda, etc. (confirmado por el cliente).
5. **Extras pagados arrancan en "Sin extra / $0"** (cumplimiento Stripe — sin negative-option). El cliente activa el extra manualmente. NO pre-seleccionar Cherries/Bows/Cream Cheese.
6. **Panel Auto-Administrable está vacío** (`/api/v1/content` → `{}`), así que NO sobreescribe nada. Editamos HTML/`assets/` directamente. Mantener los atributos `data-panel-*` intactos.
7. **Cache-busting:** subir `?v=` de `style.css` y/o `script.js` en `index.html` cada vez que se modifiquen (regla aprendida — si no, Vercel sirve cacheado).
8. **Push tras cada categoría** a `origin/main` (Vercel auto-deploya).

---

## Estructura de assets propuesta

Crear carpeta nueva por producto con WebP numerados (carrusel) o por nombre de sabor (selectores):

```
assets/v2/
  cookies/<producto>/1.webp …
  cakes/<producto>/1.webp …
  cupcakes/<producto>/1.webp …
  pastries/<producto>/1.webp …
  macarons/<producto>/1.webp …
  mini/<producto>/1.webp …
  pies/<producto>/1.webp …
  prepacks/<producto>/1.webp …
  flavors/cookies/<Nombre Sabor>.webp   (23 sabores — selector Pick 6/12)
  flavors/mini/<Nombre Sabor>.webp      (17 sabores — selector Mini 6/12/24)
```
(El nombre exacto de carpeta se confirma al implementar cada producto.)

---

## FASE 0 — Preparación
- [ ] Verificar `magick` (ImageMagick) disponible.
- [ ] Convertir todo el árbol de `WEB IMAGENES ACT` a WebP dentro de `assets/v2/` respetando numeración y nombres.
- [ ] Revisar visualmente algunas WebP para confirmar calidad.

---

## FASE 1 — 🍪 COOKIES (pestaña `cookies-tab`, 4 productos)

| # | Producto | Precio actual → nuevo | Fotos carrusel | Acción |
|---|----------|----------------------|----------------|--------|
| 1 | Specialty Cookie Box | $19.95 → **$19.95** (=) | 5 (`1.png`+`2-5.jpg`) | Reemplazar fotos + desc |
| 2 | Pick 6 Cookie Box | $30.00 → **$29.95** | 7 | Precio + fotos + desc |
| 3 | Pick 12 Cookie Box | $55.95 → **$55.95** (=) | 7 | Fotos + desc |
| 4 | Mini Cookies Catering box | $62.50 → **$55.95** | 6 (falta `2`) | Precio + fotos + desc |

**Descripciones nuevas (EN del cliente → traducir ES):**
- Specialty: "A delicious assortment of four freshly baked cookies: Chocolate Chip, Salted Caramel Chocolate Chip, Brookie, and Snickerdoodle."
- Pick 6: "Create your own box of 6 freshly baked cookies from our delicious selection of flavors:"
- Pick 12: "Create your own box of 12 freshly baked cookies with your favorite flavors:"
- Mini Catering: "A box of 25 freshly baked cookies featuring Chocolate Chip, Oreo Chocolate Chip, M&M Chocolate Chip, Snickerdoodle, and Sugar Cookies."

⚠️ Nota: la carpeta "Mini Cookies Catering" no tiene `2.jpg` (salta de 1 a 3). Confirmar si es intencional o falta una foto.

---

## FASE 2 — 🎂 CAKES (pestaña `cakes-tab`, 6 → **7** productos)

| # | Producto | Precio nuevo | Fotos | Extras nuevos |
|---|----------|-------------|-------|---------------|
| 1 | Vintage Heart Cakes | $85.95 | 3 | Piping Color, Cake Message (25c), Message Color, Cherries +$8, Bows +$8 |
| 2 | Vintage Round Cakes | $45.95 | 3 | igual que Heart |
| 3 | Naked Cake | 8" $49.95 / 10" $59.95 | 2 | Selector tamaño (ya existe), Cream Cheese frosting **+$5** |
| 4 | 10″ Chocolate Chip Cookie Cake | $39.95 | 1 | Cake Message + Message Color |
| 5 | Chocolate Fudge Brownie Cake **12 pc** | $52.95 | 1 | Cake Message + Message Color |
| 6 | Chocolate Fudge Brownie Cake **24 pc** *(NUEVO)* | $98.95 | 1 | Cake Message + Message Color |
| 7 | Double-Layered 10″ CCC Cake | $75.95 | 1 | Cake Message + Message Color |

**Cambios estructurales:**
- Hoy hay 1 sola "Chocolate Fudge Brownie Cake". Desdoblar en **12 pc** y **24 pc**.
- Double-Layered: precio actual $79.95 → **$75.95**.
- **Extras (Stripe-safe):** Cherries/Bows arrancan en "No Extra $0.00". Cream Cheese arranca en buttercream normal; si eligen Cream Cheese, +$5.

**Piping Color (10 opciones):** White, Pink, Green, Yellow, Orange, Purple, Red, Coral, Burgundy, Aquamarine.
**Message Color (3):** White, Red, Blue Pink.
**Cake Message:** input de texto, máx 25 caracteres.

**Descripciones nuevas:** (ver docx; ej. Naked: "Choose your size: 8\" (serves 10–12) or 10\" (serves 15–18), then select your flavor and frosting. Please place your order at least 3 days in advance:")

---

## FASE 3 — 🧁 CUPCAKES (pestaña `cupcakes-tab`, 3 productos)

| # | Producto | Precio nuevo | Fotos |
|---|----------|-------------|-------|
| 1 | Cupcakes 6 pk | $26.95 | 7 |
| 2 | Cupcakes 12 pk | $67.50 | 7 |
| 3 | Cupcakes 24 pk | $132.50 | 7 |

Descripciones: "Choose Any 6/12/24 Cupcakes from Our Available Flavors:". Verificar precios actuales y selector de sabores de cupcakes.

---

## FASE 4 — 🥐 PASTRIES (pestaña `pastries-tab`, 6 → **5** productos)

| # | Producto | Precio nuevo | Fotos | Acción |
|---|----------|-------------|-------|--------|
| 1 | Cinnamon Rolls 6 pk | $46.95 | 1 | Precio (era $37.50) + foto |
| 2 | Banana Bread loaf | $35.50 | 1 | Precio (era $28.50) + foto |
| 3 | Blueberry Scone 8 pk | $49.95 | 1 | Precio (era $39.90) + foto |
| 4 | Chocolate Fudge Brownies 6 pk | $29.50 | 1 | Precio (era $23.70) + foto |
| 5 | Donuts 6 pk | $35.50 | 7 | Precio (era $28.50) + fotos |
| — | ~~Buttermilk Biscuit 6 pk~~ | — | — | **BORRAR** (docx: "ya no se va a vender") |

Descripciones nuevas (ej. Donuts: "6 assorted donuts: Glazed, Cinnamon Sugar, Fruity Pebbles, Oreo, Strawberry Sprinkles, and Chocolate Sprinkles.")
⚠️ Brownies doc dice "8 Chocolate Fudge Brownies" pero el nombre es "6 pk" — confirmar 6 u 8 unidades.

---

## FASE 5 — 🍬 MACARONS (pestaña `macarons-tab`, 3 productos)

| # | Producto | Precio nuevo | Fotos |
|---|----------|-------------|-------|
| 1 | French Macarons 6 pk | $24.50 | 7 (falta `2`) |
| 2 | French Macarons 12 pk | $46.00 | 7 (falta `2`) |
| 3 | French Macarons 24 pk | $91.00 | 7 (falta `2`) |

Nombre actual "France Macarons" → **"French Macarons"**. Descripción: "Choose any 6/12/24 French macarons from our selection of flavors:". Verificar selector de sabores de macarons.

---

## FASE 6 — 🍰 MINI INDIVIDUAL (pestaña `mini-tab`, 3 productos)

| # | Producto | Precio nuevo | Fotos |
|---|----------|-------------|-------|
| 1 | Mini Individual Cakes / Cheesecake 6 pk | $56.25 | 7 |
| 2 | Mini Individual Cakes / Cheesecake 12 pk | $112.50 | 7 |
| 3 | Mini Individual Cakes / Cheesecake 24 pk | $225.00 | 7 |

Descripción: "Choose any 6/12/24 Individual Cakes / Cheesecake from our delicious selection of freshly made favorites:"

---

## FASE 7 — 🥧 PIES (pestaña `pies-tab`, 3 productos)

| # | Producto | Precio | Fotos |
|---|----------|--------|-------|
| 1 | 9" Apple Caramel Crumb Pie | $45.95 | 1 |
| 2 | 9" Bourbon Pecan Pie | $45.95 | 1 |
| 3 | 9" Peach Crumb Pie | $45.95 | 1 |

Nombre #2: "Pecan Pie" → **"Bourbon Pecan Pie"**. Descripciones largas nuevas (ver docx, "(9 slices)…").

---

## FASE 8 — 🎁 PREPACKS (pestaña `prepacks-tab`, 6 → **11** productos)

| # | Producto | Precio nuevo | Fotos | Acción |
|---|----------|-------------|-------|--------|
| 1 | Macarons 6 pk | $19.50 | 7 | Fotos + desc |
| 2 | Mini Cupcake Pack 12pc | $24.00 | 7 | Precio (era $19.50) + fotos + desc rica |
| 3 | Cookies Specialty 6 pk | $44.00 ⚠️ | 7 | Precio (era $28.50) |
| 4 | Macarons 12 pk | $46.25 | 7 | Precio (era $19.50) |
| 5 | Cookies Specialty 12 pk | $36.95 | 7 | Fotos + desc |
| 6 | Cupcakes Specialty 12 pk | $69.95 | 7 | Precio (era $55.95) + desc detallada |
| 7 | The Big Celebration Bash Bundle #1 *(NUEVO)* | $39.95 | 4 | Crear |
| 8 | The Big Celebration Bash Bundle #2 *(NUEVO)* | $154.95 | 5 | Crear + Cake Message |
| 9 | The Big Celebration Bash Bundle #3 *(NUEVO)* | $88.95 | 5 | Crear + Cake Message |
| 10 | Cookies and Brownies Bundles *(NUEVO)* | $36.95 | 5 | Crear |
| 11 | Cookie Lovers Bundles *(NUEVO)* | $37.50 | 5 | Crear |

⚠️ **Revisar con cliente:** Cookies Specialty **6 pk = $44.00** sale MÁS CARO que el **12 pk = $36.95**. Probable typo del cliente.
- Los prepacks hoy usan imagen única → varios traen 4-7 fotos → **añadir carrusel** a esos.
- Bundles #2 y #3 incluyen un "10\" Cookie Cake" personalizable → Cake Message + Message Color.

---

## FASE 9 — 🎨 LISTAS MAESTRAS DE SABORES (selectores) — `script.js`

**Selector de Galletas** (`allCookies`, hoy 22) → actualizar a las **23** de `MISELANIOS/Cookies/` y sus fotos:
- Cambio: "Pistachio White Chocolate Chip Cookie" → **"Pistachio Cream White Chocolate Chip Cookie"**.
- Nuevo: **"Rainbow Sprinkle Sugar Cookie"**.
- Las fotos pasan de `assets/Pick 6 Cookie Box/<nombre>.png` → `assets/v2/flavors/cookies/<nombre>.webp`.

**Selector Mini Individual** (hoy ~16) → actualizar a los **17** de `MISELANIOS/Mini Individual/`:
Cannoli Cheesecake, Caramel Cheesecake, Carrot Cake, Chocolate Cake, Chocolate Cheesecake, Chocolate Dipped Cheesecake, Classic Cheesecake, Confetti Cake, Confetti Cheesecake, Fruity Pebbles Cheesecake, Oreo Cheesecake, Red Velvet Cake, Red Velvet Cheesecake, Strawberry Cheesecake, Tiramisú, Tres Leches.
- Nuevos vs actual: **Chocolate Cake, Red Velvet Cake, Tres Leches, Carrot Cake, Confetti Cake** (cakes además de cheesecakes).

**Selectores Cupcakes y Macarons:** confirmar listas de sabores (los docx de prepacks dan pistas de sabores de cupcakes/macarons).

---

## FASE 10 — Extras de personalización de cakes — `script.js` + `style.css`

Extender el `cake-modal` y `cakeOptions`:
- **`vintage`:** añadir Cake Message (input máx 25), Message Color (3), Cherries (No Extra $0 / +$8), Bows (No Extra $0 / Pink/White/Red +$8). Mantener Piping Color (ya existe como `colors`).
- **`naked`:** Cream Cheese Frosting suma +$5 al seleccionarla (hoy es gratis).
- **Nuevo tipo `cookiecake`:** para 10" CCC, Brownie 12/24, Double-Layered, Bundle #2/#3 → Cake Message + Message Color.
- Recalcular precio en vivo según extras. Reflejar extras en el detalle del carrito.
- **Defaults Stripe-safe:** todos los extras pagados inician en $0.

---

## FASE 11 — Cierre
- [ ] Verificación visual completa en preview (desktop + móvil).
- [ ] Revisar consola sin errores, carruseles funcionando, carrito con precios correctos.
- [ ] Subir `?v=` final de assets modificados.
- [ ] Commit + push final.
- [ ] `mem_session_summary`.

---

## Dudas — RESUELTAS (17/06/2026)
1. **Mini Cookies Catering** falta `2.jpg`: ✅ error de enumeración del cliente. Seguir el orden tal cual (1,3,4,5,6,7).
2. **Brownies 6 pk (pastries)**: ✅ son **6** brownies (en la foto se ven 6). Corregir el "8" del docx → 6.
3. **Cookies Specialty 6pk $44 > 12pk $36.95**: ✅ dejar tal cual por ahora; el cliente lo revisará después.
4. **Listas de sabores Cupcakes y Macarons**: ✅ mantener las que YA están en la web (no tocar).
5. **Macarons sin `2.jpg`**: ✅ error de enumeración. Seguir el orden tal cual (1,3,4,…,8).

---

## Orden de ejecución
FASE 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10 → 11
Cada fase: editar → optimizar imgs → verificar preview → commit → push → ✅ → siguiente.
