import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to the database successfully");
    })
    .catch((err) => {
        console.error("Error connecting to the database:", err);
    });


const app = express();

//routes for users
app.use("/api/user",userRouter)






app.listen(3000,()=>{
console.log(`ruuning in the port 3000!!!!!!!!`);

});