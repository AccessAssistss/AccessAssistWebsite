import React from 'react'
import img1 from '../../assets/image7654345.png'

const Financial = () => {
    return (
        <div class="flex flex-col md:flex-row justify-between items-center  md:my-20 my-10">
            <div class="md:w-1/2 flex justify-center">
                <img width={450} src={img1} alt="AgriSarathi Platform" className='flex justify-center' />
            </div>

            <div class="md:w-1/2 w-full mb-6 lg:ml-10 p-2  ">
                <p class="leading-relaxed mb-4 font-semibold md:text-2xl text-xl mt-5 md:mt-0">Inclusive Finance </p>
                <p class="leading-relaxed mb-4 font-semibold">
                Addresses the broader ecosystem of financial well-being, focusing on
                </p>
                <p class="leading-relaxed mb-4 font-semibold">
                Financial Health: Promoting initiatives that ensure individuals and communities have financial security and resilience.

                </p>
                <p class="leading-relaxed mb-4 font-semibold">
                Financial Literacy: Building capacity through education, ensuring people understand financial products and can make informed decisions.

                </p>
                <p class="leading-relaxed mb-4 font-semibold">
                Income Generation: Supporting micro-enterprises, job creation, and self-employment as pathways to economic empowerment.

                </p>
                <p class="leading-relaxed mb-4 font-semibold">
                Inclusive Financial Products: Crafting strategies for designing products that cater to the needs of low-income and marginalized groups, from microloans to insurance solutions.


                </p>

            </div>



        </div>
    )
}

export default Financial