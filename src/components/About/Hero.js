import React, { useEffect } from 'react'
import img1 from'../../assets/Group 1000003611.png'
import img2 from'../../assets/about.png'
import img3 from'../../assets/Group 1000006461.png'


const Hero = () => {
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
        <img src={img1} alt=''/>
       
    </div>
    <div className='md:px-20 md:py-20 px-10 py-10'>
        <img src={img2} alt=''/>
       
    </div>
    <div className='p-5' >
        <img src={img3} alt=''/>
       
    </div>
    
    </>
  )
}

export default Hero