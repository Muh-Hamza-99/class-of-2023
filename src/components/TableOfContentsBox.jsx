import React from "react";
import { Link } from "react-router-dom";
import IlluminateText from "./IlluminateText";

const TableOfContentsBox = ({ header, description }) => {
  return (
    <div className="w-full md:w-1/4 mx-0 md:mx-2 flex flex-col justify-center items-center shadow-lg bg-gray-800 p-4 rounded-3xl my-4 transition-all duration-100 ease-linear hover:-translate-y-2 hover:rounded-lg hover:shadow-2xl hover:bg-gray-900 group">
        <Link to={ header.toLowerCase() === "home" ? "/" : header.toLowerCase() }><h6 className="text-xl mb-4 font-semibold hover:cursor-pointer"><IlluminateText text={ header } /></h6></Link>
        <span className="italic mb-2 invisible group-hover:visible transition-all duration-100 ease-linear">What will you find?</span>
        <p className="text-justify md:text-center invisible group-hover:visible transition-all duration-100 ease-linear">{ description }</p>
    </div>
  );
};

export default TableOfContentsBox;