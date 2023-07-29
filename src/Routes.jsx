import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./components/header";
import Latest from "./components/pages/Latest";
import Podcast from "./components/pages/podcast";
import ContactUs from "./components/pages/Contact_us";

/* function the uses BrowserRoutes to render each component from their respective
* link component and is then exported to the main App.jsx file to be rendered 
*
*/
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

