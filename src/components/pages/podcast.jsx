import React from "react";
import PodcastSorting from "../PodcastSorting";
import PodcastCarousel from "../Carousel";
import Header from "../Header";
// import Preview from "../Preview";
import { Link } from "react-router-dom";

/**
 * Component to display a list of podcasts and allow sorting and favoriting options.
 * @param {string} id - The id of the podcast.
 * @returns {JSX.Element} The JSX element representing the Podcast.
 */
export default function Podcast(id) {
    /* states variables that is used in the webapp
    *
    */
    const [podcast, setPodcast] = React.useState([]);
    const [showDescriptionId, setShowDescriptionId] = React.useState(null);
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [favouritedShows, setFavouritedShows] = React.useState({});

    
    /* Api callback function that fetchs the data from the podcast api as well 
    * as if any data couldnt be fetched returns an error to the console with a message
    *
    */
    React.useEffect(() => {
        const apiUrl = "https://podcast-api.netlify.app/shows";
        fetch(apiUrl)
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((data) => {
            setPodcast(data);
          })
          .catch((error) => {
            console.error("Error fetching the podcast data:", error);
          });
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
        
        /* function that takes a shows ID and checks whether the current state is 
        * favourites or not by the user using an icon image as the true/false
        * indicator
        * 
        */
        const handleFavouriteClick = (showId) => {
            setFavouritedShows((prevFavouritedShows) => ({
            ...prevFavouritedShows,
            [showId]: !prevFavouritedShows[showId],
            }));
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
        <div>
        <main className="podcast">
            <PodcastSorting handleSelectChange={handleSortingChange} />
            {podcast.length === 0 ? (
                <div className="loading--screen">
                    <img className="loading--image" src="./src/img/ouroboros.png" alt="Loading snake"/>
                    <div className="loading--text">Loading...</div>
                </div>
            ) :
            (podcast.map((show) => (
                <div key={show.id} className="podcast--item">
                    <Link to={`/podcast/${show.id}`}>
                    <img 
                        className="podcast--image" 
                        src={show.image} 
                        alt={show.title} />
                        </Link>
                        <div
                        className={`favorite-icon ${
                            favouritedShows[show.id] ? "favorited" : "not-favorited"
                        }`}
                        onClick={() => handleFavouriteClick(show.id)}
                        >
                        <img
                            src={favouritedShows[show.id] ? "../src/img/star-fill.png" : "../src/img/star-empty.png"}
                            alt="Favourite"
                            />
                        </div>
                    <div className="podcast--info">
                        <div className="podcast--title">{show.title}</div>
                        <p className="podcast--updated">Updated Date: {formatDate(show.updated)}</p>
                        <p className="podcast--seasons">Seasons: {`Season ${show.seasons}`}</p>
                        <button
                            className="display--info-button"
                            onClick={() => handleInfoClick(show.id)}>
                            {showDescriptionId === show.id ? "Hide Info" : "Display Info"}
                        </button>
                        <div className={`podcast--description ${
                            showDescriptionId === show.id ? "show" : ""}`} >
                            {show.description}
                        </div>
                    </div>
                </div>
            )))}
        </main>
        </div>
            )
}
