// import the express module
const express = require("express");

// create the express application
const app = express();

// middleware "express.json" it is used to read the JSON data from the request body
app.use(express.json())

// create the array of the user(database)
let users = [
    {id: 1, name: "rama", age:25},
    {id: 2, name: "shiva", age: 32},
    {id: 3, name: "sai", age: 100}
]

// get method -> read the data (get api)
app.get("/users", (req, res) => {
    // sends all the users data
    res.json(users)
})


// post api call to create the new user

app.post("/users", (req, res) => {

    // extract the new user data from the request body
    const newUser = req.body;

    // pust the newUser to the users array
    users.push(newUser);
    console.log("updated users", users)

    // return the success response
    res.json({
        message: "user is added successfully",
        data: newUser
    })
})

// PUT API METHOD -> Update the entire data (replace)

app.put("/users/:id", (req, res) => {

   const id =  parseInt(req.params.id);

    //find the index of the user
    const index = users.findIndex(user => user.id === id)

    // if user is not found
    if(index === -1) {
        return res.status(404).json({message: "user is not found"})
    }

    // replace the old data with new data
    users[index] = req.body;

    res.json({message: "User replaced successfully", data: users[index]})


})


// delete api
app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id != id)
    res.json({message: "user is deleted successfully"})

})







app.listen(5001, () => {
    console.log("server is running at the port number 5001")
})