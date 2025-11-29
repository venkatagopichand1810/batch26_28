// import the express module
const express = require("express");

// create the express application
const app = express();


app.use((req, res) => {
    const data = {
        id: 1,
        name: "ram",
        gmail: "rama@gmail.com",
        country: "INDIA"
    }

    res.json(data)
})

// start the server 
app.listen(5004, () => {
    console.log("node server is running")
})

