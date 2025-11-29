
function App() {

  // array of numbers
  const numbers = [10, 20, 30, 40, 50]

  return (
    <div>
      {numbers.map((num) => (
        <p>{num * 2}</p>
      ))}
    </div>
  )

}

export default App