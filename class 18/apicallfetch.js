// i wanted to do api call from javascript https://jsonplaceholder.typicode.com/posts

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json()) //converting response to json
    .then(data => console.log("fetched data is", data))
    .catch(error => console.log("fetching failure"))




// axios

// callback callback hell promise promise methods promise chaining async await fetch

//use strict
// local storage session storage
// javascrpt program standards