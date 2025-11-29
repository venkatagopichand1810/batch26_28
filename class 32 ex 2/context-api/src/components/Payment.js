import Summary from "./Summary";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Payment(){

 const user = useContext(UserContext)
    
    return (
        <div>
            <h4>Payment Section</h4>
            <p>Payment Rs {user.payment} is processed for the user {user.username}</p>
            <Summary  />
        </div>
    )

}

export default Payment