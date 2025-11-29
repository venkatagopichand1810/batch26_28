const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Mongodb connected successfully")
    } catch(err){
        console.log("Unable to connect to the server")
    }
}

module.exports = connectDB