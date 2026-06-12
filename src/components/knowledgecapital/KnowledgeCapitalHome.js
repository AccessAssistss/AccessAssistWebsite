import React, { useEffect, useState } from "react";
import axios from "axios";

const FileModal = ({ files, title, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const getFileIcon = (fileName = "") => {
    const ext = fileName.split(".").pop().toLowerCase();
    if (["pdf"].includes(ext)) return "fa-file-pdf";
    if (["doc", "docx"].includes(ext)) return "fa-file-word";
    if (["xls", "xlsx"].includes(ext)) return "fa-file-excel";
    if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) return "fa-file-image";
    if (["zip", "rar"].includes(ext)) return "fa-file-zipper";
    return "fa-file";
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-md mx-4 max-h-[75vh] flex flex-col"
        style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <i className="fa-solid fa-folder-open text-blue-500 text-sm" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-gray-800">Files</h3>
              {title && (
                <p className="text-xs text-gray-400 truncate max-w-[220px]">{title}</p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
          >
            <i className="fa-solid fa-xmark text-sm" />
          </button>
        </div>

        {/* File count badge */}
        <div className="px-5 pt-3 pb-1">
          <span className="text-xs text-gray-400">{files.length} file{files.length !== 1 ? "s" : ""} available</span>
        </div>

        {/* File List */}
        <div className="overflow-y-auto px-4 pb-4 flex flex-col gap-1.5">
          {files.map((file, i) => (
            <a
              key={i}
              href={file.fileUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all group cursor-pointer"
            >
              <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-white transition-colors">
                <i className={`fa-solid ${getFileIcon(file.fileName)} text-gray-400 text-sm group-hover:text-blue-500 transition-colors`} />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-700 font-medium truncate group-hover:text-blue-600 transition-colors">
                  {file.fileName || `File ${i + 1}`}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {(file.fileName || "").split(".").pop().toUpperCase() || "FILE"} · Click to open
                </p>
              </div>
              <i className="fa-solid fa-arrow-up-right-from-square text-gray-200 group-hover:text-blue-400 text-xs transition-colors flex-shrink-0" />
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-gray-50 bg-gray-50 rounded-b-2xl">
          <p className="text-xs text-gray-300 text-center">Press Esc or click outside to close</p>
        </div>
      </div>
    </div>
  );
};

const KnowledgeCapitalHome = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalData, setModalData] = useState(null); // { files, title }

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://access-assist-admin-backend.vercel.app/api/project/getAllActiveProjects",
        );
        setProjects(response.data.projects || []);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col items-center gap-4">
        <span className="loading loading-spinner loading-lg text-primary" />
        <p className="text-gray-500 text-sm">Loading projects…</p>
      </div>
    );
  }

  return (
    <>
      {modalData && (
        <FileModal
          files={modalData.files}
          title={modalData.title}
          onClose={() => setModalData(null)}
        />
      )}

      <div className="max-w-5xl mx-auto px-6 py-10">
        {projects.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-gray-400 text-sm">No projects found.</p>
          </div>
        ) : (
          projects.map((project, index) => {
            const isReversed = index % 2 !== 0;
            const files = project.files || [];

            return (
              <div key={project._id || index}>
                <div
                  className={`flex flex-col lg:flex-row items-stretch gap-10 py-12 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="w-full lg:w-2/5 flex-shrink-0">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover rounded-xl"
                      />
                    ) : (
                      <div className="w-full h-64 lg:h-full rounded-xl bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-300 text-sm">No image</span>
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div className="w-full lg:w-3/5 flex flex-col justify-center gap-4">
                    {project.title && (
                      <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
                    )}

                    {project.description && (
                      <p className="text-base text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    )}

                    {/* Single "See Files" button */}
                    {files.length > 0 && (
                      <div className="mt-2">
                        <button
                          onClick={() =>
                            setModalData({ files, title: project.title || "" })
                          }
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-gray-700 text-sm font-medium transition-all duration-200"
                        >
                          <i className="fa-solid fa-folder-open text-blue-400" />
                          See Files
                          <span className="ml-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 text-gray-500 text-xs font-semibold">
                            {files.length}
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {index < projects.length - 1 && (
                  <hr className="border-t border-gray-200" />
                )}
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default KnowledgeCapitalHome;