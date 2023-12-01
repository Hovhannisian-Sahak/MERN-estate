import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
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
app.listen(3000, (req, res) => {
  console.log("server is running");
});
// mongodb+srv://sahak:sahak@mern-estate.5oy1w9d.mongodb.net/
