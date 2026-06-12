const menu = [

/* =========================================
CÓCTELES CLÁSICOS (clasicos)
========================================= */
{
  mainCategory: "clasicos",
  subCategory: "RON",
  name: "Smoked Mojito",
  description: "El clásico reinventado y ahumado.",
  ingredients: "Ron, hierbabuena, zumo de limón y soda.",
  price: 29000
},
{
  mainCategory: "clasicos",
  subCategory: "RON",
  name: "Basil & Passion Daiquiri",
  description: "Refrescante, herbal y tropical.",
  ingredients: "Ron, maracuyá, limón y albahaca.",
  price: 29000
},
{
  mainCategory: "clasicos",
  subCategory: "RON",
  name: "Cuba Lite",
  description: "Ligero, chispeante y listo para la rumba.",
  ingredients: "Ron, limón y soda.",
  price: 32000
},
{
  mainCategory: "clasicos",
  subCategory: "VODKA",
  name: "Moscow Mule",
  description: "Refrescante, picante y servido con estilo.",
  ingredients: "Vodka, jengibre y limón.",
  price: 29000
},
{
  mainCategory: "clasicos",
  subCategory: "VODKA",
  name: "Cosmopolitan Rosé",
  description: "Frutal, floral y muy chic.",
  ingredients: "Vodka, triple sec y zumo de arándanos.",
  price: 29000
},
{
  mainCategory: "clasicos",
  subCategory: "VODKA",
  name: "Sex On The Beach",
  description: "Juguetón y tropical. Un clásico de fiesta.",
  ingredients: "Vodka, triple sec, maracuyá y arándanos.",
  price: 29000
},
{
  mainCategory: "clasicos",
  subCategory: "TEQUILA",
  name: "Margarita",
  description: "La infaltable. Ácida, salada y perfecta.",
  ingredients: "Tequila, triple sec, zumo de limón y tajín.",
  price: 29000
},
{
  mainCategory: "clasicos",
  subCategory: "TEQUILA",
  name: "Paloma Rosa",
  description: "Refrescante, herbal y tropical.",
  ingredients: "Tequila, toronja, miel y limón.",
  price: 32000
},
{
  mainCategory: "clasicos",
  subCategory: "TEQUILA",
  name: "El Diablo",
  description: "Picoso y oscuro, con alma mexicana.",
  ingredients: "Tequila, cassis, limón y jengibre.",
  price: 32000
},
{
  mainCategory: "clasicos",
  subCategory: "JÄGERMEISTER",
  name: "Black Forest Spark",
  description: "Intensidad herbal + Red Bull: BOOM.",
  ingredients: "Jägermeister, cassis, Red Bull y jengibre.",
  price: 29000
},
{
  mainCategory: "clasicos",
  subCategory: "JÄGERMEISTER",
  name: "Black Mule",
  description: "Jäger y jengibre: una mezcla electrizante.",
  ingredients: "Jägermeister, jengibre y limón.",
  price: 29000
},
{
  mainCategory: "clasicos",
  subCategory: "JÄGERMEISTER",
  name: "Smoked Jager Mojito",
  description: "Un mojito oscuro y ahumado.",
  ingredients: "Jägermeister, hierbabuena, zumo de limón y soda.",
  price: 29000
},
{
  mainCategory: "clasicos",
  subCategory: "GINEBRA",
  name: "Gin Tonic",
  description: "Clásico, aromático y elegante.",
  ingredients: "Ginebra, especias y tónica.",
  price: 29000
},
{
  mainCategory: "clasicos",
  subCategory: "GINEBRA",
  name: "Negroni",
  description: "Bitter, equilibrado y con estilo.",
  ingredients: "Ginebra, vermut rosso y Campari.",
  price: 29000
},
{
  mainCategory: "clasicos",
  subCategory: "GINEBRA",
  name: "Martini",
  description: "Ligero, chispeante y listo para la rumba.",
  ingredients: "Ginebra, vermut seco y aceitunas.",
  price: 29000
},
{
  mainCategory: "clasicos",
  subCategory: "WHISKY",
  name: "New Old Fashion",
  description: "El clásico del sur, con un twist a la naranja.",
  ingredients: "Whiskey, twist de naranja y gotas de angostura.",
  price: 29000
},
{
  mainCategory: "clasicos",
  subCategory: "WHISKY",
  name: "Mint Julep",
  description: "Menta fresca y whisky para calmar el calor.",
  ingredients: "Whisky bourbon, miel y menta.",
  price: 29000
},
{
  mainCategory: "clasicos",
  subCategory: "WHISKY",
  name: "Whisky Red Sour",
  description: "Cítrico, dulce y coronado con vino tinto.",
  ingredients: "Whisky, miel, triple sec y vino tinto.",
  price: 32000
},

/* =========================================
CÓCTELES DE AUTOR (autor)
========================================= */
{
  mainCategory: "autor",
  subCategory: "COCTELES DE AUTOR",
  name: "A Message To You, Rudy",
  description: "Refrescante, ácido y tropical, con el alma de un escocés rebelde.",
  ingredients: "Scotch whisky, triple sec, sirope artesanal de lulo, zumo de limón y gotas de angostura.",
  price: 32000
},
{
  mainCategory: "autor",
  subCategory: "COCTELES DE AUTOR",
  name: "Black Leather Jacket",
  description: "Intenso, herbal y oscuro. El coctel que entra con actitud y deja huella.",
  ingredients: "Ginebra, vodka infusionado con romero y carbón activado, sirope artesanal de mora y zumo de limón.",
  price: 32000
},
{
  mainCategory: "autor",
  subCategory: "COCTELES DE AUTOR",
  name: "Pacific York",
  description: "Tradición del Pacífico con un giro cosmopolita. Dulce, especiado y burbujeante.",
  ingredients: "Licor de viche, vermut seco, sirope artesanal de panela y especias, zumo de limón, coronado con tónica. Fresco, picante y profundo.",
  price: 32000
},
{
  mainCategory: "autor",
  subCategory: "COCTELES DE AUTOR",
  name: "Midnight Groove",
  description: "Cítrico, vibrante y con el fuego de la noche. Ideal para entrar en ritmo.",
  ingredients: "Aguardiente, vodka, sirope artesanal de maracuyá y jengibre, y zumo de limón.",
  price: 32000
},

/* =========================================
COCTELES SIN ALCOHOL (sin_alcohol)
========================================= */
{
  mainCategory: "sin_alcohol",
  subCategory: "MOCKTAILS",
  name: "Lulo Sour",
  description: "Tropical, ácido y vibrante.",
  ingredients: "Lulo y limón.",
  price: 22000
},
{
  mainCategory: "sin_alcohol",
  subCategory: "MOCKTAILS",
  name: "Moratonic",
  description: "Burbujeante, botánico y sofisticado.",
  ingredients: "Mora, tónica y romero.",
  price: 22000
},
{
  mainCategory: "sin_alcohol",
  subCategory: "MOCKTAILS",
  name: "Passion Smoke",
  description: "Exótico y profundo, con un toque ahumado.",
  ingredients: "Maracuyá, albahaca, hielo ahumado.",
  price: 22000
},
{
  mainCategory: "sin_alcohol",
  subCategory: "MOCKTAILS",
  name: "Ginger Twist",
  description: "Refrescante y con un toque picante elegante.",
  ingredients: "Jengibre, limón, soda y un toque herbal.",
  price: 22000
},

/* =========================================
SHOTS (shots)
========================================= */
{
  mainCategory: "shots",
  subCategory: "SHOTS ESPECIALES",
  name: "Cocaína Rusa",
  description: "Directo y sin escalas. Un shot que no pide permiso.",
  ingredients: "Vodka, slide de limón con azúcar y café.",
  price: 22000
},
{
  mainCategory: "shots",
  subCategory: "SHOTS ESPECIALES",
  name: "York Knockout",
  description: "Un derechazo potente con sabor criollo y picante final.",
  ingredients: "Ron, aguardiente, jengibre y maracuyá.",
  price: 22000
},
{
  mainCategory: "shots",
  subCategory: "SHOTS ESPECIALES",
  name: "Veneno del Rudy",
  description: "Oscuro, ardiente y letal. Se sirve encendido.",
  ingredients: "Tequila, Jägermeister y licor de café.",
  price: 22000
},
{ mainCategory: "shots", subCategory: "WHISKIES", name: "Johnnie Walker Red Label (Shot)", price: 25000 },
{ mainCategory: "shots", subCategory: "WHISKIES", name: "Johnnie Walker Black Label (Shot)", price: 30000 },
{ mainCategory: "shots", subCategory: "WHISKIES", name: "Jack Daniels No.7 (Shot)", price: 26000 },
{ mainCategory: "shots", subCategory: "WHISKIES", name: "Jack Daniels Tennessee Honey (Shot)", price: 26000 },
{ mainCategory: "shots", subCategory: "WHISKIES", name: "Jack Daniels Tennessee Fire (Shot)", price: 26000 },
{ mainCategory: "shots", subCategory: "WHISKIES", name: "Jameson Irish Whiskey (Shot)", price: 25000 },
{ mainCategory: "shots", subCategory: "WHISKIES", name: "Baileys Irish Cream (Shot)", price: 22000 },
{ mainCategory: "shots", subCategory: "TEQUILA", name: "Olmeca Reposado (Shot)", price: 25000 },
{ mainCategory: "shots", subCategory: "TEQUILA", name: "Centenario Reposado (Shot)", price: 25000 },
{ mainCategory: "shots", subCategory: "TEQUILA", name: "Jimador Reposado (Shot)", price: 28000 },
{ mainCategory: "shots", subCategory: "TEQUILA", name: "1800 Reposado (Shot)", price: 35000 },
{ mainCategory: "shots", subCategory: "GINEBRA", name: "Gordon's London Dry Gin (Shot)", price: 25000 },
{ mainCategory: "shots", subCategory: "GINEBRA", name: "Bombay Sapphire (Shot)", price: 28000 },
{ mainCategory: "shots", subCategory: "GINEBRA", name: "Beefeater London Dry Gin (Shot)", price: 28000 },
{ mainCategory: "shots", subCategory: "RON", name: "Caldas 3 Años (Shot)", price: 22000 },
{ mainCategory: "shots", subCategory: "RON", name: "Caldas 8 Años (Shot)", price: 28000 },
{ mainCategory: "shots", subCategory: "RON", name: "Havana Club 3 Años (Shot)", price: 20000 },
{ mainCategory: "shots", subCategory: "RON", name: "Havana Club 7 Años (Shot)", price: 26000 },
{ mainCategory: "shots", subCategory: "RON", name: "Zacapa 12 Años (Shot)", price: 32000 },
{ mainCategory: "shots", subCategory: "RON", name: "Zacapa 23 Años (Shot)", price: 50000 },
{ mainCategory: "shots", subCategory: "AGUARDIENTE", name: "Blanco del Valle (Shot)", price: 20000 },
{ mainCategory: "shots", subCategory: "JÄGERMEISTER", name: "Jägermeister (Shot)", price: 25000 },

/* =========================================
LICORES CANECA (licores_caneca)
========================================= */
{ mainCategory: "licores_caneca", subCategory: "WHISKIES", name: "Johnnie Walker Red Label (Caneca)", price: 90000 },
{ mainCategory: "licores_caneca", subCategory: "WHISKIES", name: "Johnnie Walker Black Label (Caneca)", price: 150000 },
{ mainCategory: "licores_caneca", subCategory: "WHISKIES", name: "Jack Daniels No.7 (Caneca)", price: 150000 },
{ mainCategory: "licores_caneca", subCategory: "WHISKIES", name: "Jack Daniels Tennessee Honey (Caneca)", price: 150000 },
{ mainCategory: "licores_caneca", subCategory: "WHISKIES", name: "Jack Daniels Tennessee Fire (Caneca)", price: 150000 },
{ mainCategory: "licores_caneca", subCategory: "WHISKIES", name: "Jameson Irish Whiskey (Caneca)", price: 120000 },
{ mainCategory: "licores_caneca", subCategory: "WHISKIES", name: "Baileys Irish Cream (Caneca)", price: 90000 },
{ mainCategory: "licores_caneca", subCategory: "TEQUILA", name: "Olmeca Reposado (Caneca)", price: 100000 },
{ mainCategory: "licores_caneca", subCategory: "TEQUILA", name: "Centenario Reposado (Caneca)", price: 100000 },
{ mainCategory: "licores_caneca", subCategory: "RON", name: "Caldas 3 Años (Caneca)", price: 60000 },
{ mainCategory: "licores_caneca", subCategory: "RON", name: "Caldas 8 Años (Caneca)", price: 90000 },
{ mainCategory: "licores_caneca", subCategory: "AGUARDIENTE", name: "Blanco del Valle (Caneca)", price: 50000 },
{ mainCategory: "licores_caneca", subCategory: "JÄGERMEISTER", name: "Jägermeister (Caneca)", price: 100000 },

/* =========================================
LICORES BOTELLA (licores_botella)
========================================= */
{ mainCategory: "licores_botella", subCategory: "WHISKIES", name: "Johnnie Walker Red Label (Botella)", price: 150000 },
{ mainCategory: "licores_botella", subCategory: "WHISKIES", name: "Johnnie Walker Black Label (Botella)", price: 280000 },
{ mainCategory: "licores_botella", subCategory: "WHISKIES", name: "Jack Daniels No.7 (Botella)", price: 230000 },
{ mainCategory: "licores_botella", subCategory: "WHISKIES", name: "Jack Daniels Tennessee Honey (Botella)", price: 230000 },
{ mainCategory: "licores_botella", subCategory: "WHISKIES", name: "Jack Daniels Tennessee Fire (Botella)", price: 230000 },
{ mainCategory: "licores_botella", subCategory: "WHISKIES", name: "Jameson Irish Whiskey (Botella)", price: 200000 },
{ mainCategory: "licores_botella", subCategory: "WHISKIES", name: "Baileys Irish Cream (Botella)", price: 150000 },
{ mainCategory: "licores_botella", subCategory: "TEQUILA", name: "Olmeca Reposado (Botella)", price: 190000 },
{ mainCategory: "licores_botella", subCategory: "TEQUILA", name: "Centenario Reposado (Botella)", price: 200000 },
{ mainCategory: "licores_botella", subCategory: "TEQUILA", name: "Jimador Reposado (Botella)", price: 200000 },
{ mainCategory: "licores_botella", subCategory: "TEQUILA", name: "1800 Reposado (Botella)", price: 400000 },
{ mainCategory: "licores_botella", subCategory: "GINEBRA", name: "Gordon's London Dry Gin (Botella)", price: 150000 },
{ mainCategory: "licores_botella", subCategory: "GINEBRA", name: "Bombay Sapphire (Botella)", price: 230000 },
{ mainCategory: "licores_botella", subCategory: "GINEBRA", name: "Beefeater London Dry Gin (Botella)", price: 230000 },
{ mainCategory: "licores_botella", subCategory: "RON", name: "Caldas 3 Años (Botella)", price: 100000 },
{ mainCategory: "licores_botella", subCategory: "RON", name: "Caldas 8 Años (Botella)", price: 160000 },
{ mainCategory: "licores_botella", subCategory: "RON", name: "Havana Club 3 Años (Botella)", price: 130000 },
{ mainCategory: "licores_botella", subCategory: "RON", name: "Havana Club 7 Años (Botella)", price: 220000 },
{ mainCategory: "licores_botella", subCategory: "RON", name: "Zacapa 12 Años (Botella)", price: 260000 },
{ mainCategory: "licores_botella", subCategory: "RON", name: "Zacapa 23 Años (Botella)", price: 450000 },
{ mainCategory: "licores_botella", subCategory: "AGUARDIENTE", name: "Blanco del Valle (Botella)", price: 80000 },
{ mainCategory: "licores_botella", subCategory: "JÄGERMEISTER", name: "Jägermeister (Botella)", price: 200000 },

/* =========================================
PASANTES / BEBIDAS (sin_alcohol)
========================================= */
{ mainCategory: "sin_alcohol", subCategory: "PASANTES", name: "Soda Bretaña", price: 8000 },
{ mainCategory: "sin_alcohol", subCategory: "PASANTES", name: "Coca-Cola", price: 8000 },
{ mainCategory: "sin_alcohol", subCategory: "PASANTES", name: "Canada Dry", price: 8000 },
{ mainCategory: "sin_alcohol", subCategory: "PASANTES", name: "Agua Tónica", price: 8000 },
{ mainCategory: "sin_alcohol", subCategory: "PASANTES", name: "Ginger Beer", price: 8000 },
{ mainCategory: "sin_alcohol", subCategory: "PASANTES", name: "Red Bull", price: 8000 },

/* =========================================
CERVEZAS (cervezas)
========================================= */
{ mainCategory: "cervezas", subCategory: "IMPORTADAS", name: "Corona", price: 10000 },
{ mainCategory: "cervezas", subCategory: "IMPORTADAS", name: "Stella Artois", price: 10000 },
{ mainCategory: "cervezas", subCategory: "IMPORTADAS", name: "Budweiser", price: 10000 },
{ mainCategory: "cervezas", subCategory: "NACIONALES", name: "Club Colombia Dorada", price: 8000 },
{ mainCategory: "cervezas", subCategory: "NACIONALES", name: "Club Colombia Roja", price: 8000 },
{ mainCategory: "cervezas", subCategory: "NACIONALES", name: "Aguila light", price: 8000 },

/* =========================================
CERVEZAS ARTESANALES (artesanales)
========================================= */
{ mainCategory: "artesanales", subCategory: "Artesanales", name: "Weidmann 12", price: 20000 },

/* =========================================
FOOD MENU (food)
========================================= */
{ 
  mainCategory: "food",
  subCategory: "Hamburguesas",
  name: "New Craft Burger",
  description: "Pan artesanal, 160 gramos de carne de res seleccionada, queso mozzarella apanado en Doritos, mermelada de lulo con tocineta en reducción de tequila, salsa ahumada de la casa, cebolla caramelizada, lechuga y tomates frescos, salsa de la casa acompañado de papas rústicas.",
  price: 38900
},
{
  mainCategory: "food",
  subCategory: "Hamburguesas",
  name: "SP Big Bang",
  description: "Pan artesanal, 160 gramos de carne seleccionada, cebolla caramelizada, chimichurri, lechuga, tomate, cebolla crispy, salsa de la casa y bañada en queso mozzarella fundido.",
  price: 34000
},
{
  mainCategory: "food",
  subCategory: "Hamburguesas",
  name: "Cheeseburger SP Original",
  description: "Pan artesanal, 160 gramos de carne seleccionada, cebolla caramelizada, chimichurri, reducción de piña con canela y tequila, jamón ahumado, queso cheddar acompañada de papas rústicas.",
  price: 29900
},
{
  mainCategory: "food",
  subCategory: "Hamburguesas",
  name: "Cheese Finger",
  description: "4 deditos de queso mozzarella apanados con Doritos, acompañado de salsa oriental.",
  price: 21000
},
{
  mainCategory: "food",
  subCategory: "Sanwich",
  name: "Sándwich SP",
  description: "Pan baguette, láminas de pierna de cerdo al barril, cebolla caramelizada, mojo cubano, salsa de la casa, queso cheddar, lechuga y tomates.",
  price: 31000
},
{
  mainCategory: "food",
  subCategory: "Nachos",
  name: "Nachos SP",
  description: "Totopos de maíz crocante, queso gratinado, chile con carne, pico de gallo, guacamole y salsa chipotle.",
  price: 28000
},
{
  mainCategory: "food",
  subCategory: "Papas",
  name: "Papas Súper SP",
  description: "Papas a la francesa artesanales gratinadas, tocineta, bondiola de cerdo al barril, cebolla caramelizada, 150 gramos de carne angus bañadas en nuestra salsa de la casa.",
  price: 30000
}

];