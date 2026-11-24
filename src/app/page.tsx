import React from "react";
import Hero from "@/components/home/Hero";
import TrustHighlights from "@/components/home/TrustHighlights";
import AcademicProgrammes from "@/components/home/AcademicProgrammes";
import ScienceSubjects from "@/components/home/ScienceSubjects";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Methodology from "@/components/home/Methodology";
import FacultySection from "@/components/home/FacultySection";
import ResultsSection from "@/components/home/ResultsSection";
import Testimonials from "@/components/home/Testimonials";
import GalleryPreview from "@/components/home/GalleryPreview";
import DemoCTA from "@/components/home/DemoCTA";
import HomeFAQ from "@/components/home/HomeFAQ";
import LocationSection from "@/components/home/LocationSection";

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <Hero />

      {/* Section 2 — Trust and Learning Highlights */}
      <TrustHighlights />

      {/* Section 3 — Academic Programmes */}
      <AcademicProgrammes />

      {/* Section 4 — Science Subjects (Physics, Chemistry, Mathematics, Biology) */}
      <ScienceSubjects />

      {/* Section 5 — Why United Classes? */}
      <WhyChooseUs />

      {/* Section 6 — Teaching Methodology (6-Stage Learning Journey) */}
      <Methodology />

      {/* Section 7 — Faculty Specialist Team */}
      <FacultySection />

      {/* Section 8 — Results and Academic Achievements */}
      <ResultsSection />

      {/* Section 9 — Testimonials & Parent Feedback */}
      <Testimonials />

      {/* Section 10 — Institute Gallery Preview */}
      <GalleryPreview />

      {/* Section 11 — Book a Free Demo Lecture CTA */}
      <DemoCTA />

      {/* Section 12 — Frequently Asked Questions */}
      <HomeFAQ />

      {/* Section 13 — Location & Campus Visit */}
      <LocationSection />
    </>
  );
}
