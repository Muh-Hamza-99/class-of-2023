import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <h4 className="w-full text-left text-3xl font-medium inline-block relative mt-4 mb-2 p-4 pl-2 md:w-4/5 before:content-[''] before:absolute before:w-1/2 before:h-px before:bottom before:left-1/4 border-b-gray-500 border-b-[2px] border-solid">{ title }</h4>
  );
};

export default SectionHeader;