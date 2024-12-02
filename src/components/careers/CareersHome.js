import React, { useEffect } from 'react'
import img1 from '../../assets/Careers_step_in.png'
import img2 from '../../assets/Step-In_if_you_are.png'
import JoinUsForm from './JoinUsForm'

const CareersHome = () => {
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
        <img src={img1} alt='' />
      </div>
      <div className='mt-12 -mb-8'>
        <h2 className="text-center md:text-4xl text-xl font-bold text-red-600 mb-6 headingfont">
        STEP-IN IF YOU ARE
        </h2>
      </div>
      <div className='lg:p-20 p-5'>
        <img src={img2} alt='' />
      </div>
      <div>
        <JoinUsForm/>
      </div>
    </>
  )
}

export default CareersHome