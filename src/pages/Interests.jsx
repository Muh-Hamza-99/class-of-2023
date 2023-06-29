import React from "react";
import InterestDetails from "../components/InterestDetails";
import Container from "../components/Container";
import PageHeader from "../components/PageHeader";
import { interests } from "../data";

const Interests = () => {
  return (
    <div className="page-container">
      <PageHeader title="Interests" quote="'Each student has his/her own creative side.'" />
      <div className="flex flex-col w-full items-center">
          <Container bigText={"21%"} smallText={"of students had a unique interest."} followUpText={"Of the unique interests, most were not sports and rather games, skills or social work. From my experience, this is probably the most difficulty aspect of applying to university, which explains why no one mentioned it. This is because opportunities provided by the school were limited, and those who did have unique extracurriculars were extremely dedicated to one thing."} />
        </div>
      <div className="flex flex-wrap justify-center">
        {
          interests.map((interest, index) => <InterestDetails interestDetails={interest} />)
        }
      </div>
    </div>
  );
};

export default Interests;