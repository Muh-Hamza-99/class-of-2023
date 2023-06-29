import React from "react";

const PageHeader = ({ title, quote }) => {
  return (
    <div className="header-container">
        <h3 className="page-header">{ title }</h3>
        <span className="page-description">{ quote }</span>
    </div>
  );
};

export default PageHeader;
