import React from "react";
import { motion } from "framer-motion";
import { Crown, Globe, BookOpen, Youtube, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageBackground from "@/components/shared/PageBackground";
import SectionHeading from "@/components/shared/SectionHeading";
import RoyalCard from "@/components/shared/RoyalCard";

const BG = "https://media.base44.com/images/public/6a088d4305ad1c2a40626604/20a44699d_08-about-divine-grandeurpng.png";

const links = [
  { label: "Main Ministry Site",    href: "https://kingdommandateministry.com",            icon: Globe,     description: "Visit Kingdom Mandate Ministry" },
  { label: "The Bible Companion",   href: "https://thebiblecompanion.online",              icon: BookOpen,  description: "Study the Word with our Bible tool" },
  { label: "YouTube Channel",       href: "https://www.youtube.com/@KingdomMandateMinistry",icon: Youtube,   description: "Watch teachings and worship" },
  { label: "Contact / Prayer Email",href: "mailto:kingdommm.chris@gmail.com",              icon: Mail,      description: "Reach the ministry team directly" },
];

export default function About() {
  return (
    <div className="relative min-h-screen py-20">
      <PageBackground imageUrl={BG} />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeading title="About" subtitle="Kingdom Mandate Ministry" />

        {/* Mission panel */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <RoyalCard style={{ padding: "34px 32px", textAlign: "center" }} hover={false}>
            <Crown style={{
              width: "44px", height: "44px", color: "#f0c040",
              display: "block", margin: "0 auto 16px",
              filter: "drop-shadow(0 0 24px rgba(212,160,48,0.75))",
            }} />
            <p className="font-body text-sm sm:text-base leading-relaxed"
              style={{ color: "rgba(220,190,148,0.90)" }}>
              Kingdom Prayer Wall is part of the Kingdom Mandate Ministry app suite. Our mission is to
              advance the Kingdom through The Holy Spirit, Healing &amp; Power.
            </p>
          </RoyalCard>
        </motion.div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ display: "block", textDecoration: "none" }}
              >
                <RoyalCard style={{ padding: "18px 20px" }} delay={i * 0.25}>
                  <div className="flex items-center gap-3">
                    <div style={{
                      width: "44px", height: "44px", borderRadius: "12px", flexShrink: 0,
                      background: "linear-gradient(135deg, rgba(220,150,30,0.24) 0%, rgba(180,70,10,0.14) 100%)",
                      border: "1px solid rgba(212,160,48,0.48)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 0 20px rgba(212,160,48,0.32), inset 0 1px 0 rgba(255,220,80,0.20)",
                    }}>
                      <Icon style={{ width: "20px", height: "20px", color: "#f0c040", filter: "drop-shadow(0 0 9px rgba(240,180,40,0.75))" }} />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold"
                        style={{ color: "#f0c040", textShadow: "0 0 12px rgba(212,160,48,0.55)" }}>
                        {link.label}
                      </h3>
                      <p className="font-body text-xs" style={{ color: "rgba(185,155,105,0.68)" }}>
                        {link.description}
                      </p>
                    </div>
                  </div>
                </RoyalCard>
              </motion.a>
            );
          })}
        </div>

        {/* Support */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <RoyalCard style={{ padding: "28px 32px", textAlign: "center" }} hover={false}>
            <Heart style={{
              width: "34px", height: "34px", color: "#f0c040",
              display: "block", margin: "0 auto 14px",
              filter: "drop-shadow(0 0 16px rgba(212,160,48,0.65))",
            }} />
            <p className="font-body text-sm leading-relaxed mb-5" style={{ color: "rgba(205,172,125,0.85)" }}>
              Prayer is freely offered. If this ministry has blessed you and you feel led to support the work,
              you may sow into Kingdom Mandate Ministry.
            </p>
            <a href="https://kingdommandateministry.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="font-heading text-sm"
                style={{ border: "1px solid rgba(212,160,48,0.48)", color: "#d4a030", boxShadow: "0 0 18px rgba(212,160,48,0.18)" }}>
                <Heart className="w-4 h-4 mr-2" />
                Support the Ministry
              </Button>
            </a>
          </RoyalCard>
        </motion.div>
      </div>
    </div>
  );
}