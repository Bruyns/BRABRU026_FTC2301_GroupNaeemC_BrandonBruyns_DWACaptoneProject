import React from "react";
// import podcastData from "../podcastData";

export default function Podcast() {

    const [podcast, setPodcast] = React.useState([])
   
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

    return (
        <main className="podcast">
            {podcast.length === 0 ? (
                <div className="loading--screen">
                    <img className="loading--image" src="./src/img/ouroboros.png" alt="Loading snake"/>
                    <div className="loading--text">Loading...</div>
                </div>
            ) :
            (podcast.map((podcastItem) => (
            <div>
                <img className="podcast--image" src={podcastItem.image} alt={podcastItem.title} />
                <div className="podcast--info">
                    <div className="podcast--title">{podcastItem.title}</div>
                    <div className="podcast--description">{podcastItem.description}</div>
                    <button className="display--info" onClick={() => handleInfoClick(podcastItem.description)}>
                        Display description
                    </button>
                    <div className="podcast--season">{podcastItem.season}</div>
                </div>
            </div>
            )))}
        </main>
            )
}




