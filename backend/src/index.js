import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import CookieParser from "cookie-parser";
import userRoutes from "./routes/user.routes.js";
import { connectDB } from "./config/dbConnect.js";
import paymentRoutes from "./routes/payment.routes.js";
import planRoutes from "./routes/plan.routes.js";
import knowledgeRoutes from "./routes/knowledge.routes.js";

// configs
dotenv.config();

const app = express();

connectDB();

// middlewares
app.use(
  cors({
    origin: "http://localhost:5173", // React ka exact URL
    credentials: true, // ← YEH ZAROORI HAI
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());
app.use(CookieParser());
app.use("/api/user", userRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/plan", planRoutes);
app.use("/api/knowledge", knowledgeRoutes);


// health -
app.get("/", (req, res) => {
  return res.send({ success: true, message: "server listening" });
});

// server listening
app.listen(7474, () => {
  console.log("Server running on port 7474");
});
