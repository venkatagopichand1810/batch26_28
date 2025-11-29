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

// insert the data creating the doc
const createDoc = async () => {
    try {
        // insert the new document
        const movie1 = new MovieModel({
            name: "dragon",
            ratings: 4.5,
            genre:['action', "comedy"],
            isActive: true,
            comments: [
                {
                    value: "good movie"
                }
            ]

        });

        const movie2 = new MovieModel({
            name: "RRR",
            ratings: 4.5,
            genre:['action', "comedy"],
            isActive: true,
            comments: [
                {
                    value: "Family movie"
                }
            ]

        });

        const movie3 = new MovieModel({
            name: "kantara",
            ratings: 4.5,
            genre:['action', "comedy"],
            isActive: true,
            comments: [
                {
                    value: "mystry"
                }
            ]

        });

        const movie4 = new MovieModel({
            name: "dhoom2",
            ratings: 4.5,
            genre:['action', "comedy"],
            isActive: true,
            comments: [
                {
                    value: "action"
                }
            ]

        });

        const movie5 = new MovieModel({
            name: "bahubali",
            ratings: 4.5,
            genre:['action', "comedy"],
            isActive: true,
            comments: [
                {
                    value: "periodic movie"
                }
            ]

        });
        // save the document
        const result = await MovieModel.insertMany([movie1, movie2, movie3, movie4, movie5])

    } catch(error){
        console.log(error)
    }
}

export {createDoc}