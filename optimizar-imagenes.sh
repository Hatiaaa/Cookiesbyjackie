#!/usr/bin/env bash
#
# optimizar-imagenes.sh — Convierte imágenes a WebP optimizado para la web.
#
# Uso:
#   ./optimizar-imagenes.sh [carpeta] [ancho_max] [calidad]
#
# Ejemplos:
#   ./optimizar-imagenes.sh                          # toda assets/, 800px, calidad 80
#   ./optimizar-imagenes.sh assets/macarons          # solo esa carpeta
#   ./optimizar-imagenes.sh "assets/Hero" 1920 82    # hero más grande
#
# Requiere ImageMagick (comando `magick`).
# Genera un .webp junto a cada .png/.jpg/.jpeg SIN borrar el original.
# Si el .webp ya existe y es más nuevo que el original, lo salta.

set -euo pipefail

DIR="${1:-assets}"
MAXW="${2:-800}"      # ancho máximo en px (no agranda imágenes más pequeñas)
QUALITY="${3:-80}"    # calidad WebP 0-100 (80 = buen equilibrio)

if ! command -v magick >/dev/null 2>&1; then
  echo "❌ Falta ImageMagick. Instálalo (p.ej. 'sudo pacman -S imagemagick')." >&2
  exit 1
fi

echo "📂 Carpeta:   $DIR"
echo "📐 Ancho máx: ${MAXW}px"
echo "🎚️  Calidad:   $QUALITY"
echo ""

total_antes=0
total_despues=0
contador=0

while IFS= read -r -d '' img; do
  out="${img%.*}.webp"

  # Saltar si el webp ya está actualizado
  if [[ -f "$out" && "$out" -nt "$img" ]]; then
    echo "⏭️  saltando (ya optimizado): $img"
    continue
  fi

  magick "$img" -resize "${MAXW}x>" -quality "$QUALITY" -define webp:method=6 "$out"

  antes=$(stat -c%s "$img")
  despues=$(stat -c%s "$out")
  total_antes=$((total_antes + antes))
  total_despues=$((total_despues + despues))
  contador=$((contador + 1))

  printf "✅ %s\n   %d KB → %d KB\n" "$img" $((antes/1024)) $((despues/1024))
done < <(find "$DIR" -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) -print0)

echo ""
if [[ $contador -eq 0 ]]; then
  echo "Nada que convertir."
else
  echo "🎉 $contador imágenes: $((total_antes/1024)) KB → $((total_despues/1024)) KB"
  echo "   (ahorro: $(( 100 - (total_despues*100/total_antes) ))%)"
  echo ""
  echo "⚠️  Recuerda actualizar las rutas en index.html de .png/.jpg a .webp."
fi
