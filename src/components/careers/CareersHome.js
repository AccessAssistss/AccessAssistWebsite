import React, { useEffect } from 'react'
import img1 from '../../assets/image (19).png'
import a1 from '../../assets/Frame 1000006910.png'
import a2 from '../../assets/Frame 1000006914.png'
import a3 from '../../assets/Frame 1000006915.png'
import a4 from '../../assets/Frame 1000006916.png'

import JoinUsForm from './JoinUsForm'

const CareersHome = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [])


  return (
    <>

      <div>
        <div className="relative w-full p-6 flex justify-center">

          <img
            src={img1}
            alt="Background"
            className="absolute top-0 left-0 w-full md:h-[500px] h-[400px] object-cover z-0"
          />
          <div className="md:mt-40 md:mb-10 relative z-10  bg-gradient-to-r from-[#FFE997] to-[#FFCF1F] p-8 md:p-12 rounded-lg max-w-5xl ">
            <h1 className="text-2xl md:text-4xl font-bold text-black mb-6">STEP-IN</h1>
            <p className="text-lg md:text-xl text-black leading-relaxed">
              At ASSIST, we are not just a team—we are a community of changemakers.
              Driven by passion and purpose, we work together to create sustainable
              solutions to tackle some of the most pressing challenges. We need
              doers who are bold, creative and committed.
            </p>
          </div>
        </div>

      <div className='md:mt-20 mt-20  '>
        <h2 className="text-center md:text-4xl text-xl font-bold text-[#ED1C24] mb-6 headingfont">
          STEP-IN IF YOU ARE
        </h2>
      </div>

      <div className="lg:grid lg:grid-cols-2 grid-cols-2  gap-5 md:p-20 md:-mt-10">
        <div className="relative group p-2">
          <img src={a1} alt="Image 1" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />

        </div>

        <div className="relative group  p-2">
          <img src={a2} alt="Image 2" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />

        </div>

        <div className="relative group  p-2">
          <img src={a3} alt="Image 3" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />

        </div>

        <div className="relative group  p-2">
          <img src={a4} alt="Image 4" className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />

        </div>
      </div>

      <div>
        <JoinUsForm />
      </div>
      </div>
    </>
  )
}

export default CareersHome