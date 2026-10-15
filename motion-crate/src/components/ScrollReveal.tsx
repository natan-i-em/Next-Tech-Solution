"use client";

import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
  style = {},
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Triggers in when entering viewport, and out when leaving viewport!
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: isMobile ? 0.05 : 0.15,
        rootMargin: isMobile ? "0px 0px -15px 0px" : "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const effectiveDelay = isMobile ? Math.min(delay, 80) : delay;

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? "revealed" : ""} ${className}`}
      style={{
        ...style,
        transitionDelay: isVisible ? `${effectiveDelay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
