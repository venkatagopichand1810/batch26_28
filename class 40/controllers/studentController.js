
import Student from "../models/studentModel.js";


// new student
export const createStudent = async(req, res) => {
    try {
        const {name, age, course} = req.body;

        if(!name || !age || !course){
            return res.status(400).json({message: "All fields are required"})
        }

        const newStudent = new Student({name, age, course});
        await newStudent.save(); //it will save the new student in db
        res.status(201).json({message: "Student created successfully"})

    } catch(error){
        res.status(500).json({message: "server error"})
    }
}

// get the students