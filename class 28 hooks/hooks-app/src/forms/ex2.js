// react forms -> controlled forms..useState
// if we wanted to send the data from state to api
// we want to reset from easily 
// validate inputs while user is typing


import { useState } from "react";

function App() {
  const[username, setUsername] = useState("");
  const[error, setError] = useState("")

  const handleChange = (e) => {
    const value = e.target.value;
    setUsername(value);

    if(value.length < 6){
      setError("username must be atleast 8 char")
    } else {
      setError("")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username submitted:  ${username}`)
  }



  return (
    <div>

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleChange}/>
        </label>

        {error && <p style={{color: "red"}}>{error}</p>}

        <button type="submit">Sumbit</button>
      </form>
     

       
    </div>
  )


}


export default App


// key note...whenever we are using input fields.. use onChange event