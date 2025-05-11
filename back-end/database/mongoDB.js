
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDB = async ()=>{
    await mongoose.connect(process.env.URI)
    .then((res)=>{
        console.log("Database connected successfully")
    })
    .catch((err)=>{
        console.log(err)
    })
}

export default connectDB





