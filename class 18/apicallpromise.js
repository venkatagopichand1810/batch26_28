
function getdata(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); //create the xhr object
        xhr.open("GET", url); //open the get request

        xhr.onload = function() {
            if(xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText))
            } else {
                reject("error")
            }
        }

        xhr.onerror = function() {
            reject("network error")
        }

        xhr.send(); //send the request
    })

}


getdata("https://jsonplaceholder.typicode.com/posts")
.then(data => {
    console.log("fetched data", data)
})
.catch(error => {
    console.log("error fetching data")
})