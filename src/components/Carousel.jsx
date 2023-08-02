import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import leftArrowImage from "../img/left-arrow.png"
import rightArrowImage from "../img/right-arrow.png"

/**
 * Component that displays a carousel of random podcasts received from the parent component.
 * @param {Object[]} podcast - An array of podcast data.
 * @returns {JSX.Element} The JSX element representing the PodcastCarousel.
 */
export default function PodcastCarousel ({podcast}){       
    const [randomPodcast, setRandomPodcast] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
    /* function that gets random podcasts to pass into the child component of
    *podcastCarousel which is displayed on the header/home page
    *
    */
   const getRandomPodcast = (podcast) => {
       const randomPodcast = [];
       while (randomPodcast.length < 6) {
           const randomIndex = Math.floor(Math.random() * podcast.length);
           randomPodcast.push(podcast[randomIndex])
        }
        return randomPodcast;
    }
    console.log(randomPodcast)



       /* changes the setRandomPodcast everytime the podcast prop changes in the header which gets passed to 
       * the carousel component which changes the prop after every transition which is controlled in the css class
       *
       */
        useEffect(() => {
            // checks if the podcast data is available and if not displays loading screen
            if(podcast && podcast.length > 0 && podcast[0]?.image) {
            setRandomPodcast(getRandomPodcast(podcast));
            setIsLoading(false);
            }
        }, [podcast])
       

        const settings = {
            dots: true,
            infinite: true,
            speed: 250,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: "linear",
            autoplay: true,
            autoplaySpeed: 5000,
        };

    if (isLoading) {
        return (
            <div className="carousel">
              <div className="loading--screen">
                <img
                  className="loading--image"
                  src="./src/img/ouroboros.png"
                  alt="Loading snake"
                />
                <div className="loading--text">Loading...</div>
              </div>
            </div>
          );
        }
      
        return (
          <div className="carousel">
            <Slider {...settings}>
              {randomPodcast.map((podcastItem) => (
                <div key={podcastItem.id}>
                  <img src={podcastItem.image} alt={podcastItem.title} />
                </div>
              ))}
            </Slider>
          </div>
        );
}