import React, { useState } from "react";
import AudioPlayerOverlay from "./AudioPlayer";

/**
 * Component to display information about a season and its episodes.
 * @param {Object} season - The season object containing information about the season.
 * @returns {JSX.Element} The JSX element representing the Season.
 */
export default function Season({ season }) {
  const [showEpisodes, setShowEpisodes] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [favouritedSeasons, setFavouritedSeasons] = useState({});

  
  const handleSeasonClick = () => {
    setShowEpisodes(!showEpisodes);
  };

  const handleEpisodeClick = () => {
    setSelectedEpisode(episode === selectedEpisode ? null : episode);
  };

  const handleFavouriteClick = (seasonId) => {
    setFavouritedSeasons((prevFavouritedSeasons) => ({
      ...prevFavouritedSeasons,
      [seasonId]: !prevFavouritedSeasons[seasonId],
    }));
  }


  return (
    <div key={season.id} className="season">
    <div className={`season--info ${showEpisodes ? "show-episodes" : ""}`}>
        <img
          className={`season--image ${showEpisodes ? "shrink" : ""}`}
        src={season.image}
        alt={`Season ${season.number}`}
        onClick={handleSeasonClick}
      />
      <div
          className={`favorite-icon ${
            favouritedSeasons[season.id] ? "favourited" : "not-favourited"
          }`}
          onClick={() => handleFavouriteClick(season.id)}
        >
        <img
          src={favouritedSeasons[season.id] ? "../src/img/star-fill.png" : "../src/img/star-empty.png"}
          alt="Favourite"
          />
        </div>
      {showEpisodes && (
        <div className="season--episodes">
          <h3>{season.title}</h3>
          {season.episodes.map((episode, index) => (
            <div 
              key={episode.id} 
              className="season--episode-item"
              onClick={() => handleEpisodeClick(episode)}
              >{`${index + 1}. ${episode.title}  `}
              <AudioPlayerOverlay audioUrl={episode.file} />
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}
