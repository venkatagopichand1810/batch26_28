
import {  useState } from "react";
function App() {
  // two state variables to post title and the body
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify({
          title, 
          body, 
          userId: 1
        })
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("created", data);
          alert("Post created")
        })
    };

  return (
    <div>
      <h2> Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the title of the post"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Enter the body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button type="submit">Add Post</button>
      </form>
    </div>
  )
}

export default App