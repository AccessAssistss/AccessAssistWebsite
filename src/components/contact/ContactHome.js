import React, { useEffect } from "react";
import img1 from '../../assets/image (17).png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Divider } from "@mui/material";

const ContactPage = () => {
  useEffect(() => {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'instant',
    });
}, [])

  return (
    <>
      <div className="bg-gradient-to-r from-[#FFE997] to-[#FFCF1F] text-gray-800">
        {/* Header Section */}
        <div className="text-center py-8  ">
          <h1 className="text-xl md:text-4xl font-bold text-[#ED1C24] headingfont">
            GET IN TOUCH WITH US. WE'RE HERE TO ASSIST YOU
          </h1>
        </div>

        {/* Main Section */}
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-12">
          {/* Contact Information */}
          <div className="space-y-6 p-4 rounded-2xl border-2 border-black transform hover:scale-105 transition-transform duration-300">
            <div className="">
              <h2 className="text-lg font-bold">Headquarters</h2>
              <p className="text-sm font-semibold">
                House No. 63, 3rd Floor, Lane 2, Westend Marg, Saidulajab, New Delhi 110030
              </p>
            </div>
            <Divider className="bg-black"/>
            <div className="">
              <h2 className="text-lg font-bold">Regional Office</h2>
              <p className="text-sm font-semibold">
                B3-403, Rishita Manhattan, Gomti Nagar Extension, Lucknow UP - 226012
              </p>
            </div>
            <Divider className="bg-black"/>
            
              <div>
                <h3 className="text-lg font-bold">Call Us</h3>
                <p className="text-sm font-semibold">Monday - Friday, 10:00 AM - 6:00 PM</p>
                <p className="text-sm font-semibold">+91-8595202302</p>
              </div>
              <Divider className="bg-black"/>
              
              <div className="mt-4">
                <h3 className="text-lg font-bold">Email Support</h3>
                <p className="text-sm font-semibold">communications@accessassist.in</p>
              </div>
              <Divider className="bg-black"/>
              <div className="flex space-x-4 mt-4 justify-center ">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 transition"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="#"
                  className="text-blue-700 hover:text-blue-900 transition"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href="#"
                  className="text-pink-600 hover:text-pink-800 transition"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>
           
          </div>

          {/* Map Section */}
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14022.69656118316!2d77.19057275855924!3d28.519450165624125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c7085ea94b%3A0xcd25ce246a4b618a!2sAccess%20Assist!5e0!3m2!1sen!2sin!4v1732614085793!5m2!1sen!2sin"
              width="100%"
              height="500"
              className="rounded-2xl border border-gray-300 shadow-md"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when">

            </iframe>
          </div>
        </div>

      </div>


      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 py-12">
        {/* Image Section */}
        <div className="flex justify-center items-center ">
          <img
            width={450}
            src={img1}
            alt="Contact"
            className="transform hover:scale-105 transition-transform duration-300"
           
          />
        </div>

        {/* Form */}
        <div className="bg-gradient-to-br from-[#E7ECFF] to-[#D1D8FF] p-8 rounded-3xl shadow-lg ">
          <h2 className="text-2xl font-extrabold mb-6 text-[#ED1C24] text-center">
            Get in Touch with Us
          </h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-red-400 text-gray-900 sm:text-base px-4 py-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-red-400 text-gray-900 sm:text-base px-4 py-2"
                placeholder="example@company.com"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-800"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-red-400 text-gray-900 sm:text-base px-4 py-2"
                placeholder="+91 000 000 0000"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-800"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-red-400 text-gray-900 sm:text-base px-4 py-2"
                placeholder="Leave us a message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg hover:from-red-600 hover:to-red-800 transition-transform duration-300 transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </>
  );
};

export default ContactPage;
