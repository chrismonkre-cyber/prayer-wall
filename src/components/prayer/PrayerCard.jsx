import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Heart, Clock, AlertTriangle } from "lucide-react";
import { format } from "date-fns";

const CSS = `
@keyframes cardBorderPulse {
  0%, 100% { box-shadow: 0 4px 36px rgba(0,0,0,0.75), 0 0 0 1px rgba(212,160,48,0.06), inset 0 1px 0 rgba(212,160,48,0.22); }
  50%       { box-shadow: 0 4px 42px rgba(0,0,0,0.80), 0 0 20px rgba(212,140,20,0.14), inset 0 1px 0 rgba(212,160,48,0.30); }
}
`;

const encouragements = [
  "God hears every prayer.",
  "Heaven is moving on your behalf.",
  "Nothing is impossible with God.",
  "He is faithful to complete His work.",
  "Your faith moves mountains.",
  "The Lord is near to the brokenhearted.",
  "Stand firm — your breakthrough is coming.",
];

export default function PrayerCard({ prayer, index }) {
  const [prayedCount, setPrayedCount] = useState(prayer?.prayed_count || 0);
  const [hasPrayed, setHasPrayed] = useState(false);

  if (!prayer || !prayer.id) return null;

  const handlePrayed = async () => {
    if (hasPrayed || !prayer.id) return;
    const newCount = prayedCount + 1;
    setPrayedCount(newCount);
    setHasPrayed(true);
    await base44.entities.PrayerRequest.update(prayer.id, { prayed_count: newCount });
  };

  const encouragement = encouragements[index % encouragements.length];

  return (
    <>
      <style>{CSS}</style>
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.06 }}
        className="relative overflow-hidden group"
        style={{
          background: "linear-gradient(150deg, #280808 0%, #160204 45%, #080002 100%)",
          border: "1px solid rgba(212,160,48,0.40)",
          borderRadius: "16px",
          padding: "22px",
          animation: "cardBorderPulse 5s ease-in-out infinite",
          animationDelay: `${index * 0.4}s`,
          backdropFilter: "blur(14px)",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.border = "1px solid rgba(212,160,48,0.68)";
          e.currentTarget.style.boxShadow = "0 8px 50px rgba(212,140,30,0.25), 0 0 80px rgba(160,60,8,0.15), inset 0 1px 0 rgba(212,160,48,0.35)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.border = "1px solid rgba(212,160,48,0.40)";
          e.currentTarget.style.boxShadow = "";
        }}
      >
        {/* Top gold shimmer */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(to right, transparent, rgba(255,220,80,0.80), transparent)",
        }} />
        {/* Inner fire glow */}
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: "75%", height: "70px",
          background: "radial-gradient(ellipse, rgba(220,140,30,0.14) 0%, rgba(180,60,10,0.06) 55%, transparent 75%)",
          filter: "blur(10px)", pointerEvents: "none",
        }} />
        {/* Corner amber accent — top left */}
        <div style={{
          position: "absolute", top: 0, left: 0,
          width: "80px", height: "60px",
          background: "radial-gradient(ellipse at 0% 0%, rgba(200,100,15,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Header */}
        <div className="relative flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="font-heading text-sm font-semibold tracking-wide"
              style={{ color: "#f0c040", textShadow: "0 0 14px rgba(212,160,48,0.60)" }}>
              {prayer.name || "Anonymous"}
            </span>
            {prayer.urgent && (
              <AlertTriangle style={{ width: "14px", height: "14px", color: "#f0a020", filter: "drop-shadow(0 0 6px rgba(240,160,30,0.7))" }} />
            )}
          </div>
          <span style={{
            display: "inline-flex", alignItems: "center",
            padding: "4px 10px",
            borderRadius: "7px",
            background: "linear-gradient(135deg, rgba(212,160,48,0.18) 0%, rgba(160,70,10,0.12) 100%)",
            border: "1px solid rgba(212,160,48,0.42)",
            color: "#d4a030",
            fontSize: "10px",
            fontFamily: "var(--font-heading)",
            letterSpacing: "0.08em",
            fontWeight: 600,
            boxShadow: "0 0 12px rgba(212,160,48,0.18)",
          }}>
            {prayer.category}
          </span>
        </div>

        <p className="font-body text-base leading-relaxed mb-4" style={{ color: "#ffffff" }}>
          {prayer.request_text}
        </p>

        <div className="relative flex items-center gap-2 mb-4">
          <div style={{ width: "30px", height: "1px", background: "rgba(212,160,48,0.40)" }} />
          <p className="font-body text-sm italic" style={{ color: "#ffffff" }}>
            {encouragement}
          </p>
        </div>

        <div className="relative flex items-center justify-between pt-3"
          style={{ borderTop: "1px solid rgba(212,160,48,0.18)" }}>
          <div className="flex items-center gap-1.5" style={{ color: "#ffffff" }}}
            <Clock style={{ width: "13px", height: "13px" }} />
            <span className="font-body text-sm">
              {prayer.created_date ? format(new Date(prayer.created_date), "MMM d, yyyy") : "Recently"}
            </span>
          </div>
          <Button
            variant="ghost" size="sm" onClick={handlePrayed}
            className="gap-1.5 font-body text-sm transition-all duration-200"
            style={hasPrayed
              ? { color: "#d4a030", textShadow: "0 0 16px rgba(212,160,48,0.55)" }
              : { color: "#ffffff" }
              
            }
          >
            <Heart style={{ width: "15px", height: "15px", fill: hasPrayed ? "#d4a030" : "none", color: hasPrayed ? "#d4a030" : "inherit", transition: "all 0.2s" }} />
            I Prayed ({prayedCount})
          </Button>
        </div>
      </motion.div>
    </>
  );
}
