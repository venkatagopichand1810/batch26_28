import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {
       await mongoose.connect(DATABASE_URL);
       console.log("Mongodb database connected sucessfully")
    } catch(error){
        console.log(error)
    }
}

export default connectDB