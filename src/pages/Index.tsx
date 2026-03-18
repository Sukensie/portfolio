import { lazy, Suspense } from "react";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";

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
        <main>
          <HeroSection />
          <Suspense fallback={null}>
            <ProjectsSection />
            <SkillsSection />
            <AboutSection />
            <ContactSection />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
