import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    const [navbarVisible, setNavbarVisible] = useState(true);
    const [lastMouseMoveTime, setLastMouseMoveTime] = useState(
        new Date().getTime()
    );

    /* function to show the navbar but checks the state if the mouse has
    * moved within a given time and if this returns false should set the 
    * navbar to "hide" and when the state updates ti true the navbar
    * state should change and update to show
    * 
    */
   useEffect(() => {
    const hideNavbarTimeout = setTimeout(() => {
        const currentTime = new Date().getTime();
        if( currentTime - lastMouseMoveTime >= 5000) {
            setNavbarVisible(false);
        }
    }, [5000]);

    return () => clearTimeout(hideNavbarTimeout);
   }, [lastMouseMoveTime])

   /* simple function that uses the mouse state 
   *
   */
  const handleMouseMove = () => {
    setNavbarVisible(true);
    setLastMouseMoveTime(new Date().getTime());
  }

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
        document.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

    /**
 * Navigation bar component that displays links and handles visibility based on mouse movement.
 * @returns {JSX.Element} The JSX element representing the Navbar.
 */
    return (
        <nav className={`navbar ${navbarVisible ? "visible" : "hidden"}`}
        onMouseMove={handleMouseMove}>
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