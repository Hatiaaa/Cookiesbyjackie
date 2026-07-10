/* 
==========================================================================
   COOKIES BY JACKIE - INTERACTIVITY
========================================================================== 
*/

document.addEventListener('DOMContentLoaded', () => {
    // --- Translation System ---
    const translations = {
        es: {
            nav_shop: "pick up",
            nav_delivery: "delivery",
            nav_contact: "ubicación",
            nav_bundle: "bundle gifts",
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
            trending_title: "bundle gifts",
            tab_cookies: "galletas",
            tab_cakes: "pasteles",
            tab_cupcakes: "cupcakes",
            tab_pastries: "Pastries",
            tab_macarons: "macarons",
            tab_minis: "mini individual",
            tab_pies: "tartas",
            tab_packs: "bundle gifts",
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
            faq_a1: "¡Sí! Realizamos entregas a domicilio a través de <a href='https://www.ubereats.com/store/cookies-by-jackie/unP0-ZwaV229nPo_rFi9_A' target='_blank' rel='noopener' style='color:#06c167; font-weight:700;'>UberEats</a>. Haz tu pedido desde la app y recíbelo en la puerta de tu casa.",
            faq_q2: "¿Dónde están ubicados?",
            faq_a2: "Nos encontramos en el <strong>Underground Turnstyle Market de Columbus Circle</strong>, en el corazón de Nueva York. Un lugar perfecto para una pausa dulce.",
            footer_tagline: "Horneando recuerdos cada día con ingredientes premium y pasión artesanal en el corazón de NYC.",
            footer_order_on: "Pide también por:",
            footer_contact_title: "Contacto",
            footer_social_title: "Conecta con nosotros",
            footer_payments_title: "Métodos de pago",
            footer_news_title: "únete al cookie club.",
            footer_news_desc: "Suscríbete para recibir novedades, nuevos sabores, especiales de temporada y noticias exclusivas de Cookies by Jackie.",
            footer_placeholder: "Correo electrónico",
            footer_subscribe: "suscribirse",
            footer_copyright: "&copy; 2024 Cookies by Jackie. Todos los derechos reservados.",
            footer_dev: "Diseñado &amp; desarrollado por",
            privacy_link: "Política de Privacidad",
            checkout_title: "Resumen de Compra",
            checkout_subtitle: "Completa tus datos para proceder al pago",
            checkout_order_title: "tu pedido",
            checkout_data_title: "tus datos",
            checkout_name_label: "Nombre Completo",
            checkout_name_ph: "Ej. Ana Pérez",
            checkout_email_label: "Correo Electrónico",
            checkout_email_ph: "tu@email.com",
            checkout_phone_label: "Teléfono",
            checkout_phone_ph: "Ej. +1 234 567 8900",
            checkout_pickup_title: "recogida del pedido",
            checkout_date_label: "Fecha",
            checkout_time_label: "Hora",
            checkout_notes_label: "Instrucciones Especiales (Opcional)",
            checkout_notes_ph: "Alguna nota para nosotros...",
            checkout_total_label: "Total a Pagar:",
            checkout_btn: "Proceder al Pago Seguro",
            checkout_alert_required: "Por favor completa todos los campos requeridos (nombre, email, teléfono, fecha y hora de recogida).",
            checkout_create_account_label: "¿Deseas crear una cuenta con estos datos para ver tu historial de pedidos?",
            checkout_password_label: "Contraseña",
            checkout_password_ph: "Mínimo 8 caracteres",
            checkout_logged_in_prefix: "Sesión iniciada como",
            account_greeting_prefix: "Hola,",
            account_my_orders: "Mis pedidos",
            account_logout: "Cerrar sesión",
            account_modal_title: "Mi Cuenta",
            orders_modal_title: "Mis Pedidos",
            orders_empty: "Aún no tienes pedidos.",
            orders_loading: "Cargando tus pedidos...",
            orders_error: "No se pudieron cargar tus pedidos. Intenta de nuevo.",
            orders_reorder: "Volver a pedir",
            orders_pickup_prefix: "Recogida:",
            order_status_nuevo: "Nuevo",
            order_status_confirmado: "Confirmado",
            order_status_listo: "Listo",
            order_status_entregado: "Entregado",
            order_status_cancelado: "Cancelado",
            account_tab_login: "Iniciar sesión",
            account_tab_register: "Crear cuenta",
            account_login_submit: "Iniciar sesión",
            account_register_submit: "Crear cuenta",
            account_birthday_label: "Fecha de nacimiento",
            account_error_birthday: "Por favor ingresa una fecha de nacimiento válida.",
            account_error_required: "Por favor completa todos los campos.",
            account_error_password_length: "La contraseña debe tener al menos 8 caracteres.",
            account_error_generic: "Algo salió mal. Intenta de nuevo.",
            checkout_success_msg: "¡Pago recibido! Nos pondremos en contacto para confirmar los detalles de tu pedido.",
            checkout_cancel_msg: "Pago cancelado. Tu carrito sigue guardado por si quieres volver a intentarlo.",
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
            story_cta: "📍 Visítanos en el Underground Turnstyle Market de Columbus Circle y descubre por qué todo el mundo habla de nosotros.",
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
            faq_a4: "¡Sí! Preparamos pedidos especiales para eventos corporativos, fiestas y celebraciones. Escríbenos a <a href='mailto:customerservice@cookiesbyjackie.com'>customerservice@cookiesbyjackie.com</a> para coordinar los detalles.",
            faq_q5: "¿Sus productos son frescos?",
            faq_a5: "Absolutamente. Horneamos fresco cada mañana utilizando mantequilla europea e ingredientes de la más alta calidad para garantizar el mejor sabor.",
            past_roll_name: "Cinnamon Rolls 6 pk",
            past_roll_desc: "6 cinnamon rolls.",
            past_banana_name: "Banana Bread loaf",
            past_banana_desc: "6 rebanadas de pan de plátano.",
            past_scone_name: "Blueberry Scone 8 pk",
            past_scone_desc: "8 Scones de Arándano.",
            past_brownie_name: "Chocolate Fudge Brownies 6 pk",
            past_brownie_desc: "6 Brownies de Chocolate Fudge.",
            past_donut_name: "Donuts 6 pk",
            past_donut_desc: "6 donuts surtidos: Glaseada, Azúcar y Canela, Fruity Pebbles, Oreo, Fresa con Sprinkles y Chocolate con Sprinkles.",
            btn_add: "Agregar",
            btn_select: "Elige tus opciones",
            btn_customize: "Personalizar",
            btn_load_more: "ver más",
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
            cake_label_message: "Mensaje en el Pastel (máx. 30 caracteres)",
            cake_label_message_color: "Color del Mensaje",
            cake_label_delivery_date: "Fecha de entrega (mínimo 3 días de anticipación)",
            cake_label_want_message: "¿Quieres un mensaje?",
            cake_want_message_no: "No",
            cake_want_message_yes: "Con mensaje",
            cake_label_cherries: "Cerezas (Extra)",
            cake_label_bows: "Moños (Extra)",
            cake_msg_placeholder: "Ej. Happy Birthday",
            cake_opt_no_extra: "Sin extra",
            cake_detail_flavor: "Sabor",
            cake_detail_color: "Color",
            cake_detail_size: "Tamaño",
            cake_detail_frosting: "Cobertura",
            cake_detail_message: "Mensaje",
            cake_detail_message_color: "Color del mensaje",
            cake_detail_delivery_date: "Fecha de entrega",
            cake_alert_date_required: "Por favor selecciona una fecha de entrega (mínimo 3 días de anticipación).",
            cake_detail_cherries: "Cerezas",
            cake_detail_bows: "Moños",
            cook1_desc: "Un delicioso surtido de cuatro galletas recién horneadas: Chocolate Chip, Salted Caramel Chocolate Chip, Brookie y Snickerdoodle.",
            cook2_desc: "Arma tu propia caja de 6 galletas recién horneadas con nuestra deliciosa selección de sabores:",
            cook3_desc: "Arma tu propia caja de 12 galletas recién horneadas con tus sabores favoritos:",
            cook4_desc: "Una caja de 25 galletas recién horneadas: Chocolate Chip, Oreo Chocolate Chip, M&amp;M Chocolate Chip, Snickerdoodle y Sugar Cookies.",
            cake1_desc: "Personaliza el sabor y el color. Añade un toque extra a tu pedido y hazlo aún más especial. Este postre rinde hasta 15 personas. Realiza tu pedido con al menos 3 días de anticipación:",
            cake2_desc: "Personaliza el sabor y el color. Añade un toque extra a tu pedido y hazlo aún más especial. Este postre rinde hasta 6 personas. Realiza tu pedido con al menos 3 días de anticipación:",
            cake3_desc: "Elige tu tamaño: 8\" (rinde 10–12) o 10\" (rinde 15–18), luego selecciona sabor y cobertura. Realiza tu pedido con al menos 3 días de anticipación:",
            cake4_desc: "Galleta gigante clásica cargada de chispas de chocolate. Este postre rinde hasta 8-10 personas. Realiza tu pedido con al menos 3 días de anticipación:",
            cake5_desc: "Rinde 12 irresistibles brownies de chocolate fudge. Realiza tu pedido con al menos 3 días de anticipación:",
            cake5b_desc: "Rinde 24 irresistibles brownies de chocolate fudge. Realiza tu pedido con al menos 3 días de anticipación:",
            cake6_desc: "Galleta gigante de doble capa hecha para los más golosos. Este postre rinde hasta 20 personas. Realiza tu pedido con al menos 3 días de anticipación:",
            cup_desc: "Elige cualquier sabor de nuestra lista de cupcakes.",
            cup6_desc: "Elige cualquier 6 cupcakes de nuestros sabores disponibles:",
            cup12_desc: "Elige cualquier 12 cupcakes de nuestros sabores disponibles:",
            cup24_desc: "Elige cualquier 24 cupcakes de nuestros sabores disponibles:",
            mac6_desc: "Elige cualquier 6 macarons franceses de nuestra selección de sabores:",
            mac12_desc: "Elige cualquier 12 macarons franceses de nuestra selección de sabores:",
            mac24_desc: "Elige cualquier 24 macarons franceses de nuestra selección de sabores:",
            mini6_desc: "Elige cualquier 6 pasteles / cheesecakes individuales de nuestros favoritos recién hechos:",
            mini12_desc: "Elige cualquier 12 pasteles / cheesecakes individuales de nuestros favoritos recién hechos:",
            mini24_desc: "Elige cualquier 24 pasteles / cheesecakes individuales de nuestros favoritos recién hechos:",
            pie1_desc: "Apple Caramel Crumb Pie (9 porciones): un clásico reconfortante hecho con manzanas horneadas, caramelo rico y una cubierta crujiente, cortado en 9 porciones perfectas para compartir.",
            pie2_desc: "Bourbon Pecan Pie (9 porciones): un postre rico y clásico hecho con nueces pecanas tostadas en un relleno dulce y mantecoso, horneado a la perfección y cortado en 9 generosas porciones.",
            pie3_desc: "Peach Crumb Pie (9 porciones): un postre reconfortante hecho con duraznos jugosos y una cubierta dorada crujiente, horneado a la perfección y cortado en 9 deliciosas porciones.",
            prepack1_desc: "Nuestros 6 macarons más populares: Vanilla, Raspberry, Churro, Crème Brûlée, Tiramisú y Pistacho.",
            prepack2_desc: "Una deliciosa caja de 12 mini cupcakes con nuestros sabores más queridos y vendidos, horneados y decorados a la perfección. Una variedad dulce ideal para compartir, celebrar o darte un gusto.",
            prepack3_desc: "Pack de 6 Cookies de Especialidad con nuestros sabores más populares: Chocolate Chip, Salted Caramel Chocolate Chip, Brookie, Red Velvet, Snickerdoodle y Sugar Cookie. Recién horneadas y perfectamente equilibradas entre suave, intenso y dulce.",
            prepack4_desc: "Incluye 12 macarons: 2 de cada sabor: Vanilla, Raspberry, Churro, Crème Brûlée, Tiramisú y Pistacho.",
            prepack5_desc: "Pack de 12 Cookies de Especialidad con un surtido perfectamente equilibrado de nuestros sabores favoritos: Chocolate Chip, Salted Caramel Chocolate Chip, Brookie, Red Velvet, Snickerdoodle y Sugar Cookie, con 2 galletas de cada sabor. Ideal para compartir.",
            prepack6_desc: "Incluye 12 cupcakes: 2 de cada sabor: Vanilla con buttercream de vainilla, Chocolate con buttercream de chocolate, Vanilla con buttercream de chocolate, Chocolate con buttercream de vainilla, Red Velvet con cream cheese y Carrot con cream cheese.",
            prepack7_desc: "Incluye: 2 M&M Chocolate Chip, 2 Oreo Chocolate Chip, 2 Chocolate Chip Cookies, 6 cupcakes surtidos (Vanilla, Chocolate, Red Velvet y Carrot) y 6 Chocolate Fudge Brownies.",
            prepack8_desc: "Incluye: 12 Chocolate Chip Cookies, 12 cupcakes surtidos (2 de cada sabor), 12 Chocolate Fudge Brownies y un 10\" Chocolate Chip Cookie Cake (rinde hasta 15 personas). Realiza tu pedido con al menos 3 días de anticipación.",
            prepack9_desc: "Incluye: 6 Chocolate Chip Cookies, 6 cupcakes surtidos, 6 Chocolate Fudge Brownies y un 10\" Chocolate Chip Cookie Cake (rinde hasta 15 personas). Realiza tu pedido con al menos 3 días de anticipación.",
            prepack10_desc: "Incluye: 2 M&M Chocolate Chip, 2 Oreo Chocolate Chip, 2 Chocolate Chip Cookies y 6 Chocolate Fudge Brownies.",
            prepack11_desc: "Incluye: 6 M&M Chocolate Chip, 6 Oreo Chocolate Chip, 6 Sugar Cookies y 6 Chocolate Chip Cookies.",
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
            nav_shop: "pick up",
            nav_delivery: "delivery",
            nav_contact: "location",
            nav_bundle: "bundle gifts",
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
            trending_title: "bundle gifts",
            tab_cookies: "cookies",
            tab_cakes: "cakes",
            tab_cupcakes: "cupcakes",
            tab_pastries: "pastries",
            tab_macarons: "macarons",
            tab_minis: "mini individual",
            tab_pies: "pies",
            tab_packs: "bundle gifts",
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
            faq_a1: "Yes! We deliver through <a href='https://www.ubereats.com/store/cookies-by-jackie/unP0-ZwaV229nPo_rFi9_A' target='_blank' rel='noopener' style='color:#06c167; font-weight:700;'>UberEats</a>. Order from the app and enjoy our freshly baked treats delivered right to your door.",
            faq_q2: "Where can I find you?",
            faq_a2: "We are located at the <strong>Columbus Circle Underground Turnstyle Market</strong>, in the heart of NYC. The perfect sanctuary for a sweet escape.",
            faq_q3: "What are your opening hours?",
            faq_a3: "We are open every day, Monday through Sunday, from 7:00 AM to 10:00 PM.",
            faq_q4: "Do you offer catering services?",
            faq_a4: "Yes! We craft bespoke orders for corporate events, parties, and celebrations. Reach us at <a href='mailto:customerservice@cookiesbyjackie.com'>customerservice@cookiesbyjackie.com</a> to arrange the details.",
            faq_q5: "Are your products baked fresh?",
            faq_a5: "Absolutely. We bake fresh every single morning using European butter and the finest ingredients to ensure a world-class flavor.",
            footer_tagline: "Baking memories every day with premium ingredients and artisanal passion in the heart of NYC.",
            footer_order_on: "Also available on:",
            footer_contact_title: "Contact Us",
            footer_social_title: "Let's Connect",
            footer_payments_title: "Payment Methods",
            footer_news_title: "join the cookie club.",
            footer_news_desc: "Subscribe to receive news, new flavors, seasonal specials, and exclusive updates from Cookies by Jackie.",
            footer_placeholder: "Email address",
            footer_subscribe: "subscribe",
            footer_copyright: "&copy; 2024 Cookies by Jackie. All rights reserved.",
            footer_dev: "Designed &amp; developed by",
            privacy_link: "Privacy Policy",
            checkout_title: "Order Summary",
            checkout_subtitle: "Complete your details to proceed to payment",
            checkout_order_title: "your order",
            checkout_data_title: "your details",
            checkout_name_label: "Full Name",
            checkout_name_ph: "E.g. Jane Smith",
            checkout_email_label: "Email Address",
            checkout_email_ph: "your@email.com",
            checkout_phone_label: "Phone",
            checkout_phone_ph: "E.g. +1 234 567 8900",
            checkout_pickup_title: "order pickup",
            checkout_date_label: "Date",
            checkout_time_label: "Time",
            checkout_notes_label: "Special Instructions (Optional)",
            checkout_notes_ph: "Any notes for us...",
            checkout_total_label: "Total to Pay:",
            checkout_btn: "Proceed to Secure Payment",
            checkout_alert_required: "Please fill in all required fields (name, email, phone, and pickup date and time).",
            checkout_create_account_label: "Would you like to create an account with this info to see your order history?",
            checkout_password_label: "Password",
            checkout_password_ph: "Minimum 8 characters",
            checkout_logged_in_prefix: "Signed in as",
            account_greeting_prefix: "Hi,",
            account_my_orders: "My orders",
            account_logout: "Log out",
            orders_modal_title: "My Orders",
            orders_empty: "You don't have any orders yet.",
            orders_loading: "Loading your orders...",
            orders_error: "Couldn't load your orders. Please try again.",
            orders_reorder: "Reorder",
            orders_pickup_prefix: "Pickup:",
            order_status_nuevo: "New",
            order_status_confirmado: "Confirmed",
            order_status_listo: "Ready",
            order_status_entregado: "Delivered",
            order_status_cancelado: "Cancelled",
            account_modal_title: "My Account",
            account_tab_login: "Log in",
            account_tab_register: "Create account",
            account_login_submit: "Log in",
            account_register_submit: "Create account",
            account_birthday_label: "Date of birth",
            account_error_birthday: "Please enter a valid date of birth.",
            account_error_required: "Please fill in all fields.",
            account_error_password_length: "Password must be at least 8 characters.",
            account_error_generic: "Something went wrong. Please try again.",
            checkout_success_msg: "Payment received! We'll be in touch to confirm your order details.",
            checkout_cancel_msg: "Payment cancelled. Your cart is saved in case you'd like to try again.",
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
            story_cta: "📍 Visit us at the Columbus Circle Underground Turnstyle Market and discover why everyone is talking about us.",
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
            past_roll_desc: "6 cinnamon rolls.",
            past_banana_name: "Banana Bread loaf",
            past_banana_desc: "6 slices of banana bread loaf.",
            past_scone_name: "Blueberry Scone 8 pk",
            past_scone_desc: "8 Blueberry Scones.",
            past_brownie_name: "Chocolate Fudge Brownies 6 pk",
            past_brownie_desc: "6 Chocolate Fudge Brownies.",
            past_donut_name: "Donuts 6 pk",
            past_donut_desc: "6 assorted donuts: Glazed, Cinnamon Sugar, Fruity Pebbles, Oreo, Strawberry Sprinkles, and Chocolate Sprinkles.",
            btn_add: "Add",
            btn_select: "Choose Options",
            btn_customize: "Customize",
            btn_load_more: "view more",
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
            cake_label_message: "Cake Message (max. 30 characters)",
            cake_label_message_color: "Message Color",
            cake_label_delivery_date: "Delivery date (minimum 3 days in advance)",
            cake_label_want_message: "Add a message?",
            cake_want_message_no: "No",
            cake_want_message_yes: "With a message",
            cake_label_cherries: "Cherries (Extra)",
            cake_label_bows: "Bows (Extra)",
            cake_msg_placeholder: "e.g. Happy Birthday",
            cake_opt_no_extra: "No extra",
            cake_detail_flavor: "Flavor",
            cake_detail_color: "Color",
            cake_detail_size: "Size",
            cake_detail_frosting: "Frosting",
            cake_detail_message: "Message",
            cake_detail_message_color: "Message color",
            cake_detail_delivery_date: "Delivery date",
            cake_alert_date_required: "Please select a delivery date (minimum 3 days in advance).",
            cake_detail_cherries: "Cherries",
            cake_detail_bows: "Bows",
            cook1_desc: "A delicious assortment of four freshly baked cookies: Chocolate Chip, Salted Caramel Chocolate Chip, Brookie, and Snickerdoodle.",
            cook2_desc: "Create your own box of 6 freshly baked cookies from our delicious selection of flavors:",
            cook3_desc: "Create your own box of 12 freshly baked cookies with your favorite flavors:",
            cook4_desc: "A box of 25 freshly baked cookies featuring Chocolate Chip, Oreo Chocolate Chip, M&amp;M Chocolate Chip, Snickerdoodle, and Sugar Cookies.",
            cake1_desc: "Customize your flavor and color. Add an extra touch to your order and make it even more special. This dessert serves up to 15 people. Please place your order at least 3 days in advance:",
            cake2_desc: "Customize your flavor and color. Add an extra touch to your order and make it even more special. This dessert serves up to 6 people. Please place your order at least 3 days in advance:",
            cake3_desc: "Choose your size: 8\" (serves 10–12) or 10\" (serves 15–18), then select your flavor and frosting. Please place your order at least 3 days in advance:",
            cake4_desc: "Classic giant cookie packed with rich chocolate chips. This dessert serves up to 8-10 people. Please place your order at least 3 days in advance:",
            cake5_desc: "Serves 12 irresistible chocolate fudge brownies. Please place your order at least 3 days in advance:",
            cake5b_desc: "Serves 24 irresistible chocolate fudge brownies. Please place your order at least 3 days in advance:",
            cake6_desc: "Double-layer giant cookie made for the ultimate sweet tooth. This dessert serves up to 20 people. Please place your order at least 3 days in advance:",
            cup_desc: "Choose any flavor from our cupcake list.",
            cup6_desc: "Choose Any 6 Cupcakes from Our Available Flavors:",
            cup12_desc: "Choose Any 12 Cupcakes from Our Available Flavors:",
            cup24_desc: "Choose Any 24 Cupcakes from Our Available Flavors:",
            mac6_desc: "Choose any 6 French macarons from our selection of flavors:",
            mac12_desc: "Choose any 12 French macarons from our selection of flavors:",
            mac24_desc: "Choose any 24 French macarons from our selection of flavors:",
            mini6_desc: "Choose any 6 Individual Cakes / Cheesecake from our delicious selection of freshly made favorites:",
            mini12_desc: "Choose any 12 Individual Cakes / Cheesecake from our delicious selection of freshly made favorites:",
            mini24_desc: "Choose any 24 Individual Cakes / Cheesecake from our delicious selection of freshly made favorites:",
            pie1_desc: "Apple Caramel Crumb Pie (9 slices): a warm and comforting classic made with tender baked apples, rich caramel, and a crunchy crumb topping, cut into 9 perfect portions to share and enjoy.",
            pie2_desc: "Bourbon Pecan Pie (9 slices): a rich and classic dessert made with toasted pecans in a sweet, buttery filling, baked to perfection and cut into 9 generous slices to share and enjoy.",
            pie3_desc: "Peach Crumb Pie (9 slices): a warm and comforting dessert made with juicy peaches and a golden crumb topping, baked to perfection and cut into 9 delicious slices to share and enjoy.",
            prepack1_desc: "Our 6 most popular macarons: Vanilla, Raspberry, Churro, Crème Brûlée, Tiramisu, and Pistachio.",
            prepack2_desc: "A delicious box of 12 mini cupcakes made with our most loved and best-selling flavors, perfectly baked and beautifully finished. A sweet variety ideal for sharing, celebrations, or simply treating yourself.",
            prepack3_desc: "A 6-pack of Specialty Cookies featuring our most popular flavors: Chocolate Chip, Salted Caramel Chocolate Chip, Brookie, Red Velvet, Snickerdoodle, and Sugar Cookie. Freshly baked and perfectly balanced between soft, rich, and sweet.",
            prepack4_desc: "Includes 12 macarons: 2 of each flavor: Vanilla, Raspberry, Churro, Crème Brûlée, Tiramisu, and Pistachio.",
            prepack5_desc: "A 12-pack of Specialty Cookies featuring a perfectly balanced assortment of our best-loved flavors: Chocolate Chip, Salted Caramel Chocolate Chip, Brookie, Red Velvet, Snickerdoodle, and Sugar Cookie, with 2 cookies of each flavor.",
            prepack6_desc: "Includes 12 cupcakes: 2 of each flavor: Vanilla with vanilla buttercream, Chocolate with chocolate buttercream, Vanilla with chocolate buttercream, Chocolate with vanilla buttercream, Red Velvet with cream cheese, and Carrot with cream cheese.",
            prepack7_desc: "Includes: 2 M&M Chocolate Chip, 2 Oreo Chocolate Chip, 2 Chocolate Chip Cookies, 6 assorted cupcakes (Vanilla, Chocolate, Red Velvet, and Carrot), and 6 Chocolate Fudge Brownies.",
            prepack8_desc: "Includes: 12 Chocolate Chip Cookies, 12 assorted cupcakes (2 of each flavor), 12 Chocolate Fudge Brownies, and a 10\" Chocolate Chip Cookie Cake (serves up to 15). Please place your order at least 3 days in advance.",
            prepack9_desc: "Includes: 6 Chocolate Chip Cookies, 6 assorted cupcakes, 6 Chocolate Fudge Brownies, and a 10\" Chocolate Chip Cookie Cake (serves up to 15). Please place your order at least 3 days in advance.",
            prepack10_desc: "Includes: 2 M&M Chocolate Chip, 2 Oreo Chocolate Chip, 2 Chocolate Chip Cookies, and 6 Chocolate Fudge Brownies.",
            prepack11_desc: "Includes: 6 M&M Chocolate Chip, 6 Oreo Chocolate Chip, 6 Sugar Cookies, and 6 Chocolate Chip Cookies.",
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

        // Cambiar idioma del contenido de la Política de Privacidad
        document.querySelectorAll('.policy-lang').forEach(div => {
            div.style.display = div.dataset.policyLang === lang ? 'block' : 'none';
        });

        // Refrescar Chat si está abierto
        if (typeof window.renderStep === 'function') {
            window.renderStep(window.currentChatStep, true);
        }

        // Refrescar UI del carrito si está abierto
        updateCartUI();

        // Notificar al panel para que re-aplique sus valores sobre el i18n
        document.dispatchEvent(new CustomEvent('panel:langchange', { detail: { lang: lang } }));
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
    // Recuperar carrito guardado (sobrevive al redirect a Stripe / recargas)
    try {
        const savedCart = JSON.parse(localStorage.getItem('cartData'));
        if (Array.isArray(savedCart)) cart = savedCart;
    } catch { /* carrito corrupto: se ignora */ }

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
        // Persistir carrito en cada cambio
        localStorage.setItem('cartData', JSON.stringify(cart));

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

    // Botón "Ver más" dentro de cada tab de la tienda (revela productos ocultos tras el 8vo)
    document.querySelectorAll('.btn-load-more').forEach(btn => {
        btn.addEventListener('click', () => {
            const grid = btn.closest('.tab-content').querySelector('.tabbed-product-grid');
            if (grid) grid.classList.add('show-all');
            btn.classList.add('hidden');
        });
    });

    // Favorites "Ver más" → activar tab del shop
    document.querySelectorAll('.fav-view-btn, .nav-link-bundle').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
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

    // Hero Slider: carrusel de 3 imágenes en loop con crossfade suave
    const heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length > 1) {
        let heroIndex = 0;
        setInterval(() => {
            heroSlides[heroIndex].classList.remove('active');
            heroIndex = (heroIndex + 1) % heroSlides.length;
            heroSlides[heroIndex].classList.add('active');
        }, 5000);
    }

    // Header Scroll Effect (swap: top-bar estilo Zaro por defecto → header Cookies by Jackie al hacer scroll)
    const header = document.querySelector('.header');
    const topBar = document.querySelector('.top-bar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            if (topBar) topBar.classList.add('is-hidden');
        } else {
            header.classList.remove('scrolled');
            if (topBar) topBar.classList.remove('is-hidden');
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
                message: "Atendemos todos los días de Lunes a Domingo, de 7:00 AM a 10:00 PM. Realizamos entregas a domicilio a través de <a href='https://www.ubereats.com/store/cookies-by-jackie/unP0-ZwaV229nPo_rFi9_A' target='_blank' rel='noopener' style='color:#06c167; font-weight:700;'>UberEats</a> 🟢",
                options: [
                    { text: "Preguntas Frecuentes", link: "#faq" },
                    { text: "Volver al inicio", next: "start" }
                ]
            },
            custom: {
                message: "¡Sí! Hacemos pedidos especiales para eventos, bodas y regalos corporativos. Escríbenos y Jackie se pondrá en contacto contigo.",
                options: [
                    { text: "📧 Enviar un email", link: "mailto:customerservice@cookiesbyjackie.com", external: true },
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
                message: "We're open every day, Monday through Sunday, from 7:00 AM to 10:00 PM. We deliver through <a href='https://www.ubereats.com/store/cookies-by-jackie/unP0-ZwaV229nPo_rFi9_A' target='_blank' rel='noopener' style='color:#06c167; font-weight:700;'>UberEats</a> 🟢",
                options: [
                    { text: "View FAQ", link: "#faq" },
                    { text: "Back to start", next: "start" }
                ]
            },
            custom: {
                message: "Absolutely! We love crafting bespoke delights for weddings, corporate gifts, and special celebrations. Send us an email and Jackie will get back to you.",
                options: [
                    { text: "📧 Send an email", link: "mailto:customerservice@cookiesbyjackie.com", external: true },
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
    // --- Sistema de Cuenta de Cliente ---
    // Backend desplegado en Railway (staging/demo). Cambiar si se migra a Hostinger u otro host.
    const API_BASE_URL = 'https://aqua-guanaco-736873.hostingersite.com';

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

    function setCustomerSession(token, customer) {
        localStorage.setItem('customerToken', token);
        localStorage.setItem('customerData', JSON.stringify(customer));
        updateAccountUI();
    }

    function clearCustomerSession() {
        localStorage.removeItem('customerToken');
        localStorage.removeItem('customerData');
        updateAccountUI();
    }

    function updateAccountUI() {
        const session = getCustomerSession();
        const t = translations[currentLang];
        document.querySelectorAll('.account-btn').forEach(btn => {
            btn.classList.toggle('logged-in', !!session);
        });
        document.querySelectorAll('.account-dropdown-greeting').forEach(el => {
            el.textContent = session ? `${t.account_greeting_prefix} ${session.customer.name}` : '';
        });
    }

    function setupAccountButton(btnId, dropdownId) {
        const btn = document.getElementById(btnId);
        const dropdown = document.getElementById(dropdownId);
        if (!btn || !dropdown) return;
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (getCustomerSession()) {
                document.querySelectorAll('.account-dropdown.active').forEach(d => {
                    if (d !== dropdown) d.classList.remove('active');
                });
                dropdown.classList.toggle('active');
            } else {
                openAccountModal('login');
            }
        });
    }
    setupAccountButton('account-btn-topbar', 'account-dropdown-topbar');
    setupAccountButton('account-btn-header', 'account-dropdown-header');

    document.addEventListener('click', () => {
        document.querySelectorAll('.account-dropdown.active').forEach(d => d.classList.remove('active'));
    });

    document.querySelectorAll('.account-dropdown-logout').forEach(btn => {
        btn.addEventListener('click', () => {
            clearCustomerSession();
            document.querySelectorAll('.account-dropdown.active').forEach(d => d.classList.remove('active'));
        });
    });


    // Modal de Login / Registro
    const accountModalOverlay = document.getElementById('account-modal-overlay');
    const accountModalClose = document.getElementById('account-modal-close');
    const accountError = document.getElementById('account-error');
    const accountLoginForm = document.getElementById('account-login-form');
    const accountRegisterForm = document.getElementById('account-register-form');
    const accountTabs = document.querySelectorAll('.account-tab');

    function switchAccountTab(tab) {
        accountTabs.forEach(t => t.classList.toggle('active', t.dataset.accountTab === tab));
        accountLoginForm.style.display = tab === 'login' ? 'block' : 'none';
        accountRegisterForm.style.display = tab === 'register' ? 'block' : 'none';
        accountError.style.display = 'none';
    }

    function openAccountModal(tab) {
        switchAccountTab(tab || 'login');
        accountModalOverlay.classList.add('active');
    }

    function showAccountError(msg) {
        accountError.textContent = msg;
        accountError.style.display = 'block';
    }

    accountTabs.forEach(tab => {
        tab.addEventListener('click', () => switchAccountTab(tab.dataset.accountTab));
    });

    if (accountModalClose) {
        accountModalClose.addEventListener('click', () => {
            accountModalOverlay.classList.remove('active');
        });
    }
    if (accountModalOverlay) {
        accountModalOverlay.addEventListener('click', (e) => {
            if (e.target === accountModalOverlay) accountModalOverlay.classList.remove('active');
        });
    }

    if (accountLoginForm) {
        accountLoginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value;
            if (!email || !password) {
                showAccountError(translations[currentLang].account_error_required);
                return;
            }
            try {
                const res = await fetch(`${API_BASE_URL}/api/customers/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }),
                });
                const data = await res.json();
                if (!res.ok) {
                    showAccountError(data.error || translations[currentLang].account_error_generic);
                    return;
                }
                setCustomerSession(data.token, data.customer);
                accountModalOverlay.classList.remove('active');
                accountLoginForm.reset();
            } catch {
                showAccountError(translations[currentLang].account_error_generic);
            }
        });
    }

    if (accountRegisterForm) {
        accountRegisterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const name = document.getElementById('register-name').value.trim();
            const email = document.getElementById('register-email').value.trim();
            const phone = document.getElementById('register-phone').value.trim();
            const birthday = document.getElementById('register-birthday').value;
            const password = document.getElementById('register-password').value;

            if (!name || !email || !phone || !birthday || !password) {
                showAccountError(translations[currentLang].account_error_required);
                return;
            }
            if (password.length < 8) {
                showAccountError(translations[currentLang].account_error_password_length);
                return;
            }
            try {
                const res = await fetch(`${API_BASE_URL}/api/customers/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, email, phone, birthday, password }),
                });
                const data = await res.json();
                if (!res.ok) {
                    showAccountError(data.error || translations[currentLang].account_error_generic);
                    return;
                }
                setCustomerSession(data.token, data.customer);
                accountModalOverlay.classList.remove('active');
                accountRegisterForm.reset();
            } catch {
                showAccountError(translations[currentLang].account_error_generic);
            }
        });
    }

    updateAccountUI();

    // --- Recibir productos de "Volver a pedir" desde mi-cuenta.html ---
    const pendingReorderRaw = localStorage.getItem('pendingReorder');
    if (pendingReorderRaw) {
        try {
            const items = JSON.parse(pendingReorderRaw);
            items.forEach(product => {
                const existing = cart.find(c => c.title === product.title && c.details === product.details);
                if (existing) {
                    existing.quantity += (parseInt(product.quantity) || 1);
                } else {
                    cart.push({ ...product, quantity: parseInt(product.quantity) || 1 });
                }
            });
            updateCartUI();
            toggleCart();
        } catch {
            // JSON corrupto: se ignora
        }
        localStorage.removeItem('pendingReorder');
    }

    // Abrir el modal de login automáticamente si venimos de mi-cuenta.html sin sesión
    if (new URLSearchParams(window.location.search).get('login') === '1') {
        openAccountModal('login');
        window.history.replaceState({}, '', window.location.pathname);
    }

    // --- Retorno desde Stripe Checkout ---
    const checkoutStatus = new URLSearchParams(window.location.search).get('checkout');
    if (checkoutStatus === 'success') {
        // Pago exitoso: vaciar carrito y confirmar
        cart = [];
        localStorage.removeItem('cartData');
        updateCartUI();
        alert(translations[currentLang].checkout_success_msg);
        window.history.replaceState({}, '', window.location.pathname);
    } else if (checkoutStatus === 'cancel') {
        // Pago cancelado: el carrito se conserva
        alert(translations[currentLang].checkout_cancel_msg);
        window.history.replaceState({}, '', window.location.pathname);
    }

    // Evitar seleccionar una fecha de nacimiento futura
    const todayStr = new Date().toISOString().split('T')[0];
    document.querySelectorAll('#register-birthday, #checkout-birthday').forEach(el => {
        el.max = todayStr;
    });

    const checkoutModalOverlay = document.getElementById('checkout-modal-overlay');
    const checkoutModalClose = document.getElementById('checkout-modal-close');
    const checkoutOrderSummary = document.getElementById('checkout-order-summary');
    const checkoutFinalTotal = document.getElementById('checkout-final-total');
    const stripeCheckoutBtn = document.getElementById('stripe-checkout-btn');

    let checkoutWasLoggedIn = false;
    const checkoutCreateAccountGroup = document.getElementById('checkout-create-account-group');
    const checkoutLoggedInNote = document.getElementById('checkout-logged-in-note');
    const checkoutCreateAccountCheckbox = document.getElementById('checkout-create-account');
    const checkoutPasswordField = document.getElementById('checkout-password-field');

    if (checkoutCreateAccountCheckbox) {
        checkoutCreateAccountCheckbox.addEventListener('change', () => {
            checkoutPasswordField.style.display = checkoutCreateAccountCheckbox.checked ? 'block' : 'none';
        });
    }

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

            // Reflejar estado de sesión: si ya inició sesión, precargar datos y ocultar el checkbox
            const session = getCustomerSession();
            if (session) {
                checkoutCreateAccountGroup.style.display = 'none';
                checkoutLoggedInNote.style.display = 'block';
                checkoutLoggedInNote.textContent = `${translations[currentLang].checkout_logged_in_prefix} ${session.customer.name}`;
                document.getElementById('checkout-name').value = session.customer.name;
                document.getElementById('checkout-email').value = session.customer.email;
                document.getElementById('checkout-phone').value = session.customer.phone;
            } else {
                checkoutCreateAccountGroup.style.display = 'block';
                checkoutLoggedInNote.style.display = 'none';
                checkoutCreateAccountCheckbox.checked = false;
                checkoutPasswordField.style.display = 'none';
                document.getElementById('checkout-birthday').value = '';
                document.getElementById('checkout-password').value = '';
                if (checkoutWasLoggedIn) {
                    document.getElementById('checkout-name').value = '';
                    document.getElementById('checkout-email').value = '';
                    document.getElementById('checkout-phone').value = '';
                }
            }
            checkoutWasLoggedIn = !!session;

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
        stripeCheckoutBtn.addEventListener('click', async () => {
            const t = translations[currentLang];

            // Validar formulario
            const name = document.getElementById('checkout-name').value;
            const email = document.getElementById('checkout-email').value;
            const phone = document.getElementById('checkout-phone').value;
            const date = document.getElementById('checkout-date').value;
            const time = document.getElementById('checkout-time').value;
            const notes = document.getElementById('checkout-notes').value;

            if (!name || !email || !phone || !date || !time) {
                alert(t.checkout_alert_required);
                return;
            }

            let session = getCustomerSession();
            const wantsAccount = !session && checkoutCreateAccountCheckbox.checked;

            // Si marcó "crear cuenta", registrar primero para asociar el pedido a la nueva cuenta
            if (wantsAccount) {
                const birthday = document.getElementById('checkout-birthday').value;
                const password = document.getElementById('checkout-password').value;
                if (!birthday) {
                    alert(t.account_error_birthday);
                    return;
                }
                if (!password || password.length < 8) {
                    alert(t.account_error_password_length);
                    return;
                }
                try {
                    const res = await fetch(`${API_BASE_URL}/api/customers/register`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ name, email, phone, birthday, password }),
                    });
                    const data = await res.json();
                    if (!res.ok) {
                        alert(data.error || t.account_error_generic);
                        return;
                    }
                    setCustomerSession(data.token, data.customer);
                    session = getCustomerSession();
                } catch {
                    alert(t.account_error_generic);
                    return;
                }
            }

            const orderPayload = {
                customerName: name,
                customerEmail: email,
                customerPhone: phone,
                pickupDate: date,
                pickupTime: time,
                notes,
                orderItems: cart,
                language: currentLang,
            };

            try {
                const headers = { 'Content-Type': 'application/json' };
                if (session) headers['Authorization'] = `Bearer ${session.token}`;

                // Crear sesión de pago en Stripe y redirigir a la pasarela.
                // El pedido se registra en el backend como 'unpaid' y se marca
                // 'paid' vía webhook cuando el cobro se confirma.
                const res = await fetch(`${API_BASE_URL}/api/checkout/session`, {
                    method: 'POST',
                    headers,
                    body: JSON.stringify(orderPayload),
                });
                const data = await res.json();
                if (!res.ok || !data.url) {
                    alert(data.error || t.account_error_generic);
                    return;
                }

                // Redirigir a Stripe Checkout. El carrito queda guardado en
                // localStorage; se limpia al volver con ?checkout=success.
                window.location.href = data.url;
            } catch {
                alert(t.account_error_generic);
            }
        });
    }

    // --- Lógica del Selector de Galletas (Modal) ---
    const allCookies = [
        "Salted Caramel Chocolate Chip Cookie", "Chocolate Chip Cookie", "Red Velvet Cookie",
        "Oreo Chocolate Chip", "Nutella Chocolate Chip", "Brookie Cookie",
        "Biscoff Chocolate Chip Cookie", "Snickerdoodle", "Sugar cookie",
        "Fruity Pebbles Sugar Cookie", "Oatmeal Raisin Cookie", "Gluten Free Chocolate Chip",
        "M&M Chocolate Chip Cookie", "Oreo Red Velvet Cookie",
        "Triple Chocolate Chip Cookie", "Peanut Butter and Jelly Cookie", "Pistachio Cream White Chocolate Chip Cookie",
        "Caramel Pistachio White Chocolate Chip Cookie",
        "Rainbow Sprinkle Sugar Cookie"
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
                    <img src="assets/v2/flavors/cookies/${cookie}.webp" alt="${cookie}" loading="lazy">
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

    // Color del mensaje (compartido vintage + cookie/brownie cakes)
    const messageColors = {
        es: ["Blanco", "Rojo", "Azul", "Rosa"],
        en: ["White", "Red", "Blue", "Pink"]
    };

    const cakeOptions = {
        vintage: {
            flavors: {
                es: ["Chocolate", "Vainilla", "Red Velvet"],
                en: ["Chocolate", "Vanilla", "Red Velvet"]
            },
            // Piping Color (10 opciones)
            colors: {
                es: ["Blanco", "Rosado", "Verde", "Amarillo", "Anaranjado", "Morado", "Rojo", "Coral", "Burgundy", "Aquamarine"],
                en: ["White", "Pink", "Green", "Yellow", "Orange", "Purple", "Red", "Coral", "Burgundy", "Aquamarine"]
            },
            // Extras opcionales — arrancan en "Sin extra" $0 (cumplimiento Stripe)
            cherries: {
                es: [{ label: "No", extra: 0 }, { label: "Cerezas (+$8.00)", extra: 8 }],
                en: [{ label: "No", extra: 0 }, { label: "Cherries (+$8.00)", extra: 8 }]
            },
            bows: {
                es: [{ label: "No", extra: 0 }, { label: "Moños Rosados (+$8.00)", extra: 8 }, { label: "Moños Blancos (+$8.00)", extra: 8 }, { label: "Moños Rojos (+$8.00)", extra: 8 }],
                en: [{ label: "No", extra: 0 }, { label: "Pink Bows (+$8.00)", extra: 8 }, { label: "White Bows (+$8.00)", extra: 8 }, { label: "Red Bows (+$8.00)", extra: 8 }]
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
            // Cream Cheese Frosting suma +$5
            frostings: {
                es: [{ label: "Buttercream de Vainilla", extra: 0 }, { label: "Buttercream de Chocolate", extra: 0 }, { label: "Cream Cheese Frosting (+$5.00)", extra: 5 }],
                en: [{ label: "Vanilla Buttercream", extra: 0 }, { label: "Chocolate Buttercream", extra: 0 }, { label: "Cream Cheese Frosting (+$5.00)", extra: 5 }]
            }
        }
        // type 'message' (cookie/brownie cakes) no necesita datos extra: solo Cake Message + Message Color
    };

    // Rutas de imagen v2 para el carrito (por nombre de producto)
    const cakeImagePaths = {
        "Vintage Heart Cakes": "assets/v2/cakes/vintage-heart-cakes/1.webp",
        "Vintage Round Cakes": "assets/v2/cakes/vintage-round-cakes/1.webp",
        "Naked Cake": "assets/v2/cakes/naked-cake/2.webp",
        '10" Chocolate Chip Cookie Cake': "assets/v2/cakes/cookie-cake-10/1.webp",
        "Chocolate Fudge Brownie Cake 12 pc": "assets/v2/cakes/brownie-cake-12/1.webp",
        "Chocolate Fudge Brownie Cake 24 pc": "assets/v2/cakes/brownie-cake-24/1.webp",
        'Double-Layered 10" Cookie Cake': "assets/v2/cakes/double-layered-cookie-cake/1.webp",
        "The Big Celebration Bash Bundle #2": "assets/v2/prepacks/bundle-2/1.webp",
        "The Big Celebration Bash Bundle #3": "assets/v2/prepacks/bundle-3/1.webp"
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
            recalcCakePrice();
            cakeModalOverlay.classList.add('active');
        }
    });

    // Reutilizable: bloque Cake Message + Message Color (mensaje opcional)
    const messageBlock = (t, lang) => `
        <div class="cake-option-group">
            <label>${t.cake_label_want_message}</label>
            <select class="cake-select" id="cake-want-message">
                <option value="no">${t.cake_want_message_no}</option>
                <option value="yes">${t.cake_want_message_yes}</option>
            </select>
        </div>
        <div id="cake-message-fields" style="display: none;">
            <div class="cake-option-group">
                <label>${t.cake_label_message}</label>
                <input type="text" class="cake-select" id="cake-message" maxlength="30" placeholder="${t.cake_msg_placeholder}">
            </div>
            <div class="cake-option-group">
                <label>${t.cake_label_message_color}</label>
                <select class="cake-select" id="cake-message-color">
                    ${messageColors[lang].map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
            </div>
        </div>
    `;

    // Fecha de entrega: bloquea los próximos 3 días (todos los cakes requieren 3 días de anticipación)
    const dateBlock = (t) => {
        const minDate = new Date();
        minDate.setDate(minDate.getDate() + 3);
        const minDateStr = minDate.toISOString().split('T')[0];
        return `
        <div class="cake-option-group">
            <label>${t.cake_label_delivery_date}</label>
            <input type="date" class="cake-select" id="cake-delivery-date" min="${minDateStr}" required>
        </div>
        `;
    };

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
                ${messageBlock(t, lang)}
                <div class="cake-option-group">
                    <label>${t.cake_label_cherries}</label>
                    <select class="cake-select" id="cake-cherries" data-extra-select>
                        ${cakeOptions.vintage.cherries[lang].map((o, i) => `<option value="${o.label}" data-extra="${o.extra}">${o.label}</option>`).join('')}
                    </select>
                </div>
                <div class="cake-option-group">
                    <label>${t.cake_label_bows}</label>
                    <select class="cake-select" id="cake-bows" data-extra-select>
                        ${cakeOptions.vintage.bows[lang].map((o, i) => `<option value="${o.label}" data-extra="${o.extra}">${o.label}</option>`).join('')}
                    </select>
                </div>
            `;
        } else if (type === 'naked') {
            html += `
                <div class="cake-option-group">
                    <label>${t.cake_label_size}</label>
                    <select class="cake-select" id="cake-size">
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
                    <select class="cake-select" id="cake-frosting" data-extra-select>
                        ${cakeOptions.naked.frostings[lang].map(o => `<option value="${o.label}" data-extra="${o.extra}">${o.label}</option>`).join('')}
                    </select>
                </div>
                ${messageBlock(t, lang)}
            `;
        } else if (type === 'message') {
            html += messageBlock(t, lang);
        }
        // Todos los cakes/bundles del modal requieren mínimo 3 días de anticipación
        html += dateBlock(t);
        cakeOptionsContainer.innerHTML = html;
        // Recalcular precio ante cualquier cambio
        cakeOptionsContainer.querySelectorAll('select, input').forEach(el => {
            el.addEventListener('change', recalcCakePrice);
        });
        // Mostrar/ocultar campos de mensaje según el selector "¿Quieres un mensaje?"
        const wantMsg = cakeOptionsContainer.querySelector('#cake-want-message');
        const msgFields = cakeOptionsContainer.querySelector('#cake-message-fields');
        if (wantMsg && msgFields) {
            wantMsg.addEventListener('change', () => {
                if (wantMsg.value === 'yes') {
                    msgFields.style.display = '';
                } else {
                    msgFields.style.display = 'none';
                    const msgInput = msgFields.querySelector('#cake-message');
                    if (msgInput) msgInput.value = '';
                }
            });
        }
    };

    function recalcCakePrice() {
        let total;
        if (currentCakeData.type === 'naked') {
            const sizeSel = document.getElementById('cake-size');
            total = sizeSel ? parseFloat(sizeSel.value) : currentCakeData.basePrice;
        } else {
            total = currentCakeData.basePrice;
        }
        cakeOptionsContainer.querySelectorAll('select[data-extra-select]').forEach(sel => {
            const opt = sel.selectedOptions[0];
            if (opt && opt.dataset.extra) total += parseFloat(opt.dataset.extra);
        });
        currentCakeData.currentPrice = total;
        cakeModalPrice.textContent = `$${total.toFixed(2)}`;
    }

    cakeConfirmBtn.addEventListener('click', () => {
        const t = translations[currentLang];
        const parts = [];
        const valOf = id => { const el = document.getElementById(id); return el ? el.value : ''; };
        const labelOf = id => { const el = document.getElementById(id); return el && el.selectedOptions[0] ? el.selectedOptions[0].textContent : ''; };

        if (currentCakeData.type === 'vintage') {
            parts.push(`${t.cake_detail_flavor}: ${valOf('cake-flavor')}`);
            parts.push(`${t.cake_detail_color}: ${valOf('cake-color')}`);
            const msg = valOf('cake-message').trim();
            if (msg) {
                parts.push(`${t.cake_detail_message}: "${msg}"`);
                parts.push(`${t.cake_detail_message_color}: ${valOf('cake-message-color')}`);
            }
            const cherries = document.getElementById('cake-cherries');
            if (cherries && cherries.selectedOptions[0].dataset.extra > 0) parts.push(`${t.cake_detail_cherries}: ${labelOf('cake-cherries')}`);
            const bows = document.getElementById('cake-bows');
            if (bows && bows.selectedOptions[0].dataset.extra > 0) parts.push(`${t.cake_detail_bows}: ${labelOf('cake-bows')}`);
        } else if (currentCakeData.type === 'naked') {
            const sizeSelect = document.getElementById('cake-size');
            const sizeLabel = sizeSelect.options[sizeSelect.selectedIndex].text.split(' (')[0];
            parts.push(`${t.cake_detail_size}: ${sizeLabel}`);
            parts.push(`${t.cake_detail_flavor}: ${valOf('cake-flavor')}`);
            parts.push(`${t.cake_detail_frosting}: ${labelOf('cake-frosting')}`);
            const nakedMsg = valOf('cake-message').trim();
            if (nakedMsg) {
                parts.push(`${t.cake_detail_message}: "${nakedMsg}"`);
                parts.push(`${t.cake_detail_message_color}: ${valOf('cake-message-color')}`);
            }
        } else if (currentCakeData.type === 'message') {
            const msg = valOf('cake-message').trim();
            if (msg) {
                parts.push(`${t.cake_detail_message}: "${msg}"`);
                parts.push(`${t.cake_detail_message_color}: ${valOf('cake-message-color')}`);
            }
        }

        const deliveryDate = valOf('cake-delivery-date');
        if (!deliveryDate) {
            alert(t.cake_alert_date_required);
            return;
        }
        parts.push(`${t.cake_detail_delivery_date}: ${deliveryDate}`);

        const imagePath = cakeImagePaths[currentCakeData.name] || `assets/v2/cakes/${currentCakeData.name}.webp`;

        addToCart({
            title: currentCakeData.name,
            price: `$${currentCakeData.currentPrice.toFixed(2)}`,
            image: imagePath,
            details: parts.join(', ')
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
        "assets/v2/flavors/macarons/Birthday.webp",
        "assets/v2/flavors/macarons/Churro.webp",
        "assets/v2/flavors/macarons/Crème Brûlée.webp",
        "assets/v2/flavors/macarons/Pistacho.webp",
        "assets/v2/flavors/macarons/Raspberry.webp",
        "assets/v2/flavors/macarons/Tiramisú.webp",
        "assets/v2/flavors/macarons/Vanilla.webp"
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
        "assets/v2/flavors/mini/Cannoli Cheesecake.webp",
        "assets/v2/flavors/mini/Caramel cheesecake.webp",
        "assets/v2/flavors/mini/Carrot Cake.webp",
        "assets/v2/flavors/mini/Chocolate Cake.webp",
        "assets/v2/flavors/mini/Chocolate Cheesecake.webp",
        "assets/v2/flavors/mini/Chocolate Dipped Cheesecake.webp",
        "assets/v2/flavors/mini/Classic Cheesecake.webp",
        "assets/v2/flavors/mini/Confetti Cake.webp",
        "assets/v2/flavors/mini/Confetti Cheesecake.webp",
        "assets/v2/flavors/mini/Fruity Pebbles Cheesecake.webp",
        "assets/v2/flavors/mini/Oreo Cheesecake.webp",
        "assets/v2/flavors/mini/Red velvet Cake.webp",
        "assets/v2/flavors/mini/Red Velvet Cheesecake.webp",
        "assets/v2/flavors/mini/Strawberry cheesecake.webp",
        "assets/v2/flavors/mini/Tiramisú.webp",
        "assets/v2/flavors/mini/Tres leches.webp"
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

    // ─── Privacy Policy Modal ─────────────────────────────────────────────────
    const privacyOverlay  = document.getElementById('privacy-modal-overlay');
    const privacyCloseBtn = document.getElementById('privacy-modal-close');
    const openPrivacyBtn  = document.getElementById('open-privacy-btn');

    if (privacyOverlay && openPrivacyBtn) {
        const openPrivacy = () => {
            privacyOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            privacyOverlay.scrollTop = 0;
        };
        const closePrivacy = () => {
            privacyOverlay.classList.remove('active');
            document.body.style.overflow = '';
        };
        openPrivacyBtn.addEventListener('click', openPrivacy);
        privacyCloseBtn.addEventListener('click', closePrivacy);
        privacyOverlay.addEventListener('click', e => {
            if (e.target === privacyOverlay) closePrivacy();
        });
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && privacyOverlay.classList.contains('active')) closePrivacy();
        });
    }


    // Initialize Language
    changeLanguage(currentLang);
});
