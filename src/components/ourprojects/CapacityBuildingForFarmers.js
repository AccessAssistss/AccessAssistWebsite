import React, { useEffect } from 'react'
import hero from '../../assets/CAPACITY BUILDING.png'
import img1 from '../../assets/PACKAGE_OF_PRACTICE.png'
import img2 from '../../assets/AGRI-PLATFORM_INFORMATION.png'
import img3 from '../../assets/image16.png'
import OurProjects from '../landingpage/OurProjects'

const CapacityBuildingForFarmers = () => {
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
      <p class="leading-relaxed mb-4 font-semibold md:text-2xl text-xl">PACKAGE OF PRACTICE </p>
        <p class="leading-relaxed mb-4 font-semibold">
        At the heart of our capacity-building efforts is the development and dissemination of comprehensive Packages of Practice (PoPs) tailored to a variety of crops. Our approach empowers farmers with practical, actionable knowledge through a series of expertly crafted video tutorials or print material. 
        </p>
        <p class="leading-relaxed mb-4 font-semibold">
        This multimedia experience covers every aspect of crop management, from soil preparation and pest control to harvest and post-harvest techniques. By integrating visual and step-by-step instructions, we ensure that farmers can easily grasp and implement best practices, ultimately enhancing their productivity and income. This innovative method not only bridges the knowledge gap but also fosters a more sustainable and resilient agricultural sector.
        </p>
        <p class="leading-relaxed mb-4 font-semibold">
        Additionally, we emphasize the preservation of invaluable knowledge and time-honoured practices passed down through generations. By integrating this legacy of practical experience with contemporary agricultural practices, we ensure that traditional wisdom is maintained and utilized to enhance modern farming techniques.
        </p>
        
      </div>


      <div class="md:w-1/2 flex justify-center">
        <img width={450} src={img1} alt="AgriSarathi Platform" className='flex justify-center' />
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
          <p class="leading-relaxed mb-4 font-semibold md:text-3xl text-xl text-center">AGRI-PLATFORM INFORMATION  </p>
          </div>
          <div className="mb-8">
            <p className="font-semibold g md:text-xl leading-relaxed">
            We are empowering farmers through the development of a comprehensive farm app with our partner. To ensure effective onboarding, we’ve produced engaging videos that demonstrate the value of this digital platform. As the App offers essential advisory services, including crop recommendations tailored to local conditions, climate adaptation tips, and access to soil testing services, in our videos Ram Charan helps his friend, Nand Lal to understand the various benefits of being associated with the App. By equipping farmers with this knowledge, we aim to enhance their decision-making capabilities and increase productivity, enabling them to harness the benefits of modern agriculture technologies. 
            </p>
          </div>
          

         
        </div>
      </section>
    </div>

    <div class="flex flex-col md:flex-row justify-between items-center  my-10">

    <div class="md:w-1/2 mb-5 flex justify-center">
        <img width={400} src={img3} alt="AgriSarathi Platform" className='flex justify-center' />
      </div>

      <div class="md:w-1/2 w-full mb-6 lg:mr-3 p-2 ">
      <p class="leading-relaxed mb-4 font-semibold md:text-2xl text-xl">Where Tailored Content Creation meets Our In-House Studio Skills </p>
        <p class="leading-relaxed mb-4 font-semibold">
        Our in-house studio plays a pivotal role in customizing educational content to meet the specific needs of Indian farmers. Leveraging local expertise and agricultural insights, we design and produce tailored video content that addresses the unique challenges and opportunities associated with each crop. 

        </p>
        <p class="leading-relaxed mb-4 font-semibold">
        Our team meticulously crafts these materials to resonate with local farming practices and conditions, ensuring relevance and practicality. By integrating region-specific information and culturally relevant approaches, we deliver content that is both accessible and actionable, empowering farmers with the knowledge they need to optimize their practices and boost their productivity.
        </p>
       
        
      </div>


     
    </div>



    <OurProjects />



  </>
  )
}

export default CapacityBuildingForFarmers