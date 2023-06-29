import React from "react";

const TextTooltip = ({ text, tooltip, fontSize }) => {
  return (
    <span className={`flex justify-between items-center relative mx-0 text-${fontSize} group transition-all duration-100 ease-linear group md:mx-8`}>
      <span className="transition-all duration-100 ease-linear group-hover:text-green-500 group-hover:drop-shadow-[0px_15px_20px_rgba(34,197,94,0.5)]">{ text }</span>
      <span className="text-xs text-white bg-gray-900 p-2 ml-2 rounded-md invisible group-hover:visible">{ tooltip }</span>
    </span>
  );
};

export default TextTooltip;