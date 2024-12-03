import React from 'react';

const OurBelief = () => {
  return (
    <div className="p-8 bg-white">
      {/* Title Section */}
      <div className="mb-8">
        <h1 className="md:text-3xl text-2xl font-bold text-[#ED1C24] mb-4 headingfont">OUR BELIEF</h1>
        <p className="text-xl">
          We believe that ‘Samwad’—conversations with policymakers or markets—serve as a trigger for sparking a process of change. Whether it is through Community of Practice or Collaborations, these crucial dialogues lead the way for effective actions with a focus on both market creation and unlocking of finance.
        </p>
      </div>

      {/* Flow Chart Section */}
      <div className="grid grid-cols-2 gap-4 items-center">
        {/* Conversations Box */}
        <div className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4 ">
          <div className="text-4xl mb-2">💬</div>
          <p className="text-lg font-semibold">Conversations</p>
        </div>

        {/* Data Insights Box */}
        <div className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4">
          <div className="text-4xl mb-2">📊</div>
          <p className="text-lg font-semibold">Data Insights</p>
        </div>

        {/* Market Creation Box */}
        <div className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4">
          <div className="text-4xl mb-2">📈</div>
          <p className="text-lg font-semibold">Market Creation</p>
        </div>

        {/* Unlocking Finance Box */}
        <div className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-4">
          <div className="text-4xl mb-2">🔓</div>
          <p className="text-lg font-semibold">Unlocking Finance</p>
        </div>

        {/* Action Box */}
        <div className="col-span-2 flex flex-col items-center justify-center bg-blue-500 text-white rounded-lg p-4 mt-4">
          <div className="text-4xl mb-2">🎯</div>
          <p className="text-lg font-semibold">Action</p>
        </div>
      </div>
    </div>
  );
};

export default OurBelief;
