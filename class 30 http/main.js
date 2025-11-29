// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json()) // we have to convert the response to json 
// .then(data => console.log(data))
// .catch(error => console.log("error fetching the data"))


//callback -> callbach hell -> promise -> promise chaining -> asyc await -> fetch then





fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST", //http post method
    headers: {
        "Content-Type" : "application/json", // we are telling server the we are sending the json
    },
    body: JSON.stringify({
       title: "Post from venkat",
        body: "today is awe day",
        userId: 1
    })
})
.then(response => response.json()) // we have to convert the response to json 
.then(data => console.log(data))
.catch(error => console.log("error fetching the data"))

