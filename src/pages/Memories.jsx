import React from "react";
 import PageHeader from "../components/PageHeader";
import { favouriteMemories, worstMemories } from "../data";
import SectionHeader from "../components/SectionHeader";
import Container from "../components/Container";
import Carousel from "../components/Carousel";

const Memories = () => {
  return (
    <div className="page-container">
      <PageHeader title="Memories" quote="'Every lesson a memory, every month a chapter, every year a story.'" />
      <div className="flex flex-col w-full items-center">
        <SectionHeader title="Favourite Memories" />
        <Carousel memories={favouriteMemories} />
        <Container bigText="57%" smallText="had a favourite memory inside the classroom." followUpText="Of the 43% of students that had a favourite memory outside the classroom, 42% involved playing a sport, primarily football." />
        <SectionHeader title="Worst Memories" />
        <Carousel memories={worstMemories} />
        <SectionHeader title="Favourite Teachers" />
        <Container bigText="Mr. Hassaan" smallText="was the favourite male teacher." followUpText="There was no competition. A dedicated and extremely hard-working teacher that made us feel and do the same when it came to learning Mathematics. From the Youtube channel to the topical worksheets, not getting a good grade in Math would be the student's fault." />
        <Container bigText="Ms. Sama and Ms. Samah" smallText="were the favourite female teachers." followUpText="Equally liked by students, they are two hard-working and determined teachers who paired great teaching and academic excellence with important life discussions and stories." />
      </div>
    </div>
  );
};

export default Memories;