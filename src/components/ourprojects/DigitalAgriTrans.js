import React, { useEffect } from 'react'
import hero from '../../assets/Group 1000006870.png'
import img1 from '../../assets/Frame 1000006972.png'
import img2 from '../../assets/Rectangle 2158.png'
import img3 from '../../assets/_CD5C3761-4D1B-4327-9A2B-73AC8742DC84_ (1).png'
import OurProjects from '../landingpage/OurProjects'

const DigitalAgriTrans = () => {
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


      <div class="flex flex-col md:flex-row justify-between items-center p-4  md:my-20 my-10">

        <div class="md:w-1/2 w-full mb-6 lg:ml-10 ">
          {/* <p class="leading-relaxed mb-4 font-semibold text-2xl">PACKAGE OF PRACTICE </p> */}
          <p class="leading-relaxed mb-4 font-semibold text-lg md:text-xl">
            The Uttar Pradesh (UP) Government has established a Digital Agriculture and Export Promotion (DAEP) Council under the aegis of the Department of Horticulture and Food Processing, in collaboration with the World Economic Forum to drive investments in modern, technology-driven, and export-oriented agricultural infrastructure. DAEP is a non-statutory apex Council to advise the Government.
          </p>
          <p class="leading-relaxed mb-4 font-semibold text-lg md:text-xl">
            ASSIST provides the technical Program Unit Support to the DAEP while the Center for Fourth Industrial Revolution, India, World Economic Forum, is the knowledge partner to the Council. As the implementing partner, ASSIST will work on the Digital Transformation of Value Chains.
          </p>


        </div>


        <div class="md:w-1/2 flex justify-center">
          <img width={500} src={img1} alt="AgriSarathi Platform"  />
        </div>
      </div>


      <div className='p-5 mb-10'>
        <section className="bg-[#FFF5CE] py-12 px-6 md:px-16 rounded-2xl">
          <div className="max-w-7xl mx-auto ">

            <div className="flex justify-center my-8">
              <img
                src={img2}
                alt="Mobile app in agriculture"

              />
            </div>
            <div>
              <p class="leading-relaxed mb-4 font-semibold md:text-3xl text-xl text-center">Digital Transformation of Value Chains </p>
            </div>
            <div className="mb-8">
              <p className="font-semibold text-lg md:text-xl leading-relaxed text-center">
                Focus on High Priority Crop Value Chains will enhance efficiency, sustainability, and quality of produce through    integration of agri-tech use-cases in the chain. This includes the application of Agritech throughout the agriculture value chain. The integration includes:
              </p>
            </div>

            <div class="flex flex-col md:flex-row justify-between items-center  my-10">

              <div class="md:w-1/2 mb-5">
                <img width={600} src={img3} alt="AgriSarathi Platform"  />
              </div>

              <div class="md:w-1/2 w-full mb-6 lg:mr-3 ">
                <p class="leading-relaxed mb-4 font-semibold md:text-3xl text-xl">Farm and Crop Planning </p>
                <p class="leading-relaxed mb-4 font-semibold text-lg md:text-xl">
                Improving farmer’s access to information, advisory about best practices through digital channels, access to high quality seeds, training, and capacity building on effectively adopting and using agritech, traceability and access to digital financial services. ASSIST has partnered with AgriSarathi - an agritech firm, to establish a white labelled, aggregate platform. 

                </p>
               
              </div>



            </div>
            <div class="flex flex-col md:flex-row justify-between items-center  my-10">

            <div class="md:w-1/2 w-full mb-6 lg:mr-3 ">
                <p class="leading-relaxed mb-4 font-semibold md:text-3xl text-xl">Production </p>
                <p class="leading-relaxed mb-4 font-semibold text-lg md:text-xl">
                Precision agriculture (smart micro irrigation, AI based soil testing, IoT, Drones and satellite imagery-based monitoring, controlled application of inputs based on AI based advisories, AI based pest prediction and management, robotics etc.), traceability, access to digital financial services. 

                </p>
               
              </div>

              <div class="md:w-1/2 mb-5">
                <img width={600} src={img3} alt="AgriSarathi Platform"  />
              </div>

              



            </div>
            <div class="flex flex-col md:flex-row justify-between items-center  my-10">

              <div class="md:w-1/2 mb-5">
                <img width={600} src={img3} alt="AgriSarathi Platform"  />
              </div>

              <div class="md:w-1/2 w-full mb-6 lg:mr-3 ">
                <p class="leading-relaxed mb-4 font-semibold md:text-3xl text-xl">Post-Harvest </p>
                <p class="leading-relaxed mb-4 font-semibold text-lg md:text-xl">
                Post harvest treatment, IoT enabled cold storage/warehouses, traceability, hi-tech packaging centers, AI based quality testing, AI and ML based logistics, robotics. 

                </p>
               
              </div>



            </div>

          </div>
        </section>
      </div>





      <OurProjects />



    </>
  )
}

export default DigitalAgriTrans