import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connect to database sucessfully ");
}).catch((err)=>{
    console.log(err);
})
const app = express();

app.listen(3000,()=>{
console.log(`ruuning in the port 3000!!!!!!!!`);

});