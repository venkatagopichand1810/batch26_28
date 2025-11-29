
import { useReducer } from "react";

import { counterReducer, initialState, INCREMENT, DECREMENT, RESET } from "./reducer/counterReducer";

function App() {

  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Count value is: {state.count}</h1>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
      <button onClick={() => dispatch({ type: RESET })}>Reset</button>
    </div>
  )

}

export default App