export interface ResultPlaceholder {
  id: string;
  studentName: string;
  exam: string;
  badge: string;
  achievement: string;
  academicYear: string;
  quotePlaceholder: string;
  isPlaceholderNotice: string;
}

export const resultsData: ResultPlaceholder[] = [
  {
    id: "res-1",
    studentName: "Sample Student 01",
    exam: "JEE Main & Advanced",
    badge: "Engineering Aspirant",
    achievement: "Add Verified Result Here",
    academicYear: "2025–26 Batch",
    quotePlaceholder:
      "Having specialized teachers for Physics, Chemistry, and Maths under one roof at United Classes made my JEE preparation structured and stress-free.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-2",
    studentName: "Sample Student 02",
    exam: "NEET-UG (Medical)",
    badge: "Medical Aspirant",
    achievement: "Add Verified Result Here",
    academicYear: "2025–26 Batch",
    quotePlaceholder:
      "Physics and Organic Chemistry used to be my biggest worries, but the formula-mapping, NCERT Biology drills, and daily speed practice built immense confidence.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-3",
    studentName: "Sample Student 03",
    exam: "MHT-CET (Engineering)",
    badge: "State Entrance",
    achievement: "Add Verified Result Here",
    academicYear: "2025–26 Batch",
    quotePlaceholder:
      "State Board textbook line-by-line revision across Physics, Chemistry & Maths and speed elimination shortcuts made all the difference in MHT-CET.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-4",
    studentName: "Sample Student 04",
    exam: "Class 12 HSC Board (PCMB)",
    badge: "Board Exam",
    achievement: "Add Verified Result Here",
    academicYear: "2025–26 Batch",
    quotePlaceholder:
      "Step-by-step derivation practice, reaction mechanisms, and calculus answer drafting gave me clarity on how to score top marks in State Board exams.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
];

export const statisticsPlaceholders = [
  {
    label: "Batch Environment",
    value: "Focused",
    subtext: "Limited intake for individual mentor attention",
  },
  {
    label: "All 4 Core Subjects",
    value: "PCMB",
    subtext: "Physics, Chemistry, Maths & Biology under one roof",
  },
  {
    label: "Practice Worksheets",
    value: "Graded",
    subtext: "Structured problem sets from Board to entrance level",
  },
  {
    label: "Doubt Resolution",
    value: "Dedicated",
    subtext: "Accessible mentor guidance during center hours",
  },
];
