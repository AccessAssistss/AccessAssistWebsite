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
            <source src="https://www.dropbox.com/scl/fi/lwnrvh8lon20e40m9vubj/agresarthi.mp4?e=1" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Second Video Section */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <h2 className="text-xl  md:text-2xl font-semibold text-gray-800 mb-4">
            उन्नत कृषि और प्रगतिशील कृषक का सारथी
          </h2>
          <video className="w-full h-auto rounded-lg" controls>
            <source src="path-to-your-video-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </div>
  );
};

export default VideoDection;
