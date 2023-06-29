import React from "react";
import TextTooltip from "./TextTooltip";

const TextChartContainer = ({ data, description }) => {
  return (
    <div className="flex flex-col items-center w-full m-2 mt-4 p-4 shadow-lg bg-gray-800 rounded-lg md:flex-row md:w-4/5">
        <div className="w-full flex flex-col md:w-3/4">
            <div className="flex justify-center items-center flex-col flex-nowrap hover:cursor-pointer mb-4 md:flex-wrap md:flex-row md:mb-0">
                {
                    data.map((value, index) => <TextTooltip key={index} text={value.text} tooltip={value.tooltip} fontSize={value.fontSize} />)
                }
            </div>
        </div>
        <div className="w-4/5 m-1 text-justify md:text-left md:w-1/4">
            <p className="text-white p-0">{ description }</p>
        </div>
    </div>
  );
};

export default TextChartContainer;
