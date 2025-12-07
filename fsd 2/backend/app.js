//create the server

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors")

//load .env variables 
dotenv.config();

//create the express app
const app = express();

// middleware to parse the json
app.use(express.json())

// middleware to handle the cross origin
app.use(cors())

// connect to the db
connectDB();

app.use("/api", userRoutes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log("Server is running")
})