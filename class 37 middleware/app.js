const express = require("express");
const app = express();

// middleware
app.use((req, res, next) => {
    console.log("user entered the login details like username and password")
    // next(); //go to next route or middleware
})

app.get("/welcome", (req, res) =>{
    res.send("welcome to home page")
})


app.listen(3001, () => {
    console.log("server is running")
})