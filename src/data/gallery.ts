export interface GalleryItem {
  id: string;
  title: string;
  category: "Classrooms" | "Faculty & Mentorship" | "Academic Activities" | "Study Sessions & Library" | "Events & Felicitations";
  description: string;
  imagePlaceholder: string;
  badge: string;
  aspect?: "landscape" | "portrait" | "square";
  date?: string;
}

export const galleryCategories = [
  "All",
  "Classrooms",
  "Faculty & Mentorship",
  "Academic Activities",
  "Study Sessions & Library",
  "Events & Felicitations",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Modern Air-Cooled Classroom Batches",
    category: "Classrooms",
    description: "Spacious, distraction-free lecture halls equipped with ergonomic individual seating and modern audiovisual presentation tools.",
    imagePlaceholder: "/faculty/physics-faculty.jpg",
    badge: "Classroom",
    aspect: "landscape",
    date: "Academic Session 2026–27",
  },
  {
    id: "gal-2",
    title: "Digital Interactive Projection & Whiteboard",
    category: "Classrooms",
    description: "Visual derivation screens allowing step-by-step 3D physics projections, chemical molecular modeling, and calculus curve plotting.",
    imagePlaceholder: "/faculty/chemistry-faculty.jpg",
    badge: "Technology",
    aspect: "landscape",
    date: "Infrastructure",
  },
  {
    id: "gal-3",
    title: "1-on-1 Faculty Doubt Resolution Counter",
    category: "Faculty & Mentorship",
    description: "Personal mentor desks where students discuss tricky numericals, derivations, and test error analyses daily with department heads.",
    imagePlaceholder: "/faculty/mathematics-faculty.jpg",
    badge: "Mentorship",
    aspect: "landscape",
    date: "Daily Doubt Desk",
  },
  {
    id: "gal-4",
    title: "Senior Faculty Subject Coordination Session",
    category: "Faculty & Mentorship",
    description: "Cross-departmental meeting ensuring synchronized lecture schedules across Physics, Chemistry, Mathematics, and Biology.",
    imagePlaceholder: "/faculty/biology-faculty.jpg",
    badge: "Academic Review",
    aspect: "landscape",
    date: "Faculty Desk",
  },
  {
    id: "gal-5",
    title: "Weekly Timed OMR Simulated Examination",
    category: "Academic Activities",
    description: "Students undergoing real-time exam hall simulation with strict entrance timings, negative marking practice, and OMR sheets.",
    imagePlaceholder: "/faculty/physics-faculty.jpg",
    badge: "Testing",
    aspect: "landscape",
    date: "Sunday Mock Tests",
  },
  {
    id: "gal-6",
    title: "Formula Derivation & Problem Solving Workshop",
    category: "Academic Activities",
    description: "Intensive Sunday problem-solving marathons where students crack 100+ past year competitive questions in timed intervals.",
    imagePlaceholder: "/faculty/chemistry-faculty.jpg",
    badge: "Workshops",
    aspect: "landscape",
    date: "Sprint Drills",
  },
  {
    id: "gal-7",
    title: "NCERT Reference & Quiet Self-Study Hall",
    category: "Study Sessions & Library",
    description: "Quiet study library holding comprehensive reference modules, past 15-year entrance papers, and state board question banks.",
    imagePlaceholder: "/faculty/mathematics-faculty.jpg",
    badge: "Library",
    aspect: "landscape",
    date: "Self-Study Space",
  },
  {
    id: "gal-8",
    title: "Daily Practice Problem (DPP) Review Discussions",
    category: "Study Sessions & Library",
    description: "Small student peer circles reviewing daily problem practice sheets under the guidance of assigned assistant teachers.",
    imagePlaceholder: "/faculty/biology-faculty.jpg",
    badge: "Peer Learning",
    aspect: "landscape",
    date: "Study Circles",
  },
  {
    id: "gal-9",
    title: "Annual Scholar Felicitation & Motivation Seminar",
    category: "Events & Felicitations",
    description: "Celebrating top rankers in Board and competitive exams alongside parents, juniors, and guest academic luminaries.",
    imagePlaceholder: "/faculty/physics-faculty.jpg",
    badge: "Celebration",
    aspect: "landscape",
    date: "Annual Felicitation",
  },
  {
    id: "gal-10",
    title: "Parent-Teacher Academic Progress & Guidance Meet",
    category: "Events & Felicitations",
    description: "Term-wise review sessions sharing weekly test metrics, attendance reports, and personalized performance roadmaps with parents.",
    imagePlaceholder: "/faculty/chemistry-faculty.jpg",
    badge: "Parent-Teacher",
    aspect: "landscape",
    date: "Term Evaluation",
  },
];
