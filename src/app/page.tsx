import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { TapeSection } from "@/sections/Tape";
import { ProjectsSection } from "@/sections/Projects";
import { ExperienceSection } from "@/sections/Experience";
import { AboutSection } from "@/sections/About";
import { AchievementsSection } from "@/sections/Achievements";
import { TestimonialsSection } from "@/sections/Testimonials";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TapeSection />
      <ProjectsSection />
      <TapeSection />
      <ExperienceSection />
      <AboutSection />
      <AchievementsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <Analytics />
    </div>  
  );
}
