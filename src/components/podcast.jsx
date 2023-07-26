import React from "react";

/*
* state of each selectable podcast split between podcast = show{
*    season: {
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
*}
*/

export default function Podcast() {
    const [podcastPreview, setPodcastPreview] = React.useState([])

    React.useEffect(() => {
        fetch("https://podcast-api.netlify.app/shows")
            .then(res => res.json())
            .then(data => setPodcastPreview())
    }, [])

    function showPreviewPodcast((event) =>
    )





    return (
        <main>
            <div>
                <button
                    type=""
                    placeholder="Show Preview"
                    className=""
                    onClick={showPreviewPodcast}
            </div>
        </main>
    )
}