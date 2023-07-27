import React from "react";
import podcastData from "./podcastData";

export default function Podcast() {

    const [podcast, setPodcast] = React.useState(podcastData)

    // const [allPodcast, setAllPodcast] = React.useState([])
    
    // React.useEffect(() => {
    //     fetch("https://podcast-api.netlify.app/shows")
    //         .then(res => res.json())
    //         .then(data => setPodcast(data.podcast))
    // }, [])

    return (
        <main>
            {podcast.map((podcast) => (
                <div key={podcast.id}>
                <button
                    className="preview--button"
                    >click here to play preview
                </button>
                <div>
                <img
                    className="podcast--image" 
                    src={podcast.image} 
                    alt={podcast.title}   
                />
                </div>
                <div>
                    <div className="podcast--title">
                        {podcast.title}
                    </div>
                    <div>
                    <span className="podcast--description">
                        {podcast.description}
                    </span>
                    <span>
                        {podcast.title} • 
                    </span>
                    <span>
                        {podcast.updated}
                    </span>
                    </div>
                    <p>
                        {podcast.seasons}
                    </p>
                </div>
            </div>
            ))}
        </main>
    )
}




