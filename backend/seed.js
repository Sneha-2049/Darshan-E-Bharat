// seed.js
// const mongoose = require("mongoose");
// const Product = require("./models/product"); // adjust path if needed

// const MONGO_URI = "mongodb+srv://majorproject:darshanebharat@userlogin.qhdllt2.mongodb.net/userlogin?retryWrites=true&w=majority"; // apna URI daalo
// const VENDOR_ID = "69d95862c3ae8a6951078080"; // apna real vendorId daalo

// const products = [
//   {
//     "title": "Bastar Dokra Bull Statue",
//     "price": 2450,
//     "category": "Home Decor",
//     "stock": 10,
//     "description": "Handcrafted non-ferrous metal casting using the lost-wax technique.",
//     "originState": "Chhattisgarh",
//     "tribeName": "Bastar Tribes",
//     "materialUsed": "Bell Metal (Brass & Tin)",
//     "heritageHistory": "Dokra art dates back 4,000 years to the Indus Valley Civilization. Each piece is unique as the mold is broken after casting.",
//     "authenticity": "GI Tagged",
//     "artisanName": "Suresh Baghel",
//     "dimensions": "8 x 4 x 6 inches",
//     "weight": "1.2 kg",
//     "careInstructions": "Clean with a dry cloth; use pitambari for extra shine.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/ecommerce/accessories-bag.jpg"]
//   },
//   {
//     "title": "Paitkar Scroll Painting",
//     "price": 4500,
//     "category": "Art & Paintings",
//     "stock": 5,
//     "description": "Traditional scroll painting depicting tribal folklore and legends.",
//     "originState": "Jharkhand",
//     "tribeName": "Santhal Tribe",
//     "materialUsed": "Handmade Paper & Natural Dyes",
//     "heritageHistory": "Known as the 'Scroll Paintings of the East,' Paitkar art is one of the oldest tribal folk arts in India, used by storytellers.",
//     "authenticity": "Handmade",
//     "artisanName": "Anil Gayen",
//     "dimensions": "24 x 12 inches",
//     "weight": "200g",
//     "careInstructions": "Keep away from direct sunlight and moisture.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/ecommerce/leather-bag-gray.jpg"]
//   },
//   {
//     "title": "Blue Pottery Floral Vase",
//     "price": 1200,
//     "category": "Home Decor",
//     "stock": 15,
//     "description": "Distinctive blue and white glazed pottery without the use of clay.",
//     "originState": "Rajasthan",
//     "tribeName": "Jaipur Artisans",
//     "materialUsed": "Quartz Stone Powder & Glass",
//     "heritageHistory": "Introduced by the Mughals, this art form is unique because it doesn't use clay and is fired at low temperatures.",
//     "authenticity": "GI Tagged",
//     "artisanName": "Kailash Chand",
//     "dimensions": "10 inches height",
//     "weight": "800g",
//     "careInstructions": "Fragile; handle with care. Wipe with damp cloth.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/food/pot.jpg"]
//   },
//   {
//     "title": "Warli Canvas Wall Art",
//     "price": 1850,
//     "category": "Art & Paintings",
//     "stock": 20,
//     "description": "Geometrical tribal art representing the daily life of the Warli community.",
//     "originState": "Maharashtra",
//     "tribeName": "Warli Tribe",
//     "materialUsed": "Canvas & Rice Paste Paint",
//     "heritageHistory": "Warli paintings use basic shapes like circles, triangles, and squares to depict harvest, weddings, and rituals.",
//     "authenticity": "Handmade",
//     "artisanName": "Vijay Kadu",
//     "dimensions": "15 x 15 inches",
//     "weight": "300g",
//     "careInstructions": "Frame under glass to preserve the rice paste texture.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/animals/reindeer.jpg"]
//   },
//   {
//     "title": "Santhali Handloom Saree",
//     "price": 5800,
//     "category": "Textiles",
//     "stock": 8,
//     "description": "Hand-woven cotton saree with traditional tribal motifs.",
//     "originState": "West Bengal",
//     "tribeName": "Santhal Tribe",
//     "materialUsed": "Organic Cotton",
//     "heritageHistory": "These sarees feature the 'Phuta' pattern and are worn during the Sohrai festival.",
//     "authenticity": "Tribal Cooperative",
//     "artisanName": "Mitali Murmu",
//     "dimensions": "6.5 meters",
//     "weight": "600g",
//     "careInstructions": "Dry clean only; iron on low heat.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/ecommerce/car-interior-design.jpg"]
//   },
//   {
//     "title": "Kondapalli Dancing Doll",
//     "price": 950,
//     "category": "Toys & Games",
//     "stock": 30,
//     "description": "Traditional bobble-head toy handcrafted from softwood.",
//     "originState": "Andhra Pradesh",
//     "tribeName": "Kondapalli Artisans",
//     "materialUsed": "Tella Poniki Wood",
//     "heritageHistory": "A 400-year-old tradition where toys are made from 'Tella Poniki' wood which is found only in the local hills.",
//     "authenticity": "GI Tagged",
//     "artisanName": "Raju Varma",
//     "dimensions": "12 inches",
//     "weight": "400g",
//     "careInstructions": "Dust with a soft brush; keep in a dry place.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/people/smiling-man.jpg"]
//   },
//   {
//     "title": "Bamboo Root Ganesha",
//     "price": 3200,
//     "category": "Home Decor",
//     "stock": 4,
//     "description": "Intricately carved Ganesha idol made from a single bamboo root.",
//     "originState": "Assam",
//     "tribeName": "Assamese Tribes",
//     "materialUsed": "Natural Bamboo Root",
//     "heritageHistory": "Bamboo is known as 'Green Gold' in the Northeast. Root carving requires immense patience and vision.",
//     "authenticity": "Handmade",
//     "artisanName": "Bipul Saikia",
//     "dimensions": "7 x 5 inches",
//     "weight": "500g",
//     "careInstructions": "Avoid direct sunlight to prevent cracking.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/landscapes/nature-mountains.jpg"]
//   },
//   {
//     "title": "Lambani Embroidery Clutch",
//     "price": 1400,
//     "category": "Fashion Accessories",
//     "stock": 12,
//     "description": "Hand-embroidered clutch featuring mirror work and vibrant threads.",
//     "originState": "Karnataka",
//     "tribeName": "Lambani Tribe",
//     "materialUsed": "Cotton & Glass Mirrors",
//     "heritageHistory": "Lambani women use 14 different types of stitches to create these colorful masterpieces.",
//     "authenticity": "GI Tagged",
//     "artisanName": "Laxmi Bai",
//     "dimensions": "10 x 6 inches",
//     "weight": "250g",
//     "careInstructions": "Gentle hand wash; do not scrub over mirror work.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/ecommerce/shoes.png"]
//   },
//   {
//     "title": "Toda Embroidered Shawl",
//     "price": 7500,
//     "category": "Textiles",
//     "stock": 3,
//     "description": "Distinctive red and black embroidery on white unbleached cotton.",
//     "originState": "Tamil Nadu",
//     "tribeName": "Toda Tribe",
//     "materialUsed": "Pure Cotton & Wool Thread",
//     "heritageHistory": "The Toda embroidery, called 'Pugur', resembles weaving and is done without a pattern book.",
//     "authenticity": "GI Tagged",
//     "artisanName": "Geetha Toda",
//     "dimensions": "2 x 1 meters",
//     "weight": "700g",
//     "careInstructions": "Professional dry clean only.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/people/kitchen-ready.jpg"]
//   },
//   {
//     "title": "Channapatna Lacquer Spinning Top",
//     "price": 450,
//     "category": "Toys & Games",
//     "stock": 50,
//     "description": "Eco-friendly wooden toy colored with natural vegetable dyes.",
//     "originState": "Karnataka",
//     "tribeName": "Channapatna Artisans",
//     "materialUsed": "Ivory Wood",
//     "heritageHistory": "Known as the 'Toy Town', Channapatna's lacware tradition was initiated by Tipu Sultan.",
//     "authenticity": "GI Tagged",
//     "artisanName": "Syed Ishaq",
//     "dimensions": "4 inches diameter",
//     "weight": "150g",
//     "careInstructions": "Safe for children; non-toxic. Wipe with dry cloth.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/food/fish-vegetables.jpg"]
//   },
//   {
//     "title": "Pichwai Cow Painting",
//     "price": 12500,
//     "category": "Art & Paintings",
//     "stock": 2,
//     "description": "Religious painting on cloth depicting Shrinathji and holy cows.",
//     "originState": "Rajasthan",
//     "tribeName": "Nathdwara Artists",
//     "materialUsed": "Fine Cotton & Natural Pigments",
//     "heritageHistory": "Pichwai literally means 'at the back'. They were originally used as backdrops in temples.",
//     "authenticity": "Handmade",
//     "artisanName": "Narayana Sharma",
//     "dimensions": "36 x 24 inches",
//     "weight": "400g",
//     "careInstructions": "Do not fold; roll loosely for storage.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/ecommerce/accessories-bag.jpg"]
//   },
//   {
//     "title": "Sabai Grass Bread Basket",
//     "price": 850,
//     "category": "Kitchenware",
//     "stock": 25,
//     "description": "Natural, durable basket woven from wild Sabai grass.",
//     "originState": "Odisha",
//     "tribeName": "Mayurbhanj Tribes",
//     "materialUsed": "Sabai Grass & Date Palm Fiber",
//     "heritageHistory": "Sabai grass is a major source of income for tribal women in Odisha, promoting sustainable lifestyle products.",
//     "authenticity": "Tribal Cooperative",
//     "artisanName": "Jasoda Das",
//     "dimensions": "10 inches diameter",
//     "weight": "350g",
//     "careInstructions": "Sun dry if it gets wet; moisture can cause mold.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/food/gourmet-salad.jpg"]
//   },
//   {
//     "title": "Cheriyal Mask - Tiger",
//     "price": 1600,
//     "category": "Home Decor",
//     "stock": 10,
//     "description": "Hand-painted mask made from sawdust and tamarind seed paste.",
//     "originState": "Telangana",
//     "tribeName": "Cheriyal Artisans",
//     "materialUsed": "Nakashi Art & Natural Colors",
//     "heritageHistory": "These masks were traditionally used by wandering storytellers to narrate mythological tales.",
//     "authenticity": "GI Tagged",
//     "artisanName": "D. Vaikuntam",
//     "dimensions": "9 x 7 inches",
//     "weight": "600g",
//     "careInstructions": "Dust with a dry microfibre cloth.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/animals/cat.jpg"]
//   },
//   {
//     "title": "Mura Bamboo Floor Mat",
//     "price": 2100,
//     "category": "Home Decor",
//     "stock": 15,
//     "description": "Traditional hand-woven cooling mat made from fine bamboo splints.",
//     "originState": "Tripura",
//     "tribeName": "Reang Tribe",
//     "materialUsed": "Splintered Bamboo & Cane",
//     "heritageHistory": "Mura mats are known for their cooling properties during the humid summers of Northeast India.",
//     "authenticity": "Handmade",
//     "artisanName": "Biplab Reang",
//     "dimensions": "6 x 4 feet",
//     "weight": "2 kg",
//     "careInstructions": "Roll and store; wipe with a slightly damp cloth.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/landscapes/beach.jpg"]
//   },
//   {
//     "title": "Aadi Tribal Bead Necklace",
//     "price": 650,
//     "category": "Fashion Accessories",
//     "stock": 40,
//     "description": "Multi-colored glass bead necklace worn during the Solung festival.",
//     "originState": "Arunachal Pradesh",
//     "tribeName": "Aadi Tribe",
//     "materialUsed": "Glass Beads & Cotton Thread",
//     "heritageHistory": "Beads in Aadi culture signify wealth and status; they are often passed down as family heirlooms.",
//     "authenticity": "Handmade",
//     "artisanName": "Oying Taki",
//     "dimensions": "24 inches long",
//     "weight": "150g",
//     "careInstructions": "Keep in a separate pouch to avoid tangling.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/ecommerce/shoes.png"]
//   },
//   {
//     "title": "Terracotta Horse (Bankura)",
//     "price": 3500,
//     "category": "Home Decor",
//     "stock": 6,
//     "description": "Iconic tall-necked terracotta horse, a symbol of Indian folk art.",
//     "originState": "West Bengal",
//     "tribeName": "Panchmura Artisans",
//     "materialUsed": "Burnt Clay",
//     "heritageHistory": "The Bankura Horse was originally used for local village rituals but became globally famous for its elegant geometry.",
//     "authenticity": "GI Tagged",
//     "artisanName": "Kartick Kumbhakar",
//     "dimensions": "18 inches height",
//     "weight": "3.5 kg",
//     "careInstructions": "Do not use water; dust lightly.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/food/pot.jpg"]
//   },
//   {
//     "title": "Applique Work Cushion Cover",
//     "price": 550,
//     "category": "Home Decor",
//     "stock": 30,
//     "description": "Pipli applique work featuring traditional elephant and peacock motifs.",
//     "originState": "Odisha",
//     "tribeName": "Pipli Artisans",
//     "materialUsed": "Cotton Fabric",
//     "heritageHistory": "Originating in Pipli, this art form was used to create banners and umbrellas for the Lord Jagannath Rath Yatra.",
//     "authenticity": "GI Tagged",
//     "artisanName": "Samaresh Mahapatra",
//     "dimensions": "16 x 16 inches",
//     "weight": "100g",
//     "careInstructions": "Hand wash with mild detergent.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/ecommerce/leather-bag-gray.jpg"]
//   },
//   {
//     "title": "Dhokra Tribal Jewelry Set",
//     "price": 1900,
//     "category": "Fashion Accessories",
//     "stock": 10,
//     "description": "Antique finish neckpiece and earrings set made in bell metal.",
//     "originState": "West Bengal",
//     "tribeName": "Dhokra Damar Tribe",
//     "materialUsed": "Brass",
//     "heritageHistory": "Dhokra jewelry is primitive and raw, known for its rustic look and ancient casting methods.",
//     "authenticity": "Handmade",
//     "artisanName": "Lakhan Karmakar",
//     "dimensions": "Adjustable neckpiece",
//     "weight": "300g",
//     "careInstructions": "Store in dry place; polish with lemon if it darkens.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/ecommerce/accessories-bag.jpg"]
//   },
//   {
//     "title": "Gond Art Deer Painting",
//     "price": 3800,
//     "category": "Art & Paintings",
//     "stock": 7,
//     "description": "Vibrant painting using dots and lines to create a deer motif.",
//     "originState": "Madhya Pradesh",
//     "tribeName": "Gond Tribe",
//     "materialUsed": "Handmade Paper & Ink",
//     "heritageHistory": "Gond art believes that 'viewing a good image begets good luck.' It is based on the connection between man and nature.",
//     "authenticity": "Handmade",
//     "artisanName": "Bhajju Shyam",
//     "dimensions": "12 x 18 inches",
//     "weight": "250g",
//     "careInstructions": "Keep away from moisture; best if framed.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/animals/reindeer.jpg"]
//   },
//   {
//     "title": "Naga Tribal Spear Wall Decor",
//     "price": 6200,
//     "category": "Home Decor",
//     "stock": 3,
//     "description": "Ornamental replica of a Naga warrior spear with traditional hair and wood.",
//     "originState": "Nagaland",
//     "tribeName": "Angami Tribe",
//     "materialUsed": "Wood, Iron & Goat Hair",
//     "heritageHistory": "The spear is a symbol of bravery and power in Naga culture, traditionally used by headhunters.",
//     "authenticity": "Handmade",
//     "artisanName": "Neizotuo Angami",
//     "dimensions": "4 feet long",
//     "weight": "1.8 kg",
//     "careInstructions": "Handle hair portion with care; do not wash.",
//     "images": ["https://res.cloudinary.com/demo/image/upload/v1/samples/landscapes/nature-mountains.jpg"]
//   }
// ];

// const seedProducts = async () => {
//   try {
//     await mongoose.connect(MONGO_URI);
//     console.log("Connected to MongoDB");

//     // Add vendorId to every product
//     const productsWithVendor = products.map((p) => ({
//       ...p,
//       vendorId: VENDOR_ID,
//     }));

//     // Insert all at once
//     const inserted = await Product.insertMany(productsWithVendor);

//     console.log(`✅ ${inserted.length} products added successfully!`);

//   } catch (err) {
//     console.error("❌ Error:", err.message);
//   } finally {
//     await mongoose.disconnect();
//     console.log("Disconnected from DB");
//   }
// };

// seedProducts();

// const mongoose = require("mongoose");
// const Product = require("./models/product"); // Ensure path correct ho
// require("dotenv").config();

// const mockReviews = [
//   { userName: "Aarav Sharma", rating: 5, comment: "The craftsmanship is incredible. You can tell it’s handmade and not a factory product. Very authentic!" },
//   { userName: "Priya Patel", rating: 4, comment: "Beautiful tribal patterns. It looks great in my living room. The packaging was very secure too." },
//   { userName: "Sneha Reddy", rating: 5, comment: "I love that this supports local artisans. The quality of the material is premium and the colors are vibrant." },
//   { userName: "Amit Verma", rating: 2, comment: "The product is nice but the dimensions were smaller than what I expected from the photos." },
//   { userName: "Anjali Gupta", rating: 5, comment: "Truly a piece of Indian heritage. The intricate detailing on the wood is just breath-taking." },
//   { userName: "Rohan Mehra", rating: 4, comment: "High quality and sustainable material. It feels good to own something with so much history behind it." },
//   { userName: "Meera Iyer", rating: 3, comment: "The art is beautiful but the finish is a bit rough at the edges. Still, a decent purchase for the price." },
//   { userName: "Vikram Singh", rating: 5, comment: "Best authentic tribal craft I've bought online. Highly recommend for anyone who loves traditional decor." },
//   { userName: "Sanya Khan", rating: 4, comment: "This is a great gift item. The cultural significance mentioned in the description makes it special." },
//   { userName: "Rajesh Kumar", rating: 5, comment: "Exceptional work by the artisans. This is exactly what we need to preserve our dying Indian arts." }
// ];

// const seedDB = async () => {
//   try {
//     await mongoose.connect(process.env.DB);
//     console.log("Connected to MongoDB...");

//     const productId = "69f10970a9ea2327bd634ea3"; // 👈 Yahan apna product ID dalo

//     // Product find karke reviews array mein push karna
//     const product = await Product.findById(productId);
//     if (!product) {
//       console.log("Product not found!");
//       return;
//     }

//     // Existing reviews mein naye reviews merge karna
//     product.reviews.push(...mockReviews);
    
//     // Average rating update logic (optional)
//     const totalRating = product.reviews.reduce((sum, r) => sum + r.rating, 0);
//     product.averageRating = totalRating / product.reviews.length;

//     await product.save();
//     console.log("✅ 10 Mock Reviews added successfully!");
    
//   } catch (err) {
//     console.error("❌ Error seeding data:", err);
//   } finally {
//     mongoose.connection.close();
//   }
// };

// seedDB();

const mongoose = require("mongoose");
const Product = require("./models/product");
require("dotenv").config();

// Dummy Valid ObjectId (Hum koi bhi random valid ID use kar sakte hain testing ke liye)
const dummyUserId = new mongoose.Types.ObjectId(); 

const mockReviews = [
  { user: dummyUserId, userName: "Aman Devgan", rating: 5, comment: "Incredible Bastar Dokra! The lost-wax technique gives it such a raw and primitive charm. The bull's posture is majestic and the bell metal has a lovely antique glow." },
  { user: dummyUserId, userName: "Shweta Tripathi", rating: 5, comment: "I love the intricate wire-work details on the bull's body. You can tell it's a single-cast piece. It’s heavy, sturdy, and looks like a museum artifact on my shelf." },
  { user: dummyUserId, userName: "Rameshwar Singh", rating: 4, comment: "Authentic tribal motifs. The brass and tin blend gives it a unique texture. It’s slightly smaller than I imagined, but the craftsmanship makes up for it." },
  { user: dummyUserId, userName: "Kriti Kulhari", rating: 3, comment: "The statue is beautiful, but there were some sharp metal bits at the base that hadn't been filed down. I had to be careful not to scratch my glass table." },
  { user: dummyUserId, userName: "Pankaj Tripathi", rating: 5, comment: "Shuddh bell metal ki pehchaan hai ye. The hollow casting is done perfectly. It represents the ancient metal-working traditions of our tribal communities beautifully." },
  { user: dummyUserId, userName: "Tapsee Pannu", rating: 2, comment: "The finish was a bit too dark, almost black in some crevices, making the details hard to see. It looks more like oxidized iron than premium bell metal." },
  { user: dummyUserId, userName: "Manoj Bajpayee", rating: 4, comment: "Great to see Bastar art getting its due. The bull is a symbol of strength and the artisan has captured that spirit well. Very solid and well-balanced." },
  { user: dummyUserId, userName: "Sanya Malhotra", rating: 5, comment: "Absolutely stunning handiwork. No two pieces are the same and that's the beauty of Dokra. It arrived in eco-friendly packaging, which I really appreciated." },
  { user: dummyUserId, userName: "Vikrant Massey", rating: 1, comment: "Received a damaged piece. One of the horns was snapped off during transit. Bell metal can be brittle, so the packaging should have been much stronger." },
  { user: dummyUserId, userName: "Nawazuddin Siddiqui", rating: 5, comment: "Kala ki asli parakh! The lost-wax process is so complex and this statue shows why it's world-class. The symmetry and thread-like patterns are perfect." }
];
const seedDB = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("Connected to MongoDB...");

    const productId = "669f10970a9ea2327bd634e99"; // 👈 Apni Product ID yahan dalo

    const product = await Product.findById(productId);
    if (!product) {
      console.log("Product not found!");
      return;
    }

    // reviews array mein data push karna
    product.reviews.push(...mockReviews);
    
    // Average rating recalculate karna
    const totalRating = product.reviews.reduce((sum, r) => sum + r.rating, 0);
    product.averageRating = totalRating / product.reviews.length;

    // Is baar validation pass ho jayegi kyunki 'user' field present hai
    await product.save();
    console.log("✅ Validation Passed: 10 Mock Reviews added!");
    
  } catch (err) {
    console.error("❌ Error seeding data:", err.message);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();