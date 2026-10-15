import BackgroundNebula3D from "@/components/BackgroundNebula3D";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionsSection from "@/components/SolutionsSection";
import ImpactSection from "@/components/ImpactSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ position: "relative", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Micro-texture Noise Overlay */}
      <div className="noise-overlay" />

      {/* 3D Pure White Celestial Vortex Background */}
      <BackgroundNebula3D />

      {/* Frosted Glass Navigation Bar */}
      <Navbar />

      {/* Natural Continuous Fluid Document Sections */}
      <section id="hero" className="section-hero">
        <HeroSection />
      </section>

      <section id="services" className="section-wrapper">
        <div id="solutions" style={{ position: "absolute", top: 0 }} />
        <SolutionsSection />
      </section>

      <section id="portfolio" className="section-wrapper">
        <div id="impact" style={{ position: "absolute", top: 0 }} />
        <ImpactSection />
      </section>

      <section id="contact" className="section-wrapper" style={{ paddingBottom: "120px" }}>
        <ContactSection />
      </section>

      {/* Frosted Glass Enterprise Footer */}
      <Footer />
    </main>
  );
}
