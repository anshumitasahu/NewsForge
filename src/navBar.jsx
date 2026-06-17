import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <h1 className="logo">News<span>Forge</span></h1>

            <ul>
                <li className="nav">
                    <Link to="/Home">Home</Link>
                </li>
                <li className="nav">
                    <Link to="/about">About</Link>
                </li>

                <li className="nav">
                    <Link to="/news">News</Link>
                </li>

                <li className="nav">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}