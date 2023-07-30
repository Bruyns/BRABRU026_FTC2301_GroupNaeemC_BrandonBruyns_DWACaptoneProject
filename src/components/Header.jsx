import React, { useEffect, useState } from "react";
import PodcastCarousel from "./Carousel";

/* the main home page that the user sees upon loading the webapp. it is always rendered first
* along with the navbar or whenever the user clicks the logo/home button
*
*/
export default function Header( { podcast }) {

    return (
        <main className="header">
            <div className="header--Text">
                <h2>Daily Podcasts to enjoy</h2>
                <h1>Header content goes here!</h1>
                <h3>listen to thousands of cool and interesting podcasts form over 100's of awesome artists</h3>
                <div className="header--carousel">
                    <PodcastCarousel podcast={podcast} />
                </div>
            </div>
        </main>
    )
}