import React from 'react';
import Slider from 'react-slick';

// Import slick-carousel styles in your main CSS file
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import group1 from '../../assets/Group 1.png'
import group2 from '../../assets/Group 2.png'
import group3 from '../../assets/Group 3 Sidbi.png'
import group4 from '../../assets/Group 4.png'
import group5 from '../../assets/Group 5.png'
import group6 from '../../assets/Group 6.png'
import CFC from '../../assets/Rectangle 7.png'
import { useNavigate } from 'react-router-dom';

const OurClients = () => {
    const navigate = useNavigate()


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
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>

            <div className="our-clients" style={{ backgroundColor: "#E7ECFF" }}>
                <h1 className="text-[#ED1C24] font-bold text-2xl md:text-3xl my-6 headingfont">
                    OUR CLIENTS
                </h1>

                <Slider {...settings}>
                    <div>
                        <img src={group1} alt="Client 1" />
                    </div>
                    <div>
                        <img src={group2} alt="Client 2" />
                    </div>
                    <div>
                        <img src={group3} alt="Client 3" />
                    </div>
                    <div>
                        <img src={group4} alt="Client 4" />
                    </div>
                    <div>
                        <img src={group5} alt="Client 5" />
                    </div>
                    <div>
                        <img src={group6} alt="Client 6" />
                    </div>
                </Slider>
            </div>

            <div className="flex flex-col md:flex-row items-center bg-white p-6 md:p-12">
                {/* Placeholder for the image */}
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    {/* Replace this div with your image */}
                    <div className="flex items-center justify-center ">
                        <img width={500} src={CFC} alt='' />
                    </div>
                </div>

                {/* Text content */}
                <div className="w-full md:w-1/2  md:text-left">
                    <h1 className="text-[#ED1C24] text-xl md:text-4xl font-bold mb-10 headingfont">
                        CATALYSTS FOR CHANGE
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        We are a premium consulting firm delivering high-quality, impactful
                        solutions in the development sector.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        We harness the power of data and technology to provide transformative
                        solutions for economic well-being of communities.
                    </p>
                    <button  onClick={() => navigate('/about')} className="px-6 py-2 mt-10 text-red-600 border border-red-600 rounded-lg hover:bg-red-100">
                        Know More
                    </button>
                </div>
            </div>


        </>
    );
}

export default OurClients;
