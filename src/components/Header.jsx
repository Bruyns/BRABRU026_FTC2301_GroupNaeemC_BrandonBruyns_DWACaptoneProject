import React from "react";

/* the main home page that the user sees upon loading the webapp. it is always rendered first
* along with the navbar or whenever the user clicks the logo/home button
*
*/
export default function Header() {
    return (
        <main className="Header">
            <div className="Header--Text">
                <h2>Daily Podcasts to enjoy</h2>
                <h1>Header content goes here!</h1>
                <h3>listen to thousands of cool and interesting podcasts form over 100's of awesome artists</h3>
            </div>
        </main>
    )
}