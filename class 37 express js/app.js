// import the built-in http module

const http = require("http");

// create the server
const server = http.createServer((req, res) => {

    const data = {
        id: 1,
        name: "venkat",
        gmail: "venkata@gmail.com",
        country: "INDIA"
    }

    // set the response header
    res.writeHead(200, {"Content-Type" : "application/json"});
    res.end(JSON.stringify(data))
 
})

// start the server 
server.listen(5004, () => {
    console.log("nodes server is running")
})