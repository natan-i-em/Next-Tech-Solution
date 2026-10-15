"use client";

import React, { useState } from "react";
import { Check, Mail, Phone, ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Static, Dynamic & 3D Website Development",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || (!form.email && !form.phone)) return;
    setSubmitted(true);
  };

  return (
    <div
      style={{
        maxWidth: "1380px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <div className="contact-grid">
        {/* Left Column: Direct Contact & Information */}
        <ScrollReveal delay={0}>
          <div>
            <div style={{ marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
            </div>

            <h2
              style={{
                fontSize: "clamp(1.85rem, 5vw, 3.2rem)",
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
                marginBottom: "16px",
                color: "#ffffff",
              }}
            >
              Start Your Next Project <span className="text-shimmer">With Us.</span>
            </h2>

            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.98rem",
                lineHeight: 1.65,
                marginBottom: "32px",
                fontFamily: "var(--font-space)",
                maxWidth: "500px",
              }}
            >
              Have a project in mind, need custom software, or want to transform your company's digital presence?
              Reach out directly by phone, email, or send us your project requirements below.
            </p>

            {/* Direct Contact Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
              <a
                href="tel:0931418513"
                className="glass-panel"
                style={{
                  padding: "16px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  textDecoration: "none",
                  borderRadius: "12px",
                  borderTop: "1px solid rgba(234, 179, 8, 0.4)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(234, 179, 8, 0.12)",
                    border: "1px solid rgba(234, 179, 8, 0.28)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#facc15",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
                    DIRECT PHONE / CALL US
                  </div>
                  <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#facc15", fontFamily: "var(--font-mono)", marginTop: "2px" }}>
                    0931418513
                  </div>
                </div>
              </a>

              <a
                href="mailto:nexttechsolution491@gmail.com"
                className="glass-panel"
                style={{
                  padding: "16px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  textDecoration: "none",
                  borderRadius: "12px",
                  borderTop: "1px solid rgba(234, 179, 8, 0.4)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    background: "rgba(234, 179, 8, 0.12)",
                    border: "1px solid rgba(234, 179, 8, 0.28)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#facc15",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} />
                </div>
                <div style={{ overflow: "hidden" }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-secondary)", fontFamily: "var(--font-mono)" }}>
                    OFFICIAL INQUIRY EMAIL
                  </div>
                  <div style={{ fontSize: "clamp(0.82rem, 3.2vw, 1rem)", fontWeight: 600, color: "#ffffff", fontFamily: "var(--font-mono)", marginTop: "2px", wordBreak: "break-all" }}>
                    nexttechsolution491@gmail.com
                  </div>
                </div>
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-secondary)", fontSize: "0.9rem", fontFamily: "var(--font-mono)" }}>
              <span style={{ color: "#facc15" }}>Available for B2B and B2C partnerships worldwide</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Project Inquiry Form Card */}
        <ScrollReveal delay={120}>
          <div
            className="glass-panel card-pad"
            style={{
              borderTop: "1px solid rgba(234, 179, 8, 0.45)",
              boxShadow: "0 16px 40px -8px rgba(0, 0, 0, 0.6), 0 0 24px -4px rgba(234, 179, 8, 0.14)",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "rgba(234, 179, 8, 0.14)",
                    border: "1px solid rgba(234, 179, 8, 0.4)",
                    color: "#facc15",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px auto",
                  }}
                >
                  <Check size={28} />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "10px", fontFamily: "var(--font-syne)", color: "#ffffff" }}>
                  Message Received
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "16px" }}>
                  Thank you for reaching out to Next-Tech Solution. We will review your project details and get back to you shortly via email or phone.
                </p>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", color: "#facc15" }}>
                  For immediate assistance, please call: <strong>0931418513</strong>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "6px", fontFamily: "var(--font-mono)" }}>
                    YOUR NAME OR BUSINESS *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dawit Kebede or Real Cars Co."
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "8px",
                      color: "#ffffff",
                      outline: "none",
                      fontFamily: "var(--font-space)",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(234, 179, 8, 0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.12)")}
                  />
                </div>

                <div className="form-row-2">
                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "6px", fontFamily: "var(--font-mono)" }}>
                      EMAIL
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "8px",
                        color: "#ffffff",
                        fontSize: "0.88rem",
                        outline: "none",
                        fontFamily: "var(--font-space)",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(234, 179, 8, 0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.12)")}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "6px", fontFamily: "var(--font-mono)" }}>
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0931418513"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                        borderRadius: "8px",
                        color: "#ffffff",
                        fontSize: "0.88rem",
                        outline: "none",
                        fontFamily: "var(--font-space)",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "rgba(234, 179, 8, 0.5)")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.12)")}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "6px", fontFamily: "var(--font-mono)" }}>
                    SERVICE INTERESTED IN
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "#0a0805",
                      border: "1px solid rgba(234, 179, 8, 0.25)",
                      borderRadius: "8px",
                      color: "#ffffff",
                      fontSize: "0.88rem",
                      outline: "none",
                      fontFamily: "var(--font-space)",
                    }}
                  >
                    <option value="Static, Dynamic & 3D Website Development">1. Static, Dynamic & 3D Website Development</option>
                    <option value="System Development & Dashboards">2. System Development & Dashboards</option>
                    <option value="Mobile App Development">3. Mobile App Development</option>
                    <option value="Full Branding Service">4. Full Branding Service</option>
                    <option value="NFC Card & Landing Page">5. NFC Card & Custom Landing Page</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "6px", fontFamily: "var(--font-mono)" }}>
                    TELL US ABOUT YOUR PROJECT
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you'd like to build, timeline, or key requirements..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.04)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      borderRadius: "8px",
                      color: "#ffffff",
                      fontSize: "0.88rem",
                      outline: "none",
                      fontFamily: "var(--font-space)",
                      resize: "none",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(234, 179, 8, 0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(255, 255, 255, 0.12)")}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-glass-primary"
                  style={{ width: "100%", padding: "14px", marginTop: "8px" }}
                >
                  Send Project Inquiry <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
