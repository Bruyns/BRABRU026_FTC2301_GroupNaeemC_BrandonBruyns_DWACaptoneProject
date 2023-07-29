import React from "react";
import PodcastSorting from "../PodcastSorting";

export default function Podcast() {
    /* states that is used in the webapp
    *
    */
    const [podcast, setPodcast] = React.useState([]);
    const [showDescriptionId, setShowDescriptionId] = React.useState(null);
    const [selectedOption, setSelectedOption] = React.useState(null);
    
    /* Api callback function that fetchs the data from the podcast api as well 
    * as if any data couldnt be fetched returns an error to the console with a message
    *
    */
    React.useEffect(() => {
        fetch("https://podcast-api.netlify.app/shows")
            .then((res) => {
                if (!res.ok){
                    throw new Error("Network response was not ok");
                }return res.json();
            })
            .then((data) => setPodcast(data))
            .catch((error) => {
                console.error("Error fetching the podcast data:", error);
            });
            console.log(podcast)
        }, []);     
        
        /* function in charge of what happens when the user clicks the "display info" button
        * found in the below html return. it has logic implemented to show info based on 
        * the current podcasts id so regardless of which podcast is clicked as long as the 
        * id's match it should display the correct info
        */
        const handleInfoClick = (id) => {
            setShowDescriptionId((prevId) => (
                prevId === id ? null : id
            ));
        }
        
        /* function in charge of changing the date found in the podcast array "updated"
        * and changes it into a more user friendly format "DD - MM -- YYYY" 
        *
        */
        function formatDate(updated) {
            const date = new Date(updated);
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const year = date.getFullYear();
            return `${day} - ${month} - ${year}`; 
        }

        /*
        *sorting logic. can be scaled to include more sorting options
        * and updates current podcast state
        * 
        */
        const sortAZ = (podcast) => {
            return podcast.sort((a, b) => a.title.localeCompare(b.title));
          };
          const sortZA = (podcast) => {
            return podcast.sort((a, b) => b.title.localeCompare(a.title));
          };
          const sortLatestOldest = (podcast) => {
            return podcast.sort((a, b) => new Date(b.updated) - new Date(a.updated));
          };
          const sortOldestLatest = (podcast) => {
            return podcast.sort((a, b) => new Date(a.updated) - new Date(b.updated));
          };
        
        /*
        *function that imports the option from the "podcastSorting" function and 
        *updates the html with the new podcast array with the desired sorting input
        *
        */
        const handleSortingChange = (option) => {
            setSelectedOption(option);
            let sortedPodcast = [...podcast];

            let sortingOptions = {
                "--sort--": () => {},
                "A-Z": sortAZ,
                "Z-A": sortZA,
                "Recent - Oldest": sortLatestOldest,
                "Oldest - Recent": sortOldestLatest,
            };
            
            if (sortingOptions[option]) {
                sortingOptions = sortingOptions[option](sortedPodcast);
            }

            setPodcast(sortedPodcast);
        }

    return (
        <main className="podcast">
            <PodcastSorting handleSelectChange={handleSortingChange} />
            {podcast.length === 0 ? (
                <div className="loading--screen">
                    <img className="loading--image" src="./src/img/ouroboros.png" alt="Loading snake"/>
                    <div className="loading--text">Loading...</div>
                </div>
            ) :
            (podcast.map((podcastItem) => (
                <div key={podcastItem.Id} className="podcast--item">
                    <img 
                        className="podcast--image" 
                        src={podcastItem.image} 
                        alt={podcastItem.title} />
                        <div className="play--icon">
                        </div>
                    <div className="podcast--info">
                        <div className="podcast--title">{podcastItem.title}</div>
                        <p className="podcast--updated">Updated Date: {formatDate(podcastItem.updated)}</p>
                        <p className="podcast--seasons">Seasons: {`Season ${podcastItem.seasons}`}</p>
                        <button
                            className="display--info-button"
                            onClick={() => handleInfoClick(podcastItem.id)}>
                            {showDescriptionId === podcastItem.id ? "Hide Info" : "Display Info"}
                        </button>
                        <div className={`podcast--description ${
                            showDescriptionId === podcastItem.id ? "show" : ""}`} >
                            {podcastItem.description}
                        </div>
                    </div>
                </div>
            )))}
        </main>
            )
}




