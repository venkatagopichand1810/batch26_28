const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// user register

exports.registerUser = async (req, res) => {
    const{name, email, password} = req.body;
    try {
        // check if the user is already exists
        const userExists = await User.findOne({email})
        if(userExists) {
            return res.status(400).json({
                message: "sorry, user is already present. User different email id"
            })
        }

        // hash the password, encrypt the password and store the encryption password in the db
         const salt =  await bcrypt.genSalt(10); 
         const hashedPassword = await bcrypt.hash(password, salt);

        // create the user and store in the db
        const user = await User.create({
            name, 
            email, 
            password: hashedPassword
        })

        // generate the JWT token
        const token = jwt.sign({ id: user._id}, 
            process.env.JWT_SCERET_KEY, {
            expiresIn: "1h"
        })

        res.status(201).json({
            token,
            user: {
                id: user._id, 
                name: user.name, 
                email: user.email
            }
        })
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}



// user login


exports.loginUser = async (req, res) => {
    const{email, password} = req.body;
    try {
        //  check the email is present in the database or not
        const user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({
                message: "user is not present in the database"
            })
        }

        // check the pwd
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(400).json({
                message: "Invalid Password"
            })
        }
        // generate the JWT token
        const token = jwt.sign({ id: user._id}, 
            process.env.JWT_SCERET_KEY, {
            expiresIn: "1h"
        })

        res.status(201).json({
            token,
            user: {
                id: user._id, 
                name: user.name, 
                email: user.email
            }
        })
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}
