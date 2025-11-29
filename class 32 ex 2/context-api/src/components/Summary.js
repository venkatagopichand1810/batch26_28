import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Summary(){

 const user = useContext(UserContext);
 
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Address: {user.address}</p>
        </div>
    )

}

export default Summary