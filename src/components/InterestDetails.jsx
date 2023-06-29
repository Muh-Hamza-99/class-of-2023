import React from "react";

const InterestDetails = ({ interestDetails }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-{1/10} m-2 mt-4 p-4 shadow-lg text-white bg-gray-800 rounded-3xl transition-all duration-100 ease-linear hover:-translate-y-2 hover:rounded-lg hover:shadow-2xl hover:bg-gray-900 group">
        <div className="flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto bg-gray-800 text-green-500 rounded-3xl">{ interestDetails.icon }</div>
        <span className="">{ interestDetails.name }</span>
        <span className="font-light text-sm italic">{ interestDetails.description }</span>
    </div>
  );
};

export default InterestDetails;
