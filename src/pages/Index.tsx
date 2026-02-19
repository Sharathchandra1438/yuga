import { useEffect } from "react";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import CSHubSection from "@/components/CSHubSection";
import GallerySection from "@/components/GallerySection";
import SportsSection from "@/components/SportsSection";
import CountdownSection from "@/components/CountdownSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.jpeg";

const Index = () => {
  // Scroll reveal observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen" style={{ background: "hsl(0 0% 3%)" }}>
      {/* Particle canvas */}
      <ParticleBackground />

      {/* Global YUGA watermark */}
      <div
        className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <img
          src={logo}
          alt=""
          className="w-[60vw] max-w-2xl opacity-[0.015] select-none animate-rotate-slow"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <EventsSection />
        <CSHubSection />
        <GallerySection />
        <SportsSection />
        <CountdownSection />
        {/* <ContactSection /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
