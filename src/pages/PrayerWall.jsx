import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import PageBackground from "@/components/shared/PageBackground";

const BG = "https://media.base44.com/images/public/6a088d4305ad1c2a40626604/60084b8ee_02-prayer-wall-golden-temple-lightpng.png";
import SectionHeading from "@/components/shared/SectionHeading";
import ScriptureQuote from "@/components/shared/ScriptureQuote";
import PrayerCard from "@/components/prayer/PrayerCard";

const CSS = `
@keyframes filterPanelPulse {
  0%, 100% { box-shadow: 0 0 50px rgba(212,160,48,0.12), inset 0 1px 0 rgba(212,160,48,0.25), 0 4px 40px rgba(0,0,0,0.70); }
  50%       { box-shadow: 0 0 75px rgba(212,160,48,0.20), inset 0 1px 0 rgba(212,160,48,0.38), 0 4px 55px rgba(0,0,0,0.75); }
}
@keyframes catBtnGlow {
  0%, 100% { box-shadow: 0 0 18px rgba(212,160,48,0.38); }
  50%       { box-shadow: 0 0 28px rgba(212,160,48,0.60); }
}
`;

const categories = [
  "All", "Healing", "Family", "Finances", "Salvation", "Deliverance",
  "Direction", "Grief", "Fear / Anxiety", "Restoration", "Other"
];

export default function PrayerWall() {
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: prayers = [], isLoading } = useQuery({
    queryKey: ["publicPrayers"],
    queryFn: () => base44.entities.PrayerRequest.filter({ visibility: "public" }, "-created_date", 100),
  });

  const filtered = activeCategory === "All"
    ? prayers
    : prayers.filter((p) => p.category === activeCategory);

  return (
    <div className="relative min-h-screen py-20">
      <style>{CSS}</style>
      <PageBackground imageUrl={BG} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Prayer Wall"
          subtitle="Stand in agreement with believers around the world."
        />

        <div className="mb-8 sm:mb-10">
          <ScriptureQuote
            text="Again I say to you, if two of you agree on earth about anything they ask, it will be done for them by My Father in heaven."
            reference="Matthew 18:19"
          />
        </div>

        {/* Category filters — fire altar panel */}
        <div className="relative mb-10">
          {/* outer fire bloom */}
          <div style={{
            position: "absolute", inset: "-10px",
            borderRadius: "22px",
            background: "radial-gradient(ellipse, rgba(212,160,48,0.14) 0%, rgba(160,60,8,0.06) 55%, transparent 75%)",
            filter: "blur(18px)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "relative",
            background: "linear-gradient(150deg, #280808 0%, #160204 50%, #080002 100%)",
            border: "1px solid rgba(212,160,48,0.48)",
            borderRadius: "16px",
            padding: "18px 20px",
            animation: "filterPanelPulse 5s ease-in-out infinite",
            backdropFilter: "blur(18px)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px",
          }}>
            {/* inner top shimmer */}
            <div style={{
              position: "absolute", top: 0, left: "8%", right: "8%", height: "1px",
              background: "linear-gradient(to right, transparent, rgba(255,220,80,0.80), transparent)",
            }} />
            {/* inner fire glow */}
            <div style={{
              position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
              width: "65%", height: "70px",
              background: "radial-gradient(ellipse, rgba(220,140,30,0.14) 0%, transparent 70%)",
              filter: "blur(14px)", pointerEvents: "none",
            }} />
            {/* bottom fire bloom */}
            <div style={{
              position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
              width: "60%", height: "50px",
              background: "radial-gradient(ellipse at 50% 100%, rgba(160,50,8,0.28) 0%, transparent 70%)",
              filter: "blur(14px)", pointerEvents: "none",
            }} />

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="font-body text-xs transition-all duration-200"
                style={activeCategory === cat ? {
                  background: "linear-gradient(135deg, #d4a030 0%, #a06818 100%)",
                  color: "#060002",
                  border: "1px solid rgba(212,160,48,0.65)",
                  borderRadius: "8px",
                  padding: "7px 15px",
                  fontWeight: "700",
                  animation: "catBtnGlow 3s ease-in-out infinite",
                  cursor: "pointer",
                } : {
                  background: "rgba(10,2,2,0.75)",
                  color: "rgba(212,160,48,0.82)",
                  border: "1px solid rgba(212,160,48,0.28)",
                  borderRadius: "8px",
                  padding: "7px 15px",
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 rounded-full animate-spin" style={{ border: "2px solid rgba(212,160,48,0.25)", borderTopColor: "#d4a030" }} />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-body text-sm" style={{ color: "rgba(185,155,105,0.68)" }}>
              No prayer requests yet. Be the first to submit one.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((prayer, i) => (
              <PrayerCard key={prayer.id} prayer={prayer} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}