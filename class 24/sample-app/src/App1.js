import React from 'react';
import "./App.css"

function App() {

  const name = "venkat"
  const a = 10;
  const b = 20;
  const isLoggedin = false;
  const imgUrl = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?_gl=1*ijvig7*_ga*MjA1NjA5ODc5LjE3NTYwNDEwNDQ.*_ga_8JE65Q40S6*czE3NTYwNDEwNDQkbzEkZzEkdDE3NTYwNDEwNDUkajU5JGwwJGgw"
  const size = 300;
  const x = null;
  const y = undefined;
  const z = false;
  const message = "venkattttttt"
  const showAlert = () => {
    alert("welcome to react jsx")
  }

  return (
    // <React.Fragment>
    //   <h1>Hello venkat</h1>
    //   <p>This is paragraph</p>
    //   <h2>this is heading 2</h2>
    // </React.Fragment>

    // <>
    //   <h1>Hello venkat</h1>
    //   <p>This is paragraph</p>
    //   <h2>this is heading 2</h2>
    // </>

    <div className="header">
      <h1>Hello venkat</h1>
      <p>This is paragraph</p>
      <h2>this is heading 2</h2>
      <img src="./logo192.png" />

      <h1>
        My name is {name}
      </h1>
      <p>Sum of {a} and {b} is {a + b}</p>

      <div>
        {isLoggedin ? <h1>Welcome Back!</h1> : <h1>Please login</h1>}
      </div>

      <img src={imgUrl} height={size} width={size} />
      x value is {x}
      y value is {y}
      z value is {z}
      message is {message}

      <form>
        <label htmlFor="username">username:</label>
        <input id="username" type='text' placeholder='enter your username'></input>
      </form>

      <button onClick={showAlert}>Show alert</button>

      <button onClick={() => showAlert()}>Show alert</button>
    </div>


  )

}

export default App




// JSX : JAVASCRIPT xml. where we are going to write the html inside the js file

//rules of jsx..whatever we are writing the html code should be inside the return 

// 1) all the elements should be wrapped with one parent tag