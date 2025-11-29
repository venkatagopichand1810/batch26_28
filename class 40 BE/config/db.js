import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); //to load the env variables 

// function to connect to mongodb
export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected successfully")

    } catch(err){
        console.log("failed to connect to the DB")
    }
}