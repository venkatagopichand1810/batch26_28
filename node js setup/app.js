// import the http module 
const http = require("http");
// create the server
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    //  javascript object
    const posts = [
        {
            userId: 1,
            id: 1,
            title: "rama",
            body: "rama"
        },
        {
            userId: 2,
            id: 2,
            title: "venkat",
            body: "venkat"
        },
        {
            userId: 3,
            id: 3,
            title: "keertana",
            body: "keertana"
        },
         {
            userId: 4,
            id: 4,
            title: "swathi",
            body: "swathi"
        },


    ]

    res.end(JSON.stringify(posts))
})

// listen on the port 
server.listen(7001, () => {
    console.log("server is running at port number 7001")
})