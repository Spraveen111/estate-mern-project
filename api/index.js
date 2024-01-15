// index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/userRouter.route.js"; // Import the correct router
import authRouter from "./routes/auth.route..js"

dotenv.config();
const app = express();
app.use(express.json())
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((error) => {
    console.log("Error connecting to the database", error);
  });

app.use("/api/user", userRouter); // Mount the router on /api/user path

app.use("/api/auth",authRouter)

app.listen(8000, () => {
  console.log("Server started on port 8000");
});

