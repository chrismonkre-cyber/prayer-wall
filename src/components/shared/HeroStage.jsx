import React from "react";

/**
 * Soft dark royal glass stage behind hero text.
 * No hard box — feathered radial dark panel with faint gold edge glow.
 */
export default function HeroStage({ children }) {
  return (
    <div
      style={{
        position: "relative",
        maxWidth: "820px",
        margin: "0 auto",
        borderRadius: "36px",
        padding: "36px 28px",
      }}
    >
      {/* Dark radial glass backing */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "36px",
          background: `radial-gradient(
            ellipse at center,
            rgba(5,0,0,0.74) 0%,
            rgba(18,0,0,0.58) 42%,
            rgba(18,0,0,0.24) 70%,
            rgba(18,0,0,0) 100%
          )`,
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          pointerEvents: "none",
        }}
      />
      {/* Faint gold edge shimmer — very subtle */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "36px",
          boxShadow: "inset 0 0 60px rgba(255,200,60,0.06), 0 0 80px rgba(0,0,0,0.30)",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}