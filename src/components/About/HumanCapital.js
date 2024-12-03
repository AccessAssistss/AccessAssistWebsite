import React, { useState } from "react";
import img1 from "../../assets/Jaspreet Singh.png";
import img2 from "../../assets/Rakhi Sahay.png";
import img3 from "../../assets/Mukesh Sadana.png";
import img4 from "../../assets/Hemant Singh.png";
import linkedin from "../../assets/Vector.png";
import arrow from "../../assets/BUTTON.png";

const teamMembers = [
  {
    name: "Jaspreet Singh",
    role: "Founder",
    img: img1,
    linkedin: linkedin,
    description: `Jaspreet is a seasoned banker and development finance expert with a rich background spanning over two decades. His career has been dedicated to advancing the agenda of sustainable development goals, particularly focusing on enhancing the financial health and economic well-being of individuals and households in developing nations. He has been deeply involved in various aspects of development finance, from traditional banking to cutting-edge digital innovations and impact financing, with a focus on promoting digital economy and inclusion.`,
  },
  {
    name: "Rakhi Sahay",
    role: "CEO",
    img: img2,
    linkedin: linkedin,
    description: `Rakhi is an expert in strategy formulation and implementation with a passion for inclusive growth and digital transformation.`,
  },
  {
    name: "Mukesh Sadana",
    role: "Program Advisor",
    img: img3,
    linkedin: linkedin,
    description: `Mukesh has extensive experience in program development and execution, particularly in financial inclusion and sustainable development.`,
  },
  {
    name: "Hemant Singh",
    role: "Digital Agriculture Analyst",
    img: img4,
    linkedin: linkedin,
    description: `Hemant focuses on the intersection of digital innovation and agriculture, helping drive solutions that empower farmers.`,
  },
];

const HumanCapital = () => {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleOpenDialog = (member) => {
    setSelectedMember(member);
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="bg-[#E7ECFF] px-8 py-12">
      {/* Section Title */}
      <div>
        <h2 className="text-[#ED1C24] md:text-4xl text-xl font-bold headingfont">OUR HUMAN CAPITAL</h2>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          ASSIST is spearheaded by a team of seasoned professionals and experts from banking, technology, climate,
          and inclusive finance sectors. Strengthening their leadership is a talented cohort of data scientists,
          data analysts, and AI/ML experts, who harness data and digital technologies to drive systemic societal change.
        </p>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          Each member of this firm is a passionate go-getter determined to contribute towards the economic
          wellbeing of all through transformative solutions developed by ASSIST.
        </p>
        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          The ASSIST team delivers a host of programmes leveraging their diversified experience of financial services,
          inclusion, digital transformation, agritech, agriculture, green finance, gender, and the gig economy.
        </p>
      </div>

      {/* Team Spotlight */}
      <div className="mt-16">
        <h3 className="text-[#ED1C24]  md:text-3xl text-xl font-bold text-center headingfont">Team Spotlight</h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="hover:scale-105 transform transition-all duration-300 bg-[#E7ECFF] shadow-lg rounded-lg p-3 text-center border-solid border-2 border-black">
              <div className='h-100'>
                <div className="relative flex justify-center">
                  <img className="absolute bottom-1 right-2 cursor-pointer" width={35} src={linkedin} alt="" onClick={() => (window.open(member.linkedin))} />
                  <img
                    className="bg-[#FFF5CE] rounded-lg"
                    width="100%"
                    src={member.img}
                    alt={member.name}
                  />
                </div>
                <h4 className="text-gray-900 font-bold text-xl mt-4">{member.name}</h4>
                <p className="text-gray-700 text-sm md:font-semibold  mt-2">{member.role}</p>
              </div>
              <div >
                <img
                  className="mx-3 my-2 cursor-pointer w-15 h-8 object-contain "
                  // onClick={() => handleOpenDialog(member)}
                  src={arrow} alt="" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Dialog */}
      {open && selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col md:flex-row w-full md:max-w-3xl max-w-sm md:h-[400px] h-[550px]  bg-white rounded-lg p-8 relative shadow-2xl overflow-hidden">
            <button
              onClick={handleCloseDialog}
              className="absolute top-4 right-4 text-red-400 text-3xl hover:text-red-600 font-bold"
            >
              &times;
            </button>
            <div className="flex flex-col bg-[#E7ECFF] md:mr-8 rounded-lg p-4 md:w-1/3 sm:w-full items-center gap-6">
              <div className="relative  bg-[#FFF5CE]   rounded-lg text-center border-solid border-2 border-black overflow-hidden">
                <img
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  className="w-40"
                /> 
                <img
                  className="absolute bottom-1 right-1 cursor-pointer w-8 h-8"
                  src={linkedin}
                  alt="LinkedIn"
                  onClick={() => window.open(selectedMember.linkedin)}
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-center text-gray-800">{selectedMember.name}</h4>
                <p className="text-gray-600 text-center">{selectedMember.role}</p>
              </div>
            </div>

            {/* Scrollable Content Container */}
            <div
              className="mt-6 max-h-80 md:w-2/3  overflow-y-auto"
              style={{ scrollbarWidth: "thin", scrollbarColor: "#A0AEC0 #EDF2F7" }}
            >
              <p className="text-black leading-relaxed">{selectedMember.description}</p>
            </div>
          </div>
        </div>


      )}
    </div>
  );
};

export default HumanCapital;
