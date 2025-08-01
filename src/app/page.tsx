"use client"
import { LandingLoader } from "@/components/LandingLoader";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AboutSection } from "@/components/Sections/AboutSection";
import { BlogSection } from "@/components/Sections/BlogSection";
import { ContactSection } from "@/components/Sections/ContactSection";
import { CounterSection } from "@/components/Sections/CounterSection";
import { EducationSection } from "@/components/Sections/EducationSection";
import { ExperienceSection } from "@/components/Sections/ExperienceSection";
import { HeroSection } from "@/components/Sections/HeroSection";
import { ProjectsSection } from "@/components/Sections/ProjectsSection";
import { SkillsSection } from "@/components/Sections/SkillSection";
import { useState } from "react";

export default function Home() {
   const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }
  return (
    <div>
      {isLoading && <LandingLoader onLoadingComplete={handleLoadingComplete} />}
      <HeroSection/>
      <CounterSection/>
      <AboutSection/>
      <EducationSection/>
      <ExperienceSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <BlogSection/>
      <ContactSection/>
      <ScrollToTop/>
    </div>
  );
}