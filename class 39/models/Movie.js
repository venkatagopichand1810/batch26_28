import mongoose from "mongoose";

// define the schema

//schema...submit the movie review
const movieSchema = new mongoose.Schema({
    name: {type: String, required: true},
    ratings: {type: Number, required: true, min: 1, max: 5},
    genre: {type: Array},
    isActive: {type: Boolean},
    comments: [
        {
        value: {type: String}, 
        publish: {type: Date,default: Date.now }
        }

    ]
})

// create the model(collection name)
const MovieModel = mongoose.model('venkatMovie', movieSchema)

// find the document..find()

const findDocs = async () => {
  const result = await MovieModel.findById("69188c64baadadaab1b5fc2c");
  console.log("Movie details: ", result)

}

export {findDocs}