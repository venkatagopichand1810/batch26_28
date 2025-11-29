
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Guests from "./pages/Guests";
import Bookings from "./pages/Bookings";
import "./App.css";


function App() {
    return(
        <Router>
            <Navbar />
            <main className="container">
                <Routes>
                    <Route path="/" element = {<Home />} />
                    <Route path="/rooms" element = {<Rooms />} />
                    <Route path="/guests" element = {<Guests />} />
                    <Route path="/bookings" element = {<Bookings />} />
                </Routes>
            </main>

        </Router>
    )

}

export default App