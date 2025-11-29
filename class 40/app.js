
import express from "express";
import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js"
import dotenv from "dotenv";

dotenv.config(); // it will load the env variables 

// express app
const app = express();

app.use(express.json()); //middleware to parse the json requst

// connect to mongodb
connectDB()

app.use("/", studentRoutes); //routes

app.listen(process.env.PORT, () => {
    console.log("server is running")
})



