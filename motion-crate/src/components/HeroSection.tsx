"use client";

import React from "react";
import { ArrowDown, Phone } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        maxWidth: "1380px",
        width: "100%",
        margin: "0 auto",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ScrollReveal delay={0}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.85rem, 6.2vw, 4.6rem)",
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
              marginBottom: "24px",
              color: "#ffffff",
              overflowWrap: "break-word",
              wordBreak: "break-word",
              maxWidth: "100%",
            }}
          >
            <span>Your Idea.</span>{" "}
            <span>Our Technology,</span>
            <br />
            <span>Together We Build . . .</span>
            <br />
            <span className="text-shimmer">WHAT'S NEXT.</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(0.92rem, 2.5vw, 1.12rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.65,
              maxWidth: "640px",
              marginBottom: "32px",
              fontFamily: "var(--font-space)",
              padding: "0 6px",
            }}
          >
            Next-Tech Solution is a premier technology developer delivering
            transformative digital solutions. We architect high-performance 3D
            websites, robust management systems, mobile apps, complete brand
            identities, and smart NFC card landing experiences tailored to
            scale your enterprise.
          </p>

          <div
            className="btn-hero-stack"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <button
              onClick={() => scrollToSection("services")}
              className="btn-glass-primary"
              style={{ minHeight: "48px" }}
            >
              Explore Our Services <ArrowDown size={14} />
            </button>

            <a
              href="tel:0931418513"
              className="btn-glass-secondary"
              style={{ minHeight: "48px" }}
            >
              <Phone size={14} color="#facc15" /> Call 0931418513
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}