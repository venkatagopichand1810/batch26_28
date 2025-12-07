import { useState } from "react"
import api from "../api";
import {useNavigate} from "react-router-dom"
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    // function for the form submit
    const handleSubmit = async(e) => {
        e.preventDefault(); //to prevent the page load of the form
        try {
            await api.post("/login", {email, password});
            setMessage("Login is successfull");
            navigate("/home")

        } catch(error){
            console.log(error)
        }
    }
    return (
        <div>
            <h1>User Login Form</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        placeholder="Enter the email"
                        value={email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        placeholder="Enter the password"
                        value={password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )

}

export default Login