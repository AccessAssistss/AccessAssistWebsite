import React, { useEffect, useState } from "react";
import axios from "axios";
import ApplyJobModal from "./ApplyJobModal";
import JobDetailModal from "./JobDetailModal";

const BASE_URL = "https://access-assist-admin-backend.vercel.app"; 
function stripHtmlTags(html) {
  if (!html) return "";
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}

const JobOpenings = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [detailJob, setDetailJob] = useState(null); 
  const [selectedJob, setSelectedJob] = useState(null); 

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/jobpost/get-active-jobposts`);
        const jobsFromApi = res.data?.data || res.data?.jobPosts || res.data || [];
        setJobs(Array.isArray(jobsFromApi) ? jobsFromApi : []);
      } catch (error) {
        console.error("Failed to fetch job posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleApplyNow = (job) => {
    setDetailJob(null); 
    setSelectedJob(job);
  };

  return (
    <div className="md:mt-20 mt-16 md:px-20 px-5">
      <h2 className="text-center md:text-4xl text-xl font-bold text-[#ED1C24] mb-3 headingfont">
        CURRENT OPENINGS
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Explore our latest opportunities and find a role where you can grow with us.
      </p>

      {loading ? (
        <div className="text-center text-gray-500">Loading job openings...</div>
      ) : jobs.length === 0 ? (
  <div className="text-center py-16">
    <div className="text-5xl mb-4">🗂️</div>
    <h3 className="text-lg font-semibold text-gray-700 mb-2">
      No Open Positions Right Now
    </h3>
    <p className="text-gray-500 max-w-md mx-auto">
      We don't have any active openings at the moment, but new opportunities
      come up often. Check back soon!
    </p>
  </div>
) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="flex flex-col justify-between bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{job.title}</h3>
                <p className="text-sm text-gray-500 mb-1">📍 {job.location}</p>
                {job.experience && (
                  <p className="text-sm text-gray-500 mb-1">💼 {job.experience}</p>
                )}
                {/* {job.endDate && (
                  <p className="text-sm text-gray-500 mb-4">
                    🗓️ Apply before {new Date(job.endDate).toLocaleDateString("en-GB")}
                  </p>
                )} */}
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {stripHtmlTags(job.description)}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={() => setDetailJob(job)}
                  className="flex-1 border border-[#ED1C24] text-[#ED1C24] font-medium py-2.5 rounded-md hover:bg-[#FFE997]/40 transition-colors duration-300"
                >
                  More Info
                </button>
                <button
                  onClick={() => handleApplyNow(job)}
                  className="flex-1 bg-[#ED1C24] text-white font-medium py-2.5 rounded-md hover:bg-red-700 transition-colors duration-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {detailJob && (
        <JobDetailModal
          job={detailJob}
          onClose={() => setDetailJob(null)}
          onApply={() => handleApplyNow(detailJob)}
        />
      )}

      {selectedJob && (
        <ApplyJobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default JobOpenings;