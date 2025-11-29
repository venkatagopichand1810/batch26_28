
// import the express module
const express = require("express");

// create the app
const app = express();

// middleware to parse the json data 
app.use(express.json())

// empty array of restaurants(database)

let restaurants = [];

// POST API -> Add the new restaurant

app.post("/restaurant", (req, res) => {
    const newRestaurant = req.body; //get the restaurant data from the request body
    restaurants.push(newRestaurant); // store new restaurant in array

    res.status(201).json({
        message: "Restaurant is added successfully", 
        data: newRestaurant
    })

})

// GET api -> retrieve all the restaurants
app.get("/restaurants", (req, res) => {
    res.status(200).json({
        message: "Showing all the restaurants",
        data: restaurants
    })
})


// GET API -> Retrieve the restaurant by name 
app.get("/restaurants/:name", (req, res) => {
    const restaurantName = req.params.name;
    // find the restaurant by name
    const restaurant = restaurants.find(
        (r) => r.name === restaurantName
    )
    // if not present
    if(!restaurant) {
        return res.status(404).json({message: "Restaurant is not found"})
    }
    res.status(200).json({
        message: "Restaurant found successfully",
        data: restaurant
    })
})


//APi to fetch the restaurants based on the cuisine type

app.get("/restaurants/cuisine/:type", (req, res) => {

   const cuisineType = req.params.type;
   const filtered = restaurants.filter(
    (r) => r.cuisine === cuisineType
   )

   if(filtered.length === 0) {
    return res.status(404).json({message: "No restaurant found for this cuisine type"})
   }

    res.status(200).json({
        data: filtered
    })
})

// update the restaurant by id

app.put("/restaurant/:id", (req, res) => {
    const restaurantId = parseInt(req.params.id);

    const updatedData = req.body;

    const index = restaurants.findIndex(r => r.id === restaurantId);

    if(index === -1) {
        return res.status(404).json({
            message: "Restaurant not found"
        })
    }

    // replace the object
    restaurants[index] = {
        id: restaurantId,
        ...updatedData
    }
    res.status(200).json({
        message: "Restaurant updated successfully",
        data: restaurants[index]
    })
})




// delete api -> remove the restaurant by ID 
app.delete("/restaurants/:id", (req, res) => {
   const restaurantId =  parseInt(req.params.id);

   const index = restaurants.findIndex(r => r.id === restaurantId);

   if(index === -1) {
    return res.status(404).json({message: "Restaurant is not found"})
   }

   //remove one element from the array
   const deletedRestaurant = restaurants.splice(index, 1);

   res.status(200).json({
    message: "Restaurant deleted successfully",
    deletedRestaurant: deletedRestaurant, 
    remaining: restaurants
   })
})


// delete api -> remove the restaurant by name 
app.delete("/restaurants/name/:name", (req, res) => {
   const restaurantName = req.params.name;

   const index = restaurants.findIndex(r => r.name === restaurantName);

   if(index === -1) {
    return res.status(404).json({message: "Restaurant is not found"})
   }

   //remove one element from the array
   const deletedRestaurant = restaurants.splice(index, 1);

   res.status(200).json({
    message: "Restaurant deleted successfully",
    deletedRestaurant: deletedRestaurant, 
    remaining: restaurants
   })
})






app.listen(5004, () => {
    console.log("server is running at the port number 5001")
})