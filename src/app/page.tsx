import { AboutSection } from "@/components/Sections/AboutSection";
import { CounterSection } from "@/components/Sections/CounterSection";
import { EducationSection } from "@/components/Sections/EducationSection";
import { ExperienceSection } from "@/components/Sections/ExperienceSection";
import { HeroSection } from "@/components/Sections/HeroSection";
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
    </div>
  );
}