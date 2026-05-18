import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, Send } from "lucide-react";
import PageBackground from "@/components/shared/PageBackground";
import SectionHeading from "@/components/shared/SectionHeading";

const BG = "https://media.base44.com/images/public/6a088d4305ad1c2a40626604/d939edcfa_03-submit-prayer-lion-guardianpng.png";

const categories = [
  "Healing", "Family", "Finances", "Salvation", "Deliverance",
  "Direction", "Grief", "Fear / Anxiety", "Restoration", "Other"
];

const CSS = `
@keyframes altarGlow {
  0%, 100% { box-shadow: 0 4px 60px rgba(0,0,0,0.80), 0 0 80px rgba(200,120,20,0.10), inset 0 1px 0 rgba(212,160,48,0.28); }
  50%       { box-shadow: 0 4px 80px rgba(0,0,0,0.85), 0 0 120px rgba(200,120,20,0.18), inset 0 1px 0 rgba(212,160,48,0.40); }
}
`;

const INPUT_STYLE = {
  background: "rgba(6,2,2,0.80)",
  border: "1px solid rgba(212,160,48,0.28)",
  borderRadius: "9px",
  color: "rgba(228,198,148,0.94)",
};

export default function SubmitPrayer() {
  const [form, setForm] = useState({ name: "", email: "", category: "", request_text: "", visibility: "public", urgent: false });
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.category || !form.request_text || !consent) return;
    setLoading(true);
    await base44.entities.PrayerRequest.create({ ...form, prayed_count: 0 });
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <style>{CSS}</style>
        <PageBackground imageUrl={BG} />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            background: "linear-gradient(150deg, #280808 0%, #160204 50%, #070002 100%)",
            border: "1px solid rgba(212,160,48,0.48)",
            borderRadius: "20px", padding: "44px",
            textAlign: "center", maxWidth: "440px", width: "100%",
            position: "relative", zIndex: 10, overflow: "hidden",
            animation: "altarGlow 5s ease-in-out infinite",
            backdropFilter: "blur(18px)",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(255,220,80,0.85), transparent)" }} />
          <CheckCircle2 style={{ width: "58px", height: "58px", color: "#d4a030", margin: "0 auto 18px", filter: "drop-shadow(0 0 26px rgba(212,160,48,0.70))" }} />
          <h2 className="font-heading text-2xl mb-3" style={{ color: "#f0c040", textShadow: "0 0 20px rgba(212,160,48,0.65)" }}>Prayer Received</h2>
          <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(205,172,125,0.88)" }}>
            Your prayer request has been received. We are standing with you in faith.
          </p>
          <Button className="mt-7 font-heading text-sm"
            style={{ background: "linear-gradient(135deg, #d4a030, #a06818)", color: "#060002", fontWeight: "700", boxShadow: "0 0 30px rgba(212,160,48,0.45)", border: "1px solid rgba(212,160,48,0.55)" }}
            onClick={() => { setSubmitted(false); setForm({ name: "", email: "", category: "", request_text: "", visibility: "public", urgent: false }); setConsent(false); }}
          >
            Submit Another Request
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen py-20">
      <style>{CSS}</style>
      <PageBackground imageUrl={BG} />
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Submit a Prayer Request"
          subtitle="Come boldly before the throne of grace. We will stand with you in prayer."
        />

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          style={{
            background: "linear-gradient(155deg, #280808 0%, #160204 48%, #080002 100%)",
            border: "1px solid rgba(212,160,48,0.45)",
            borderRadius: "20px", padding: "32px",
            animation: "altarGlow 6s ease-in-out infinite",
            backdropFilter: "blur(18px)",
            position: "relative", overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(255,220,80,0.85), transparent)" }} />
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "70%", height: "90px", background: "radial-gradient(ellipse, rgba(220,140,30,0.16) 0%, rgba(180,60,10,0.07) 55%, transparent 78%)", filter: "blur(16px)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, left: 0, width: "100px", height: "80px", background: "radial-gradient(ellipse at 0% 0%, rgba(200,90,12,0.22) 0%, transparent 72%)", pointerEvents: "none" }} />

          <div className="space-y-5" style={{ position: "relative" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="font-body text-sm" style={{ color: "rgba(212,160,48,0.85)" }}>Name (optional)</Label>
                <Input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="font-body" style={INPUT_STYLE} />
              </div>
              <div className="space-y-2">
                <Label className="font-body text-sm" style={{ color: "rgba(212,160,48,0.85)" }}>Email (optional)</Label>
                <Input type="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="font-body" style={INPUT_STYLE} />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="font-body text-sm" style={{ color: "rgba(212,160,48,0.85)" }}>Prayer Category *</Label>
              <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                <SelectTrigger className="font-body" style={INPUT_STYLE}><SelectValue placeholder="Select a category" /></SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => <SelectItem key={cat} value={cat} className="font-body">{cat}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="font-body text-sm" style={{ color: "rgba(212,160,48,0.85)" }}>Prayer Request *</Label>
              <Textarea placeholder="Share your prayer request..." value={form.request_text} onChange={(e) => setForm({ ...form, request_text: e.target.value })} className="font-body min-h-[120px]" style={INPUT_STYLE} />
            </div>

            <div className="space-y-3">
              <Label className="font-body text-sm" style={{ color: "rgba(212,160,48,0.85)" }}>Visibility</Label>
              <RadioGroup value={form.visibility} onValueChange={(v) => setForm({ ...form, visibility: v })} className="flex gap-6">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="public" id="public" />
                  <Label htmlFor="public" className="font-body text-sm cursor-pointer" style={{ color: "rgba(205,175,130,0.88)" }}>Public</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="private" id="private" />
                  <Label htmlFor="private" className="font-body text-sm cursor-pointer" style={{ color: "rgba(205,175,130,0.88)" }}>Private</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-3">
              <Checkbox id="urgent" checked={form.urgent} onCheckedChange={(v) => setForm({ ...form, urgent: v })} />
              <Label htmlFor="urgent" className="font-body text-sm cursor-pointer" style={{ color: "rgba(205,175,130,0.88)" }}>This is an urgent prayer request</Label>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox id="consent" checked={consent} onCheckedChange={setConsent} />
              <Label htmlFor="consent" className="font-body text-xs cursor-pointer" style={{ color: "rgba(185,155,105,0.72)" }}>
                I understand that public requests may be visible after review. Private requests will only be seen by the ministry team.
              </Label>
            </div>

            <Button type="submit" disabled={!form.category || !form.request_text || !consent || loading}
              className="w-full font-heading text-sm tracking-wider py-6"
              style={{ background: "linear-gradient(135deg, #f2c94c 0%, #d4a030 55%, #a06818 100%)", color: "#050001", fontWeight: "800", boxShadow: "0 0 34px rgba(212,160,48,0.50), 0 4px 18px rgba(0,0,0,0.45)", border: "1px solid rgba(242,201,76,0.65)" }}
            >
              {loading ? <div className="w-5 h-5 border-2 border-[#060002]/30 border-t-[#060002] rounded-full animate-spin" />
                : <><Send className="w-4 h-4 mr-2" />Submit Prayer Request</>}
            </Button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}