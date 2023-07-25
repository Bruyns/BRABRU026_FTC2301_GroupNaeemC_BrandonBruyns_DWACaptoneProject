import React from "react";

export default function Header() {
    return (
        <main className="Header">
            <nav className="Navbar">
                <ul className="Navbar--List">
                    <li>Home</li>
                    <li>Latest releases</li>
                    <li>Podcasts</li>
                    <li>Latest News</li>
                    <li>Contact us</li>
                </ul>
            <button 
                className="Signup-Button"
            >
                Sign Up Here
            </button>
            </nav>
            <div className="Header--Text">
                <h2>Daily Podcasts to enjoy</h2>
                <h1>Header content goes here!</h1>
                <h3>listen to thousands of cool and interesting podcasts form over 100's of awesome artists</h3>
            </div>
                <button 
                    className="Header--RandomPodcast"
                    // onClick={} 
                    >{<img 
                        src="./src/img/play-button-arrowhead.png" 
                        alt="Play_Button"
                        width="20px"
                        height="20px"
                    />}
                    start listening now
                </button>
        </main>
    )
}