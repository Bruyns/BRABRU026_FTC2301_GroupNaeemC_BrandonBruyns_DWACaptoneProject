import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageRoutes from "./Routes"



export default function App() {   
    return (
        <Router>
            <div>
                <Navbar />
                <PageRoutes />
            </div>
        </Router>
    )

}
