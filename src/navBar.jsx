import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <h1 className="logo">News<span>Forge</span></h1>

            <ul>
                <li className="nav">
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li className="nav">
                    <NavLink to="/about">About</NavLink>
                </li>

                <li className="nav">
                    <NavLink to="/news">Business</NavLink>
                </li>

                <li className="nav">
                    <NavLink to="/tech">Tech</NavLink>
                </li>

                <li className="nav">
                    <NavLink to="/politics">Politics</NavLink>
                </li>

                <li className="nav">
                   <NavLink to="/sports">Sports</NavLink>
                </li>

                <li className="nav">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}