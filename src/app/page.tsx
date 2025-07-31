import { AboutSection } from "@/components/Sections/AboutSection";
import { BlogSection } from "@/components/Sections/BlogSection";
import { ContactSection } from "@/components/Sections/ContactSection";
import { CounterSection } from "@/components/Sections/CounterSection";
import { EducationSection } from "@/components/Sections/EducationSection";
import { ExperienceSection } from "@/components/Sections/ExperienceSection";
import { HeroSection } from "@/components/Sections/HeroSection";
import { ProjectsSection } from "@/components/Sections/ProjectsSection";
import { SkillsSection } from "@/components/Sections/SkillSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <CounterSection/>
      <AboutSection/>
      <EducationSection/>
      <ExperienceSection/>
      <SkillsSection/>
      <ProjectsSection/>
      <BlogSection/>
      <ContactSection/>
    </div>
  );
}