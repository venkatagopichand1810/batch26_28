const express = require("express");
const app = express();

// inbuilt middleware
app.use(express.static("public"))

app.listen(3001, () => {
    console.log("server is running")
})

// express.static() is the inbuilt express js middleware used to show html, css, imges 


//express.json
//express.urlEncoded