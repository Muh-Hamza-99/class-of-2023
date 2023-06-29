const app = SpreadsheetApp;
const spreadsheet = app.getActiveSpreadsheet();
const activeSheet = spreadsheet.getActiveSheet();

const rangeLimit = 23;

const getIGSubjectsWithGrades = () => {
  const column = activeSheet.getRange(`C2:C${rangeLimit}`).getValues();
  const IGSubjects = [];
  column.forEach(IGSubjectList => {
    if (IGSubjectList[0].includes(",")) IGSubjectList[0].split(",").forEach(subject => IGSubjects.push(subject));
    else if (IGSubjectList[0].includes("\n")) IGSubjectList[0].split("\n").forEach(subject => IGSubjects.push(subject));
    else IGSubjects = [IGSubjectList[0]];
  });
  return IGSubjects;
};

const getASSubjectsWithGrades = () => {
  const column = activeSheet.getRange(`E2:E${rangeLimit}`).getValues();
  const ASSubjects = [];
  column.forEach(ASSubjectList => {
    if (ASSubjectList[0].includes(",")) ASSubjectList[0].split(",").forEach(subject => ASSubjects.push(subject));
    else if (ASSubjectList[0].includes("\n")) ASSubjectList[0].split("\n").forEach(subject => ASSubjects.push(subject));
    else ASSubjects = [ASSubjectList[0]];
  });
  return ASSubjects;
};

const getIGSubjects = () => {
  const IGSubjectsWithGrades = getIGSubjectsWithGrades();
  const IGSubjects = [];
  IGSubjectsWithGrades.forEach(IGSubject => IGSubjects.push((IGSubject.split(" ("))[0]));
  return IGSubjects;
};

const getASSubjects = () => {
  const ASSubjectsWithGrades = getASSubjectsWithGrades();
  const ASSubjects = [];
  ASSubjectsWithGrades.forEach(ASSubject => ASSubjects.push((ASSubject.split(" ("))[0]));
  return ASSubjects;
};

const IGSubjectFrequency = () => getFrequencies(getIGSubjects());

const ASSubjectFrequency = () => getFrequencies(getASSubjects());

const IGGradeFrequency = () => {
  const IGSubjectsGrades = getIGSubjectsWithGrades();
  const IGGrades = [];
  IGSubjectsGrades.forEach(subjectGrade => IGGrades.push(((subjectGrade.slice(0, -1)).split(" ("))[1]));
  return (getFrequencies(IGGrades));
};

const ASGradeFrequency = () => {
  const ASSubjectsGrades = getASSubjectsWithGrades();
  const ASGrades = [];
  ASSubjectsGrades.forEach(subjectGrade => ASGrades.push(((subjectGrade.slice(0, -1)).split(" ("))[1]));
  return (getFrequencies(ASGrades));
}

const getExtraExamsWithGrades = () => {
  const column = activeSheet.getRange(`I2:I${rangeLimit}`).getValues();
  const extraExams = [];
  const extraExamsNested = [];
  column.forEach(extraExamsList => {
    if (extraExamsList[0] !== "") extraExamsList.forEach(examList => examList.split("\n").forEach(exam => extraExams.push(exam)));
  });
  extraExams.forEach(exam => {
    const examGrade = exam.split(" (");
    examGrade[1] = examGrade[1].slice(0, -1);
    extraExamsNested.push(examGrade);
  });
  return extraExamsNested;
};

const getExtraExamsWithoutGrades = () => {
  const extraExamsNames = [];
  getExtraExamsWithGrades().forEach(exam => extraExamsNames.push(exam[0]));
  return (getFrequencies(extraExamsNames));
};

const calculateAverageSATScore = () => {
  const extraExams = getExtraExamsWithGrades();
  let totalSATStudents = 0;
  let totalSATScores = 0;
  for (let extraExam of extraExams) {
    if (extraExam[0] === "SAT") {
      totalSATStudents++;
      totalSATScores += parseInt(extraExam[1]);
    };
  };
  return (Math.round(totalSATScores/totalSATStudents));
};

const calculateAverageACTScore = () => {
  const extraExams = getExtraExamsWithGrades();
  let totalACTStudents = 0;
  let totalACTScores = 0;
  for (let extraExam of extraExams) {
    if (extraExam[0] === "ACT") {
      totalACTStudents++;
      totalACTScores += parseInt(extraExam[1]);
    };
  };
  return (Math.round(totalACTScores/totalACTStudents));
};

const calculateAverageIELTSScore = () => {
  const extraExams = getExtraExamsWithGrades();
  let totalIELTSStudents = 0;
  let totalIELTSScores = 0;
  for (let extraExam of extraExams) {
    if (extraExam[0] === "IELTs") {
      totalIELTSStudents++;
      totalIELTSScores += parseInt(extraExam[1]);
    };
  };
  return (parseFloat(totalIELTSScores/totalIELTSStudents).toFixed(1));
};

const calculateAverageQudraatSScore = () => {
  const extraExams = getExtraExamsWithGrades();
  let totalQudraatStudents = 0;
  let totalQudraatScores = 0;
  for (let extraExam of extraExams) {
    if (extraExam[0] === "Qudraat") {
      totalQudraatStudents++;
      totalQudraatScores += parseInt(extraExam[1]);
    };
  };
  return (Math.round(totalQudraatScores/totalQudraatStudents));
};

const calculatePercentageExtraExams = () => {
  const gaveExtraExams = [].concat(...(activeSheet.getRange(`H2:H${rangeLimit}`).getValues()));
  let didExtraExams = 0;
  for (let answer of gaveExtraExams) if (answer === "Yes") didExtraExams++;
  return (Math.round((didExtraExams/gaveExtraExams.length) * 100))
};

const IGSubjectGradeFrequency = () => {
  const IGSubjectGradeFrequencyObject = {};
  const IGSubjectGrades = getIGSubjectsWithGrades();
  const IGSubjectGradesNested = IGSubjectGrades.map(IGSubjectList => {
    const IGSubjectListNested = IGSubjectList.split(" (");
    IGSubjectListNested[1] = IGSubjectListNested[1].slice(0, -1);
    return IGSubjectListNested;
  });
  for (let i = 0; i < IGSubjectGradesNested.length; i++) {
    if (!IGSubjectGradeFrequencyObject.hasOwnProperty(IGSubjectGradesNested[i][0])) {
      IGSubjectGradeFrequencyObject[IGSubjectGradesNested[i][0]] = {};
      IGSubjectGradeFrequencyObject[IGSubjectGradesNested[i][0]][IGSubjectGradesNested[i][1]] = 1;
    }
    else if (IGSubjectGradeFrequencyObject.hasOwnProperty(IGSubjectGradesNested[i][0])) {
      if (!(IGSubjectGradeFrequencyObject[IGSubjectGradesNested[i][0]].hasOwnProperty(IGSubjectGradesNested[i][1]))) IGSubjectGradeFrequencyObject[IGSubjectGradesNested[i][0]][IGSubjectGradesNested[i][1]] = 1;
      else if (IGSubjectGradeFrequencyObject[IGSubjectGradesNested[i][0]].hasOwnProperty(IGSubjectGradesNested[i][1])) IGSubjectGradeFrequencyObject[IGSubjectGradesNested[i][0]][IGSubjectGradesNested[i][1]] += 1;
    };
  };
  return IGSubjectGradeFrequencyObject;
};

const ASSubjectGradeFrequency = () => {
  const ASSubjectGradeFrequencyObject = {};
  const ASSubjectGrades = getASSubjectsWithGrades();
  const ASSubjectGradesNested = ASSubjectGrades.map(ASSubjectList => {
    const ASSubjectListNested = ASSubjectList.split(" (");
    ASSubjectListNested[1] = ASSubjectListNested[1].slice(0, -1);
    return ASSubjectListNested;
  });
  for (let i = 0; i < ASSubjectGradesNested.length; i++) {
    if (!ASSubjectGradeFrequencyObject.hasOwnProperty(ASSubjectGradesNested[i][0])) {
      ASSubjectGradeFrequencyObject[ASSubjectGradesNested[i][0]] = {};
      ASSubjectGradeFrequencyObject[ASSubjectGradesNested[i][0]][ASSubjectGradesNested[i][1]] = 1;
    }
    else if (ASSubjectGradeFrequencyObject.hasOwnProperty(ASSubjectGradesNested[i][0])) {
      if (!(ASSubjectGradeFrequencyObject[ASSubjectGradesNested[i][0]].hasOwnProperty(ASSubjectGradesNested[i][1]))) ASSubjectGradeFrequencyObject[ASSubjectGradesNested[i][0]][ASSubjectGradesNested[i][1]] = 1;
      else if (ASSubjectGradeFrequencyObject[ASSubjectGradesNested[i][0]].hasOwnProperty(ASSubjectGradesNested[i][1])) ASSubjectGradeFrequencyObject[ASSubjectGradesNested[i][0]][ASSubjectGradesNested[i][1]] += 1;
    };
  };
  return ASSubjectGradeFrequencyObject;
};

const numberOfIGSubjectsFrequency = () => (getFrequencies([].concat(...(activeSheet.getRange(`B2:B${rangeLimit}`).getValues()))));

const numberOfASSubjectsFrequency = () => (getFrequencies([].concat(...(activeSheet.getRange(`D2:D${rangeLimit}`).getValues()))));

const changesBetweenASAndA = () => {
  const changesObject = {};
  const column = [].concat(...(activeSheet.getRange(`G2:G${rangeLimit}`).getValues())).filter(value => value !== "");
  for (let subject of column) {
    const subjectChangeArray = subject.split(" (");
    subjectChangeArray[1] = subjectChangeArray[1].slice(0, -1);
    if (!changesObject.hasOwnProperty(subjectChangeArray[0])) changesObject[subjectChangeArray[0]] = { added: 0, dropped: 0 };
    if (subjectChangeArray[1] === "A") changesObject[subjectChangeArray[0]].added += 1;
    else if (subjectChangeArray[1] === "D") changesObject[subjectChangeArray[0]].dropped += 1;
  };
  return changesObject;
};

const getFrequencies = arr => {
  return arr.reduce((op, inp) => {
    op[inp] = op[inp] || 0;
    op[inp]++;
    return op;
  },{});
};

const statistics = {
  numberOfIGSubjects: [],
  IGSubjects: [],
  IGSubjectsGrades: [],
  IGGrades: {},
  numberOfASSubjects: [],
  ASSubjects: [],
  ASSubjectsGrades: [],
  ASGrades: {},
  droppingsAndAdditions: {},
  extraExams: [],
  percentageThatGaveExtraExams: 0,
  averageSATScore: 0,
  averageACTScore: 0,
  averageIELTSScore: 0,
  averageQudraatScore: 0,
};

const doGet = () => {
  const numberOfIGSubjects = numberOfIGSubjectsFrequency();
  const IGSubjects = IGSubjectFrequency();
  const IGSubjectsGrades = IGSubjectGradeFrequency();
  const IGGrades = IGGradeFrequency();
  const numberOfASSubjects = numberOfASSubjectsFrequency();
  const ASSubjects = ASSubjectFrequency();
  const ASSubjectsGrades = ASSubjectGradeFrequency();
  const ASGrades = ASGradeFrequency();
  const droppingsAndAdditions = changesBetweenASAndA();
  const extraExams = getExtraExamsWithoutGrades();
  const percentageThatGaveExtraExams = calculatePercentageExtraExams();
  const averageSATScore = calculateAverageSATScore();
  const averageACTScore = calculateAverageACTScore();
  const averageIELTSScore = calculateAverageIELTSScore();
  const averageQudraatScore = calculateAverageQudraatSScore();
  statistics.numberOfIGSubjects = numberOfIGSubjects;
  statistics.IGSubjects = IGSubjects;
  statistics.IGSubjectsGrades = IGSubjectsGrades;
  statistics.IGGrades = IGGrades
  statistics.numberOfASSubjects = numberOfASSubjects;
  statistics.ASSubjects = ASSubjects;
  statistics.ASSubjectsGrades = ASSubjectsGrades;
  statistics.ASGrades = ASGrades;
  statistics.droppingsAndAdditions = droppingsAndAdditions;
  statistics.extraExams = extraExams;
  statistics.percentageThatGaveExtraExams = percentageThatGaveExtraExams;
  statistics.averageSATScore = averageSATScore;
  statistics.averageACTScore = averageACTScore;
  statistics.averageIELTSScore = averageIELTSScore;
  statistics.averageQudraatScore = averageQudraatScore;
  return ContentService.createTextOutput(JSON.stringify(statistics)).setMimeType(ContentService.MimeType.JSON)
};