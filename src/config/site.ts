export interface FacultyMember {
  subject: string;
  name: string;
  designation: string;
  qualificationPlaceholder: string;
  experiencePlaceholder: string;
  specialization: string;
  color: string;
  imageUrl: string;
}

export interface InstituteConfig {
  brandName: string;
  tagline: string;
  subTagline: string;
  location: {
    city: string;
    district: string;
    state: string;
    country: string;
    pincode: string;
    landmarkPlaceholder: string;
    addressLine1: string;
    addressLine2: string;
    googleMapsEmbedUrl?: string;
  };
  contact: {
    phonePlaceholder: string;
    phoneDisplay: string;
    whatsappNumber: string; // "91XXXXXXXXXX"
    emailPlaceholder: string;
    officeHours: string;
    batchTimings: string;
  };
  social: {
    instagram: string;
    youtube: string;
    facebook: string;
    telegram: string;
  };
  teacherProfile: {
    name: string;
    designation: string;
    qualificationPlaceholder: string;
    experiencePlaceholder: string;
    bio: string;
    specialization: string;
  };
  facultyTeam: FacultyMember[];
  academicSession: string;
  developedBy: {
    name: string;
    tag: string;
    isDemo: boolean;
  };
}

export const siteConfig: InstituteConfig = {
  brandName: "UNITED CLASSES",
  tagline: "Understand Science. Master Your Future.",
  subTagline: "Premier Coaching for Class 11th & 12th Science (Physics, Chemistry, Maths & Biology) • JEE, NEET & MHT-CET",
  location: {
    city: "Bhandara",
    district: "Bhandara",
    state: "Maharashtra",
    country: "India",
    pincode: "441904",
    landmarkPlaceholder: "Near Gandhi Chowk / Main Market",
    addressLine1: "United Classes Campus, 2nd Floor",
    addressLine2: "Main Road, Bhandara, Maharashtra - 441904",
    // Embed URL for Bhandara Maharashtra center
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118973.91428271796!2d79.5768560124373!3d21.17482390772719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b4f99f1bc4e6b%3A0x8e83be69e8b39d1b!2sBhandara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  contact: {
    phonePlaceholder: "+91 98XXX XXXXX",
    phoneDisplay: "+91 98000 00000",
    whatsappNumber: "91XXXXXXXXXX", // Placeholder as requested: 91XXXXXXXXXX
    emailPlaceholder: "contact@unitedclasses.demo",
    officeHours: "Monday – Saturday: 7:00 AM – 8:00 PM | Sunday: 8:00 AM – 1:00 PM",
    batchTimings: "Morning Batches: 6:30 AM – 9:00 AM | Evening Batches: 4:30 PM – 8:00 PM",
  },
  social: {
    instagram: "https://instagram.com/unitedclasses_demo",
    youtube: "https://youtube.com/@unitedclasses_demo",
    facebook: "https://facebook.com/unitedclasses_demo",
    telegram: "https://t.me/unitedclasses_demo",
  },
  teacherProfile: {
    name: "Senior Academic Mentors",
    designation: "Expert Science Faculty Team (PCMB)",
    qualificationPlaceholder: "M.Sc. / B.Tech Specialist Faculty",
    experiencePlaceholder: "10+ Years Proven Teaching Experience in Bhandara",
    bio: "At United Classes, every science subject is taught by dedicated subject specialists. Our faculty combines visual conceptual clarity with rigorous numerical problem solving so students master Maharashtra State Board, CBSE, JEE, NEET and MHT-CET with absolute confidence.",
    specialization: "Physics, Chemistry, Mathematics & Biology (PCMB)",
  },
  facultyTeam: [
    {
      subject: "Physics",
      name: "Prof. S. R. Sharma",
      designation: "Head of Physics Department",
      qualificationPlaceholder: "M.Sc. Physics (12+ Yrs Exp.)",
      experiencePlaceholder: "12+ Years Mentoring JEE & NEET Aspirants in Bhandara",
      specialization: "Mechanics, Electrodynamics, Modern Physics & Ray Optics",
      color: "blue",
      imageUrl: "/faculty/physics-faculty.jpg",
    },
    {
      subject: "Chemistry",
      name: "Dr. A. V. Deshmukh",
      designation: "Head of Chemistry Department",
      qualificationPlaceholder: "M.Sc. Organic Chemistry, CSIR-NET (10+ Yrs Exp.)",
      experiencePlaceholder: "10+ Years Competitive Exam Coaching & Board Prep",
      specialization: "Organic Mechanisms, Chemical Thermodynamics & Inorganic NCERT",
      color: "emerald",
      imageUrl: "/faculty/chemistry-faculty.jpg",
    },
    {
      subject: "Mathematics",
      name: "Prof. V. N. Patil",
      designation: "Head of Mathematics & CET Lead",
      qualificationPlaceholder: "M.Sc. Applied Mathematics / B.Tech (11+ Yrs Exp.)",
      experiencePlaceholder: "11+ Years JEE Main & MHT-CET Mentorship",
      specialization: "Calculus, 3D Geometry, Vectors & CET Speed Shortcuts",
      color: "indigo",
      imageUrl: "/faculty/mathematics-faculty.jpg",
    },
    {
      subject: "Biology",
      name: "Dr. Neha K. Wanjari",
      designation: "Head of Biology (Botany & Zoology)",
      qualificationPlaceholder: "M.Sc. Life Sciences, Ph.D. Scholar (9+ Yrs Exp.)",
      experiencePlaceholder: "9+ Years NEET-UG 350+ Score Mentorship",
      specialization: "Human Physiology, Genetics, Biotechnology & Ecology",
      color: "cyan",
      imageUrl: "/faculty/biology-faculty.jpg",
    },
  ],
  academicSession: "2026–27",
  developedBy: {
    name: "Simplified Works",
    tag: "Client Presentation Demo",
    isDemo: true,
  },
};

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Results", href: "/results" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];
