import { useState } from "react"

function App() {
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password)
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Enter the username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input 
          type="password"
          placeholder="Enter the password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>


      </form>

    </div>
  )

}

export default App