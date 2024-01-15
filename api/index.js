// index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.route.js"; // Import the correct router

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((error) => {
    console.log("Error connecting to the database", error);
  });

app.use("/api/user", userRouter); // Mount the router on /api/user path

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
