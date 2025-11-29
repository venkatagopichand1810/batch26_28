
const express = require("express");

// create the express app
const app = express();

// custom middleware function 
function logger(req, res, next) {
    console.log(`request method: ${req.method}, URL: ${req.url}`);
    next()//next middleware/route
}

app.use(logger)


app.use((req, res) => {
    res.send("logging the details")
})


app.listen(3002, () => {
    console.log("server is running at port 3002")
})



//auth, authorizion -> custom middleware..valid or