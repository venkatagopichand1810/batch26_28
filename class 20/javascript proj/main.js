// function to fetch the posts
function fetchPosts() { //define the function  
    // send the GET request to the API to fetch the posts
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(res => res.json()) //convert the raw response(stream) into javascript object/array
        .then(posts => { // "posts" hold the array of all the posts

            const container = document.getElementById("postContainer"); //to display the posts
            container.innerHTML = ""
            // loop through each post object in the posts array
            posts.forEach(post => {
                const postElement = document.createElement("div"); //create the new div element to hold the single post
                postElement.classList.add("post"); //adding the css class "post"
                postElement.setAttribute("data-id", post.id); //store the post's id as the custom attribute

                // create the HTML for the single post with title, body and buttons
                postElement.innerHTML = `
                <h3> ${post.title} </h3>
                <p> ${post.body} </p>
                <div class = "actions">
                    <button class = "edit-btn" onclick = "updatePost(${post.id})">Edit</button>
                    <button class = "delete-btn" onclick = "deletePost(${post.id})">Delete</button>
                </div>
                
                `;
                container.appendChild(postElement)
            })

        })
        .catch(error => console.log("error while fetching data"))

}




function addPost() {
    const title = document.getElementById("titleInput").value; //value entered in the title input field
    const body = document.getElementById("bodyInput").value;

    // if either title or body is empty, show the alert message
    if (!title || !body) {
        alert("Title and body cannot be empty, please fill");
        return; // exit the function execution
    }

    // send the post request to the api and add the new post

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST", //HTTP METHOD FOR CREATING THE DATA (NEW RESOURCE)
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ // convert the object to json string
            title,
            body
        })
    })

        .then(response => response.json()) //convert the response into JSON format
        .then(newPost => {
            alert("Post is added successfully");

            document.getElementById("titleInput").value = "";
            document.getElementById("bodyInput").value = "";

            const container = document.getElementById("postContainer"); //to display the posts
            const postElement = document.createElement("div"); //create the new div element to hold the single post
            postElement.classList.add("post"); //adding the css class "post"
            postElement.setAttribute("data-id", newPost.id); //store the post's id as the custom attribute

            // create the HTML for the single post with title, body and buttons
            postElement.innerHTML = `
                <h3> ${newPost.title} </h3>
                <p> ${newPost.body} </p>
                <div class = "actions">
                    <button class = "edit-btn" onclick = "updatePost(${newPost.id}">Edit</button>
                    <button class = "delete-btn" onclick = "deletePost(${newPost.id})">Delete</button>
                </div>
                
                `;
            container.prepend(postElement)
        })
        .catch(error => {
            console.log(error.message)
        })



}

// function to delete the post
function deletePost(postId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "DELETE"
    })
        .then(response => {
            if (response.ok) {
                alert("Post is deleted successfully");

                const postElement = document.querySelector(`[data-id = '${postId}']`); //find the post in the DOM using this data-id
                if (postElement) { //if the post exists in the DOM
                    postElement.remove(); //remove from the ui
                }

            } else {
                throw new Error("failed to delete the post")
            }
        })
        .catch(error => console.log(error.message))

}


// function to update the post

function updatePost(postId){
    const newTitle = prompt("Enter your new Title");
    const newBody = prompt("Enter your updated comment");

     // if either title or body is empty, show the alert message
    if (!newTitle || !newBody) {
        alert("Title and body cannot be empty, please fill");
        return; // exit the function execution
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "PATCH", //HTTP METHOD FOR CREATING THE DATA (NEW RESOURCE)
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ // convert the object to json string
            title: newTitle,
            body: newBody
        })
    })

        .then(response => response.json()) //convert the response into JSON format
        .then(updatedPost => {
            alert("Post is updated successfully");

             const postElement = document.querySelector(`[data-id = '${postId}']`);
             if(postElement){
                postElement.querySelector("h3").textContent = updatedPost.title;
                 postElement.querySelector("p").textContent = updatedPost.body;
             }

           
        })
        .catch(error => {
            console.log(error.message)
        })


}

fetchPosts();
