import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./components/header.jsx"
import Podcast from "./components/podcast.jsx"
import Navbar from "./Navbar.jsx";

export default function App() {
    
    return (
        <div>
            <Navbar />
            <Header />
        </div>
    )

}
