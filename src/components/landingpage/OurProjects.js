import React from 'react';
import Slider from 'react-slick';

// Import slick-carousel styles in your main CSS file
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import group1 from '../../assets/CAPACITY BUILDING FOR FARMERS.png';
import group2 from '../../assets/CONSUMER DATA ANALYSIS ON DIGITAL FINANCIAL SERVICES.png';
// import group3 from '../../assets/istockphoto-.png';
import group4 from '../../assets/sidbi.png';
import group5 from '../../assets/Frame 1000006963.png';
import group6 from '../../assets/Frame 1000006964.png';
import group7 from '../../assets/Frame 1000006966.png';
import group8 from '../../assets/Frame 1000006967.png';
import group9 from '../../assets/Frame 1000006968.png';
import group10 from '../../assets/Frame 1000006969.png';

const OurProjects = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
        <div className="bg-[#E7ECFF] pb-10">
            <div
                className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-12"
                style={{ backgroundColor: '#E7ECFF' }}
            >
                <div className="w-full md:w-3/4 lg:ml-7 lg:-mt-2">
                    <h2 className="text-[#ED1C24] text-xl md:text-3xl font-bold mb-4 headingfont">
                        OUR PROJECTS
                    </h2>
                </div>
            </div>
            <div className="px-5 md:-mt-8" >
                <Slider {...settings}>
                    <div className="px-2">
                        <img src={group1} alt="Client 1" />
                    </div>
                    <div className="px-2">
                        <img src={group2} alt="Client 2" />
                    </div>
                    <div className="px-2">
                        <img src={group4} alt="Client 4" />
                    </div>
                    <div className="px-2">
                        <img src={group5} alt="Client 5" />
                    </div>
                    <div className="px-2">
                        <img src={group6} alt="Client 6" />
                    </div>
                    <div className="px-2">
                        <img src={group7} alt="Client 7" />
                    </div>
                    <div className="px-2">
                        <img src={group8} alt="Client 8" />
                    </div>
                    <div className="px-2">
                        <img src={group9} alt="Client 9" />
                    </div>
                    <div className="px-2">
                        <img src={group10} alt="Client 10" />
                    </div>
                </Slider>
            </div>
            </div>
        </>
    );
};

export default OurProjects;
