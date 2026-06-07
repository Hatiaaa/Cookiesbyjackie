/**
 * panel.js — Cookies by Jackie
 * Conecta este sitio al panel auto-administrable de Estudio Xaga.
 *
 * Qué hace:
 *  1. Carga bloques de contenido y los aplica a elementos con data-panel-content="clave"
 *  2. Carga imágenes y las aplica a elementos con data-panel-image="clave"
 *  3. Re-aplica los valores cuando el usuario cambia de idioma (integración con el i18n
 *     del sitio: script.js emite 'panel:langchange' al final de changeLanguage())
 *
 * Los valores del panel tienen prioridad sobre los textos i18n.
 * Si un campo no tiene valor en el panel, el texto i18n original permanece.
 */
;(function () {
  'use strict'

  var PANEL_URL = 'https://panel.estudioxaga.com'
  var API_KEY   = 'sk_5lMFjzLJZhY19RbDaco4Y8QllTUf7wDnTM_-_aB1r_Y'
  var HEADERS   = { 'X-API-Key': API_KEY }

  // Caché de contenido — se rellena en loadData() y se reutiliza en reapply()
  var __content = null

  // ── Aplicar contenido ─────────────────────────────────────────────────────

  function applyContent(content) {
    if (!content) return
    __content = content

    // Textos — reemplaza el contenido de elementos con data-panel-content
    document.querySelectorAll('[data-panel-content]').forEach(function (el) {
      var key   = el.getAttribute('data-panel-content')
      var block = content[key]
      if (!block || block.value == null || block.value === '') return

      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = block.value
      } else {
        el.innerHTML = block.value
      }
    })

    // Imágenes — actualiza src/background de elementos con data-panel-image
    document.querySelectorAll('[data-panel-image]').forEach(function (el) {
      var key   = el.getAttribute('data-panel-image')
      var block = content[key]
      if (!block || block.value == null || block.value === '') return
      var url = block.value

      if (el.tagName === 'IMG') {
        // Quita srcset/sizes para que el navegador no ignore el nuevo src
        el.removeAttribute('srcset')
        el.removeAttribute('sizes')
        el.src = url
      } else {
        el.style.backgroundImage = 'url("' + url + '")'
      }
    })

    // Precios — si el precio viene del panel, también actualizamos el atributo
    // data-price usado por el carrito para que el valor sea consistente
    document.querySelectorAll('[data-panel-content][data-price]').forEach(function (el) {
      var key   = el.getAttribute('data-panel-content')
      var block = content[key]
      if (!block || block.value == null || block.value === '') return
      // Extraer número del precio ($12.00 → 12.00)
      var num = parseFloat(block.value.replace(/[^0-9.]/g, ''))
      if (!isNaN(num)) {
        el.setAttribute('data-price', num)
      }
    })
  }

  // Re-aplica el contenido del panel sobre el i18n al cambiar de idioma
  function reapply() {
    if (__content) applyContent(__content)
  }

  // ── Carga de datos ────────────────────────────────────────────────────────

  function loadData() {
    fetch(PANEL_URL + '/api/v1/content', { headers: HEADERS })
      .then(function (r) {
        if (!r.ok) throw new Error('status ' + r.status)
        return r.json()
      })
      .then(function (res) {
        applyContent(res.data)
      })
      .catch(function () {
        // Silent fail — el contenido original del sitio permanece visible
      })
  }

  // ── Init ──────────────────────────────────────────────────────────────────

  function init() {
    loadData()

    // Escuchar cambios de idioma emitidos por script.js
    // (se llama al final de changeLanguage() con new CustomEvent('panel:langchange'))
    document.addEventListener('panel:langchange', reapply)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
