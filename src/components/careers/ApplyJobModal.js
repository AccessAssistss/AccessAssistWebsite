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
  cv: null,
};

const ApplyJobModal = ({ job, onClose }) => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
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
  setSubmitting(true);
  setSubmitStatus(null);

  try {
    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("phone", formData.phone);
    payload.append("email", formData.email);
    payload.append("qualification", formData.qualification);
    payload.append("state", formData.state);
    payload.append("country", formData.country);
    payload.append("jobRole", job.title);
    if (formData.cv) payload.append("cv", formData.cv);

    const res = await axios.post(`${BASE_URL}/api/job/create`, payload, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    // Backend can return HTTP 200 even on failure (e.g. Multer file-size error)
    if (res.data?.success === false) {
      throw new Error(res.data.message || "Something went wrong. Please try again.");
    }

    setSubmitStatus("success");
    setFormData(INITIAL_FORM);
  } catch (error) {
    setSubmitStatus("error");
    setErrorMsg(
      error.response?.data?.message || error.message || "Something went wrong. Please try again."
    );
  } finally {
    setSubmitting(false);
  }
};

  if (!job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 md:p-10 animate-[fadeIn_0.2s_ease-out]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-[#ED1C24] transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-[#ED1C24] headingfont">
            Apply for {job.title}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            {job.location}
            {job.experience && <> • {job.experience}</>}
          </p>
        </div>

        {submitStatus === "success" ? (
          <div className="text-center py-10">
            <p className="text-green-600 text-lg font-semibold mb-2">
              Application submitted!
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Thanks for applying for {job.title}. Our team will reach out soon.
            </p>
            <button
              onClick={onClose}
              className="bg-[#ED1C24] text-white font-medium px-8 py-2.5 rounded-md hover:bg-red-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Id</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email Id"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Qualification</label>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                placeholder="Your Qualification"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter Your State"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter Your Country"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">Upload CV</label>
              <input
                type="file"
                name="cv"
                onChange={handleChange}
                accept=".pdf,.doc,.docx"
                required
                className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-red-400 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:bg-[#ED1C24] file:text-white"
              />
            </div>

            {submitStatus === "error" && (
              <p className="sm:col-span-2 text-red-500 text-sm text-center">{errorMsg}</p>
            )}

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#ED1C24] text-white text-lg font-medium py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 transform hover:scale-[1.02] transition-transform duration-300 disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ApplyJobModal;