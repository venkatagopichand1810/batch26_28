import { useRef } from "react"

function App() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    console.log(username, password)
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Enter the username"
          ref={usernameRef}
        />

        <input 
          type="password"
          placeholder="Enter the password"
          ref={passwordRef}
        />

        <button type="submit">Login</button>
      </form>

    </div>
  )

}

export default App