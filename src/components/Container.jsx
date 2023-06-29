import React from "react";

const Container = ({ bigText, smallText, followUpText }) => {
  return (
    <div className="flex flex-col items-center w-full m-2 mt-4 p-4 shadow-lg bg-gray-800 rounded-lg md:flex-row md:w-4/5">
        <div className="w-full md:w-1/3 m-1 mr-4 flex flex-col">
            <h4 className="w-full mb-4 text-2xl text-center font-extrabold text-green-500 md:text-5xl">{ bigText }</h4>
            <p className="w-full p-0 text-center font-light text-white">{ smallText }</p>
        </div>
        <div className="w-full md:w-2/3 m-1 text-justify md:text-left">
            <p className="text-white p-0">{ followUpText }</p>
        </div>
    </div>
  );
};

export default Container;