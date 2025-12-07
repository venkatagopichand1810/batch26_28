import { useState } from "react"
import api from "../api";
function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    // function for the form submit
    const handleSubmit = async(e) => {
        e.preventDefault(); //to prevent the page load of the form
        try {
            await api.post("/register", {name, email, password});
            setMessage("Registration is successfull");
            // clear the form fields on form submission
            setName("");
            setEmail("");
            setPassword("");
        } catch(error){
            console.log(error)
        }
    }
    return (
        <div>
            <h1>User Registeration Form</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>UserName:</label>
                    <input
                        type="text"
                        placeholder="Enter the username"
                        value={name}
                        onChange = {(e) => setName(e.target.value)}
                    />
                </div>
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
                <button type="submit">Register</button>
            </form>
        </div>
    )

}

export default Register