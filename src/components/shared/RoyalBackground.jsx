import React from "react";

const LION_IMAGE = "https://media.base44.com/images/public/6a088d4305ad1c2a40626604/f92e6d05c_generated_image.png";

const CSS = `
@keyframes emberFloat {
  0%   { transform: translateY(0px) translateX(0px) scale(1);   opacity: var(--op); }
  33%  { transform: translateY(-18px) translateX(6px) scale(1.2); opacity: calc(var(--op) * 1.3); }
  66%  { transform: translateY(-32px) translateX(-4px) scale(0.9); opacity: calc(var(--op) * 0.7); }
  100% { transform: translateY(-50px) translateX(2px) scale(0.5); opacity: 0; }
}
@keyframes gloryPulse {
  0%, 100% { opacity: 0.55; }
  50%       { opacity: 0.90; }
}
@keyframes fireBreath {
  0%, 100% { transform: scaleX(1) scaleY(1); opacity: 0.60; }
  50%       { transform: scaleX(1.08) scaleY(1.12); opacity: 0.85; }
}
@keyframes shimmerSlide {
  0%   { backgroundPosition: -200% center; }
  100% { backgroundPosition: 200% center; }
}
`;

const embers = [
  { top: "8%",  left: "12%", s: 5, op: 0.75, dur: "4.2s", del: "0s"   },
  { top: "5%",  left: "68%", s: 4, op: 0.65, dur: "5.1s", del: "1.3s" },
  { top: "13%", left: "82%", s: 3, op: 0.55, dur: "3.8s", del: "0.7s" },
  { top: "18%", left: "29%", s: 4, op: 0.60, dur: "4.8s", del: "2.1s" },
  { top: "4%",  left: "50%", s: 5, op: 0.70, dur: "3.5s", del: "0.4s" },
  { top: "22%", left: "6%",  s: 3, op: 0.50, dur: "5.5s", del: "1.8s" },
  { top: "10%", left: "91%", s: 3, op: 0.45, dur: "4.0s", del: "2.8s" },
  { top: "30%", left: "75%", s: 3, op: 0.40, dur: "6.2s", del: "0.9s" },
  { top: "7%",  left: "40%", s: 3, op: 0.55, dur: "4.5s", del: "3.2s" },
  { top: "25%", left: "58%", s: 2, op: 0.45, dur: "5.8s", del: "1.5s" },
  { top: "35%", left: "18%", s: 3, op: 0.38, dur: "6.8s", del: "2.5s" },
  { top: "42%", left: "88%", s: 2, op: 0.32, dur: "7.0s", del: "0.2s" },
];

export default function RoyalBackground({ variant = "default" }) {
  const isWarm = variant === "warm";

  return (
    <>
      <style>{CSS}</style>
      <div className="fixed inset-0 overflow-hidden pointer-events-none select-none" style={{ zIndex: 0 }}>

        {/* 1. Black base */}
        <div className="absolute inset-0" style={{ background: "#050001" }} />

        {/* 2. Lion watermark — top right, 12% opacity */}
        <img
          src={LION_IMAGE}
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-6%",
            right: "-8%",
            width: "50%",
            maxWidth: "500px",
            objectFit: "cover",
            objectPosition: "center 22%",
            filter: "saturate(0.18) brightness(0.22) sepia(0.5)",
            opacity: 0.13,
            maskImage: "radial-gradient(ellipse 62% 65% at 78% 28%, black 8%, rgba(0,0,0,0.4) 48%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(ellipse 62% 65% at 78% 28%, black 8%, rgba(0,0,0,0.4) 48%, transparent 72%)",
          }}
        />

        {/* 3. Deep maroon top warmth */}
        <div className="absolute inset-0" style={{
          background: isWarm
            ? "radial-gradient(ellipse 120% 60% at 50% 0%, #3d0a08 0%, #1e0304 38%, transparent 68%)"
            : "radial-gradient(ellipse 110% 52% at 50% 0%, #300608 0%, #160203 38%, transparent 65%)",
        }} />

        {/* 4. LARGE central gold glory glow — the big wow */}
        <div style={{
          position: "absolute",
          top: "-80px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(950px, 105vw)",
          height: "500px",
          background: isWarm
            ? "radial-gradient(ellipse at 50% 15%, rgba(240,160,30,0.38) 0%, rgba(200,90,10,0.18) 35%, rgba(120,30,5,0.08) 60%, transparent 78%)"
            : "radial-gradient(ellipse at 50% 15%, rgba(220,160,40,0.32) 0%, rgba(170,70,8,0.14) 35%, rgba(100,25,4,0.06) 60%, transparent 78%)",
          filter: "blur(16px)",
          animation: "gloryPulse 5s ease-in-out infinite",
        }} />

        {/* 5. Secondary fire bloom — mid page */}
        <div style={{
          position: "absolute",
          top: "38%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(750px, 92vw)",
          height: "350px",
          background: isWarm
            ? "radial-gradient(ellipse, rgba(190,65,10,0.22) 0%, rgba(120,25,5,0.10) 45%, transparent 70%)"
            : "radial-gradient(ellipse, rgba(150,40,8,0.18) 0%, rgba(90,15,4,0.08) 45%, transparent 70%)",
          filter: "blur(45px)",
          animation: "fireBreath 7s ease-in-out infinite",
        }} />

        {/* 6. Left fire column */}
        <div style={{
          position: "absolute",
          top: "5%",
          left: "-60px",
          width: "340px",
          height: "420px",
          background: "radial-gradient(ellipse at 30% 30%, rgba(130,18,6,0.80) 0%, rgba(70,8,3,0.35) 50%, transparent 75%)",
          filter: "blur(60px)",
          borderRadius: "50%",
          animation: "fireBreath 6s ease-in-out infinite",
          animationDelay: "1s",
        }} />

        {/* 7. Right fire column */}
        <div style={{
          position: "absolute",
          top: "8%",
          right: "-50px",
          width: "300px",
          height: "380px",
          background: isWarm
            ? "radial-gradient(ellipse at 70% 30%, rgba(160,28,8,0.75) 0%, rgba(80,12,4,0.32) 50%, transparent 75%)"
            : "radial-gradient(ellipse at 70% 30%, rgba(110,16,6,0.70) 0%, rgba(60,8,3,0.28) 50%, transparent 75%)",
          filter: "blur(55px)",
          borderRadius: "50%",
          animation: "fireBreath 8s ease-in-out infinite",
          animationDelay: "2.5s",
        }} />

        {/* 8. Top-left amber accent */}
        <div style={{
          position: "absolute",
          top: "-30px",
          left: "4%",
          width: "240px",
          height: "240px",
          background: "radial-gradient(circle, rgba(200,120,20,0.28) 0%, rgba(150,60,8,0.12) 50%, transparent 72%)",
          filter: "blur(45px)",
          borderRadius: "50%",
          animation: "gloryPulse 6s ease-in-out infinite",
          animationDelay: "0.5s",
        }} />

        {/* 9. LIGHT RAYS — strong, bright, visible */}
        {/* Center ray */}
        <div style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "4px",
          height: "60%",
          background: "linear-gradient(to bottom, rgba(230,175,40,0.70) 0%, rgba(212,140,20,0.20) 55%, transparent 100%)",
          filter: "blur(3px)",
        }} />
        {/* Wide center soft ray */}
        <div style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60px",
          height: "45%",
          background: "linear-gradient(to bottom, rgba(212,160,48,0.22) 0%, transparent 100%)",
          filter: "blur(12px)",
        }} />
        {/* Left rays */}
        <div style={{
          position: "absolute", top: 0, left: "43%",
          width: "2.5px", height: "42%",
          background: "linear-gradient(to bottom, rgba(212,160,48,0.42) 0%, transparent 100%)",
          transform: "rotate(7deg)", filter: "blur(3px)", transformOrigin: "top center",
        }} />
        <div style={{
          position: "absolute", top: 0, left: "36%",
          width: "2px", height: "30%",
          background: "linear-gradient(to bottom, rgba(212,160,48,0.25) 0%, transparent 100%)",
          transform: "rotate(14deg)", filter: "blur(2.5px)", transformOrigin: "top center",
        }} />
        <div style={{
          position: "absolute", top: 0, left: "27%",
          width: "1.5px", height: "18%",
          background: "linear-gradient(to bottom, rgba(212,160,48,0.14) 0%, transparent 100%)",
          transform: "rotate(24deg)", filter: "blur(2px)", transformOrigin: "top center",
        }} />
        {/* Right rays */}
        <div style={{
          position: "absolute", top: 0, left: "57%",
          width: "2.5px", height: "42%",
          background: "linear-gradient(to bottom, rgba(212,160,48,0.42) 0%, transparent 100%)",
          transform: "rotate(-7deg)", filter: "blur(3px)", transformOrigin: "top center",
        }} />
        <div style={{
          position: "absolute", top: 0, left: "64%",
          width: "2px", height: "30%",
          background: "linear-gradient(to bottom, rgba(212,160,48,0.25) 0%, transparent 100%)",
          transform: "rotate(-14deg)", filter: "blur(2.5px)", transformOrigin: "top center",
        }} />
        <div style={{
          position: "absolute", top: 0, left: "73%",
          width: "1.5px", height: "18%",
          background: "linear-gradient(to bottom, rgba(212,160,48,0.14) 0%, transparent 100%)",
          transform: "rotate(-24deg)", filter: "blur(2px)", transformOrigin: "top center",
        }} />

        {/* 10. Animated floating embers */}
        {embers.map((e, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: e.top,
              left: e.left,
              width: `${e.s}px`,
              height: `${e.s + 2}px`,
              borderRadius: "50% 50% 40% 40%",
              background: `radial-gradient(ellipse at 50% 30%, #fff8d0 0%, #f0b030 40%, #d4601a 80%, transparent 100%)`,
              opacity: e.op,
              "--op": e.op,
              filter: `blur(${e.s * 0.35}px)`,
              boxShadow: `0 0 ${e.s * 4}px ${e.s * 2}px rgba(220,140,30,0.55)`,
              animation: `emberFloat ${e.dur} ease-in-out infinite`,
              animationDelay: e.del,
            }}
          />
        ))}

        {/* 11. Bottom fire bloom — warm glow at page bottom */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(800px, 100vw)",
          height: "220px",
          background: "radial-gradient(ellipse at 50% 100%, rgba(160,45,8,0.40) 0%, rgba(80,15,4,0.18) 50%, transparent 75%)",
          filter: "blur(40px)",
          animation: "gloryPulse 8s ease-in-out infinite",
          animationDelay: "3s",
        }} />

        {/* 12. Bottom fade to black */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "150px",
          background: "linear-gradient(to top, #050001, transparent)",
        }} />
      </div>
    </>
  );
}