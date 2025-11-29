// react forms -> controlled forms..useState
// if we wanted to send the data from state to api
// we want to reset from easily 
// validate inputs while user is typing


import { useState } from "react";

function App() {
  // create the state variables to hold the name and email fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");

  const onChangeHandlerName = (e) => {
    setName(e.target.value)
  }

  const onChangeHandlerEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault(); //it is going to prevent the defualt behivour of the form submit
    console.log("Form is submitted", { name, email })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            // onChange={(e) => setName(e.target.value)}
            onChange={onChangeHandlerName}
          />

        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={onChangeHandlerEmail}
          />

        </div>

        <button type="submit">Submit</button>
        <hr />
        <br></br>

        <mark>User Details:</mark>
        <p>{name}</p>
        <p>{email}</p>
      </form>
    </div>
  )


}


export default App


// key note...whenever we are using input fields.. use onChange event