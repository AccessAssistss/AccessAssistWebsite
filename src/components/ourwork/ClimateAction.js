import React from 'react'
import img1 from '../../assets/Rectangle 1716 (1).png'

const ClimateAction = () => {
  return (

    <div class="flex flex-col md:flex-row justify-between items-center  md:my-20 my-10">
    <div class="md:w-1/2 flex justify-center">
        <img width={450} src={img1} alt="AgriSarathi Platform" className='flex justify-center' />
    </div>

    <div class="md:w-1/2 w-full mb-6 lg:ml-10 p-2 ">
        <p class="leading-relaxed mb-4 font-semibold md:text-2xl text-xl mt-5 md:mt-0">Climate Action
        </p>
        <p class="leading-relaxed mb-4 font-semibold">
            We help institutions understand and mitigate financial risks arising from climate change, ensuring resilience. We also undergo research and develop strategies to facilitate the dialogue around climate finance promoting environmental, social, and governance (ESG) criteria in investment decisions.
        </p>
    </div>    
</div>
  )
}

export default ClimateAction