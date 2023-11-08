import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import slide1 from "../../Images/slide1.webp";
import slide2 from "../../Images/slide2.webp";
import slide3 from "../../Images/slide3.webp";
import "./Banner.css";

const Banner = () => {
    return (
        <div className='my-carousel'>
            <Carousel className='crsl' interval={3000} infiniteLoop={true} autoPlay={true} showStatus={false} showArrows={false} showIndicators={false}>
            {/* <NavBar/> */}
                <div className='slider'>
                    <img src={slide1} alt=""/>
                </div>
                <div>
                    <img src={slide2} alt=""/>
                </div>
                <div>
                    <img src={slide3} alt=""/>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;