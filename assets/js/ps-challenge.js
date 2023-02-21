function generatePrompt() {
    var brands = [
      "PixelWorks", "Luminous", "Artisan", "ColorBox", "Inkwell", "BrightLight", "PixelCrate", "Rainbow", "WonderDesign", "Brushstroke", "Zyngly",  "Flombee",  "Crumple",  "Brexion",  "Yomero",  "Fuzana",  "Blastr",  "Kraaz",  "Glimp",  "Pluvio",  "Xylenix",  "Wondra",  "Jaxel",  "Lumineo",  "Vorso",  "Nimelo",  "Fyndle",  "Quiktop",  "Zynthex",  "Lazaro",  "Zolara",  "Slytherm",  "Fulger",  "Vixenova",  "Stellon",  "Neotri",  "Spiraxa",  "Kinetico",  "Mokuma",  "Driftix",  "Selenic",  "Klaxonix",  "Vapira",  "Gryphonix",  "Zurix",  "Aurax",  "Nebulae",  "Caelum",  "Fluxar",  "Frostbyte",  "Ecliptix",  "Iridium",  "Joltic",  "Synthetix",  "Ultradyne",  "Venomize",  "Xyloz",  "Yggdrasil",  "Zephyron", "Aurora Coffee Co.", "Wildflower Boutique", "Glow Skincare", "Neon Nights", "Sunrise Yoga", "Electric Dreams", "Mountain Gear", "Sunny Days", "Oasis Spa", "Wanderlust Adventures", "Zentonic Coffee Co.",    "Flouria Juice Bar",    "Infinexa Wholesale",    "Vivolve Coffee Co.",    "Avidin Clothing Co.",    "Cavio Beauty Co.",    "Luminova Lighting Co.",    "Vixora Tech Co.",    "Aerona Travel Co.",    "Sycor Sports Co.",    "Glowley Cosmetics Co.",    "Vistaq Food Co.",    "Uplifted Wellness Co.",    "Sereno Furniture Co.",    "Suntessa Travel Co.",    "Nativia Food Co.",    "Intellivo Tech Co.",    "Aquiris Sports Co.",    "Aurelia Fashion Co.",    "Astoni Furniture Co.",    "Polarix Energy Co.",    "Oasys Wellness Co.",    "Tritone Audio Co.",    "Tropico Food Co.",    "Relia Home Co.",    "Luminae Lighting Co.",    "Meritico Fashion Co.",    "Verdanta Home Co.",    "Juxtavo Tech Co.",    "Stellaro Beauty Co."

    ];
    var prompts = [
      "Create a logo for a fictional company called '" + brands[Math.floor(Math.random() * brands.length)] + "'",
      "Design a brochure for a new photography studio called '" + brands[Math.floor(Math.random() * brands.length)] + "'",
      "Develop a social media campaign for a graphic design agency named '" + brands[Math.floor(Math.random() * brands.length)] + "'",
      "Create a series of vector illustrations for a children's book about a magical world",
      "Design a movie poster for a fictional film festival featuring indie documentaries",
      "Create a logo for a new tech startup called '" + brands[Math.floor(Math.random() * brands.length)] + "'",
      "Design a poster for an upcoming music festival .",
      "Develop a series of custom illustrations for a children's book.",
      "Design a menu for a new restaurant.",
      "Create a set of custom icons for a mobile app called '" + brands[Math.floor(Math.random() * brands.length)] + "'",
      "Design a website for a local non-profit organization.",
      "Develop a social media campaign for a new product launch. The product is called '" + brands[Math.floor(Math.random() * brands.length)] + "'",
      "Create a set of graphics for a blog about health and wellness. The blog is called '" + brands[Math.floor(Math.random() * brands.length)] + "'",
      "Design a package for a new line of skincare products.",
      "Develop a landing page for a new line of organic food products.",
      "Create a poster for a local theater production of a classic play.",
      "Design a label for a new line of craft beer.",
      "Develop a series of social media posts for a nonprofit organization promoting environmental conservation.",
      "Create a brochure for a new line of outdoor gear.",
      "Design a website for a new business offering pet grooming services.",
      "Develop a series of icons for a mobile app related to productivity.",
      "Create an infographic about the benefits of using graphic design for businesses.",
      "Design a postcard for a museum exhibit featuring modern art.",
      "Develop a set of custom graphics for an e-commerce website selling beauty products.",
      "Create a logo for a new fashion brand called '" + brands[Math.floor(Math.random() * brands.length)] + "'",
      "Design a poster for a film festival featuring independent films.",
      "Develop a series of banner ads for an online retailer selling sports equipment. Brand name: '" + brands[Math.floor(Math.random() * brands.length)] + "'",
      "Create a set of custom illustrations for a website about travel.",
      "Design a brochure for a new line of eco-friendly cleaning products called '" + brands[Math.floor(Math.random() * brands.length)] + "'",
      "Create a logo for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' using a circular shape and a coffee bean icon.",
      "Create a social media post for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' featuring a model wearing the latest collection.",
      "Design a flyer for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' showcasing their latest product line.",
      "Create a poster for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' advertising their upcoming music festival.",
      "Design a business card for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' featuring a lotus flower icon.",
      "Create an album cover for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' featuring a neon light effect.",
      "Design a brochure for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' showcasing their latest outdoor gear collection.",
      "Create a billboard ad for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' advertising their new line of sunglasses.",
      "Design a website homepage for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' using a soothing color scheme.",
      "Create a t-shirt design for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' featuring a mountain landscape and the brand name.",
      "Design a product packaging for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' using a minimalist approach.",
      "Create a Facebook cover photo for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' showcasing their mission and values.",
        "Design an infographic for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' showcasing their industry expertise.",
        "Create a logo for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' using a modern and sleek design.",
        "Design a website banner for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' featuring their latest promotion.",
        "Create a social media graphic for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' featuring customer testimonials.",
        "Design a postcard for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' promoting their latest event.",
        "Create an album cover for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' using a retro-inspired design.",
        "Design a magazine ad for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' showcasing their newest product line.",
        "Create a business card for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' using a hand-drawn illustration.",
        "Design a brochure for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' featuring their history and story.",
        "Create a product display for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' using a nature-inspired design.",
        "Design an email newsletter for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' showcasing their latest news and events.",
        "Create a website homepage for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' using a bold and colorful design.",
        "Design a food menu for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' featuring their signature dishes.",
        "Create a social media ad for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' promoting their summer sale.",
        "Design a billboard ad for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' featuring a celebrity endorsement.",
        "Create a product label for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' using a vintage design.",
        "Design a flyer for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' promoting their new store location.",
        "Create a business presentation template for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' using a clean and modern design.",
        "Design a thank-you card for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' using a minimalist design.",
        "Create a website header for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' using a nature-inspired design.",
        "Design a product catalog for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' featuring their newest collection.",
        "Create a social media cover photo for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' featuring their brand story.",
        "Design a t-shirt design for the brand '" + brands[Math.floor(Math.random() * brands.length)] + "' featuring their brand message.",
        "Create an event banner for the brand '" + brands[Math.floor(Math.random() * brands.length)]
      ];
      var randomIndex = Math.floor(Math.random() * prompts.length);
      return prompts[randomIndex];
    }
    
    // Get references to the button and prompt container elements
    var generateButton = document.getElementById("generate-button");
    var promptContainer = document.getElementById("prompt-container");
    
    // Set the initial content of the prompt container
    promptContainer.textContent = generatePrompt();
    
    // Add an event listener to the button that generates a prompt and displays it in the prompt container
    generateButton.addEventListener("click", function() {
      var finalPrompt = generatePrompt();
      var i = 0;
      var intervalId = setInterval(function() {
        promptContainer.textContent = generatePrompt();
        i++;
        if (i >= 20) {
          clearInterval(intervalId);
          promptContainer.textContent = finalPrompt;
        }
      }, 100);
    });