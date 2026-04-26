/* 
==========================================================================
   COOKIES BY JACKIE - INTERACTIVITY
========================================================================== 
*/

document.addEventListener('DOMContentLoaded', () => {
    // --- Translation System ---
    const translations = {
        es: {
            nav_shop: "tienda",
            nav_about: "nuestra historia",
            nav_contact: "contacto",
            hero_label: "Repostería de Autor",
            hero_title: "Dulces<br>Momentos",
            hero_desc: "Elaboramos postres y galletas artesanales con mantequilla europea e ingredientes premium. Una experiencia de lujo en cada bocado.",
            hero_btn: "Ver Menú",
            fav_title: "los más vendidos",
            fav_subtitle: "Nuestra selección más querida, horneada diariamente con la pasión y calidad que nos define.",
            fav_btn: "ver menú completo",
            badge_best: "mejor vendido",
            prod_chip: "clásica chispas",
            prod_red: "red velvet supreme",
            prod_heart: "vintage heart",
            prod_brownie: "fudge brownies",
            trending_title: "nuestros packs especiales",
            tab_cookies: "galletas",
            tab_cakes: "pasteles",
            tab_cupcakes: "cupcakes",
            tab_pastries: "bollería",
            tab_macarons: "macarons",
            tab_minis: "mini individual",
            tab_pies: "tartas",
            tab_drinks: "bebidas",
            tab_packs: "prepacks",
            cart_title: "tu carrito",
            cart_total: "Total:",
            cart_checkout: "Ir a Pagar",
            cart_empty: "Tu carrito está vacío.",
            insta_handle: "@COOKIESBYJACKIE",
            insta_title: "Sigue la historia",
            insta_btn: "Síguenos en Instagram",
            faq_badge: "Ayuda & Soporte",
            faq_title: "Preguntas<br><span class='text-accent'>frecuentes</span>",
            faq_desc: "Resolvemos tus dudas sobre nuestros productos, pedidos especiales y servicios para que tu experiencia sea perfecta.",
            faq_contact_label: "Contacto directo",
            faq_q1: "¿Realizan envíos a domicilio?",
            faq_a1: "Por el momento no contamos con servicio de envío a domicilio, pero te invitamos a visitarnos en nuestra tienda para disfrutar de nuestros productos recién horneados.",
            faq_q2: "¿Dónde están ubicados?",
            faq_a2: "Nos encontramos en el <strong>Underground Market de Columbus Circle</strong>, en el corazón de Nueva York. Un lugar perfecto para una pausa dulce.",
            footer_tagline: "Horneando recuerdos cada día con ingredientes premium y pasión artesanal en el corazón de NYC.",
            footer_order_on: "Pide también por:",
            footer_contact_title: "Contacto",
            footer_social_title: "Conecta con nosotros",
            footer_payments_title: "Métodos de pago",
            footer_news_title: "únete al cookie club.",
            footer_news_desc: "Suscríbete a nuestro boletín para un 10% de descuento en tu primer pedido, sabores exclusivos y secretos de horneado.",
            footer_placeholder: "Correo electrónico",
            footer_subscribe: "suscribirse",
            footer_copyright: "&copy; 2024 Cookies by Jackie. Todos los derechos reservados.",
            footer_dev: "Diseñado por <a href='#'>Estudio Xaga</a>",
            chat_name: "jackie's helper",
            chat_status: "en línea ahora",
            add_to_cart: "añadir al carrito",
            add_btn: "Agregar",
            badge_fav: "favorito",
            load_more: "Cargar más",
            pack1_name: "signature cookie box",
            pack1_desc: "Nuestras 6 galletas más vendidas en una caja de presentación de lujo.",
            pack2_name: "macaron prestige box",
            pack2_desc: "Una selección artesanal de 12 macarons franceses con rellenos cremosos.",
            pack3_name: "premium cupcake pack",
            pack3_desc: "Seis cupcakes gourmet con nuestro famoso frosting de mantequilla.",
            pack4_name: "family share box",
            pack4_desc: "12 unidades de pura felicidad para compartir en familia o eventos.",
            pack5_name: "petite macaron box",
            pack5_desc: "Seis de nuestros mejores macarons. Un detalle elegante y delicioso.",
            pack6_name: "mini party pack",
            pack6_desc: "12 mini cupcakes irresistibles. Ideales para probar todos nuestros sabores.",
            rev_title: "Lo que dicen de nosotros...",
            rev1_quote: '"Empaque moderno y limpio, sabores increíbles y pasteleros que se preocupan por la técnica. Finalmente encontré mi regalo ideal para clientes mientras satisfago mi propio antojo de dulce."',
            rev1_author: "— Sarah M.",
            rev2_quote: '"Las envié como regalo corporativo y mis clientes quedaron fascinados. La presentación es tan premium como el sabor. Recomiendo mucho la Red Velvet."',
            rev2_author: "— Michael T.",
            rev3_quote: '"Finalmente una pastelería que no escatima en ingredientes. Se puede saborear la mantequilla europea en cada bocado. Estoy absolutamente obsesionada."',
            rev3_author: "— Emma L.",
            story_title: "COOKIES BY JACKIE",
            story_p1: "Desde su apertura en 2024, Cookies by Jackie se ha convertido rápidamente en un destino imprescindible para los amantes de los postres en la ciudad de Nueva York. En una ciudad que nunca se detiene, ofrece el momento perfecto de pausa: galletas recién horneadas, postres artesanales y bebidas diseñadas para reconectarte contigo mismo o con alguien especial.",
            story_p2: "Más que una pastelería, es una experiencia creada para la vida de NYC: acelerada, audaz y llena de momentos que vale la pena celebrar. Cada receta combina la tradición casera con ingredientes de alta calidad, ofreciendo sabores auténticos que destacan en el corazón de la ciudad.",
            story_p3: "Ya sea un antojo de media tarde, un regalo detallista o una celebración especial, Cookies by Jackie está hecha para aportar algo dulce y memorable a cada historia de Nueva York.",
            story_mobile: "Desde 2024, Cookies by Jackie es el destino dulce imprescindible en Nueva York. Ofrecemos una experiencia única que combina tradición casera con la más alta calidad, perfecta para regalar o darte un momento de pausa en medio del ritmo de la ciudad.",
            story_cta: "📍 Visítanos en el Underground Market de Columbus Circle y descubre por qué todo el mundo habla de nosotros.",
            story_slogan: "Cookies by Jackie: el sabor que Nueva York merece.",
            visit_title: "VISITA LA PASTELERÍA.",
            visit_desc: "¡Ven a saludar! Horneamos fresco todo el día en nuestra tienda principal. Toma un café, observa a nuestros pasteleros trabajar y huele la magia.",
            visit_loc_title: "UBICACIÓN",
            visit_loc_desc: "1000 S 8th Ave<br>New York, NY 10019",
            visit_hours_title: "HORARIOS",
            visit_hours_desc: "Lun-Sáb: 8am - 6pm<br>Dom: 9am - 4pm",
            visit_btn: "Obtener indicaciones",
            faq_q3: "¿Cuál es su horario de atención?",
            faq_a3: "Estamos abiertos de Lunes a Sábado de 8:00 AM a 6:00 PM, y los Domingos de 9:00 AM a 4:00 PM.",
            faq_q4: "¿Ofrecen servicios de catering?",
            faq_a4: "¡Sí! Preparamos pedidos especiales para eventos corporativos, fiestas y celebraciones. Contáctanos por WhatsApp para coordinar los detalles.",
            faq_q5: "¿Sus productos son frescos?",
            faq_a5: "Absolutamente. Horneamos fresco cada mañana utilizando mantequilla europea e ingredientes de la más alta calidad para garantizar el mejor sabor."
        },
        en: {
            nav_shop: "the collection",
            nav_about: "our legacy",
            nav_contact: "get in touch",
            hero_label: "Signature Pastry",
            hero_title: "Sweetest<br>Moments",
            hero_desc: "Handcrafting artisanal masterpieces with European butter and premium ingredients. A luxury experience in every bite.",
            hero_btn: "Explore the Menu",
            fav_title: "the best sellers",
            fav_subtitle: "Our most beloved selection, baked daily with the passion and quality that defines us.",
            fav_btn: "view full menu",
            badge_best: "best seller",
            prod_chip: "classic chocolate chip",
            prod_red: "red velvet supreme",
            prod_heart: "vintage heart cake",
            prod_brownie: "fudge brownies",
            trending_title: "our exclusive packs",
            tab_cookies: "cookies",
            tab_cakes: "cakes",
            tab_cupcakes: "cupcakes",
            tab_pastries: "pastries",
            tab_macarons: "macarons",
            tab_minis: "mini individual",
            tab_pies: "pies",
            tab_drinks: "drinks",
            tab_packs: "prepacks",
            cart_title: "Your Bag",
            cart_total: "Total Amount:",
            cart_checkout: "Secure Checkout",
            cart_empty: "Your cravings list is empty.",
            insta_handle: "@COOKIESBYJACKIE",
            insta_title: "Follow the Cravings",
            insta_btn: "Join us on Instagram",
            faq_badge: "Help & Support",
            faq_title: "Frequent<br><span class='text-accent'>questions</span>",
            faq_desc: "Satisfying your curiosity about our treats, bespoke orders, and services for a flawless experience.",
            faq_contact_label: "direct contact",
            faq_q1: "Do you offer delivery?",
            faq_a1: "Currently, we don't offer home delivery, but we invite you to our bakery to experience the magic of cookies fresh from the oven.",
            faq_q2: "Where can I find you?",
            faq_a2: "We are located at the <strong>Columbus Circle Underground Market</strong>, in the heart of NYC. The perfect sanctuary for a sweet escape.",
            faq_q3: "What are your opening hours?",
            faq_a3: "We are open Monday to Saturday from 8:00 AM to 6:00 PM, and Sundays from 9:00 AM to 4:00 PM.",
            faq_q4: "Do you offer catering services?",
            faq_a4: "Yes! We craft bespoke orders for corporate events, parties, and celebrations. Contact us via WhatsApp to arrange the details.",
            faq_q5: "Are your products baked fresh?",
            faq_a5: "Absolutely. We bake fresh every single morning using European butter and the finest ingredients to ensure a world-class flavor.",
            footer_tagline: "Baking memories every day with premium ingredients and artisanal passion in the heart of NYC.",
            footer_order_on: "Also available on:",
            footer_contact_title: "Contact Us",
            footer_social_title: "Let's Connect",
            footer_payments_title: "Payment Methods",
            footer_news_title: "join the cookie club.",
            footer_news_desc: "Subscribe to our newsletter for 10% off your first order, exclusive flavors and baking secrets.",
            footer_placeholder: "Email address",
            footer_subscribe: "subscribe",
            footer_copyright: "&copy; 2024 Cookies by Jackie. All rights reserved.",
            footer_dev: "Crafted by <a href='#'>Estudio Xaga</a>",
            chat_name: "jackie's helper",
            chat_status: "online now",
            add_to_cart: "add to cart",
            add_btn: "Add to Bag",
            badge_fav: "fan favorite",
            load_more: "Explore more",
            pack1_name: "signature cookie box",
            pack1_desc: "Our top 6 signature cookies nestled in a luxury presentation box.",
            pack2_name: "macaron prestige box",
            pack2_desc: "An artisanal curation of 12 French macarons with velvet-smooth fillings.",
            pack3_name: "premium cupcake pack",
            pack3_desc: "Six gourmet cupcakes topped with our legendary silk-butter frosting.",
            pack4_name: "family share box",
            pack4_desc: "12 units of pure joy, crafted for family sharing and unforgettable gatherings.",
            pack5_name: "petite macaron box",
            pack5_desc: "Six of our finest macarons. An elegant, bite-sized gift of luxury.",
            pack6_name: "mini party pack",
            pack6_desc: "12 irresistible mini cupcakes. The ultimate journey through our signature flavors.",
            rev_title: "What they say about us...",
            rev1_quote: '"Modern, clean packaging, incredible flavors, and bakers who truly care about technique. I finally found the perfect gift for clients while satisfying my own sweet tooth."',
            rev1_author: "— Sarah M.",
            rev2_quote: '"I sent them as corporate gifts and my clients were fascinated. The presentation is as premium as the taste. I highly recommend the Red Velvet."',
            rev2_author: "— Michael T.",
            rev3_quote: '"Finally a bakery that doesn\'t skimp on ingredients. You can taste the European butter in every bite. I am absolutely obsessed."',
            rev3_author: "— Emma L.",
            story_title: "COOKIES BY JACKIE",
            story_p1: "Since its opening in 2024, Cookies by Jackie has rapidly become an essential destination for dessert lovers in New York City. In a city that never stops, it offers the perfect moment of pause: fresh-baked cookies, artisanal treats, and drinks designed to reconnect you with yourself or someone special.",
            story_p2: "More than a bakery, it's an experience crafted for the NYC lifestyle: fast-paced, bold, and full of moments worth celebrating. Each recipe blends home-style tradition with high-quality ingredients, delivering authentic flavors that stand out in the heart of the city.",
            story_p3: "Whether it's a mid-afternoon craving, a thoughtful gift, or a special celebration, Cookies by Jackie is made to bring something sweet and memorable to every New York story.",
            story_mobile: "Since 2024, Cookies by Jackie is the ultimate sweet destination in NYC. We offer a unique experience blending home tradition with the highest quality, perfect for gifting or taking a moment for yourself.",
            story_cta: "📍 Visit us at the Columbus Circle Underground Market and discover why everyone is talking about us.",
            story_slogan: "Cookies by Jackie: the flavor New York deserves.",
            visit_title: "VISIT THE BAKERY.",
            visit_desc: "Come say hi! We bake fresh all day at our flagship store. Grab a coffee, watch our pastry chefs at work, and smell the magic.",
            visit_loc_title: "LOCATION",
            visit_loc_desc: "1000 S 8th Ave<br>New York, NY 10019",
            visit_hours_title: "HOURS",
            visit_hours_desc: "Mon-Sat: 8am - 6pm<br>Sun: 9am - 4pm",
            visit_btn: "Get Directions"
        }
    };

    let currentLang = 'es';

    function changeLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Actualizar botones de idioma
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Actualizar botones de carrito y badges
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.textContent = translations[lang].add_to_cart;
        });
        document.querySelectorAll('.tab-add-btn').forEach(btn => {
            // Preservar el icono si existe
            const icon = btn.querySelector('i');
            btn.innerHTML = '';
            if (icon) btn.appendChild(icon);
            btn.appendChild(document.createTextNode(' ' + translations[lang].add_btn));
        });
        document.querySelectorAll('.badge').forEach(badge => {
            if (badge.textContent.toLowerCase() === 'favorito' || badge.textContent.toLowerCase() === 'fan favorite') {
                badge.textContent = translations[lang].badge_fav;
            }
        });
        document.querySelectorAll('[onclick*="loadMore"]').forEach(btn => {
            btn.textContent = translations[lang].load_more;
        });

        // Refrescar Chat si está abierto
        if (typeof window.renderStep === 'function') {
            window.renderStep(window.currentChatStep, true);
        }

        // Refrescar UI del carrito si está abierto
        updateCartUI();
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            changeLanguage(btn.getAttribute('data-lang'));
        });
    });

    // State
    let cart = [];
    
    // Elements
    const cartBtn = document.getElementById('cart-btn');
    const closeCart = document.getElementById('close-cart');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total-amount');
    const cartCountElement = document.querySelector('.cart-count');

    // Functions
    const toggleCart = () => {
        cartSidebar.classList.toggle('open');
        cartOverlay.classList.toggle('active');
    };

    const updateCartUI = () => {
        // Update count
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        cartCountElement.textContent = totalItems;
        
        // Update list
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `<p style="text-align: center; opacity: 0.5; margin-top: 2rem; font-family: var(--font-body);">${translations[currentLang].cart_empty}</p>`;
            cartTotalElement.textContent = '$0.00';
            return;
        }

        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">${item.price}</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="window.updateQty(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="window.updateQty(${index}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item-btn" onclick="window.removeFromCart(${index})">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `).join('');

        // Update Total
        const total = cart.reduce((acc, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return acc + (price * item.quantity);
        }, 0);
        
        cartTotalElement.textContent = `$${total.toFixed(2)}`;
    };

    window.removeFromCart = (index) => {
        cart.splice(index, 1);
        updateCartUI();
    };

    window.updateQty = (index, change) => {
        const newQty = cart[index].quantity + change;
        if (newQty > 0) {
            cart[index].quantity = newQty;
        } else {
            cart.splice(index, 1); // Si baja a 0, se elimina
        }
        updateCartUI();
    };

    window.updatePrice = (select, mapping) => {
        const selectedValue = select.value;
        const card = select.closest('.tab-product-card') || select.closest('.product-card');
        const priceElement = card.querySelector('.tab-product-price') || card.querySelector('.price');
        
        if (mapping[selectedValue]) {
            priceElement.textContent = mapping[selectedValue];
        }
    };

    window.updateProductPrice = (select, priceId) => {
        const priceElement = document.getElementById(priceId);
        if (priceElement) {
            priceElement.textContent = `$${select.value}`;
            // Forzar un pequeño efecto visual de destello para confirmar el cambio
            priceElement.style.color = 'var(--color-primary)';
            setTimeout(() => {
                priceElement.style.color = '';
            }, 300);
        }
    };

    const addToCart = (product) => {
        // Buscamos si ya existe exactamente el mismo producto (mismo nombre y variante)
        const existingItem = cart.find(item => item.title === product.title);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        updateCartUI();
        toggleCart();
    };

    // Event Listeners
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleCart();
    });

    closeCart.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);

    // Escuchar clics en botones de Agregar
    document.addEventListener('click', (e) => {
        const addToCartBtn = e.target.closest('.add-to-cart-btn');
        if (addToCartBtn) {
            const card = addToCartBtn.closest('.product-card') || 
                         addToCartBtn.closest('.trending-item') || 
                         addToCartBtn.closest('.fav-card');
            
            if (card) {
                const title = (card.querySelector('.product-title') || 
                               card.querySelector('.trend-name') || 
                               card.querySelector('h3')).textContent;
                
                const price = (card.querySelector('.product-price') || 
                               card.querySelector('.trend-price') || 
                               card.querySelector('.price')).textContent;
                
                const image = card.querySelector('img').getAttribute('src');
                
                const product = {
                    title: title.trim(),
                    price: price.trim(),
                    image: image
                };
                
                addToCart(product);
            }
        }
        
        if (e.target.closest('.tab-add-btn')) {
            const card = e.target.closest('.tab-product-card');
            let title = card.querySelector('h3').textContent;
            let price = card.querySelector('.tab-product-price') ? card.querySelector('.tab-product-price').textContent : "$0.00";
            
            // Si hay un selector de variantes, tomamos el texto de la opción elegida para el nombre
            // y nos aseguramos de que el precio sea el del valor seleccionado
            const variantSelect = card.querySelector('.variant-select');
            if (variantSelect) {
                const selectedOption = variantSelect.options[variantSelect.selectedIndex];
                title += ` (${selectedOption.text})`;
                price = `$${variantSelect.value}`; // Tomamos el valor directamente del select para evitar errores
            }

            const product = {
                title: title.trim(),
                price: price.trim(),
                image: card.querySelector('img').getAttribute('src')
            };
            addToCart(product);
        }
    });
    
    // Testimonial Slider Logic
    const track = document.getElementById('testimonial-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const dots = document.querySelectorAll('.dot');
    
    if (track && slides.length > 0) {
        let currentIndex = 0;
        
        const updateSlider = () => {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentIndex].classList.add('active');
        };
        
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        });
        
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider();
        });
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });
    }
    
    // Tabbed Shop Logic
    const shopTabs = document.querySelectorAll('.shop-tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    shopTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');
            
            // Remove active class from all tabs and contents
            shopTabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and target content
            tab.classList.add('active');
            document.getElementById(targetId).classList.add('active');

            // Scroll tab into view if on mobile
            if (window.innerWidth <= 768) {
                tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other items if you want (optional)
            // faqItems.forEach(otherItem => {
            //     if (otherItem !== item) otherItem.classList.remove('active');
            // });
            
            item.classList.toggle('active');
        });
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileBackdrop = document.getElementById('mobile-menu-backdrop');

    const openMobileMenu = () => {
        mobileMenu.style.cssText = 'display:flex; position:fixed; top:0; left:0; width:100vw; height:50vh; background:var(--color-bg); z-index:99999; flex-direction:column; justify-content:center; align-items:center; gap:0; overflow:hidden; box-shadow:0 15px 50px rgba(0,0,0,0.1); border-bottom-left-radius: var(--radius-card); border-bottom-right-radius: var(--radius-card);';
        mobileBackdrop.style.display = 'block';
    };

    const closeMobileMenu = () => {
        mobileMenu.style.display = 'none';
        mobileBackdrop.style.display = 'none';
    };

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', openMobileMenu);

        mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Trending Slider Logic
    const trendTrack = document.getElementById('trending-track');
    const trendPrev = document.getElementById('trend-prev');
    const trendNext = document.getElementById('trend-next');
    let trendIndex = 0;

    if (trendTrack && trendPrev && trendNext) {
        const trendItems = trendTrack.querySelectorAll('.trending-item');
        
        const updateTrendSlider = () => {
            const itemWidth = trendItems[0].offsetWidth;
            const gap = 48; // 3rem = 48px
            trendTrack.style.transform = `translateX(-${trendIndex * (itemWidth + gap)}px)`;
        };

        trendNext.addEventListener('click', () => {
            trendIndex = (trendIndex + 1) % trendItems.length;
            updateTrendSlider();
        });

        trendPrev.addEventListener('click', () => {
            trendIndex = (trendIndex - 1 + trendItems.length) % trendItems.length;
            updateTrendSlider();
        });

        // Ajustar el slider si se cambia el tamaño de la ventana
        window.addEventListener('resize', updateTrendSlider);
    }

    // --- Smart Chat Logic ---
    const chatTrigger = document.getElementById('chat-trigger-btn');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close-btn');
    const chatBody = document.getElementById('chat-body');
    const chatOptionsContainer = document.getElementById('chat-options-container');

    const chatData = {
        es: {
            start: {
                message: "¡Hola! 🍪 Soy Jackie's Helper. ¿En qué puedo ayudarte hoy?",
                options: [
                    { text: "🍪 Ver menú de galletas", next: "menu" },
                    { text: "🎁 Packs de regalo", next: "packs" },
                    { text: "🕒 Horarios y Entregas", next: "info" },
                    { text: "✨ Pedidos Personalizados", next: "custom" }
                ]
            },
            menu: {
                message: "¡Excelente elección! Tenemos galletas clásicas, rellenas y minis. ¿Quieres ir a la sección del menú?",
                options: [
                    { text: "Sí, llévame al menú", link: "#shop" },
                    { text: "Volver atrás", next: "start" }
                ]
            },
            packs: {
                message: "Nuestros packs especiales son ideales para regalar. Tenemos cajas de 6 y 12 unidades. ¿Quieres ver los packs actuales?",
                options: [
                    { text: "Ver Packs Especiales", link: "#packs-section" },
                    { text: "Volver atrás", next: "start" }
                ]
            },
            info: {
                message: "Atendemos de Lunes a Sábado de 9:00 AM a 6:00 PM. Hacemos entregas a domicilio en toda la zona metropolitana.",
                options: [
                    { text: "Preguntas Frecuentes", link: "#faq" },
                    { text: "Volver al inicio", next: "start" }
                ]
            },
            custom: {
                message: "¡Sí! Hacemos pedidos especiales para eventos, bodas y regalos corporativos. Para estos casos, lo mejor es hablar directamente con Jackie.",
                options: [
                    { text: "📱 Hablar por WhatsApp", link: "https://wa.me/12123896151", external: true },
                    { text: "Volver al inicio", next: "start" }
                ]
            }
        },
        en: {
            start: {
                message: "Hi there! 🍪 I'm Jackie's Helper. How can I sweeten your day?",
                options: [
                    { text: "🍪 Browse the menu", next: "menu" },
                    { text: "🎁 Gift Packs", next: "packs" },
                    { text: "🕒 Hours & Delivery", next: "info" },
                    { text: "✨ Custom Orders", next: "custom" }
                ]
            },
            menu: {
                message: "A delicious choice! Our selection ranges from gooey classics to exquisite minis. Ready to explore?",
                options: [
                    { text: "Yes, take me there", link: "#shop" },
                    { text: "Go back", next: "start" }
                ]
            },
            packs: {
                message: "Our curated gift packs are the ultimate indulgence. Perfectly boxed for sharing (or not). Want to see them?",
                options: [
                    { text: "Discover Gift Packs", link: "#packs-section" },
                    { text: "Go back", next: "start" }
                ]
            },
            info: {
                message: "We're here for you Monday to Saturday, 9 AM - 6 PM. We offer door-to-door indulgence across the metropolitan area.",
                options: [
                    { text: "View FAQ", link: "#faq" },
                    { text: "Back to start", next: "start" }
                ]
            },
            custom: {
                message: "Absolutely! We love crafting bespoke delights for weddings, corporate gifts, and special celebrations. Let's talk directly.",
                options: [
                    { text: "📱 Chat on WhatsApp", link: "https://wa.me/12123896151", external: true },
                    { text: "Back to start", next: "start" }
                ]
            }
        }
    };

    window.currentChatStep = 'start';

    window.renderStep = function(stepKey, isRefresh = false) {
        window.currentChatStep = stepKey;
        const step = chatData[currentLang][stepKey];
        
        // Reemplazar el último mensaje del bot si existe y es un refresh
        const botMsgs = chatBody.querySelectorAll('.chat-msg.bot');
        if (isRefresh && botMsgs.length > 0) {
            botMsgs[botMsgs.length - 1].textContent = step.message;
        } else {
            // Si es un refresh pero no hay mensajes, o si no es refresh, agregamos uno nuevo
            // Pero si es refresh y no hay mensajes, solo lo agregamos si el chat está "empezando"
            const msgDiv = document.createElement('div');
            msgDiv.className = 'chat-msg bot';
            msgDiv.textContent = step.message;
            chatBody.appendChild(msgDiv);
        }
        
        // Mover el contenedor de opciones al final
        chatBody.appendChild(chatOptionsContainer);
        
        // Limpiar opciones anteriores
        chatOptionsContainer.innerHTML = '';
        
        // Agregar nuevas opciones
        step.options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'chat-opt-btn';
            btn.textContent = opt.text;
            btn.onclick = () => {
                if (opt.link) {
                    if (opt.external) {
                        window.open(opt.link, '_blank');
                    } else if (opt.link.startsWith('#')) {
                        const target = document.querySelector(opt.link);
                        if (target) {
                            target.scrollIntoView({ behavior: 'smooth' });
                            chatWindow.classList.remove('active');
                        }
                    } else {
                        window.location.href = opt.link;
                        chatWindow.classList.remove('active');
                    }
                } else if (opt.next) {
                    const userMsg = document.createElement('div');
                    userMsg.className = 'chat-msg user';
                    userMsg.style.alignSelf = 'flex-end';
                    userMsg.style.background = 'var(--color-primary)';
                    userMsg.style.color = 'white';
                    userMsg.style.padding = '0.8rem 1rem';
                    userMsg.style.borderRadius = '15px';
                    userMsg.style.borderBottomLeftRadius = '15px';
                    userMsg.style.borderBottomRightRadius = '2px';
                    userMsg.style.fontSize = '0.9rem';
                    userMsg.style.marginBottom = '1rem';
                    userMsg.textContent = opt.text;
                    chatBody.appendChild(userMsg);
                    
                    setTimeout(() => window.renderStep(opt.next), 400);
                }
            };
            chatOptionsContainer.appendChild(btn);
        });
        
        // Scroll suave al fondo
        setTimeout(() => {
            chatBody.scrollTo({
                top: chatBody.scrollHeight,
                behavior: 'smooth'
            });
        }, 100);
    };

    if (chatTrigger) {
        chatTrigger.addEventListener('click', () => {
            chatWindow.classList.toggle('active');
            if (chatWindow.classList.contains('active') && chatOptionsContainer.children.length === 0) {
                window.renderStep('start');
            }
        });

        chatClose.addEventListener('click', () => {
            chatWindow.classList.remove('active');
        });
    }

    // Initialize Language
    changeLanguage(currentLang);
});

function loadMore(btn) {
    const tabContent = btn.closest('.tab-content');
    const grid = tabContent.querySelector('.tabbed-product-grid');
    grid.classList.add('show-all');
    btn.style.display = 'none';
}
