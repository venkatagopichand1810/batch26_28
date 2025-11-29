const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String, unqiue: true
    },
    password: String,
    role: {
        type: String, 
        enum: ["Admin", "Manager", "Receptionist"],
        default: "Receptionist"
    }
})

module.exports = mongoose.model("User", userSchema)