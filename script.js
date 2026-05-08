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
            nav_delivery: "delivery",
            nav_contact: "contacto",
            hero_label: "Repostería de Autor",
            hero_title: "Fresco Cada Día.<br>Hecho con Amor.",
            hero_desc: "Cada día horneamos postres frescos y artesanales con los ingredientes de mayor calidad, sabores irresistibles y un toque especial de amor. Descubre la alegría de disfrutar delicias auténticas creadas para cautivar tus sentidos.",
            hero_btn: "Ver Menú",
            fav_title: "Nuestros Más Vendidos",
            fav_subtitle: "Descubre los favoritos de nuestros clientes que todos aman — recién hechos, llenos de sabor e imposibles de resistir.",
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
            tab_pastries: "Pastries",
            tab_macarons: "macarons",
            tab_minis: "mini individual",
            tab_pies: "tartas",
            tab_packs: "packs especiales",
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
            visit_find_us: "encuéntranos.",
            visit_contact_title: "Contacto",
            faq_sub_title: "preguntas frecuentes",
            visit_title: "VISITA LA PASTELERÍA.",
            visit_desc: "¡Ven a saludar! Horneamos fresco todo el día en nuestra tienda principal. Toma un café, observa a nuestros pasteleros trabajar y huele la magia.",
            visit_loc_title: "UBICACIÓN",
            visit_loc_desc: "1000 S 8th Ave<br>New York, NY 10019",
            visit_hours_title: "HORARIOS",
            visit_hours_desc: "Lun–Dom: 7:00 AM – 10:00 PM",
            visit_btn: "Obtener indicaciones",
            faq_q3: "¿Cuál es su horario de atención?",
            faq_a3: "Atendemos todos los días de la semana, de Lunes a Domingo, de 7:00 AM a 10:00 PM.",
            faq_q4: "¿Ofrecen servicios de catering?",
            faq_a4: "¡Sí! Preparamos pedidos especiales para eventos corporativos, fiestas y celebraciones. Escríbenos a <a href='mailto:cookiesbyjackienyc@gmail.com'>cookiesbyjackienyc@gmail.com</a> para coordinar los detalles.",
            faq_q5: "¿Sus productos son frescos?",
            faq_a5: "Absolutamente. Horneamos fresco cada mañana utilizando mantequilla europea e ingredientes de la más alta calidad para garantizar el mejor sabor.",
            past_roll_name: "Cinnamon Rolls 6 pk",
            past_roll_desc: "6 unidades de nuestros rollos de canela clásicos con glaseado artesanal.",
            past_banana_name: "Banana Bread loaf",
            past_banana_desc: "6 unidades de nuestro pan de banana melcochudo y natural.",
            past_scone_name: "Blueberry Scone 8 pk",
            past_scone_desc: "8 unidades de scones dorados con arándanos frescos.",
            past_brownie_name: "Chocolate Fudge Brownies 6 pk",
            past_brownie_desc: "6 unidades de brownies extra chocolate cortados en caja.",
            past_donut_name: "Donuts 6 pk",
            past_donut_desc: "6 unidades, una de cada sabor: Glaseada, Azúcar y Canela, Fruity Pebbles, Oreo, Fresa con Sprinkles y Chocolate con Sprinkles.",
            past_biscuit_name: "Buttermilk Biscuit 6 pk",
            past_biscuit_desc: "6 unidades de nuestros clásicos y hojaldrados biscuits de mantequilla.",
            btn_add: "Agregar",
            btn_select: "Elige tus opciones",
            btn_customize: "Personalizar",
            modal_add_cart: "¡Añadir al Carrito!",
            modal_count: "Llevas {0} de {1}",
            modal_cookies_title: "Elige tus {0} galletas",
            modal_cookies_missing: "Faltan galletas por elegir",
            modal_cupcakes_title: "Elige tus {0} cupcakes",
            modal_cupcakes_missing: "Faltan cupcakes por elegir",
            modal_macarons_title: "Elige tus {0} Macarons",
            modal_macarons_missing: "Faltan macarons por elegir",
            macaron_0: "Birthday", macaron_1: "Churro", macaron_2: "Crème Brûlée",
            macaron_3: "Pistacho", macaron_4: "Raspberry", macaron_5: "Tiramisú", macaron_6: "Vanilla",
            modal_mini_title: "Elige tus {0} Mini Cakes",
            modal_mini_missing: "Faltan cakes por elegir",
            cake_price_label: "Precio:",
            cake_confirm_btn: "Añadir al Carrito",
            cake_label_flavor: "Sabor del Pastel",
            cake_label_color: "Color del Diseño",
            cake_label_size: "Tamaño",
            cake_label_frosting: "Cobertura (Frosting)",
            cake_detail_flavor: "Sabor",
            cake_detail_color: "Color",
            cake_detail_size: "Tamaño",
            cake_detail_frosting: "Cobertura",
            cook1_desc: "4 unidades predeterminadas: Chocolate Chip Cookie, Salted Caramel Chocolate Chip Cookie, Brookie Cookie y Snickerdoodle.",
            cook2_desc: "6 unidades. Elige tus sabores favoritos de nuestra lista.",
            cook3_desc: "12 unidades. Elige tus sabores favoritos de nuestra lista.",
            cook4_desc: "25 galletas predeterminadas (5 de cada una): Chocolate Chip, Oreo, M&amp;M, Snickerdoodle.",
            cake1_desc: "Personaliza sabor y color. Pedido mínimo 3 días antes.",
            cake3_desc: "Elige tamaño 8\" (10-12p) o 10\" (15-18p), sabor y cobertura.",
            cake4_desc: "Galleta gigante clásica con chispas de chocolate.",
            cake5_desc: "Rinde 12 porciones de brownie fudge irresistible.",
            cake6_desc: "Doble capa de galleta gigante para los más golosos.",
            cup_desc: "Elige cualquier sabor de nuestra lista de cupcakes.",
            mac6_desc: "6 unidades de tu elección de nuestra selección de France Macarons.",
            mac12_desc: "12 unidades de tu elección de nuestra selección de France Macarons.",
            mac24_desc: "24 unidades de tu elección de nuestra selección de France Macarons.",
            mini6_desc: "6 unidades de tu elección de nuestra selección de Mini Individual Cakes.",
            mini12_desc: "12 unidades de tu elección de nuestra selección de Mini Individual Cakes.",
            mini24_desc: "24 unidades de tu elección de nuestra selección de Mini Individual Cakes.",
            pie1_desc: "Pie completo de 9\". Manzana caramelizada con cubierta crujiente.",
            pie2_desc: "Pie completo de 9\". Relleno clásico de nueces pecanas.",
            pie3_desc: "Pie completo de 9\". Durazno fresco con cubierta crujiente.",
            prepack1_desc: "6 unidades predeterminadas: Vanilla, Raspberry, Churro, Crème Brûlée, Tiramisú, Pistacho.",
            prepack2_desc: "12 unidades predeterminadas con los sabores más vendidos.",
            prepack3_desc: "6 unidades predeterminadas: Chocolate Chip, Salted Caramel, Brookie, Red Velvet, Snickerdoodle, Sugar Cookie.",
            prepack4_desc: "12 unidades predeterminadas, 2 de cada sabor: Vanilla, Raspberry, Churro, Crème Brûlée, Tiramisú, Pistacho.",
            prepack5_desc: "12 unidades, 2 de cada una: Chocolate Chip, Salted Caramel, Brookie, Red Velvet, Snickerdoodle, Sugar Cookie.",
            prepack6_desc: "12 unidades predeterminadas: 4 Vanilla, 4 Chocolate, 4 Red Velvet.",
            fav_view_btn: "Ver más ↗",
            fav1_strip: "red velvet · cream cheese · vainilla",
            fav1_pill1: "red velvet", fav1_pill2: "cream cheese", fav1_pill3: "vainilla",
            fav2_strip: "chocolate chip · caramelo · sal marina",
            fav2_pill1: "chocolate chip", fav2_pill2: "caramelo", fav2_pill3: "sal marina",
            fav3_strip: "fresa · cheesecake · crema",
            fav3_pill1: "fresa", fav3_pill2: "cheesecake", fav3_pill3: "crema",
            fav4_strip: "chocolate · mantequilla · vainilla",
            fav4_pill1: "chocolate", fav4_pill2: "mantequilla", fav4_pill3: "vainilla"
        },
        en: {
            nav_shop: "the collection",
            nav_delivery: "delivery",
            nav_contact: "get in touch",
            hero_label: "Signature Pastry",
            hero_title: "Freshly Made Daily<br>with Love",
            hero_desc: "Every day we bake fresh, handcrafted treats made with the highest quality ingredients, irresistible flavors, and a special touch of love. Discover the joy of enjoying authentic delights created to captivate your senses.",
            hero_btn: "Explore the Menu",
            fav_title: "Our Best Sellers",
            fav_subtitle: "Discover the customer favorites everyone loves — freshly made, full of flavor, and impossible to resist.",
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
            faq_a3: "We are open every day, Monday through Sunday, from 7:00 AM to 10:00 PM.",
            faq_q4: "Do you offer catering services?",
            faq_a4: "Yes! We craft bespoke orders for corporate events, parties, and celebrations. Reach us at <a href='mailto:cookiesbyjackienyc@gmail.com'>cookiesbyjackienyc@gmail.com</a> to arrange the details.",
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
            visit_find_us: "find us.",
            visit_contact_title: "Contact",
            faq_sub_title: "frequently asked questions",
            visit_title: "VISIT THE BAKERY.",
            visit_desc: "Come say hi! We bake fresh all day at our flagship store. Grab a coffee, watch our pastry chefs at work, and smell the magic.",
            visit_loc_title: "LOCATION",
            visit_loc_desc: "1000 S 8th Ave<br>New York, NY 10019",
            visit_hours_title: "HOURS",
            visit_hours_desc: "Mon–Sun: 7:00 AM – 10:00 PM",
            visit_btn: "Get Directions",
            past_roll_name: "Cinnamon Rolls 6 pk",
            past_roll_desc: "6 units of our classic cinnamon rolls with artisanal glaze.",
            past_banana_name: "Banana Bread loaf",
            past_banana_desc: "6 units of our moist and natural banana bread.",
            past_scone_name: "Blueberry Scone 8 pk",
            past_scone_desc: "8 units of golden scones with fresh blueberries.",
            past_brownie_name: "Chocolate Fudge Brownies 6 pk",
            past_brownie_desc: "6 units of extra chocolatey brownies cut in a box.",
            past_donut_name: "Donuts 6 pk",
            past_donut_desc: "6 units, one of each flavor: Glazed, Cinnamon Sugar, Fruity Pebbles, Oreo, Strawberry Sprinkle, and Chocolate Sprinkle.",
            past_biscuit_name: "Buttermilk Biscuit 6 pk",
            past_biscuit_desc: "6 units of our classic flaky buttermilk biscuits.",
            btn_add: "Add",
            btn_select: "Choose Options",
            btn_customize: "Customize",
            modal_add_cart: "Add to Cart!",
            modal_count: "{0} of {1} selected",
            modal_cookies_title: "Choose your {0} cookies",
            modal_cookies_missing: "Select more cookies",
            modal_cupcakes_title: "Choose your {0} cupcakes",
            modal_cupcakes_missing: "Select more cupcakes",
            modal_macarons_title: "Choose your {0} Macarons",
            modal_macarons_missing: "Select more macarons",
            macaron_0: "Birthday", macaron_1: "Churro", macaron_2: "Crème Brûlée",
            macaron_3: "Pistachio", macaron_4: "Raspberry", macaron_5: "Tiramisu", macaron_6: "Vanilla",
            modal_mini_title: "Choose your {0} Mini Cakes",
            modal_mini_missing: "Select more mini cakes",
            cake_price_label: "Price:",
            cake_confirm_btn: "Add to Cart",
            cake_label_flavor: "Cake Flavor",
            cake_label_color: "Design Color",
            cake_label_size: "Size",
            cake_label_frosting: "Frosting",
            cake_detail_flavor: "Flavor",
            cake_detail_color: "Color",
            cake_detail_size: "Size",
            cake_detail_frosting: "Frosting",
            cook1_desc: "4 preset units: Chocolate Chip Cookie, Salted Caramel Chocolate Chip Cookie, Brookie Cookie, and Snickerdoodle.",
            cook2_desc: "6 units. Choose your favorite flavors from our list.",
            cook3_desc: "12 units. Choose your favorite flavors from our list.",
            cook4_desc: "25 preset cookies (5 of each): Chocolate Chip, Oreo, M&amp;M, Snickerdoodle.",
            cake1_desc: "Customize flavor and color. Order at least 3 days in advance.",
            cake3_desc: "Choose size 8\" (10–12 servings) or 10\" (15–18 servings), flavor and frosting.",
            cake4_desc: "Classic giant cookie loaded with chocolate chips.",
            cake5_desc: "Yields 12 irresistible chocolate fudge brownie servings.",
            cake6_desc: "Double-layer giant cookie for the most devoted sweet tooth.",
            cup_desc: "Choose any flavor from our cupcake list.",
            mac6_desc: "6 units of your choice from our France Macaron selection.",
            mac12_desc: "12 units of your choice from our France Macaron selection.",
            mac24_desc: "24 units of your choice from our France Macaron selection.",
            mini6_desc: "6 units of your choice from our Mini Individual Cakes selection.",
            mini12_desc: "12 units of your choice from our Mini Individual Cakes selection.",
            mini24_desc: "24 units of your choice from our Mini Individual Cakes selection.",
            pie1_desc: "Full 9\" pie. Caramelized apple with a crunchy crumb topping.",
            pie2_desc: "Full 9\" pie. Classic Southern pecan filling.",
            pie3_desc: "Full 9\" pie. Fresh peach with a crunchy crumb topping.",
            prepack1_desc: "6 preset units: Vanilla, Raspberry, Churro, Crème Brûlée, Tiramisú, Pistachio.",
            prepack2_desc: "12 preset units with our best-selling flavors.",
            prepack3_desc: "6 preset units: Chocolate Chip, Salted Caramel, Brookie, Red Velvet, Snickerdoodle, Sugar Cookie.",
            prepack4_desc: "12 preset units, 2 of each flavor: Vanilla, Raspberry, Churro, Crème Brûlée, Tiramisú, Pistachio.",
            prepack5_desc: "12 units, 2 of each: Chocolate Chip, Salted Caramel, Brookie, Red Velvet, Snickerdoodle, Sugar Cookie.",
            prepack6_desc: "12 preset units: 4 Vanilla, 4 Chocolate, 4 Red Velvet.",
            fav_view_btn: "See more ↗",
            fav1_strip: "red velvet · cream cheese · vanilla",
            fav1_pill1: "red velvet", fav1_pill2: "cream cheese", fav1_pill3: "vanilla",
            fav2_strip: "chocolate chip · caramel · sea salt",
            fav2_pill1: "chocolate chip", fav2_pill2: "caramel", fav2_pill3: "sea salt",
            fav3_strip: "strawberry · cheesecake · cream",
            fav3_pill1: "strawberry", fav3_pill2: "cheesecake", fav3_pill3: "cream",
            fav4_strip: "chocolate · butter · vanilla",
            fav4_pill1: "chocolate", fav4_pill2: "butter", fav4_pill3: "vanilla"
        }
    };

    let currentLang = 'en';

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
            const key = btn.getAttribute('data-btn-key') || 'add_btn';
            btn.innerHTML = '';
            if (icon) btn.appendChild(icon);
            btn.appendChild(document.createTextNode(' ' + translations[lang][key]));
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

    // ─── Search ──────────────────────────────────────────────────────────────
    const searchOverlay   = document.getElementById('search-overlay');
    const searchOpenBtn   = document.getElementById('search-open-btn');
    const searchCloseBtn  = document.getElementById('search-close-btn');
    const searchInput     = document.getElementById('search-input');
    const searchResultsEl = document.getElementById('search-results');

    function openSearch() {
        searchOverlay.classList.add('open');
        searchOverlay.setAttribute('aria-hidden', 'false');
        setTimeout(() => searchInput.focus(), 200);
    }

    function closeSearch() {
        searchOverlay.classList.remove('open');
        searchOverlay.setAttribute('aria-hidden', 'true');
        searchInput.value = '';
        searchResultsEl.innerHTML = '<p class="search-hint">escribe para buscar productos, secciones o preguntas frecuentes...</p>';
    }

    // Construye el índice de búsqueda a partir del DOM
    function buildSearchIndex() {
        const items = [];

        // Productos de la tienda
        document.querySelectorAll('.tab-product-card').forEach(card => {
            const h3 = card.querySelector('h3');
            const desc = card.querySelector('.tab-product-desc');
            const price = card.querySelector('.tab-product-price');
            if (!h3) return;
            // Encontrar la tab donde está el producto
            const tab = card.closest('[id^="tab-"]');
            const tabLabel = tab ? tab.id.replace('tab-', '') : 'tienda';
            items.push({
                title: h3.textContent.trim(),
                sub: price ? price.textContent.trim() : '',
                icon: 'fa-cookie-bite',
                action: () => {
                    // Activar la tab correcta y hacer scroll
                    if (tab) {
                        document.querySelectorAll('.shop-tab').forEach(b => b.classList.remove('active'));
                        document.querySelectorAll('.tab-content').forEach(p => p.classList.remove('active'));
                        tab.classList.add('active');
                        const tabBtn = document.querySelector(`.shop-tab[data-target="${tab.id}"]`);
                        if (tabBtn) tabBtn.classList.add('active');
                        // Mostrar card si estaba oculta (load more)
                        card.style.display = '';
                    }
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.style.outline = '2px solid var(--color-primary)';
                    card.style.borderRadius = 'var(--radius-card)';
                    setTimeout(() => { card.style.outline = ''; }, 1800);
                }
            });
        });

        // Secciones principales
        const sections = [
            { sel: '#shop',   label: 'Tienda', icon: 'fa-store' },
            { sel: '#about',  label: 'Nuestra Historia', icon: 'fa-heart' },
            { sel: '#faq',    label: 'Visítanos & FAQ', icon: 'fa-map-marker-alt' },
            { sel: '#packs-section', label: 'Packs especiales', icon: 'fa-star' },
        ];
        sections.forEach(({ sel, label, icon }) => {
            const el = document.querySelector(sel);
            if (!el) return;
            items.push({
                title: label,
                sub: 'Sección',
                icon,
                action: () => el.scrollIntoView({ behavior: 'smooth' })
            });
        });

        // FAQ
        document.querySelectorAll('.faq-item').forEach(item => {
            const q = item.querySelector('.faq-question, button, dt, summary, h3, h4');
            if (!q) return;
            items.push({
                title: q.textContent.replace(/[+\-▼▲]/g, '').trim(),
                sub: 'Preguntas frecuentes',
                icon: 'fa-question-circle',
                action: () => {
                    item.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    // Abrir acordeón si está cerrado
                    const btn = item.querySelector('button, .faq-question');
                    if (btn && !item.classList.contains('active')) btn.click();
                }
            });
        });

        return items;
    }

    let searchIndex = null;

    function runSearch(query) {
        if (!searchIndex) searchIndex = buildSearchIndex();
        const q = query.trim().toLowerCase();

        if (!q) {
            searchResultsEl.innerHTML = '<p class="search-hint">escribe para buscar productos, secciones o preguntas frecuentes...</p>';
            return;
        }

        const results = searchIndex.filter(item =>
            item.title.toLowerCase().includes(q) || item.sub.toLowerCase().includes(q)
        );

        if (!results.length) {
            searchResultsEl.innerHTML = `<p class="search-empty">sin resultados para "<strong>${query}</strong>"</p>`;
            return;
        }

        searchResultsEl.innerHTML = results.slice(0, 8).map((r, i) => `
            <div class="search-result-item" data-idx="${i}">
                <div class="search-result-icon"><i class="fas ${r.icon}"></i></div>
                <div class="search-result-text">
                    <div class="search-result-title">${r.title}</div>
                    ${r.sub ? `<div class="search-result-sub">${r.sub}</div>` : ''}
                </div>
            </div>
        `).join('');

        searchResultsEl.querySelectorAll('.search-result-item').forEach(el => {
            el.addEventListener('click', () => {
                results[parseInt(el.dataset.idx)].action();
                closeSearch();
            });
        });
    }

    // Inicializar hint
    searchResultsEl.innerHTML = '<p class="search-hint">escribe para buscar productos, secciones o preguntas frecuentes...</p>';

    searchOpenBtn.addEventListener('click', openSearch);
    searchCloseBtn.addEventListener('click', closeSearch);
    searchOverlay.addEventListener('click', e => { if (e.target === searchOverlay) closeSearch(); });
    searchInput.addEventListener('input', () => runSearch(searchInput.value));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });
    // ─────────────────────────────────────────────────────────────────────────

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
                <img src="${item.image || 'assets/logo.png'}" alt="${item.title}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    ${item.details ? `<div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 5px; line-height: 1.2;">${item.details}</div>` : ''}
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
            const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
            return acc + (isNaN(price) ? 0 : price * item.quantity);
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
        // Buscamos si ya existe exactamente el mismo producto (mismo nombre y mismos detalles si los tiene)
        const existingItem = cart.find(item => item.title === product.title && item.details === product.details);
        
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
        
        if (e.target.closest('.tab-add-btn') && !e.target.closest('.btn-open-cake-modal') && !e.target.closest('.btn-open-modal') && !e.target.closest('.btn-open-cupcake-modal') && !e.target.closest('.btn-open-mini-modal') && !e.target.closest('.btn-open-macaron-modal')) {
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
    const testimonialDots = document.querySelectorAll('#slider-dots .dot');

    if (track && slides.length > 0) {
        let currentIndex = 0;

        const updateSlider = () => {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            testimonialDots.forEach(dot => dot.classList.remove('active'));
            if (testimonialDots[currentIndex]) testimonialDots[currentIndex].classList.add('active');
        };

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider();
        });

        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });

        // Inicializar el slider al cargar
        updateSlider();
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

    // Favorites "Ver más" → activar tab del shop
    document.querySelectorAll('.fav-view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabTarget = btn.getAttribute('data-tab');
            const tabBtn = document.querySelector(`.shop-tab[data-target="${tabTarget}"]`);
            if (tabBtn) tabBtn.click();
            setTimeout(() => {
                document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
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
                message: "Atendemos todos los días de Lunes a Domingo, de 7:00 AM a 10:00 PM. Hacemos entregas a domicilio en toda la zona metropolitana.",
                options: [
                    { text: "Preguntas Frecuentes", link: "#faq" },
                    { text: "Volver al inicio", next: "start" }
                ]
            },
            custom: {
                message: "¡Sí! Hacemos pedidos especiales para eventos, bodas y regalos corporativos. Escríbenos y Jackie se pondrá en contacto contigo.",
                options: [
                    { text: "📧 Enviar un email", link: "mailto:cookiesbyjackienyc@gmail.com", external: true },
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
                message: "We're open every day, Monday through Sunday, from 7:00 AM to 10:00 PM. We offer door-to-door delivery across the metropolitan area.",
                options: [
                    { text: "View FAQ", link: "#faq" },
                    { text: "Back to start", next: "start" }
                ]
            },
            custom: {
                message: "Absolutely! We love crafting bespoke delights for weddings, corporate gifts, and special celebrations. Send us an email and Jackie will get back to you.",
                options: [
                    { text: "📧 Send an email", link: "mailto:cookiesbyjackienyc@gmail.com", external: true },
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

    // --- Lógica del Carrusel de Productos ---
    document.querySelectorAll('.product-carousel').forEach(carousel => {
        const images = carousel.querySelectorAll('img');
        const dots = carousel.querySelectorAll('.dot');
        // Detectar el índice inicial desde la clase 'active' ya puesta en el HTML
        let startIndex = 0;
        images.forEach((img, i) => { if (img.classList.contains('active')) startIndex = i; });
        let currentIndex = startIndex;
        let interval;

        if (images.length <= 1) return;

        function showSlide(index) {
            images.forEach(img => img.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            currentIndex = index;
            if (currentIndex >= images.length) currentIndex = 0;
            if (currentIndex < 0) currentIndex = images.length - 1;
            
            images[currentIndex].classList.add('active');
            if (dots[currentIndex]) dots[currentIndex].classList.add('active');
        }

        function nextSlide() { showSlide(currentIndex + 1); }
        function prevSlide() { showSlide(currentIndex - 1); }

        function startAutoSlide() {
            clearInterval(interval);
            interval = setInterval(nextSlide, 3500);
        }

        // Mostrar el slide inicial correcto inmediatamente
        showSlide(startIndex);

        // Iniciar slide automático
        startAutoSlide();

        // Click en puntos
        dots.forEach((dot, index) => {
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                showSlide(index);
                startAutoSlide();
            });
        });

        // Swipe en móvil
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
            clearInterval(interval);
        }, {passive: true});

        carousel.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
            startAutoSlide();
        }, {passive: true});

        function handleSwipe() {
            const swipeDist = touchEndX - touchStartX;
            if (swipeDist < -30) nextSlide(); // Swipe Izquierda
            if (swipeDist > 30) prevSlide(); // Swipe Derecha
        }
    });

    // --- Lógica del Checkout Modal ---
    const checkoutBtn = document.querySelector('.checkout-btn');
    const checkoutModalOverlay = document.getElementById('checkout-modal-overlay');
    const checkoutModalClose = document.getElementById('checkout-modal-close');
    const checkoutOrderSummary = document.getElementById('checkout-order-summary');
    const checkoutFinalTotal = document.getElementById('checkout-final-total');
    const stripeCheckoutBtn = document.getElementById('stripe-checkout-btn');

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return; // No abrir si está vacío
            
            // Llenar resumen
            let summaryHtml = '';
            cart.forEach(item => {
                summaryHtml += `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <div>
                            <strong>${item.quantity}x ${item.title}</strong>
                            ${item.details ? `<br><span style="font-size:0.8rem; color:var(--text-secondary)">${item.details}</span>` : ''}
                        </div>
                        <div>${item.price}</div>
                    </div>
                `;
            });
            checkoutOrderSummary.innerHTML = summaryHtml;
            checkoutFinalTotal.textContent = cartTotalElement.textContent;

            // Cerrar carrito y abrir modal
            toggleCart();
            checkoutModalOverlay.classList.add('active');
        });
    }

    if (checkoutModalClose) {
        checkoutModalClose.addEventListener('click', () => {
            checkoutModalOverlay.classList.remove('active');
            toggleCart(); // Reabrir el carrito para que el usuario pueda modificarlo
        });
    }

    if (stripeCheckoutBtn) {
        stripeCheckoutBtn.addEventListener('click', () => {
            // Validar formulario
            const name = document.getElementById('checkout-name').value;
            const email = document.getElementById('checkout-email').value;
            const phone = document.getElementById('checkout-phone').value;
            const date = document.getElementById('checkout-date').value;
            const time = document.getElementById('checkout-time').value;

            if(!name || !email || !phone || !date || !time) {
                alert("Por favor completa todos los campos requeridos para la recogida.");
                return;
            }

            // Preparar metadatos para Stripe (Fase 3)
            const orderMetadata = {
                customerName: name,
                customerEmail: email,
                customerPhone: phone,
                pickupDate: date,
                pickupTime: time,
                notes: document.getElementById('checkout-notes').value,
                orderItems: cart
            };

            console.log("Stripe Metadata Preparada:", orderMetadata);
            alert("Redirigiendo a Stripe...\n\n(Fase 3: Aquí se conectará la pasarela de pago usando la metadata preparada)");
        });
    }

    // --- Lógica del Selector de Galletas (Modal) ---
    const allCookies = [
        "Salted Caramel Chocolate Chip Cookie", "Chocolate Chip Cookie", "Red Velvet Cookie",
        "Oreo Chocolate Chip", "Nutella Chocolate Chip", "Brookie Cookie",
        "Biscoff Chocolate Chip Cookie", "Snickerdoodle", "Sugar cookie",
        "Fruity Pebbles Sugar Cookie", "Oatmeal Raisin Cookie", "Gluten Free Chocolate Chip",
        "M&M Chocolate Chip Cookie", "M&M Chocolate Chip Cookie Sandwich", "Oreo Red Velvet Cookie",
        "Triple Chocolate Chip Cookie", "Peanut Butter and Jelly Cookie", "Pistachio White Chocolate Chip Cookie",
        "Caramel Pistachio White Chocolate Chip Cookie", "Chocolate Chip Cookie Sandwich with Vanilla Buttercream",
        "Snickerdoodle Cookie Sandwich with Vanilla Buttercream", "Sugar Cookie Sandwich with Vanilla Buttercream"
    ];

    const modalOverlay = document.getElementById('cookie-modal-overlay');
    const modalClose = document.getElementById('cookie-modal-close');
    const modalList = document.getElementById('cookie-modal-list');
    const countText = document.getElementById('cookie-count-text');
    const progressBar = document.getElementById('cookie-progress-bar');
    const confirmBtn = document.getElementById('cookie-confirm-btn');
    const modalTitle = document.getElementById('cookie-modal-title');

    let currentMax = 0;
    let currentSelectedTotal = 0;
    let selectedCookiesMap = {}; // { "Nombre": cantidad }
    let currentProductName = "";
    let currentProductPrice = 0;

    // Generar lista en el HTML
    allCookies.forEach((cookie, index) => {
        const itemHtml = `
            <div class="cookie-item">
                <div class="cookie-thumb">
                    <img src="assets/Pick 6 Cookie Box/${cookie}.png" alt="${cookie}" loading="lazy">
                </div>
                <div class="cookie-name">${cookie}</div>
                <div class="cookie-controls">
                    <button class="cookie-btn minus-btn" data-id="${index}">-</button>
                    <span class="cookie-count" id="count-${index}">0</span>
                    <button class="cookie-btn plus-btn" data-id="${index}">+</button>
                </div>
            </div>
        `;
        modalList.insertAdjacentHTML('beforeend', itemHtml);
    });

    // Abrir Modal
    document.querySelectorAll('.btn-open-modal').forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentMax = parseInt(btn.dataset.max);
            currentProductName = btn.dataset.product;
            currentProductPrice = parseFloat(btn.dataset.price);
            
            modalTitle.textContent = translations[currentLang].modal_cookies_title.replace('{0}', currentMax);
            resetModal();
            modalOverlay.classList.add('active');
        });
    });

    // Cerrar Modal
    modalClose.addEventListener('click', () => modalOverlay.classList.remove('active'));
    modalOverlay.addEventListener('click', (e) => {
        if(e.target === modalOverlay) modalOverlay.classList.remove('active');
    });

    function resetModal() {
        currentSelectedTotal = 0;
        selectedCookiesMap = {};
        document.querySelectorAll('.cookie-count').forEach(el => el.textContent = '0');
        updateModalUI();
    }

    function updateModalUI() {
        const t = translations[currentLang];
        countText.textContent = t.modal_count.replace('{0}', currentSelectedTotal).replace('{1}', currentMax);
        const progressPercentage = (currentSelectedTotal / currentMax) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        // Activar/desactivar botones +
        const disablePlus = currentSelectedTotal >= currentMax;
        document.querySelectorAll('.plus-btn').forEach(btn => {
            btn.disabled = disablePlus;
        });

        // Activar/desactivar botones -
        document.querySelectorAll('.minus-btn').forEach(btn => {
            const id = btn.dataset.id;
            const count = parseInt(document.getElementById(`count-${id}`).textContent);
            btn.disabled = count <= 0;
        });

        // Habilitar botón confirmar solo si se alcanzó el límite
        confirmBtn.disabled = currentSelectedTotal !== currentMax;
        if(currentSelectedTotal === currentMax) {
            confirmBtn.textContent = t.modal_add_cart;
            confirmBtn.style.backgroundColor = 'var(--color-primary)';
            confirmBtn.style.removeProperty('color');
        } else {
            confirmBtn.textContent = t.modal_cookies_missing;
            confirmBtn.style.backgroundColor = '#ccc';
            confirmBtn.style.removeProperty('color');
        }
    }

    // Botones + y -
    document.querySelectorAll('.plus-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if(currentSelectedTotal < currentMax) {
                const id = btn.dataset.id;
                const countSpan = document.getElementById(`count-${id}`);
                const currentCount = parseInt(countSpan.textContent);
                
                countSpan.textContent = currentCount + 1;
                currentSelectedTotal++;
                
                const cookieName = allCookies[id];
                selectedCookiesMap[cookieName] = (selectedCookiesMap[cookieName] || 0) + 1;
                
                updateModalUI();
            }
        });
    });

    document.querySelectorAll('.minus-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = btn.dataset.id;
            const countSpan = document.getElementById(`count-${id}`);
            const currentCount = parseInt(countSpan.textContent);
            
            if(currentCount > 0) {
                countSpan.textContent = currentCount - 1;
                currentSelectedTotal--;
                
                const cookieName = allCookies[id];
                if(selectedCookiesMap[cookieName]) {
                    selectedCookiesMap[cookieName]--;
                    if(selectedCookiesMap[cookieName] === 0) delete selectedCookiesMap[cookieName];
                }
                
                updateModalUI();
            }
        });
    });

    // Confirmar y Agregar al Carrito Temporal
    confirmBtn.addEventListener('click', () => {
        if(currentSelectedTotal === currentMax) {
            // Estructura para agregar al carrito
            const orderDetails = Object.entries(selectedCookiesMap)
                                    .map(([name, qty]) => `${qty}x ${name}`)
                                    .join(", ");
            
            // Agregar al carrito
            addToCart({
                title: currentProductName,
                price: `$${currentProductPrice.toFixed(2)}`,
                image: 'assets/Pick 6 Cookie Box/Brookie Cookie.png',
                details: orderDetails
            });
            
            modalOverlay.classList.remove('active');
        }
    });

    // --- Lógica del Selector de Pasteles (Modal) ---
    const cakeModalOverlay = document.getElementById('cake-modal-overlay');
    const cakeModalClose = document.getElementById('cake-modal-close');
    const cakeModalTitle = document.getElementById('cake-modal-title');
    const cakeOptionsContainer = document.getElementById('cake-options-container');
    const cakeModalPrice = document.getElementById('cake-modal-price');
    const cakeConfirmBtn = document.getElementById('cake-confirm-btn');

    let currentCakeData = {
        name: '',
        type: '',
        basePrice: 0,
        currentPrice: 0
    };

    const cakeOptions = {
        vintage: {
            flavors: {
                es: ["Chocolate", "Vainilla", "Red Velvet"],
                en: ["Chocolate", "Vanilla", "Red Velvet"]
            },
            colors: {
                es: ["Blanco", "Rosado", "Verde", "Amarillo", "Anaranjado", "Morado", "Rojo", "Coral", "Burgundy", "Aquamarine"],
                en: ["White", "Pink", "Green", "Yellow", "Orange", "Purple", "Red", "Coral", "Burgundy", "Aquamarine"]
            }
        },
        naked: {
            sizes: {
                es: [
                    { label: '8" Pulgadas (10-12 porciones)', value: '49.95' },
                    { label: '10" Pulgadas (15-18 porciones)', value: '59.95' }
                ],
                en: [
                    { label: '8" (10-12 servings)', value: '49.95' },
                    { label: '10" (15-18 servings)', value: '59.95' }
                ]
            },
            flavors: ["Vanilla", "Chocolate", "Red Velvet", "Carrot"],
            frostings: ["Vanilla Buttercream", "Chocolate Buttercream", "Cream Cheese Frosting"]
        }
    };

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.btn-open-cake-modal');
        if (btn) {
            const type = btn.dataset.type;
            const name = btn.dataset.name;
            const price = parseFloat(btn.dataset.price);

            currentCakeData = { name, type, basePrice: price, currentPrice: price };
            
            cakeModalTitle.textContent = name;
            cakeModalPrice.textContent = `$${price.toFixed(2)}`;
            
            renderCakeOptions(type);
            cakeModalOverlay.classList.add('active');
        }
    });

    const renderCakeOptions = (type) => {
        const t = translations[currentLang];
        const lang = currentLang;
        let html = '';
        if (type === 'vintage') {
            html += `
                <div class="cake-option-group">
                    <label>${t.cake_label_flavor}</label>
                    <select class="cake-select" id="cake-flavor">
                        ${cakeOptions.vintage.flavors[lang].map(f => `<option value="${f}">${f}</option>`).join('')}
                    </select>
                </div>
                <div class="cake-option-group">
                    <label>${t.cake_label_color}</label>
                    <select class="cake-select" id="cake-color">
                        ${cakeOptions.vintage.colors[lang].map(c => `<option value="${c}">${c}</option>`).join('')}
                    </select>
                </div>
            `;
        } else if (type === 'naked') {
            html += `
                <div class="cake-option-group">
                    <label>${t.cake_label_size}</label>
                    <select class="cake-select" id="cake-size" onchange="window.updateNakedPrice(this)">
                        ${cakeOptions.naked.sizes[lang].map(s => `<option value="${s.value}">${s.label}</option>`).join('')}
                    </select>
                </div>
                <div class="cake-option-group">
                    <label>${t.cake_label_flavor}</label>
                    <select class="cake-select" id="cake-flavor">
                        ${cakeOptions.naked.flavors.map(f => `<option value="${f}">${f}</option>`).join('')}
                    </select>
                </div>
                <div class="cake-option-group">
                    <label>${t.cake_label_frosting}</label>
                    <select class="cake-select" id="cake-frosting">
                        ${cakeOptions.naked.frostings.map(f => `<option value="${f}">${f}</option>`).join('')}
                    </select>
                </div>
            `;
        }
        cakeOptionsContainer.innerHTML = html;
    };

    window.updateNakedPrice = (select) => {
        const price = parseFloat(select.value);
        currentCakeData.currentPrice = price;
        cakeModalPrice.textContent = `$${price.toFixed(2)}`;
    };

    cakeConfirmBtn.addEventListener('click', () => {
        const t = translations[currentLang];
        let details = '';
        if (currentCakeData.type === 'vintage') {
            const flavor = document.getElementById('cake-flavor').value;
            const color = document.getElementById('cake-color').value;
            details = `${t.cake_detail_flavor}: ${flavor}, ${t.cake_detail_color}: ${color}`;
        } else if (currentCakeData.type === 'naked') {
            const sizeSelect = document.getElementById('cake-size');
            const sizeLabel = sizeSelect.options[sizeSelect.selectedIndex].text.split(' (')[0];
            const flavor = document.getElementById('cake-flavor').value;
            const frosting = document.getElementById('cake-frosting').value;
            details = `${t.cake_detail_size}: ${sizeLabel}, ${t.cake_detail_flavor}: ${flavor}, ${t.cake_detail_frosting}: ${frosting}`;
        }

        let imagePath = `assets/cake/${currentCakeData.name}.png`;
        if (currentCakeData.name === "Vintage Heart Cakes") {
            imagePath = "assets/cake/Vintage Heart Cakes/Vintage Heart Cakes Chocolate.png";
        } else if (currentCakeData.name === "Vintage Round Cakes") {
            imagePath = "assets/cake/Vintage Round Cakes/Vintage Round Cakes Chocolate.png";
        } else if (currentCakeData.name === "Naked Cake") {
            imagePath = "assets/cake/Naked Cake/NAKED CAKE 1.png";
        }

        addToCart({
            title: currentCakeData.name,
            price: `$${currentCakeData.currentPrice.toFixed(2)}`,
            image: imagePath,
            details: details
        });

        cakeModalOverlay.classList.remove('active');
    });

    cakeModalClose.addEventListener('click', () => {
        cakeModalOverlay.classList.remove('active');
    });

    // --- Lógica del Selector de Cupcakes (Modal) ---
    const allCupcakes = [
        "Carrot Cupcake with Cream Cheese Icing",
        "Chocolate cupcake with chocolate buttercream",
        "Chocolate cupcake with vanilla buttercream",
        "Red Velvet Cupcake with Cream Cheese Icing",
        "Vanilla cupcake with chocolate buttercrem vanilla",
        "Vanilla Cupcake with Vanilla Buttercream"
    ];

    const cupcakeModalOverlay = document.getElementById('cupcake-modal-overlay');
    const cupcakeModalClose = document.getElementById('cupcake-modal-close');
    const cupcakeModalList = document.getElementById('cupcake-modal-list');
    const cupcakeCountText = document.getElementById('cupcake-count-text');
    const cupcakeProgressBar = document.getElementById('cupcake-progress-bar');
    const cupcakeConfirmBtn = document.getElementById('cupcake-confirm-btn');
    const cupcakeModalTitle = document.getElementById('cupcake-modal-title');

    let cupcakeMax = 0;
    let cupcakeSelectedTotal = 0;
    let selectedCupcakesMap = {};
    let cupcakeProductName = "";
    let cupcakeProductPrice = 0;

    // Generar lista de cupcakes en el modal
    allCupcakes.forEach((cupcake, index) => {
        const itemHtml = `
            <div class="cookie-item">
                <div class="cookie-thumb">
                    <img src="assets/cup cakes/${cupcake}.png" alt="${cupcake}" loading="lazy">
                </div>
                <div class="cookie-name">${cupcake}</div>
                <div class="cookie-controls">
                    <button class="cookie-btn cupcake-minus-btn" data-id="${index}">-</button>
                    <span class="cookie-count" id="cupcake-count-${index}">0</span>
                    <button class="cookie-btn cupcake-plus-btn" data-id="${index}">+</button>
                </div>
            </div>
        `;
        cupcakeModalList.insertAdjacentHTML('beforeend', itemHtml);
    });

    function resetCupcakeModal() {
        cupcakeSelectedTotal = 0;
        selectedCupcakesMap = {};
        document.querySelectorAll('#cupcake-modal-list .cookie-count').forEach(el => el.textContent = '0');
        updateCupcakeModalUI();
    }

    function updateCupcakeModalUI() {
        const t = translations[currentLang];
        cupcakeCountText.textContent = t.modal_count.replace('{0}', cupcakeSelectedTotal).replace('{1}', cupcakeMax);
        const pct = (cupcakeSelectedTotal / cupcakeMax) * 100;
        cupcakeProgressBar.style.width = `${pct}%`;

        const disablePlus = cupcakeSelectedTotal >= cupcakeMax;
        document.querySelectorAll('.cupcake-plus-btn').forEach(b => b.disabled = disablePlus);
        document.querySelectorAll('.cupcake-minus-btn').forEach(b => {
            const count = parseInt(document.getElementById(`cupcake-count-${b.dataset.id}`).textContent);
            b.disabled = count <= 0;
        });

        cupcakeConfirmBtn.disabled = cupcakeSelectedTotal !== cupcakeMax;
        if (cupcakeSelectedTotal === cupcakeMax) {
            cupcakeConfirmBtn.textContent = t.modal_add_cart;
            cupcakeConfirmBtn.style.backgroundColor = 'var(--color-primary)';
            cupcakeConfirmBtn.style.removeProperty('color');
        } else {
            cupcakeConfirmBtn.textContent = t.modal_cupcakes_missing;
            cupcakeConfirmBtn.style.backgroundColor = '#ccc';
            cupcakeConfirmBtn.style.removeProperty('color');
        }
    }

    // Abrir modal de cupcakes
    document.querySelectorAll('.btn-open-cupcake-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            cupcakeMax = parseInt(btn.dataset.max);
            cupcakeProductName = btn.dataset.product;
            cupcakeProductPrice = parseFloat(btn.dataset.price);
            cupcakeModalTitle.textContent = translations[currentLang].modal_cupcakes_title.replace('{0}', cupcakeMax);
            resetCupcakeModal();
            cupcakeModalOverlay.classList.add('active');
        });
    });

    // Cerrar modal de cupcakes
    cupcakeModalClose.addEventListener('click', () => cupcakeModalOverlay.classList.remove('active'));
    cupcakeModalOverlay.addEventListener('click', (e) => {
        if (e.target === cupcakeModalOverlay) cupcakeModalOverlay.classList.remove('active');
    });

    // Botones + y -
    document.querySelectorAll('.cupcake-plus-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (cupcakeSelectedTotal < cupcakeMax) {
                const id = btn.dataset.id;
                const span = document.getElementById(`cupcake-count-${id}`);
                span.textContent = parseInt(span.textContent) + 1;
                cupcakeSelectedTotal++;
                selectedCupcakesMap[allCupcakes[id]] = (selectedCupcakesMap[allCupcakes[id]] || 0) + 1;
                updateCupcakeModalUI();
            }
        });
    });

    document.querySelectorAll('.cupcake-minus-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const span = document.getElementById(`cupcake-count-${id}`);
            const current = parseInt(span.textContent);
            if (current > 0) {
                span.textContent = current - 1;
                cupcakeSelectedTotal--;
                selectedCupcakesMap[allCupcakes[id]]--;
                if (selectedCupcakesMap[allCupcakes[id]] <= 0) delete selectedCupcakesMap[allCupcakes[id]];
                updateCupcakeModalUI();
            }
        });
    });

    // Confirmar selección de cupcakes
    cupcakeConfirmBtn.addEventListener('click', () => {
        if (cupcakeSelectedTotal !== cupcakeMax) return;
        const details = Object.entries(selectedCupcakesMap)
            .filter(([, qty]) => qty > 0)
            .map(([name, qty]) => `${qty}x ${name}`)
            .join(', ');

        addToCart({
            title: cupcakeProductName,
            price: `$${cupcakeProductPrice.toFixed(2)}`,
            image: 'assets/cup cakes/Chocolate cupcake with chocolate buttercream.png',
            details: details
        });

        cupcakeModalOverlay.classList.remove('active');
    });

    // ── Macaron Picker ────────────────────────────────────────────────────────
    const allMacarons = {
        es: ["Birthday", "Churro", "Crème Brûlée", "Pistacho", "Raspberry", "Tiramisú", "Vanilla"],
        en: ["Birthday", "Churro", "Crème Brûlée", "Pistachio", "Raspberry", "Tiramisu", "Vanilla"]
    };

    const macaronImages = [
        "assets/macarons/Birthday.png",
        "assets/macarons/Churro.png",
        "assets/macarons/Crème Brûlée.png",
        "assets/macarons/Pistacho.png",
        "assets/macarons/Raspberry.png",
        "assets/macarons/Tiramisú.png",
        "assets/macarons/Vanilla.png"
    ];

    const macaronModalOverlay = document.getElementById('macaron-modal-overlay');
    const macaronModalClose   = document.getElementById('macaron-modal-close');
    const macaronModalList    = document.getElementById('macaron-modal-list');
    const macaronCountText    = document.getElementById('macaron-count-text');
    const macaronProgressBar  = document.getElementById('macaron-progress-bar');
    const macaronConfirmBtn   = document.getElementById('macaron-confirm-btn');
    const macaronModalTitle   = document.getElementById('macaron-modal-title');

    let macaronMax = 0;
    let macaronSelectedTotal = 0;
    let selectedMacaronMap = {};
    let macaronProductName = "";
    let macaronProductPrice = 0;

    allMacarons.es.forEach((macaron, index) => {
        macaronModalList.insertAdjacentHTML('beforeend', `
            <div class="cookie-item">
                <div class="cookie-thumb">
                    <img src="${macaronImages[index]}" alt="${macaron}" loading="lazy">
                </div>
                <div class="cookie-name" data-i18n="macaron_${index}">${macaron}</div>
                <div class="cookie-controls">
                    <button class="cookie-btn macaron-minus-btn" data-id="${index}">-</button>
                    <span class="cookie-count" id="macaron-count-${index}">0</span>
                    <button class="cookie-btn macaron-plus-btn" data-id="${index}">+</button>
                </div>
            </div>
        `);
    });

    function resetMacaronModal() {
        macaronSelectedTotal = 0;
        selectedMacaronMap = {};
        document.querySelectorAll('#macaron-modal-list .cookie-count').forEach(el => el.textContent = '0');
        updateMacaronModalUI();
    }

    function updateMacaronModalUI() {
        const t = translations[currentLang];
        macaronCountText.textContent = t.modal_count.replace('{0}', macaronSelectedTotal).replace('{1}', macaronMax);
        macaronProgressBar.style.width = `${(macaronSelectedTotal / macaronMax) * 100}%`;
        const disablePlus = macaronSelectedTotal >= macaronMax;
        document.querySelectorAll('.macaron-plus-btn').forEach(b => b.disabled = disablePlus);
        document.querySelectorAll('.macaron-minus-btn').forEach(b => {
            b.disabled = parseInt(document.getElementById(`macaron-count-${b.dataset.id}`).textContent) <= 0;
        });
        macaronConfirmBtn.disabled = macaronSelectedTotal !== macaronMax;
        if (macaronSelectedTotal === macaronMax) {
            macaronConfirmBtn.textContent = t.modal_add_cart;
            macaronConfirmBtn.style.backgroundColor = 'var(--color-primary)';
            macaronConfirmBtn.style.removeProperty('color');
        } else {
            macaronConfirmBtn.textContent = t.modal_macarons_missing;
            macaronConfirmBtn.style.backgroundColor = '#ccc';
            macaronConfirmBtn.style.removeProperty('color');
        }
    }

    document.querySelectorAll('.btn-open-macaron-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            macaronMax = parseInt(btn.dataset.max);
            macaronProductName = btn.dataset.product;
            macaronProductPrice = parseFloat(btn.dataset.price);
            macaronModalTitle.textContent = translations[currentLang].modal_macarons_title.replace('{0}', macaronMax);
            resetMacaronModal();
            macaronModalOverlay.classList.add('active');
        });
    });

    macaronModalClose.addEventListener('click', () => macaronModalOverlay.classList.remove('active'));
    macaronModalOverlay.addEventListener('click', (e) => {
        if (e.target === macaronModalOverlay) macaronModalOverlay.classList.remove('active');
    });

    document.querySelectorAll('.macaron-plus-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (macaronSelectedTotal < macaronMax) {
                const id = parseInt(btn.dataset.id);
                const span = document.getElementById(`macaron-count-${id}`);
                span.textContent = parseInt(span.textContent) + 1;
                macaronSelectedTotal++;
                const name = allMacarons[currentLang][id];
                selectedMacaronMap[name] = (selectedMacaronMap[name] || 0) + 1;
                updateMacaronModalUI();
            }
        });
    });

    document.querySelectorAll('.macaron-minus-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const span = document.getElementById(`macaron-count-${id}`);
            const current = parseInt(span.textContent);
            if (current > 0) {
                span.textContent = current - 1;
                macaronSelectedTotal--;
                const name = allMacarons[currentLang][id];
                selectedMacaronMap[name]--;
                if (selectedMacaronMap[name] <= 0) delete selectedMacaronMap[name];
                updateMacaronModalUI();
            }
        });
    });

    macaronConfirmBtn.addEventListener('click', () => {
        if (macaronSelectedTotal !== macaronMax) return;
        const details = Object.entries(selectedMacaronMap)
            .filter(([, qty]) => qty > 0)
            .map(([name, qty]) => `${qty}x ${name}`)
            .join(', ');
        addToCart({
            title: macaronProductName,
            price: `$${macaronProductPrice.toFixed(2)}`,
            image: 'assets/macarons/Raspberry.png',
            details: details
        });
        macaronModalOverlay.classList.remove('active');
    });

    // ── Mini Individual Cakes Picker ──────────────────────────────────────────
    const allMiniCakes = [
        "Cannoli Cheesecake",
        "Caramel Cheesecake",
        "Carrot Cake",
        "Chocolate Cake",
        "Chocolate Cheesecake",
        "Chocolate Dipped Cheesecake",
        "Classic Cheesecake",
        "Confetti Cake",
        "Confetti Cheesecake",
        "Fruity Pebbles Cheesecake",
        "Oreo Cheesecake",
        "Red Velvet Cake",
        "Red Velvet Cheesecake",
        "Strawberry Cheesecake",
        "Tiramisú",
        "Tres Leches"
    ];

    const miniCakeImages = [
        "assets/mini individual/Cannoli Cheesecake.png",
        "assets/mini individual/Caramel cheesecake.png",
        "assets/mini individual/Carrot Cake.png",
        "assets/mini individual/Chocolate Cake.png",
        "assets/mini individual/Chocolate Cheesecake.png",
        "assets/mini individual/Chocolate Dipped Cheesecake.png",
        "assets/mini individual/Classic Cheesecake.png",
        "assets/mini individual/Confetti Cake.png",
        "assets/mini individual/Confetti Cheesecake.png",
        "assets/mini individual/Fruity Pebbles Cheesecake.png",
        "assets/mini individual/Oreo Cheesecake.png",
        "assets/mini individual/Red velvet Cake.png",
        "assets/mini individual/Red Velvet Cheesecake.png",
        "assets/mini individual/Strawberry cheesecake.png",
        "assets/mini individual/Tiramisú.png",
        "assets/mini individual/Tres leches.png"
    ];

    const miniModalOverlay   = document.getElementById('mini-modal-overlay');
    const miniModalClose     = document.getElementById('mini-modal-close');
    const miniModalList      = document.getElementById('mini-modal-list');
    const miniCountText      = document.getElementById('mini-count-text');
    const miniProgressBar    = document.getElementById('mini-progress-bar');
    const miniConfirmBtn     = document.getElementById('mini-confirm-btn');
    const miniModalTitle     = document.getElementById('mini-modal-title');

    let miniMax = 0;
    let miniSelectedTotal = 0;
    let selectedMiniMap = {};
    let miniProductName = "";
    let miniProductPrice = 0;

    allMiniCakes.forEach((cake, index) => {
        miniModalList.insertAdjacentHTML('beforeend', `
            <div class="cookie-item">
                <div class="cookie-thumb">
                    <img src="${miniCakeImages[index]}" alt="${cake}" loading="lazy">
                </div>
                <div class="cookie-name">${cake}</div>
                <div class="cookie-controls">
                    <button class="cookie-btn mini-minus-btn" data-id="${index}">-</button>
                    <span class="cookie-count" id="mini-count-${index}">0</span>
                    <button class="cookie-btn mini-plus-btn" data-id="${index}">+</button>
                </div>
            </div>
        `);
    });

    function resetMiniModal() {
        miniSelectedTotal = 0;
        selectedMiniMap = {};
        document.querySelectorAll('#mini-modal-list .cookie-count').forEach(el => el.textContent = '0');
        updateMiniModalUI();
    }

    function updateMiniModalUI() {
        const t = translations[currentLang];
        miniCountText.textContent = t.modal_count.replace('{0}', miniSelectedTotal).replace('{1}', miniMax);
        miniProgressBar.style.width = `${(miniSelectedTotal / miniMax) * 100}%`;
        const disablePlus = miniSelectedTotal >= miniMax;
        document.querySelectorAll('.mini-plus-btn').forEach(b => b.disabled = disablePlus);
        document.querySelectorAll('.mini-minus-btn').forEach(b => {
            b.disabled = parseInt(document.getElementById(`mini-count-${b.dataset.id}`).textContent) <= 0;
        });
        miniConfirmBtn.disabled = miniSelectedTotal !== miniMax;
        if (miniSelectedTotal === miniMax) {
            miniConfirmBtn.textContent = t.modal_add_cart;
            miniConfirmBtn.style.backgroundColor = 'var(--color-primary)';
            miniConfirmBtn.style.removeProperty('color');
        } else {
            miniConfirmBtn.textContent = t.modal_mini_missing;
            miniConfirmBtn.style.backgroundColor = '#ccc';
            miniConfirmBtn.style.removeProperty('color');
        }
    }

    document.querySelectorAll('.btn-open-mini-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            miniMax = parseInt(btn.dataset.max);
            miniProductName = btn.dataset.product;
            miniProductPrice = parseFloat(btn.dataset.price);
            miniModalTitle.textContent = translations[currentLang].modal_mini_title.replace('{0}', miniMax);
            resetMiniModal();
            miniModalOverlay.classList.add('active');
        });
    });

    miniModalClose.addEventListener('click', () => miniModalOverlay.classList.remove('active'));
    miniModalOverlay.addEventListener('click', (e) => {
        if (e.target === miniModalOverlay) miniModalOverlay.classList.remove('active');
    });

    document.querySelectorAll('.mini-plus-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (miniSelectedTotal < miniMax) {
                const id = btn.dataset.id;
                const span = document.getElementById(`mini-count-${id}`);
                span.textContent = parseInt(span.textContent) + 1;
                miniSelectedTotal++;
                selectedMiniMap[allMiniCakes[id]] = (selectedMiniMap[allMiniCakes[id]] || 0) + 1;
                updateMiniModalUI();
            }
        });
    });

    document.querySelectorAll('.mini-minus-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const span = document.getElementById(`mini-count-${id}`);
            const current = parseInt(span.textContent);
            if (current > 0) {
                span.textContent = current - 1;
                miniSelectedTotal--;
                selectedMiniMap[allMiniCakes[id]]--;
                if (selectedMiniMap[allMiniCakes[id]] <= 0) delete selectedMiniMap[allMiniCakes[id]];
                updateMiniModalUI();
            }
        });
    });

    miniConfirmBtn.addEventListener('click', () => {
        if (miniSelectedTotal !== miniMax) return;
        const details = Object.entries(selectedMiniMap)
            .filter(([, qty]) => qty > 0)
            .map(([name, qty]) => `${qty}x ${name}`)
            .join(', ');
        addToCart({
            title: miniProductName,
            price: `$${miniProductPrice.toFixed(2)}`,
            image: 'assets/mini individual/Tiramisú.png',
            details: details
        });
        miniModalOverlay.classList.remove('active');
    });

    // Initialize Language
    changeLanguage(currentLang);
});
