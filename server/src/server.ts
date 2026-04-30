import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import adminRoutes from "./routes/adminRoutes"
import AdminServiceRoutes from "./routes/serviceRoutes"
import serviceRoutes from "./routes/serviceRoutes"
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:8080", // frontend URL
    credentials: true,
  })
);

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("MY SERVER IS DEFINITELY RUNNING ✅");
});

app.post("/create-services", (req, res) => {
  console.log("🔥 ROOT HIT");
  res.send("-----------------ROOT WORKING");
});

app.use("/api/admin", adminRoutes);
app.use("/api/admin", AdminServiceRoutes);
app.use("/api", serviceRoutes); // 👈 public
console.log("✅ Mounted /api/admin service routes");

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI as string;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });