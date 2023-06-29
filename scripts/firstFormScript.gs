const app = SpreadsheetApp;
const spreadsheet = app.getActiveSpreadsheet();
const activeSheet = spreadsheet.getActiveSheet();

const rangeLimit = 29;

const universitiesWithDecisions = () => {
  const column = activeSheet.getRange(`H2:H${rangeLimit}`).getValues()
  const universities = [];
  for (cell of column) {
    let cellList;
    if (cell[0].includes(",")) cellList = cell[0].split(",");
    else if (cell[0].includes("\n")) cellList = cell[0].split("\n");
    else if (cell[0] !== "") cellList = [cell[0]];
    else cellList = [];
    universities.push(cellList);
  };
  const finalList = [];
  universities.forEach(list => list.forEach(university => finalList.push(university)));
  return finalList;
};

const universities = () => {
  const universitiesListWithDecisions = universitiesWithDecisions();
  const universities = [];
  universitiesListWithDecisions.forEach(university => universities.push(university.replace(" (A)", "").replace(" (W)", "").replace(" (R)", "")));
  return universities;
};

const uniqueSchools = () => {
  const universitiesList = [...new Set(universities())];
  return { universityList: universitiesList, numberOfUniversities: universitiesList.length };
};

const uniqueCountries = () => {
  const column = activeSheet.getRange(`Q2:Q${rangeLimit}`).getValues();
  const countries = [];
  column.forEach(countryList => countryList[0].split(",").forEach(country => { if (country !== "") countries.push(country) }));
  return getFrequencies(countries);
};

const confirmedFinalCountries = () => {
  const column = activeSheet.getRange(`R2:R${rangeLimit}`).getValues();
  const finalCountries = [].concat(...column).filter(country => country !== "")
  return (getFrequencies(finalCountries));
};

const calculateDecisionStatistics = () => {
  const universitiesList = universitiesWithDecisions();
  const decisionsObject = { accepted: 0, rejected: 0, pending: 0 };
  for (university of universitiesList) {
    const decision = university.substr(-4);
    switch (decision) {
      case " (A)":
        decisionsObject.accepted++;
        break;
      case " (W)":
        decisionsObject.pending++;
        break;
      case " (R)": 
        decisionsObject.rejected++;
        break;
      default: 
        break;
    };
  };
  return decisionsObject;
};

const commonDecisions = () => {
  const universitySpecificDecisions = {};
  const universitiesListWithDecisions = universitiesWithDecisions();
  const universitiesList = [...(new Set(universities()))];
  const rejectedUniversitiesList = [];
  const acceptedUniversitiesList = [];
  universitiesListWithDecisions.forEach(universityWithDecision => { if (universityWithDecision.endsWith(" (R)")) rejectedUniversitiesList.push(universityWithDecision.replace(" (R)", "")) });
  universitiesListWithDecisions.forEach(universityWithDecision => { if (universityWithDecision.endsWith(" (A)")) acceptedUniversitiesList.push(universityWithDecision.replace(" (A)", "")) });
  const frequencyOfAcceptedUniversities = getFrequencies(acceptedUniversitiesList);
  const frequencyOfRejectedUniversities = getFrequencies(rejectedUniversitiesList);
  for (let university of universitiesList) {
    universitySpecificDecisions[university] = { acceptances: 0, rejections: 0 };
    universitySpecificDecisions[university].acceptances = frequencyOfAcceptedUniversities[university] || 0;
    universitySpecificDecisions[university].rejections = frequencyOfRejectedUniversities[university] || 0;
  };
  return universitySpecificDecisions;
};

const nationalityDecisions = () => {
  const nationalityDecisionsObject = {}
  const nationalities = [].concat(...(activeSheet.getRange(`B2:B${rangeLimit}`).getValues()));
  const universitiesList = activeSheet.getRange(`H2:H${rangeLimit}`).getValues();
  const universities = [];
  for (let universityList of universitiesList) {
    let cellList;
    if (universityList[0].includes(",")) cellList = universityList[0].split(",");
    else if (universityList[0].includes("\n")) cellList = universityList[0].split("\n");
    else cellList = [universityList[0]];
    universities.push(cellList);
  };
  for (let nationality of nationalities) if (!nationalityDecisionsObject.hasOwnProperty(nationality)) nationalityDecisionsObject[nationality] = { acceptances: 0, rejections: 0, pending: 0 };
  for (let i = 0; i < nationalities.length; i++) {
    universities[i].forEach(university => {
      if (university.endsWith(" (A)")) nationalityDecisionsObject[nationalities[i]].acceptances++;
      else if ((university.endsWith(" (R)"))) nationalityDecisionsObject[nationalities[i]].rejections++;
      else if ((university.endsWith(" (W)"))) nationalityDecisionsObject[nationalities[i]].pending++;
    });
  };
  return nationalityDecisionsObject;
};

const calculateTotalNumberOfApplications = () => {
  const column = activeSheet.getRange(`F2:F${rangeLimit}`).getValues()
  let totalSum = 0;
  column.forEach(number => { if (number[0] !== "") totalSum += parseInt(number[0]) })
  return totalSum
}

const difficultAspectsOfUniversityApplications = () => {
  const column = activeSheet.getRange(`G2:G${rangeLimit}`).getValues()
  const difficultAspects = [];
  column.forEach(aspects => { 
    if (aspects[0] !== "") {
      aspects[0].split(",").forEach(aspect => {
        const cleanAspect = aspect.endsWith(" ") ? aspect.slice(0, -1) : aspect;
        difficultAspects.push(cleanAspect);
      });
    };
  });
  return (getFrequencies(difficultAspects));
}

const calculateMeanGPA = () => {
  const column = activeSheet.getRange(`D2:D${rangeLimit}`).getValues()
  let totalGPA = 0;
  let totalEntries = 0;
  column.forEach(GPA => {
    if (Number(GPA[0])) {
      totalGPA += Number(GPA[0])
      totalEntries++
    };
  });
  return (parseFloat(totalGPA/totalEntries).toFixed(3))
};

const distributionOfGPA = () => {
  const column = activeSheet.getRange(`D2:D${rangeLimit}`).getValues();
  const GPAObject = {
    perfect: 0,
    threeHalfToPerfect: 0,
    threeHalfLess: 0,
  };
  for (GPA of column) {
    if (GPA[0] === 4) GPAObject.perfect++;
    if (GPA[0] >= 3.5 && GPA[0] < 4.0) GPAObject.threeHalfToPerfect++;
    if (GPA[0] < 3.5) GPAObject.threeHalfLess++;
  };
  return GPAObject;
};

const calculateMeanNationalityGPA = () => {
  const meanGPA = {};
  const GPAList = activeSheet.getRange(`D2:D${rangeLimit}`).getValues();
  const nationalitiesList = activeSheet.getRange(`B2:B${rangeLimit}`).getValues();
  const GPAs = [].concat(...GPAList);
  const nationalities = [].concat(...nationalitiesList);
  const nationalitiesFrequency = getFrequencies(nationalities);
  for (i = 0; i < GPAs.length; i++) {
    if (Number(GPAs[i])) {
      if (meanGPA.hasOwnProperty(nationalities[i])) meanGPA[nationalities[i]] += GPAs[i];
      else if (!meanGPA.hasOwnProperty(nationalities[i])) meanGPA[nationalities[i]] = GPAs[i];
    };
  };
  for (value of Object.entries(meanGPA)) {
    meanGPA[value[0]] = { GPA: parseFloat(meanGPA[value[0]]/nationalitiesFrequency[value[0]]).toFixed(2), frequency: nationalitiesFrequency[value[0]] }
  };
  return meanGPA;
};

const degreeStatistics = () => {
  const column = activeSheet.getRange(`K2:K${rangeLimit}`).getValues();
  const degreeList = [];
  column.forEach(degree => { if (degree[0] !== "") degreeList.push(degree[0]) });
  return (getFrequencies(degreeList));
};

const degreeAndALevelSubjects = () => {
  const degreeSubjectsObject = {}
  const degrees = [].concat(...(activeSheet.getRange(`K2:K${rangeLimit}`).getValues()));
  const ALevelSubjects = [].concat(...(activeSheet.getRange(`C2:C${rangeLimit}`).getValues()));
  for (let i = 0; i < degrees.length; i++) if (!degreeAndALevelSubjects.hasOwnProperty(degrees[i])) degreeSubjectsObject[degrees[i]] = [];
  for (let i = 0; i < degrees.length; i++) degreeSubjectsObject[degrees[i]].push(ALevelSubjects[i])
  console.log(degreeSubjectsObject);
};

const interestStatistics = () => {
  const column = activeSheet.getRange(`E2:E${rangeLimit}`).getValues();
  const interestList = [];
  column.forEach(studentInterest => { if (studentInterest[0] !== "") studentInterest[0].split(",").forEach(interest => interestList.push(interest.replace("\n", ""))) });
  return (getFrequencies(interestList));
};

const nationalityInterests = () => {
  const nationalityInterestsObject = {};
  const nationalitiesList = activeSheet.getRange(`B2:B${rangeLimit}`).getValues();
  const interestsList = activeSheet.getRange(`E2:E${rangeLimit}`).getValues();
  const nationalities = [].concat(...nationalitiesList);
  const interests = [].concat(...interestsList);
  for (let i = 0; i < nationalities.length; i++) {
    if (nationalityInterestsObject.hasOwnProperty(nationalities[i])) nationalityInterestsObject[nationalities[i]] += `,${interests[i]}`.replace("\n", "");
    else if (!nationalityInterestsObject.hasOwnProperty(nationalities[i])) nationalityInterestsObject[nationalities[i]] = interests[i].replace("\n", "");
  };
  for (let entry of Object.entries(nationalityInterestsObject)) nationalityInterestsObject[entry[0]] = nationalityInterestsObject[entry[0]].split(",");
  for (let key of Object.keys(nationalityInterestsObject)) nationalityInterestsObject[key] = getFrequencies(nationalityInterestsObject[key])
  return nationalityInterestsObject;
};

const expectedGPAForUniversity = university => {
  const GPAs = [].concat(...(activeSheet.getRange(`D2:D${rangeLimit}`).getValues()));
  const universitiesList = activeSheet.getRange(`H2:H${rangeLimit}`).getValues();
  const universities = [];
  universitiesList.forEach(universityList => universityList.forEach(university => {
    if (university.includes("\n")) universities.push(university.split("\n"));
    else if (university.includes(",")) universities.push(university.split(","));
    else universities.push(university);
  }));
  const studentsAppliedToUniversity = [];
  for (let i = 0; i < universities.length; i++) {
    if (universities[i].includes(`${university} (A)`)) {
      studentsAppliedToUniversity.push({ GPA: GPAs[i], decision: "accepted" });
    } else if ((universities[i].includes(`${university} (R)`)) || (universities[i].includes(`${university} (W)`))) {
      studentsAppliedToUniversity.push({ GPA: GPAs[i], decision: "rejected/pending" });
    } else { continue };
  };
  return studentsAppliedToUniversity;
};

const test = () => {
  uniqueSchools().universityList.forEach(university => {
    const expectedGPAList = expectedGPAForUniversity(university);
    if (expectedGPAList.length >= 4) console.log(`${university}`, expectedGPAForUniversity(university));
  });
};

const calculatePercentageUniqueInterests = () => {
  const column = activeSheet.getRange(`E2:E${rangeLimit}`).getValues();
  const interestList = [];
  column.forEach(studentInterest => { if (studentInterest[0] !== "") studentInterest[0].split(",").forEach(interest => interestList.push(interest.replace("\n", ""))) });
  const interestFrequency = getFrequencies(interestList);
  let uniqueInterests = 0;
  for (let entry of Object.entries(interestFrequency)) if (entry[1] === 1) uniqueInterests ++;
  return (Math.round((uniqueInterests/interestList.length) * 100));
};

const favouriteTeacherStatistics = () => {
  const column = activeSheet.getRange(`L2:L${rangeLimit}`).getValues();
  const teacherList = [];
  column.forEach(teachers => { if (teachers[0] !== "") teachers[0].split(",").forEach(teacher => teacherList.push(teacher)) });
  return (getFrequencies(teacherList));
};

const subjectStatistics = () => {
  const column = activeSheet.getRange(`C2:C${rangeLimit}`).getValues();
  const listOfSubjects = [];
  column.forEach(subjects => subjects[0].split(", ").forEach(subject => listOfSubjects.push(subject)));
  return (getFrequencies(listOfSubjects));
};

const getFrequencies = arr => {
  return arr.reduce((op, inp) => {
    op[inp] = op[inp] || 0;
    op[inp]++;
    return op;
  },{});
};

const statistics = {
  meanGPA: 0,
  distributionOfGPANumber: {},
  meanNationalityGPA: {},
  universityList: [],
  numberOfUniversities: 0,
  totalApplications: 0,
  countries: {},
  destinationCountries: {},
  decisions: {},
  universitySpecificDecisions: {},
  nationalitySpecificDecisionNumbers: {},
  difficultAspects: {},
  interests: {},
  nationalitySpecificInterests: {},
  percentageUniqueInterests: 0,
  degrees: {},
  favouriteTeachers: {},
  subjects: {},
};

const doGet = () => {
  const meanGPA = calculateMeanGPA();
  const distributionOfGPANumber = distributionOfGPA()
  const meanNationalityGPA = calculateMeanNationalityGPA();
  const { universityList, numberOfUniversities } = uniqueSchools();
  const totalNumberOfApplications = calculateTotalNumberOfApplications();
  const decisions = calculateDecisionStatistics();
  const universitySpecificDecisions = commonDecisions();
  const nationalitySpecificDecisionNumbers = nationalityDecisions();
  const countries = uniqueCountries();
  const destinationCountries = confirmedFinalCountries();
  const difficultAspects = difficultAspectsOfUniversityApplications();
  const interests = interestStatistics();
  const nationalitySpecificInterests = nationalityInterests();
  const percentageUniqueInterests = calculatePercentageUniqueInterests();
  const degrees = degreeStatistics();
  const favouriteTeachers = favouriteTeacherStatistics();
  const subjects = subjectStatistics()
  statistics.meanGPA = meanGPA;
  statistics.distributionOfGPANumber = distributionOfGPANumber;
  statistics.meanNationalityGPA = meanNationalityGPA;
  statistics.universityList = universityList;
  statistics.numberOfUniversities = numberOfUniversities;
  statistics.totalApplications = totalNumberOfApplications;
  statistics.decisions = decisions;
  statistics.universitySpecificDecisions = universitySpecificDecisions;
  statistics.nationalitySpecificDecisionNumbers = nationalitySpecificDecisionNumbers;
  statistics.countries = countries;
  statistics.destinationCountries = destinationCountries;
  statistics.difficultAspects = difficultAspects;
  statistics.interests = interests;
  statistics.nationalitySpecificInterests = nationalitySpecificInterests;
  statistics.percentageUniqueInterests = percentageUniqueInterests;
  statistics.degrees = degrees;
  statistics.favouriteTeachers = favouriteTeachers;
  statistics.subjects = subjects;
  return ContentService.createTextOutput(JSON.stringify(statistics)).setMimeType(ContentService.MimeType.JSON);
};