"use client";

import { motion } from "framer-motion";
import { Bot, Zap, AlertCircle, FileText } from "lucide-react";
import DemoLayout from "@/components/DemoLayout";

const scoreBreakdown = [
  { label: "Situational Judgement",  value: 62 },
  { label: "Communication Clarity",  value: 70 },
  { label: "Objection Handling",     value: 42 },
  { label: "Closing Technique",      value: 50 },
];

const improvementTags = ["Structured Closing", "Objection Reframing", "Follow-up Cadence"];

const nehaAnswer =
  "I would acknowledge the prospect's concern about pricing, highlight the ROI they'd get from our product, and offer a limited-time discount to create urgency. If they still hesitate, I'd schedule a follow-up call with their decision-maker.";

function scoreColor(v: number) {
  if (v >= 65) return "#f59e0b";
  return "#ef4444";
}

function RingScore({ score }: { score: number }) {
  const r = 52, circ = 2 * Math.PI * r;
  return (
    <div className="relative flex items-center justify-center" style={{ width: 136, height: 136 }}>
      <svg width="136" height="136" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="68" cy="68" r={r} fill="none" stroke="var(--bg-elevated)" strokeWidth="10" />
        <motion.circle cx="68" cy="68" r={r} fill="none"
          stroke="#f59e0b" strokeWidth="10" strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: circ - (56 / 100) * circ }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }} />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "#f59e0b" }}>56</span>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>/ 100</span>
      </div>
    </div>
  );
}

export default function SalesPage2() {
  return (
    <DemoLayout persona="sales" currentPage={2}>
      <div className="max-w-4xl mx-auto flex flex-col gap-7 px-4" style={{ paddingTop: "88px", paddingBottom: "88px" }}>
        <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Assessment & AI Evaluation</p>
          <h1 className="text-3xl font-bold leading-snug" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
            Neha took the Sales Competency + CRM Assessment
          </h1>
          <div className="flex flex-wrap gap-2 mt-1">
            {["Sales Fundamentals", "Negotiation", "CRM Proficiency"].map((badge) => (
              <span key={badge} className="text-xs font-medium px-3 py-1 rounded-full"
                style={{ background: "rgba(184,245,212,0.08)", color: "var(--accent-mint)", border: "1px solid rgba(184,245,212,0.2)", fontFamily: "Syne, sans-serif" }}>
                {badge}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <motion.div initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }} className="flex flex-col gap-4">
            <div className="rounded-2xl p-5 flex flex-col gap-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <span className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded self-start"
                style={{ background: "rgba(245,158,11,0.1)", color: "#fbbf24", fontFamily: "Syne, sans-serif", border: "1px solid rgba(245,158,11,0.2)" }}>
                Scenario-Based — Role Play
              </span>
              <p className="text-base font-medium leading-relaxed" style={{ color: "var(--text-primary)", fontFamily: "Syne, sans-serif" }}>
                A prospect says "Your product is too expensive compared to competitors." You're in the final stage of a deal worth ₹8L. How do you respond and close?
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              <div className="flex items-center justify-between px-4 py-2.5" style={{ background: "var(--bg-elevated)", borderBottom: "1px solid var(--border)" }}>
                <div className="flex items-center gap-2">
                  <FileText size={13} style={{ color: "var(--text-muted)" }} />
                  <span className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>neha_response.txt</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(245,158,11,0.1)", color: "#fbbf24" }}>Partial — weak close</span>
              </div>
              <div className="p-5" style={{ background: "var(--bg-secondary)" }}>
                <p className="text-sm leading-8 pl-4"
                  style={{ color: "var(--text-secondary)", fontFamily: "DM Sans, sans-serif", backgroundImage: "repeating-linear-gradient(transparent, transparent 31px, rgba(45,204,112,0.06) 31px, rgba(45,204,112,0.06) 32px)", lineHeight: "2rem" }}>
                  {nehaAnswer}
                </p>
                <div className="flex items-center gap-2 mt-4 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                  <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: "rgba(245,158,11,0.12)", color: "#fbbf24", fontFamily: "Syne, sans-serif" }}>N</div>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>Neha Kapoor · Submitted Feb 2025</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }} className="flex flex-col gap-4">
            <div className="rounded-2xl p-5 flex flex-col gap-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Overall AI Score</p>
                  <RingScore score={56} />
                </div>
                <div className="flex-1 flex flex-col gap-3 min-w-[160px]">
                  {scoreBreakdown.map((item) => (
                    <div key={item.label} className="flex flex-col gap-1">
                      <div className="flex justify-between text-xs">
                        <span style={{ color: "var(--text-secondary)" }}>{item.label}</span>
                        <span style={{ color: scoreColor(item.value), fontFamily: "Syne, sans-serif", fontWeight: 600 }}>{item.value}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
                        <motion.div className="h-full rounded-full"
                          initial={{ width: 0 }} animate={{ width: `${item.value}%` }}
                          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                          style={{ background: scoreColor(item.value) }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: "rgba(184,245,212,0.04)", border: "1px solid rgba(184,245,212,0.15)" }}>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(184,245,212,0.08)", border: "1px solid rgba(184,245,212,0.2)" }}>
                  <Bot size={14} style={{ color: "var(--accent-mint)" }} />
                </div>
                <span className="text-xs font-semibold" style={{ color: "var(--accent-mint)", fontFamily: "Syne, sans-serif" }}>Aaptor AI</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Your answer shows good <span style={{ color: "var(--accent-mint)" }}>value articulation</span> but lacks a structured closing framework. Consider using a <span style={{ color: "#fbbf24" }}>SPIN or MEDDIC approach</span>, defining clear <span style={{ color: "#fbbf24" }}>next steps</span>, and preparing a formal ROI comparison document.
              </p>
            </div>

            <div className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="flex items-center gap-2">
                <AlertCircle size={14} style={{ color: "#f59e0b" }} />
                <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Areas of Improvement</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {improvementTags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(239,68,68,0.08)", color: "#fca5a5", border: "1px solid rgba(239,68,68,0.25)" }}>{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.7 }}
          className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
          <Zap size={13} />
          <span className="text-xs">AI evaluated 61 responses in this assessment</span>
        </motion.div>
      </div>
    </DemoLayout>
  );
}
