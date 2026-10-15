"use client";

import React from "react";
import { Truck, Car, Smartphone, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ImpactSection() {
  const cases = [
    {
      sector: "TOWING & LOGISTICS",
      client: "Balegariw Tow Truck Company",
      icon: Truck,
      title: "Corporate Website & Full Branding Suite",
      badge: "DELIVERED & LIVE",
      metric: "Full Branding",
      metricLabel: "Complete Brand Identity + Responsive Web",
      desc: "Delivered an end-to-end digital identity for Balegariw Tow Truck Company. Built a high-performance modern web platform paired with a complete branding overhaul including visual guidelines, logo systems, and promotional materials for emergency towing dispatch.",
      tags: ["Full Branding", "Custom Web Development", "Visual Identity", "SEO Optimized"]
    },
    {
      sector: "CAR RENTAL FLEETS",
      client: "Real Cars Rental Fleet",
      icon: Car,
      title: "Fleet Admin Dashboard & Telegram Onboarding Bot",
      badge: "DELIVERED & OPERATIONAL",
      metric: "Dashboard + Bot",
      metricLabel: "Real-Time Fleet Oversight & User Registration",
      desc: "Engineered a centralized administrative dashboard for Real Cars to monitor their rental car company fleets in real-time, accompanied by a custom Telegram Bot that automates user registration and onboards car owners and their vehicles directly into the Real Cars ecosystem.",
      tags: ["Admin Dashboard", "Telegram Bot API", "Fleet Logistics", "Automated Onboarding"]
    },
    {
      sector: "FINANCIAL TECHNOLOGY",
      client: "BirrFlow Platform",
      icon: Smartphone,
      title: "BirrFlow Mobile App & Web Waitlist Platform",
      badge: "IN ACTIVE PRODUCTION",
      metric: "Publishing Soon",
      metricLabel: "Flagship Mobile App & Pre-Launch Landing Page",
      desc: "Currently architecting and developing the BirrFlow mobile application — an innovative financial technology solution built for modern transactions. We also crafted and launched the official BirrFlow web waitlist landing page to capture pre-launch users and accelerate market rollout.",
      tags: ["Mobile App Development", "Waitlist Landing Page", "Fintech UX", "Under Production"]
    }
  ];

  return (
    <div
      style={{
        maxWidth: "1380px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      {/* Chapter Index Header */}
      <ScrollReveal delay={0}>
        <div style={{ marginBottom: "48px" }}>
          <div style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            Our Previous Work & <span className="text-shimmer">Projects</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1rem",
              maxWidth: "680px",
              marginTop: "12px",
              fontFamily: "var(--font-space)",
            }}
          >
            Real-world digital solutions delivered for growing businesses — from corporate branding and logistics platforms to fleet dashboards, automated bots, and mobile fintech applications.
          </p>
        </div>
      </ScrollReveal>

      {/* 3 Case Study Columns with Staggered ScrollReveal In/Out Motion */}
      <div className="responsive-cards-grid">
        {cases.map((c, idx) => {
          const IconComponent = c.icon;
          return (
            <ScrollReveal key={idx} delay={idx * 100}>
              <div
                className="glass-panel card-pad"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  {/* Top Bar with Icon & Status Badge */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "8px",
                          background: "rgba(234, 179, 8, 0.12)",
                          border: "1px solid rgba(234, 179, 8, 0.25)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#facc15",
                        }}
                      >
                        <IconComponent size={25} />
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.72rem",
                          color: "#facc15",
                          letterSpacing: "0.08em",
                          fontWeight: 600,
                        }}
                      >
                        {c.sector}
                      </span>
                    </div>

                    <span className="badge-gold">
                      {c.badge}
                    </span>
                  </div>

                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "#ffffff", fontWeight: 600, marginBottom: "6px" }}>
                    {c.client}
                  </div>

                  <h3
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      marginBottom: "20px",
                      fontFamily: "var(--font-syne)",
                      lineHeight: 1.3,
                      color: "#ffffff",
                    }}
                  >
                    {c.title}
                  </h3>

                  {/* Highlight Box */}
                  <div
                    style={{
                      background: "rgba(12, 10, 5, 0.65)",
                      border: "1px solid rgba(234, 179, 8, 0.2)",
                      borderRadius: "12px",
                      padding: "18px 20px",
                      marginBottom: "22px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontSize: "1.8rem",
                        fontWeight: 800,
                        color: "#facc15",
                      }}
                    >
                      {c.metric}
                    </div>
                    <div
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--text-secondary)",
                        fontFamily: "var(--font-space)",
                        marginTop: "4px",
                      }}
                    >
                      {c.metricLabel}
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: "26px",
                      fontFamily: "var(--font-space)",
                    }}
                  >
                    {c.desc}
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {c.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        padding: "4px 9px",
                        borderRadius: "6px",
                        background: "rgba(234, 179, 8, 0.06)",
                        border: "1px solid rgba(234, 179, 8, 0.15)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
