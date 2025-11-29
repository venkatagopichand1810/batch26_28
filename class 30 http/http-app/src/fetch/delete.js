

function App() {
  const handleSubmit = () => {
      fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("post deleted", data)
          alert("Post deleted successfully")
        })
    };

  return (
    <div>
      <h2> Delete Post</h2>
        <button type="submit" onClick={handleSubmit}>Delete Post</button>
    </div>
  )
}

export default App