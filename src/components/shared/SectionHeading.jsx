import React from "react";
import HeroStage from "@/components/shared/HeroStage";

const CSS = `
@keyframes dividerShimmer {
  0%   { background-position: -300% center; }
  100% { background-position: 300% center; }
}
@keyframes diamondPulse {
  0%, 100% { box-shadow: 0 0 8px 2px rgba(255,216,77,0.55); }
  50%       { box-shadow: 0 0 20px 7px rgba(255,216,77,0.85); }
}
`;

export default function SectionHeading({ title, subtitle, className = "" }) {
  return (
    <div className={`text-center mb-14 ${className}`}>
      <style>{CSS}</style>

      <HeroStage>
        {/* KMM Logo Emblem */}
        <div className="relative inline-block mb-5">
          <div className="absolute inset-0 blur-2xl bg-primary/20 scale-150 rounded-full" />
          <img
            src="https://media.base44.com/images/public/6a088d4305ad1c2a40626604/5c6ab99e4_KMM-logo-circle-transparent.png"
            alt="Kingdom Mandate Ministry"
            style={{
              width: "clamp(70px, 14vw, 100px)",
              height: "clamp(70px, 14vw, 100px)",
              objectFit: "contain",
              filter: "drop-shadow(0 0 20px rgba(212,160,48,0.65)) drop-shadow(0 4px 10px rgba(0,0,0,0.60))",
              position: "relative",
            }}
          />
        </div>

        <h2
          className="font-heading font-bold tracking-wide"
          style={{
            fontSize: "clamp(1.9rem, 5vw, 3.4rem)",
            lineHeight: 1.15,
            color: "#FFD84D",
            WebkitTextFillColor: "#FFD84D",
            WebkitTextStroke: "0px",
            textShadow: `
              0 2px 4px rgba(0,0,0,0.90),
              0 4px 12px rgba(0,0,0,0.70),
              0 0 16px rgba(255,216,77,0.45)
            `,
          }}
        >
          {title}
        </h2>

        {subtitle && (
          <p
            className="font-body text-sm sm:text-base leading-relaxed italic mt-4"
            style={{
              fontWeight: 600,
              color: "#FFF6D6",
              textShadow: `
                0 2px 4px rgba(0,0,0,0.95),
                0 4px 10px rgba(0,0,0,0.85)
              `,
            }}
          >
            {subtitle}
          </p>
        )}

        {/* Royal animated gold divider */}
        <div style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
          <div style={{ width: "50px", height: "1px", background: "linear-gradient(to right, transparent, rgba(255,216,77,0.65))" }} />
          <div style={{
            width: "6px", height: "6px", background: "#FFD84D",
            transform: "rotate(45deg)", borderRadius: "1px",
            animation: "diamondPulse 4s ease-in-out infinite", animationDelay: "0.5s",
          }} />
          <div style={{
            width: "110px", height: "2px", borderRadius: "2px",
            backgroundImage: "linear-gradient(90deg, rgba(255,216,77,0.4) 0%, #FFD84D 45%, #FFF4B0 50%, #FFD84D 55%, rgba(255,216,77,0.4) 100%)",
            backgroundSize: "300% 100%",
            animation: "dividerShimmer 3s linear infinite",
            boxShadow: "0 0 12px rgba(255,216,77,0.65)",
          }} />
          <div style={{
            width: "10px", height: "10px",
            background: "linear-gradient(135deg, #FFF4B0, #FFD84D)",
            transform: "rotate(45deg)", borderRadius: "2px",
            animation: "diamondPulse 3s ease-in-out infinite",
            boxShadow: "0 0 20px 6px rgba(255,216,77,0.72)",
          }} />
          <div style={{
            width: "110px", height: "2px", borderRadius: "2px",
            backgroundImage: "linear-gradient(90deg, rgba(255,216,77,0.4) 0%, #FFD84D 45%, #FFF4B0 50%, #FFD84D 55%, rgba(255,216,77,0.4) 100%)",
            backgroundSize: "300% 100%",
            animation: "dividerShimmer 3s linear infinite", animationDelay: "1.5s",
            boxShadow: "0 0 12px rgba(255,216,77,0.65)",
          }} />
          <div style={{
            width: "6px", height: "6px", background: "#FFD84D",
            transform: "rotate(45deg)", borderRadius: "1px",
            animation: "diamondPulse 4s ease-in-out infinite", animationDelay: "1s",
          }} />
          <div style={{ width: "50px", height: "1px", background: "linear-gradient(to left, transparent, rgba(255,216,77,0.65))" }} />
        </div>
      </HeroStage>
    </div>
  );
}