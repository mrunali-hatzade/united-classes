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
    duration: "1 or 2 Years Complete Subject Curriculum",
    batchSize: "Max 30 Students per Batch",
    level: "Physics • 11th, 12th, Boards & Competitive",
    shortDescription:
      "Master mechanics, electrodynamics, optics, and modern physics with first-principles derivation, visual problem-solving, and speed numerical drills.",
    fullDescription:
      "Physics is the bedrock of science and engineering. At United Classes Bhandara, our dedicated Physics tuition breaks down complex physical laws into intuitive models. Students learn to derive equations, understand sign conventions, sketch free-body diagrams, and solve competitive numericals in 60 seconds without memorizing formulas by rote.",
    keyTopics: [
      "Kinematics, Vectors & Newton's Laws of Motion",
      "Work, Energy, Rotational Dynamics & Gravitation",
      "Thermodynamics, Heat Transfer & Wave Mechanics",
      "Electrostatics, Current Electricity & Magnetism",
      "Ray & Wave Optics, Modern Physics & Semiconductor Electronics",
    ],
    features: [
      "Led by Senior Physics Faculty (Prof. S. R. Sharma, M.Sc. Physics - 12+ Years Exp.)",
      "Derivation workbook strictly aligned with Maharashtra State Board & CBSE",
      "Daily Practice Problem (DPP) sheets with 200+ numericals per chapter",
      "Shortcuts and dimensional analysis tricks for JEE, NEET & MHT-CET",
      "Daily 45-minute 1-on-1 doubt resolution counter",
    ],
    whoShouldEnrol: [
      "Class 11th and 12th Science students who find Physics numericals intimidating.",
      "NEET-UG aspirants aiming to turn physics from their weakest subject to a 150+ rank booster.",
      "JEE Main & Advanced aspirants targeting 99+ percentile in Physics.",
      "Maharashtra State Board students aiming for 95%+ in HSC Board examinations.",
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
          "Problems progress seamlessly from Level 1 (formula application) to Level 3 (multi-concept JEE/NEET questions).",
      },
      {
        title: "Weekly Timed Testing",
        description:
          "Weekend tests alternating between subjective Board answer formats and timed entrance MCQs.",
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
    schedulePlaceholder: "Morning: 6:30 AM - 7:45 AM | Evening: 4:30 PM - 5:45 PM (Mon to Sat)",
    feeNotice: "Affordable subject tuition fee structure with flexible installment plans. Inquire at center.",
    iconName: "Atom",
    accentColor: "from-blue-600 to-cyan-500",
    assignedFaculty: {
      name: "Prof. S. R. Sharma",
      designation: "Head of Physics Department",
      qualification: "M.Sc. Physics (12+ Yrs Exp.)",
      experience: "12+ Years Mentoring JEE & NEET Aspirants in Bhandara",
      specialization: "Mechanics, Rotational Dynamics, Electrodynamics & Optics",
      imageUrl: "/faculty/physics-faculty.jpg",
      highlights: [
        "First-principles conceptual derivation focus",
        "Proven shortcuts for JEE, NEET & MHT-CET numericals",
        "Daily 45-minute 1-on-1 personal doubt clearance",
      ],
    },
  },
  {
    id: "chemistry-coaching",
    slug: "chemistry",
    title: "Chemistry Tuition & Coaching",
    badge: "Subject 02 • Chemistry (PCMB)",
    targetAudience: "Class 11th & 12th Science (State Board / CBSE) • JEE • NEET • MHT-CET",
    duration: "1 or 2 Years Complete Subject Curriculum",
    batchSize: "Max 30 Students per Batch",
    level: "Chemistry • 11th, 12th, Boards & Competitive",
    shortDescription:
      "Demystify Organic reaction mechanisms, master Physical chemistry numericals, and memorize Inorganic periodic trends with structured NCERT and Board drills.",
    fullDescription:
      "Chemistry is often called the most scoring subject in competitive exams when taught systematically. At United Classes Bhandara, our Chemistry tuition splits the subject into its three distinct pillars: Physical Chemistry (numerical problem-solving), Organic Chemistry (reaction mechanisms and named reactions), and Inorganic Chemistry (periodic trends and coordination chemistry).",
    keyTopics: [
      "Physical Chemistry: Mole Concept, Thermodynamics, Equilibrium, Electrochemistry & Kinetics",
      "Organic Chemistry: Reaction Mechanisms, Hydrocarbons, Haloalkanes, Alcohols, Aldehydes & Amines",
      "Inorganic Chemistry: Periodic Table, Chemical Bonding, Coordination Compounds & p/d/f Block",
      "Applied Chemistry: Biomolecules, Polymers & Green Chemistry",
      "NCERT Line-by-Line Mastery & State Board Derivation Maps",
    ],
    features: [
      "Led by Senior Chemistry Faculty (Dr. A. V. Deshmukh, M.Sc. Org Chem, CSIR-NET - 10+ Years Exp.)",
      "Comprehensive Organic Named Reaction wall charts and mechanism handbooks",
      "Step-by-step Physical Chemistry numerical shortcut formulas",
      "100% NCERT line-by-line coverage for NEET and JEE Main assertion-reason questions",
      "State Board theoretical derivation and IUPAC nomenclature checklists",
    ],
    whoShouldEnrol: [
      "Class 11th and 12th students who struggle to remember organic reactions and reagents.",
      "NEET-UG aspirants aiming for a high score of 160+ in Chemistry.",
      "JEE Main & Advanced students needing high-speed accuracy in physical numericals.",
      "Board students targeting 95%+ in Maharashtra HSC Chemistry.",
    ],
    learningApproach: [
      {
        title: "Mechanism-Driven Organic Learning",
        description:
          "Instead of memorizing hundreds of reactions, students learn nucleophiles, electrophiles, and electron displacement effects.",
      },
      {
        title: "Physical Chemistry Arithmetic Shortcuts",
        description:
          "Rapid order-of-magnitude estimation methods to solve equilibrium, thermodynamics, and electrochemistry numericals.",
      },
      {
        title: "Memory Maps for Inorganic Chemistry",
        description:
          "Structured tabular revision for periodic trends, oxidation states, and coordination isomerism.",
      },
      {
        title: "Daily Reaction Drills",
        description:
          "15-minute daily blackboard quiz on reaction conversions and reagent functions.",
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
        description: "Previous 15 years' HSC Board questions, JEE Main archives, and NEET-UG past papers thoroughly solved.",
        chapters: ["Chapter-wise PYQ Archives", "Full Mock Chemistry Papers"],
      },
    ],
    schedulePlaceholder: "Morning: 7:45 AM - 9:00 AM | Evening: 5:45 PM - 7:00 PM (Mon to Sat)",
    feeNotice: "Affordable subject tuition fee structure with flexible installment plans. Inquire at center.",
    iconName: "FlaskConical",
    accentColor: "from-emerald-600 to-teal-500",
    assignedFaculty: {
      name: "Dr. A. V. Deshmukh",
      designation: "Head of Chemistry Department",
      qualification: "M.Sc. Organic Chemistry, CSIR-NET (10+ Yrs Exp.)",
      experience: "10+ Years Mentoring JEE, NEET & Board Toppers",
      specialization: "Organic Mechanisms, Chemical Thermodynamics & Inorganic Trends",
      imageUrl: "/faculty/chemistry-faculty.jpg",
      highlights: [
        "100% NCERT word-by-word decoding for NEET/JEE",
        "Named reaction & reagent conversion roadmaps",
        "Physical chemistry numerical speed formulas",
      ],
    },
  },
  {
    id: "mathematics-coaching",
    slug: "mathematics",
    title: "Mathematics Tuition & Coaching",
    badge: "Subject 03 • Mathematics (PCMB)",
    targetAudience: "Class 11th & 12th Science (State Board / CBSE) • JEE Main & Adv • MHT-CET",
    duration: "1 or 2 Years Complete Subject Curriculum",
    batchSize: "Max 30 Students per Batch",
    level: "Mathematics • 11th, 12th, Boards, JEE & CET",
    shortDescription:
      "Transform mathematical fear into analytical precision with deep calculus training, coordinate geometry, vectors, and high-speed CET/JEE shortcut algorithms.",
    fullDescription:
      "Mathematics is the language of logical thinking and the highest-weightage section in JEE Main (100 marks) and MHT-CET (100 marks - 2 marks per question). At United Classes Bhandara, our dedicated Mathematics faculty teaches students how to visualize functions, spot patterns, eliminate options, and write step-by-step Board solutions with immaculate proofs.",
    keyTopics: [
      "Calculus: Functions, Limits, Continuity, Differentiation, Indefinite & Definite Integration",
      "Differential Equations & Applications of Derivatives/Integrals",
      "Algebra: Matrices, Determinants, Complex Numbers, Sequences, Permutations & Probability",
      "Coordinate Geometry: Straight Lines, Circles, Parabola, Ellipse & Hyperbola",
      "Vectors & Three-Dimensional Geometry (High weightage in CET & JEE)",
    ],
    features: [
      "Led by Senior Mathematics Faculty (Prof. V. N. Patil, M.Sc. Applied Maths / B.Tech - 11+ Years Exp.)",
      "Special focus on MHT-CET 2-marks-per-question speed solving algorithms",
      "Comprehensive textbook proof & theorem derivation booklets for HSC Board",
      "Step-by-step graphical function visualization and curve sketching",
      "Daily problem worksheets ranging from textbook exercises to JEE Advanced level",
    ],
    whoShouldEnrol: [
      "Engineering aspirants aiming for 99+ percentile in MHT-CET (COEP, VJTI, SPIT targets).",
      "JEE Main & Advanced students wanting to score 70+ in Mathematics.",
      "Class 11 and 12 students who struggle with integration, trigonometry, or calculus.",
      "HSC Board students targeting 100/100 in Class 12 Mathematics.",
    ],
    learningApproach: [
      {
        title: "Function & Graph Visualization",
        description:
          "Students learn to sketch and interpret graphs so calculus problems can be solved visually in half the time.",
      },
      {
        title: "Shortcut & Elimination Algorithms",
        description:
          "Special algorithms for MHT-CET to solve integration and determinant questions in 45 seconds without lengthy calculations.",
      },
      {
        title: "Board Step-Marking Format",
        description:
          "Rigorous guidance on writing step-by-step proofs, stating reasons, and writing final answers to score full theoretical marks.",
      },
      {
        title: "Daily Numerical Habit",
        description:
          "Mandatory daily 25-question problem sheets to maintain calculation muscle memory and speed.",
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
        module: "CET & JEE Speed Solving Marathon",
        description: "15 years' MHT-CET papers, past JEE questions, and timed 50-question mock tests mirroring the actual examination.",
        chapters: ["Past 15 Years CET Archives", "Full Computer-Based Mock Tests"],
      },
    ],
    schedulePlaceholder: "Morning: 6:30 AM - 7:45 AM | Evening: 4:30 PM - 5:45 PM (Mon to Sat)",
    feeNotice: "Affordable subject tuition fee structure with flexible installment plans. Inquire at center.",
    iconName: "Calculator",
    accentColor: "from-indigo-600 to-purple-600",
    assignedFaculty: {
      name: "Prof. V. N. Patil",
      designation: "Head of Mathematics & CET Speed Lead",
      qualification: "M.Sc. Applied Mathematics / B.Tech (11+ Yrs Exp.)",
      experience: "11+ Years Specialization in Calculus & CET Speed Systems",
      specialization: "Calculus, 3D Coordinate Geometry, Vectors & Probability",
      imageUrl: "/faculty/mathematics-faculty.jpg",
      highlights: [
        "MHT-CET 45-second option elimination techniques",
        "HSC Board 100/100 theorem & proof answer drafting",
        "Function curve sketching & visual calculus models",
      ],
    },
  },
  {
    id: "biology-coaching",
    slug: "biology",
    title: "Biology Tuition & Coaching",
    badge: "Subject 04 • Biology (PCMB)",
    targetAudience: "Class 11th & 12th Science (State Board / CBSE) • NEET-UG • MHT-CET (Pharmacy)",
    duration: "1 or 2 Years Complete Subject Curriculum",
    batchSize: "Max 30 Students per Batch",
    level: "Biology • 11th, 12th, Boards, NEET & CET",
    shortDescription:
      "Target a flawless 360/360 in NEET Biology and 95%+ in State Board with exhaustive NCERT line-by-line decoding, Botany diagrams, and Human Physiology mastery.",
    fullDescription:
      "In NEET-UG, Biology carries a massive 360 out of 720 marks (50% of the entire examination). Scoring 340+ in Biology is the non-negotiable prerequisite to securing a government medical college seat (GMC Nagpur, GMC Gondia, AIIMS). At United Classes Bhandara, our dedicated Biology specialist guides students through every single line, footnote, and diagram of NCERT Botany and Zoology.",
    keyTopics: [
      "Cell Biology, Cell Cycle, Division & Biomolecules",
      "Genetics: Principles of Inheritance & Molecular Basis of Inheritance",
      "Human Physiology: Digestion, Breathing, Circulation, Excretion & Neural Control",
      "Plant Physiology: Photosynthesis, Respiration & Plant Growth",
      "Reproduction in Plants and Animals, Human Health, Biotechnology & Ecology",
    ],
    features: [
      "Led by Senior Biology Faculty (Dr. Neha K. Wanjari, M.Sc. Life Sciences, Ph.D. Scholar - 9+ Years Exp.)",
      "100% NCERT line-by-line decoding for NEET assertion-reason and match-the-column questions",
      "Neat anatomical and botanical labeled diagram drafting for HSC State Board & CBSE",
      "Weekly 90-question timed NEET Biology OMR mock drills",
      "Comprehensive biological terminology and scientist contribution flashcards",
    ],
    whoShouldEnrol: [
      "Medical aspirants in Bhandara aiming for 340+ to 360/360 in NEET Biology.",
      "Class 11 & 12 Science students preparing for Maharashtra HSC Board or CBSE Biology.",
      "Pharmacy and agriculture aspirants targeting high percentiles in the PCB MHT-CET group.",
      "Students who want conceptual clarity in molecular genetics and biotechnology.",
    ],
    learningApproach: [
      {
        title: "NCERT Line-by-Line Forensics",
        description:
          "Every sentence of NCERT is unpacked, highlighting subtle facts that NTA examiner committees turn into tricky questions.",
      },
      {
        title: "Diagram & Flowchart Retention",
        description:
          "Mastering botanical life cycles, human physiological pathways, and cellular processes through hand-drawn flowcharts.",
      },
      {
        title: "OMR Speed & Accuracy Drills",
        description:
          "Solving 90 Biology questions in 40 minutes with near-zero negative marks so extra time is saved for Physics.",
      },
      {
        title: "State Board Long Answer Formatting",
        description:
          "Techniques to draft structured 3-mark and 4-mark theoretical answers with perfect labeled diagrams for Board exams.",
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
        module: "NEET 360/360 Test Series",
        description: "Past 35 years of AIPMT/NEET Biology questions, chapter-wise test series, and full syllabus OMR drills.",
        chapters: ["Past 35 Years Question Bank", "20+ Full NEET Biology Mocks"],
      },
    ],
    schedulePlaceholder: "Morning: 7:45 AM - 9:00 AM | Evening: 5:45 PM - 7:00 PM (Mon to Sat)",
    feeNotice: "Affordable subject tuition fee structure with flexible installment plans. Inquire at center.",
    iconName: "Dna",
    accentColor: "from-cyan-600 to-blue-600",
    assignedFaculty: {
      name: "Dr. Neha K. Wanjari",
      designation: "Head of Biology (Botany & Zoology)",
      qualification: "M.Sc. Life Sciences, Ph.D. Scholar (9+ Yrs Exp.)",
      experience: "9+ Years NEET Biology Specialization in Bhandara",
      specialization: "Cell Genetics, Molecular Biology, Plant Physiology & Human Systems",
      imageUrl: "/faculty/biology-faculty.jpg",
      highlights: [
        "Exhaustive NCERT forensic reading targeting 360/360",
        "Neat anatomical diagram drafting for Board 95%+",
        "Weekly 90-question timed OMR entrance drills",
      ],
    },
  },
  {
    id: "pcmb-integrated-science",
    slug: "pcmb-integrated",
    title: "Complete PCMB Science Package",
    badge: "All 4 Subjects Bundle • Discounted Package",
    targetAudience: "Class 11th & 12th Science Aspirants taking all 4 Subjects (Physics, Chem, Maths & Bio)",
    duration: "1 or 2 Years Synchronized Coaching Program",
    batchSize: "Max 30 Students per Batch",
    level: "All 4 Subjects (PCMB)",
    shortDescription:
      "The complete, synchronized coaching package covering Physics, Chemistry, Mathematics, and Biology with harmonious batch timings, combined test series, and comprehensive fee benefits.",
    fullDescription:
      "Why run between four different tuition classes across Bhandara when you can study Physics, Chemistry, Mathematics, and Biology under one trusted roof? At United Classes, our integrated PCMB program offers synchronized lecture timings, coordinated test schedules, and combined doubt clearance so students save hours of travel time every single day.",
    keyTopics: [
      "All 4 Core Subjects: Physics, Chemistry, Mathematics & Biology",
      "Synchronized daily timetable with zero subject-timing clashes",
      "Full coverage of Maharashtra State Board & CBSE syllabi",
      "Synchronized entrance coaching for JEE, NEET & MHT-CET",
      "Unified weekly test series with combined parent progress reports",
    ],
    features: [
      "Taught by 4 Dedicated Subject Specialists (Physics, Chem, Maths, Bio)",
      "Coordinated schedule so students have time for self-study and college",
      "Complete set of printed notes, DPPs, and derivation handbooks for all subjects",
      "Attractive bundled tuition fee structure saving up to 30% compared to separate classes",
      "One single institute for parents to coordinate attendance, fees, and student progress",
    ],
    whoShouldEnrol: [
      "Students taking General Science (PCMB) in Class 11th or 12th in Bhandara.",
      "Aspirants keeping both engineering (JEE/CET) and medical (NEET) options open.",
      "Parents looking for a disciplined, unified institute rather than running across town.",
      "Students wanting a synchronized study schedule with daily personal doubt clearing.",
    ],
    learningApproach: [
      {
        title: "Zero Schedule Clash Guarantee",
        description:
          "Lecture timings of Physics, Chemistry, Mathematics, and Biology are planned harmoniously so students attend seamlessly.",
      },
      {
        title: "Balanced Daily Workload",
        description:
          "Homework, DPPs, and testing are balanced across the four subjects so students never feel burned out.",
      },
      {
        title: "Unified Parent Counseling",
        description:
          "Parents receive a consolidated performance report covering all four subjects in one monthly meeting.",
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
    schedulePlaceholder: "Morning Batches: 6:30 AM - 9:30 AM | Evening Batches: 4:30 PM - 7:30 PM",
    feeNotice: "Maximum fee discount when enrolling in all 4 subjects together. Inquire at center.",
    iconName: "Compass",
    accentColor: "from-blue-600 to-indigo-700",
    assignedFaculty: {
      name: "United Classes 4-Subject Academic Council",
      designation: "4 Dedicated Subject Specialists (PCMB)",
      qualification: "M.Sc. & Research Scholars for Each Subject",
      experience: "Combined 40+ Years Teaching Experience in Bhandara",
      specialization: "Physics (Prof. Sharma) • Chemistry (Dr. Deshmukh) • Maths (Prof. Patil) • Biology (Dr. Wanjari)",
      imageUrl: "/faculty/physics-faculty.jpg",
      highlights: [
        "4 dedicated subject department heads under one roof",
        "Harmonized batch schedule with zero subject clashes",
        "Unified parent-teacher progress tracking",
      ],
    },
    facultyTeamList: [
      { subject: "Physics", name: "Prof. S. R. Sharma", designation: "Head of Physics", qualification: "M.Sc. Physics (12+ Yrs Exp.)", imageUrl: "/faculty/physics-faculty.jpg" },
      { subject: "Chemistry", name: "Dr. A. V. Deshmukh", designation: "Head of Chemistry", qualification: "M.Sc. Org Chem, CSIR-NET (10+ Yrs)", imageUrl: "/faculty/chemistry-faculty.jpg" },
      { subject: "Mathematics", name: "Prof. V. N. Patil", designation: "Head of Mathematics", qualification: "M.Sc. Maths / B.Tech (11+ Yrs)", imageUrl: "/faculty/mathematics-faculty.jpg" },
      { subject: "Biology", name: "Dr. Neha K. Wanjari", designation: "Head of Biology", qualification: "M.Sc. Life Sciences (9+ Yrs)", imageUrl: "/faculty/biology-faculty.jpg" },
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
    batchSize: "Max 30 Students",
    level: "Class 11 Science",
    shortDescription: "Foundational tuition coaching in Physics, Chemistry, Mathematics & Biology.",
    fullDescription: "Complete foundation for Class 11th Science covering Physics, Chemistry, Mathematics, and Biology.",
    keyTopics: ["Physics Foundation", "Chemistry Concepts", "Mathematics Basics", "Biology Systems"],
    features: ["Dedicated subject specialists", "Weekly tests", "Personal doubt desk"],
    whoShouldEnrol: ["Class 11 Science students in Bhandara"],
    learningApproach: [{ title: "Concept First", description: "First principles across all science disciplines." }],
    curriculumHighlights: [{ module: "PCMB Module", description: "Class 11 Science curriculum", chapters: ["Physics", "Chemistry", "Maths", "Biology"] }],
    schedulePlaceholder: "Morning: 6:30 AM - 9:00 AM | Evening: 4:30 PM - 7:30 PM",
    feeNotice: "Inquire at center office.",
    iconName: "Atom",
    accentColor: "from-blue-600 to-cyan-500",
    assignedFaculty: {
      name: "United Classes 4-Subject Academic Council",
      designation: "4 Dedicated Subject Specialists (PCMB)",
      qualification: "M.Sc. Faculty for Each Subject",
      experience: "Combined 40+ Years Teaching Experience",
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
    batchSize: "Max 30 Students",
    level: "Class 12 Science",
    shortDescription: "Board scoring & derivation mastery across Physics, Chemistry, Mathematics & Biology.",
    fullDescription: "Complete Class 12 Science preparation covering Board derivations, numericals, and competitive synergy.",
    keyTopics: ["Physics 12th", "Chemistry 12th", "Mathematics 12th", "Biology 12th"],
    features: ["Board answer drafting", "Derivation booklets", "Pre-board checking"],
    whoShouldEnrol: ["Class 12 Science students in Bhandara"],
    learningApproach: [{ title: "Dual Track", description: "Board excellence + entrance speed." }],
    curriculumHighlights: [{ module: "PCMB 12th", description: "Class 12 Science curriculum", chapters: ["Physics", "Chemistry", "Maths", "Biology"] }],
    schedulePlaceholder: "Morning: 6:30 AM - 9:30 AM | Evening: 4:30 PM - 7:30 PM",
    feeNotice: "Inquire at center office.",
    iconName: "Zap",
    accentColor: "from-blue-500 to-indigo-600",
    assignedFaculty: {
      name: "United Classes 4-Subject Academic Council",
      designation: "4 Dedicated Subject Specialists (PCMB)",
      qualification: "M.Sc. Faculty for Each Subject",
      experience: "Combined 40+ Years Teaching Experience",
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
    batchSize: "Max 25 Students",
    level: "JEE Main & Advanced",
    shortDescription: "Rigorous coaching in Physics, Chemistry, and Mathematics for top national ranks.",
    fullDescription: "Advanced problem solving across Physics, Chemistry & Mathematics with past 15-year PYQs.",
    keyTopics: ["Advanced Physics", "Advanced Chemistry", "Advanced Mathematics"],
    features: ["CBT mock tests", "Multi-concept problems", "Error analysis"],
    whoShouldEnrol: ["IIT, NIT, COEP aspirants"],
    learningApproach: [{ title: "First Principles", description: "Deconstruct complex questions." }],
    curriculumHighlights: [{ module: "PCM Suite", description: "JEE curriculum", chapters: ["Physics", "Chemistry", "Mathematics"] }],
    schedulePlaceholder: "Intensive weekday + weekend sessions",
    feeNotice: "Inquire at center office.",
    iconName: "Target",
    accentColor: "from-indigo-600 to-purple-600",
    assignedFaculty: {
      name: "PCM Engineering Specialist Faculty",
      designation: "Senior JEE Mentors (Physics, Chemistry & Maths)",
      qualification: "M.Sc. & B.Tech Faculty",
      experience: "10+ Years JEE Coaching Experience",
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
    batchSize: "Max 30 Students",
    level: "NEET-UG",
    shortDescription: "Complete medical coaching in Physics, Chemistry & Biology (Botany + Zoology).",
    fullDescription: "Target 650+ in NEET with NCERT line-by-line mastery and rapid numerical solving.",
    keyTopics: ["NEET Physics", "NEET Chemistry", "NEET Biology 360/360"],
    features: ["OMR drills", "Formula maps", "Daily speed practice"],
    whoShouldEnrol: ["MBBS / BDS aspirants in Bhandara"],
    learningApproach: [{ title: "High Speed & Accuracy", description: "NCERT line-by-line decoding." }],
    curriculumHighlights: [{ module: "PCB Suite", description: "NEET curriculum", chapters: ["Physics", "Chemistry", "Biology"] }],
    schedulePlaceholder: "Morning: 6:30 AM - 9:30 AM | Evening: 4:30 PM - 7:30 PM",
    feeNotice: "Inquire at center office.",
    iconName: "Activity",
    accentColor: "from-cyan-600 to-blue-700",
    assignedFaculty: {
      name: "PCB Medical Specialist Faculty",
      designation: "Senior NEET Mentors (Physics, Chemistry & Biology)",
      qualification: "M.Sc. & Life Science Faculty",
      experience: "9+ Years NEET Coaching Experience",
      specialization: "100% NCERT Forensic Mastery & Speed Numericals",
    },
  },
  {
    id: "mht-cet-physics-alias",
    slug: "mht-cet-physics",
    title: "MHT-CET Coaching (PCM / PCB)",
    badge: "State Entrance",
    targetAudience: "Maharashtra Engineering & Pharmacy Aspirants",
    duration: "Targeted Program",
    batchSize: "Max 30 Students",
    level: "MHT-CET",
    shortDescription: "Maharashtra State Board line-by-line mastery and speed algorithms for top colleges.",
    fullDescription: "Target top engineering (COEP, VJTI) and pharmacy colleges with shortcut CET methods.",
    keyTopics: ["State Board Class 12", "State Board Class 11", "CET Speed Shortcuts"],
    features: ["CBT mock tests", "No negative mark strategy", "15-year archives"],
    whoShouldEnrol: ["Engineering & Pharmacy aspirants in Maharashtra"],
    learningApproach: [{ title: "Textbook Centricity", description: "Balbharati line-by-line mastery." }],
    curriculumHighlights: [{ module: "CET Suite", description: "CET curriculum", chapters: ["Physics", "Chemistry", "Mathematics", "Biology"] }],
    schedulePlaceholder: "Evening sessions + Weekend CET sprints",
    feeNotice: "Inquire at center office.",
    iconName: "Compass",
    accentColor: "from-cyan-600 to-blue-600",
    assignedFaculty: {
      name: "MHT-CET Specialist Faculty",
      designation: "Senior CET Mentors (PCM / PCB)",
      qualification: "M.Sc. & B.Tech Faculty",
      experience: "11+ Years MHT-CET Coaching Experience",
      specialization: "Maharashtra Textbook Mastery & 45-Second Shortcut Methods",
    },
  },
];
