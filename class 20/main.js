fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json()) //convert the response into JSON format
    .then(data => {
        console.log("Get response", data); //we are going to get the data
    })
    .catch(error => {
        console.log(error.message)
    })