import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const sampleProducts = [
    // Smartphones
    {
        name: "iPhone 15 Pro Max",
        price: 159900,
        category: "Smartphones",
        description: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system. 256GB storage.",
        image: "https://images.unsplash.com/photo-1592286927505-b0501e6c0ca4?w=500&q=80"
    },
    {
        name: "Samsung Galaxy S24 Ultra",
        price: 124999,
        category: "Smartphones",
        description: "Premium Android flagship with S Pen, 200MP camera, and stunning AMOLED display.",
        image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80"
    },
    {
        name: "OnePlus 12",
        price: 64999,
        category: "Smartphones",
        description: "Flagship killer with Snapdragon 8 Gen 3, 120Hz display, and 100W fast charging.",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80"
    },
    {
        name: "Google Pixel 8 Pro",
        price: 106999,
        category: "Smartphones",
        description: "Best Android camera phone with Google Tensor G3 chip and pure Android experience.",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80"
    },

    // Laptops
    {
        name: "MacBook Pro 14-inch M3",
        price: 199900,
        category: "Laptops",
        description: "Powerful laptop with M3 chip, stunning Liquid Retina XDR display, and all-day battery life.",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80"
    },
    {
        name: "Dell XPS 15",
        price: 154999,
        category: "Laptops",
        description: "Premium Windows laptop with Intel Core i7, NVIDIA RTX 4050, and 4K OLED display.",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&q=80"
    },
    {
        name: "HP Pavilion Gaming",
        price: 74999,
        category: "Laptops",
        description: "Budget gaming laptop with AMD Ryzen 5, GTX 1650, and 144Hz display.",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80"
    },
    {
        name: "Lenovo ThinkPad X1 Carbon",
        price: 134999,
        category: "Laptops",
        description: "Business ultrabook with Intel Core i7, lightweight design, and military-grade durability.",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80"
    },

    // Headphones
    {
        name: "Sony WH-1000XM5",
        price: 29990,
        category: "Headphones",
        description: "Industry-leading noise cancellation with premium sound quality and 30-hour battery life.",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&q=80"
    },
    {
        name: "Apple AirPods Pro 2",
        price: 24900,
        category: "Headphones",
        description: "Active noise cancellation, spatial audio, and seamless Apple ecosystem integration.",
        image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=500&q=80"
    },
    {
        name: "JBL Tune 760NC",
        price: 5999,
        category: "Headphones",
        description: "Budget wireless headphones with active noise cancellation and powerful bass.",
        image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&q=80"
    },
    {
        name: "Bose QuietComfort 45",
        price: 32900,
        category: "Headphones",
        description: "Premium comfort with world-class noise cancellation and balanced sound signature.",
        image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500&q=80"
    },

    // Smartwatches
    {
        name: "Apple Watch Series 9",
        price: 41900,
        category: "Smartwatches",
        description: "Advanced health tracking, always-on display, and seamless iPhone integration.",
        image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80"
    },
    {
        name: "Samsung Galaxy Watch 6",
        price: 30999,
        category: "Smartwatches",
        description: "Comprehensive fitness tracking with beautiful AMOLED display and long battery life.",
        image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=500&q=80"
    },
    {
        name: "Amazfit GTR 4",
        price: 14999,
        category: "Smartwatches",
        description: "Budget smartwatch with 14-day battery life, GPS, and comprehensive health monitoring.",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&q=80"
    },
    {
        name: "Garmin Forerunner 265",
        price: 46990,
        category: "Smartwatches",
        description: "Premium running watch with AMOLED display, advanced training metrics, and GPS.",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
    },

    // Accessories
    {
        name: "Anker PowerBank 20000mAh",
        price: 2999,
        category: "Accessories",
        description: "High-capacity power bank with fast charging support for multiple devices.",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80"
    },
    {
        name: "Logitech MX Master 3S",
        price: 9995,
        category: "Accessories",
        description: "Premium wireless mouse with ergonomic design and customizable buttons.",
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80"
    },
    {
        name: "SanDisk 1TB SSD",
        price: 8999,
        category: "Accessories",
        description: "Portable external SSD with blazing-fast transfer speeds and compact design.",
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80"
    },
    {
        name: "USB-C Hub 7-in-1",
        price: 1999,
        category: "Accessories",
        description: "Multi-port USB-C hub with HDMI, USB 3.0, SD card reader, and power delivery.",
        image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&q=80"
    }
];

const seedDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✔ MongoDB Connected");

        // Clear existing products
        await Product.deleteMany({});
        console.log("🗑️  Cleared existing products");

        // Insert sample products
        const products = await Product.insertMany(sampleProducts);
        console.log(`✅ Added ${products.length} products to database`);

        console.log("\n📦 Products added:");
        products.forEach((p, i) => {
            console.log(`${i + 1}. ${p.name} - ₹${p.price}`);
        });

        process.exit(0);
    } catch (error) {
        console.error("❌ Error:", error.message);
        process.exit(1);
    }
};

seedDatabase();