import React from "react";

const JobDetailModal = ({ job, onClose, onApply }) => {
  if (!job) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 md:p-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-[#ED1C24] transition-colors"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-[#ED1C24] headingfont">
            {job.title}
          </h2>
          <p className="text-gray-500 text-sm mt-2">
             {job.location}
            {job.experience && <> •  {job.experience}</>}
            {/* {job.endDate && (
              <> •  Apply before {new Date(job.endDate).toLocaleDateString("en-GB")}</>
            )} */}
          </p>
        </div>

        <div
          className="prose max-w-none text-gray-700 text-sm leading-relaxed mb-8"
          dangerouslySetInnerHTML={{ __html: job.description }}
        />

        <button
          onClick={onApply}
          className="w-full bg-[#ED1C24] text-white text-lg font-medium py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 transform hover:scale-[1.02] transition-transform duration-300"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetailModal;