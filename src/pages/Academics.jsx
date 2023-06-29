import React from "react";
import Container from "../components/Container";
import CompactContainer from "../components/CompactContainer";
import SectionHeader from "../components/SectionHeader";
import TextChartContainer from "../components/TextChartContainer";
import PageHeader from "../components/PageHeader";
import { IGSubjectsFrequency, ASSubjectsFrequency, droppedOrAddedSubjects } from "../data";

const Academics = () => {
  return (
    <div className="page-container">
      <PageHeader title="Academics" quote="'Saying the class was smart would be an understatement.'" />
      <div className="flex flex-col w-full items-center">
        <SectionHeader title={"IGCSEs"} />
        <Container bigText={"121"} smallText={"A*'s were achieved in IGCSEs"} followUpText={"Along with the 72% of grades that were A*'s, the Class of 2023 also achieved 34 A's, 11 B'2 and 1 C at IGCSEs."} />
        <TextChartContainer data={IGSubjectsFrequency} description={"Math and English were the most common subjects at IGCSE, closely followed by the 3 sciences, which all students (except one) took."} />
        <SectionHeader title={"AS Levels"} />
        <Container bigText={"48"} smallText={"A's"} followUpText={"Along with the 70% of grades that were A's, the Class of 2023 also obtained 9 B's, 12 C's and 1 D, a far more dispersed and lower average than IGCSEs."} />
        <TextChartContainer data={ASSubjectsFrequency} description={"Math was the the most common subject at AS Levels, closely followed by Chemistry and Physics. Biology was less common, with the number almost the same as students taking Computer Science."} />
        <SectionHeader title={"A Levels"} />
        <Container bigText={"2/3"} smallText={"of students kept the same subjects for their A Levels as their AS Levels."} followUpText={"Despite dropping a subject being difficult to accept for most of us, and adding a subject being another burden on the shoulders, 1/3 of students changed their A Level subjects."} />
        <TextChartContainer data={droppedOrAddedSubjects} description={"Between AS and A Levels, the subject that most students dropped was Chemistry, followed by Mathematics, which was common in the Girl's section. Only one student added an A Level, which was Business Studies."} />
        <SectionHeader title={"Extra Exams"} />
        <Container bigText={"73%"} smallText={"of students had to give extra exams."} followUpText={"The number is fairly high due to the specific admission requirements of universities abroad, such as the United States of America and Pakistan. The exam the most students gave was the SAT, followed by English Language exams (IELTs/TOEFL). Qudraat and Tahseeli was less common, and so was ACT."} />
        <div className="w-4/5 grid grid-rows-4 grid-cols-1 gap-x-4 gap-y-2 md:grid-rows-2 md:grid-cols-2 xl:gap-x-16 xl:gap-y-4 xl:grid-rows-1 xl:grid-cols-4">
          <CompactContainer bigText="1390" smallText="was the average SAT score." />
          <CompactContainer bigText="34" smallText="was the average ACT score. " />
          <CompactContainer bigText="88" smallText="was the average Qudraat score." />
          <CompactContainer bigText="8.0" smallText="was the average IELTs score." />
        </div>
      </div>
    </div>
  );
};

export default Academics;