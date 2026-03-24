"use client";

import { motion } from "framer-motion";
import { TrendingUp, Briefcase, MapPin, Clock, Award, BookOpen, ClipboardList, ArrowUp } from "lucide-react";
import DemoLayout from "@/components/DemoLayout";

const skillsBefore = [
  { label: "Financial Reporting", before: 45, after: 82 },
  { label: "Excel & SAP",         before: 50, after: 90 },
  { label: "Risk & Compliance",   before: 30, after: 76 },
  { label: "Budget Forecasting",  before: 38, after: 80 },
  { label: "Stakeholder Comms",   before: 42, after: 78 },
  { label: "Leadership",          before: 35, after: 74 },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp  = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } } };

export default function FinancePage6() {
  return (
    <DemoLayout persona="finance" currentPage={6}>
      <motion.div variants={stagger} initial="hidden" animate="show"
        className="max-w-3xl mx-auto flex flex-col gap-5 px-4"
        style={{ paddingTop: "72px", paddingBottom: "72px" }}>

        {/* Transformation banner */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 rounded-xl px-4 py-3"
          style={{ background: "rgba(45,204,112,0.08)", border: "1px solid rgba(45,204,112,0.25)" }}>
          <TrendingUp size={16} style={{ color: "var(--accent-green)" }} />
          <p className="text-sm font-medium" style={{ color: "var(--accent-mint)" }}>
            Arjun improved his Aaptor Score by <strong>336 points</strong> in 6 months
          </p>
        </motion.div>

        {/* Profile card */}
        <motion.div variants={fadeUp} className="rounded-2xl p-5 flex items-center gap-5"
          style={{ background: "var(--bg-card)", border: "1px solid rgba(45,204,112,0.2)" }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
            style={{ fontFamily: "Syne, sans-serif", background: "rgba(45,204,112,0.1)", border: "2px solid var(--accent-mint)", color: "var(--accent-mint)" }}>
            AM
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
                Arjun Mehta
              </h1>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full tracking-widest uppercase"
                style={{ background: "rgba(45,204,112,0.1)", color: "var(--accent-mint)", border: "1px solid rgba(45,204,112,0.3)", fontFamily: "Syne, sans-serif" }}>
                After Aaptor
              </span>
            </div>
            <div className="flex flex-wrap gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
              <span className="flex items-center gap-1.5"><Briefcase size={11} />Finance Manager · TechCorp</span>
              <span className="flex items-center gap-1.5"><Clock size={11} />6 years experience</span>
              <span className="flex items-center gap-1.5"><MapPin size={11} />Mumbai, India</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl px-5 py-3 flex-shrink-0"
            style={{ background: "rgba(45,204,112,0.06)", border: "1px solid rgba(45,204,112,0.25)", minWidth: "100px" }}>
            <span className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
              Aaptor Score
            </span>
            <span className="text-3xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-mint)" }}>
              738
            </span>
            <span className="text-xs mt-0.5 flex items-center gap-1" style={{ color: "var(--accent-green)" }}>
              <ArrowUp size={10} />+336 pts
            </span>
          </div>
        </motion.div>

        {/* Skill snapshot */}
        <motion.div variants={fadeUp} className="rounded-2xl p-5"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
            Finance Competency Snapshot
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            {skillsBefore.map((item, i) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.label}</span>
                  <span className="text-sm font-semibold" style={{ color: "var(--accent-mint)", fontFamily: "Syne, sans-serif" }}>
                    {item.after}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
                  <motion.div className="h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${item.after}%` }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 + i * 0.06 }}
                    style={{ background: "linear-gradient(90deg, var(--accent-green), var(--accent-mint))" }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info cards */}
        <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-2xl p-4 flex flex-col gap-2"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <div className="flex items-center gap-2">
              <Award size={14} style={{ color: "var(--accent-mint)" }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Certifications</span>
            </div>
            <p className="text-sm" style={{ color: "var(--text-primary)" }}>CFA Level 1</p>
            <p className="text-sm" style={{ color: "var(--text-primary)" }}>SAP FI Certified</p>
          </div>
          <div className="rounded-2xl p-4 flex flex-col gap-2"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <div className="flex items-center gap-2">
              <BookOpen size={14} style={{ color: "var(--accent-mint)" }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Learning</span>
            </div>
            <p className="text-sm" style={{ color: "var(--text-primary)" }}>8 courses completed</p>
            <p className="text-sm" style={{ color: "var(--text-primary)" }}>52 hrs · 6 months</p>
          </div>
          <div className="rounded-2xl p-4 flex flex-col gap-2"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <div className="flex items-center gap-2">
              <ClipboardList size={14} style={{ color: "var(--accent-mint)" }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Assessments</span>
            </div>
            <p className="text-sm" style={{ color: "var(--text-primary)" }}>4 taken</p>
            <p className="text-sm" style={{ color: "var(--text-primary)" }}>Avg score: 78</p>
          </div>
        </motion.div>

        {/* Before vs After table */}
        <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid var(--border)" }}>
          <div className="grid grid-cols-4 px-4 py-2.5"
            style={{ background: "var(--bg-elevated)", borderBottom: "1px solid var(--border)" }}>
            {["Skill", "Before", "After", "Change"].map((h) => (
              <span key={h} className="text-xs font-bold uppercase tracking-widest"
                style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>{h}</span>
            ))}
          </div>
          {skillsBefore.map((row, i) => (
            <div key={row.label} className="grid grid-cols-4 px-4 py-3 border-b last:border-b-0"
              style={{ borderColor: "var(--border)", background: i % 2 === 0 ? "var(--bg-card)" : "transparent" }}>
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{row.label}</span>
              <span className="text-sm font-semibold" style={{ color: "#f59e0b", fontFamily: "Syne, sans-serif" }}>{row.before}%</span>
              <span className="text-sm font-semibold" style={{ color: "var(--accent-mint)", fontFamily: "Syne, sans-serif" }}>{row.after}%</span>
              <span className="text-sm font-bold flex items-center gap-1" style={{ color: "var(--accent-green)", fontFamily: "Syne, sans-serif" }}>
                <ArrowUp size={11} />+{row.after - row.before}%
              </span>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </DemoLayout>
  );
}
