import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"

dotenv.config(); //to load the env variables 

const app = express(); //to create the express app

app.use(express.json()); //middleware to parse the json response while posting

connectDB(); //to connect the DB

app.use("/", userRoutes);

app.listen(process.env.PORT, () => {
    console.log("server is running at the port 5004")
})