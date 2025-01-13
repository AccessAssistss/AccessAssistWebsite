import React from 'react'
import img from '../../assets/Screenshot 2025-01-13 171308 (1).jpg'

const KnowledgeCapitalHome = () => {
  return (
    <div className="max-w-8xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <div className="mb-6">
        {/* Full-width Heading */}
        <h1 className="text-4xl font-extrabold text-gray-800 text-center lg:text-left mb-6 md:hidden">
          Empowering Financial Institutions to Support the UP Micro-Irrigation Project
        </h1>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Right side: Image (on small screens, placed at the top) */}
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 md:mr-6">
          <img 
            src={img}
            
            alt="Micro Irrigation Project"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Left side: Text content */}
        <div className="w-full lg:w-2/3 pr-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Uttar Pradesh Micro-Irrigation Project (UP MIP) was launched in July 2023 by the Uttar Pradesh Government, supported by 2030 WRG (World Bank) under the UP Accelerator Program. This initiative aims to expand irrigated areas from 300,000 hectares to 750,000 hectares by 2028. The program offers financial assistance, including 80-90% subsidies, for small and marginal farmers to install efficient micro-irrigation systems like drip, sprinkler, and rain gun technologies, which help conserve water and boost agricultural productivity.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The collaboration between the UP Government and 2030 WRG (World Bank) provides farmers with affordable access to advanced irrigation systems, targeting an additional 6 lakh farmers over the next five years. Financial Institutions (FIs) play a crucial role in supporting this initiative by offering financing solutions to farmers who need to cover the costs of these systems and related infrastructure.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            By partnering with UP MIP, FIs can promote their loan offerings, gain visibility through co-branding initiatives, and contribute to financial inclusion. The expected investment in the project will reach ₹1,050 crore by 2028, with ample opportunities for FIs to engage with farmers and support their growth.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            For more details and to explore how your institution can get involved, download the brochure today.
          </p>
          <div className="mt-10">
            <a
              href="https://apis.agrisarathi.com/media/Micro-Irrigation%20Project%206%20pg%2012.10-1.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KnowledgeCapitalHome
