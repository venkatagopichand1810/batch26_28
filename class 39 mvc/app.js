import express from "express";
import dotenv from "dotenv";

import {connectDB} from "./config/db.js";

import studentRoutes from "./routes/studentRoutes.js"
dotenv.config(); //to load the env variables 

// create the express application 
const app = express();

app.use(express.json()); //we have to use this middleware when we post the data using the post method

// connect DB
connectDB()

// routes
app.use(studentRoutes)

// start the server
app.listen(5004, () => {
    console.log("Server is running at port number 5004")
})