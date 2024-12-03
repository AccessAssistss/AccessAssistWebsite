import React from "react";
import team from '../../assets/Rectangle 3468092.png'
import img1 from '../../assets/Group 1000003579.png'
import img2 from '../../assets/Group 1000003580.png'
import img3 from '../../assets/Group 1000003562.png'
import img4 from '../../assets/Group 1000003603.png'

const WeBelieve = () => {
  return (
    <div className="bg-[#FFF7D9] p-8 md:p-16 rounded-lg">
      {/* Section Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#ED1C24] mb-8 headingfont">
        We Believe In
      </h2>

      {/* Cards Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[
          {
            title: "POWER OF COMMUNITIES",
            img: img1, // Replace with actual image
          },
          {
            title: "GRASSROOTS COALITION",
            img: img2, // Replace with actual image
          },
          {
            title: "SYNERGY",
            img: img3, // Replace with actual image
          },
          {
            title: "CO-CREATION",
            img: img4, // Replace with actual image
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden hover:scale-105 transform transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <p className="text-white font-semibold text-center text-sm md:text-base">
                {item.title}
              </p>
            </div> */}
          </div>
        ))}
      </div>

    
      <div className="relative rounded-2xl">
        <img
          src={team} 
          alt="Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-end md:p-8 p-2  text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 headingfont ">We Are</h3>
          <div className="grid grid-cols-2 gap-4 ">
            {[
              "CHANGE INITIATORS",
              "INVENTIVE",
              "RESOURCEFUL",
              "IMPACT-ORIENTED",
            ].map((label, index) => (
              <button
                key={index}
                className="border border-white rounded-full px-4 py-2 text-sm md:text-base hover:bg-white hover:text-black transition"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeBelieve;
