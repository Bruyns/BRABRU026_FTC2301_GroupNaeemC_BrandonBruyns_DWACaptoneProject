import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./components/header.jsx"
import Podcast from "./components/podcast.jsx"
import Navbar from "./Navbar.jsx";
import ContactUs from "./components/pages/Contact_us.jsx";
import Latest from "./components/pages/Latest.jsx";

const components = {
    "./components/header.jsx": Header,
    "./components/pages/Latest.jsx": Latest,
    "./components/podcast.jsx": Podcast,
    "./components/pages/Contact_us.jsx": ContactUs
};

export default function App() {
    // let component
    // switch (window.location.pathname) {
    //     case "/":
    //         component = <Header />
    //         break;
    //     case "":
    //         component = <Latest />
    //         break;
    //     case ".components/podcast":
    //         component = <Podcast />
    //         break;
    //     case "":
    //         component = <ContactUs />
    //         break;
    //     default:

    // }
    const Component = components[window.location.pathname] || <Header />;
    
    return (
        <div>
            <Navbar />
            {Component}
        </div>
    )

}
