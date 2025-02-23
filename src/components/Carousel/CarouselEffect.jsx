// import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { img } from './images/data'
import classes from "./carousel.module.css"
const CarouselEffect = () => {
    return (
        <>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
            >
                {img.map((image, index) => (
                    <img key={index} src={image} alt="carousel" />
                ))}
            </Carousel>
            <div className={classes.hero__img}></div>
        </>
    )
}

export default CarouselEffect