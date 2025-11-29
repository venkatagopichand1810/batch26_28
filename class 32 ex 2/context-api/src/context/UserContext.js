import { createContext } from "react";

// create the context
export const UserContext = createContext();


//create the provider

export const UserProvider = ({ children }) => {
    const user = {
        username: "ram",
        email: "rama@gamil.com",
        address: "1st cross, main road, bellandur, Bangalore 560036",
        payment: 25000
    }

    return (
        // provide the user object to all the children components
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}
