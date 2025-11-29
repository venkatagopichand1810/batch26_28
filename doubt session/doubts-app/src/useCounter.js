
import { useState } from "react";

export function useCounter(initialValue = 0){
  const[count, setCount] = useState(initialValue);

  // increase the counter

  const increment = () => setCount(count + 1)

  //decrease the counter
  const decrement = () => setCount(count - 1);

  // reset the counter
  const reset = () => setCount(initialValue)

  return {count, increment, decrement, reset}

}