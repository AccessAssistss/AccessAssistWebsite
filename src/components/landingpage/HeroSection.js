import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from '../../assets/image (16).png';
import img1 from '../../assets/istockphoto-.png';
import { Typography } from "@mui/material";


const HeroSection = () => {
  const sliderRef = useRef(null);

  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", right: 0 }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  
  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", left: 0, zIndex: 1 }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  
  const settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 0,
    initialSlide: 0, 
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    arrows: false,
  
    appendDots: (dots) => (
      <div style={{ position: "absolute", bottom: "10px" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            listStyle: "none",
            padding: 0,
          }}
        >
          {dots.map((dot, index) => (
            <li
              key={index}
              style={{
                margin: "0 5px",
              }}
              onClick={() => sliderRef.current.slickGoTo(index)}
            >
             
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: dot.props.className.includes("slick-active")
                    ? "red"
                    : "white", 
                  transition: "all 0.3s ease",
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    ),
  };
  
  return (
    <>
      {/* Hero Section Slider */}
      <div className="relative ">
        <Slider ref={sliderRef} {...settings}>
          <div>
            <img src={img1} alt="Hero Image" className="w-full h-96 object-cover" />
          </div>

          <div>
            <img src={img2} alt="Hero Image" className="w-full h-96  object-cover" />
          </div>
          <div>
            {/* <img src={baseUrl + "/abstract03.jpg"} className="w-full h-auto object-cover" /> */}
          </div>
          <div>
            {/* <img src={baseUrl + "/abstract04.jpg"} className="w-full h-auto object-cover" /> */}
          </div>
        </Slider>
      </div>

      {/* Section Below Slider with Gradient and Typography */}
      <div className=" bg-gradient-to-r from-[#FFE993] to-[#FFCF1C] p-6 -mt-2  ">
        <Typography
          sx={{ fontSize: {xs: 18,md:'24px'}, }}
          variant="h5"

        >
          Modernizing production systems, agribusiness infrastructure, and market links for farmers -
          <span className="md:text-3xl text-xl   font-semibold text-black"> ENHANCING FARMER INCOMES AND LIVELIHOODS</span>
        </Typography>
      </div>
    </>
  );
};

export default HeroSection;
