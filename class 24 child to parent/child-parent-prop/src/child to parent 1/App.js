
import Child from "./Child"

function App() {

  // define the function
  const handleChildData = (data) => {
    alert("Parent received: " + data)
  }

  return (
    <>
      <Child venkat = {handleChildData}/>
    </>
  )

}

export default App