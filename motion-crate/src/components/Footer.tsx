"use client";

import React from "react";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(234, 179, 8, 0.15)",
        padding: "50px 18px 32px 18px",
        background: "rgba(4, 4, 6, 0.95)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        position: "relative",
        zIndex: 10,
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1380px",
          margin: "0 auto",
        }}
      >
        <div className="footer-grid">
          {/* Brand & Overview */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "6px",
                  background: "linear-gradient(135deg, #fef08a 0%, #eab308 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0c0a02",
                  fontWeight: 900,
                  fontSize: "0.9rem",
                  boxShadow: "0 2px 10px rgba(234, 179, 8, 0.35)",
                }}
              >
                N
              </div>
              <span
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "1.2rem",
                  fontWeight: 800,
                  color: "#ffffff",
                }}
              >
                NEXT-TECH SOLUTION
              </span>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "20px" }}>
              A cutting-edge technology developer delivering premier digital solutions for every B2B and B2C service.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 12px",
                borderRadius: "999px",
                background: "rgba(234, 179, 8, 0.08)",
                border: "1px solid rgba(234, 179, 8, 0.28)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "#fef08a",
              }}
            >
              <span style={{ width: "6px", height: "6px" }} />
              ACTIVE DIGITAL PARTNER // B2B & B2C
            </div>
          </div>

          {/* Core Services */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "#facc15", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
              Our Services
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.86rem", color: "var(--text-secondary)" }}>
              <li><a href="#services" style={{ textDecoration: "none", color: "inherit", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fef08a")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>Static, Dynamic & 3D Websites</a></li>
              <li><a href="#services" style={{ textDecoration: "none", color: "inherit", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fef08a")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>System Development & Dashboards</a></li>
              <li><a href="#services" style={{ textDecoration: "none", color: "inherit", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fef08a")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>Mobile App Development</a></li>
              <li><a href="#services" style={{ textDecoration: "none", color: "inherit", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fef08a")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>Full Branding Service</a></li>
              <li><a href="#services" style={{ textDecoration: "none", color: "inherit", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fef08a")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}>NFC Cards & Landing Pages</a></li>
            </ul>
          </div>

          {/* Previous Work / Portfolio */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "#facc15", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
              Previous Work
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.86rem", color: "var(--text-secondary)" }}>
              <li>
                <div style={{ color: "#ffffff", fontWeight: 600 }}>Balegariw Tow Truck Company</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Website & Full Branding Service</div>
              </li>
              <li>
                <div style={{ color: "#ffffff", fontWeight: 600 }}>Real Cars Rental Fleets</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Admin Fleet Dashboard & Telegram Bot</div>
              </li>
              <li>
                <div style={{ color: "#ffffff", fontWeight: 600 }}>BirrFlow Platform</div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Mobile App & Waitlist Landing Page</div>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "#facc15", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
              Contact Direct
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.86rem" }}>
              <a
                href="tel:0931418513"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#facc15",
                  textDecoration: "none",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                }}
              >
                <Phone size={15} /> 0931418513
              </a>

              <a
                href="mailto:nexttechsolution491@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  wordBreak: "break-all",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fef08a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                <Mail size={15} /> nexttechsolution491@gmail.com
              </a>

              <a
                href="#contact"
                className="btn-glass-primary"
                style={{
                  marginTop: "8px",
                  padding: "8px 16px",
                  fontSize: "0.8rem",
                  width: "fit-content",
                }}
              >
                Start A Project <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <div>
            © 2026 NEXT-TECH SOLUTION. ALL RIGHTS RESERVED.
          </div>
          <div style={{ color: "#facc15" }}>
            LUXURY 3D DIGITAL SOLUTIONS // B2B & B2C ARCHITECTURE
          </div>
        </div>
      </div>
    </footer>
  );
}
