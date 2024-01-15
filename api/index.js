import express from "express";
import mongoose  from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app=express();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log("database succesfully connected")
})
.catch((error)=>{
    console.log("error datebase connection")
})
app.listen(4000,()=>{
    console.log("server started on 4000")
})