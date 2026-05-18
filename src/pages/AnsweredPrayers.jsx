import React from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Sparkles, Clock } from "lucide-react";
import PageBackground from "@/components/shared/PageBackground";
import SectionHeading from "@/components/shared/SectionHeading";
import RoyalCard from "@/components/shared/RoyalCard";

const BG = "https://media.base44.com/images/public/6a088d4305ad1c2a40626604/e5cf41af7_05-testimonies-golden-throne-skiespng.png";

const fallbackTestimonies = [
  { id: "ft-1", name: "Anonymous", title: "God Gave Me Peace Again", story: "I was carrying fear and anxiety, but after prayer I felt the peace of God settle over my heart. I am still walking through the process, but I know the Lord is with me and I am not alone.", approved: true, isPublic: true, permission_to_share: true, created_date: "2026-02-01T10:00:00Z" },
  { id: "ft-2", name: "Sarah", title: "Strength in a Difficult Season", story: "I asked for prayer during a very hard season with my family. God gave me strength, wisdom, and peace one day at a time. I can see His hand working even before everything is fully resolved.", approved: true, isPublic: true, permission_to_share: true, created_date: "2026-02-05T10:00:00Z" },
  { id: "ft-3", name: "David", title: "Provision at the Right Time", story: "I was believing God for direction and provision, and He opened a door I did not expect. It reminded me that the Lord sees every need and knows exactly when to move.", approved: true, isPublic: true, permission_to_share: true, created_date: "2026-02-10T10:00:00Z" },
  { id: "ft-4", name: "Rebecca", title: "Hope Restored", story: "I felt discouraged and worn down, but through prayer and encouragement, my hope began to rise again. God reminded me that He restores, strengthens, and finishes what He starts.", approved: true, isPublic: true, permission_to_share: true, created_date: "2026-02-15T10:00:00Z" },
];

function TestimonyCard({ testimony, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <RoyalCard delay={index * 0.30}>
        <div className="flex items-center gap-2 mb-3">
          <Sparkles style={{ width: "16px", height: "16px", color: "#f0c040", filter: "drop-shadow(0 0 8px rgba(240,180,40,0.70))" }} />
          <h3 className="font-heading text-base font-semibold"
            style={{ color: "#f0c040", textShadow: "0 0 14px rgba(212,160,48,0.55)" }}>
            {testimony.title}
          </h3>
        </div>

        <p className="font-body text-sm leading-relaxed mb-4"
          style={{ color: "rgba(218,188,148,0.90)" }}>
          {testimony.story}
        </p>

        <div className="flex items-center justify-between text-xs pt-3"
          style={{ borderTop: "1px solid rgba(212,160,48,0.18)", color: "rgba(185,155,105,0.70)" }}>
          <span className="font-body">— {testimony.name || "Anonymous"}</span>
          <div className="flex items-center gap-1.5">
            <Clock style={{ width: "13px", height: "13px" }} />
            <span className="font-body">
              {testimony.created_date ? format(new Date(testimony.created_date), "MMM d, yyyy") : "Recently"}
            </span>
          </div>
        </div>
      </RoyalCard>
    </motion.div>
  );
}

export default function AnsweredPrayers() {
  const { data: rawTestimonies, isLoading, isError } = useQuery({
    queryKey: ["publicTestimonies"],
    queryFn: () => base44.entities.Testimony.filter({ approved: true, isPublic: true }, "-created_date", 100),
  });
  const liveTestimonies = Array.isArray(rawTestimonies) ? rawTestimonies : [];
  const testimonies = liveTestimonies.length > 0 ? liveTestimonies : fallbackTestimonies;

  return (
    <div className="relative min-h-screen py-20">
      <PageBackground imageUrl={BG} />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Answered Prayers & Testimonies"
          subtitle="We give glory to God for every testimony. What He has done for one, He can do for another."
        />

        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-t-[#d4a030] rounded-full animate-spin" style={{ borderColor: "rgba(212,160,48,0.25)", borderTopColor: "#d4a030" }} />
          </div>
        ) : isError ? (
          <div className="text-center py-20">
            <p className="font-body text-sm" style={{ color: "rgba(185,155,105,0.68)" }}>
              We could not load testimonies right now. Please try again shortly.
            </p>
          </div>
        ) : testimonies.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-body text-sm" style={{ color: "rgba(185,155,105,0.68)" }}>
              No testimonies have been shared yet. Be the first to share what God has done.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {testimonies.map((testimony, i) => (
              testimony && testimony.id
                ? <TestimonyCard key={testimony.id} testimony={testimony} index={i} />
                : null
            ))}
          </div>
        )}
      </div>
    </div>
  );
}