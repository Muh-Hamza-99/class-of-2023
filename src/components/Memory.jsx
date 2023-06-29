import React from "react";

const Memory = ({ text }) => {
  return (
    <div className="flex flex-col w-full items-center">
        <div className="flex items-center justify-center w-full m-2 mt-4 p-4 shadow-lg bg-gray-800 rounded-lg md:flex-row md:w-4/5">
            <p className="italic">{ `'${text}'` }</p>
        </div>
    </div>
  );
};

export default Memory;
