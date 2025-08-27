
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import BannerOne from '../../components/banner/BannerOne';
import BannerTwo from '../../components/banner/BannerTwo';
import BannerThree from '../../components/banner/BannerThree';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true
    };
    return (

        // <div className='container mx-auto overflow: visible'>
        <div>
            <div className="slider-container">
                <Slider {...settings}>
                    {/* Slide 1: Hero Section */}
                    <BannerOne></BannerOne>
                    {/* Slide 2: How It Works */}
                    <BannerTwo></BannerTwo>
                    {/* Slide 3: Testimonials */}
                    <BannerThree></BannerThree>

                </Slider>
            </div>
        </div>
    );
};

export default Home;