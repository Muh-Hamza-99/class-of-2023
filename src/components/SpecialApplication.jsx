import React from "react";
import IlluminateText from "./IlluminateText";

const SpecialApplication = ({ name, achievement, academics, degree, whatMadeYouStandOut }) => {
  return (
    <div className="flex flex-col items-center w-full m-2 mt-4 p-6 shadow-lg bg-gray-800 rounded-lg md:flex-row md:w-4/5">
        <div className="flex w-full flex-col item-center justify-center md:w-1/3 mr-4">
            <h4 className="w-full mb-4 text-2xl text-center font-bold text-green-500 md:text-3xl">{ name }</h4>
            <div className="flex flex-col">
                <span className="mb-2 text-center">{ achievement }</span>
                <span className="font-light text-center text-sm">{ academics }</span>
            </div>
        </div>
        <div className="w-full md:w-2/3 mt-6 flex flex-col ml-2 md:mt-0">
            <span className="mb-4">Degree: <IlluminateText text={ degree } /></span>
            <span className="font-semibold mb-2">What do you think, made you stand out?</span>
            <p className="italic font-light">{ `"${ whatMadeYouStandOut }"` }</p>
        </div>
    </div>
  );
};

export default SpecialApplication;