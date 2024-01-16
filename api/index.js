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

app.use("/api/auth",authRouter);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 501;
    const message=err.message || "error in function";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

