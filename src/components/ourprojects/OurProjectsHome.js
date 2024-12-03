import React, { useEffect } from 'react'
import img from '../../assets/Frame 1000006953.png'
import group1 from '../../assets/CAPACITY BUILDING FOR FARMERS.png';
import group2 from '../../assets/CONSUMER DATA ANALYSIS ON DIGITAL FINANCIAL SERVICES.png';
import group3 from '../../assets/CONSUMER DATA ANALYSIS ON DIGITAL FINANCIAL SERVICES (1).png';
import group4 from '../../assets/sidbi.png';
import group5 from '../../assets/Frame 1000006963.png';
import group6 from '../../assets/Frame 1000006964.png';
import group7 from '../../assets/Frame 1000006966.png';
import group8 from '../../assets/Frame 1000006967.png';
import group9 from '../../assets/Frame 1000006968.png';
import group10 from '../../assets/Frame 1000006969.png';
import { useNavigate } from 'react-router-dom';

const images = [
  { src: group1, alt: 'Client 1', path: 'capacitybuildingforfarmers' },
  { src: group2, alt: 'Client 2', path: 'consumerdata' },
  { src: group3, alt: 'Client 3', path: 'digitalagritrans' },
  { src: group4, alt: 'Client 4' },
  { src: group5, alt: 'Client 5' },
  { src: group6, alt: 'Client 6' },
  { src: group7, alt: 'Client 7' },
  { src: group8, alt: 'Client 8', path: 'advisoryforfarmers' },
  { src: group9, alt: 'Client 9', path: 'marketscan' },
  { src: group10, alt: 'Client 10', path: 'portfolioassessment' },
];

const OurProjectsHome = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [])

  const navigate = useNavigate()
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-[#FFE997] to-[#FFCF1F] p-6  ">
          {/* Left Section: Text */}
          <div className="w-full md:w-1/2 p-4">
            <h2 className="md:text-4xl text-2xl font-bold text-[#ED1C24] mb-4 leading-tight headingfont">
              DRIVING SOCIAL CHANGE THROUGH OUR PROJECTS
            </h2>
            <p className="md:text-xl mt-5">
              Explore the projects that reflect our mission to uplift communities and foster meaningful, sustainable change.
            </p>
          </div>

          {/* Right Section: Image */}
          <div className="w-full md:w-1/2 p-4">
            <img
              src={img}
              alt="Driving Social Change"

            />
          </div>
        </div>
      </div>
      <div className='bg-[#E7ECFF]'>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 ">
            {images.map((image, index) => (
              <div key={index} className="flex justify-center items-center px-2 py-4 ">
                <img
                  onClick={() => {
                    if (image.path) {
                      navigate(`/${image.path}`)
                    }
                  }}
                  src={image.src}
                  alt={image.alt}
                  className="cursor-pointer"
                />
              </div>
            ))}
          </div>
          <div className="my-8 text-center">
            <button className="px-6 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-100">
              View more
            </button>
          </div>

        </div>

      </div>


    </>
  )
}

export default OurProjectsHome