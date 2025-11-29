
import Child from "./Child";
function App() {

  const name = "venkat";
  const age = 25;
  const isStudent = true;
  const skills = ["React", "node", "HTML"];
  const user = {
    id: 1,
    city: "bangalore",
    country: "india"
  }

  return (
    <div>
      <Child
        name={name}
        age={age}
        isStudent={isStudent}
        skills={skills}
        user={user}
      />

    </div>
  )

}

export default App