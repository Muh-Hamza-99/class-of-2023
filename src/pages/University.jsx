import React, { useState } from "react";
import UniversityDetails from "../components/UniversityDetails";
import CompactContainer from "../components/CompactContainer";
import Container from "../components/Container";
import SpecialApplication from "../components/SpecialApplication";
import SectionHeader from "../components/SectionHeader";
import PageHeader from "../components/PageHeader";
import { universities, specialApplications } from "../data";

const getFilteredItems = (query, items) => {
  if (!query) return items;
  return items.filter(data => data.name.includes(query));
};

const University = () => {
  const [query, setQuery] = useState("");
  const filteredItems = getFilteredItems(query, universities);
  return (
    <div className="page-container">
      <PageHeader title="University" quote="'The next step in life.'" />
      <div className="flex flex-col w-full items-center">
        <SectionHeader title={"Degrees"} />
        <div className="w-4/5 grid grid-rows-4 grid-cols-1 gap-x-4 gap-y-2 md:grid-rows-2 md:grid-cols-2 xl:gap-x-16 xl:gap-y-4 xl:grid-rows-1 xl:grid-cols-4">
          <CompactContainer bigText={"37%"} smallText={"of students are doing Computer Science; including Data Science."} />
          <CompactContainer bigText={"30%"} smallText={"of students are doing Medicine; including Pharmacy and Neuroscience."} />
          <CompactContainer bigText={"22%"} smallText={"of students are doing the applied sciences; branches of engineering."} />
          <CompactContainer bigText={"11%"} smallText={"of students are doing the natural/social sciences, such as Business and Mathematics."} />
        </div>
        <SectionHeader title={"Decisions"} />
        <div className="w-4/5 grid grid-rows-3 grid-cols-1 gap-x-4 gap-y-2 md:gap-x-16 md:gap-y-4 md:grid-rows-1 md:grid-cols-3">
          <CompactContainer bigText={"103"} smallText={"acceptances."} disapper={false} />
          <CompactContainer bigText={"38"} smallText={"rejections."} disapper={false} />
          <CompactContainer bigText={"13"} smallText={"waitlists/pending decisions."} disapper={false} />
        </div>
        <div className="flex flex-col w-full items-center">
          <Container bigText={"49%"} smallText={"of applications to the USA were rejected"} followUpText={"Much greater than those of the United Kingdom (34%) and Canada (24%). The chance of rejection/waitlist was actually higher for Pakistan was 69%; however, most were pending due to the late admission process."} />
        </div>
        <SectionHeader title={"University Specific Decisions"} />
        <div className="w-full md:w-4/5 mt-4">
          <input placeholder="Search a university and find out it's decisions" className="text-white w-full bg-gray-700 outline-none border-b-2 border-b-gray-600 placeholder:text-gray-600 placeholder:pl-1 placeholder:italic" type="text" onChange={ event => setQuery(event.target.value) } />
        </div>
        <div className="w-full flex flex-wrap justify-center">
          { filteredItems.map((data, index) => <UniversityDetails key={index} universityDetails={data} />) }
        </div>
        <SectionHeader title={"What's next?"} />
        <div className="flex flex-col w-full items-center">
          <Container bigText={"2/3"} smallText={"of students have finalised their university."} followUpText={"This is significantly lower compared to previous years, as many Medicine students missed the deadlines this year and/or only applied to reach schools/universities."} />
          <Container bigText={"50%"} smallText={"of students are going to the UK/Canada."} followUpText={"Due to the higher acceptance rates, good quality of education and feasible costs, these two are the top destinations for the Class of 2023. The remaining 24% are staying here or going to the United States of America, Pakistan or Egypt."} />
        </div>
        <SectionHeader title={"Special Applications"} />
        <div className="flex flex-col w-full items-center">
          {
            specialApplications.map((app, index) => <SpecialApplication name={app.name} achievement={app.achievement} academics={app.academics} degree={app.degree} whatMadeYouStandOut={app.whatMadeYouStandOut} />)
          }
        </div>
      </div>
    </div>
  );
};

export default University;