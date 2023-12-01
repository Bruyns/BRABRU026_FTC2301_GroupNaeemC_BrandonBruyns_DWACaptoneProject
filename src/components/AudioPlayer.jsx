import React ,{ useState, useEffect, useRef } from "react";

/**
 * Component representing the audio player overlay to play and stop audio.
 * @param {string} audioUrl - The URL of the audio to be played.
 * @returns {JSX.Element} The JSX element representing the AudioPlayerOverlay.
 */
export default function AudioPlayerOverlay({ audioUrl }) {
    const audioRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const audioElement = audioRef.current;
    
        // Update duration and current time on audio load
        const handleLoadedMetadata = () => {
          setDuration(audioElement.duration);
        };
    
        // Update current time while playing
        const handleTimeUpdate = () => {
          setCurrentTime(audioElement.currentTime);
        };
    
        audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
        audioElement.addEventListener("timeupdate", handleTimeUpdate);
    
        return () => {
          audioElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
          audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        };
      }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        }else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    const handleStop = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
      };

      return (
        <div className="audio--player-overlay" >
          <audio ref={audioRef} src={audioUrl}></audio>
          <div className="audio--control">
            <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
            <button onClick={handleStop}>Stop</button>
          </div>
          <div className="audio--progress">
            <progress
              value={currentTime}
              max={duration}
            ></progress>
          </div>
          {isPlaying && (
            <div className="floating-audio-player">
              {/* Add floating audio player content here */}
              <button onClick={handleStop}>Stop</button>
            </div>
          )}
        </div>
      );
    }