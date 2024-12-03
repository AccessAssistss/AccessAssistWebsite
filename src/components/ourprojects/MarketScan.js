import React, { useEffect } from 'react'
import hero from '../../assets/Group 1000006878.png'
import img1 from '../../assets/Rectangle 21573456.png'
import img2 from '../../assets/Rectangle 2160.png'

import OurProjects from '../landingpage/OurProjects'

const MarketScan = () => {
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

      <div class="md:w-1/2 w-full mb-6 lg:ml-10 p-2 ">
        <p class="leading-relaxed mb-4 font-semibold">
        ASSIST undertook a sector landscaping for an international entrepreneurial bank, FMO Netherlands, on climate finance
        </p>
        <p class="leading-relaxed mb-4 font-semibold">
        The landscaping, covered in a commissioned report, provided a holistic view of climate finance and catalytic funding in India from a microfinance standpoint. ASSIST examined challenges, opportunities, policies, and product interventions in climate financing for individuals, households, and MSMEs across India. Additionally, ASSIST identified potential opportunities for green financing from an MFI’s perspective, helping drive sustainable development and financial inclusion.
        </p>
        
      </div>


      <div class="md:w-1/2 flex justify-center">
        <img width={400} src={img1} alt="AgriSarathi Platform" className='flex justify-center' />
      </div>
    </div>


    <div className='p-5 mb-10'>
      <section className="bg-[#FFF5CE] py-12 px-6 md:px-16 rounded-2xl">
        <div className="max-w-7xl mx-auto ">
          
          <div >
            <p className="font-semibold text-lg md:text-xl leading-relaxed">
            To support this end-to-end analysis, ASSIST also undertook a market scan by engaging with 20+ stakeholders in climate and catalytic funding in India. These included, but were not limited to, the World Bank, United Nations Environment Programme, Asian Development Bank, BRAC Net, GIZ India, and several NBFCs and other financiers in India. 
            </p>
          </div>

          <div className="flex justify-center my-8">
            <img
              src={img2}
              alt="Mobile app in agriculture"

            />
          </div>
          <div className="mb-8">
            <p className="font-semibold text-lg md:text-xl leading-relaxed">
            Through these direct engagements, valuable insights were gained into the evolving market dynamics within the climate finance sector. By triangulating data and elucidating stakeholder perspectives, we enhanced the robustness of our findings, enabling us to provide informed and actionable recommendations that drive sustainable development and financial inclusion.
            </p>
          </div>
          

         
        </div>
      </section>
    </div>



    <OurProjects />



  </>
  )
}

export default MarketScan