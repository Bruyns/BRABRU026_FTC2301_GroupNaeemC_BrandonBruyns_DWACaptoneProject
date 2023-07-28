import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./components/Header";
import Latest from "./components/pages/Latest";
import Podcast from "./components/pages/podcast";
import ContactUs from "./components/pages/Contact_us";

export default function PageRoutes() {
    return (    
        <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/Latest" element={<Latest />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/Contact_us" element={<ContactUs />} />
        </Routes>
    )
}

