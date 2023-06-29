import React from "react";

const CompactContainer = ({ bigText, smallText, disapper=true }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-4 p-4 shadow-lg bg-gray-800 rounded-3xl group transition-all duration-100 ease-linear hover:-translate-y-2 hover:rounded-lg hover:shadow-2xl hover:bg-gray-900 text-white">
        <div className="w-full m-1 flex flex-col">
            <h4 className="w-full mb-4 text-2xl text-center font-extrabold text-green-500 md:text-5xl">{ bigText }</h4>
            {
              disapper ? (
                <p className="w-full p-0 text-center font-light text-white invisible transition-all duration-100 ease-linear group-hover:visible">{ smallText }</p>
              ) : (
                <p className="w-full p-0 text-center font-light text-white">{ smallText }</p>
              )
            }
        </div>
    </div>
  );
};

export default CompactContainer;
