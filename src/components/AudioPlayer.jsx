import React ,{ useState, useEffect, useRef } from "react";

/**
 * Component representing the audio player overlay to play and stop audio.
 * @param {string} audioUrl - The URL of the audio to be played.
 * @returns {JSX.Element} The JSX element representing the AudioPlayerOverlay.
 */
export default function AudioPlayerOverlay({ audioUrl }) {
    const audioRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        }else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    return (
        <div className="audio--player-overlay">
            <audio ref={audioRef} src={audioUrl}></audio>
            <div className="audio--control">
                <button onClick={togglePlay}>{isPlaying ? "Stop" : "Play" }</button>
                <button onCLick={() => audioRef.current.pause()}>Stop</button>
            </div>
        </div>
    )
}