"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";

export default function BackgroundNebula3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 22000 : 45000;
  const pointsRef = useRef<THREE.Points | null>(null);
  const originalPositionsRef = useRef<Float32Array | null>(null);
  const shockwaveRef = useRef<{ radius: number; speed: number; intensity: number }>({
    radius: 0,
    speed: 0,
    intensity: 0,
  });

  // Position builder for pure white 3D vortex
  const buildPositions = useCallback(() => {
    const count = particleCount;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Logarithmic celestial vortex
      const r = Math.pow(Math.random(), 0.52) * 7.2;
      const theta = Math.random() * Math.PI * 2;
      const spiral = r * 0.85;
      const spread = (Math.random() - 0.5) * (0.85 + r * 0.35);

      const x = Math.cos(theta + spiral) * r + (Math.random() - 0.5) * 0.45;
      const z = Math.sin(theta + spiral) * r + (Math.random() - 0.5) * 0.45;
      const y = (Math.random() - 0.5) * (2.4 * Math.exp(-r * 0.22)) + spread * 0.55;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      // Luminous star colors with luxury gold & champagne starlight touches
      const rRatio = Math.min(r / 6.0, 1.0);
      const isGoldStar = Math.random() < 0.42; // 42% of stars infused with rich gold & warm champagne light

      if (rRatio < 0.25) {
        // Blazing core: pure diamond white with imperial gold corona
        if (isGoldStar) {
          colors[i3] = 1.0;
          colors[i3 + 1] = 0.95;
          colors[i3 + 2] = 0.68;
        } else {
          colors[i3] = 1.0;
          colors[i3 + 1] = 1.0;
          colors[i3 + 2] = 1.0;
        }
      } else if (rRatio < 0.6) {
        // Luminous platinum & warm metallic gold streaks
        if (isGoldStar) {
          colors[i3] = 0.98;
          colors[i3 + 1] = 0.78;
          colors[i3 + 2] = 0.22;
        } else {
          const lum = 0.92 + Math.random() * 0.08;
          colors[i3] = lum;
          colors[i3 + 1] = lum;
          colors[i3 + 2] = lum;
        }
      } else {
        // Outer arms: subtle silver-white dust and soft warm amber gold
        if (isGoldStar) {
          colors[i3] = 0.90;
          colors[i3 + 1] = 0.68;
          colors[i3 + 2] = 0.16;
        } else {
          const lum = 0.75 + Math.random() * 0.25;
          colors[i3] = lum;
          colors[i3 + 1] = lum;
          colors[i3 + 2] = lum;
        }
      }
    }

    return { positions, colors };
  }, [particleCount]);

  // Three.js Mount & Animation Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMobile = window.innerWidth < 768;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      isMobile ? 56 : 50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, isMobile ? 1.3 : 1.6, isMobile ? 9.2 : 7.8);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !isMobile,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 1.75));

    // Pure White Circular Gaussian Point Sprite
    const createCircleTexture = () => {
      const size = 64;
      const cvs = document.createElement("canvas");
      cvs.width = size;
      cvs.height = size;
      const ctx = cvs.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1.0)");
        gradient.addColorStop(0.25, "rgba(254, 240, 138, 0.9)");
        gradient.addColorStop(0.65, "rgba(234, 179, 8, 0.35)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, size, size);
      }
      return new THREE.CanvasTexture(cvs);
    };

    const particleTexture = createCircleTexture();
    const { positions, colors } = buildPositions();
    originalPositionsRef.current = new Float32Array(positions);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.065 : 0.055,
      map: particleTexture,
      transparent: true,
      opacity: 0.95,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    pointsRef.current = points;

    // POINTER & SCROLL & TOUCH INTERACTION
    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0.25;
    let targetRotY = 0;
    let currentScroll = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        mouseX = (e.touches[0].clientX / window.innerWidth - 0.5) * 2;
        mouseY = -(e.touches[0].clientY / window.innerHeight - 0.5) * 2;
      }
    };

    const handleScroll = () => {
      currentScroll = window.scrollY;
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("a") || target.closest("input") || target.closest("textarea") || target.closest("select")) {
        return;
      }
      shockwaveRef.current = {
        radius: 0.1,
        speed: 5.5,
        intensity: 0.9,
      };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("click", handleGlobalClick);

    // ANIMATION LOOP
    let animId: number;
    let lastTime = performance.now();

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        lastTime = performance.now();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const animate = (time: number) => {
      animId = requestAnimationFrame(animate);

      // Clamp delta time to maximum 0.05s to prevent massive rotational acceleration after switching tabs
      const rawDt = (time - lastTime) * 0.001;
      const dt = rawDt > 0.05 || rawDt < 0 ? 0.016 : rawDt;
      lastTime = time;

      // Natural scroll-driven rotation and depth shift
      const scrollRatio = currentScroll * 0.0012;

      targetRotY += 0.2 * dt;
      points.rotation.y += (targetRotY + mouseX * 0.35 + scrollRatio * 0.6 - points.rotation.y) * 0.05;
      points.rotation.x += (targetRotX - mouseY * 0.35 + Math.sin(scrollRatio * 0.8) * 0.25 - points.rotation.x) * 0.05;

      // Subtle camera depth shift on scroll
      camera.position.z = (window.innerWidth < 768 ? 9.2 : 7.8) - Math.sin(scrollRatio * 0.4) * 0.8;
      camera.position.y = (window.innerWidth < 768 ? 1.3 : 1.6) - Math.cos(scrollRatio * 0.4) * 0.3;

      // Wave & Radial Shockwave
      const posAttr = geometry.attributes.position;
      const posArray = posAttr.array as Float32Array;
      const orig = originalPositionsRef.current;
      const count = positions.length / 3;

      const sw = shockwaveRef.current;
      if (sw.intensity > 0.01) {
        sw.radius += sw.speed * dt;
        sw.intensity *= 0.94;
      }

      const t = time * 0.001;

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        if (!orig) break;

        const ox = orig[i3];
        const oy = orig[i3 + 1];
        const oz = orig[i3 + 2];

        // Harmonic organic flow
        const waveX = Math.sin(oz * 1.1 + t) * 0.12;
        const waveY = Math.cos(ox * 1.1 + t * 0.85) * 0.14;
        const waveZ = Math.sin(oy * 1.3 + t * 1.05) * 0.12;

        let px = ox + waveX;
        let py = oy + waveY;
        let pz = oz + waveZ;

        // Shockwave displacement
        if (sw.intensity > 0.02) {
          const d = Math.sqrt(px * px + py * py + pz * pz);
          const diff = d - sw.radius;
          if (Math.abs(diff) < 0.7) {
            const push = (1 - Math.abs(diff) / 0.7) * sw.intensity * 0.9;
            px += (px / (d + 0.01)) * push;
            py += (py / (d + 0.01)) * push;
            pz += (pz / (d + 0.01)) * push;
          }
        }

        posArray[i3] = px;
        posArray[i3 + 1] = py;
        posArray[i3 + 2] = pz;
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      camera.fov = mobile ? 56 : 50;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleGlobalClick);
      renderer.dispose();
      particleTexture.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [buildPositions]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 50% 30%, #120e06 0%, #090703 50%, #030303 100%)",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
