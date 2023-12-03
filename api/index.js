import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
dotenv.config();
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.error(err);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.listen(3000, (req, res) => {
  console.log("server is running");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
// mongodb+srv://sahak:sahak@mern-estate.5oy1w9d.mongodb.net/
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
