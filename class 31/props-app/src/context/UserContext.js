import { createContext } from "react";

// create the context
export const UserContext = createContext()

// provider 

export const UserProvider = ({children}) => {
    const user = {
        username: "venkat",
        password: "welcome12345"
    }


return <UserContext.Provider value={user}>
    {children}
</UserContext.Provider>

}