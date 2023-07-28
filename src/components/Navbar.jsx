import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="nav--title">Pod Casting</Link>
            {/* <img src="" /> */}
            <ul>
                <li>
                    <Link to="/Latest">Latest</Link>
                </li>
                <li>
                    <Link to="/podcast">Podcasts</Link>
                </li>
                <li>
                <Link to="/Contact_us">Contact us</Link>
                </li>
                <li>
                    <button className="nav--signup">
                        <Link to="/Signup">Sign up here</Link>
                    </button>
                </li>
            </ul>
        </nav>
    );
}