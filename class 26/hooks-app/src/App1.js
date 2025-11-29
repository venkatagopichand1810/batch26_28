
// import Child from "./Child";
// function App() {

//   return (
//     <>
//       <Child count = {0} />
//     </>
//   )


// }

// export default App


import React from "react";
import { Component } from "react";

class App extends Component {

  // we have to provide the state, initial state

  state = { count: 1 }; //state variable initial state

  increment = () => {
    this.setState({ count: this.state.count + 100 });
    //here setState is inbuilt react setter method or function which is used to update the state variable
  }


  render() {
    return (
      <>
        <h1>Count value is: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </>
    )

  }

}

export default App