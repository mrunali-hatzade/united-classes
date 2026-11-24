export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  type: "Full-Time" | "Part-Time" | "Visiting Faculty";
  experience: string;
  location: string;
  badge: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface CareerPerk {
  title: string;
  description: string;
  iconName: string;
}

export interface HiringStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
}

export const careerPositions: CareerPosition[] = [
  {
    id: "phys-faculty",
    title: "Senior Faculty — Physics (JEE / NEET / Boards)",
    department: "Physics Department",
    type: "Full-Time",
    experience: "2–5+ Years in competitive coaching",
    location: "Bhandara Campus, Maharashtra",
    badge: "Faculty Opening",
    description:
      "Lead our Physics department for Class 11th & 12th. Responsible for conceptual derivations, numerical problem-solving sessions, and synchronized JEE Main, NEET-UG, and State Board preparation.",
    responsibilities: [
      "Deliver engaging lectures focused on first-principles understanding and mechanics/electrodynamics.",
      "Design daily practice sheets (DPPs) and chapter-wise mock tests aligned with JEE/NEET patterns.",
      "Conduct post-lecture doubt clearing sessions for individual student progress.",
      "Maintain active communication with parents regarding student exam progress.",
    ],
    requirements: [
      "M.Sc. in Physics, B.Tech/M.Tech, or equivalent qualification.",
      "Strong pedagogical skills with proven ability to explain complex physical laws simply.",
      "Fluency in Marathi, Hindi, and English for effective classroom instruction in Bhandara.",
      "Passion for student mentorship and building exam confidence.",
    ],
  },
  {
    id: "chem-faculty",
    title: "Senior Faculty — Chemistry (Physical, Organic & Inorganic)",
    department: "Chemistry Department",
    type: "Full-Time",
    experience: "2–5+ Years in competitive coaching",
    location: "Bhandara Campus, Maharashtra",
    badge: "Faculty Opening",
    description:
      "Deliver comprehensive Chemistry tuition across Organic reaction mechanisms, Physical calculations, and line-by-line NCERT Inorganic coverage for medical and engineering aspirants.",
    responsibilities: [
      "Teach organic reaction mechanisms with visual electron-shift reasoning rather than rote memorization.",
      "Train students in high-speed numerical shortcuts for physical chemistry equilibrium and kinetics.",
      "Prepare NCERT line-by-line highlight sheets for NEET-UG and JEE Main inorganic chemistry.",
      "Oversee weekly chapter test evaluations and error-diagnosis discussions.",
    ],
    requirements: [
      "M.Sc. in Chemistry / Organic Chemistry, CSIR-NET, or equivalent academic record.",
      "Demonstrated success in mentoring Class 11–12 students to top percentile marks in NEET or CET.",
      "Deep familiarity with both Maharashtra HSC State Board and CBSE exam formats.",
    ],
  },
  {
    id: "math-faculty",
    title: "Faculty — Mathematics (JEE Main, MHT-CET & HSC)",
    department: "Mathematics Department",
    type: "Full-Time",
    experience: "2–4+ Years in 11th/12th coaching",
    location: "Bhandara Campus, Maharashtra",
    badge: "Faculty Opening",
    description:
      "Inspire students to master Calculus, Vectors, 3D Geometry, and Algebra with rigorous proof drafting for State Boards and speed elimination algorithms for MHT-CET and JEE.",
    responsibilities: [
      "Teach step-by-step calculus derivations and Board exam presentation techniques.",
      "Develop shortcut algorithms and option-elimination strategies for 2-mark MHT-CET questions.",
      "Guide students who experience mathematical anxiety into structured problem solvers.",
      "Manage regular timed formula tests and calculus diagnostic worksheets.",
    ],
    requirements: [
      "M.Sc. in Applied Mathematics, Mathematics, or B.Tech with high mathematical aptitude.",
      "Strong command over Maharashtra HSC Board marking schemes and CET difficulty patterns.",
      "Approachable demeanour with dedication to foundational doubt resolution.",
    ],
  },
  {
    id: "bio-faculty",
    title: "Faculty — Biology (Botany & Zoology for NEET-UG)",
    department: "Biology Department",
    type: "Full-Time",
    experience: "2–4+ Years in NEET biology coaching",
    location: "Bhandara Campus, Maharashtra",
    badge: "Faculty Opening",
    description:
      "Guide NEET-UG medical aspirants to master 360-mark Biology syllabus with word-by-word NCERT decoding, clean diagram drafting, and high-frequency terminology retention.",
    responsibilities: [
      "Conduct in-depth chapter discussions across Plant Physiology, Genetics, Human Anatomy, and Ecology.",
      "Train students in neat, accurate anatomical and botanical diagrams for 12th Board examinations.",
      "Organize weekly 90-question timed NEET OMR drills and analyze negative marking patterns.",
      "Provide mnemonic tools and flowcharts for complex biological pathways.",
    ],
    requirements: [
      "M.Sc. in Botany, Zoology, Life Sciences, Biotechnology, or MBBS/BDS graduate.",
      "Exceptional command over NCERT textbooks (Class 11 & 12).",
      "Dedication to helping Bhandara students enter premier Government Medical Colleges (GMC).",
    ],
  },
  {
    id: "academic-counselor",
    title: "Academic Counselor & Center Coordinator",
    department: "Admissions & Student Relations",
    type: "Full-Time",
    experience: "1–3 Years in student counseling or front office",
    location: "Bhandara Campus, Maharashtra",
    badge: "Staff Opening",
    description:
      "Act as the friendly first point of contact for visiting parents and students. Counsel families on Science streams, schedule free demo lectures, and coordinate center operations.",
    responsibilities: [
      "Welcome parents and prospective students to the institute center and explain program pathways.",
      "Coordinate batch schedules, classroom logistics, and student attendance registers.",
      "Follow up with demo lecture attendees and provide fee and enrolment guidance.",
      "Coordinate weekly SMS/WhatsApp report dispatch to parents.",
    ],
    requirements: [
      "Bachelor's degree in any discipline with excellent verbal and written communication.",
      "Warm, empathetic personality with professional front-office etiquette.",
      "Comfort with basic computer operations, MS Office, and WhatsApp communication.",
      "Local resident of Bhandara or nearby area preferred.",
    ],
  },
  {
    id: "dtp-operator",
    title: "DTP Operator & Academic Typesetter",
    department: "Academic Publishing & Test Cell",
    type: "Full-Time",
    experience: "1–2 Years in educational DTP",
    location: "Bhandara Campus, Maharashtra",
    badge: "Staff Opening",
    description:
      "Typeset daily practice problem sheets (DPPs), chapter booklets, test papers with mathematical equations, chemical formulas, and biological illustrations.",
    responsibilities: [
      "Format test question papers and answer keys with accurate font styling and layout standards.",
      "Draft chemical reaction mechanisms and geometric figures using vector software.",
      "Typeset bilingual notes (English & Marathi) cleanly for State Board study handbooks.",
      "Manage printing and binding coordination for classroom materials.",
    ],
    requirements: [
      "Proven proficiency in MathType, MS Word, PageMaker, or CorelDraw.",
      "Fast typing speed in English and Marathi (Krutidev / Unicode).",
      "High attention to mathematical symbols, superscripts, subscripts, and diagram alignment.",
    ],
  },
];

export const careerPerks: CareerPerk[] = [
  {
    title: "Respectful Academic Freedom",
    description:
      "Teach with complete autonomy over your pedagogical approach. We support educators with the trust and respect they deserve as subject masters.",
    iconName: "Compass",
  },
  {
    title: "Focused Batch Sizes",
    description:
      "No crowded 100-student halls. Our focused batch sizes ensure you can actually know each student's name, progress, and learning needs.",
    iconName: "Users",
  },
  {
    title: "Competitive Compensation",
    description:
      "Industry-competitive salary packages with performance-linked annual increments, merit rewards, and outcome appreciation.",
    iconName: "Award",
  },
  {
    title: "Modern Classroom Infrastructure",
    description:
      "Air-conditioned, acoustically treated classrooms with modern audio-visual presentation equipment and dedicated faculty workstations.",
    iconName: "Building2",
  },
  {
    title: "Work-Life Harmony",
    description:
      "Predictable teaching timetables with organized batch slots, allowing ample time for lecture preparation, research, and personal life.",
    iconName: "Clock",
  },
  {
    title: "In-House Content & DTP Support",
    description:
      "Dedicated administrative and DTP staff handle paper printing, worksheet formatting, and test logistics so you focus 100% on teaching.",
    iconName: "FileCheck",
  },
];

export const hiringProcessSteps: HiringStep[] = [
  {
    step: "01",
    title: "Submit Profile & CV",
    subtitle: "Quick Online Application",
    description:
      "Fill out the short application form on this page or send your CV via WhatsApp. Highlight your academic background, subject passion, and coaching experience.",
  },
  {
    step: "02",
    title: "Technical Demo Lecture",
    subtitle: "Showcase Your Teaching Style",
    description:
      "Deliver a 25–30 minute demo lecture on a topic of your choice before our academic panel. We look for first-principles clarity, voice projection, and board management.",
  },
  {
    step: "03",
    title: "Pedagogy & Values Interview",
    subtitle: "Mutual Alignment Discussion",
    description:
      "Discuss curriculum planning, student motivation strategies, and expectations with our academic directors to ensure a strong shared vision.",
  },
  {
    step: "04",
    title: "Formal Offer & Onboarding",
    subtitle: "Welcome to United Classes",
    description:
      "Receive a clear employment proposal with attractive compensation, lecture schedules, and institutional support. Join us in shaping Bhandara's science talent.",
  },
];
