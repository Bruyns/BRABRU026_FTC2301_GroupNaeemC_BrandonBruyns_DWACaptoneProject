import React from "react";

/*
* state of each selectable podcast split between podcast = show{
*    [season: {
*        episode: {
*            id: "",
*            title: "",
*            duration: "",
*            favourite: false,
*            details: "",
*            date: "",
*
*        }
*    }
*]
*/
export default function Podcast() {
    
    
    const [podcast, setPodcast] = React.useState(
        {
            id: "10716",
            title: "Something Was Wrong",
            description: "Something Was Wrong is an Iris Award-winning true-crime",
            seasons: "14",
            image: "https://content.production.cdn.art19.com/images/cc/e5/0a/08/cce50a08-d77d-490e-8c68-17725541b0ca/9dcebd4019d57b9551799479fa226e2a79026be5e2743c7aef19eac53532a29d66954da6e8dbdda8219b059a59c0abe6dba6049892b10dfb2f25ed90d6fe8d9a.jpeg",
            genre: [1, 2],
            updated: "2022-11-03T07:00:00.000Z"
        }
    )

    
    
    const [podcastPreview, setPodcastPreview] = React.useState([])
    console.log(podcast)


    React.useEffect(() => {
        fetch("https://podcast-api.netlify.app/shows")
        .then(res => res.json())
        .then(data => setPodcastPreview(data.podcast))
    }, [])
    
    function showPreviewPodcast() {
        


        const randomPodcast = Math.floor(Math.random() * podcast.length)
        const url = podcast[randomPodcast].url
        setPodcastPreview( prevPodcast => ({
            ...prevPodcast,
            randomPodcast: url
        })
        )
    }



    return (
        <main>
            <div>
                <button
                    type=""
                    placeholder="Show Preview"
                    className="podcast--preview"
                    name="podcast"
                    onClick={showPreviewPodcast}
                    >
                        Show Preview
                    </button>
                    <div className="podcast">
                        <img    
                            className="podcast--image"
                            src={podcast.image}
                        />
                        <h3>{podcast.id}</h3>
                        <h3>{podcast.title}</h3>
                        <h3>{podcast.description}</h3>
                        <h3>{podcast.seasons}</h3>
                        <h3>{podcast.genres}</h3>
                        <h3>{podcast.updated}</h3>
                    </div>
            </div>
        </main>
    )
}