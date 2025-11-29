
// app is component 
function App() {

  // javascript code
  const name1 = "Venkat";
  const city = "chennai";

  // fun 1:
  function greet() {
    return "Welcome to react"
  }

  //fun 2:
  function add(a, b) {
    return a + b
  }

  const isLoggedin = false;

  let message;
  // using if condition
  if (isLoggedin) {
    message = "You are logged in"
  } else {
    message = "Please login "
  }

  // object

  const user = {
    name: "rama",
    age: 25,
    location: "india"
  }

  // destructuring object
  const { name, age, location } = user;

  // math methods

  const num = 9.7;

  // string methods
  const str = "React js is good to learn and easy"

  // date methods
  const today = new Date();


  // array 
  const numbers = [10, 20, 30, 40, 50, 60];

  // we will have the html code and binding {}
  return (
    <>
      <h1>Hello my name is {name1}</h1>
      <p> I am from {city}</p>
      <h1>{greet()}</h1>
      <h2>Sum of a and b = {add(10, 40)}</h2>

      <h1>{message}</h1>

      {/* ternary operator */}
      <p>{isLoggedin ? "Welcome back" : "Guest user"}</p>

      {/* <div>
        <h1>User information:</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
      </div> */}


      <div>
        <h1>User information:</h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Location: {location}</p>
      </div>


      {/* math method examples */}
      <p>Square root: {Math.sqrt(num)}</p>
      <p>Round: {Math.round(num)}</p>
      <p>Floor: {Math.floor(num)}</p>

      <p>String methods..................</p>
      {/* string methods */}
      <p>String Length: {str.length}</p>
      <p>Uppercase: {str.toUpperCase()}</p>
      <p>Lowercase: {str.toLowerCase()}</p>

      <p>Date methods........</p>
      <p>Full Day is: {today.getFullYear()}</p>
      <p>Month is: {today.getMonth()}</p>
      <p>day is: {today.getDay()}</p>
      <p>{today.toString()}</p>

      {/* array methods */}

      <p>Array methods........</p>
      <p>{numbers.length}</p>
      <p>{numbers[0]}</p>
    </>
  )
}

export default App