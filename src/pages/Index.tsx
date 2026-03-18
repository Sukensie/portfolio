import { lazy, Suspense } from "react";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/jetbrains-mono/400.css";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="relative isolate min-h-screen bg-background">
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <Suspense fallback={null}>
          <ProjectsSection />
          <SkillsSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
