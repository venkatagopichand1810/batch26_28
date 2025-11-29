import "./App.css"

function App(){
  const para = {
    color: "orange",
    backgroundColor: "green",
    padding: "40px",
    fontSize: "32px"
  }
  return (
    <>
      <h1 style= {{color: "green", backgroundColor: "black", padding: "20px"}}>Hello world</h1>
      <p style={para}>This is paragraph</p>
      <p className="paragraph1">
            Adding the styles 
      </p>
    </>
  )

}

export default App


// inline, internal and external style
