import React from "react";
import { motion } from "framer-motion";
import { Heart, Users, DollarSign, Flame, ShieldCheck, Compass, CloudRain, ShieldAlert, RefreshCw, Zap } from "lucide-react";
import PageBackground from "@/components/shared/PageBackground";

const BG = "https://media.base44.com/images/public/6a088d4305ad1c2a40626604/ac1cc23b9_06-prayer-topics-bible-scrollpng.png";
import SectionHeading from "@/components/shared/SectionHeading";
import RoyalCard from "@/components/shared/RoyalCard";

const topics = [
  { title: "Healing",          icon: Heart,      scripture: "Isaiah 53:5",       encouragement: "God is Jehovah Rapha — the Lord who heals. He has not changed.", prayer: "Lord Jesus, release Your healing power and restore what is broken. Strengthen faith, renew hope, and bring peace in Jesus' name. Amen." },
  { title: "Family",           icon: Users,      scripture: "Joshua 24:15",      encouragement: "God's hand covers your household. He is restoring, reconciling, and protecting.", prayer: "Father, bring unity, peace, and love into every home. Heal family wounds and draw every heart closer to You. In Jesus' name, Amen." },
  { title: "Finances",         icon: DollarSign, scripture: "Philippians 4:19",  encouragement: "Your God shall supply all your needs according to His riches in glory.", prayer: "Lord, open doors of provision and opportunity. Break the cycle of lack and release Your abundance. In Jesus' name, Amen." },
  { title: "Salvation",        icon: Flame,      scripture: "Romans 10:9",       encouragement: "God is pursuing every lost soul with relentless love. He hears your prayers for the unsaved.", prayer: "Father, draw the unsaved to Your Son. Open blinded eyes, soften hardened hearts, and save in Jesus' name. Amen." },
  { title: "Deliverance",      icon: ShieldCheck,scripture: "Psalm 34:17",       encouragement: "The Lord delivers the righteous out of all their afflictions. Freedom is yours.", prayer: "Lord, break every chain and destroy every yoke. Set the captives free by the power of Your Spirit. In Jesus' name, Amen." },
  { title: "Direction",        icon: Compass,    scripture: "Proverbs 3:5-6",    encouragement: "Trust in the Lord with all your heart. He will make your paths straight.", prayer: "Father, give wisdom and clarity. Guide every step and decision according to Your perfect will. In Jesus' name, Amen." },
  { title: "Grief",            icon: CloudRain,  scripture: "Psalm 34:18",       encouragement: "The Lord is near to the brokenhearted and saves the crushed in spirit.", prayer: "Lord, comfort those who mourn. Wrap them in Your love and give them the oil of gladness for mourning. In Jesus' name, Amen." },
  { title: "Fear / Anxiety",   icon: ShieldAlert,scripture: "2 Timothy 1:7",     encouragement: "God has not given you a spirit of fear, but of power, love, and a sound mind.", prayer: "Father, replace every fear with faith and every anxiety with Your peace. Guard hearts and minds in Christ Jesus. Amen." },
  { title: "Restoration",      icon: RefreshCw,  scripture: "Joel 2:25",         encouragement: "God is restoring what the enemy has stolen. Your latter shall be greater.", prayer: "Lord, restore what has been lost, broken, or stolen. Rebuild, renew, and refresh by Your Spirit. In Jesus' name, Amen." },
  { title: "Spiritual Strength",icon: Zap,       scripture: "Ephesians 6:10",    encouragement: "Be strong in the Lord and in the power of His might. You are equipped for victory.", prayer: "Father, strengthen Your people in the inner man. Fill them with boldness, endurance, and unshakable faith. In Jesus' name, Amen." }
];

function TopicCard({ topic, index }) {
  const Icon = topic.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <RoyalCard delay={index * 0.28}>
        <div className="flex items-center gap-3 mb-3">
          <div style={{
            width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
            background: "linear-gradient(135deg, rgba(220,150,30,0.24) 0%, rgba(180,70,10,0.14) 100%)",
            border: "1px solid rgba(212,160,48,0.48)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 20px rgba(212,160,48,0.34), inset 0 1px 0 rgba(255,220,80,0.22)",
          }}>
            <Icon style={{ width: "20px", height: "20px", color: "#f0c040", filter: "drop-shadow(0 0 9px rgba(240,180,40,0.78))" }} />
          </div>
          <div>
            <h3 className="font-heading text-base font-semibold"
              style={{ color: "#f0c040", textShadow: "0 0 14px rgba(212,160,48,0.58)" }}>
              {topic.title}
            </h3>
            <p className="font-body text-xs" style={{ color: "rgba(212,160,48,0.58)" }}>{topic.scripture}</p>
          </div>
        </div>

        <p className="font-body text-sm leading-relaxed mb-3"
          style={{ color: "rgba(218,188,148,0.88)" }}>
          {topic.encouragement}
        </p>

        <div style={{
          background: "rgba(6,2,2,0.75)", border: "1px solid rgba(212,160,48,0.18)",
          borderRadius: "10px", padding: "14px",
          boxShadow: "inset 0 1px 0 rgba(212,160,48,0.10), 0 0 18px rgba(160,50,8,0.08)",
        }}>
          <p className="font-body text-sm italic leading-relaxed"
            style={{ color: "rgba(205,172,125,0.85)" }}>
            {topic.prayer}
          </p>
        </div>
      </RoyalCard>
    </motion.div>
  );
}

export default function PrayerTopics() {
  return (
    <div className="relative min-h-screen py-20">
      <PageBackground imageUrl={BG} />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Prayer Topics"
          subtitle="Scripture-led prayers for every need. Let these guide your time before the Lord."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {topics.map((topic, i) => (
            <TopicCard key={topic.title} topic={topic} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}