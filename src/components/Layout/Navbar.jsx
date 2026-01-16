import { Link } from "react-router-dom";
import { useState } from "react";
import "../../App.css"; // Ensure CSS is available if not globally imported

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <h2 className="logo">NEXORA</h2>

            <div className="menu-icon" onClick={toggleMenu}>
                <div className={isOpen ? "bar open" : "bar"}></div>
                <div className={isOpen ? "bar open" : "bar"}></div>
                <div className={isOpen ? "bar open" : "bar"}></div>
            </div>

            <div className={`nav-links ${isOpen ? "active" : ""}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/blogs" onClick={() => setIsOpen(false)}>Blogs</Link>
                <Link to="/create" onClick={() => setIsOpen(false)}>Create</Link>
                <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            </div>
        </nav>
    );
}



