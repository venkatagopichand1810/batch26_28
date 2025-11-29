
import ShippingDetails from "./ShippingDetails";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserInfo(){

    const user = useContext(UserContext)

    return (
        <div>
            <h2>User Information:</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            {/* drill down the prop to shippingDetails */}
            <ShippingDetails />
        </div>
    )

}

export default UserInfo