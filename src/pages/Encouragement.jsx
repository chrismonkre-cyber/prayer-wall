import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Heart, Compass, CloudRain, Swords, Shield, Flower2 } from "lucide-react";
import PageBackground from "@/components/shared/PageBackground";

const BG = "https://media.base44.com/images/public/6a088d4305ad1c2a40626604/0f2fd0ae0_07-encouragement-golden-light-glorypng.png";
import SectionHeading from "@/components/shared/SectionHeading";
import RoyalCard from "@/components/shared/RoyalCard";

const cards = [
  {
    title: "I Feel Afraid",
    icon: ShieldAlert,
    scripture: "\"For God has not given us a spirit of fear, but of power, love, and a sound mind.\" — 2 Timothy 1:7",
    encouragement: "Fear is not from God. He is with you right now, surrounding you with His presence. You are not alone, and you are safe in His hands.",
    prayer: "Lord, replace my fear with Your courage. Let Your peace flood my heart and mind. I trust You. In Jesus' name, Amen."
  },
  {
    title: "I Feel Alone",
    icon: Heart,
    scripture: "\"The Lord Himself goes before you and will be with you; He will never leave you nor forsake you.\" — Deuteronomy 31:8",
    encouragement: "Even when it feels like no one understands, God is intimately close to you. He sees you, He knows you, and He is walking with you through this season.",
    prayer: "Father, remind me of Your presence. Let me feel Your nearness. Thank You for never leaving me. In Jesus' name, Amen."
  },
  {
    title: "I Need Healing",
    icon: Flower2,
    scripture: "\"By His wounds we are healed.\" — Isaiah 53:5",
    encouragement: "Jesus paid the price for your healing. Nothing in your body, mind, or heart is beyond His reach. Trust His power and His love.",
    prayer: "Lord Jesus, I receive Your healing. Touch my body, renew my mind, and restore my spirit. In Your mighty name, Amen."
  },
  {
    title: "I Need Direction",
    icon: Compass,
    scripture: "\"Trust in the Lord with all your heart and lean not on your own understanding.\" — Proverbs 3:5",
    encouragement: "God has not left you without a path. He is faithful to guide you, even through the uncertain seasons. Wait on Him — His timing is perfect.",
    prayer: "Father, give me clarity and wisdom. Order my steps and open the right doors. I trust Your plan. In Jesus' name, Amen."
  },
  {
    title: "I Am Grieving",
    icon: CloudRain,
    scripture: "\"Blessed are those who mourn, for they shall be comforted.\" — Matthew 5:4",
    encouragement: "God sees your tears and holds every one. He is close to you in this pain. Lean into Him — He will carry you through this valley.",
    prayer: "Lord, comfort my broken heart. Give me strength to endure and hope to carry on. I place my grief in Your hands. In Jesus' name, Amen."
  },
  {
    title: "I Feel Under Attack",
    icon: Swords,
    scripture: "\"No weapon formed against you shall prosper.\" — Isaiah 54:17",
    encouragement: "The enemy has no authority over you. You are covered by the blood of Jesus and equipped with the full armor of God. Stand firm.",
    prayer: "Father, I plead the blood of Jesus over my life. Fight my battles and give me victory. In the name of Jesus, Amen."
  },
  {
    title: "I Need Peace",
    icon: Shield,
    scripture: "\"Peace I leave with you; My peace I give you. I do not give as the world gives.\" — John 14:27",
    encouragement: "The peace of God surpasses understanding. No matter what storms rage around you, His peace can anchor your soul right now.",
    prayer: "Lord, let Your supernatural peace wash over me. Quiet the noise and still the storm within. In Jesus' name, Amen."
  }
];

function EncouragementCard({ card, index }) {
  const Icon = card.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
    >
      <RoyalCard delay={index * 0.35}>
        {/* Icon + title */}
        <div className="flex items-center gap-3 mb-5">
          <div style={{
            width: "46px", height: "46px", borderRadius: "13px", flexShrink: 0,
            background: "linear-gradient(135deg, rgba(220,150,30,0.26) 0%, rgba(180,70,10,0.16) 100%)",
            border: "1px solid rgba(212,160,48,0.50)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 22px rgba(212,160,48,0.38), inset 0 1px 0 rgba(255,220,80,0.25)",
          }}>
            <Icon style={{ width: "21px", height: "21px", color: "#f0c040", filter: "drop-shadow(0 0 10px rgba(240,180,40,0.80))" }} />
          </div>
          <h3 className="font-heading text-base font-semibold"
            style={{ color: "#f0c040", textShadow: "0 0 16px rgba(212,160,48,0.60)" }}>
            {card.title}
          </h3>
        </div>

        {/* Scripture */}
        <div style={{
          background: "rgba(212,160,48,0.08)",
          border: "1px solid rgba(212,160,48,0.26)",
          borderRadius: "10px", padding: "12px 14px", marginBottom: "14px",
          boxShadow: "inset 0 1px 0 rgba(212,160,48,0.14)",
        }}>
          <p className="font-body text-xs sm:text-sm italic leading-relaxed"
            style={{ color: "rgba(235,205,150,0.92)" }}>
            {card.scripture}
          </p>
        </div>

        <p className="font-body text-sm leading-relaxed mb-4"
          style={{ color: "rgba(218,188,148,0.88)" }}>
          {card.encouragement}
        </p>

        {/* Prayer */}
        <div style={{
          background: "rgba(6,2,2,0.75)",
          border: "1px solid rgba(212,160,48,0.18)",
          borderRadius: "10px", padding: "14px",
          boxShadow: "inset 0 1px 0 rgba(212,160,48,0.10), 0 0 20px rgba(180,60,10,0.08)",
        }}>
          <p className="font-body text-sm italic leading-relaxed"
            style={{ color: "rgba(205,172,125,0.85)" }}>
            {card.prayer}
          </p>
        </div>
      </RoyalCard>
    </motion.div>
  );
}

export default function Encouragement() {
  return (
    <div className="relative min-h-screen py-20">
      <PageBackground imageUrl={BG} />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Need Encouragement Right Now?"
          subtitle="Whatever you're facing, God has a word for you. Let these truths strengthen your heart."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {cards.map((card, i) => (
            <EncouragementCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}