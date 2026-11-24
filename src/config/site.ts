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
  websiteUrl: string;
  domainPlaceholder: string;
  academicSession: string;
  location: {
    city: string;
    district: string;
    state: string;
    country: string;
    pincode: string;
    landmarkPlaceholder: string;
    addressLine1: string;
    addressLine2: string;
    fullAddress: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
  };
  contact: {
    phonePlaceholder: string;
    phoneDisplay: string;
    phoneValue: string;
    whatsappNumber: string; // e.g. "91XXXXXXXXXX"
    whatsappDisplay: string;
    emailPlaceholder: string;
    officeHours: string;
    batchTimings: string;
    defaultWhatsAppMessage: string;
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
  sampleDataNotice: {
    isSampleData: boolean;
    bannerText: string;
    disclaimer: string;
  };
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
  websiteUrl: "https://united-classes-mu.vercel.app",
  domainPlaceholder: "unitedclasses-bhandara.in",
  academicSession: "2026–27",
  location: {
    city: "Bhandara",
    district: "Bhandara",
    state: "Maharashtra",
    country: "India",
    pincode: "441904",
    landmarkPlaceholder: "Near Gandhi Chowk / Main Market",
    addressLine1: "United Classes Campus, 2nd Floor",
    addressLine2: "Main Road, Bhandara, Maharashtra - 441904",
    fullAddress: "United Classes Campus, 2nd Floor, Main Road, Near Gandhi Chowk, Bhandara, Maharashtra - 441904",
    // Embed URL for Bhandara Maharashtra center
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118973.91428271796!2d79.5768560124373!3d21.17482390772719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b4f99f1bc4e6b%3A0x8e83be69e8b39d1b!2sBhandara%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Bhandara,+Maharashtra",
  },
  contact: {
    phonePlaceholder: "+91 98XXX XXXXX",
    phoneDisplay: "+91 98000 00000",
    phoneValue: "+919800000000",
    whatsappNumber: "91XXXXXXXXXX",
    whatsappDisplay: "+91 98XXX XXXXX",
    emailPlaceholder: "contact@unitedclasses.demo",
    officeHours: "Monday – Saturday: 7:00 AM – 8:00 PM | Sunday: 8:00 AM – 1:00 PM",
    batchTimings: "Morning Batches: 6:30 AM – 9:00 AM | Evening Batches: 4:30 PM – 8:00 PM",
    defaultWhatsAppMessage: "Hello United Classes Bhandara, I am interested in Science coaching (Physics, Chemistry, Maths & Biology). I would like to know more about your courses and free demo lectures.",
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
    qualificationPlaceholder: "M.Sc. / Specialist Faculty",
    experiencePlaceholder: "Senior Subject Specialist Teaching Team",
    bio: "At United Classes, every science subject is taught by dedicated subject specialists. Our faculty combines visual conceptual clarity with rigorous numerical problem solving so students master Maharashtra State Board, CBSE, JEE, NEET and MHT-CET with confidence.",
    specialization: "Physics, Chemistry, Mathematics & Biology (PCMB)",
  },
  facultyTeam: [
    {
      subject: "Physics",
      name: "Prof. S. R. Sharma",
      designation: "Head of Physics Department",
      qualificationPlaceholder: "M.Sc. Physics (Specialist)",
      experiencePlaceholder: "Senior Faculty Profile • Dedicated Physics Mentorship",
      specialization: "Mechanics, Electrodynamics, Modern Physics & Ray Optics",
      color: "blue",
      imageUrl: "/faculty/physics-faculty.jpg",
    },
    {
      subject: "Chemistry",
      name: "Dr. A. V. Deshmukh",
      designation: "Head of Chemistry Department",
      qualificationPlaceholder: "M.Sc. Organic Chemistry, CSIR-NET (Specialist)",
      experiencePlaceholder: "Senior Faculty Profile • Dedicated Chemistry Mentorship",
      specialization: "Organic Mechanisms, Chemical Thermodynamics & Inorganic NCERT",
      color: "emerald",
      imageUrl: "/faculty/chemistry-faculty.jpg",
    },
    {
      subject: "Mathematics",
      name: "Prof. V. N. Patil",
      designation: "Head of Mathematics & CET Lead",
      qualificationPlaceholder: "M.Sc. Applied Mathematics (Specialist)",
      experiencePlaceholder: "Senior Faculty Profile • Dedicated Mathematics Mentorship",
      specialization: "Calculus, 3D Geometry, Vectors & CET Problem Solving",
      color: "indigo",
      imageUrl: "/faculty/mathematics-faculty.jpg",
    },
    {
      subject: "Biology",
      name: "Dr. Neha K. Wanjari",
      designation: "Head of Biology (Botany & Zoology)",
      qualificationPlaceholder: "M.Sc. Life Sciences (Specialist)",
      experiencePlaceholder: "Senior Faculty Profile • Dedicated Biology Mentorship",
      specialization: "Human Physiology, Genetics, Biotechnology & Ecology",
      color: "cyan",
      imageUrl: "/faculty/biology-faculty.jpg",
    },
  ],
  sampleDataNotice: {
    isSampleData: true,
    bannerText: "Structured Preview Data • To be updated with confirmed institute records",
    disclaimer: "Student results, testimonials, batch timings, and faculty details shown on this website represent structured sample data prepared for client review and verification.",
  },
  developedBy: {
    name: "Simplified Works",
    tag: "Client Presentation Demo",
    isDemo: true,
  },
};

/**
 * Returns a clean WhatsApp click-to-chat URL.
 * Automatically detects whether the number is a placeholder.
 */
export function getWhatsAppUrl(customMessage?: string): { url: string; isPlaceholder: boolean } {
  const number = siteConfig.contact.whatsappNumber;
  const isPlaceholder = !number || number.includes("X") || number.length < 10;
  const msg = customMessage || siteConfig.contact.defaultWhatsAppMessage;
  const cleanNumber = number.replace(/\D/g, "");
  const url = `https://wa.me/${cleanNumber || "919800000000"}?text=${encodeURIComponent(msg)}`;
  return { url, isPlaceholder };
}

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Results", href: "/results" },
  { name: "Gallery", href: "/gallery" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];
