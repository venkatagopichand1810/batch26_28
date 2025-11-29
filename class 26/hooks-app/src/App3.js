
import { useState } from "react";

function App() {

  const[isLoggedIn, setIsloggedIn] = useState(false);

  const loginFun = () => {
    setIsloggedIn(!isLoggedIn)
  }

  return (
    <>
     <div>
        <h2>{isLoggedIn ? "Welcome back, User" : "Please log in"}</h2>

        <button onClick={loginFun}>{isLoggedIn ? "Logout" : "Login"}</button>
     </div>
    
    </>
  )

}

export default App