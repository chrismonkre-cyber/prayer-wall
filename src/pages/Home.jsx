import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HandHeart, BookOpen, Sparkles, Flame } from "lucide-react";
import PageBackground from "@/components/shared/PageBackground";
import HeroStage from "@/components/shared/HeroStage";

const HOME_BG = "https://media.base44.com/images/public/6a088d4305ad1c2a40626604/f5382f38b_01-home-lion-golden-templepng.png";

export default function Home() {
  return (
    <div className="relative">
      {/* ─── Hero ─── */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <PageBackground imageUrl={HOME_BG} />



        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center py-24 sm:py-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <HeroStage>
              {/* KMM Logo Emblem */}
              <div className="relative inline-block mb-6 sm:mb-8">
                <div className="absolute inset-0 blur-2xl bg-primary/25 scale-150 rounded-full" />
                <img
                  src="https://media.base44.com/images/public/6a088d4305ad1c2a40626604/5c6ab99e4_KMM-logo-circle-transparent.png"
                  alt="Kingdom Mandate Ministry"
                  style={{
                    width: "clamp(80px, 18vw, 120px)",
                    height: "clamp(80px, 18vw, 120px)",
                    objectFit: "contain",
                    filter: "drop-shadow(0 0 24px rgba(212,160,48,0.70)) drop-shadow(0 4px 12px rgba(0,0,0,0.65))",
                    position: "relative",
                  }}
                />
              </div>

              {/* Main Title */}
              <h1
                className="font-heading font-bold tracking-wide mb-5"
                style={{
                  fontSize: "clamp(2rem, 7vw, 4.5rem)",
                  lineHeight: 1.12,
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
                Kingdom Prayer Wall
              </h1>

              {/* Ornamental divider */}
              <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/40" />
                <Flame className="w-4 h-4 text-primary/60" />
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/40" />
              </div>

              {/* Subtitle */}
              <p
                className="font-body text-sm sm:text-lg md:text-xl max-w-xl mx-auto mb-3 leading-relaxed"
                style={{
                  fontWeight: 600,
                  color: "#FFF6D6",
                  textShadow: "0 2px 4px rgba(0,0,0,0.95), 0 4px 10px rgba(0,0,0,0.85)",
                }}
              >
                Bring your request before the Lord. Stand with others in faith. Celebrate answered prayer.
              </p>

              {/* Scripture */}
              <p
                className="font-body text-xs sm:text-sm italic mb-10 sm:mb-12 tracking-wide"
                style={{
                  fontWeight: 600,
                  color: "#FFF6D6",
                  textShadow: "0 2px 4px rgba(0,0,0,0.95), 0 4px 10px rgba(0,0,0,0.85)",
                }}
              >
                "Come boldly before the throne of grace." — Hebrews 4:16
              </p>
            </HeroStage>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
          >
            <Link to="/submit-prayer" className="w-full sm:w-auto">
              <button
                className="w-full font-heading text-xs sm:text-sm tracking-widest flex items-center justify-center gap-2"
                style={{
                  padding: "14px 28px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #f2c94c 0%, #d4a030 55%, #a07018 100%)",
                  color: "#0a0200",
                  fontWeight: "800",
                  border: "1px solid rgba(242,201,76,0.70)",
                  boxShadow: "0 0 28px rgba(212,160,48,0.50), 0 4px 16px rgba(0,0,0,0.50)",
                  cursor: "pointer",
                  transition: "box-shadow 0.2s",
                }}
              >
                <HandHeart className="w-4 h-4 shrink-0" />
                Submit a Prayer Request
              </button>
            </Link>
            <Link to="/prayer-wall" className="w-full sm:w-auto">
              <button
                className="w-full font-heading text-xs sm:text-sm tracking-widest flex items-center justify-center gap-2"
                style={{
                  padding: "14px 28px",
                  borderRadius: "8px",
                  background: "rgba(5,0,2,0.72)",
                  color: "#f2c94c",
                  fontWeight: "700",
                  border: "1px solid rgba(212,160,48,0.55)",
                  boxShadow: "0 0 18px rgba(212,160,48,0.22), 0 4px 16px rgba(0,0,0,0.50)",
                  cursor: "pointer",
                  backdropFilter: "blur(12px)",
                }}
              >
                <BookOpen className="w-4 h-4 shrink-0" />
                View Prayer Wall
              </button>
            </Link>
            <Link to="/share-testimony" className="w-full sm:w-auto">
              <button
                className="w-full font-heading text-xs sm:text-sm tracking-widest flex items-center justify-center gap-2"
                style={{
                  padding: "14px 28px",
                  borderRadius: "8px",
                  background: "rgba(5,0,2,0.72)",
                  color: "#f2c94c",
                  fontWeight: "700",
                  border: "1px solid rgba(212,160,48,0.55)",
                  boxShadow: "0 0 18px rgba(212,160,48,0.22), 0 4px 16px rgba(0,0,0,0.50)",
                  cursor: "pointer",
                  backdropFilter: "blur(12px)",
                }}
              >
                <Sparkles className="w-4 h-4 shrink-0" />
                Share a Testimony
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── Ministry Statement ─── */}
      <section className="relative py-14 sm:py-20">
        <div className="max-w-2xl mx-auto px-5 sm:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-[#0d0000]/85 backdrop-blur-sm border border-primary/15 rounded-2xl p-7 sm:p-12 shadow-[0_0_60px_rgba(212,160,48,0.06)] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-28 bg-primary/5 rounded-full blur-2xl" />
              <img
                src="https://media.base44.com/images/public/6a088d4305ad1c2a40626604/5c6ab99e4_KMM-logo-circle-transparent.png"
                alt="Kingdom Mandate Ministry"
                style={{
                  width: "48px",
                  height: "48px",
                  objectFit: "contain",
                  opacity: 0.55,
                  filter: "drop-shadow(0 0 10px rgba(212,160,48,0.5))",
                  margin: "0 auto 16px",
                }}
              />
              <p className="relative font-body text-foreground/80 text-sm sm:text-base leading-relaxed">
                Kingdom Prayer Wall is a free Kingdom Mandate Ministry resource created to help believers
                pray, agree, encourage one another, and give glory to God for answered prayer.
              </p>
              <div className="mt-5 flex items-center justify-center gap-2">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary/30" />
                <div className="w-16 h-px bg-primary/40" />
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary/30" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}