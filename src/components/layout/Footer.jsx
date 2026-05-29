import React from "react";

const footerLinks = [
  { label: "Main Site", href: "https://kingdommandateministry.com" },
  { label: "Bible Companion", href: "https://thebiblecompanion.online" },
  { label: "Prayer Wall", href: "https://prayer.kingdommandateministry.com" },
  { label: "Kingdom Fire", href: "https://fire.kingdommandateministry.com" },
  { label: "Kingdom Pathway", href: "https://pathway.kingdommandateministry.com" },
  { label: "Kingdom Declarations", href: "https://declarations.kingdommandateministry.com" },
  { label: "Kingdom Healing Room", href: "https://healing.kingdommandateministry.com" },
  { label: "Kingdom Purpose Finder", href: "https://purpose.kingdommandateministry.com" },
  { label: "Kingdom Identity", href: "https://identity.kingdommandateministry.com" },
  { label: "Kingdom Gift Finder", href: "https://gifts.kingdommandateministry.com" },
  { label: "Kingdom Battle Plan", href: "https://battle.kingdommandateministry.com" },
  { label: "Kingdom Grace Vault", href: "https://grace.kingdommandateministry.com" },
  { label: "Kingdom Revival Fire", href: "https://revival.kingdommandateministry.com" },
  { label: "Kingdom Family Altar", href: "https://family.kingdommandateministry.com" },
  { label: "Kingdom Marketplace Mandate", href: "https://marketplace.kingdommandateministry.com" },
  { label: "Kingdom Freedom", href: "https://freedom.kingdommandateministry.com" },
  { label: "YouTube", href: "https://www.youtube.com/@KingdomMandateMinistry" },
  { label: "Contact", href: "mailto:kingdommm.chris@gmail.com" },
  { label: "Partner / Sow", href: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
];

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid rgba(212,160,48,0.25)",
        background: "linear-gradient(180deg, rgba(10,2,4,0.85) 0%, rgba(4,0,1,0.90) 100%)",
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col items-center text-center gap-5">

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-2 w-full justify-items-center">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs tracking-wide transition-colors duration-200 hover:underline"
                style={{
                  color: "#d4a860",
                  textShadow: "0 1px 4px rgba(0,0,0,0.60)",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#f2c94c"}
                onMouseLeave={e => e.currentTarget.style.color = "#d4a860"}
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
              color: "#d4a860",
              textShadow: "0 1px 4px rgba(0,0,0,0.70)",
            }}
          >
            © 2026 Kingdom Mandate Ministry | Built for the Glory of GOD, by the Grace of GOD
          </p>
        </div>
      </div>
    </footer>
  );
}