
import Header from "./components/Header";
import UserInfo from "./components/UserInfo";

import { UserProvider } from "./context/UserContext";

function App() {

  return (
    <UserProvider>
      <Header siteName = "FLIPKART" />
      {/* drilling the user data to userinfo component */}
      <UserInfo  />

    </UserProvider>
  )

}

export default App