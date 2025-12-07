// create schema and model
const mongoose = require("mongoose");

// define the user schema

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unqiue: true
    },
    password: {
        type: String,
        required: true

    }
})

const User = mongoose.model("User", userSchema);
module.exports = User;