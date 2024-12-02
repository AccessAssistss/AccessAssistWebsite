import React from 'react'
import Hero from './Hero'
import Ourproject from '../landingpage/OurProjects' 
import tech from '../../assets/tech_driven_data-led.png' 
import Proficiency from './Proficiency'

const OurWorkHome = () => {
  return (
    <div>
      <Hero/>
      <Proficiency/>
      <Ourproject/>
      <div className='mt-10 lg:p-10 p-5 hover:scale-105 transform transition-all duration-300' >
        <img src={tech} alt=''/>
      </div>
    </div>
  )
}

export default OurWorkHome