import Title from "./components/Title";
import Count from "./components/Count";
import CountBtn from "./components/CountBtn";
import Age from "./components/Age";
import AgeBtn from "./components/AgeBtn";
import { useState } from "react";
import { useCallback } from "react";

function App() {

  let[count, setCount] = useState(0);
  let[age, setAge] = useState(18);

  // to update the count
  const handleCount = useCallback(() => {
    setCount(count + 1)
  }, [count])


  //to update the age

  const handleAge =  useCallback(() => {
    setAge(age + 1)
  }, [age])


  return(
    <>

    <Title />
    <Count count = {count}/> <br></br>
    <CountBtn handleCount = {handleCount}/> <br></br><br></br>
    <Age age = {age}/> <br></br>
    <AgeBtn handleAge = {handleAge}/>

    </>
  )

}

export default App