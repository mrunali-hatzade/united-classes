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
      "Demystifying complex physical laws with visual thought experiments, systematic equation derivation, and structured numerical problem-solving.",
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
      "Free-body diagram modeling and dimensional analysis methods",
    ],
    assignedMentor: {
      name: "Prof. S. R. Sharma",
      designation: "Head of Physics Department",
      qualification: "M.Sc. Physics (Specialist)",
      experience: "Senior Faculty Profile • Dedicated Physics Mentorship",
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
      "Balancing physical chemistry calculations, organic reaction mechanisms with curved-arrow logic, and systematic inorganic NCERT study tools.",
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
      "NCERT concept revision cards and periodic trend matrices",
      "Formula roadmaps for physical chemistry numerical accuracy",
    ],
    assignedMentor: {
      name: "Dr. A. V. Deshmukh",
      designation: "Head of Chemistry Department",
      qualification: "M.Sc. Organic Chemistry, CSIR-NET (Specialist)",
      experience: "Senior Faculty Profile • Dedicated Chemistry Mentorship",
      imageUrl: "/faculty/chemistry-faculty.jpg",
    },
    courseHref: "/courses/chemistry",
  },
  {
    id: "sub-mathematics",
    name: "Mathematics",
    slug: "mathematics",
    tagline: "Calculus Precision, 3D Coordinate Geometry & CET Problem Solving",
    shortDescription:
      "Cultivating logical rigor and step-by-step problem drafting for Boards while building rapid algebraic and trigonometric methods for JEE & MHT-CET.",
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
      "Graph sketching for functions and domain-range identification",
      "Option-elimination and time management methods for MHT-CET & JEE",
    ],
    assignedMentor: {
      name: "Prof. V. N. Patil",
      designation: "Head of Mathematics & CET Lead",
      qualification: "M.Sc. Applied Mathematics (Specialist)",
      experience: "Senior Faculty Profile • Dedicated Mathematics Mentorship",
      imageUrl: "/faculty/mathematics-faculty.jpg",
    },
    courseHref: "/courses/mathematics",
  },
  {
    id: "sub-biology",
    name: "Biology",
    slug: "biology",
    tagline: "Comprehensive NCERT Botany & Zoology for Boards & NEET-UG",
    shortDescription:
      "Deep structural understanding of living systems through clear anatomical diagrams, physiological process flowcharts, and structured objective question practice.",
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
      "Systematic NCERT concept review emphasizing key definitions and pathways",
      "Precision diagram drafting for State Board and CBSE theory answers",
      "Regular timed objective assessments for entrance exam practice",
    ],
    assignedMentor: {
      name: "Dr. Neha K. Wanjari",
      designation: "Head of Biology (Botany & Zoology)",
      qualification: "M.Sc. Life Sciences (Specialist)",
      experience: "Senior Faculty Profile • Dedicated Biology Mentorship",
      imageUrl: "/faculty/biology-faculty.jpg",
    },
    courseHref: "/courses/biology",
  },
];
