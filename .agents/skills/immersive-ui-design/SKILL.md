---
name: immersive-ui-design
description: Build authentic, bespoke web interfaces that look like the work of a senior art director and design engineer, completely avoiding predictable AI layout tropes (AI slop).
---

# Immersive UI Design

Build authentic, bespoke web interfaces that look like the work of a senior art director and design engineer, completely avoiding predictable AI layout tropes ("AI slop").

## When to Use

- Designing or coding a new website, landing page, portfolio, or web application interface
- Refactoring an existing UI that feels generic, templated, or AI-generated
- Creating specifications, wireframes, or production code (Next.js, React, Tailwind CSS, Framer Motion, Three.js/WebGL) for high-impact digital experiences
- Auditing UX flows for visual hierarchy, typography, and micro-interactions

## Step 1: Commit to an Aesthetic Archetype

Never default to the standard "modern dark SaaS" template. Before writing code or specs, select or synthesize one clear aesthetic direction that matches the brand:

- **Editorial / Swiss Grid:** Exposed 1px hairlines (`border-neutral-200` or `border-white/10`), visible column structures, high-contrast serif headlines paired with crisp grotesque body text, asymmetric whitespace, and zero drop shadows.
- **Kinetic Neo-Brutalism:** Raw structural honesty, high-contrast palettes (off-white `#F4F1EA`, stark black `#0D0D0D`, single industrial accent like safety orange `#FF4F00` or acid lime), bold monospace metadata, and snappy mechanical hover states.
- **Tactile Spatial / Hardware:** Inspired by Teenage Engineering and Braun. Matte surfaces, subtle inner borders (`shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`), skeuomorphic micro-details, tabular numbers, and physical-feeling button depression states.
- **Immersive WebGL / Atmospheric Cinema:** Deep tonal backgrounds, scroll-driven storytelling, subtle SVG noise grain overlay, choreographed text reveals, and interactive canvas/3D focal points that respond to cursor velocity or scroll depth.

## Step 2: Eliminate AI UI Slop (The Anti-Slop Ban List)

Audit your design against these overused AI patterns and replace them immediately:

1. **Ban the Purple-to-Blue/Cyan Gradient:** Never use `bg-gradient-to-r from-purple-500 to-indigo-600` or neon glowing blobs behind dark cards. Use solid intentional tones, subtle radial surface lighting, or authentic photography/shaders.
2. **Ban the Generic 3-Column Lucide Icon Row:** Do not build a "Features" section consisting of three identical rounded cards, each with a glowing icon badge at the top, a two-word bold title, and two lines of muted gray text. Replace with an asymmetric Bento grid where each cell has a bespoke interactive preview, typographic stat, or live micro-UI demonstration.
3. **Ban Centered Hero Soup:** Avoid the predictable stack of: `[Pill Badge with Sparkle Icon] -> [Centered Gradient Title] -> [2-line Muted Subtitle] -> [Two Centered Buttons] -> [Tilted Dashboard Mockup]`. Instead, use asymmetric split layouts, oversized editorial typography anchored to the bottom-left, or interactive canvas elements that engage the user immediately.
4. **Ban Pure `#000000` and `#FFFFFF` Extremes:** Pure black flattens depth; pure white glares. Use tinted darks (`#0A0A0C`, `#111110`, `#0D1117`) and warm or cool papers (`#FAF8F5`, `#F3F4F6`, `#EFECE6`).
5. **Ban Fake Social Proof & AI Copy:** Never write "Trusted by 10,000+ innovators", "Unleash the power of...", "Seamless integration", or "Elevate your workflow". Write sharp, concrete, domain-specific copy that explains the exact mechanism or value proposition.

## Step 3: Execute Studio-Grade Visual Craft

### Typography & Hierarchy

- **Contrast in Pairing:** Pair a characterful display font (e.g., `Syne`, `Playfair Display`, `Cabinet Grotesk`, `Space Grotesk`) with a neutral workhorse sans (`Inter`, `Plus Jakarta Sans`, `Geist`) and a technical monospace (`JetBrains Mono`, `Geist Mono`) for indices, timestamps, and tags.
- **Fluid Scale & Tight Tracking:** Use `clamp()` for display headers (e.g., `text-[clamp(2.75rem,6vw,5.5rem)]`) with tight leading (`leading-[0.95]` to `leading-[1.05]`) and negative letter-spacing (`tracking-[-0.03em]`).
- **Micro-Typography:** Use `tabular-nums` for all counters, prices, and coordinates. Add index numbers (`01 / 04`) in small monospace caps (`text-xs uppercase tracking-[0.15em]`) to anchor sections.

### Layout, Surfaces & Depth

- **Asymmetric Rhythm:** Break monotony by alternating layout densities: follow a dense multi-column technical specification grid with a full-viewport typographic statement or interactive showcase.
- **1px Structural Borders:** Prefer crisp 1px borders (`border-white/[0.08]` on dark, `border-black/[0.08]` on light) and shared hairline grids (`divide-x divide-y`) over heavy drop shadows (`shadow-xl`).
- **Tactile Surface Lighting:** When cards need elevation, simulate top-down studio lighting: combine a slightly lighter surface fill with a 1px top highlight (`border-t border-white/15`) and a subtle ambient shadow.
- **Atmospheric Texture:** Add a subtle fixed SVG noise overlay (`opacity-[0.025]` to `opacity-[0.04]`, `pointer-events-none`) to eliminate digital flatness and color banding.

### Choreographed Motion & Interactivity

- **Physics Over Linear Easing:** Never use plain `ease-in-out` for signature movements. Use custom cubic-beziers (`cubic-bezier(0.22, 1, 0.36, 1)` for snappy deceleration, `cubic-bezier(0.16, 1, 0.3, 1)` for dramatic reveals) or spring physics in Framer Motion (`stiffness: 300, damping: 28`).
- **Purposeful Micro-Interactions:** Every interactive element needs a distinct hover, focus, and active state. Use directional arrow shifts (`group-hover:translate-x-1 group-hover:-translate-y-1`), subtle label swaps, magnetic button pulls, or border illumination.
- **Scroll & Spatial Storytelling:** Stagger reveal animations by 50-80ms per item. Keep entrance animations subtle (`translateY(16px)` to `0`, `opacity: 0` to `1`) so the interface feels responsive, never sluggish.
