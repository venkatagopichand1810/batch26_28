import ComponentA from "./components/ComponentA";
import { UserProvider } from "./context/UserContext";

function App() {

  return (
    <UserProvider>
      <div>
        <ComponentA  />
      </div>

    </UserProvider>
  )

}


export default App