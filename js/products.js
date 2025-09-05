// FOXLEY & Co Product Catalog
// Luxury clothing affiliate store product data

const products = [
  // GENTLEMEN SECTION (12 items)
  {
    id: "g-001",
    category: "gentlemen",
    name: "Leriya Fashion Men's Formal Button Down Shirt",
    tagline: "Slim Fit Shirt's for Men | Textured Long Sleeve Polycotton",
    price: "₹479",
    variants: [
    {
      color: 'Black', // The first variant is the default
      images: [
        'https://m.media-amazon.com/images/I/615W1abrC2L._SY741_.jpg',
        'https://m.media-amazon.com/images/I/61JRJ0G9a3L._SY741_.jpg', 
        'https://m.media-amazon.com/images/I/61C-9uE7WCL._SY741_.jpg'
      ]
    },
    {
      color: 'Maroon',
      images: [
        'https://m.media-amazon.com/images/I/61qkmzkjztL._SY741_.jpg',
        'https://m.media-amazon.com/images/I/614X6T9bXgL._SY741_.jpg',
        'https://m.media-amazon.com/images/I/617tuTFgbeL._SY741_.jpg'
      ]
    },
    {
      color: 'Green',
      images: [
        'https://m.media-amazon.com/images/I/61hmjIQ3tqL._SY741_.jpg',
        'https://m.media-amazon.com/images/I/61BmCJII3GL._SY741_.jpg',
        'https://m.media-amazon.com/images/I/61Fx04K7z6L._SY741_.jpg'
      ]
    }
  ],
  images: [
        'https://m.media-amazon.com/images/I/615W1abrC2L._SY741_.jpg',
        'https://m.media-amazon.com/images/I/61JRJ0G9a3L._SY741_.jpg', 
        'https://m.media-amazon.com/images/I/61C-9uE7WCL._SY741_.jpg'
      ],
    amazonUrl: "https://www.amazon.in/gp/product/B0CM11NTXP/ref=ewc_pr_img_1?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["POLYY COTTON", "Solid Regular Fit", "Long Sleeve", "Standard Length","REGULAR COLLAR"],
    description: "Textured Fabric: Waffle-knit texture adds a unique and stylish touch to the classic shirt.Classic Button-Down: Features a full button front with a sharp collar for a polished look.Perfect for Layering: Ideal to wear over a tee or under a jacket for multiple styling options.Relaxed Fit: Loose silhouette offers comfort and a laid-back vibe.Everyday Wear: Lightweight, breathable material perfect for all-day wear in any season"
  },
  {
    id: "g-002",
    category: "gentlemen",
    name: "TAGDO Men's Jacquard Chain Polo Shirt",
    tagline: "Comfort & Fit Casual Wear | Versatile Style | Elegant Design | Soft & Breathable | Easy Care",
    price: "₹399",
    variants: [
    {
      color: 'Original',
      images: [
        "https://m.media-amazon.com/images/I/71wsFuSw1kL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/614M06s5KiL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/51JChjWzrqL._SX679_.jpg" 
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/71wsFuSw1kL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/614M06s5KiL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/51JChjWzrqL._SX679_.jpg"  
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0DJR8YGTX/ref=ewc_pr_img_1?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["100% cashmere", "Classic fit", "Ribbed trim", "Dry clean only"],
    description: "Exquisite cashmere V-neck sweater that epitomizes sophisticated comfort. A versatile piece that transitions seamlessly from boardroom to countryside retreat."
  },
  {
    id: "g-003",
    category: "gentlemen",
    name: "OORA Men's Viscose V-Shape Tuxedo Style Waist Coat",
    tagline: " Slim Fit Latest V Neck Half Slim Jacket Formal Casual Stylish Coat",
    price: "₹949",
    variants: [
    {
      color: 'Original',
      images: [
        "https://m.media-amazon.com/images/I/61voNKwTlVL._SX569_.jpg",
        "https://m.media-amazon.com/images/I/61ia3KKRysL._SX569_.jpg",
        "https://m.media-amazon.com/images/I/517X6fz4KhL._SX569_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/61voNKwTlVL._SX569_.jpg",
      "https://m.media-amazon.com/images/I/61ia3KKRysL._SX569_.jpg",
      "https://m.media-amazon.com/images/I/517X6fz4KhL._SX569_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B07H6ZSGJS/ref=ox_sc_act_title_1?smid=A3EXCWOG3AQ6A2&th=1&psc=1",
    specs: ["100% wool", "Tailored fit", "Natural shoulder", "Horn buttons"],
    description: "A masterfully tailored navy wool blazer that serves as the cornerstone of any gentleman's wardrobe. Impeccable construction meets timeless design."
  },
  {
    id: "g-004",
    category: "gentlemen",
    name: "TAGAS Men's Regular Jacket",
    tagline: "Fit For Casual Wear || Low-Cut Standing Collar || Full Sleeve| Latest Stylish Jacket For Men ||Regular Fit Zip-Up Casual jacket||",
    price: "₹699",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/61+vlw4aZaL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/71kYF44mbgL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/81Y286OcuVL._SY741_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/61+vlw4aZaL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71kYF44mbgL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/81Y286OcuVL._SY741_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0CQ8M27C9/ref=ewc_pr_img_4?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["98% cotton, 2% elastane", "Slim fit", "Flat front", "Machine washable"],
    description: "Premium chino trousers that bridge the gap between casual and formal. The perfect companion for weekend adventures and business casual settings."
  },
  {
    id: "g-005",
    category: "gentlemen",
    name: "GRECIILOOKS Men's Lycra Cargo Track Pants",
    tagline: "Loose Fit Joggers for Men | Travel & Lounge Wear with Pockets ",
    price: "₹499",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/51TwVOOQN7L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/61wrH9gb6+L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/61--IgTyKnL._SY741_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/51TwVOOQN7L._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61wrH9gb6+L._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61--IgTyKnL._SY741_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0DSWC3BXW/ref=ewc_pr_img_1?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["100% merino wool", "Regular fit", "Three-button placket", "Temperature regulating"],
    description: "Luxurious merino wool polo that offers unparalleled comfort and style. The discerning choice for elevated casual occasions."
  },
  {
    id: "g-006",
    category: "gentlemen",
    name: "Lymio Track Pant for Men || Regular Fit",
    tagline: " Track Pants || Lycra Full Elastic Jogger Track Pant",
    price: "₹449",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/61m5W8DEuLL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/61owPnipESL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/61oHvvCAMQL._SY741_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/61m5W8DEuLL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61owPnipESL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61oHvvCAMQL._SY741_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0CPVR2RMW/ref=ewc_pr_img_1?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["100% Harris Tweed", "Half-canvas construction", "Patch pockets", "Elbow patches"],
    description: "Distinguished Harris Tweed sport coat that celebrates traditional craftsmanship. A statement piece for the gentleman who appreciates heritage."
  },
  {
    id: "g-007",
    category: "gentlemen",
    name: "RAXEDO Old Money Pants for Men",
    tagline: "Classic White Pants for a Timeless Look | Stylish Pant Men for Comfort",
    price: "₹998",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/51iYpINguGL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/71cGBWoZ+kL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/71OJ2nL4MrL._SY741_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/51iYpINguGL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71cGBWoZ+kL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71OJ2nL4MrL._SY741_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0F1DRWZPC/ref=ewc_pr_img_2?smid=A2C8K9C9O1S2SU&th=1&psc=1",
    specs: ["100% Egyptian cotton", "Spread collar", "French cuffs", "Wrinkle resistant"],
    description: "Crisp Egyptian cotton dress shirt designed for the modern professional. Exceptional quality that maintains its elegance throughout the longest days."
  },
  {
    id: "g-008",
    category: "gentlemen",
    name: "Lymio Baggy Denim Jeans Pants for Men (L-Jeans)",
    tagline: "Men jeans || Men jeans pants || Denim Jeans || Baggy jeans for men || Oversized fit",
    price: "749",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/81WzIbilc9L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/8137Bu8s4jL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/71yEdMvlnoL._SY741_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/81WzIbilc9L._SY741_.jpg",
      "https://m.media-amazon.com/images/I/8137Bu8s4jL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71yEdMvlnoL._SY741_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0D178STD1/ref=ewc_pr_img_1?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["100% cashmere", "Button front", "Ribbed cuffs", "Two front pockets"],
    description: "Luxurious cashmere cardigan that provides warmth without compromising style. The perfect layer for cooler evenings and transitional seasons."
  },
  {
    id: "g-009",
    category: "gentlemen",
    name: "WINTAGE Men's Polyester Cotton and Evening 3 Pc Suit",
    tagline: "3 piece suit Solid || Regular Fit || Business Suit || Formal Suit for men",
    price: "₹4,789",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/71uEX7VbsZL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/71NVCtQIJFL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/9125M1IhlCL._SY741_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/71uEX7VbsZL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71NVCtQIJFL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/9125M1IhlCL._SY741_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B07VBSGGTB/ref=ewc_pr_img_1?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["100% wool", "Flat front", "Quarter-top pockets", "Dry clean only"],
    description: "Impeccably tailored wool dress trousers that form the foundation of formal attire. Precision cut for the discerning gentleman."
  },
  {
    id: "g-010",
    category: "gentlemen",
    name: "HAMMONDS FLYCATCHER Genuine Leather Belt for Men",
    tagline: "Perfect for Formal and Casual Wear - Adjustable Waistband up to 46 Inches - Autolock Belt for Formal and Casual Wear",
    price: "₹999",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/71+4v5IpLML._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71G9-hIPWzL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/817Nq1srcUL._SX679_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/71+4v5IpLML._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71G9-hIPWzL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/817Nq1srcUL._SX679_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0CJFSFS5F/ref=ox_sc_act_title_1?smid=A43ILAQ271414&th=1",
    specs: ["100% linen", "Relaxed fit", "Camp collar", "Natural wrinkle texture"],
    description: "Refined linen shirt that captures the essence of summer elegance. Effortlessly sophisticated for warm weather occasions."
  },
  {
    id: "g-011",
    category: "gentlemen",
    name: "STANPHORD Mens Ascent Formal Shoes",
    tagline: "Formal Wear, Patent Faux Leather, Slip-on Shoes, Comfortable, Business Casual, Shinny & Glossy, Buckle Design, Office Wear, Parties",
    price: "₹999",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/61pN3QN3bcL._SY535_.jpg",
        "https://m.media-amazon.com/images/I/61BS9w1yRnL._SY695_.jpg",
        "https://m.media-amazon.com/images/I/611y0NZbV7L._SY535_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/61pN3QN3bcL._SY535_.jpg",
      "https://m.media-amazon.com/images/I/61BS9w1yRnL._SY695_.jpg",
      "https://m.media-amazon.com/images/I/611y0NZbV7L._SY535_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0D7M88V3V/ref=ewc_pr_img_1?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["100% silk", "Knitted construction", "Square end", "Versatile styling"],
    description: "Contemporary knitted silk tie that adds texture and personality to formal ensembles. A fresh take on traditional neckwear."
  },
  {
    id: "g-012",
    category: "gentlemen",
    name: "Puma Mens Court Shatter Low Sneaker",
    tagline: "Casual Sneakers, Clean court styling, Lace closure for snug fit, Breathable design",
    price: "₹2,699",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/51ZYX+HzxrL._SY695_.jpg",
        "https://m.media-amazon.com/images/I/61H3n0-gCCL._SY695_.jpg",
        "https://m.media-amazon.com/images/I/51BoQdavDiL._SY695_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/51ZYX+HzxrL._SY695_.jpg",
      "https://m.media-amazon.com/images/I/61H3n0-gCCL._SY695_.jpg",
      "https://m.media-amazon.com/images/I/51BoQdavDiL._SY695_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0CWR1CPNH/ref=ewc_pr_img_2?smid=A3L1OUG0B9LM6T&th=1&psc=1",
    specs: ["100% brushed cotton", "Regular fit", "Button-down collar", "Chest pockets"],
    description: "Cozy flannel shirt that embodies rustic sophistication. The perfect companion for weekend retreats and autumn walks."
  },

  // LADIES SECTION (12 items)
  {
    id: "l-001",
    category: "ladies",
    name: "Istyle Can Women’s Slim Fit",
    tagline: "Solid Rib Knit Stretchable Top | Round Neck Short Sleeve Tee | Plain Fitted T-Shirt for Casual Wear",
    price: "₹330",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/61BBlDNERFL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/51isRMxaAnL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61wMREUXsTL._SX679_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/61BBlDNERFL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51isRMxaAnL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/61wMREUXsTL._SX679_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0CKLPW46X/ref=ewc_pr_img_1?smid=A1LVJCIAUUXZ9Z&th=1&psc=1",
    specs: ["100% silk charmeuse", "Relaxed fit", "French seams", "Dry clean only"],
    description: "Luxurious silk blouse that drapes beautifully and moves with grace. A versatile piece that transitions seamlessly from day to evening."
  },
  {
    id: "l-002",
    category: "ladies",
    name: "Leriya Fashion Women Crepe",
    tagline: "Oversized Shirt Korean Casual Short Sleeve Loose Fit Top | Summer Wear",
    price: "₹389",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/719Fun5OPUL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/716+JBeUC4L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/71EY0b97tDL._SY741_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/719Fun5OPUL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/716+JBeUC4L._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71EY0b97tDL._SY741_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0CZDXTHMG/ref=ewc_pr_img_3?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["100% cashmere", "Crew neck", "Ribbed trim", "Machine washable"],
    description: "Exquisite cashmere sweater that envelops you in luxurious comfort. The epitome of understated sophistication for the modern woman."
  },
  {
    id: "l-003",
    category: "ladies",
    name: "GRECIILOOKS Shirt for Women Stylish",
    tagline: "Long Shirt for Women | Oversized Shirt for Women | Women Shirt | Woman TOP",
    price: "₹479",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/71f3SP2zNKL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/61k6esU0gsL._SY741_.jpg",
        "https://m.media-amazon.com/images/I/714dztPGU5L._SY741_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/71f3SP2zNKL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61k6esU0gsL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/714dztPGU5L._SY741_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0DQLGVWHF/ref=ewc_pr_img_4?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["100% wool", "Tailored fit", "Peak lapels", "Fully lined"],
    description: "Impeccably tailored wool blazer that commands attention and respect. The cornerstone of confident, professional dressing."
  },
  {
    id: "l-004",
    category: "ladies",
    name: "TOPLOT Women Shirt",
    tagline: "Tops for Women || Western Tops for Woman Stylish || Trendy || Oversized (5233)",
    price: "₹399",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/71ehlKHqhUL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61RKeoU1wOL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71Xn2GCfuqL._SY741_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/71ehlKHqhUL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61RKeoU1wOL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71Xn2GCfuqL._SY741_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0DX249QMV/ref=ewc_pr_img_9?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["Stretch wool blend", "High waist", "Back slit", "Invisible zip"],
    description: "Perfectly fitted pencil skirt that celebrates feminine elegance. A timeless silhouette that never goes out of style."
  },
  {
    id: "l-005",
    category: "ladies",
    name: "Nifty Womens Cargo Jeans",
    tagline: " Womens Mid Rise Denim Relaxed Fit Cargo Jeans || Mustard cargo jeans",
    price: "₹688",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/6158M2EREYL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71Ptkt31QRL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71rENyVeLFL._SY741_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/6158M2EREYL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71Ptkt31QRL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71rENyVeLFL._SY741_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0DHDG28T4/ref=ox_sc_act_title_3?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["Silk crepe", "A-line silhouette", "Three-quarter sleeves", "Self-tie belt"],
    description: "Elegant midi dress that embodies refined femininity. The perfect choice for sophisticated occasions and intimate gatherings."
  },
  {
    id: "l-006",
    category: "ladies",
    name: "LITZO Cotton Cargo Pants for Women",
    tagline: "Womens Cargo Pant (L-51-55) || Baggy Style || Regular fit trousers for women",
    price: "₹679",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/6199k3csafL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71sOsYSXdbL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/81dmpEI7DkL._SY741_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/6199k3csafL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71sOsYSXdbL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/81dmpEI7DkL._SY741_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0F2MJ5JS9/ref=ewc_pr_img_2?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["100% cashmere", "Open front", "Long sleeves", "Side pockets"],
    description: "Sumptuous cashmere cardigan that adds sophistication to any ensemble. The ultimate in comfortable luxury."
  },
  {
    id: "l-007",
    category: "ladies",
    name: "GRECIILOOKS High Waist Cotton Trousers for Women",
    tagline: "Flared Parachute Pants with Side Pockets | Casual Travel Cargo Pants",
    price: "₹529",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/51hOMC6zQDL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71ZTZA4N7jL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/51EmlN+a-DL._SY741_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/51hOMC6zQDL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71ZTZA4N7jL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/51EmlN+a-DL._SY741_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0F21PRJZZ/ref=ewc_pr_img_1?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["Wool crepe", "High rise", "Straight leg", "Pressed crease"],
    description: "Beautifully tailored trousers that strike the perfect balance between comfort and sophistication. Essential for the modern professional woman."
  },
  {
    id: "l-008",
    category: "ladies",
    name: "Symbol Premium Women's Formal Trousers ",
    tagline: "Premium Women's 'Desk-to-Dinner' Wide Leg 4-Way Stretch Formal Trousers (Flexi-Waist | Easy Care)",
    price: "₹1,499",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/613XtOzSQkL._SX569_.jpg",
      "https://m.media-amazon.com/images/I/712q77Y5qkL._SX569_.jpg",
      "https://m.media-amazon.com/images/I/81ASDeYmM+L._SX569_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/613XtOzSQkL._SX569_.jpg",
      "https://m.media-amazon.com/images/I/712q77Y5qkL._SX569_.jpg",
      "https://m.media-amazon.com/images/I/81ASDeYmM+L._SX569_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0CSFPV6WD/ref=ewc_pr_img_4?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["Merino wool", "Slim fit", "Ribbed cuffs", "Machine washable"],
    description: "Sleek turtleneck sweater that epitomizes understated elegance. A versatile foundation piece for countless sophisticated looks."
  },
  {
    id: "l-009",
    category: "ladies",
    name: "LooknBook Art Women's Printed Lehenga Choli Set",
    tagline: "Foil Print Lehanga Choli Set || Luxurioes Comfort || Dakshanya Promise",
    price: "₹2,199",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/71-yU18wDDL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/81yjvnsvfHL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/81KiWn1oS0L._SY741_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/71-yU18wDDL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/81yjvnsvfHL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/81KiWn1oS0L._SY741_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0DJWCGZXR/ref=ox_sc_act_title_1?smid=A2UW8K3X8C756M&th=1&psc=1",
    specs: ["Jersey knit", "V-neckline", "Wrap front", "Three-quarter sleeves"],
    description: "Universally flattering wrap dress that celebrates feminine curves. Effortlessly chic for both professional and social occasions."
  },
  {
    id: "l-010",
    category: "ladies",
    name: "TAHVO Polyviscose Two Piece Coat and Trouser Set for Women",
    tagline: "Febric Regular Fit Stylish || Formal Blazer and Trouser Set for Bussiness Meetings, Office Used",
    price: "₹5,644",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/51JNfcGCp6L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/51HD0C0mBZL._SY550_.jpg",
      "https://m.media-amazon.com/images/I/51B2kSYo93L._SY550_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/51JNfcGCp6L._SX522_.jpg",
      "https://m.media-amazon.com/images/I/51HD0C0mBZL._SY550_.jpg",
      "https://m.media-amazon.com/images/I/51B2kSYo93L._SY550_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0DHXBVQ6L/ref=sw_img_1?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["100% linen", "Oversized fit", "Button front", "Rolled sleeves"],
    description: "Beautifully relaxed linen shirt that captures effortless summer style. The perfect piece for weekend getaways and casual elegance."
  },
  {
    id: "l-011",
    category: "ladies",
    name: "YOHO Bliss 006 Slip-on Loafers for Women ",
    tagline: "Comfortable & Stylish Flat | Fashion Moccasins with Footpharma Footbed | Perfect for Casual, Formal Shoe",
    price: "₹1,377",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/61NVYcnpAcL._SY535_.jpg",
      "https://m.media-amazon.com/images/I/61lSOjifczL._SY535_.jpg",
      "https://m.media-amazon.com/images/I/61l2Z31pm8L._SY535_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/61NVYcnpAcL._SY535_.jpg",
      "https://m.media-amazon.com/images/I/61lSOjifczL._SY535_.jpg",
      "https://m.media-amazon.com/images/I/61l2Z31pm8L._SY535_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0F43KKN4H/ref=ox_sc_act_title_1?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["Silk blend", "Accordion pleats", "High waist", "Invisible zip"],
    description: "Graceful pleated skirt that moves beautifully with every step. A romantic piece that adds elegance to any wardrobe."
  },
  {
    id: "l-012",
    category: "ladies",
    name: "SilverArrow Comfortable Trendy Heels For Women & Girls",
    tagline: "Comfortable Stylish Alluring Denim Strap Block Heels Light Weight Trendy Heels For Women & Girls",
    price: "₹699",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/61vgKiOoISL._SY695_.jpg",
      "https://m.media-amazon.com/images/I/71HgjgRRR8L._SY695_.jpg",
      "https://m.media-amazon.com/images/I/61sIKNoIVdL._SY675_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/61vgKiOoISL._SY695_.jpg",
      "https://m.media-amazon.com/images/I/71HgjgRRR8L._SY695_.jpg",
      "https://m.media-amazon.com/images/I/61sIKNoIVdL._SY675_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0DNJRKTQD/ref=ewc_pr_img_2?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["100% cashmere", "Oversized design", "Fringe details", "Hand wash"],
    description: "Indulgent cashmere scarf that elevates any outfit. The perfect accessory for adding warmth and sophistication to cooler days."
  },

  // ACCESSORIES SECTION (8 items)
  {
    id: "a-001",
    category: "accessories",
    name: "TIMEWEAR Chain Watch for Men",
    tagline: "Analog Day Date Functioning Stainless Steel Chain Watch for Men",
    price: "₹379",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/81FUOCgGF0L._SY741_.jpg",
      "https://m.media-amazon.com/images/I/81b4XCIqYxL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/41aZwST0HKL.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/81FUOCgGF0L._SY741_.jpg",
      "https://m.media-amazon.com/images/I/81b4XCIqYxL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/41aZwST0HKL.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B07MV8XDDV/ref=ewc_pr_img_1?smid=A2IMXMX2I0MD9T&th=1",
    specs: ["100% silk", "Hand-rolled edges", "Multiple patterns", "Dry clean only"],
    description: "Exquisite silk pocket square that adds a touch of refinement to formal attire. The perfect detail for the discerning gentleman."
  },
  {
    id: "a-002",
    category: "accessories",
    name: "Titan Analog Gold Dial Men's Watch",
    tagline: "Classic Gold Tone || Versatil Styling || Water Resistant ||  Refined Dial Finish",
    price: "₹1,995",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/71iSH+fOc5L._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61MOVTMhJ1L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51TOFuAIVpL._SX679_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/71iSH+fOc5L._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61MOVTMhJ1L._SX679_.jpg",
      "https://m.media-amazon.com/images/I/51TOFuAIVpL._SX679_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B00K81V2Q2/ref=ewc_pr_img_1?smid=A1JFLV2BUSJ5AK&psc=1",
    specs: ["Swiss movement", "Gold-plated case", "Leather strap", "Water resistant"],
    description: "Prestigious gold timepiece that combines classic design with precision engineering. A statement of refined taste and accomplishment."
  },
  {
    id: "a-003",
    category: "accessories",
    name: "Dervin Rectangular Sunglasses ",
    tagline: " Rectangular Rimless Sunglasses for Men and Women || Fashionable yet functional || UV Protected lenses",
    price: "₹349",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/41dZ0dSM3hL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/41LiVgjGmQL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/41K4QJweEZL._SX679_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/41dZ0dSM3hL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/41LiVgjGmQL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/41K4QJweEZL._SX679_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0D36264Z4/ref=ewc_pr_img_1?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["Full-grain leather", "Multiple compartments", "Gold hardware", "Dust bag included"],
    description: "Exquisitely crafted leather handbag that combines timeless style with practical functionality. The perfect companion for the discerning woman."
  },
  {
    id: "a-004",
    category: "accessories",
    name: "FLYING BERRY Women Handbags",
    tagline: "Satchel Bags Sling Bags Clutch Wallet For Women",
    price: "₹3,574",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/81nHeTalcIL._SY535_.jpg",
      "https://m.media-amazon.com/images/I/81U+pKEZgtL._SY575_.jpg",
      "https://m.media-amazon.com/images/I/81YKExb+txL._SX535_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/81nHeTalcIL._SY535_.jpg",
      "https://m.media-amazon.com/images/I/81U+pKEZgtL._SY575_.jpg",
      "https://m.media-amazon.com/images/I/81YKExb+txL._SX535_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B07BWBWB18/ref=ewc_pr_img_1?smid=A59KW66GR1J18&th=1",
    specs: ["Cultured pearls", "Gold clasp", "Hand-knotted", "16-inch length"],
    description: "Lustrous cultured pearl necklace that embodies timeless elegance. A heritage piece that will be treasured for generations."
  },
  {
    id: "a-005",
    category: "accessories",
    name: "Caprese Yondella Women's Sling Bag",
    tagline: "Faux leather material peach colored sling bag",
    price: "₹849",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/61CwPGVHy6L._SY535_.jpg",
      "https://m.media-amazon.com/images/I/61uKcK+6DSL._SY535_.jpg",
      "https://m.media-amazon.com/images/I/51pyMlXlkjL._SY535_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/61CwPGVHy6L._SY535_.jpg",
      "https://m.media-amazon.com/images/I/61uKcK+6DSL._SY535_.jpg",
      "https://m.media-amazon.com/images/I/51pyMlXlkjL._SY535_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B07B9FBW14/ref=ewc_pr_img_2?smid=A1WYWER0W24N8S&th=1&psc=1",
    specs: ["100% silk", "Hand-finished", "Classic width", "Multiple patterns"],
    description: "Luxurious silk tie that exemplifies professional sophistication. The finishing touch for impeccable formal attire."
  },
  {
    id: "a-006",
    category: "accessories",
    name: "Titan Dial Women's Watch",
    tagline: " Karishma Analog Champagne Dial Women's Watch || Stylish Gold Strap",
    price: "₹2,542",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/61Q0Jcj+8GL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61hsVj9nJuL._SL1000_.jpg",
        "https://m.media-amazon.com/images/I/51Y5zq9lr2S._SL1500_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/61Q0Jcj+8GL._SL1500_.jpg",
      "https://m.media-amazon.com/images/I/61hsVj9nJuL._SL1000_.jpg",
      "https://m.media-amazon.com/images/I/51Y5zq9lr2S._SL1500_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B007JA3FQ0/ref=ewc_pr_img_1?smid=A1JFLV2BUSJ5AK&th=1",
    specs: ["Italian leather", "Reversible design", "Gold buckle", "Multiple sizes"],
    description: "Premium Italian leather belt that combines quality craftsmanship with versatile styling. An essential accessory for the well-dressed individual."
  },
  {
    id: "a-007",
    category: "accessories",
    name: "Yellow Chimes Earrings for Women and Girls",
    tagline: "Fashion Crystal Dangler | Long Danglers Earrings | Accessories Jewellery for Women ",
    price: "₹349",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/51HwtrJZqZL._SY575_.jpg",
        "https://m.media-amazon.com/images/I/71fl54GZdFL._SY695_.jpg",
        "https://m.media-amazon.com/images/I/717FssQLNtL._SY695_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/51HwtrJZqZL._SY575_.jpg",
      "https://m.media-amazon.com/images/I/71fl54GZdFL._SY695_.jpg",
      "https://m.media-amazon.com/images/I/717FssQLNtL._SY695_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B07N7FVH5B/ref=ewc_pr_img_1?smid=A1JFLV2BUSJ5AK&th=1",
    specs: ["100% cashmere", "Touchscreen compatible", "Ribbed cuffs", "Hand wash"],
    description: "Sumptuous cashmere gloves that provide unparalleled comfort and warmth. The perfect accessory for cooler weather sophistication."
  },
  {
    id: "a-008",
    category: "accessories",
    name: "Saavi For Girls For Women & Girls Chain Necklace Stylish Pendant",
    tagline: "Stylish & Trendy Design || Super Lightweight & Comfortable || Perfect Gift Option",
    price: "₹299",
    variants: [
    {
      color: 'Black',
      images: [
        "https://m.media-amazon.com/images/I/41hEiuXQi8L._SY575_.jpg",
      "https://m.media-amazon.com/images/I/71pQjpUdelL._SY575_.jpg",
      "https://m.media-amazon.com/images/I/61L1sC2cFSL._SY695_.jpg"
      ]
    },],
    images: [
      "https://m.media-amazon.com/images/I/41hEiuXQi8L._SY575_.jpg",
      "https://m.media-amazon.com/images/I/71pQjpUdelL._SY575_.jpg",
      "https://m.media-amazon.com/images/I/61L1sC2cFSL._SY695_.jpg"
    ],
    amazonUrl: "https://www.amazon.in/gp/product/B0F88GQRC1/ref=ewc_pr_img_2?smid=A3N27C0IQIKTOQ&th=1",
    specs: ["Gold-plated", "Crystal accents", "Vintage inspired", "Gift box included"],
    description: "Exquisite vintage-inspired brooch that adds a touch of old-world glamour to any ensemble. A unique piece for the discerning collector."
  }
];

// Utility functions
export function getProductsByCategory(category) {
  return products.filter(product => product.category === category);
}

export function getProductById(id) {
  return products.find(product => product.id === id);
}

export function getSuggestedProducts(currentProductId, category, limit = 3) {
  return products
    .filter(product => product.category === category && product.id !== currentProductId)
    .slice(0, limit);
}

export function getAllProducts() {
  return products;
}

/* Export for module use (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    products,
    getProductsByCategory,
    getProductById,
    getSuggestedProducts,
    getAllProducts
  };
}*/