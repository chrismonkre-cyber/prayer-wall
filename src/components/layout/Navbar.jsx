import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Submit Prayer", path: "/submit-prayer" },
  { label: "Prayer Wall", path: "/prayer-wall" },
  { label: "Testimonies", path: "/testimonies" },
  { label: "Share Testimony", path: "/share-testimony" },
  { label: "Prayer Topics", path: "/prayer-topics" },
  { label: "Encouragement", path: "/encouragement" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0000]/85 backdrop-blur-xl border-b border-primary/10 shadow-[0_1px_20px_rgba(212,160,48,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
            <img
              src="https://media.base44.com/images/public/6a088d4305ad1c2a40626604/0cf99b8cf_KMM-logo-circle-512.png"
              alt="Kingdom Mandate Ministry"
              style={{
                width: "44px",
                height: "44px",
                minWidth: "44px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 0 14px rgba(212,160,48,0.45)",
                transition: "box-shadow 0.2s",
              }}
              className="group-hover:shadow-[0_0_22px_rgba(212,160,48,0.70)]"
            />
            <span className="font-heading text-primary text-sm sm:text-base font-bold tracking-wide drop-shadow-[0_0_10px_rgba(212,160,48,0.3)]">
              Kingdom Prayer Wall
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-xs font-body tracking-wide transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/12 shadow-[0_0_12px_rgba(212,160,48,0.15)]"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/8"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary hover:bg-primary/10"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0a0000]/95 backdrop-blur-xl border-b border-primary/10">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-body transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/12 shadow-[0_0_10px_rgba(212,160,48,0.12)]"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/8"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}