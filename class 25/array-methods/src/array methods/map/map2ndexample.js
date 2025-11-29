
function App() {

  // array of objects

  const users = [
    {id: 1, name: "Ram", age: 20},
    {id: 2, name: "venkat", age: 25},
    {id: 3, name: "john", age: 35}
  ];

  return(
    <div>
        <h2>User list</h2>

        {users.map((user) => (
            <div>
                <p>Name: {user.name}</p>
                <strong>Age: {user.age}</strong>
            </div>
        ))}
    </div>
  )



}

export default App