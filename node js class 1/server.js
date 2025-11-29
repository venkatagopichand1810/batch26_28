// import the "http" module(in built module for node js)

const http = require("http"); //inbuilt module present in node js

// create the node js server
const server = http.createServer((req, res) => {

    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end("hello from the node js server")
})

// listen on the port 
server.listen(4001, () => {
    console.log("server is running at port number 4001")
})
