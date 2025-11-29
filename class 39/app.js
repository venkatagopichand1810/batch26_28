
import express from "express";
import connectDB from "./db/connectdb.js";
const app = express(); // to create the express application
const DATABASE_URL = "mongodb://127.0.0.1:27017/swathishilparakesh";
// import { createDoc } from "./models/Movie.js";
import { findDocs } from "./models/Movie.js";

connectDB(DATABASE_URL)

// create and save doc
// createDoc(); 
findDocs()

app.listen(5001, () => {
    console.log("server is running at port number 5001")
})