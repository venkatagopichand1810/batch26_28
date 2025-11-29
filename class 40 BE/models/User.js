
import mongoose from "mongoose";

// define the schema/structure

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unqiue: true},
    password: {type: String, required: true}
})

// export the model 
export default mongoose.model("User", userSchema)