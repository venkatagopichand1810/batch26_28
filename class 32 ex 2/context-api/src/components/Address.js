import Payment from "./Payment"

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Address(){
const user = useContext(UserContext)


    return (
        <div>
            <h4>Address</h4>
            <p>{user.address}</p>
            <Payment />
        </div>
    )

}

export default Address