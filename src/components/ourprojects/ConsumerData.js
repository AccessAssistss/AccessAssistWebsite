import React, { useEffect } from 'react'
import hero from '../../assets/Group 1000006868.png'
import img1 from '../../assets/Group 1000006863.png'
import img2 from '../../assets/digital_lending.png'
import img3 from '../../assets/mobile_banking.png'
import img4 from '../../assets/pre-paid_instrumentsPPI.png'
import OurProjects from '../landingpage/OurProjects'

const ConsumerData = () => {
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


      <div class="flex flex-col md:flex-row justify-between items-center  md:my-20 my-10 ">

        <div class="md:w-1/2 w-full mb-6 lg:ml-10 p-2 ">
          <p class="leading-relaxed mb-4 font-semibold">
            Digital Finance’s growth over the past few years has been unprecedented. It reflects an increase in both opportunities for inclusive finance and the need for heightened trust in this evolving sector. As new and unconventional players continue to penetrate the market, the focus on establishing trust and credibility becomes increasingly critical and remains a top priority.
          </p>
          <p class="leading-relaxed mb-4 font-semibold">
            In an increasingly digitised world, financial inclusion is no exception; the rise in digital lending, mobile banking, and pre-paid instruments has unlocked new avenues for people to transact digitally. As per Reserve Bank of India’s (RBI) 2022 data, India accounted for 46% of all global digital transactions.
          </p>
          <p class="leading-relaxed mb-4 font-semibold">
            A crucial, and often less discussed, element of financial inclusion is financial health, whereby we consider not just access to affordable financial products but also the “soundness of (users’) individual finances”. Digitally driving financial health necessitates the need for strong, positive consumer protection and industry action
          </p>

        </div>


        <div class="md:w-1/2 flex justify-center">
          <img width={600} src={img1} alt="AgriSarathi Platform" />
        </div>
      </div>


      <div className='p-5 mb-10 -mt-10'>
        <div className="bg-[#FFF5CE] rounded-2xl p-8">
          
            <p className="font-semibold">
              ASSIST has developed a <span className="text-xl font-bold">Customer Sentiment Tool (CST) - DATAMOODS</span> 
           
            
             , to analyze millions of customer feedback data points, providing actionable insights into digital finance
              services across themes like customer service, products, and technology.
            </p>
            <p className="mt-4 font-semibold">
              ASSIST analyzed the following three different digital financial services and presented its findings in a
              report - <strong>Digital Finance Insights</strong>, Leveraging Customer Sentiments - For Consumer Protection
              and Financial Health.
            </p>

            {/* Image Section */}
            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 flex-col lg:flex-row">
              <img
                src= {img2}
                width={300}
                alt="Customer Sentiment Tool Insights"
                
              />
              <img
                src= {img3}
                width={300}
                alt="Customer Sentiment Tool Insights"
                
              />
              <img
                src= {img4}
                width={300}
                alt="Customer Sentiment Tool Insights"
                
              />
            </div>

            {/* Footer Content */}
            <p className="mt-6 font-semibold ">
              In addition to presenting data analysis, the report outlines actionable recommendations for industry
              stakeholders and policymakers to address specific gaps in customer service, product offerings, and technology
              as identified by our tool.
            </p>

            {/* Download Button */}
            <div className="mt-6 text-center">
              <button className="bg-red-500 text-white py-2 px-6 rounded-full shadow hover:bg-red-600 w-72">
                Download Report
              </button>
            </div>
          </div>
        </div>

        <div className="w-full px-10 lg:px-40  mb-10">
          <h2 className="text-xl  md:text-2xl font-semibold text-gray-800 mb-4">
            ASSIST: CUSTOMER SENTIMENT TOOL
          </h2>
          <video className="w-full h-auto rounded-2xl" controls>
            <source src="https://apis.agrisarathi.com/media/assist_website/linkedin_post.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      





      <OurProjects />



    </>
  )
}

export default ConsumerData