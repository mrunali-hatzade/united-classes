import { coursesData, CourseItem } from "./courses";

export interface SubjectHighlight {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  iconName: string;
  accentColor: string;
  badge: string;
  keyTopics: string[];
  learningFocus: string[];
  assignedMentor: {
    name: string;
    designation: string;
    qualification: string;
    experience: string;
    imageUrl: string;
  };
  courseHref: string;
}

export const scienceSubjects: SubjectHighlight[] = [
  {
    id: "sub-physics",
    name: "Physics",
    slug: "physics",
    tagline: "First-Principles Conceptual Clarity & Numerical Mastery",
    shortDescription:
      "Demystifying complex physical laws with visual thought experiments, systematic equation derivation, and 60-second speed numerical techniques.",
    iconName: "Atom",
    accentColor: "blue",
    badge: "Mechanics • Electromagnetism • Optics",
    keyTopics: [
      "Vectors, Kinematics & Laws of Motion",
      "Rotational Dynamics, Gravitation & Thermodynamics",
      "Electrostatics, Current Electricity & Magnetism",
      "Wave Optics, Ray Optics & Modern Physics",
    ],
    learningFocus: [
      "Rigorous derivation drafting for Maharashtra State Board & CBSE",
      "Daily Practice Problems (DPP) from formula application to multi-concept JEE/NEET",
      "Free-body diagram modeling and dimensional analysis shortcuts",
    ],
    assignedMentor: {
      name: "Prof. S. R. Sharma",
      designation: "Head of Physics Department",
      qualification: "M.Sc. Physics (12+ Yrs Exp.)",
      experience: "12+ Years Mentoring JEE & NEET Aspirants in Bhandara",
      imageUrl: "/faculty/physics-faculty.jpg",
    },
    courseHref: "/courses/physics",
  },
  {
    id: "sub-chemistry",
    name: "Chemistry",
    slug: "chemistry",
    tagline: "Reaction Mechanisms, Physical Numericals & NCERT Forensics",
    shortDescription:
      "Balancing physical chemistry calculations, organic reaction mechanisms with curved-arrow logic, and systematic inorganic NCERT memorization tools.",
    iconName: "FlaskConical",
    accentColor: "emerald",
    badge: "Physical • Organic • Inorganic",
    keyTopics: [
      "Chemical Thermodynamics, Solutions & Electrochemistry",
      "Chemical Kinetics & Equilibrium Numericals",
      "Organic Reaction Mechanisms, Aldehydes, Ketones & Amines",
      "Coordination Compounds, p-Block & Metallurgy",
    ],
    learningFocus: [
      "Curved-arrow electron-pushing mechanisms for organic transformations",
      "NCERT line-by-line inorganic flashcards & trend matrices",
      "Formula roadmaps for physical chemistry numerical accuracy",
    ],
    assignedMentor: {
      name: "Dr. A. V. Deshmukh",
      designation: "Head of Chemistry Department",
      qualification: "M.Sc. Organic Chemistry, CSIR-NET (10+ Yrs Exp.)",
      experience: "10+ Years Competitive Exam Coaching & Board Prep",
      imageUrl: "/faculty/chemistry-faculty.jpg",
    },
    courseHref: "/courses/chemistry",
  },
  {
    id: "sub-mathematics",
    name: "Mathematics",
    slug: "mathematics",
    tagline: "Calculus Precision, 3D Coordinate Geometry & CET Speed Shortcuts",
    shortDescription:
      "Cultivating logical rigor and step-by-step problem drafting for Boards while building rapid algebraic and trigonometric shortcuts for JEE & MHT-CET.",
    iconName: "Calculator",
    accentColor: "indigo",
    badge: "Calculus • Algebra • Vectors & 3D",
    keyTopics: [
      "Differential & Integral Calculus with Applications",
      "Vectors & Three-Dimensional Coordinate Geometry",
      "Matrices, Determinants & Linear Programming",
      "Trigonometry, Complex Numbers & Probability",
    ],
    learningFocus: [
      "Clean step-by-step proof and theorem drafting for Board exams",
      "Speed graph sketching for functions and domain-range identification",
      "Option-elimination and value-substitution tricks for MHT-CET & JEE",
    ],
    assignedMentor: {
      name: "Prof. V. N. Patil",
      designation: "Head of Mathematics & CET Lead",
      qualification: "M.Sc. Applied Mathematics / B.Tech (11+ Yrs Exp.)",
      experience: "11+ Years JEE Main & MHT-CET Mentorship",
      imageUrl: "/faculty/mathematics-faculty.jpg",
    },
    courseHref: "/courses/mathematics",
  },
  {
    id: "sub-biology",
    name: "Biology",
    slug: "biology",
    tagline: "Forensic NCERT Botany & Zoology targeting 360/360 in NEET",
    shortDescription:
      "Deep structural understanding of living systems through clear anatomical diagrams, physiological process flowcharts, and high-frequency NEET question drilling.",
    iconName: "Dna",
    accentColor: "cyan",
    badge: "Botany • Zoology • Human Physiology",
    keyTopics: [
      "Human Physiology & Neural Coordination",
      "Genetics, Molecular Basis of Inheritance & Evolution",
      "Plant Physiology, Photosynthesis & Plant Anatomy",
      "Biotechnology Principles, Applications & Ecology",
    ],
    learningFocus: [
      "Line-by-line NCERT forensic reading ensuring no test trap is missed",
      "Precision diagram drafting for State Board and CBSE theory answers",
      "Weekly 90-question timed OMR entrance drills simulating actual NEET-UG",
    ],
    assignedMentor: {
      name: "Dr. Neha K. Wanjari",
      designation: "Head of Biology (Botany & Zoology)",
      qualification: "M.Sc. Life Sciences, Ph.D. Scholar (9+ Yrs Exp.)",
      experience: "9+ Years NEET-UG 350+ Score Mentorship",
      imageUrl: "/faculty/biology-faculty.jpg",
    },
    courseHref: "/courses/biology",
  },
];
