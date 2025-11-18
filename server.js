import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ----------------------
// MONGODB CONNECT HERE
// ----------------------
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("✔ MongoDB Connected"))
    .catch((err) => console.log("❌ DB Error:", err));

// ----------------------
// ROUTES
// ----------------------
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// ----------------------
// START SERVER
// ----------------------
app.listen(process.env.PORT || 6000, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
});