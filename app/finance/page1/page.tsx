"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Briefcase, MapPin, Clock, BookOpen, ClipboardX } from "lucide-react";
import DemoLayout from "@/components/DemoLayout";

const skills = [
  { label: "Financial Reporting", level: 45 },
  { label: "Excel & SAP",         level: 50 },
  { label: "Risk & Compliance",   level: 30 },
  { label: "Budget Forecasting",  level: 38 },
  { label: "Stakeholder Comms",   level: 42 },
  { label: "Leadership",          level: 35 },
];

function barColor(level: number) {
  if (level >= 50) return "#f59e0b";
  if (level >= 35) return "#f97316";
  return "#ef4444";
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp  = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } } };

export default function FinancePage1() {
  return (
    <DemoLayout persona="finance" currentPage={1}>
      <motion.div variants={stagger} initial="hidden" animate="show"
        className="max-w-2xl mx-auto flex flex-col gap-4 px-4"
        style={{ paddingTop: "72px", paddingBottom: "72px" }}>

        {/* Warning banner */}
        <motion.div variants={fadeUp} className="flex items-start gap-3 rounded-xl px-4 py-3"
          style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.3)" }}>
          <AlertTriangle size={15} className="flex-shrink-0 mt-0.5" style={{ color: "#ef4444" }} />
          <p className="text-sm leading-relaxed" style={{ color: "#fca5a5" }}>
            Arjun's financial competencies are unverified. No benchmark data available.
          </p>
        </motion.div>

        {/* Profile card */}
        <motion.div variants={fadeUp} className="rounded-2xl p-5 flex items-center gap-5"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
            style={{ fontFamily: "Syne, sans-serif", background: "rgba(184,245,212,0.08)", border: "2px solid var(--accent-mint)", color: "var(--accent-mint)" }}>
            AM
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
                Arjun Mehta
              </h1>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full tracking-widest uppercase"
                style={{ background: "rgba(245,158,11,0.12)", color: "#fbbf24", border: "1px solid rgba(245,158,11,0.35)", fontFamily: "Syne, sans-serif" }}>
                Before Aaptor
              </span>
            </div>
            <div className="flex flex-wrap gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
              <span className="flex items-center gap-1.5"><Briefcase size={11} />Finance Manager · TechCorp</span>
              <span className="flex items-center gap-1.5"><Clock size={11} />6 years experience</span>
              <span className="flex items-center gap-1.5"><MapPin size={11} />Mumbai, India</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl px-5 py-3 flex-shrink-0"
            style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", minWidth: "90px" }}>
            <span className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
              Aaptor Score
            </span>
            <span className="text-3xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "#374151" }}>—</span>
            <span className="text-xs mt-0.5" style={{ color: "#374151" }}>N/A</span>
          </div>
        </motion.div>

        {/* Skill snapshot */}
        <motion.div variants={fadeUp} className="rounded-2xl p-5"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
            Finance Competency Snapshot
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            {skills.map((item, i) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.label}</span>
                  <span className="text-sm font-semibold" style={{ color: barColor(item.level), fontFamily: "Syne, sans-serif" }}>
                    {item.level}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
                  <motion.div className="h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.level}%` }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 + i * 0.06 }}
                    style={{ background: barColor(item.level) }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Empty states */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div variants={fadeUp} className="rounded-2xl p-6 flex flex-col items-center justify-center gap-2.5 text-center"
            style={{ background: "var(--bg-card)", border: "1.5px dashed var(--border)", minHeight: "130px" }}>
            <BookOpen size={22} style={{ color: "var(--border)" }} />
            <p className="text-sm font-semibold" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
              No Learning History
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--border)" }}>
              No courses, certifications, or learning activity recorded.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-2xl p-6 flex flex-col items-center justify-center gap-2.5 text-center"
            style={{ background: "rgba(239,68,68,0.05)", border: "1.5px dashed rgba(239,68,68,0.35)", minHeight: "130px" }}>
            <ClipboardX size={22} style={{ color: "#f87171" }} />
            <p className="text-sm font-semibold" style={{ color: "#ef4444", fontFamily: "Syne, sans-serif" }}>
              Assessment Not Taken
            </p>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Finance competencies cannot be benchmarked without an assessment.
            </p>
          </motion.div>
        </div>

      </motion.div>
    </DemoLayout>
  );
}
