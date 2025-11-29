function App(){

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // only even numbers
    const evenNumbers = numbers.filter(num => num % 2 === 0)


  return (
    <div>
        <h2>Even numbers</h2>
        {evenNumbers.map((num,index) => (
          <p key={index}>
            {num}
          </p>
        ))}
    </div>
  )

}

export default App