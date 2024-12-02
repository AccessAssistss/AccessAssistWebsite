import React from "react";

const JoinUsForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E7ECFF] p-5 mt-5">
      <div className="w-full max-w-7xl bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="md:text-4xl text-xl font-bold text-red-600 text-center mb-4 headingfont">
          READY TO JOIN US ?
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Fill in your details below, and we’ll be in touch with the next steps
        </p>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter Your Phone Number"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Id
            </label>
            <input
              type="email"
              placeholder="Enter Your Email Id"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Qualification
            </label>
            <input
              type="text"
              placeholder="Your Qualification"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Job Roles
            </label>
            <select
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
            >
              <option>Choose Job Role</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Designer</option>
              <option>Marketing</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload CV
            </label>
            <input
              type="file"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>
        </form>
        <div className="mt-8 text-center">
          <button className="bg-red-600 text-white text-lg font-medium py-3 px-8 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 w-1/2 transform hover:scale-105 transition-transform duration-300">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinUsForm;
