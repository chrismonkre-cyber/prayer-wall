import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import PageBackground from "@/components/shared/PageBackground";
import SectionHeading from "@/components/shared/SectionHeading";
import ScriptureQuote from "@/components/shared/ScriptureQuote";
import PrayerCard from "@/components/prayer/PrayerCard";

const BG = "https://media.base44.com/images/public/6a088d4305ad1c2a40626604/60084b8ee_02-prayer-wall-golden-temple-lightpng.png";

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

const fallbackPrayers = [
  { id: "fb-1", category: "Healing", name: "Sarah", request_text: "Please pray for my mother who is battling cancer. We believe in God's healing power and ask for strength and peace for our family during this time.", visibility: "public", approved: true, urgent: true, prayed_count: 13, created_date: "2026-01-10T10:00:00Z" },
  { id: "fb-2", category: "Family", name: "Grace", request_text: "Please pray for peace, unity, and restoration in my family. I am believing God to heal hearts and bring us closer together.", visibility: "public", approved: true, urgent: false, prayed_count: 21, created_date: "2026-01-12T10:00:00Z" },
  { id: "fb-3", category: "Finances", name: "David", request_text: "I lost my job last month and have been struggling to provide for my family. Asking for God's provision and an open door for employment.", visibility: "public", approved: true, urgent: true, prayed_count: 16, created_date: "2026-01-14T10:00:00Z" },
  { id: "fb-4", category: "Salvation", name: "Anonymous", request_text: "Praying for my husband to come to know the Lord. He has been resistant for years, but I believe God is softening his heart. Please agree with me in prayer.", visibility: "public", approved: true, urgent: false, prayed_count: 9, created_date: "2026-01-16T10:00:00Z" },
  { id: "fb-5", category: "Deliverance", name: "Michael", request_text: "Please pray for freedom from every stronghold and for God's peace to fill my mind and home. I believe Jesus is able to break every chain.", visibility: "public", approved: true, urgent: false, prayed_count: 14, created_date: "2026-01-18T10:00:00Z" },
  { id: "fb-6", category: "Direction", name: "Grace", request_text: "I'm at a crossroads in my life and need God's clear guidance. Praying for wisdom and peace about a major decision regarding ministry.", visibility: "public", approved: true, urgent: false, prayed_count: 7, created_date: "2026-01-20T10:00:00Z" },
  { id: "fb-7", category: "Grief", name: "Anonymous", request_text: "Please pray for comfort after the loss of someone I love. I need God's strength, peace, and hope for the days ahead.", visibility: "public", approved: true, urgent: false, prayed_count: 22, created_date: "2026-01-22T10:00:00Z" },
  { id: "fb-8", category: "Fear / Anxiety", name: "Olivia", request_text: "Please pray for peace over my mind and freedom from fear. I want to trust God fully and rest in His presence.", visibility: "public", approved: true, urgent: false, prayed_count: 11, created_date: "2026-01-24T10:00:00Z" },
  { id: "fb-9", category: "Restoration", name: "Rebecca", request_text: "Please pray for restoration in my family and for hearts to soften. I am believing God to heal what has been broken.", visibility: "public", approved: true, urgent: false, prayed_count: 18, created_date: "2026-01-26T10:00:00Z" },
  { id: "fb-10", category: "Other", name: "Daniel", request_text: "Please pray for wisdom, strength, and clear direction in this season. I want to follow God's will and walk in obedience.", visibility: "public", approved: true, urgent: false, prayed_count: 11, created_date: "2026-01-28T10:00:00Z" },
];

export default function PrayerWall() {
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: rawPrayers, isLoading, isError } = useQuery({
    queryKey: ["publicPrayers"],
    queryFn: () => base44.entities.PrayerRequest.filter({ visibility: "public", approved: true }, "-created_date", 100),
  });

  const livePrayers = Array.isArray(rawPrayers) ? rawPrayers : [];
  const prayers = livePrayers.length > 0 ? livePrayers : fallbackPrayers;

  const filtered = activeCategory === "All"
    ? prayers
    : prayers.filter((p) => p && p.category === activeCategory);

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
              pointerEvents: "none",
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
                  background: "rgba(28,8,6,0.92)",
color: "rgba(240,192,64,1)",
border: "1px solid rgba(212,160,48,0.55)",
fontWeight: "600",
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
        ) : isError ? (
          <div className="text-center py-20">
            <p className="font-body text-sm" style={{ color: "rgba(185,155,105,0.68)" }}>
              We could not load the Prayer Wall right now. Please try again shortly.
            </p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-body text-sm" style={{ color: "rgba(185,155,105,0.68)" }}>
              {activeCategory === "All"
                ? "No public prayer requests yet. Be the first to submit one."
                : `No public prayer requests in this category yet. Be the first to submit one.`}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((prayer, i) => (
              prayer && prayer.id
                ? <PrayerCard key={prayer.id} prayer={prayer} index={i} />
                : null
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
