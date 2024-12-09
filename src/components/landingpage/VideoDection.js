import React from 'react';


const VideoDection = () => {
  return (
    <div className="p-4 space-y-8">
      {/* Container for videos in a column layout */}
      <div className="flex flex-wrap justify-center gap-8">

        {/* First Video Section */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <h2 className="text-xl  md:text-2xl font-semibold text-gray-800 mb-4">
            ASSIST: CUSTOMER SENTIMENT TOOL
          </h2>
          <video className="w-full h-auto rounded-lg" controls>
            <source src="https://apis.agrisarathi.com/media/assist_website/linkedin_post.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Second Video Section */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <h2 className="text-xl  md:text-2xl font-semibold text-gray-800 mb-4">
            उन्नत कृषि और प्रगतिशील कृषक का सारथी
          </h2>
          <video className="w-full h-auto rounded-lg" controls>
            <source src="https://apis.agrisarathi.com/media/assist_website/agresarthi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </div>
  );
};

export default VideoDection;
