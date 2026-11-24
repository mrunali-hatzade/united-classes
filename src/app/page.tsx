import React from "react";
import Hero from "@/components/home/Hero";
import ExamStrip from "@/components/home/ExamStrip";
import AboutSection from "@/components/home/AboutSection";
import CourseCards from "@/components/home/CourseCards";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Methodology from "@/components/home/Methodology";
import ResultsSection from "@/components/home/ResultsSection";
import Testimonials from "@/components/home/Testimonials";
import DemoCTA from "@/components/home/DemoCTA";
import LocationSection from "@/components/home/LocationSection";

export default function HomePage() {
  return (
    <>
      {/* B. Hero Section */}
      <Hero />

      {/* C. Examination Preparation Strip */}
      <ExamStrip />

      {/* D. About the Institute */}
      <AboutSection />

      {/* E. Courses Section */}
      <CourseCards />

      {/* F. Why Choose Us Section */}
      <WhyChooseUs />

      {/* G. Learning Methodology Section */}
      <Methodology />

      {/* H. Results and Achievements */}
      <ResultsSection />

      {/* I. Testimonials */}
      <Testimonials />

      {/* J. Free Demo Lecture CTA */}
      <DemoCTA />

      {/* K. Location Section */}
      <LocationSection />
    </>
  );
}
