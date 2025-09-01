
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import BannerOne from '../../components/banner/BannerOne';
import BannerTwo from '../../components/banner/BannerTwo';
import BannerThree from '../../components/banner/BannerThree';
import SectionDivider from '../../components/SectionDivider';
import HowItWorks from '../../components/HowItWorks';
import Testimonials from '../../components/Testimonials';
import FAQ from '../../components/FAQ';
import FeaturedRoommates from '../../components/FeaturedRoommates';

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
        <div>
            <section className="slider-container w-full overflow-hidden">
                <Slider {...settings}>
                    {/* Slide 1: Hero Section */}
                    <BannerOne></BannerOne>
                    {/* Slide 2: How It Works */}
                    <BannerTwo></BannerTwo>
                    {/* Slide 3: Testimonials */}
                    <BannerThree></BannerThree>
                </Slider>
            </section>

            <FeaturedRoommates></FeaturedRoommates>

            <SectionDivider text="Finding a great roommate should be hassle free."></SectionDivider>

            <HowItWorks></HowItWorks>

            <SectionDivider text="The roommate finder you can trust."></SectionDivider>

            <Testimonials></Testimonials>

            <SectionDivider text="It’s more than just finding a room."></SectionDivider>

            <FAQ></FAQ>
        </div>
    );
};

export default Home;