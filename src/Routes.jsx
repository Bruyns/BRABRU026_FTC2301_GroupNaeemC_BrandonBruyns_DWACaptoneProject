import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./components/header";
import Latest from "./components/pages/Latest";
import Podcast from "./components/pages/podcast";
import ContactUs from "./components/pages/Contact_us";
import { useEffect, useState } from "react";

/* function the uses BrowserRoutes to render each component from their respective
* link component and is then exported to the main App.jsx file to be rendered 
*
*/
export default function PageRoutes() {

    const [podcastData, setPodcastData] = React.useState([]);

    useEffect(() => {
        const apiUrl = "https://podcast-api.netlify.app/shows" ;
        fetch(apiUrl)
            .then((res) => {
                if (!res.ok){
                    throw new Error("Network response was not ok");
                }return res.json();
            })
            .then((data) => {
                setPodcastData(data);
            })
            .catch((error) => {
                console.error("Error fetching the podcast data:", error);
        });
    }, []);

    return (    
        <Routes>
            <Route path="/" element={<Header podcast={podcastData} />}  />
            <Route path="/Latest" element={<Latest />} />
            <Route path="/podcast" element={<Podcast podcast={podcastData} />} />
            <Route path="/Contact_us" element={<ContactUs />} />
        </Routes>
    )
}

