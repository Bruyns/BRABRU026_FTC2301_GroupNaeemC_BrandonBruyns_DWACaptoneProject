import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Season from "./Season.jsx";

/**
 * Component to display details of a specific podcast show using the id from react-router-dom.
 * @returns {JSX.Element} The JSX element representing the ShowDetails.
 */
export default function ShowDetails() {
  const { id } = useParams();
  const [showData, setShowData] = useState(null);
  console.log(showData)

  useEffect(() => {
    const apiUrl = `https://podcast-api.netlify.app/id/${id}`;
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setShowData(data);
      })
      .catch((error) => {
        console.error("Error fetching the show data:", error);
      });
  }, [id]);

  if (!showData) {
    return  <div className="loading--screen">
                <img className="loading--image" 
                    src="../src/img/ouroboros.png" 
                    alt="Loading snake"/>
                <div className="loading--text">Loading...</div>
            </div>;
  }

  return (
    <div className="all--seasons">
      <h2>{`Title: ${showData.title}`}</h2>
      <h3>{` Description: ${showData.description}`}</h3>
      {showData.seasons.map((season) => (
        <Season key={season.id} season={season} />
      ))}
    </div>
  );
}
