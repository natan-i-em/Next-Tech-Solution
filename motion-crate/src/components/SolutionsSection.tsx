"use client";

import React from "react";
import {
  Globe,
  LayoutDashboard,
  Smartphone,
  Palette,
  Wifi,
  Sparkles,
  Check
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function SolutionsSection() {
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "36px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>

            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 3.2rem)",
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                lineHeight: 1.05,
                color: "#ffffff",
              }}
            >
              Comprehensive <span className="text-shimmer">Digital Capabilities</span>
            </h2>
          </div>

          <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.76rem", color: "var(--text-secondary)" }}>
            END-TO-END B2B & B2C SOLUTIONS
          </div>
        </div>
      </ScrollReveal>

      {/* Bento Grid with All 5 Services */}
      <div className="bento-grid">
        {/* SERVICE 1: Static, Dynamic & 3D Website Development (Span 7 cols on desktop) */}
        <div className="bento-col-7">
          <ScrollReveal delay={50}>
            <div
              className="glass-panel card-pad"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "340px",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span className="chapter-index">SERVICE 01</span>
                  </div>
                  <span className="badge-gold">
                    STATIC, DYNAMIC & 3D
                  </span>
                </div>

                <h3 style={{ fontSize: "clamp(1.35rem, 4vw, 1.65rem)", fontWeight: 700, marginBottom: "12px", fontFamily: "var(--font-syne)", color: "#ffffff" }}>
                  Website Development
                </h3>
                <p style={{ fontSize: "0.94rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "24px" }}>
                  From lightning-fast static presentation websites to dynamic web platforms and immersive 3D interactive experiences powered by WebGL & Next.js. We build custom web presences that stand out and convert.
                </p>
              </div>

              <div
                className="metrics-3col"
                style={{
                  background: "rgba(12, 10, 5, 0.65)",
                  border: "1px solid rgba(234, 179, 8, 0.15)",
                  borderRadius: "10px",
                  padding: "16px",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.68rem" }}>EXPERIENCE</div>
                  <div style={{ color: "#facc15", fontWeight: 700, marginTop: "4px", fontSize: "0.92rem" }}>Interactive 3D</div>
                </div>
                <div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.68rem" }}>FRAMEWORKS</div>
                  <div style={{ color: "#ffffff", fontWeight: 700, marginTop: "4px", fontSize: "0.92rem" }}>Next.js & React</div>
                </div>
                <div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.68rem" }}>PERFORMANCE</div>
                  <div style={{ color: "#ffffff", fontWeight: 700, marginTop: "4px", fontSize: "0.92rem" }}>100% Responsive</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* SERVICE 2: System Development (Span 5 cols on desktop) */}
        <div className="bento-col-5">
          <ScrollReveal delay={120}>
            <div
              className="glass-panel card-pad"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "340px",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span className="chapter-index">SERVICE 02</span>
                  </div>
                  <span className="badge-gold">
                    ENTERPRISE SYSTEMS
                  </span>
                </div>

                <h3 style={{ fontSize: "clamp(1.35rem, 4vw, 1.65rem)", fontWeight: 700, marginBottom: "12px", fontFamily: "var(--font-syne)", color: "#ffffff" }}>
                  System Development
                </h3>
                <p style={{ fontSize: "0.94rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "24px" }}>
                  Tailored management systems, custom admin dashboards, automated workflows, and database engines. We have built real-time fleet management dashboards and automated Telegram bot registration systems for rental businesses.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(12, 10, 5, 0.65)",
                  border: "1px solid rgba(234, 179, 8, 0.15)",
                  borderRadius: "10px",
                  padding: "16px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                }}
              >
                <div><span style={{ color: "#facc15" }}>✓</span> Admin Dashboards & Fleet Logistics</div>
                <div><span style={{ color: "#facc15" }}>✓</span> Automated Telegram Registration Bots</div>
                <div><span style={{ color: "#facc15" }}>✓</span> Real-Time Analytics & User Controls</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* SERVICE 3: Mobile App Development (Span 5 cols on desktop) */}
        <div className="bento-col-5">
          <ScrollReveal delay={180}>
            <div
              className="glass-panel card-pad"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "340px",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span className="chapter-index">SERVICE 03</span>
                  </div>
                  <span className="badge-gold">
                    IOS & ANDROID
                  </span>
                </div>

                <h3 style={{ fontSize: "clamp(1.35rem, 4vw, 1.65rem)", fontWeight: 700, marginBottom: "12px", fontFamily: "var(--font-syne)", color: "#ffffff" }}>
                  Mobile App Development
                </h3>
                <p style={{ fontSize: "0.94rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "24px" }}>
                  High-performance mobile applications engineered for seamless user experience, intuitive flows, and bank-grade security. Currently architecting the BirrFlow app ecosystem for high-velocity transaction workflows.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.74rem",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: "1 1 120px", padding: "10px", background: "rgba(12, 10, 5, 0.65)", borderRadius: "8px", border: "1px solid rgba(234, 179, 8, 0.15)", textAlign: "center" }}>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.68rem" }}>CROSS-PLATFORM</div>
                  <div style={{ color: "#facc15", fontWeight: 700, marginTop: "2px" }}>iOS & Android</div>
                </div>
                <div style={{ flex: "1 1 120px", padding: "10px", background: "rgba(12, 10, 5, 0.65)", borderRadius: "8px", border: "1px solid rgba(234, 179, 8, 0.15)", textAlign: "center" }}>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.68rem" }}>ARCHITECTURE</div>
                  <div style={{ color: "#ffffff", fontWeight: 700, marginTop: "2px" }}>Fintech / Cloud</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* SERVICE 4: Full Branding Service (Span 7 cols on desktop) */}
        <div className="bento-col-7">
          <ScrollReveal delay={240}>
            <div
              className="glass-panel card-pad"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "340px",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <span className="chapter-index">SERVICE 04</span>
                  </div>
                  <span className="badge-gold">
                    COMPLETE IDENTITY
                  </span>
                </div>

                <h3 style={{ fontSize: "clamp(1.35rem, 4vw, 1.65rem)", fontWeight: 700, marginBottom: "12px", fontFamily: "var(--font-syne)", color: "#ffffff" }}>
                  Full Branding Service
                </h3>
                <p style={{ fontSize: "0.94rem", color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: "24px" }}>
                  Complete visual identity design that turns your company into an unmistakable market authority. From logos, color palettes, and typography guidelines to business cards, social media assets, and vehicle livery (as delivered for Balegariw Tow Truck Company).
                </p>
              </div>

              <div
                className="metrics-3col"
                style={{
                  background: "rgba(12, 10, 5, 0.65)",
                  border: "1px solid rgba(234, 179, 8, 0.15)",
                  borderRadius: "10px",
                  padding: "16px",
                  fontFamily: "var(--font-mono)",
                }}
              >
                <div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.68rem" }}>IDENTITY</div>
                  <div style={{ color: "#facc15", fontWeight: 700, marginTop: "2px", fontSize: "0.92rem" }}>Logo & Visuals</div>
                </div>
                <div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.68rem" }}>COLLATERAL</div>
                  <div style={{ color: "#ffffff", fontWeight: 700, marginTop: "2px", fontSize: "0.92rem" }}>Fleet & Print</div>
                </div>
                <div>
                  <div style={{ color: "var(--text-secondary)", fontSize: "0.68rem" }}>GUIDELINES</div>
                  <div style={{ color: "#ffffff", fontWeight: 700, marginTop: "2px", fontSize: "0.92rem" }}>Brand Book</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* SERVICE 5: NFC Card and Landing Page (Span 12 cols on desktop) */}
        <div className="bento-col-12">
          <ScrollReveal delay={300}>
            <div className="glass-panel card-pad service-5-card">
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "16px" }}>
                  <span className="chapter-index">SERVICE 05</span>
                  <span className="badge-gold">
                    SMART NETWORKING
                  </span>
                </div>

                <h3 style={{ fontSize: "clamp(1.4rem, 4vw, 1.8rem)", fontWeight: 700, marginBottom: "12px", fontFamily: "var(--font-syne)", color: "#ffffff" }}>
                  Smart NFC Cards & Custom Landing Pages
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  Upgrade your networking with physical contactless Smart NFC cards coupled with custom high-converting digital landing pages. A single tap on any smartphone instantly opens your digital portfolio, contact info, social links, and appointment bookings without any app required.
                </p>
              </div>

              <div className="nfc-twin-grid">
                <div style={{ padding: "18px", background: "rgba(12, 10, 5, 0.65)", borderRadius: "10px", border: "1px solid rgba(234, 179, 8, 0.15)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                    HARDWARE
                  </div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#facc15", fontFamily: "var(--font-syne)" }}>
                    Matte Black & Gold NFC
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                    Contactless chip technology
                  </div>
                </div>

                <div style={{ padding: "18px", background: "rgba(12, 10, 5, 0.65)", borderRadius: "10px", border: "1px solid rgba(234, 179, 8, 0.15)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
                    DIGITAL COMPANION
                  </div>
                  <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", fontFamily: "var(--font-syne)" }}>
                    Bespoke Landing Page
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                    Direct lead capture & portfolio
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
