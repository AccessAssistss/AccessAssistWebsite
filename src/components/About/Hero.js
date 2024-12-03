import React, { useEffect } from 'react'
import img1 from'../../assets/image (18).png'
import img2 from'../../assets/about.png'

import WeBelieve from './Webelieve'


const Hero = () => {
  useEffect(() => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'instant',
    });
}, [])
  return (
    <>
   <div className="relative w-full">
      {/* Background Image */}
      <img width="100%" src={img1} alt="Background" className="w-full h-auto" />

      {/* Centered Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="bg-white text-[#ED1C24] font-semibold px-6 py-3 rounded-full headingfont text-2xl md:text-4xl ">
          Who We Are
        </button>
      </div>
    </div>

    <div className='md:px-20 md:py-20 px-10 py-10'>
        <img src={img2} alt=''/>
       
    </div>
    <div className='p-5' >
       <WeBelieve/>
       
    </div>
    
    </>
  )
}

export default Hero