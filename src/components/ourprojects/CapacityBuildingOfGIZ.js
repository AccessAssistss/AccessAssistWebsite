import React, { useEffect } from 'react'
import hero from '../../assets/Group 1000006872@2x.png'
import img1 from '../../assets/Rectangle 2157345.png'
import img2 from '../../assets/ASSIST set up systems and training of teams in_.png'
import img3 from '../../assets/assist also.png'
import OurProjects from '../landingpage/OurProjects'

const CapacityBuildingOfGIZ = () => {
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
        <img width={'100%'} src={hero} alt="" />
      </div>


      <div class="flex flex-col md:flex-row justify-between items-center  md:my-20 my-10">

        <div class="md:w-1/2 w-full mb-6 lg:ml-10 px-4 ">
          <p class="leading-relaxed mb-4 font-semibold md:text-2xl text-xl">PACKAGE OF PRACTICE </p>
          <p class="leading-relaxed mb-4 font-semibold">
            This assignment entailed providing capacity building and handholding support to two channel partners of GIZ - Indian Rural Association in Deoghar, Jharkhand and NIRMAN in Aurangabad, Maharashtra - under UPNRM across India.
          </p>
          <p class="leading-relaxed mb-4 font-semibold">
            The scope of the services included Financial Management (lending systems and policies, loan appraisal process, financial systems and policies, external linkages for funds, and financial planning and projections) and Business Performance Management (institutional development, support for producer organizations, organisational structure, business plan development, monitoring systems and policies, monitoring forms and formats, and governance and leadership training).
          </p>

        </div>


        <div class="md:w-1/2">
          <img width={450} src={img1} alt="AgriSarathi Platform" className='flex justify-center' />
        </div>
      </div>

      <div className='md:mt-10 -mt-10  md:mb-10 md:p-10 p-5'>
        <img src={img2} alt="" />
      </div>
      <div className='md:py-10 mb-10 md:p-20 p-5'>
        <img src={img3} alt="" />
      </div>


      <OurProjects />



    </>
  )
}

export default CapacityBuildingOfGIZ