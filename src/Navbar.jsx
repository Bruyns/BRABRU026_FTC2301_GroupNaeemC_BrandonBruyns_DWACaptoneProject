import React from "react";

export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="nav--title">Site name</a>
            <img src="" />
            <ul>
                <li>
                    <a href="latest">Latest</a>
                </li>
                <li>
                    <a href="/podcast">Podcasts</a>
                </li>
                <li>
                <a href="/contact">Contact us</a>
                </li>
                <li>
                    <button className="nav--signup">
                        <a href="/signin">Sign up here</a>
                    </button>
                </li>
            </ul>
        </nav>
    )
}