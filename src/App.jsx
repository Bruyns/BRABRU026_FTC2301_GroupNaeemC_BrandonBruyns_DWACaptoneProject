import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageRoutes from "./Routes"
import Footer from "./components/Footer";

/**
 * Main component for the application. It sets up the routing and renders the Navbar, PageRoutes, and Footer.
 * @returns {JSX.Element} The JSX element representing the application.
 */
export default function App() {   
    return (
        <Router>
            <div>
                <Navbar />
                <PageRoutes />
                <Footer />
            </div>
        </Router>
    )
}
