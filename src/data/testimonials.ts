export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  exam: string;
  batch: string;
  feedback: string;
  highlight: string;
  rating: number;
  isDemoNotice: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Sample Student 01",
    role: "Class 12 & JEE Aspirant",
    exam: "JEE Main & Board Prep (PCM)",
    batch: "Academic Session 2025–26",
    highlight: "Having expert faculty for Physics, Chemistry & Maths under one roof was a gamechanger",
    feedback:
      "United Classes transformed my preparation. Having specialized teachers for Physics mechanics, Organic reaction mechanisms, and Calculus meant I didn't have to run between multiple tuition classes in Bhandara. Everything was synchronized and rigorous.",
    rating: 5,
    isDemoNotice: "Sample Student Feedback",
  },
  {
    id: "test-2",
    name: "Sample Student 02",
    role: "NEET Medical Aspirant",
    exam: "NEET-UG (PCB Medical)",
    batch: "Academic Session 2025–26",
    highlight: "Overcame my fear of physics numericals while mastering NCERT Biology",
    feedback:
      "As a biology student, physics numericals used to cause severe anxiety. The patient mentors at United Classes simplified derivations, while our Biology faculty drilled every line of NCERT Botany and Zoology. Scored with full confidence!",
    rating: 5,
    isDemoNotice: "Sample Student Feedback",
  },
  {
    id: "test-3",
    name: "Sample Parent",
    role: "Parent of Class 11 Student",
    exam: "Class 11 Science & Foundation",
    batch: "Academic Session 2025–26",
    highlight: "Consistent updates and genuine personal attention",
    feedback:
      "What sets this institute apart is personal accountability. The regular attendance tracking, weekly test report cards, and mentor accessibility keep parents informed and students disciplined throughout the session.",
    rating: 5,
    isDemoNotice: "Sample Parent Feedback",
  },
  {
    id: "test-4",
    name: "Sample Student 03",
    role: "MHT-CET Aspirant",
    exam: "MHT-CET & State Board",
    batch: "Academic Session 2025–26",
    highlight: "Focused strategies made competitive exam pacing manageable",
    feedback:
      "MHT-CET demands disciplined speed and accuracy. The systematic textbook review and structured problem-solving methods helped build exam confidence.",
    rating: 5,
    isDemoNotice: "Sample Student Feedback",
  },
];
