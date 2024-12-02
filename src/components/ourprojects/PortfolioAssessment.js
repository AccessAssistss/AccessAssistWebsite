import React, { useEffect } from 'react';
import hero from '../../assets/portfolio_assessment.png'
import img1 from '../../assets/Rectangle 2157.png'
import img2 from '../../assets/Group 1000006883.png'
import img3 from '../../assets/_CD5C3761-4D1B-4327-9A2B-73AC8742DC84_.png'

import OurProjects from '../landingpage/OurProjects'


const PortfolioAssessment = () => {
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

    
      <div class="flex flex-col md:flex-row justify-between items-center  md:my-20 my-10">
        
        <div class="md:w-1/2 w-full mb-6 lg:ml-20 p-4 ">
          <p class="font-semibold leading-relaxed mb-4">
          ASSIST was commissioned to undertake a diagnostic for climate financing for an NBFC in India where it conducted a comprehensive analysis of the NBFC’s loan portfolio (exceeding INR 2,500 cr), and scrutinized their Environmental, Social, and Governance (ESG) policy to assess its alignment with industry best practices. 
          </p>
          <p class="font-semibold leading-relaxed mb-4">
          Engaging in in-depth interviews with senior leadership, ASSIST explored demand dynamics and strategic priorities within the organisation.
          </p>
          <p class="font-semibold leading-relaxed mb-4">
          Additionally, it also undertook a detailed examination of over 20 business clusters, analysing their respective data and financial metrics. This multifaceted approach enabled the organisation to gain insights into the existing portfolio performance and identify opportunities for enhancing climate financing initiatives, thereby positioning the NBFC for sustainable growth in a rapidly evolving market landscape.
          </p>
          <p class="font-semibold leading-relaxed mb-6">
            Additionally, it builds climate resilience by safeguarding farmers' livelihoods against climate-related risks such as erratic weather patterns and prolonged droughts.
          </p>
        </div>

       
        <div class="md:w-1/2">
          <img width={440} src={img1} alt="AgriSarathi Platform" className='flex justify-center'  />
        </div>

      </div>

      <div className='p-5 mb-10'>

      <section className="bg-[#FFF5CE] py-12 px-6 md:px-16 rounded-2xl">
      <div className="max-w-7xl mx-auto ">
        {/* Top Text */}
        <div className="mb-8">
          <p className="font-semibold text-lg md:text-xl leading-relaxed">
            As part of this diagnostic process, ASSIST engaged with over 480
            branches across India to identify the scope for climate financing.
            Our team meticulously studied the specific clusters served by each
            branch, conducting in-depth interviews and discussions with branch
            managers and staff to gain insights into the local market dynamics
            and customer needs.
          </p>
        </div>

        {/* Content Grid */}
       
          {/* Left Image */}
          <div className="flex justify-center mb-5">
            <img
              src={img2}
              alt="Mobile app in agriculture"
              
            />
          </div>  

          <div className="grid md:grid-cols-2 gap-6 items-center">
            <p className="font-semibold text-lg md:text-xl leading-relaxed">
              Following this analysis, ASSIST developed targeted product
              interventions tailored to the specific needs of the NBFC and
              provided market estimates for each proposed product, ensuring they
              align with prevailing market conditions. To facilitate
              decision-making, a product viability assessment framework, which
              rated how well each product would perform within their lending
              offerings, was also implemented. This comprehensive approach
              positions the NBFC to effectively leverage its strengths and
              capitalise on emerging opportunities in the climate finance
              sector.
            </p>
         

        {/* Bottom Image */}
        <div className="flex justify-center mt-8">
          <img
            src={img3}
            alt="Tablet analyzing agriculture data"
            
          />
        </div>
        </div>
      </div>
    </section>
    </div>
    

    <OurProjects/>



  </>
  )
}

export default PortfolioAssessment