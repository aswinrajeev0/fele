import mongoose from "mongoose";
import { CategoryModel } from "./category.schema";
import { ProductModel } from "./product.schema";

const MONGO_URI = "mongodb://127.0.0.1:27017/fele_fashions";

const seed = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ MongoDB connected");

        // 1. Clear old data
        await CategoryModel.deleteMany({});
        await ProductModel.deleteMany({});

        // 2. Insert categories
        const categories = await CategoryModel.insertMany([
            { name: "Footwear" },
            { name: "Electronics" }
        ]);

        console.log("✅ Categories seeded");

        // 3. Products data
        const products = [
            // --- Footwear (category 0) ---
            {
                productName: "Nike Air Jordans",
                price: 8999,
                productImage: "https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/89c121fc-3d07-4de0-aef6-bcc9c2764a2c/air-jordan-1-2022-lost-and-found-chicago-the-inspiration-behind-the-design.jpg",
                brand: "Nike",
                categoryId: categories[0]._id
            },
            {
                productName: "Adidas Ultraboost",
                price: 6999,
                productImage: "https://assets.adidas.com/images/w_600,f_auto,q_auto/Ultraboost.jpg",
                brand: "Adidas",
                categoryId: categories[0]._id
            },
            {
                productName: "Puma Running Shoes",
                price: 4999,
                productImage: "https://m.media-amazon.com/images/I/71puma.jpg",
                brand: "Puma",
                categoryId: categories[0]._id
            },
            {
                productName: "Jack and Jones Leather Boots",
                price: 4999,
                productImage: "https://m.media-amazon.com/images/I/71ZLToAJrYL._AC_UY1000_.jpg",
                brand: "Jack and Jones",
                categoryId: categories[0]._id
            },
            {
                productName: "Woodland Trekking Shoes",
                price: 3999,
                productImage: "https://m.media-amazon.com/images/I/woodland.jpg",
                brand: "Woodland",
                categoryId: categories[0]._id
            },

            // --- Electronics (category 1) ---
            {
                productName: "Apple iPhone 15",
                price: 79999,
                productImage: "https://store.storeimages.cdn-apple.com/iphone15.jpg",
                brand: "Apple",
                categoryId: categories[1]._id
            },
            {
                productName: "Samsung Galaxy S24",
                price: 69999,
                productImage: "https://images.samsung.com/galaxys24.jpg",
                brand: "Samsung",
                categoryId: categories[1]._id
            },
            {
                productName: "Sony WH-1000XM5 Headphones",
                price: 29999,
                productImage: "https://m.media-amazon.com/images/I/sonyxm5.jpg",
                brand: "Sony",
                categoryId: categories[1]._id
            },
            {
                productName: "Dell XPS 13 Laptop",
                price: 129999,
                productImage: "https://m.media-amazon.com/images/I/dellxps13.jpg",
                brand: "Dell",
                categoryId: categories[1]._id
            },
            {
                productName: "Apple Watch Series 9",
                price: 49999,
                productImage: "https://store.storeimages.cdn-apple.com/applewatch9.jpg",
                brand: "Apple",
                categoryId: categories[1]._id
            }
        ];

        // 4. Insert products
        await ProductModel.insertMany(products);
        console.log("✅ Products seeded");

        process.exit(0);
    } catch (error) {
        console.error("❌ Error seeding data:", error);
        process.exit(1);
    }
};

seed();
