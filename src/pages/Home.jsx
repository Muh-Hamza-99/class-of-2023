import React from "react";
import PageHeader from "../components/PageHeader";
import SectionHeader from "../components/SectionHeader";
import Container from "../components/Container";
import TableOfContentsBox from "../components/TableOfContentsBox";
import TextChartContainer from "../components/TextChartContainer";
import IlluminateText from "../components/IlluminateText";
import { nationalities } from "../data"

const Home = () => {
  return (
    <>
      <div className="page-container">
        <PageHeader
          title="Class of 2023"
          quote="'A diverse class that bonded over their similarities and differences.'"
        />
        <div className="w-full flex flex-col justify-center items-center">
          <SectionHeader title="Purpose" />
          <div className="mt-4 px-8 py-4 shadow-lg bg-gray-800 w-full rounded-lg flex justify-evenly flex-col text-justify md:text-left md:w-4/5">
            <p className="my-2 leading-loose">
              The idea struck me at the night of graduation; gathering as much of high school within a week and then making a website that would persist our class profile, academics, interests, university applications and memories. The last week or so has been tiresome and gruelsome, but in the end, it was all worth the effort.
            </p>
            <p className="mb-2 leading-loose">On a side note, congratulations <IlluminateText text="Class of 2023" />. I hope you all the best of luck in the <IlluminateText text=" next step" /> of your life, and I hope we don't forget the part of us that was made by the friends and teachers at this school.</p>
            <span className="text-sm mb-2 w-full text-right italic md:text-base">Muhammad Hamza, 27/06/2023</span>
          </div>
          <SectionHeader title="Table of Contents" />
          <div className="flex flex-wrap flex-col justify-center w-full md:flex-row">
            <TableOfContentsBox header="Home" description="Class Size • Nationalities" />
            <TableOfContentsBox header="Academics" description="IGCSE subjects • IGCSE Grades • AS Subjects • AS Grades • A Level Subjects • GPA • Extra Exams and Scores" />
            <TableOfContentsBox header="Interests" description="Unique Interests • List of Interests" />
            <TableOfContentsBox header="University" description="Degrees • Decisions • University Specific Decisions • What's next • Special Applications" />
            <TableOfContentsBox header="Memories" description="Favourite Memories • Worst Memories • Student Anecdotes • Favourite Teachers" />
            <TableOfContentsBox header="Charts" description="A Level Subjects taken for Degrees • IGCSE, AS and SAT Grade Distribution • Nationality Specific GPA" />
          </div>
          <SectionHeader title="Class Profile" />
          <Container bigText="49" smallText="students were part of the Class of 2023." followUpText="The number is on the lower end of the mean range of graduating class sizes. With this large class size came a plethora of cultures, traditions, mindsets and talents." />
          <Container bigText="14" smallText="different nationalities made up the Class of 2023." followUpText="The students of the Class of 2023 came from across 4 continents, with large groups of students from South Asia and North Africa." />
          <TextChartContainer data={nationalities} description="Some students had a dual-nationality, with both nationalities being included." />
        </div>
      </div>
    </>
  );
};

export default Home;
