import React from 'react'
import img1 from '../../assets/Group 1000003595.png'
import img2 from '../../assets/Frame 1000006947.png'
import OurBelief from './OurBelief'

const Hero = () => {
  return (
   
   <>
   <div className="bg-gradient-to-r from-[#FFE997] to-[#FFCF1F]">
      <div className= ''>
        {/* Main container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Left Section */}
          <div className="flex items-center pr-4 pt-4 pb-4">
          <div className=" pr-4 pt-4 pb-4 rounded-2xl border-solid border-t-2 border-r-2 border-b-2 border-black flex items-center ">
            <div className='bg-[#FFF5CE] p-16 items-center rounded-2xl'>
            <h2 className="md:text-3xl text-xl font-bold text-[#ED1C24] mb-4 headingfont">OUR WORK</h2>
            <p className="md:text-xl leading-relaxed">
              Our work is deeply aligned with the Sustainable Development Goals
              (SDGs), reflecting our commitment to addressing global challenges
              and driving impactful change. Our projects in financial
              inclusion, agriculture, livelihood enhancement and climate
              finance, empower marginalized communities, including smallholder
              and marginal farmers, gig workers, women, MSME, and youth.
            </p>
            </div>
          </div>
          </div>

          {/* Right Section */}
          <div className='flex justify-center'>
            <img
           
              src={img1}
              alt="Sustainability Image"
             
            />
          </div>
        </div>
      </div>
    </div>

    <div>
      <OurBelief/>
    </div>
  

   </>
  )
}

export default Hero