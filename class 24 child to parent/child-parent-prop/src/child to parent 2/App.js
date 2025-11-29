
import Child from "./Child"

function App() {

  // we are going to create the function in parent compoentn to receive the object or data from the child component

  const handleChild = (obj) => {
    alert(JSON.stringify(obj))
  }


  return(
    <>
      <Child sendDataToParent = {handleChild}/>
    </>
  )

}

export default App