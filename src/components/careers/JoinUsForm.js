import React, { useState } from "react";
import axios from "axios";

const BASE_URL = "https://access-assist-admin-backend.vercel.app";

const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  qualification: "",
  state: "",
  country: "",
  jobRole: "",
  cv: null,
};

const JoinUsForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("phone", formData.phone);
      payload.append("email", formData.email);
      payload.append("qualification", formData.qualification);
      payload.append("state", formData.state);
      payload.append("country", formData.country);
      payload.append("jobRole", formData.jobRole);
      if (formData.cv) payload.append("cv", formData.cv);

      const res = await axios.post(`${BASE_URL}/api/job/create`, payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data?.success === false) {
        throw new Error(
          res.data.message || "Something went wrong. Please try again.",
        );
      }

      setSubmitStatus("success");
      setFormData(INITIAL_FORM);
    } catch (error) {
      console.error("Failed to Send Post Data", error);
      setSubmitStatus("error");
      setErrorMsg(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E7ECFF] p-5 mt-5">
      <div className="w-full max-w-7xl bg-white p-10 rounded-2xl shadow-lg">
        <h1 className="md:text-4xl text-xl font-bold text-[#ED1C24] text-center mb-4 headingfont">
          READY TO JOIN US ?
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Fill in your details below, and we’ll be in touch with the next steps
        </p>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
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
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
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
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
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
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
              placeholder="Your Qualification"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              placeholder="Enter Your State"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              placeholder="Enter Your Country"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>
          {/* <div>
            <label className="block text-gray-700 font-medium mb-2">
              Job Roles
            </label>
            <select
              name="jobRole"
              value={formData.jobRole}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
            >
              <option value="">Choose Job Role</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Designer</option>
              <option>Marketing</option>
            </select>
          </div> */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Job Roles
            </label>
            <input
              type="text"
              name="jobRole"
              value={formData.jobRole}
              onChange={handleChange}
              required
              placeholder="Enter Job Role You're Applying For"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Upload CV
            </label>
            <input
              type="file"
              name="cv"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
            />
          </div>

          {submitStatus === "success" && (
            <p className="sm:col-span-2 text-green-600 text-center font-medium">
              Application submitted successfully!
            </p>
          )}
          {submitStatus === "error" && (
            <p className="sm:col-span-2 text-red-500 text-center">{errorMsg}</p>
          )}

          <div className="sm:col-span-2 mt-8 text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#ED1C24] text-white text-lg font-medium py-3 px-8 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 w-1/2 transform hover:scale-105 transition-transform duration-300 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinUsForm;
