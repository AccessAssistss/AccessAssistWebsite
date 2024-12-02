import React from 'react';
import Financial from '../../assets/Group 1000006859.png';
import Digital from '../../assets/Group 1000006860.png';
import Climate from '../../assets/Group 1000006861.png';

const OurProficiency = () => {
  const proficiencies = [
    {
      title: "Financial Inclusion",
      image: Financial, // Use the image path directly
    },
    {
      title: "Digital Interventions",
      image: Digital, // Use the image path directly
    },
    {
      title: "Climate Finance",
      image: Climate, // Use the image path directly
    },
  ];

  return (
    <div className="bg-[#E7ECFF] py-8 pb-20 my-10">
      <h2 className="text-center md:text-3xl text-xl font-bold text-red-600 mb-6 headingfont">
        OUR PROFICIENCY
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4 ">
        {proficiencies.map((item, index) => (
          <div
            key={index}
            className=" overflow-hidden max-w-xs mx-auto hover:scale-105 transform transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-70"
            />
            {/* <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProficiency;
