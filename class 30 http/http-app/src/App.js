import axios from "axios";
import { useState, useEffect } from "react"

function App() {
  const [title, setTitle] = useState("");
  const [response, setResponse] = useState(null);

  const createPost = () => {
    axios.patch("https://jsonplaceholder.typicode.com/posts/1", {
 
      body: "This is new post body",

    })
    .then(response => setResponse(response.data))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <input type="text" placeholder="Enter the title" value={title}
      onChange={(e) => setTitle(e.target.value)} />

      <button onClick={createPost}>Add the post </button>
      {response && <p> created the post: {response.body}</p>}
      
    </div>
  )

}

export default App