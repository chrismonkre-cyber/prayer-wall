import React from "react";
import { Crown } from "lucide-react";

const footerLinks = [
  { label: "Main Site", href: "https://kingdommandateministry.com" },
  { label: "Bible Companion", href: "https://thebiblecompanion.online" },
  { label: "YouTube", href: "https://www.youtube.com/@KingdomMandateMinistry" },
  { label: "Contact", href: "mailto:kingdommm.chris@gmail.com" },
];

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid rgba(212,160,48,0.18)",
        background: "rgba(4,0,1,0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        overflow: "hidden",
      }}
    >
      {/* Subtle top glow */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: "320px", height: "1px",
        background: "linear-gradient(to right, transparent, rgba(242,201,76,0.60), transparent)",
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-7">
        <div className="flex flex-col items-center text-center gap-3">
          <Crown
            style={{
              width: "22px", height: "22px",
              color: "#d4a030",
              filter: "drop-shadow(0 0 8px rgba(212,160,48,0.55))",
            }}
          />

          <div className="flex flex-wrap justify-center gap-5">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-wide transition-colors duration-200"
                style={{
                  color: "rgba(212,160,48,0.68)",
                  textShadow: "0 1px 4px rgba(0,0,0,0.60)",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#f2c94c"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(212,160,48,0.68)"}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", width: "100%", maxWidth: "260px" }}>
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(212,160,48,0.30))" }} />
            <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(212,160,48,0.55)" }} />
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(212,160,48,0.30))" }} />
          </div>

          <p
            className="font-body text-xs tracking-wide"
            style={{
              color: "rgba(212,160,48,0.55)",
              textShadow: "0 1px 4px rgba(0,0,0,0.70)",
            }}
          >
            © 2026 Kingdom Mandate Ministry | Built by the Glory of GOD, for the Grace of GOD
          </p>
        </div>
      </div>
    </footer>
  );
}