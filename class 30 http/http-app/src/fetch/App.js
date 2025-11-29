// data will be changing....useState we can maintain the state of the application...
import { useEffect, useState } from "react";
import "./App.css"

//useState
//useEffect hook..when we do an api call we have to use useEffect in react

function App() {
  const [posts, setPosts] = useState([]);

  // post -> holds all the posts
  //setPosts -> function or method to update the posts

  // useEffect hook to fetch the data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json()) // we have to convert the response to json 
      .then(data => setPosts(data))
      .catch(error => console.log("error fetching the data"))
  }, []);
  //[] used to restrict the api to once
  
  return (
    <div className="post-container">
      <h2 className="heading"> All posts</h2>
      <div className="post-list">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>

        ))}
      </div>

    </div>
  )
}

export default App