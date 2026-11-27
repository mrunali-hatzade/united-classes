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
      "Build strong conceptual foundations across Physics, Chemistry, Mathematics, and Biology with synchronized Board syllabus coverage and early competitive orientation.",
    academicLevel: "Class 11th (State Board / CBSE)",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    targetExaminations: ["Maharashtra HSC Board", "CBSE Board", "Early JEE / NEET Foundation"],
    programmeHighlights: [
      "NCERT & Maharashtra State Board textbook concept mapping",
      "Daily Practice Problems (DPP) with chapter-wise graded exercises",
      "Special numerical foundation module for non-maths/biology students",
      "Regular chapter-wise assessments to evaluate concept mastery",
    ],
    duration: "1 Academic Year (Full Session)",
    batchTiming: "Morning & Evening Batch Options (Confirm at Center)",
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
    badge: "State Board & Competitive Focus",
    description:
      "Comprehensive syllabus completion, structured derivation drafting for Board examinations, coupled with high-yield numerical practice for entrance examinations.",
    academicLevel: "Class 12th (State Board / CBSE)",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    targetExaminations: ["Maharashtra HSC Board", "CBSE Board", "MHT-CET", "JEE Main", "NEET-UG"],
    programmeHighlights: [
      "Board derivation booklets & step-by-step answer drafting drills",
      "High-frequency competitive question banks and structured methods",
      "Full-length pre-board practice examinations with detailed review",
      "Dedicated doubt resolution support during center hours",
    ],
    duration: "1 Academic Year (Until Board & Entrance Examinations)",
    batchTiming: "Morning & Evening Batch Options (Confirm at Center)",
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
      "Deep-level analytical problem solving, multi-concept linking, and systematic mathematics designed to prepare students for national engineering entrances.",
    academicLevel: "Class 11th & 12th PCM",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    targetExaminations: ["JEE Main", "JEE Advanced"],
    programmeHighlights: [
      "Advanced problem sets with cross-chapter conceptual integration",
      "Analytical problem-solving methods and time management techniques",
      "Simulated computer-based test series with error analysis",
      "Personalized mentorship with senior faculty for performance optimization",
    ],
    duration: "1 or 2 Years Integrated Batch",
    batchTiming: "Dedicated Batches + Practice Assessments (Confirm at Center)",
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
      "Comprehensive medical entrance coaching focused on mastering core NCERT Biology and developing strong problem-solving in Physics & Chemistry.",
    academicLevel: "Class 11th & 12th PCB",
    subjects: ["Physics", "Chemistry", "Biology"],
    targetExaminations: ["NEET-UG (Medical Entrance)"],
    programmeHighlights: [
      "Structured NCERT Biology concept review and labeled diagram practice",
      "Step-by-step Physics numerical guidance for medical aspirants",
      "Organic reaction mechanism maps and inorganic NCERT review cards",
      "Regular timed objective tests under examination conditions",
    ],
    duration: "1 or 2 Years Integrated Batch",
    batchTiming: "Dedicated Batches + Practice Tests (Confirm at Center)",
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
      "State Board textbook mastery, numerical problem-solving, and elimination techniques tailored for competitive entrance to Maharashtra engineering and pharmacy colleges.",
    academicLevel: "Class 12th / Droppers (PCM & PCB)",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    targetExaminations: ["MHT-CET (PCM Group / PCB Group)"],
    programmeHighlights: [
      "Maharashtra State Board textbook review & key formula summaries",
      "Question analysis and option elimination methods for MHT-CET patterns",
      "Past years' chapter-wise MHT-CET question bank coverage",
      "Full syllabus practice mock tests matching state exam formats",
    ],
    duration: "Integrated 1-Year / Fast-Track Crash Modules",
    batchTiming: "Flexible Batch Options (Confirm at Center)",
    eligibility: "Maharashtra State Board & CBSE 12th Students",
    ctaLabel: "Explore MHT-CET",
    displayStatus: "active",
    accentColor: "cyan",
    isSample: true,
  },
];
