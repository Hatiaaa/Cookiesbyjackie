/*
==========================================================================
   MI CUENTA — Historial de pedidos, sugerencias y datos del cliente
==========================================================================
*/

document.addEventListener('DOMContentLoaded', () => {
    const API_BASE_URL = 'https://aqua-guanaco-736873.hostingersite.com';

    const translations = {
        es: {
            back_to_shop: "Volver a la tienda",
            account_logout: "Cerrar sesión",
            account_page_title: "Mi Cuenta",
            account_greeting_prefix: "Hola,",
            account_member_since: "Cliente desde",
            account_suggestions_title: "Tus favoritos",
            account_suggestions_subtitle: "Basado en lo que más pides",
            account_suggestion_times: "veces pedido",
            account_suggestion_add: "Agregar de nuevo",
            account_orders_title: "Historial de pedidos",
            orders_empty: "Aún no tienes pedidos.",
            orders_loading: "Cargando tus pedidos...",
            orders_error: "No se pudieron cargar tus pedidos. Intenta de nuevo.",
            orders_reorder: "Volver a pedir",
            order_status_nuevo: "Nuevo",
            order_status_confirmado: "Confirmado",
            order_status_listo: "Listo",
            order_status_entregado: "Entregado",
            order_status_cancelado: "Cancelado",
            account_guest_title: "Inicia sesión para ver tu cuenta",
            account_guest_desc: "Necesitas iniciar sesión para ver tu historial de pedidos y tus datos.",
            account_guest_btn: "Ir a iniciar sesión",
        },
        en: {
            back_to_shop: "Back to shop",
            account_logout: "Log out",
            account_page_title: "My Account",
            account_greeting_prefix: "Hi,",
            account_member_since: "Customer since",
            account_suggestions_title: "Your favorites",
            account_suggestions_subtitle: "Based on what you order most",
            account_suggestion_times: "times ordered",
            account_suggestion_add: "Add again",
            account_orders_title: "Order history",
            orders_empty: "You don't have any orders yet.",
            orders_loading: "Loading your orders...",
            orders_error: "Couldn't load your orders. Please try again.",
            orders_reorder: "Reorder",
            order_status_nuevo: "New",
            order_status_confirmado: "Confirmed",
            order_status_listo: "Ready",
            order_status_entregado: "Delivered",
            order_status_cancelado: "Cancelled",
            account_guest_title: "Log in to view your account",
            account_guest_desc: "You need to log in to see your order history and account details.",
            account_guest_btn: "Go to log in",
        },
    };

    let currentLang = 'en';

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
        });
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = btn.dataset.lang;
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b === btn));
            applyTranslations();
            if (session) renderAll();
        });
    });

    function getCustomerSession() {
        const token = localStorage.getItem('customerToken');
        const dataRaw = localStorage.getItem('customerData');
        if (!token || !dataRaw) return null;
        try {
            return { token, customer: JSON.parse(dataRaw) };
        } catch {
            return null;
        }
    }

    function clearCustomerSession() {
        localStorage.removeItem('customerToken');
        localStorage.removeItem('customerData');
        window.location.href = 'index.html';
    }

    const session = getCustomerSession();
    const guestState = document.getElementById('account-guest-state');
    const contentState = document.getElementById('account-page-content');

    applyTranslations();

    if (!session) {
        guestState.style.display = 'block';
        return;
    }
    contentState.style.display = 'block';

    document.getElementById('account-page-logout').addEventListener('click', clearCustomerSession);

    function formatDate(raw) {
        const d = new Date(raw);
        if (isNaN(d)) return raw;
        return d.toLocaleDateString(currentLang === 'es' ? 'es-ES' : 'en-US', {
            year: 'numeric', month: 'short', day: 'numeric',
        });
    }

    function renderAccountInfo(profile) {
        const t = translations[currentLang];
        document.getElementById('account-page-greeting').textContent = `${t.account_greeting_prefix} ${profile.name}`;
        const card = document.getElementById('account-info-card');
        card.innerHTML = `
            <div class="account-info-row"><i class="fas fa-envelope"></i> ${profile.email}</div>
            <div class="account-info-row"><i class="fas fa-phone"></i> ${profile.phone}</div>
            ${profile.birthday ? `<div class="account-info-row"><i class="fas fa-cake-candles"></i> ${formatDate(profile.birthday)}</div>` : ''}
            ${profile.created_at ? `<div class="account-info-row"><i class="fas fa-star"></i> ${t.account_member_since} ${formatDate(profile.created_at)}</div>` : ''}
        `;
    }

    let allOrders = [];
    let currentProfile = session.customer;

    function doReorder(items) {
        localStorage.setItem('pendingReorder', JSON.stringify(items));
        window.location.href = 'index.html';
    }

    function renderSuggestions() {
        const t = translations[currentLang];
        const section = document.getElementById('account-suggestions-section');
        const grid = document.getElementById('suggestions-grid');

        const counts = {};
        allOrders.forEach(order => {
            (order.items || []).forEach(it => {
                const key = it.product_title;
                if (!counts[key]) counts[key] = { title: it.product_title, price: it.unit_price, count: 0 };
                counts[key].count += parseInt(it.quantity) || 1;
            });
        });
        const top = Object.values(counts).sort((a, b) => b.count - a.count).slice(0, 3);

        if (top.length === 0) {
            section.style.display = 'none';
            return;
        }
        section.style.display = 'block';
        grid.innerHTML = top.map(item => `
            <div class="suggestion-card">
                <h3>${item.title}</h3>
                <p>${item.count} ${t.account_suggestion_times}</p>
                <button class="suggestion-add-btn" data-title="${item.title}" data-price="${item.price}">${t.account_suggestion_add}</button>
            </div>
        `).join('');

        grid.querySelectorAll('.suggestion-add-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                doReorder([{
                    title: btn.dataset.title,
                    price: `$${parseFloat(btn.dataset.price).toFixed(2)}`,
                    image: 'assets/logo.webp',
                    details: '',
                    quantity: 1,
                }]);
            });
        });
    }

    function renderOrders() {
        const t = translations[currentLang];
        const list = document.getElementById('orders-list');
        if (!allOrders.length) {
            list.innerHTML = `<p class="orders-empty">${t.orders_empty}</p>`;
            return;
        }
        list.innerHTML = allOrders.map(order => {
            const statusLabel = t[`order_status_${order.status}`] || order.status;
            const itemsHtml = (order.items || []).map(it => `
                <div>
                    ${it.quantity}x ${it.product_title}
                    ${it.options_details ? `<div class="order-card-item-detail">${it.options_details}</div>` : ''}
                </div>
            `).join('');
            const total = order.total_amount != null ? `$${parseFloat(order.total_amount).toFixed(2)}` : '';
            return `
                <div class="order-card">
                    <div class="order-card-header">
                        <span class="order-card-date">${formatDate(order.created_at)}</span>
                        <span class="order-card-status" data-status="${order.status}">${statusLabel}</span>
                    </div>
                    <div class="order-card-items">${itemsHtml}</div>
                    <div class="order-card-footer">
                        <span class="order-card-total">${total}</span>
                        <button class="order-reorder-btn" data-order-id="${order.id}">${t.orders_reorder}</button>
                    </div>
                </div>
            `;
        }).join('');

        list.querySelectorAll('.order-reorder-btn').forEach(btn => {
            const order = allOrders.find(o => String(o.id) === btn.dataset.orderId);
            btn.addEventListener('click', () => {
                const items = (order.items || []).map(it => ({
                    title: it.product_title,
                    price: `$${parseFloat(it.unit_price).toFixed(2)}`,
                    image: 'assets/logo.webp',
                    details: it.options_details || '',
                    quantity: parseInt(it.quantity) || 1,
                }));
                doReorder(items);
            });
        });
    }

    function renderAll() {
        renderAccountInfo(currentProfile);
        renderSuggestions();
        renderOrders();
    }

    async function loadProfile() {
        try {
            const res = await fetch(`${API_BASE_URL}/api/customers/me`, {
                headers: { 'Authorization': `Bearer ${session.token}` },
            });
            if (res.status === 401) { clearCustomerSession(); return; }
            if (res.ok) {
                currentProfile = await res.json();
                localStorage.setItem('customerData', JSON.stringify({
                    id: currentProfile.id, name: currentProfile.name,
                    email: currentProfile.email, phone: currentProfile.phone,
                    birthday: currentProfile.birthday,
                }));
            }
        } catch {
            // Si falla, seguimos con los datos ya guardados en localStorage
        }
        renderAccountInfo(currentProfile);
    }

    async function loadOrders() {
        document.getElementById('orders-list').innerHTML = `<p class="orders-loading">${translations[currentLang].orders_loading}</p>`;
        try {
            const res = await fetch(`${API_BASE_URL}/api/customers/me/orders`, {
                headers: { 'Authorization': `Bearer ${session.token}` },
            });
            if (res.status === 401) { clearCustomerSession(); return; }
            if (!res.ok) throw new Error('fetch failed');
            allOrders = await res.json();
            renderSuggestions();
            renderOrders();
        } catch {
            document.getElementById('orders-list').innerHTML = `<p class="orders-empty">${translations[currentLang].orders_error}</p>`;
        }
    }

    renderAccountInfo(currentProfile);
    loadProfile();
    loadOrders();
});
