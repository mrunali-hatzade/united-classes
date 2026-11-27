export interface FAQItem {
  question: string;
  answer: string;
  category: "Admissions" | "Teaching" | "Courses" | "Exams";
}

export const faqData: FAQItem[] = [
  {
    question: "How do I book a free demo lecture?",
    answer:
      "You can click on the 'Book Free Demo' button anywhere on this website and fill in the quick enquiry form. Our academic coordinator will contact you to confirm your preferred demo date and batch slot. Demo lectures are completely free and non-binding.",
    category: "Admissions",
  },
  {
    question: "Which subjects are offered at United Classes Bhandara?",
    answer:
      "We provide specialized coaching for all four core Science subjects: Physics, Chemistry, Mathematics, and Biology (PCMB) for Class 11th & 12th State Board / CBSE, JEE Main/Advanced, NEET-UG, and MHT-CET. Students have the flexibility to enroll in full integrated streams (PCM / PCB / PCMB) or individual subjects.",
    category: "Courses",
  },
  {
    question: "What is the batch size approach at United Classes?",
    answer:
      "To ensure genuine one-on-one attention and individual doubt resolution, our classroom batches are kept focused and limited. We believe overcrowded factory-style batches hinder conceptual learning and prevent students from asking questions freely.",
    category: "Teaching",
  },
  {
    question: "Do you teach according to the Maharashtra State Board or CBSE?",
    answer:
      "We cater to both Maharashtra State Board (HSC) and CBSE Class 11th & 12th students. We provide structured derivation booklets and theory drafting for Board exams alongside synchronized objective preparation for JEE, NEET, and MHT-CET.",
    category: "Courses",
  },
  {
    question: "How are student doubts addressed outside lecture hours?",
    answer:
      "We provide regular doubt-clearing sessions before and after scheduled batches. Students can also bring school homework or test difficulties to our subject faculty for personalized step-by-step guidance.",
    category: "Teaching",
  },
  {
    question: "Are parents regularly informed of test performance and attendance?",
    answer:
      "Yes. Every weekly test score and chapter assessment is shared directly with parents via SMS/WhatsApp reports. We also organize term-wise parent-teacher discussions to review progress.",
    category: "Teaching",
  },
  {
    question: "Where in Bhandara is the coaching centre located?",
    answer:
      "Our coaching centre is centrally situated in Bhandara, Maharashtra, with convenient access for students travelling from nearby areas. (The exact street address and landmark will be updated with the institute's confirmed premises).",
    category: "Admissions",
  },
];
