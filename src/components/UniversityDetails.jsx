import React from "react";

const UniversityDetails = ({ universityDetails }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center w-{1/10} m-2 mt-4 p-4 shadow-lg text-white bg-gray-800 rounded-3xl transition-all duration-100 ease-linear hover:-translate-y-2 hover:rounded-lg hover:shadow-2xl hover:bg-gray-900 group">
        <span className="font-semibold mb-2">{ universityDetails.name }</span>
        { 
            (universityDetails.acceptances === 0 && universityDetails.rejections) === 0 ? 
            <span className="invisible font-light group-hover:visible transition-all duration-100 ease-linear text-xs">No decisions yet.</span> : 
            (<div className="w-full flex justify-between">
                <span className="invisible font-light group-hover:visible transition-all duration-100 ease-linear text-xs text-green-500">{ `Accepted: ${universityDetails.acceptances}` }</span>
                <span className="invisible font-light group-hover:visible transition-all duration-100 ease-linear text-xs text-red-500">{ `Rejected: ${universityDetails.rejections}` }</span>
            </div>)
        }
    </div>
  );
};

export default UniversityDetails;