import { useContext } from "react";
import { UserContext } from "../context/UserContext";


function ComponentD() {

    const user = useContext(UserContext)

    return (
        <>

        <section>
            <u>Component D</u> <br></br>
        Username is: <span style={{color: "green"}}>{user.username}</span> <br></br>
        Password is: <strong>{user.password}</strong>
        </section>

        </>
    )

}

export default ComponentD