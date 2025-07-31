import { AboutSection } from "@/components/Sections/AboutSection";
import { CounterSection } from "@/components/Sections/CounterSection";
import { EducationSection } from "@/components/Sections/EducationSection";
import { HeroSection } from "@/components/Sections/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <CounterSection/>
      <AboutSection/>
      <EducationSection/>
    </div>
  );
}