import React from "react";

const LION_IMAGE = "https://media.base44.com/images/public/6a088d4305ad1c2a40626604/f92e6d05c_generated_image.png";

/**
 * Reusable majestic lion background.
 * intensity: "hero" | "subtle" | "faint"
 *
 * hero   → Home page  : lion most visible, cinematic, bright
 * subtle → Prayer Wall : softer, more faded atmosphere
 * faint  → Encouragement / forms : warmest, most subdued
 */
export default function MajesticBackground({ intensity = "subtle" }) {

  // Per-intensity image filter: hero is brightest, faint is darkest
  const imgFilter = {
    hero:   "saturate(0.85) brightness(0.75)",
    subtle: "saturate(0.6)  brightness(0.45)",
    faint:  "saturate(0.5)  brightness(0.35)",
  }[intensity];

  // Primary dark color-wash overlay
  const overlayClass = {
    hero:   "bg-[#060000]/30",   // light — let the lion show
    subtle: "bg-[#060000]/55",   // medium
    faint:  "bg-[#060000]/65",   // heavier
  }[intensity];

  // Top gradient (helps heading readability on hero, heavier on others)
  const topGradientClass = {
    hero:   "from-[#060000]/55",
    subtle: "from-[#060000]/70",
    faint:  "from-[#060000]/75",
  }[intensity];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Lion image */}
      <img
        src={LION_IMAGE}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-[center_20%] sm:object-center"
        style={{ filter: imgFilter }}
      />

      {/* Primary dark overlay */}
      <div className={`absolute inset-0 ${overlayClass}`} />

      {/* Top gradient for heading readability */}
      <div className={`absolute top-0 left-0 right-0 h-56 bg-gradient-to-b ${topGradientClass} to-transparent`} />

      {/* Bottom fade to background color */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Side vignettes */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#060000]/50 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#060000]/50 to-transparent" />

      {/* Gold glory glow — larger and stronger on hero */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full blur-[100px]"
        style={{
          width: intensity === "hero" ? "min(800px, 95vw)" : "min(600px, 90vw)",
          height: intensity === "hero" ? "350px" : "250px",
          background: intensity === "hero"
            ? "rgba(212,160,48,0.14)"
            : intensity === "subtle"
              ? "rgba(212,160,48,0.07)"
              : "rgba(212,160,48,0.09)",
        }}
      />

      {/* Hero-only: cinematic light rays */}
      {intensity === "hero" && (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[55%] bg-gradient-to-b from-[#d4a030]/25 to-transparent blur-[2px]" />
          <div className="absolute top-0 left-[45%] w-[1px] h-[38%] bg-gradient-to-b from-[#d4a030]/14 to-transparent blur-[2px] rotate-6" />
          <div className="absolute top-0 left-[55%] w-[1px] h-[38%] bg-gradient-to-b from-[#d4a030]/14 to-transparent blur-[2px] -rotate-6" />
        </>
      )}

      {/* Faint-only: warm amber center glow for comforting feel */}
      {intensity === "faint" && (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[min(500px,80vw)] h-48 bg-[#b8600a]/8 rounded-full blur-[80px]" />
      )}

      {/* Maroon warmth glows on sides */}
      <div className="absolute top-1/3 -left-16 w-48 h-48 bg-[#3a0a0a]/40 rounded-full blur-[70px]" />
      <div className="absolute top-1/3 -right-16 w-48 h-48 bg-[#3a0a0a]/35 rounded-full blur-[70px]" />
    </div>
  );
}