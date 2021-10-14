import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
    return (
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"/>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus ={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img src="https://m.media-amazon.com/images/I/71FyVeh0JUL._SX3000_.jpg" loading="lazy" alt="" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/71ogqFQlViL._SX3000_.jpg" loading="lazy" alt="" />
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/61JkXjxFCQL._SX3000_.jpg" alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner
