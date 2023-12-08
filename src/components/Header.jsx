import React, { useEffect, useState } from "react";
import PodcastCarousel from "./Carousel";

/**
 * The main home page that the user sees upon loading the web app. It displays a header and a PodcastCarousel.
 * @param {Object} podcast - The array of podcast data.
 * @returns {JSX.Element} The JSX element representing the Header.
 */
export default function Header( { podcast }) {

    return (
        <main className="header">
            <div className="header--Text">
                <h2>Daily Podcasts to enjoy</h2>
                <h1>Welcome to Podcasting-couch :)</h1>
                <h3>listen to thousands of cool and interesting podcasts form over 100's of awesome artists</h3>
                <div className="header--carousel">
                    <PodcastCarousel podcast={podcast} />
                </div>
            </div>
        </main>
    )
}