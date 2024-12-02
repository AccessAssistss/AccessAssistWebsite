import React, { useEffect } from 'react'
import hero from '../../assets/Group 1000006867.png'
import img1 from '../../assets/image.png'
import img2 from '../../assets/Frame 1000007023.png'
import img3 from '../../assets/Frame 1000007024.png'
import OurProjects from '../landingpage/OurProjects'

const AdvisoryForFarmers = () => {
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
        <img src={hero} alt="" />
      </div>


      <div class="flex flex-col md:flex-row justify-between items-center md:my-20 my-10 p-2">

        <div class="md:w-1/2 w-full mb-6 lg:ml-20 ">
          <p class="leading-relaxed mb-4 font-semibold">
            ASSIST is developing a white-labelled platform with its agritech partner, AgriSarathi, to deliver improved scientific methods of farming that are climate-friendly. ASSIST is already onboarding farmers in Uttar Pradesh on the platform while working as the implementation partner in the DAEP Project.
          </p>
          <p class="leading-relaxed mb-4 font-semibold">
            This platform is designed to enhance agricultural practices by offering farmers Advisory comprising tools and techniques that are both efficient and environmentally sustainable.
          </p>
          <p class="leading-relaxed mb-4 font-semibold">
            The platform helps mitigate the impact of climate change on agriculture through digital advisory services on precision farming, sustainable irrigation systems, and climate-resilient crop varieties, to guide farmers in adopting practices that reduce carbon footprints, conserve water, and improve crop yields.
          </p>
          <p class="leading-relaxed mb-6 font-semibold">
            Additionally, it builds climate resilience by safeguarding farmers' livelihoods against climate-related risks such as erratic weather patterns and prolonged droughts.
          </p>
        </div>


        <div class="md:w-1/2">
          <img width={440} src={img1} alt="AgriSarathi Platform" className='flex justify-center' />
        </div>
      </div>


      <div className='p-5 mb-10'>
        <section className="bg-[#FFF5CE] py-12 px-6 md:px-16 rounded-2xl">
          <div className="max-w-7xl mx-auto ">
            {/* Top Text */}
            <div className="mb-8">
              <p className="font-semibold text-lg md:text-xl leading-relaxed">
              “Precision agriculture is part of the solution to feeding a population that is growing faster than available land supply, while also ensuring the sustainable use of water and energy.”
              </p>
            </div>

            <div className="flex justify-center mb-5">
              <img
                src={img2}
                alt="Mobile app in agriculture"

              />
            </div>
            <div className="flex justify-center my-8">
              <img
                src={img3}
                alt="Mobile app in agriculture"

              />
            </div>

           
          </div>
        </section>
      </div>



      <OurProjects />



    </>
  )
}

export default AdvisoryForFarmers