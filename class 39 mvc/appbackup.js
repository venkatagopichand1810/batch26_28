import express from "express";
import mongoose from "mongoose";

// create the express application 
const app = express();

app.use(express.json()); //we have to use this middleware when we post the data using the post method

// 1) connect to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/batch28andbatch26")
.then(() =>console.log("Mongodb connected successfully"))
.catch((err) => console.log(err))


//2) adding the schema and model

const studentSchema = new mongoose.Schema({
    name: String, 
    age: Number
})
const Student = mongoose.model("Student", studentSchema)


// 3) api calls 

// post api call to post the data
app.post("/students", async(req, res) => {
    const student = await Student.create(req.body);
    res.json(student)
})

// get the api call to get the data 
app.get("/students", async(req, res) => {
    const students = await Student.find();
    res.json(students)
})

// start the server
app.listen(5004, () => {
    console.log("Server is running at port number 5004")
})