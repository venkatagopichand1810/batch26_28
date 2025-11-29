

function App() {

  let mobiles = ["lg", "oppo", "vivo", "iphone", "samsung"];

  let limitedMobiles = mobiles.slice(0, 3);

  return (
    <div>
       <h2>Availbe mobiles</h2>
       <ul>
         {limitedMobiles.map((mobile) => (
          <li>{mobile}</li>
         ))}
       </ul>
    </div>
  )

}

export default App