
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.register = async (req, res) => {
    const {name, email, password, role} = req.body; //postman req body
    const hashed = await bcrypt.hash(password, 10);

    try {
        const user = await User.create({name, email, password:hashed, role});
        res.status(201).json({
            message: "User registered successfully"
        })
    } catch(err){
        res.status(400).json({
            error: err.message
        })
    }

}

exports.login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message: "Email is not valid"
            })
        }

        const match = await bcrypt.compare(password, user.password);

        if(!match) {
            return res.status(400).json({
                message: "Password is not matched"
            })
        }
        const token = jwt.sign({userid: user._id, role: user.role }, process.env.JWT_SECRET)
        res.json({token})

    } catch(error){
        res.status(400).json({error: err.message})
    }
}