import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {

    return (
        <nav className="navbar">
            <h2 className="logo">Guvi Shopping Website</h2>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                 <li><Link to="/categories">Categories</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/faq">Faq</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )

}

export default Navbar