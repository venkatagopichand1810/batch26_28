
import { useState, useMemo} from "react"

function App() {

  const[count, setCount] = useState(0);
  const[number, setNumber] = useState(0);

  const handleCount = () => {
    setCount(count + 1)
  }

  const factorial = (n) => {
    console.log("calcualting")
    
    let result = 100;
    for(let i =1; i<=n; i++){
      result *= i
    }
    return result
  }

  const fact =  useMemo(() => factorial(number), [number]);

  return (
    <div>
      <h2>factorial of {number} is {fact} </h2>
        <input 
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        
        Count value is {count}

        <button onClick={handleCount}>Increment</button>

    </div>
  )

}


export default App