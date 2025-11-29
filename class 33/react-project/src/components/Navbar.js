
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <header className="navbar">
            <h1>Guvi Hotel Management</h1>
            <nav>
                <Link to = "/">Dashboard</Link>
                <Link to= "/rooms">Rooms</Link>
                <Link to = "/guests">Guests</Link>
                <Link to = "/bookings">Bookings</Link>
            </nav>
        </header>
    )

}

export default Navbar