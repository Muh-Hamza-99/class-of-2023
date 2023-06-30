import React from "react";
import { Link } from "react-router-dom";
import { BiConfused } from "react-icons/bi";
import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";
import SidebarIcon from "../components/SidebarIcon";
import BarChart from "../components/BarChart";
import BubbleChart from "../components/BubbleChart";
import { degreeSubjectsData, IGGradeDistribution, ASGradeDistribution, nationalityGPA, SATScoreDistribution } from "../data";

const Charts = () => {
  return (
    <div className="page-container">
      <PageHeader title="Charts" quote="'It is easy to lie with statistics...'" />
      {
          window.innerWidth <= 670 ?
          <div className="h-screen flex flex-col justify-evenly items-center bg-gray-900 mt-4 p-12 rounded-2xl">
            <span className="text-xl text-bold text-justify text-green-500">Screen is too small to display charts.</span>
            <Link to="/"><SidebarIcon icon={ <BiConfused size={24} /> } text="Back home?" /></Link>
          </div> 
          : (
            <div className="w-full flex flex-col justify-center items-center">
              <SectionHeader title="A Level Subjects taken for Degrees" />
              <div className="w-full flex justify-center items-center m-2 mt-4 p-4 shadow-lg bg-gray-800 rounded-lg md:flex-row md:w-4/5">
                <BarChart data={degreeSubjectsData} />
              </div>
              <SectionHeader title="IGCSE Grade Distribution" />
              <div className="w-full flex justify-center items-center m-2 mt-4 p-4 shadow-lg bg-gray-800 rounded-lg md:flex-row md:w-4/5">
                <BarChart data={IGGradeDistribution} stacked={true} />
              </div>
              <SectionHeader title="AS Level Grade Distribution" />
              <div className="w-full flex justify-center items-center m-2 mt-4 p-4 shadow-lg bg-gray-800 rounded-lg md:flex-row md:w-4/5">
                <BarChart data={ASGradeDistribution} stacked={true} />
              </div>
              <SectionHeader title="Nationality Specific GPA" />
              <div className="w-full flex justify-center items-center m-2 mt-4 p-4 shadow-lg bg-gray-800 rounded-lg md:flex-row md:w-4/5">
                <BubbleChart data={nationalityGPA} callbacks={
                  {
                    label: function (tooltipItem) {
                      let label = tooltipItem.dataset.label || "";
                      const frequency = tooltipItem.formattedValue.split(",")[2].slice(0, -1);
                      label += `: ${parseInt(frequency/5)}`
                      return label;
                    }, 
                  }
                } />
              </div>
              <SectionHeader title="SAT Score Distribution" />
              <div className="w-full flex justify-center items-center m-2 mt-4 p-4 shadow-lg bg-gray-800 rounded-lg md:flex-row md:w-4/5">
                <BubbleChart data={SATScoreDistribution} startAtZero={false} callbacks={
                  {
                    label: function(tooltipItem) {
                      let label = tooltipItem.dataset.label || "";
                      const value = tooltipItem.formattedValue.split(" ")[0].slice(1).slice(0, -1)
                      const frequency = tooltipItem.formattedValue.split(" ")[2].slice(0, -1);
                      console.log(value, frequency)
                      label += `: ${value.replace(/\,/g,'')} | Frequency: ${parseInt(frequency/5)}`;
                      return label;
                    }
                  }
                } />
              </div>
            </div>
          )
      }
    </div>
  );
};

export default Charts;