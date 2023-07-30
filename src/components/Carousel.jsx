import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PodcastCarousel ({ podcast }){       
        
        const [randomPodcast, setRandomPodcast] = useState([]);

        /* function that gets random podcasts to pass into the child component of
        *podcastCarousel which is displayed on the header/home page
        *
        */
        const getRandomPodcast = () => {
            const randomPodcast = [];
            while (randomPodcast.length < 6) {
                const randomIndex = Math.floor(Math.random() * podcast.length);
                randomPodcast.push(podcast[randomIndex])
            }
            return randomPodcast;
        }

       /* changes the setRandomPodcast everytime the podcast prop changes in the header which gets passed to 
       * the carousel component which changes the prop after every transition which is controlled in the css class
       *
       */
        useEffect(() => {
            setRandomPodcast(getRandomPodcast(podcast))
        }, [podcast])

        /* a short check statement to ensure that the passed prop contains the correct data
        *
        */
       if(!podcast || !podcast.length || podcast[0].image) {
        return null;
       }

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            cssEase: "linear",
        };

    return (
        <div className="carousel">
        <Slider {...settings}>
            {randomPodcast.map((podcastItem) => (
                <div key={podcastItem.id}>
                    <img src={podcastItem.image}
                    alt={podcastItem.title} />
                    </div>))}
        </Slider>
        </div>
    )
}