import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
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
app.use(express.json());
app.listen(3000, (req, res) => {
  console.log("server is running");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
// mongodb+srv://sahak:sahak@mern-estate.5oy1w9d.mongodb.net/
