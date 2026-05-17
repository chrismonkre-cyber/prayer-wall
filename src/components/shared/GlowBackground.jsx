import React from "react";

export default function GlowBackground({ className = "", hero = false }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Deep maroon base wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0505]/60 via-transparent to-[#0d0000]/40" />

      {/* Central golden glory glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#d4a030]/10 rounded-full blur-[130px] animate-glow-pulse" />

      {/* Left maroon fire glow */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#3a0a0a]/50 rounded-full blur-[100px]" />

      {/* Right ember glow */}
      <div className="absolute top-1/3 -right-20 w-[350px] h-[350px] bg-[#d4a030]/6 rounded-full blur-[90px] animate-glow-pulse" style={{ animationDelay: '2s' }} />

      {/* Bottom deep shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-transparent to-transparent" />

      {hero && (
        <>
          {/* Hero light rays */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-[60%] bg-gradient-to-b from-[#d4a030]/20 to-transparent blur-sm" />
          <div className="absolute top-0 left-[45%] w-0.5 h-[45%] bg-gradient-to-b from-[#d4a030]/10 to-transparent blur-sm rotate-6" />
          <div className="absolute top-0 left-[55%] w-0.5 h-[45%] bg-gradient-to-b from-[#d4a030]/10 to-transparent blur-sm -rotate-6" />
          {/* Altar floor glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#d4a030]/8 rounded-full blur-[80px]" />
        </>
      )}
    </div>
  );
}