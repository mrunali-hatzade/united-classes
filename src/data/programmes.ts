export interface AcademicProgramme {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  description: string;
  academicLevel: string;
  subjects: string[];
  targetExaminations: string[];
  programmeHighlights: string[];
  duration: string;
  batchTiming: string;
  eligibility: string;
  ctaLabel: string;
  displayStatus: "active" | "upcoming";
  accentColor: "blue" | "indigo" | "emerald" | "amber" | "cyan";
  isSample: boolean;
}

export const academicProgrammes: AcademicProgramme[] = [
  {
    id: "prog-class-11-science",
    slug: "class-11-science",
    title: "Class 11 Science (Foundation & Boards)",
    shortTitle: "Class 11 Science",
    badge: "Foundation & State Board / CBSE",
    description:
      "Build unshakeable conceptual foundations across Physics, Chemistry, Mathematics, and Biology with synchronized Board syllabus coverage and early competitive orientation.",
    academicLevel: "Class 11th (State Board / CBSE)",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    targetExaminations: ["Maharashtra HSC Board", "CBSE Board", "Early JEE / NEET Foundation"],
    programmeHighlights: [
      "NCERT & Maharashtra State Board textbook concept mapping",
      "Daily Practice Problems (DPP) with 150+ problems per chapter",
      "Special numerical foundation module for non-maths/biology students",
      "Weekly chapter-wise timed OMR tests and parent progress reporting",
    ],
    duration: "1 Academic Year (Full Session)",
    batchTiming: "Morning: 6:30 AM – 9:00 AM | Evening: 4:30 PM – 7:30 PM",
    eligibility: "Students passing Class 10th (SSC / CBSE / ICSE)",
    ctaLabel: "Enquire for Class 11",
    displayStatus: "active",
    accentColor: "blue",
    isSample: true,
  },
  {
    id: "prog-class-12-science",
    slug: "class-12-science",
    title: "Class 12 Science (Boards & Rank Acceleration)",
    shortTitle: "Class 12 Science",
    badge: "Board 90%+ & Competitive Rank",
    description:
      "Comprehensive syllabus completion, rigorous derivation drafting for 90%+ in Board examinations, coupled with high-yield numerical drills for entrance examinations.",
    academicLevel: "Class 12th (State Board / CBSE)",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    targetExaminations: ["Maharashtra HSC Board", "CBSE Board", "MHT-CET", "JEE Main", "NEET-UG"],
    programmeHighlights: [
      "Board derivation booklets & step-by-step answer drafting drills",
      "High-frequency competitive question banks and shortcut methods",
      "Full-length pre-board simulated examinations with line-by-line checking",
      "Daily 45-minute 1-on-1 faculty doubt desk support",
    ],
    duration: "1 Academic Year (Until Board & Entrance Examinations)",
    batchTiming: "Morning: 6:30 AM – 9:30 AM | Evening: 4:30 PM – 8:00 PM",
    eligibility: "Students entering Class 12th Science",
    ctaLabel: "Enquire for Class 12",
    displayStatus: "active",
    accentColor: "indigo",
    isSample: true,
  },
  {
    id: "prog-jee-main-advanced",
    slug: "jee-main-advanced",
    title: "JEE Main & Advanced (Engineering Target)",
    shortTitle: "JEE Target Batch",
    badge: "Premier Engineering Focus",
    description:
      "Deep-level analytical problem solving, multi-concept linking, and speed mathematics designed to secure top percentiles for NITs, IIITs, and IITs.",
    academicLevel: "Class 11th & 12th PCM",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    targetExaminations: ["JEE Main", "JEE Advanced"],
    programmeHighlights: [
      "Advanced problem sets with cross-chapter conceptual integration",
      "Speed shortcut techniques targeting 60-second question solutions",
      "National-standard CBT format simulated test series with error analysis",
      "Personalized mentorship with senior faculty for rank optimization",
    ],
    duration: "1 or 2 Years Integrated Batch",
    batchTiming: "Dedicated Evening Batches + Sunday Mock Drills",
    eligibility: "PCM Students targeting Premier Engineering Institutes",
    ctaLabel: "Explore JEE Target",
    displayStatus: "active",
    accentColor: "blue",
    isSample: true,
  },
  {
    id: "prog-neet-ug-medical",
    slug: "neet-ug-medical",
    title: "NEET-UG Target Batch (Medical Entrance)",
    shortTitle: "NEET Target Batch",
    badge: "Premier Medical Focus",
    description:
      "Comprehensive medical entrance coaching focused on achieving 360/360 in NCERT Biology and turning Physics & Chemistry into strong rank deciders.",
    academicLevel: "Class 11th & 12th PCB",
    subjects: ["Physics", "Chemistry", "Biology"],
    targetExaminations: ["NEET-UG (Medical Entrance)"],
    programmeHighlights: [
      "Exhaustive line-by-line NCERT Biology forensic reading & diagram drills",
      "Step-by-step Physics numerical demystification for medical aspirants",
      "Organic reaction mechanism maps and inorganic NCERT flashcards",
      "Weekly 180-question timed OMR simulation tests under exam conditions",
    ],
    duration: "1 or 2 Years Integrated Batch",
    batchTiming: "Dedicated Morning & Evening Batches + Sunday Tests",
    eligibility: "PCB / PCMB Students targeting MBBS / BDS / BAMS",
    ctaLabel: "Explore NEET Target",
    displayStatus: "active",
    accentColor: "emerald",
    isSample: true,
  },
  {
    id: "prog-mht-cet-prep",
    slug: "mht-cet-prep",
    title: "MHT-CET Target Batch (Maharashtra Engineering & Pharmacy)",
    shortTitle: "MHT-CET Batch",
    badge: "State Entrance Special",
    description:
      "State Board textbook mastery, speed numericals, and elimination techniques tailored for 99+ percentile scores in COEP, VJTI, and government colleges.",
    academicLevel: "Class 12th / Droppers (PCM & PCB)",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    targetExaminations: ["MHT-CET (PCM Group / PCB Group)"],
    programmeHighlights: [
      "Maharashtra State Board textbook line-by-line review & key point summaries",
      "45-second question elimination shortcuts without negative marking",
      "Past 10 years chapter-wise MHT-CET question bank coverage",
      "Full syllabus online computer-based tests (CBT) matching state exam UI",
    ],
    duration: "Integrated 1-Year / Fast-Track Crash Modules",
    batchTiming: "Flexible Weekend & Evening Batches",
    eligibility: "Maharashtra State Board & CBSE 12th Students",
    ctaLabel: "Explore MHT-CET",
    displayStatus: "active",
    accentColor: "cyan",
    isSample: true,
  },
];
