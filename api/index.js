import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"

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


//we are allowing the server to accecpt json
app.use(express.json());

//routes for users
app.use("/api/user",userRouter)
app.use("/api/auth",authRouter)

app.use((err, req, res, next)=>{
    const  statusCode=err.statusCode || 500;
    const message = err.message||'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})






app.listen(process.env.PORT,()=>{
console.log(`ruuning in the port ${process.env.PORT}!!!!!!!!`);

});