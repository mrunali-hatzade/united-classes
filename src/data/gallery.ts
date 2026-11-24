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
    imagePlaceholder: "/gallery/classrooms-placeholder.svg",
    badge: "Classroom",
    aspect: "landscape",
    date: "Academic Session 2026–27",
  },
  {
    id: "gal-2",
    title: "Digital Interactive Projection & Whiteboard",
    category: "Classrooms",
    description: "Visual derivation screens allowing step-by-step 3D physics projections, chemical molecular modeling, and calculus curve plotting.",
    imagePlaceholder: "/gallery/classrooms-placeholder.svg",
    badge: "Technology",
    aspect: "landscape",
    date: "Infrastructure",
  },
  {
    id: "gal-3",
    title: "Dedicated Faculty Doubt Resolution Desk",
    category: "Faculty & Mentorship",
    description: "Personal mentor desks where students discuss numericals, derivations, and test error analyses with subject teachers.",
    imagePlaceholder: "/gallery/mentorship-placeholder.svg",
    badge: "Mentorship",
    aspect: "landscape",
    date: "Doubt Desk",
  },
  {
    id: "gal-4",
    title: "Senior Faculty Subject Coordination Session",
    category: "Faculty & Mentorship",
    description: "Cross-departmental meeting ensuring synchronized lecture schedules across Physics, Chemistry, Mathematics, and Biology.",
    imagePlaceholder: "/gallery/mentorship-placeholder.svg",
    badge: "Academic Review",
    aspect: "landscape",
    date: "Faculty Desk",
  },
  {
    id: "gal-5",
    title: "Timed OMR Examination Session",
    category: "Academic Activities",
    description: "Students undergoing structured exam hall practice with entrance timings, negative marking practice, and OMR sheets.",
    imagePlaceholder: "/gallery/activities-placeholder.svg",
    badge: "Testing",
    aspect: "landscape",
    date: "Practice Mock Tests",
  },
  {
    id: "gal-6",
    title: "Formula Derivation & Problem Solving Workshop",
    category: "Academic Activities",
    description: "Intensive problem-solving sessions analyzing past-year competitive and board questions in timed intervals.",
    imagePlaceholder: "/gallery/activities-placeholder.svg",
    badge: "Workshops",
    aspect: "landscape",
    date: "Sprint Drills",
  },
  {
    id: "gal-7",
    title: "NCERT Reference & Quiet Self-Study Space",
    category: "Study Sessions & Library",
    description: "Quiet study library holding comprehensive reference modules, past entrance papers, and state board question banks.",
    imagePlaceholder: "/gallery/library-placeholder.svg",
    badge: "Library",
    aspect: "landscape",
    date: "Self-Study Space",
  },
  {
    id: "gal-8",
    title: "Daily Practice Problem (DPP) Review Discussions",
    category: "Study Sessions & Library",
    description: "Small student peer circles reviewing daily problem practice sheets under the guidance of assigned assistant teachers.",
    imagePlaceholder: "/gallery/library-placeholder.svg",
    badge: "Peer Learning",
    aspect: "landscape",
    date: "Study Circles",
  },
  {
    id: "gal-9",
    title: "Annual Scholar Felicitation & Motivation Seminar",
    category: "Events & Felicitations",
    description: "Celebrating student achievements in Board and competitive exams alongside parents, juniors, and guest educators.",
    imagePlaceholder: "/gallery/events-placeholder.svg",
    badge: "Celebration",
    aspect: "landscape",
    date: "Annual Felicitation",
  },
  {
    id: "gal-10",
    title: "Parent-Teacher Academic Progress & Guidance Meet",
    category: "Events & Felicitations",
    description: "Term-wise review sessions sharing test metrics, attendance records, and personalized performance roadmaps with parents.",
    imagePlaceholder: "/gallery/events-placeholder.svg",
    badge: "Parent-Teacher",
    aspect: "landscape",
    date: "Term Evaluation",
  },
];
