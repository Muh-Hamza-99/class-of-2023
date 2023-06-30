import { BiBasketball, BiFootball, BiLogoBlender, BiSolidCricketBall, BiMath } from "react-icons/bi"
import { FaChalkboardTeacher, FaChessKnight, FaLanguage, FaMoon, FaPaintBrush } from "react-icons/fa";
import { GiConsoleController, GiHorseHead, GiMicrophone, GiSewingNeedle, GiTennisRacket, GiPlayerTime } from "react-icons/gi";
import { AiFillCamera, AiFillYoutube, AiOutlineCode, AiOutlineHistory } from "react-icons/ai"
import { BsMusicNoteBeamed, BsVectorPen } from "react-icons/bs";
import { CgFileDocument, CgGym } from "react-icons/cg";
import { TbSwimming, TbWriting } from "react-icons/tb"
import { PiStudentFill } from "react-icons/pi";
import { MdVolunteerActivism } from "react-icons/md";

export const IGSubjectsFrequency = [
  {
    text: "Environmental Management",
    tooltip: "2",
    fontSize: "sm",
  },
  {
    text: "Arabic",
    tooltip: "5",
    fontSize: "base",
  },
  {
    text: "Economics",
    tooltip: "9",
    fontSize: "lg",
  },
  {
    text: "French",
    tooltip: "1",
    fontSize: "xs",
  },
  {
    text: "Physics",
    tooltip: "21",
    fontSize: "3xl",
  },
  {
    text: "Mathematics",
    tooltip: "22",
    fontSize: "3xl",
  },
  {
    text: "Accounting",
    tooltip: "6",
    fontSize: "base",
  },
  {
    text: "Urdu",
    tooltip: "1",
    fontSize: "xs",
  },
  {
    text: "Business Studies",
    tooltip: "14",
    fontSize: "xl",
  },
  {
    text: "Pakistan Studies",
    tooltip: "1",
    fontSize: "xs",
  },
  {
    text: "English",
    tooltip: "22",
    fontSize: "3xl",
  },
  {
    text: "Chemistry",
    tooltip: "21",
    fontSize: "3xl",
  },
  {
    text: "Islamiyat",
    tooltip: "1",
    fontSize: "xs",
  },
  {
    text: "Biology",
    tooltip: "21",
    fontSize: "3xl",
  },
  {
    text: "ICT",
    tooltip: "1",
    fontSize: "xs",
  },
  {
    text: "Computer Science",
    tooltip: "19",
    fontSize: "2xl",
  },
];

export const ASSubjectsFrequency = [
  {
    text: "Chemistry",
    tooltip: "16",
    fontSize: "2xl",
  },
  {
    text: "Further Mathematics",
    tooltip: "1",
    fontSize: "xs",
  },
  {
    text: "Biology",
    tooltip: "9",
    fontSize: "lg",
  },
  {
    text: "Business Studies",
    tooltip: "1",
    fontSize: "xs",
  },
  {
    text: "Computer Science",
    tooltip: "8",
    fontSize: "lg",
  },
  {
    text: "Mathematics",
    tooltip: "19",
    fontSize: "3xl",
  },
  {
    text: "Economics",
    tooltip: "1",
    fontSize: "xs",
  },
  {
    text: "Physics",
    tooltip: "16",
    fontSize: "2xl",
  },
];

export const droppedOrAddedSubjects = [
  {
    text: "Mathematics",
    tooltip: "-2",
    fontSize: "2xl"
  },
  {
    text: "Chemistry",
    tooltip: "-3",
    fontSize: "3xl"
  },
  {
    text: "Business Studies",
    tooltip: "1",
    fontSize: "xl"
  },
];

export const nationalities = [
  {
    text: "Bangladeshi",
    tooltip: "1",
    fontSize: "xs",
  },
  {
    text: "Jordanian",
    tooltip: "2",
    fontSize: "sm",
  },
  {
    text: "Indian",
    tooltip: "5",
    fontSize: "xl",
  },
  {
    text: "Algerian",
    tooltip: "1",
    fontSize: "xs",
  },
  {
    text: "Saudi",
    tooltip: "2",
    fontSize: "sm",
  },
  {
    text: "Egyptian",
    tooltip: "10",
    fontSize: "2xl",
  },
  {
    text: "American",
    tooltip: "1",
    fontSize: "xs",
  },
  {
    text: "Pakistani",
    tooltip: "16",
    fontSize: "3xl",
  },
  {
    text: "British",
    tooltip: "3",
    fontSize: "base",
  },
  {
    text: "Syrian",
    tooltip: "1",
    fontSize: "xs",
  },
  {
    text: "Canadian",
    tooltip: "2",
    fontSize: "sm",
  },
  {
    text: "Sudanese",
    tooltip: "5",
    fontSize: "xl",
  },
  {
    text: "Kashmiri",
    tooltip: "3",
    fontSize: "base",
  },
  {
    text: "Lebanese",
    tooltip: "1",
    fontSize: "xs",
  },
];

export const degreeSubjectsData = {
  labels: ["Computer Science", "Medicine", "Engineering"],
  datasets: [
    {
      label: "Mathematics",
      data: [10, 5, 6],
      backgroundColor: "blue",
      borderRadius: 10,
      borderColor: "#2f3136",
      borderWidth: 2,
    },
    {
      label: "Further Mathematics",
      data: [0, 0, 1],
      backgroundColor: "aqua",
      borderRadius: 10,
      borderColor: "#2f3136",
      borderWidth: 2,
    },
    {
      label: "Physics",
      data: [8, 5, 6],
      backgroundColor: "green",
      borderRadius: 10,
      borderColor: "#2f3136",
      borderWidth: 2,
    },
    {
      label: "Chemistry",
      data: [2, 4, 4],
      backgroundColor: "red",
      borderRadius: 10,
      borderColor: "#2f3136",
      borderWidth: 2,
    },
    {
      label: "Biology",
      data: [0, 8, 1],
      backgroundColor: "orange",
      borderRadius: 10,
      borderColor: "#2f3136",
      borderWidth: 2,
    },
    {
      label: "Computer Science",
      data: [10, 0, 1],
      backgroundColor: "yellow",
      borderRadius: 10,
      borderColor: "#2f3136",
      borderWidth: 2,
    },
    {
      label: "Business Studies",
      data: [3, 0, 1],
      backgroundColor: "pink",
      borderRadius: 10,
      borderColor: "#2f3136",
      borderWidth: 2,
    },
    {
      label: "Accounting",
      data: [1, 0, 0],
      backgroundColor: "purple",
      borderRadius: 10,
      borderColor: "#2f3136",
      borderWidth: 2,
    },
  ]
}

export const IGGradeDistribution = {
  labels: ["Math", "Chemistry", "Physics", "Biology", "CS", "Business", "Economics", "Accounting", "Arabic", "English", "French", "EM", "Urdu", "Pak Studies", "Islamiyat"],
  datasets: [
    {
      label: "A*",
      data: [16, 16, 16, 19, 17, 7, 6, 4, 4, 13, 1, 2, 0, 0, 0],
      backgroundColor: "#22C55EA9",
      borderRadius: 10,
      borderColor: "#2f3136",
      borderWidth: 2,
    },
    {
      label: "A",
      data: [5, 5, 4, 1, 2, 6, 1, 2, 0, 7, 0, 0, 1, 0, 0],
      backgroundColor: "#22C55EA9",
      borderRadius: 10,
      borderColor: "#2f3136",
      borderWidth: 2,
    },
    {
      label: "B",
      data: [1, 0, 1, 1, 0, 1, 2, 0, 0, 2, 0, 0, 0, 1, 1],
      backgroundColor: "#22C55EA9",
      borderRadius: 10,
      borderColor: "#2f3136",
      borderWidth: 2,
    },
    {
      label: "C",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
      backgroundColor: "#22C55EA9",
      borderRadius: 10,
      borderColor: "#2f3136",
      borderWidth: 2,
    },
  ],
};

export const ASGradeDistribution = {
  labels: ["Math", "Chemistry", "Physics", "Biology", "CS", "Business", "Economics", "Accounting", "Further Math"],
  datasets: [
    {
      label: "A",
      data: [14, 11, 12, 5, 5, 0, 0, 0, 1],
      backgroundColor: "#22C55EA9",
      borderRadius: 10,
      borderColor: "#2f3136",
      borderWidth: 2,
    },
    {
      label: "B",
      data: [2, 2, 2, 1, 1, 0, 1, 0, 0],
      backgroundColor: "#22C55EA9",
      borderRadius: 10,
      borderColor: "#2f3136",
      borderWidth: 2,
    },
    {
      label: "C",
      data: [2, 2, 2, 2, 2, 1, 0, 1, 0],
      backgroundColor: "#22C55EA9",
      borderRadius: 10,
      borderColor: "#2f3136",
      borderWidth: 2,
    },
    {
      label: "D",
      data: [0, 1, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: "#22C55EA9",
      borderRadius: 10,
      borderColor: "#2f3136",
      borderWidth: 2,
    },
  ],
};

export const nationalityGPA = {
  datasets: [
    {
      label: "Pakistani",
      data: [{ x: 1, y: 4, r: 40 }, { x: 1, y: 3.75, r: 5 }, { x: 1, y: 3.7, r: 5 }, { x: 1, y: 3.8, r:5 }],
      backgroundColor: "green",
    },
    {
      label: "Kashmiri",
      data: [{ x: 2, y: 4, r: 10 }, { x: 2, y: 3.3, r: 5 }],
      backgroundColor: "red",
    },
    {
      label: "Indian",
      data: [{ x: 3, y: 4, r: 5 }, { x: 3, y: 3.3, r: 5 }],
      backgroundColor: "orange",
    },
    {
      label: "Egyptian",
      data: [{ x: 4, y: 4, r: 15 }, { x: 4, y: 3.78, r: 5 }, { x: 4, y: 3.7, r: 5 }],
      backgroundColor: "black",
    },
    {
      label: "Canadian",
      data: [{ x: 5, y: 3.7, r: 5 }, { x: 5, y: 4, r: 5 }],
      backgroundColor: "maroon",
    },
  ],
};

export const SATScoreDistribution = {
  datasets: [
    {
      label: "SAT Score",
      data: [{ y: 0.5, x: 1380, r: 5 }, { y: 0.5, x: 1430, r: 10 }, { y: 0.5, x: 1520, r: 5 }, { y: 0.5, x: 1420, r: 5 }, { y: 0.5, x: 1150, r: 5 }, { y: 0.5, x: 1460, r: 5 }, { y: 0.5, x: 1410, r: 5 }, { y: 0.5, x: 1350, r: 5 }],
      backgroundColor: "#22C55E",
    },
  ],
};

export const specialApplications = [
  {
    name: "Zainab Shafiq",
    achievement: "The only student to get acceptances from Imperial College London and King’s College London (≈13% acceptance rate).",
    academics: "6 A*’s & 2 A’s at IGCSEs, 4 A’s at AS, 4.0 GPA",
    degree: "To be decided",
    whatMadeYouStandOut: "Personal statement was my main target. Many drafts and edits were done before the final submission. I tried to include as much information as I could about extracurriculars and my interest in the degree I applied for-Biochemistry. Apart from that, I was also fortunate enough, alhumdulillah, to have achieved 4A's and a 300 UMS in math.",
  },
  {
    name: "Muhammad Hamza",
    achievement: "The only student to get an acceptance from the University of Waterloo (≈4% acceptance rate).",
    academics: "6 A*’s & 2 A’s at IGCSEs, 4 A’s at AS, 4.0 GPA",
    degree: "Computer Science",
    whatMadeYouStandOut: "I think my acceptance come down my genuine interest in Computer Science, which I showed through programming, teaching and clubs. I also think that solving the recommended mathematics and computer science papers for admission helped greatly, along with the grades I achieved, which, alhamdullilah, were exceptional."
  }
];

export const favouriteMemories = [
  "A lot of great memories have been made, but having 20 people play 4 teams in the small football pitch during arabic lessons was the best 😂",
  "Any lesson with munib or yousuf saying smthn dumb",
  "Grade 12, it wasn’t a specific lesson but the whole day was off at school as we had finished the syllabus for the year and we watched the cricket World Cup and played football all day with all our teachers.",
  "Grade 11 and 12 Math. Mr. Hassaan is such an exceptional teacher. His classes were always fun. And I get to see Faiq doing Faiq things (in G11) and Muzammil being Muzammil (in G12)",
  "Sarfaraz recording with phone stuck in his pants.",
  "Any chem class from grade 11 just to make fun of shafiq ul proton and basketball",
  "Mr essen grade 9 physics because MAAAAAN",
  "Chemistry lab grade 11.. it was so fun to mess around with chemicals😂 and we never did the actual assignments",
  "That one lesson with My physics teacher in grade 11 when we convinced her to give us a free lesson and spent the hour talking about anything and everything related to life. It was a really fun bonding moment for us that I’ll really cherish",
  "All my memories in the library and especially ones in g11 (having our mini concerts, playing cards, painting, getting caught with our phones, sleeping, sneaking in orders, studying before exams)",
  "The friends and how easy it was to learn with our teachers.",
  "Going to mcdonald’s",
  "Loads.. But chilling with my friends in the common room has to be my fav.",
  "The times where we would go to the computer lab with Mr Muhammad Ali in Biology where we would play together on the computers",
  "when we won the football tournament in grade 6",
  "Playing for the school cricket team",
  "Business studies, taught by Mr. Osama in grade 9. Very useful subject that I was not aware of, and the lessons opened my mind to it.",
  "Grade 7 French with Mr. Marwan. We had a lesson last period on Thursday and we drove him crazy and he ended up quitting teaching our class.",
  "THAT arabic lesson khhhh",
  "Mr shafiq’s lessons. He was truly an amazing teacher",
  "Mr hassaan this year, the goat is the best at what he does I enjoy his classes",
  "Arabic (without the syllabus ofc), Ms Areej never failed to make us feel so comfortable talking to her about literally any topic. We’d always have the best discussions regardless we agreed or not they always open out minds to different perspectives.",
];

export const worstMemories = [
  "Not being allowed to go outside of class during Grade 11",
  "The BR football team losing 7-1 to the AM team",
  "Salman leaving, literally carried the entire skl and uni application scene",
  "Failing",
  "The gym was constantly closed almost everyday.",
  "Going to school everyday",
  "First week of grade 12",
  "Getting bullied in the beginning of grade 8",
  "Breaking my back in Grade 9",
  "when i got beaten up by someone older than me by 3 years and my homeroom teacher didn't do anything about it even after i told him.",
  "Getting dumped for a Saudi at the graduation ceremony",
  "Too many friends leaving without me having their contact.",
  "Exam and result day",
  "Attending the school",
  "The A level exams",
  "P4 Chemistry exam",
  "Mocks 2023",
  "the day i joined manarat :) ",
  "One of the carnivals.",
  "Lokey, admin sometimes gave me the hardest time and definitely made my blood boil more than once",
  "having to loose one of our favourite admins (may Allah have mercy on her) & witnessing a suicidal attempt",
]

export const universities = [
  {
    name: "Imperial College London",
    acceptances: 1,
    rejections: 3,
  },
  {
    name: "University College London",
    acceptances: 0,
    rejections: 4,
  },
  {
    name: "King's College London",
    acceptances: 1,
    rejections: 2,
  },
  {
    name: "University of Edinburgh",
    acceptances: 2,
    rejections: 0,
  },
  {
    name: "University of Manchester",
    acceptances: 6,
    rejections: 0,
  },
  {
    name: "Harvard University",
    acceptances: 0,
    rejections: 2,
  },
  {
    name: "Georgia Institute of Technology",
    acceptances: 0,
    rejections: 1,
  },
  {
    name: "University of Toronto",
    acceptances: 5,
    rejections: 1,
  },
  {
    name: "University of British Columbia",
    acceptances: 5,
    rejections: 1,
  },
  {
    name: "University of Waterloo",
    acceptances: 1,
    rejections: 5,
  },
  {
    name: "McGill University",
    acceptances: 3,
    rejections: 1,
  },
  {
    name: "University of Alberta",
    acceptances: 6,
    rejections: 0,
  },
  {
    name: "University of Bristol",
    acceptances: 4,
    rejections: 0,
  },
  {
    name: "University of Leicester",
    acceptances: 2,
    rejections: 0,
  },
  {
    name: "University of Nottingham",
    acceptances: 5,
    rejections: 0,
  },
  {
    name: "University of Loughborough",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of Minnesota",
    acceptances: 2,
    rejections: 0,
  },
  {
    name: "Rochester Institute of Technology",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "Heriot-Watt Universty",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "Habib University",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "Lahore University of Management Sciences",
    acceptances: 2,
    rejections: 0,
  },
  {
    name: "Institute of Business Administration",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of California Berkeley",
    acceptances: 0,
    rejections: 2,
  },
  {
    name: "University of Southampton",
    acceptances: 4,
    rejections: 0,
  },
  {
    name: "University of Birmingham",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of Surrey",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of Sussex",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of Sheffield",
    acceptances: 4,
    rejections: 0,
  },
  {
    name: "University of Sorbonne Abu Dhabi",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "American University of Sharjah",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "National University of Computer and Emerging Sciences (FAST)",
    acceptances: 0,
    rejections: 0,
  },
  {
    name: "Aston University",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "Germany University in Cairo",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of Cairo",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of Ain Shams",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "New Giza University",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of Texas Austin",
    acceptances: 1,
    rejections: 1,
  },
  {
    name: "University of Illinois Chicago",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "MSC",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of Oklahoma",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of Connecticut",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "Loyola University",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of Glasgow",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of New South Wales",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "Monash University",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of Queensland",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of Sydney",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "McMaster University",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "Carleton University",
    acceptances: 2,
    rejections: 0,
  },
  {
    name: "Queen's University",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of Ottawa",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "Western University",
    acceptances: 3,
    rejections: 0,
  },
  {
    name: "Rice University",
    acceptances: 0,
    rejections: 1,
  },
  {
    name: "Cornell University",
    acceptances: 0,
    rejections: 1,
  },
  {
    name: "California Institute of Technology",
    acceptances: 0,
    rejections: 1,
  },
  {
    name: "Duke University",
    acceptances: 0,
    rejections: 1,
  },
  {
    name: "University of Calgary",
    acceptances: 3,
    rejections: 0,
  },
  {
    name: "University of Engineering and Technology Lahore",
    acceptances: 0,
    rejections: 1,
  },
  {
    name: "National University of Science and Technology",
    acceptances: 0,
    rejections: 0,
  },
  {
    name: "Commission on Science and Technology for Sustainable Development in the South",
    acceptances: 0,
    rejections: 0,
  },
  {
    name: "Ghulam Ishaq Khan Institute of Engineering Sciences and Technology",
    acceptances: 0,
    rejections: 0,
  },
  {
    name: "Capital University of Science and Technology",
    acceptances: 0,
    rejections: 0,
  },
  {
    name: "Bahria University",
    acceptances: 0,
    rejections: 0,
  },
  {
    name: "Simon Fraser University",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "Pennsylvania State University",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of California Davis",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of California Irvine",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of Texas Dallas",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "Purdue University",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of California San Diego",
    acceptances: 0,
    rejections: 0,
  },
  {
    name: "Northeastern University",
    acceptances: 0,
    rejections: 1,
  },
  {
    name: "University of California Santa Barbara",
    acceptances: 0,
    rejections: 1,
  },
  {
    name: "University of California Santa Cruz",
    acceptances: 0,
    rejections: 1,
  },
  {
    name: "University of California Riverside",
    acceptances: 0,
    rejections: 1,
  },
  {
    name: "University of California Los Angeles",
    acceptances: 0,
    rejections: 1,
  },
  {
    name: "University of California Merced",
    acceptances: 0,
    rejections: 1,
  },
  {
    name: "University of California San Francisco",
    acceptances: 0,
    rejections: 1,
  },
  {
    name: "Ohio State University",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "Massachusetts Institute of Technology",
    acceptances: 0,
    rejections: 1,
  },
  {
    name: "London School of Economics",
    acceptances: 0,
    rejections: 1,
  },
  {
    name: "Al Faisal University",
    acceptances: 2,
    rejections: 0,
  },
  {
    name: "University of Exeter",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of Cardiff",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "University of Westminster",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "City University of London",
    acceptances: 1,
    rejections: 0,
  },
  {
    name: "Queen Mary University of London",
    acceptances: 0,
    rejections: 1,
  },
];

export const interests = [
  {
    name: "Football",
    icon: <BiFootball size={22} />,
    description: "The most popular sport and interest."
  },
  {
    name: "Cricket",
    icon: <BiSolidCricketBall size={22} />,
    description: "Common amongst the South Asians."
  },
  {
    name: "Squash",
    icon: <GiTennisRacket size={22} />,
    description: "Played by only one."
  },
  {
    name: "Chess",
    icon: <FaChessKnight size={22} />,
    description: "A game of strategy with few players."
  },
  {
    name: "Coding",
    icon: <AiOutlineCode size={22} />,
    description: "Many were beginners besides one."
  },
  {
    name: "Music",
    icon: <BsMusicNoteBeamed size={22} />,
    description: "One player of the Tabla."
  },
  {
    name: "Public Speaking",
    icon: <GiMicrophone size={22} />,
    description: "Quite a few with excellent speeches."
  },
  {
    name: "Gaming",
    icon: <GiConsoleController size={22} />,
    description: "Some were sweats when it came to gaming."
  },
  {
    name: "Gym",
    icon: <CgGym size={22} />,
    description: "The third most popular interest after football and coding.",
  },
  {
    name: "Basketball",
    icon: <BiBasketball size={22} />,
    description: "Limited access to related facilities."
  },
  {
    name: "Swimming",
    icon: <TbSwimming size={22} />,
    description: "Done professionally by few, and for fun by others."
  },
  {
    name: "Writing",
    icon: <TbWriting size={22} />,
    description: "Makes sense after seeing the personal statements."
  },
  {
    name: "Horseback Riding",
    icon: <GiHorseHead size={22} />,
    description: "A glimpse of the Nomadic Arab lifestyle."
  },
  {
    name: "Photography",
    icon: <AiFillCamera size={22} />,
    description: "A phone is all we need."
  },
  {
    name: "Table Tennis",
    icon: <GiTennisRacket size={22} />,
    description: "Only one semi-professional player."
  },
  {
    name: "History",
    icon: <AiOutlineHistory size={22} />,
    description: "After Saudi history, quite a challenge to take it as an interest.",
  },
  {
    name: "Debates",
    icon: <CgFileDocument size={22} />,
    description: "Questionable and hilarious."
  },
  {
    name: "Youtube",
    icon: <AiFillYoutube size={22} />,
    description: "Many of us wanted to, and some of us did..."
  },
  {
    name: "Badminton",
    icon: <GiTennisRacket size={22} />,
    description: "Only one, at for Al-Nasr."
  },
  {
    name: "3D Animations",
    icon: <BiLogoBlender size={22} />,
    description: "Niche yet extremely skilled interest."
  },
  {
    name: "Math",
    icon: <BiMath size={22} />,
    description: "It is actually quite an interesting subject."
  },
  {
    name: "Tutoring",
    icon: <FaChalkboardTeacher size={22} />,
    description: "One did semi-professionally, and one did with no pay and reward."
  },
  {
    name: "Charades",
    icon: <GiPlayerTime size={22} />,
    description: "A story could be written on Charades this year."
  },
  {
    name: "Islamic Learning",
    icon: <FaMoon size={22} />,
    description: "After all tests, some of us still remember the final test."
  },
  {
    name: "Arabic",
    icon: <FaLanguage size={22} />,
    description: "The language of the Holy Quran."
  },
  {
    name: "Calligraphy",
    icon: <BsVectorPen size={22} />,
    description: "Steve Jobs made Apple successful partly because of calligraphy."
  },
  {
    name: "Painting",
    icon: <FaPaintBrush size={22} />,
    description: "Skill, precision and creativity at the tips of a brush."
  },
  {
    name: "Student Council",
    icon: <PiStudentFill size={22} />,
    description: "Inexperienced and inefficient on one side from our experience."
  },
  {
    name: "Embroidery",
    icon: <GiSewingNeedle size={22} />,
    description: "Usually passed down through generations."
  },
  {
    name: "Volunteering",
    icon: <MdVolunteerActivism size={22} />,
    description: "Only one of us did, while the rest lied on applications."
  },
];