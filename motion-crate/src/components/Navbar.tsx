"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Phone, Menu, X, Mail, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close the menu with the Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  const linkStyle: React.CSSProperties = {
    color: "var(--text-secondary)",
    fontSize: "0.88rem",
    textDecoration: "none",
    transition: "color 0.2s",
    fontFamily: "var(--font-space)",
    fontWeight: 500,
  };

  const links = [
    { href: "#services", label: "Services", num: "01" },
    { href: "#portfolio", label: "Previous Work", num: "02" },
    { href: "#contact", label: "Contact Us", num: "03" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: scrolled ? "12px 18px" : "18px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box",
          width: "100%",

          /* Glassmorphism */
          background: scrolled
            ? "rgba(255, 255, 255, 0.07)"
            : "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(234, 179, 8, 0.18)",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(254, 240, 138, 0.18)"
            : "inset 0 1px 0 rgba(254, 240, 138, 0.10)",
          transition: "all 0.3s ease",
        }}
      >
        {/* Brand */}
        <a
          href="#"
          onClick={closeMenu}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            color: "#f5f5f7",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #fef08a 0%, #eab308 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0c0a02",
              fontWeight: 900,
              fontSize: "0.95rem",
              boxShadow: "0 2px 14px rgba(234, 179, 8, 0.4)",
              flexShrink: 0,
            }}
          >
            N
          </div>
          <span
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(0.95rem, 3.5vw, 1.15rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              whiteSpace: "nowrap",
            }}
          >
            NEXT-TECH SOLUTION
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          className="desktop-nav"
          style={{ alignItems: "center", gap: "28px" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={linkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fef08a")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="desktop-cta" style={{ alignItems: "center", gap: "12px" }}>
          <a
            href="tel:0931418513"
            className="btn-glass-secondary"
            style={{ padding: "8px 16px", fontSize: "0.8rem", gap: "8px" }}
          >
            <Phone size={13} color="#facc15" />
            <span>0931418513</span>
          </a>

          <a
            href="#contact"
            className="btn-glass-primary"
            style={{ padding: "8px 18px", fontSize: "0.82rem" }}
          >
            Get In Touch <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile controls */}
        <div
          className="mobile-nav-toggle"
          style={{ alignItems: "center", gap: "8px" }}
        >
          <a
            href="tel:0931418513"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "10px",
              background: "rgba(234, 179, 8, 0.10)",
              border: "1px solid rgba(234, 179, 8, 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#facc15",
              textDecoration: "none",
            }}
            aria-label="Direct Phone Call"
          >
            <Phone size={16} />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: mobileMenuOpen
                ? "rgba(234, 179, 8, 0.2)"
                : "rgba(255, 255, 255, 0.06)",
              border: mobileMenuOpen
                ? "1px solid rgba(234, 179, 8, 0.6)"
                : "1px solid rgba(255, 255, 255, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: mobileMenuOpen ? "#fef08a" : "#ffffff",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            aria-label={mobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Backdrop Overlay */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer-content ${mobileMenuOpen ? "open" : ""}`}>
        {/* Drawer Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "12px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.10)",
          }}
        >
          <span className="chapter-index">NAVIGATION MENU</span>
          <button
            onClick={closeMenu}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-secondary)",
              cursor: "pointer",
            }}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              className="mobile-nav-link"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "#facc15",
                  }}
                >
                  {l.num}
                </span>
                <span>{l.label}</span>
              </div>
              <ChevronRight size={16} color="var(--text-secondary)" />
            </a>
          ))}
        </div>

        {/* Mobile Contact Card (glass) */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(16px) saturate(160%)",
            WebkitBackdropFilter: "blur(16px) saturate(160%)",
            border: "1px solid rgba(234, 179, 8, 0.22)",
            boxShadow: "inset 0 1px 0 rgba(254, 240, 138, 0.10)",
            borderRadius: "14px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              color: "#facc15",
              letterSpacing: "0.1em",
            }}
          >
            DIRECT INQUIRY & SUPPORT
          </div>

          <a
            href="tel:0931418513"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#ffffff",
              textDecoration: "none",
              fontFamily: "var(--font-mono)",
              fontSize: "0.95rem",
              fontWeight: 700,
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "rgba(234, 179, 8, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#facc15",
              }}
            >
              <Phone size={15} />
            </div>
            <span>0931418513</span>
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
              fontSize: "0.78rem",
              wordBreak: "break-all",
            }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                flexShrink: 0,
              }}
            >
              <Mail size={15} />
            </div>
            <span>nexttechsolution491@gmail.com</span>
          </a>
        </div>

        {/* Primary CTA */}
        <a
          href="#contact"
          onClick={closeMenu}
          className="btn-glass-primary"
          style={{
            width: "100%",
            padding: "16px",
            fontSize: "0.92rem",
            justifyContent: "center",
            boxSizing: "border-box",
          }}
        >
          Start A Project With Us <ArrowRight size={16} />
        </a>
      </div>
    </>
  );
}