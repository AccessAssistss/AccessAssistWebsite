import React from "react";
import Slider from 'react-slick';

// Import slick-carousel styles in your main CSS file
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import group1 from '../../assets/1.png'
import group2 from '../../assets/2.png'
import group3 from '../../assets/3.png'
import group4 from '../../assets/4.png'
import { useNavigate } from "react-router-dom";


const OurWork = () => {
  const navigate = useNavigate()

    const settings = {
        dots: true, 
        infinite: true, 
        speed: 500, 
        autoplay: true, 
        autoplaySpeed: 2000, 
        slidesToShow: 1, 
        slidesToScroll: 1,
        arrows: false, 
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-between bg-white p-6 md:p-12">
      {/* Text Content */}
      <div className="w-full md:w-3/4 lg:ml-7">
        <h2 className="text-[#ED1C24] text-xl md:text-3xl font-bold mb-4 headingfont">
          OUR WORK
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our work is deeply aligned with the Sustainable Development Goals
          (SDGs), reflecting our commitment to addressing global challenges and
          driving impactful change.
        </p>
      </div>

      {/* Button */}
      <div className="w-full md:w-auto lg:mr-7 mt-10  md:mt-0">
        <button  onClick={() => navigate('/ourwork')} className="px-6 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-100">
          Know More
        </button>
      </div>
    </div>

    <div className="md:px-20 px-4">
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
               
            </Slider>
    </div>


    </>
  );
};

export default OurWork;
