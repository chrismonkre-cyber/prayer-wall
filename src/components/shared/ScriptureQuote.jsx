import React from "react";

const CSS = `
@keyframes scriptureGlow {
  0%, 100% { box-shadow: 0 0 50px rgba(212,160,48,0.16), inset 0 1px 0 rgba(212,160,48,0.28), 0 4px 40px rgba(0,0,0,0.65); }
  50%       { box-shadow: 0 0 70px rgba(212,160,48,0.26), inset 0 1px 0 rgba(212,160,48,0.40), 0 4px 50px rgba(0,0,0,0.70); }
}
`;

export default function ScriptureQuote({ text, reference }) {
  return (
    <div
      className="relative mx-auto max-w-3xl text-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #280a08 0%, #160304 50%, #0a0102 100%)",
        border: "1px solid rgba(212,160,48,0.45)",
        borderRadius: "18px",
        padding: "28px 32px",
        animation: "scriptureGlow 5s ease-in-out infinite",
        backdropFilter: "blur(14px)",
      }}
    >
      <style>{CSS}</style>

      {/* Top shimmer */}
      <div style={{
        position: "absolute", top: 0, left: "10%", right: "10%", height: "1px",
        background: "linear-gradient(to right, transparent, rgba(255,220,80,0.85), transparent)",
      }} />
      {/* Inner glory glow */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "70%", height: "100px",
        background: "radial-gradient(ellipse, rgba(220,150,30,0.16) 0%, rgba(180,60,10,0.07) 55%, transparent 78%)",
        filter: "blur(14px)", pointerEvents: "none",
      }} />
      {/* Left fire corner */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100px", height: "80px",
        background: "radial-gradient(ellipse at 0% 0%, rgba(180,50,10,0.25) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* Right fire corner */}
      <div style={{
        position: "absolute", top: 0, right: 0, width: "100px", height: "80px",
        background: "radial-gradient(ellipse at 100% 0%, rgba(180,50,10,0.25) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Big decorative quote mark */}
      <div style={{
        fontFamily: "Georgia, serif",
        fontSize: "72px",
        lineHeight: "32px",
        color: "rgba(212,160,48,0.40)",
        display: "block",
        userSelect: "none",
        textShadow: "0 0 20px rgba(212,160,48,0.30)",
        marginBottom: "10px",
      }}>"</div>

      <p className="relative font-body text-sm sm:text-base leading-relaxed italic"
        style={{ color: "rgba(240,210,150,0.92)", textShadow: "0 1px 8px rgba(0,0,0,0.50)" }}>
        {text}
      </p>

      <div style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        gap: "10px", margin: "14px 0 4px",
      }}>
        <div style={{ width: "40px", height: "1px", background: "linear-gradient(to right, transparent, rgba(212,160,48,0.55))" }} />
        <div style={{ width: "6px", height: "6px", background: "#d4a030", transform: "rotate(45deg)", boxShadow: "0 0 10px rgba(212,160,48,0.55)" }} />
        <div style={{ width: "40px", height: "1px", background: "linear-gradient(to left, transparent, rgba(212,160,48,0.55))" }} />
      </div>

      <p className="relative font-heading text-xs tracking-widest"
        style={{ color: "rgba(212,160,48,0.85)", textShadow: "0 0 12px rgba(212,160,48,0.45)" }}>
        — {reference}
      </p>

      {/* Bottom shimmer */}
      <div style={{
        position: "absolute", bottom: 0, left: "25%", right: "25%", height: "1px",
        background: "linear-gradient(to right, transparent, rgba(212,160,48,0.55), transparent)",
      }} />
    </div>
  );
}