
const http = require("http");

// create the server using http module 

const server = http.createServer((req, res) => {
     res.writeHead(200, {"Content-Type" : "text/html"});

     if(req.url === "/") {
        res.write("<h1>Welcome to home page</h1>")
     } else if(req.url === "/about") {
        res.write("<mark>This is the about page </mark>")
     }

    //  end the response
    res.end()
});

// listen on the port 
server.listen(6001, () => {
    console.log("server is running at port number 6001")
})
