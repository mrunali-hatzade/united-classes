export interface AssignedFaculty {
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  specialization: string;
  imageUrl?: string;
  highlights?: string[];
}

export interface CourseItem {
  id: string;
  slug: string;
  title: string;
  badge: string;
  targetAudience: string;
  duration: string;
  batchSize: string;
  level: string;
  shortDescription: string;
  fullDescription: string;
  keyTopics: string[];
  features: string[];
  whoShouldEnrol: string[];
  learningApproach: {
    title: string;
    description: string;
  }[];
  curriculumHighlights: {
    module: string;
    description: string;
    chapters: string[];
  }[];
  schedulePlaceholder: string;
  feeNotice: string;
  iconName: "Atom" | "Zap" | "Compass" | "Activity" | "Target" | "FlaskConical" | "Calculator" | "Dna" | string;
  accentColor: string;
  assignedFaculty: AssignedFaculty;
  facultyTeamList?: {
    subject: string;
    name: string;
    designation: string;
    qualification: string;
    imageUrl?: string;
  }[];
}

export const coursesData: CourseItem[] = [
  {
    id: "physics-coaching",
    slug: "physics",
    title: "Physics Tuition & Coaching",
    badge: "Subject 01 • Physics (PCMB)",
    targetAudience: "Class 11th & 12th Science (State Board / CBSE) • JEE • NEET • MHT-CET",
    duration: "1 or 2 Academic Years (Class 11 / 12)",
    batchSize: "Limited Batch Size for Focused Attention",
    level: "Physics • 11th, 12th, Boards & Competitive",
    shortDescription:
      "Build a strong conceptual foundation in mechanics, electromagnetism, optics, and modern physics through structured derivations and systematic problem-solving.",
    fullDescription:
      "Physics is the bedrock of science and engineering. At United Classes Bhandara, our dedicated Physics tuition breaks down complex physical laws into intuitive models. Students learn to derive equations, understand sign conventions, sketch free-body diagrams, and solve competitive numericals with clear physical reasoning rather than memorizing formulas by rote.",
    keyTopics: [
      "Kinematics, Vectors & Newton's Laws of Motion",
      "Work, Energy, Rotational Dynamics & Gravitation",
      "Thermodynamics, Heat Transfer & Wave Mechanics",
      "Electrostatics, Current Electricity & Magnetism",
      "Ray & Wave Optics, Modern Physics & Semiconductor Electronics",
    ],
    features: [
      "Dedicated subject specialist guidance focused on conceptual clarity",
      "Derivation worksheets structured around Maharashtra State Board & CBSE syllabi",
      "Daily Practice Problem (DPP) sheets with chapter-wise numerical exercises",
      "Problem-solving methods and dimensional analysis techniques for entrance exams",
      "Dedicated doubt resolution support during center hours",
    ],
    whoShouldEnrol: [
      "Class 11th and 12th Science students seeking structured guidance in Physics numericals.",
      "NEET-UG aspirants aiming to strengthen conceptual accuracy in Physics.",
      "JEE Main & Advanced aspirants developing advanced analytical reasoning.",
      "Maharashtra State Board students preparing for HSC Board theoretical derivations.",
    ],
    learningApproach: [
      {
        title: "Visual First Principles",
        description:
          "Before equations are written, physical thought experiments and real-life analogies establish why the law works.",
      },
      {
        title: "Mathematical Toolkit Training",
        description:
          "Targeted drills in calculus, vectors, and coordinate systems so mathematics never impedes physical reasoning.",
      },
      {
        title: "Graded Numerical Progression",
        description:
          "Problems progress systematically from fundamental formula application to multi-concept entrance-level questions.",
      },
      {
        title: "Regular Subject Testing",
        description:
          "Periodic assessments alternating between subjective Board answer formats and timed entrance MCQs.",
      },
    ],
    curriculumHighlights: [
      {
        module: "Module 1: Mechanics & Dynamics (Class 11)",
        description: "Motion in 1D & 2D, vectors, friction, circular motion, work-energy theorem, and rotational inertia.",
        chapters: ["Kinematics & Vectors", "Laws of Motion", "Work, Energy & Rotational Motion"],
      },
      {
        module: "Module 2: Bulk Matter & Thermal Physics (Class 11)",
        description: "Fluids, elasticity, thermal expansion, kinetic theory, heat engines, and simple harmonic oscillations.",
        chapters: ["Fluid Mechanics", "Thermodynamics", "Waves & Sound"],
      },
      {
        module: "Module 3: Electromagnetism & Optics (Class 12)",
        description: "Electric charges, Gauss law, circuits, magnetic forces, electromagnetic induction, AC currents, and ray/wave optics.",
        chapters: ["Electrostatics & Current", "Magnetism & EMI", "Ray & Wave Optics"],
      },
      {
        module: "Module 4: Modern Physics & Electronics (Class 12)",
        description: "Photoelectric effect, Bohr atom, nuclear binding, radioactivity, diodes, transistors, and logic gates.",
        chapters: ["Dual Nature of Radiation", "Atoms & Nuclei", "Semiconductor Devices"],
      },
    ],
    schedulePlaceholder: "Morning & Evening Batch Options (Confirm with Office)",
    feeNotice: "Affordable subject tuition fee structure with flexible installment plans. Inquire at center.",
    iconName: "Atom",
    accentColor: "from-blue-600 to-cyan-500",
    assignedFaculty: {
      name: "Prof. S. R. Sharma",
      designation: "Physics Faculty (Subject Lead)",
      qualification: "M.Sc. Physics (Specialist Faculty)",
      experience: "Senior Faculty Profile • Dedicated Physics Mentorship",
      specialization: "Mechanics, Rotational Dynamics, Electrodynamics & Optics",
      imageUrl: "/faculty/physics-faculty.jpg",
      highlights: [
        "First-principles conceptual derivation focus",
        "Problem-solving methods for Board and entrance questions",
        "Structured personal doubt clearance during center hours",
      ],
    },
  },
  {
    id: "chemistry-coaching",
    slug: "chemistry",
    title: "Chemistry Tuition & Coaching",
    badge: "Subject 02 • Chemistry (PCMB)",
    targetAudience: "Class 11th & 12th Science (State Board / CBSE) • JEE • NEET • MHT-CET",
    duration: "1 or 2 Academic Years (Class 11 / 12)",
    batchSize: "Limited Batch Size for Focused Attention",
    level: "Chemistry • 11th, 12th, Boards & Competitive",
    shortDescription:
      "Develop conceptual clarity across Organic reaction mechanisms, Physical chemistry problem-solving, and Inorganic periodic trends aligned with Board and competitive syllabi.",
    fullDescription:
      "Chemistry is a highly scoring subject in competitive exams when taught systematically. At United Classes Bhandara, our Chemistry tuition organizes the subject into its three core areas: Physical Chemistry (numerical problem-solving), Organic Chemistry (reaction mechanisms and functional groups), and Inorganic Chemistry (periodic trends and coordination compounds).",
    keyTopics: [
      "Physical Chemistry: Mole Concept, Thermodynamics, Equilibrium, Electrochemistry & Kinetics",
      "Organic Chemistry: Reaction Mechanisms, Hydrocarbons, Haloalkanes, Alcohols, Aldehydes & Amines",
      "Inorganic Chemistry: Periodic Table, Chemical Bonding, Coordination Compounds & p/d/f Block",
      "Applied Chemistry: Biomolecules, Polymers & Practical Chemistry",
      "Structured NCERT Concepts & State Board Derivation Maps",
    ],
    features: [
      "Structured subject mentorship covering Physical, Organic, and Inorganic Chemistry",
      "Organized reaction mechanism summaries and study reference sheets",
      "Step-by-step numerical problem solving for physical chemistry",
      "Comprehensive NCERT coverage for Board and competitive exam readiness",
      "State Board theoretical derivations and IUPAC nomenclature practice",
    ],
    whoShouldEnrol: [
      "Class 11th and 12th students seeking structured understanding of organic reactions and reagents.",
      "NEET-UG aspirants aiming for balanced preparation in Chemistry.",
      "JEE Main & Advanced students requiring systematic numerical practice in physical chemistry.",
      "Board students preparing for Maharashtra HSC Chemistry theory and reactions.",
    ],
    learningApproach: [
      {
        title: "Mechanism-Driven Organic Learning",
        description:
          "Rather than rote memorization, students understand nucleophiles, electrophiles, and reaction pathways.",
      },
      {
        title: "Physical Chemistry Problem Solving",
        description:
          "Systematic calculation methods for equilibrium, thermodynamics, and electrochemistry numericals.",
      },
      {
        title: "Tabular Inorganic Summaries",
        description:
          "Structured tabular revision for periodic trends, oxidation states, and coordination properties.",
      },
      {
        title: "Regular Concept Checkpoints",
        description:
          "Frequent revision checks on reaction conversions and reagent roles.",
      },
    ],
    curriculumHighlights: [
      {
        module: "Physical Chemistry Foundation & Advanced",
        description: "Mole concept, atomic structure, states of matter, chemical thermodynamics, equilibrium, solutions, electrochemistry, and kinetics.",
        chapters: ["Basic Concepts & Thermodynamics", "Chemical Equilibrium & Solutions", "Electrochemistry & Kinetics"],
      },
      {
        module: "Complete Organic Chemistry Suite",
        description: "IUPAC nomenclature, isomerism, GOC, hydrocarbons, alkyl halides, alcohols, phenols, ethers, carbonyl compounds, and amines.",
        chapters: ["General Organic Chemistry (GOC)", "Functional Groups Part 1", "Carbonyls, Amines & Biomolecules"],
      },
      {
        module: "Inorganic & Coordination Chemistry",
        description: "Periodic table, chemical bonding, metallurgy, p-block elements, transition d/f-block metals, and Werner/CFT coordination compounds.",
        chapters: ["Chemical Bonding & Periodic Trends", "p-Block & d/f-Block Elements", "Coordination Compounds"],
      },
      {
        module: "Board & Entrance Question Bank",
        description: "HSC Board archives, JEE Main questions, and NEET-UG past papers systematically discussed.",
        chapters: ["Chapter-wise Question Archives", "Practice Chemistry Papers"],
      },
    ],
    schedulePlaceholder: "Morning & Evening Batch Options (Confirm with Office)",
    feeNotice: "Affordable subject tuition fee structure with flexible installment plans. Inquire at center.",
    iconName: "FlaskConical",
    accentColor: "from-emerald-600 to-teal-500",
    assignedFaculty: {
      name: "Dr. A. V. Deshmukh",
      designation: "Chemistry Faculty (Subject Lead)",
      qualification: "M.Sc. Organic Chemistry, CSIR-NET (Specialist)",
      experience: "Senior Faculty Profile • Dedicated Chemistry Mentorship",
      specialization: "Organic Mechanisms, Chemical Thermodynamics & Inorganic Trends",
      imageUrl: "/faculty/chemistry-faculty.jpg",
      highlights: [
        "In-depth NCERT concept decoding for Board and entrance exams",
        "Reaction mechanism roadmaps and functional group conversions",
        "Systematic problem solving in physical chemistry",
      ],
    },
  },
  {
    id: "mathematics-coaching",
    slug: "mathematics",
    title: "Mathematics Tuition & Coaching",
    badge: "Subject 03 • Mathematics (PCMB)",
    targetAudience: "Class 11th & 12th Science (State Board / CBSE) • JEE Main & Adv • MHT-CET",
    duration: "1 or 2 Academic Years (Class 11 / 12)",
    batchSize: "Limited Batch Size for Focused Attention",
    level: "Mathematics • 11th, 12th, Boards, JEE & CET",
    shortDescription:
      "Strengthen analytical problem-solving skills across calculus, algebra, coordinate geometry, and vectors for Board exams and engineering entrance tests.",
    fullDescription:
      "Mathematics requires disciplined logical thinking and holds significant weightage in competitive exams like MHT-CET (100 marks, 2 marks per question) and JEE Main (100 marks). At United Classes Bhandara, our dedicated Mathematics faculty teaches students how to analyze functions, spot patterns, eliminate options efficiently, and write structured step-by-step Board solutions.",
    keyTopics: [
      "Calculus: Functions, Limits, Continuity, Differentiation, Indefinite & Definite Integration",
      "Differential Equations & Applications of Derivatives/Integrals",
      "Algebra: Matrices, Determinants, Complex Numbers, Sequences, Permutations & Probability",
      "Coordinate Geometry: Straight Lines, Circles, Parabola, Ellipse & Hyperbola",
      "Vectors & Three-Dimensional Geometry (High weightage in CET & JEE)",
    ],
    features: [
      "Dedicated Mathematics mentorship focused on analytical problem solving",
      "Focused practice on MHT-CET question patterns and time management",
      "Structured proof and theorem derivations for State Board examinations",
      "Graphical function visualization and curve sketching practice",
      "Graded problem worksheets from fundamental exercises to entrance-level questions",
    ],
    whoShouldEnrol: [
      "Engineering aspirants targeting strong scores in MHT-CET and JEE Main.",
      "Class 11 and 12 students seeking clear methods in calculus, trigonometry, and algebra.",
      "HSC Board students preparing for step-marked Board Mathematics answers.",
      "Students wanting structured, guided daily numerical practice.",
    ],
    learningApproach: [
      {
        title: "Function & Graph Visualization",
        description:
          "Students learn to sketch and interpret graphs so calculus problems can be understood visually and intuitively.",
      },
      {
        title: "Option Analysis Methods",
        description:
          "Systematic techniques for competitive exams to eliminate unlikely options and manage exam time effectively.",
      },
      {
        title: "Board Step-Marking Format",
        description:
          "Rigorous guidance on writing step-by-step proofs, stating reasons, and writing final answers clearly for Board exams.",
      },
      {
        title: "Regular Problem Practice",
        description:
          "Structured practice problem sheets to maintain calculation accuracy and problem-solving confidence.",
      },
    ],
    curriculumHighlights: [
      {
        module: "Class 11 Foundation Mathematics",
        description: "Trigonometric functions, straight lines, circles, conics, limits, differentiation basics, permutations, and probability.",
        chapters: ["Trigonometry & Conics", "Algebra & Complex Numbers", "Limits & Continuity"],
      },
      {
        module: "Class 12 Part 1: Algebra & Geometry",
        description: "Mathematical logic, matrices, trigonometric functions, pair of straight lines, vectors, 3D geometry, and linear programming.",
        chapters: ["Mathematical Logic & Matrices", "Trigonometric Functions & Lines", "Vectors & 3D Geometry"],
      },
      {
        module: "Class 12 Part 2: Complete Calculus Suite",
        description: "Differentiation, applications of derivatives, indefinite & definite integration, area under curves, and differential equations.",
        chapters: ["Differentiation & Applications", "Definite & Indefinite Integration", "Differential Equations & Probability"],
      },
      {
        module: "CET & JEE Practice Module",
        description: "MHT-CET previous papers, past JEE questions, and timed mock assessments reflecting exam conditions.",
        chapters: ["Past Years CET Archives", "Full Practice Mock Tests"],
      },
    ],
    schedulePlaceholder: "Morning & Evening Batch Options (Confirm with Office)",
    feeNotice: "Affordable subject tuition fee structure with flexible installment plans. Inquire at center.",
    iconName: "Calculator",
    accentColor: "from-indigo-600 to-purple-600",
    assignedFaculty: {
      name: "Prof. V. N. Patil",
      designation: "Mathematics Faculty (Subject Lead)",
      qualification: "M.Sc. Applied Mathematics (Specialist Faculty)",
      experience: "Senior Faculty Profile • Dedicated Mathematics Mentorship",
      specialization: "Calculus, 3D Coordinate Geometry, Vectors & Probability",
      imageUrl: "/faculty/mathematics-faculty.jpg",
      highlights: [
        "Option analysis and time management methods for competitive exams",
        "Step-by-step Board theorem and proof drafting",
        "Function curve sketching and visual calculus models",
      ],
    },
  },
  {
    id: "biology-coaching",
    slug: "biology",
    title: "Biology Tuition & Coaching",
    badge: "Subject 04 • Biology (PCMB)",
    targetAudience: "Class 11th & 12th Science (State Board / CBSE) • NEET-UG • MHT-CET (Pharmacy)",
    duration: "1 or 2 Academic Years (Class 11 / 12)",
    batchSize: "Limited Batch Size for Focused Attention",
    level: "Biology • 11th, 12th, Boards, NEET & CET",
    shortDescription:
      "Structured preparation across Botany and Zoology focusing on core NCERT concepts, physiological processes, and biological diagrams for Board and NEET exams.",
    fullDescription:
      "In NEET-UG, Biology accounts for 360 out of 720 marks (50% of the total examination), making strong conceptual mastery vital for medical aspirants. At United Classes Bhandara, our dedicated Biology tuition guides students thoroughly through core NCERT concepts, biological diagrams, and systematic terminology across Botany and Zoology.",
    keyTopics: [
      "Cell Biology, Cell Cycle, Division & Biomolecules",
      "Genetics: Principles of Inheritance & Molecular Basis of Inheritance",
      "Human Physiology: Digestion, Breathing, Circulation, Excretion & Neural Control",
      "Plant Physiology: Photosynthesis, Respiration & Plant Growth",
      "Reproduction in Plants and Animals, Human Health, Biotechnology & Ecology",
    ],
    features: [
      "Comprehensive Botany and Zoology instruction by subject specialists",
      "NCERT-aligned preparation for NEET objective patterns and State Board questions",
      "Practice in drawing and labeling key anatomical and botanical diagrams",
      "Regular timed objective assessments to practice examination pacing",
      "Systematic review of biological terminology and foundational concepts",
    ],
    whoShouldEnrol: [
      "Medical aspirants in Bhandara preparing for NEET-UG Biology.",
      "Class 11 & 12 Science students preparing for Maharashtra HSC Board or CBSE Biology.",
      "Pharmacy and allied science aspirants preparing for the PCB group.",
      "Students seeking conceptual clarity in molecular genetics and biotechnology.",
    ],
    learningApproach: [
      {
        title: "NCERT Concept Breakdown",
        description:
          "Core NCERT concepts are explained systematically, emphasizing key factual details and conceptual links.",
      },
      {
        title: "Diagram & Pathway Retention",
        description:
          "Mastering botanical life cycles, human physiological pathways, and cellular processes through hand-drawn diagrams.",
      },
      {
        title: "Objective Assessment Drills",
        description:
          "Regular timed multiple-choice practice to build speed, reading accuracy, and time management.",
      },
      {
        title: "State Board Long Answer Formatting",
        description:
          "Techniques to draft structured descriptive answers with accurate labeled diagrams for Board examinations.",
      },
    ],
    curriculumHighlights: [
      {
        module: "Class 11 Core: Cell, Plant & Human Physiology",
        description: "Diversity of living organisms, plant & animal morphology, cell structure, biomolecules, and complete human body systems.",
        chapters: ["Cell Biology & Biomolecules", "Plant Physiology Suite", "Complete Human Physiology"],
      },
      {
        module: "Class 12 Core: Reproduction, Genetics & Biotech",
        description: "Reproduction in flowering plants, human reproduction, Mendelian genetics, DNA replication, gene expression, and genetic engineering.",
        chapters: ["Genetics & Molecular Inheritance", "Reproduction & Development", "Biotechnology & Applications"],
      },
      {
        module: "Ecology, Environment & Human Welfare",
        description: "Organisms and populations, ecosystems, biodiversity conservation, human health and disease, and food enhancement strategies.",
        chapters: ["Ecology & Environment", "Human Health & Diseases", "Microbes in Human Welfare"],
      },
      {
        module: "NEET & Board Objective Series",
        description: "Past years' AIPMT/NEET questions, chapter-wise test series, and full syllabus practice assessments.",
        chapters: ["Past Question Bank", "Full Practice NEET Biology Mocks"],
      },
    ],
    schedulePlaceholder: "Morning & Evening Batch Options (Confirm with Office)",
    feeNotice: "Affordable subject tuition fee structure with flexible installment plans. Inquire at center.",
    iconName: "Dna",
    accentColor: "from-cyan-600 to-blue-600",
    assignedFaculty: {
      name: "Dr. Neha K. Wanjari",
      designation: "Biology Faculty (Subject Lead)",
      qualification: "M.Sc. Life Sciences (Specialist Faculty)",
      experience: "Senior Faculty Profile • Dedicated Biology Mentorship",
      specialization: "Cell Genetics, Molecular Biology, Plant Physiology & Human Systems",
      imageUrl: "/faculty/biology-faculty.jpg",
      highlights: [
        "NCERT-aligned concept teaching for Botany and Zoology",
        "Structured diagram drafting for Board examinations",
        "Regular objective testing for entrance examination practice",
      ],
    },
  },
  {
    id: "pcmb-integrated-science",
    slug: "pcmb-integrated",
    title: "Complete PCMB Science Package",
    badge: "All 4 Subjects Bundle • Integrated Track",
    targetAudience: "Class 11th & 12th Science Aspirants taking all 4 Subjects (Physics, Chem, Maths & Bio)",
    duration: "1 or 2 Academic Years (Class 11 / 12)",
    batchSize: "Limited Batch Size for Focused Attention",
    level: "All 4 Subjects (PCMB)",
    shortDescription:
      "Integrated coaching covering Physics, Chemistry, Mathematics, and Biology with aligned batch schedules and cohesive guidance under one roof in Bhandara.",
    fullDescription:
      "Studying Physics, Chemistry, Mathematics, and Biology under one roof at United Classes offers students in Bhandara aligned lecture timings, structured testing schedules, and centralized academic guidance to optimize their daily study routine.",
    keyTopics: [
      "All 4 Core Subjects: Physics, Chemistry, Mathematics & Biology",
      "Synchronized daily timetable designed to prevent batch timing overlap",
      "Full coverage of Maharashtra State Board & CBSE syllabi",
      "Synchronized entrance coaching for JEE, NEET & MHT-CET",
      "Periodic assessments to evaluate conceptual understanding across all four subjects",
    ],
    features: [
      "Coordinated coverage across Physics, Chemistry, Mathematics, and Biology",
      "Aligned timetable structured to support college hours and self-study time",
      "Curated practice worksheets, DPPs, and study reference materials for all four subjects",
      "Combined subject enrollment options with flexible fee structures (inquire at center)",
      "Single point of contact for parents to discuss academic progress and attendance",
    ],
    whoShouldEnrol: [
      "Students taking General Science (PCMB) in Class 11th or 12th in Bhandara.",
      "Aspirants keeping both engineering (JEE/CET) and medical (NEET) options open.",
      "Parents looking for a centralized coaching center for all four subjects.",
      "Students seeking an aligned study schedule with regular doubt clarification.",
    ],
    learningApproach: [
      {
        title: "Aligned Batch Timetable",
        description:
          "Lecture timings of Physics, Chemistry, Mathematics, and Biology are coordinated to prevent scheduling conflicts.",
      },
      {
        title: "Balanced Daily Workload",
        description:
          "Homework, DPPs, and testing are paced across the four subjects to support steady, manageable progress.",
      },
      {
        title: "Periodic Parent Communication",
        description:
          "Parents can consult with the institute regarding performance and attendance across all four subjects.",
      },
      {
        title: "All-Round Entrance Readiness",
        description:
          "Prepare for Boards alongside JEE, NEET, and MHT-CET without compromising any single subject.",
      },
    ],
    curriculumHighlights: [
      {
        module: "Complete Physics Suite",
        description: "Mechanics, Heat, Electrodynamics, Optics, and Modern Physics.",
        chapters: ["Class 11 & 12 Complete Physics"],
      },
      {
        module: "Complete Chemistry Suite",
        description: "Physical, Organic, and Inorganic Chemistry.",
        chapters: ["Class 11 & 12 Complete Chemistry"],
      },
      {
        module: "Complete Mathematics Suite",
        description: "Calculus, Algebra, Geometry, Vectors, and Statistics.",
        chapters: ["Class 11 & 12 Complete Mathematics"],
      },
      {
        module: "Complete Biology Suite",
        description: "Botany, Zoology, Genetics, Human Physiology, and Ecology.",
        chapters: ["Class 11 & 12 Complete Biology"],
      },
    ],
    schedulePlaceholder: "Synchronized Morning & Evening Batches (Confirm with Office)",
    feeNotice: "Combined subject enrollment options with flexible installment facilities. Inquire at center.",
    iconName: "Compass",
    accentColor: "from-blue-600 to-indigo-700",
    assignedFaculty: {
      name: "United Classes Academic Team",
      designation: "4 Dedicated Subject Mentors (PCMB)",
      qualification: "Specialist Faculty for Each Discipline",
      experience: "Coordinated Faculty Council • United Classes Bhandara",
      specialization: "Physics (Prof. Sharma) • Chemistry (Dr. Deshmukh) • Maths (Prof. Patil) • Biology (Dr. Wanjari)",
      imageUrl: "/faculty/physics-faculty.jpg",
      highlights: [
        "Dedicated subject specialist for each science discipline",
        "Harmonized batch schedule preventing timing conflicts",
        "Regular academic progress communication",
      ],
    },
    facultyTeamList: [
      { subject: "Physics", name: "Prof. S. R. Sharma", designation: "Head of Physics", qualification: "M.Sc. Physics (Specialist)", imageUrl: "/faculty/physics-faculty.jpg" },
      { subject: "Chemistry", name: "Dr. A. V. Deshmukh", designation: "Head of Chemistry", qualification: "M.Sc. Org Chem, CSIR-NET", imageUrl: "/faculty/chemistry-faculty.jpg" },
      { subject: "Mathematics", name: "Prof. V. N. Patil", designation: "Head of Mathematics", qualification: "M.Sc. Applied Maths", imageUrl: "/faculty/mathematics-faculty.jpg" },
      { subject: "Biology", name: "Dr. Neha K. Wanjari", designation: "Head of Biology", qualification: "M.Sc. Life Sciences", imageUrl: "/faculty/biology-faculty.jpg" },
    ],
  },
  // Backward compatibility aliases for existing slugs
  {
    id: "class-11-physics-alias",
    slug: "class-11-physics",
    title: "Class 11 Science Tuition (PCMB)",
    badge: "11th Science Foundation",
    targetAudience: "Class 11 Science Students (State Board & CBSE)",
    duration: "1 Year Foundation",
    batchSize: "Limited Batch Size",
    level: "Class 11 Science",
    shortDescription: "Foundational tuition coaching in Physics, Chemistry, Mathematics & Biology.",
    fullDescription: "Complete foundation for Class 11th Science covering Physics, Chemistry, Mathematics, and Biology.",
    keyTopics: ["Physics Foundation", "Chemistry Concepts", "Mathematics Basics", "Biology Systems"],
    features: ["Dedicated subject specialists", "Weekly tests", "Personal doubt desk"],
    whoShouldEnrol: ["Class 11 Science students in Bhandara"],
    learningApproach: [{ title: "Concept First", description: "First principles across all science disciplines." }],
    curriculumHighlights: [{ module: "PCMB Module", description: "Class 11 Science curriculum", chapters: ["Physics", "Chemistry", "Maths", "Biology"] }],
    schedulePlaceholder: "Morning & Evening Batch Options (Confirm at Center)",
    feeNotice: "Inquire at center office.",
    iconName: "Atom",
    accentColor: "from-blue-600 to-cyan-500",
    assignedFaculty: {
      name: "United Classes 4-Subject Academic Council",
      designation: "4 Dedicated Subject Specialists (PCMB)",
      qualification: "M.Sc. Faculty for Each Subject",
      experience: "Senior Subject Specialist Mentorship",
      specialization: "Class 11 Foundation across Physics, Chemistry, Maths & Biology",
    },
  },
  {
    id: "class-12-physics-alias",
    slug: "class-12-physics",
    title: "Class 12 Science Tuition (PCMB)",
    badge: "12th Board Booster",
    targetAudience: "Class 12 Science Students (State Board & CBSE)",
    duration: "Full Year Program",
    batchSize: "Limited Batch Size",
    level: "Class 12 Science",
    shortDescription: "Board scoring & derivation mastery across Physics, Chemistry, Mathematics & Biology.",
    fullDescription: "Complete Class 12 Science preparation covering Board derivations, numericals, and competitive synergy.",
    keyTopics: ["Physics 12th", "Chemistry 12th", "Mathematics 12th", "Biology 12th"],
    features: ["Board answer drafting", "Derivation booklets", "Pre-board checking"],
    whoShouldEnrol: ["Class 12 Science students in Bhandara"],
    learningApproach: [{ title: "Dual Track", description: "Board excellence + entrance preparation." }],
    curriculumHighlights: [{ module: "PCMB 12th", description: "Class 12 Science curriculum", chapters: ["Physics", "Chemistry", "Maths", "Biology"] }],
    schedulePlaceholder: "Morning & Evening Batch Options (Confirm at Center)",
    feeNotice: "Inquire at center office.",
    iconName: "Zap",
    accentColor: "from-blue-500 to-indigo-600",
    assignedFaculty: {
      name: "United Classes 4-Subject Academic Council",
      designation: "4 Dedicated Subject Specialists (PCMB)",
      qualification: "M.Sc. Faculty for Each Subject",
      experience: "Senior Subject Specialist Mentorship",
      specialization: "Class 12 Board Derivations & Entrance Synergy",
    },
  },
  {
    id: "jee-physics-alias",
    slug: "jee-physics",
    title: "JEE Main & Advanced Coaching (PCM)",
    badge: "Engineering Aspirants",
    targetAudience: "Engineering Aspirants",
    duration: "1 or 2 Years",
    batchSize: "Limited Batch Size",
    level: "JEE Main & Advanced",
    shortDescription: "Rigorous coaching in Physics, Chemistry, and Mathematics for top national ranks.",
    fullDescription: "Advanced problem solving across Physics, Chemistry & Mathematics with past PYQs.",
    keyTopics: ["Advanced Physics", "Advanced Chemistry", "Advanced Mathematics"],
    features: ["CBT mock tests", "Multi-concept problems", "Error analysis"],
    whoShouldEnrol: ["Engineering aspirants targeting top institutes"],
    learningApproach: [{ title: "First Principles", description: "Deconstruct complex questions." }],
    curriculumHighlights: [{ module: "PCM Suite", description: "JEE curriculum", chapters: ["Physics", "Chemistry", "Mathematics"] }],
    schedulePlaceholder: "Intensive weekday + weekend sessions",
    feeNotice: "Inquire at center office.",
    iconName: "Target",
    accentColor: "from-indigo-600 to-purple-600",
    assignedFaculty: {
      name: "PCM Engineering Specialist Faculty",
      designation: "Senior JEE Mentors (Physics, Chemistry & Maths)",
      qualification: "M.Sc. & Engineering Faculty",
      experience: "Senior Subject Specialist Mentorship",
      specialization: "Advanced Problem-Solving across PCM",
    },
  },
  {
    id: "neet-physics-alias",
    slug: "neet-physics",
    title: "NEET-UG Coaching (PCB Medical)",
    badge: "Medical Entrance",
    targetAudience: "Medical Aspirants",
    duration: "Full Year Program",
    batchSize: "Limited Batch Size",
    level: "NEET-UG",
    shortDescription: "Complete medical coaching in Physics, Chemistry & Biology (Botany + Zoology).",
    fullDescription: "Structured NEET coaching with NCERT concept mastery and systematic numerical solving.",
    keyTopics: ["NEET Physics", "NEET Chemistry", "NEET Biology"],
    features: ["OMR drills", "Formula maps", "Regular practice"],
    whoShouldEnrol: ["MBBS / BDS aspirants in Bhandara"],
    learningApproach: [{ title: "Concept & Speed", description: "NCERT-aligned concept review." }],
    curriculumHighlights: [{ module: "PCB Suite", description: "NEET curriculum", chapters: ["Physics", "Chemistry", "Biology"] }],
    schedulePlaceholder: "Morning & Evening Batch Options (Confirm at Center)",
    feeNotice: "Inquire at center office.",
    iconName: "Activity",
    accentColor: "from-cyan-600 to-blue-700",
    assignedFaculty: {
      name: "PCB Medical Specialist Faculty",
      designation: "Senior NEET Mentors (Physics, Chemistry & Biology)",
      qualification: "M.Sc. & Life Science Faculty",
      experience: "Senior Subject Specialist Mentorship",
      specialization: "NCERT Mastery & Numerical Guidance",
    },
  },
  {
    id: "mht-cet-physics-alias",
    slug: "mht-cet-physics",
    title: "MHT-CET Coaching (PCM / PCB)",
    badge: "State Entrance",
    targetAudience: "Maharashtra Engineering & Pharmacy Aspirants",
    duration: "Targeted Program",
    batchSize: "Limited Batch Size",
    level: "MHT-CET",
    shortDescription: "Maharashtra State Board line-by-line mastery and speed algorithms for top colleges.",
    fullDescription: "Target top engineering and pharmacy colleges with structured CET methods.",
    keyTopics: ["State Board Class 12", "State Board Class 11", "CET Problem Solving"],
    features: ["CBT mock tests", "Option elimination strategy", "Past papers coverage"],
    whoShouldEnrol: ["Engineering & Pharmacy aspirants in Maharashtra"],
    learningApproach: [{ title: "Textbook Centricity", description: "State Board line-by-line mastery." }],
    curriculumHighlights: [{ module: "CET Suite", description: "CET curriculum", chapters: ["Physics", "Chemistry", "Mathematics", "Biology"] }],
    schedulePlaceholder: "Evening sessions + Weekend CET sprints",
    feeNotice: "Inquire at center office.",
    iconName: "Compass",
    accentColor: "from-cyan-600 to-blue-600",
    assignedFaculty: {
      name: "MHT-CET Specialist Faculty",
      designation: "Senior CET Mentors (PCM / PCB)",
      qualification: "M.Sc. & Technical Faculty",
      experience: "Senior Subject Specialist Mentorship",
      specialization: "Maharashtra Textbook Review & Option Elimination Methods",
    },
  },
];
