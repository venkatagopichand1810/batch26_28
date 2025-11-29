import User from "../models/User.js";
import bcrypt from "bcryptjs";



// register user
export const register = async (req, res) => {

    const{name, email, password} = req.body;

    // check if the user is already exists in the db or not
    const exists = await User.findOne({email});

    if(exists){
        return res.status(400).json({message: "User is already exists"})
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create the new user in the database
    const user = await User.create({
        name, 
        email,
        password:hashedPassword
    })

    // send the success response
    res.json({
        message: "User registered successfully",
        user: {
            id: user._id,
            name: user.name, 
            email: user.email
        }
    });
}