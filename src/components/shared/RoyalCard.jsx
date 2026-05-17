import React from "react";

const CSS = `
@keyframes royalCardPulse {
  0%, 100% { box-shadow: 0 6px 48px rgba(0,0,0,0.82), 0 0 0 1px rgba(212,160,48,0.06), inset 0 1px 0 rgba(212,160,48,0.28); }
  50%       { box-shadow: 0 6px 60px rgba(0,0,0,0.86), 0 0 32px rgba(200,130,20,0.14), inset 0 1px 0 rgba(212,160,48,0.40); }
}
`;

/**
 * Dark glass panel card — deep maroon glass, gold border, subtle inner glow.
 * Reads well over the bright golden temple backgrounds.
 */
export default function RoyalCard({ children, className = "", style = {}, delay = 0, hover = true }) {
  const base = {
    background: "linear-gradient(150deg, rgba(22,4,6,0.92) 0%, rgba(12,2,4,0.94) 48%, rgba(5,0,2,0.96) 100%)",
    border: "1px solid rgba(212,160,48,0.45)",
    borderRadius: "16px",
    padding: "22px",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    position: "relative",
    overflow: "hidden",
    animation: "royalCardPulse 6s ease-in-out infinite",
    animationDelay: `${delay}s`,
    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
    ...style,
  };

  const handleEnter = hover ? (e) => {
    e.currentTarget.style.borderColor = "rgba(212,160,48,0.72)";
    e.currentTarget.style.boxShadow = "0 10px 65px rgba(0,0,0,0.88), 0 0 40px rgba(212,140,30,0.18), inset 0 1px 0 rgba(212,160,48,0.45)";
  } : undefined;

  const handleLeave = hover ? (e) => {
    e.currentTarget.style.borderColor = "rgba(212,160,48,0.45)";
    e.currentTarget.style.boxShadow = "";
  } : undefined;

  return (
    <>
      <style>{CSS}</style>
      <div className={className} style={base} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {/* Top gold shimmer line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(to right, transparent, rgba(255,225,90,0.85), transparent)",
        }} />
        {/* Subtle inner glow at top */}
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: "75%", height: "60px",
          background: "radial-gradient(ellipse, rgba(220,145,30,0.16) 0%, transparent 75%)",
          filter: "blur(14px)", pointerEvents: "none",
        }} />
        <div style={{ position: "relative" }}>
          {children}
        </div>
      </div>
    </>
  );
}