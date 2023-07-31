import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageRoutes from "./Routes"
import Footer from "./components/Footer";


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
