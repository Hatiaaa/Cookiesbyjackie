import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    'lang="en"': 'lang="es"',
    '>NATIONWIDE SHIPPING AVAILABLE ✈️<': '>ENVÍOS A TODO EL PAÍS ✈️<',
    '>ORDER BY 2PM FOR NEXT DAY DELIVERY 🍪<': '>HAZ TU PEDIDO ANTES DE LAS 2PM PARA ENVÍO AL DÍA SIGUIENTE 🍪<',
    '>NEW FLAVOR: RED VELVET SUPREME ✨<': '>NUEVO SABOR: RED VELVET SUPREME ✨<',
    '>Shop<': '>tienda<',
    '>Our Story<': '>nuestra historia<',
    '>Catering<': '>catering<',
    '>the box that started it all.<': '>la caja con la que empezó todo.<',
    '>Shop the Classics<': '>Comprar clásicos<',
    '>Shop Our Best Sellers<': '>Compra los Favoritos<',
    '>Add to Bag<': '>Agregar al carrito<',
    '>Classic Chocolate Chunk<': '>Clásica Chispas de Chocolate<',
    '>Red Velvet Supreme<': '>Red Velvet Suprema<',
    '>Celebration Cookie Cake<': '>Torta Galleta Celebración<',
    '>Assorted Box of 6<': '>Caja Surtida de 6<',
    '>View Entire Menu<': '>Ver menú completo<',
    '>Cookies<': '>galletas<',
    '>Brownies<': '>brownies<',
    '>Cakes<': '>pasteles<',
    '>best seller<': '>favorito<',
    '>signature cookie box<': '>caja signature<',
    '>mini cookie catering<': '>mini galletas catering<',
    '>mini cookies<': '>mini galletas<',
    '>cookie tube<': '>tubo de galletas<',
    '>build a box<': '>arma tu caja<',
    '>Brownies collection coming soon.<': '>La colección de brownies llegará pronto.<',
    '>Cakes collection coming soon.<': '>La colección de pasteles llegará pronto.<',
    '>What others say...<': '>Lo que dicen de nosotros...<',
    '"Clean, modern packaging, smart flavors, and bakers who care about technique. I finally found my go-to gift for clients while satisfying my own sweet tooth."': '"Empaque moderno y limpio, sabores increíbles y pasteleros que se preocupan por la técnica. Finalmente encontré mi regalo ideal para clientes mientras satisfago mi propio antojo de dulce."',
    '"I sent these as a corporate gift and my clients were blown away. The presentation is just as premium as the taste. Highly recommend the Red Velvet."': '"Las envié como regalo corporativo y mis clientes quedaron fascinados. La presentación es tan premium como el sabor. Recomiendo mucho la Red Velvet."',
    '"Finally a bakery that doesn\'t compromise on ingredients. You can taste the European butter in every single bite. I am absolutely obsessed."': '"Finalmente una pastelería que no escatima en ingredientes. Se puede saborear la mantequilla europea en cada bocado. Estoy absolutamente obsesionada."',
    '>JOIN THE COOKIE CLUB.<': '>ÚNETE AL COOKIE CLUB.<',
    '>Subscribe to our newsletter for 10% off your first order, exclusive flavors, and behind-the-scenes baking.<': '>Suscríbete a nuestro boletín para un 10% de descuento en tu primer pedido, sabores exclusivos y secretos de horneado.<',
    'placeholder="Email address"': 'placeholder="Correo electrónico"',
    '>Subscribe<': '>Suscribirse<',
    '>MEET THE BAKER.<': '>CONOCE A LA PASTELERA.<',
    '>Driven by a passion for perfection and a late-night sweet tooth, Jackie spent years developing the ultimate cookie recipes. Today, we bring those exact same artisan creations to your door. Baked with European butter, single-origin chocolate, and absolutely zero shortcuts.<': '>Impulsada por la pasión por la perfección y un antojo de medianoche, Jackie pasó años desarrollando las recetas definitivas de galletas. Hoy, llevamos esas mismas creaciones artesanales a tu puerta. Horneadas con mantequilla europea, chocolate de origen único y absolutamente sin atajos.<',
    '>Read The Full Story<': '>Leer la historia completa<',
    '>VISIT THE BAKERY.<': '>VISITA LA PASTELERÍA.<',
    '>Come say hi! We bake fresh all day at our flagship store. Grab a coffee, watch our bakers at work, and smell the magic.<': '>¡Ven a saludar! Horneamos fresco todo el día en nuestra tienda principal. Toma un café, observa a nuestros pasteleros trabajar y huele la magia.<',
    '>LOCATION<': '>UBICACIÓN<',
    '>HOURS<': '>HORARIOS<',
    '>Mon-Sat: 8am - 6pm<br>Sun: 9am - 4pm<': '>Lun-Sáb: 8am - 6pm<br>Dom: 9am - 4pm<',
    '>Get Directions<': '>Obtener indicaciones<',
    '>Follow The Journey<': '>Sigue la historia<',
    '>Follow on Instagram<': '>Síguenos en Instagram<',
    '>Baking memories daily.<': '>Horneando recuerdos cada día.<',
    '>Your Cart<': '>Tu Carrito<',
    '>Your cart is empty.<': '>Tu carrito está vacío.<',
    '>Total<': '>Total<',
    '>Shipping calculated at checkout.<': '>El envío se calcula al pagar.<',
    '>Checkout<': '>Ir a pagar<'
}

for eng, esp in replacements.items():
    content = content.replace(eng, esp)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('Translation complete')
