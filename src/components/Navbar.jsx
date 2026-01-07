import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <span className="navbar-brand fw-bold">TechGlaz Lab</span>

                <div className="navbar-nav ms-auto">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
                    <NavLink className="nav-link" to="/create">Create</NavLink>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                </div>
            </div>
        </nav>
    );
}
