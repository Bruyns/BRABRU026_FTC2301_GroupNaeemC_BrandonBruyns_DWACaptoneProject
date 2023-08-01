import React, { useState } from "react";
import AudioPlayerOverlay from "./AudioPlayer";

export default function Season({ season }) {
  const [showEpisodes, setShowEpisodes] = useState(false);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  
  const handleSeasonClick = () => {
    setShowEpisodes(!showEpisodes);
  };

  const handleEpisodeClick = () => {
    setSelectedEpisode(episode === selectedEpisode ? null : episode);
  };

  return (
    <div key={season.id} className="season">
    <div className={`season--info ${showEpisodes ? "show-episodes" : ""}`}>
        <img
          className={`season--image ${showEpisodes ? "shrink" : ""}`}
        src={season.image}
        alt={`Season ${season.number}`}
        onClick={handleSeasonClick}
      />
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
