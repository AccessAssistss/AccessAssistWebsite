import React from 'react'
import Hero from './Hero'
import Ourproject from '../landingpage/OurProjects' 
import tech from '../../assets/tech_driven_data-led (1).png' 
import Proficiency from './Proficiency'

const OurWorkHome = () => {
  return (
    <div>
      <Hero/>
      <Proficiency/>
      <Ourproject/>
      <div className='mt-10 md:p-10 md:px-10 px-5  hover:scale-105 transform transition-all duration-300' >
        <img src={tech} alt=''/>
      </div>
    </div>
  )
}

export default OurWorkHome