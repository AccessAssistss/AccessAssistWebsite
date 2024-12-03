import React from 'react'
import img1 from '../../assets/Rectangle 1716.png'

const DigitalInvestment = () => {
    return (
        <div class="flex flex-col md:flex-row justify-between items-center  md:my-20 my-10">

            <div class="md:w-1/2 flex justify-center">
                <img width={450} src={img1} alt="AgriSarathi Platform" className='flex justify-center' />
            </div>

            <div class="md:w-1/2 w-full mb-6 lg:ml-10 p-2 ">
                <p class="leading-relaxed mb-4 font-semibold md:text-2xl text-xl mt-5 md:mt-0">Digital Interventions  </p>
                <p class="leading-relaxed mb-4 font-semibold">
                    A core enabler of transformation, encompassing
                </p>
                <p class="leading-relaxed mb-4 font-semibold">
                    Digital Finance: Leveraging Customer Sentiments for consumer protection and financial health

                </p>
                <p class="leading-relaxed mb-4 font-semibold">
                    Digital Transformation: Supporting organizations through digitalization, optimizing processes for efficiency, transparency, and sustainability.

                </p>
                <p class="leading-relaxed mb-4 font-semibold">
                    Data for Development: Leveraging big data and analytics to create informed, data-driven decisions for better impact in development projects.


                </p>
                <p class="leading-relaxed mb-4 font-semibold">
                    Data for Development: Leveraging big data and analytics to create informed, data-driven decisions for better impact in development projects.


                </p>

            </div>



        </div>
    )
}

export default DigitalInvestment