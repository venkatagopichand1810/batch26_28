
import {  useState } from "react";
function App() {
  // two state variables to post title and the body
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PATCH",
        headers: {
          "Content-type" : "application/json"
        },
        body: JSON.stringify({
          title, 
        })
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Updated the post ", data);
          alert("Title updated successfully")
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
        <button type="submit">Patch Post</button>
      </form>
    </div>
  )
}

export default App