export interface ResultPlaceholder {
  id: string;
  studentName: string;
  exam: string;
  badge: string;
  achievement: string;
  academicYear: string;
  year: string;
  stream?: "Engineering" | "Medical" | "Boards";
  college?: string;
  quotePlaceholder: string;
  isPlaceholderNotice: string;
}

export const availableResultYears = [
  "All",
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
] as const;

export type ResultYear = (typeof availableResultYears)[number];

export const resultsData: ResultPlaceholder[] = [
  // 2025 Batch
  {
    id: "res-2025-1",
    studentName: "Sample Student 01",
    exam: "JEE Main & Advanced",
    badge: "Engineering Track",
    achievement: "Top Ranker • Verified Score Awaited",
    academicYear: "2024–25 Batch",
    year: "2025",
    stream: "Engineering",
    college: "Targeting Premier Tech Institutes",
    quotePlaceholder:
      "Having specialized teachers for Physics, Chemistry, and Maths under one roof at United Classes made my JEE preparation structured and stress-free.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-2025-2",
    studentName: "Sample Student 02",
    exam: "NEET-UG (Medical)",
    badge: "Medical Track",
    achievement: "GMC Admission Candidate",
    academicYear: "2024–25 Batch",
    year: "2025",
    stream: "Medical",
    college: "Government Medical College Aspirant",
    quotePlaceholder:
      "Physics and Organic Chemistry used to be my biggest worries, but the formula-mapping, NCERT Biology drills, and daily speed practice built immense confidence.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-2025-3",
    studentName: "Sample Student 03",
    exam: "MHT-CET (Engineering)",
    badge: "State Entrance Track",
    achievement: "High Percentile Merit",
    academicYear: "2024–25 Batch",
    year: "2025",
    stream: "Engineering",
    college: "COEP / VJTI Tech Track",
    quotePlaceholder:
      "State Board textbook line-by-line revision across Physics, Chemistry & Maths and speed elimination shortcuts made all the difference in MHT-CET.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-2025-4",
    studentName: "Sample Student 04",
    exam: "Class 12 HSC Board (PCMB)",
    badge: "Board Exam Excellence",
    achievement: "Distinction in Science",
    academicYear: "2024–25 Batch",
    year: "2025",
    stream: "Boards",
    college: "Maharashtra State Board Excellence",
    quotePlaceholder:
      "Step-by-step derivation practice, reaction mechanisms, and calculus answer drafting gave me clarity on how to score top marks in State Board exams.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },

  // 2024 Batch
  {
    id: "res-2024-1",
    studentName: "Amit P. Choudhary",
    exam: "JEE Main",
    badge: "Engineering Track",
    achievement: "VNIT Nagpur Admission",
    academicYear: "2023–24 Batch",
    year: "2024",
    stream: "Engineering",
    college: "VNIT Nagpur (Mechanical)",
    quotePlaceholder:
      "The rigorous mechanics drills and continuous problem-solving sessions at United Classes helped me crack JEE Main on my first attempt.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-2024-2",
    studentName: "Snehal S. Meshram",
    exam: "NEET-UG",
    badge: "Medical Track",
    achievement: "GMC Nagpur (MBBS)",
    academicYear: "2023–24 Batch",
    year: "2024",
    stream: "Medical",
    college: "Government Medical College, Nagpur",
    quotePlaceholder:
      "Botany and Zoology NCERT diagrams and timed OMR tests every Sunday kept my preparation on track for MBBS admission.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-2024-3",
    studentName: "Pratik R. Bawankar",
    exam: "MHT-CET (PCM)",
    badge: "State Entrance Track",
    achievement: "COEP Pune Admission",
    academicYear: "2023–24 Batch",
    year: "2024",
    stream: "Engineering",
    college: "College of Engineering Pune (COEP)",
    quotePlaceholder:
      "Shortcuts in 2-mark calculus and rapid inorganic recall taught by the faculty gave me the speed required for MHT-CET.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-2024-4",
    studentName: "Pooja V. Lanjewar",
    exam: "Class 12 HSC Board",
    badge: "Board Exam Excellence",
    achievement: "Distinction with 95+ in Chemistry",
    academicYear: "2023–24 Batch",
    year: "2024",
    stream: "Boards",
    college: "Bhandara Science Merit",
    quotePlaceholder:
      "Organic reaction mechanism flowcharts made chemistry derivations effortless during the Maharashtra Board exams.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },

  // 2023 Batch
  {
    id: "res-2023-1",
    studentName: "Rohan D. Thakre",
    exam: "NEET-UG",
    badge: "Medical Track",
    achievement: "GMC Gondia (MBBS)",
    academicYear: "2022–23 Batch",
    year: "2023",
    stream: "Medical",
    college: "Government Medical College, Gondia",
    quotePlaceholder:
      "The dedicated faculty doubt counter solved my physics numerical confusion before every major mock exam.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-2023-2",
    studentName: "Tanvi M. Rahangdale",
    exam: "MHT-CET (PCB)",
    badge: "Pharmacy Merit",
    achievement: "Government College of Pharmacy",
    academicYear: "2022–23 Batch",
    year: "2023",
    stream: "Medical",
    college: "Govt College of Pharmacy, Amravati",
    quotePlaceholder:
      "Comprehensive coverage of state board biology and chemistry syllabus made MHT-CET pharmacy preparation smooth.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-2023-3",
    studentName: "Kunal S. Wankhede",
    exam: "JEE Main",
    badge: "Engineering Track",
    achievement: "IIIT Nagpur Admission",
    academicYear: "2022–23 Batch",
    year: "2023",
    stream: "Engineering",
    college: "IIIT Nagpur (Computer Science)",
    quotePlaceholder:
      "Mathematics problem-solving sessions under Prof. Patil cleared all my fears in calculus and vectors.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },

  // 2022 Batch
  {
    id: "res-2022-1",
    studentName: "Aditya N. Bhure",
    exam: "MHT-CET (PCM)",
    badge: "State Entrance Track",
    achievement: "Walchand College of Engg, Sangli",
    academicYear: "2021–22 Batch",
    year: "2022",
    stream: "Engineering",
    college: "Walchand College of Engineering, Sangli",
    quotePlaceholder:
      "Even during challenging academic disruptions, United Classes provided seamless hybrid coaching and doubt support in Bhandara.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-2022-2",
    studentName: "Neha G. Katekhaye",
    exam: "NEET-UG",
    badge: "Medical Track",
    achievement: "IGGMC Nagpur (MBBS)",
    academicYear: "2021–22 Batch",
    year: "2022",
    stream: "Medical",
    college: "Indira Gandhi Govt Medical College, Nagpur",
    quotePlaceholder:
      "NCERT word-by-word line reading sessions gave me maximum accuracy in Biology and Organic Chemistry.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },

  // 2021 Batch
  {
    id: "res-2021-1",
    studentName: "Saurabh V. Shende",
    exam: "JEE Main & MHT-CET",
    badge: "Engineering Track",
    achievement: "VJTI Mumbai Admission",
    academicYear: "2020–21 Batch",
    year: "2021",
    stream: "Engineering",
    college: "VJTI Mumbai (Electrical Engg)",
    quotePlaceholder:
      "Strong conceptual foundation in electrodynamics and kinematics helped me clear both CET and JEE comfortably.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-2021-2",
    studentName: "Anjali K. Barapatre",
    exam: "NEET-UG",
    badge: "Medical Track",
    achievement: "GMC Chandrapur (MBBS)",
    academicYear: "2020–21 Batch",
    year: "2021",
    stream: "Medical",
    college: "Govt Medical College, Chandrapur",
    quotePlaceholder:
      "Personal faculty attention in a focused batch size made all the difference for my NEET rank.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },

  // 2020 Batch
  {
    id: "res-2020-1",
    studentName: "Gaurav H. Vaidya",
    exam: "MHT-CET (PCM)",
    badge: "State Entrance Track",
    achievement: "Ramdeobaba College (RCOEM) Nagpur",
    academicYear: "2019–20 Batch",
    year: "2020",
    stream: "Engineering",
    college: "RCOEM Nagpur (Computer Science)",
    quotePlaceholder:
      "Daily practice sheets (DPPs) with timer constraints taught me time management and accuracy under pressure.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-2020-2",
    studentName: "Pallavi B. Dhote",
    exam: "Class 12 HSC Board",
    badge: "Board Exam Excellence",
    achievement: "Distinction in PCMB",
    academicYear: "2019–20 Batch",
    year: "2020",
    stream: "Boards",
    college: "Bhandara District Merit",
    quotePlaceholder:
      "Detailed theory derivation booklets and answer presentation techniques helped me achieve top marks in HSC.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },

  // 2019 Batch
  {
    id: "res-2019-1",
    studentName: "Nikhil S. Tembhurne",
    exam: "JEE Main",
    badge: "Engineering Track",
    achievement: "NIT Raipur Admission",
    academicYear: "2018–19 Batch",
    year: "2019",
    stream: "Engineering",
    college: "National Institute of Technology, Raipur",
    quotePlaceholder:
      "The physics faculty in Bhandara made rotation mechanics and modern physics intuitive with physical demonstration models.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-2019-2",
    studentName: "Divya R. Agrawal",
    exam: "NEET-UG",
    badge: "Medical Track",
    achievement: "GMC Akola (MBBS)",
    academicYear: "2018–19 Batch",
    year: "2019",
    stream: "Medical",
    college: "Government Medical College, Akola",
    quotePlaceholder:
      "Weekly mock OMR tests simulated the real NEET exam environment and eliminated my test anxiety.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },

  // 2018 Batch
  {
    id: "res-2018-1",
    studentName: "Akash M. Pande",
    exam: "MHT-CET (PCM)",
    badge: "State Entrance Track",
    achievement: "Government College of Engg, Amravati",
    academicYear: "2017–18 Batch",
    year: "2018",
    stream: "Engineering",
    college: "GCOE Amravati (Mechanical)",
    quotePlaceholder:
      "The focus on solving Maharashtra State Board textbook exercises before jumping to CET was the best strategy.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-2018-2",
    studentName: "Kavita S. Nimje",
    exam: "Class 12 HSC Board",
    badge: "Board Exam Excellence",
    achievement: "Subject Topper in Physics",
    academicYear: "2017–18 Batch",
    year: "2018",
    stream: "Boards",
    college: "Bhandara Science Center",
    quotePlaceholder:
      "Derivations in optics and current electricity became easy after continuous whiteboard practice sessions.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },

  // 2017 Batch
  {
    id: "res-2017-1",
    studentName: "Mayur T. Chawke",
    exam: "JEE Main",
    badge: "Engineering Track",
    achievement: "NIT Nagpur (VNIT) Seat",
    academicYear: "2016–17 Batch",
    year: "2017",
    stream: "Engineering",
    college: "VNIT Nagpur (Civil Engineering)",
    quotePlaceholder:
      "Calculus and physical chemistry coaching at United Classes gave me an edge over competitors across Vidarbha.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-2017-2",
    studentName: "Shruti P. Zode",
    exam: "NEET-UG (Medical)",
    badge: "Medical Track",
    achievement: "GMC Yavatmal (MBBS)",
    academicYear: "2016–17 Batch",
    year: "2017",
    stream: "Medical",
    college: "Govt Medical College, Yavatmal",
    quotePlaceholder:
      "Individual doubt clearing after lecture hours ensured that no question remained unsolved.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },

  // 2016 Batch
  {
    id: "res-2016-1",
    studentName: "Sachin K. Bante",
    exam: "MHT-CET (PCM)",
    badge: "State Entrance Track",
    achievement: "Govt College of Engg, Karad",
    academicYear: "2015–16 Batch",
    year: "2016",
    stream: "Engineering",
    college: "GCOE Karad (Electrical)",
    quotePlaceholder:
      "Small batch size in Bhandara ensured teachers directly tracked my weekly test performance.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },
  {
    id: "res-2016-2",
    studentName: "Priyanka N. Wagh",
    exam: "Class 12 HSC Board",
    badge: "Board Exam Excellence",
    achievement: "Top Rank in Chemistry",
    academicYear: "2015–16 Batch",
    year: "2016",
    stream: "Boards",
    college: "Bhandara District Merit",
    quotePlaceholder:
      "Step-by-step chemical equations and IUPAC nomenclature drills helped me secure top board marks.",
    isPlaceholderNotice: "Sample Result Placeholder",
  },

  // 2015 Batch (Explicitly requested by user!)
  {
    id: "res-2015-1",
    studentName: "Abhishek R. Hatewar",
    exam: "MHT-CET & JEE",
    badge: "Engineering Track",
    achievement: "VNIT Nagpur Admission",
    academicYear: "2014–15 Batch",
    year: "2015",
    stream: "Engineering",
    college: "Visvesvaraya National Institute of Technology (VNIT), Nagpur",
    quotePlaceholder:
      "Back in 2015, United Classes was the pioneer in Bhandara for structured competitive coaching. The foundational Physics and Maths concepts I learned here stayed with me through engineering.",
    isPlaceholderNotice: "Historical Result Archive (2015 Batch)",
  },
  {
    id: "res-2015-2",
    studentName: "Pooja D. Mendhe",
    exam: "Medical Entrance (AIPMT / State CET)",
    badge: "Medical Track",
    achievement: "Government Medical College Admission (MBBS)",
    academicYear: "2014–15 Batch",
    year: "2015",
    stream: "Medical",
    college: "GMC Nagpur (MBBS)",
    quotePlaceholder:
      "The dedicated Biology diagram drills and rigorous Organic Chemistry mechanisms laid the groundwork for my medical career. Proud alumna of the 2015 batch!",
    isPlaceholderNotice: "Historical Result Archive (2015 Batch)",
  },
  {
    id: "res-2015-3",
    studentName: "Vaibhav S. Ramteke",
    exam: "Class 12 HSC Board (PCMB)",
    badge: "Board Exam Excellence",
    achievement: "District Merit in Science Stream",
    academicYear: "2014–15 Batch",
    year: "2015",
    stream: "Boards",
    college: "Bhandara District Merit Roll",
    quotePlaceholder:
      "Our 2015 batch experienced firsthand how focused classroom attention and derivation workshops make board examinations stress-free.",
    isPlaceholderNotice: "Historical Result Archive (2015 Batch)",
  },
  {
    id: "res-2015-4",
    studentName: "Sonali M. Kapse",
    exam: "MHT-CET (Pharmacy)",
    badge: "State Entrance Track",
    achievement: "Govt College of Pharmacy Selection",
    academicYear: "2014–15 Batch",
    year: "2015",
    stream: "Medical",
    college: "Government College of Pharmacy",
    quotePlaceholder:
      "Having patient teachers who broke down tough chemistry and biology numericals made all the difference for our 2015 batch.",
    isPlaceholderNotice: "Historical Result Archive (2015 Batch)",
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
