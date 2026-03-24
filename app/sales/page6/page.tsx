"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Award, BookOpen, ClipboardCheck, TrendingUp, ArrowUp, Shield, BarChart2 } from "lucide-react";
import DemoLayout from "@/components/DemoLayout";

const skills = [
  { label: "Product Knowledge",           before: 48, after: 85 },
  { label: "Negotiation & Closing",       before: 35, after: 80 },
  { label: "CRM Proficiency",             before: 40, after: 88 },
  { label: "Communication & Presentation",before: 52, after: 86 },
  { label: "Objection Handling",          before: 30, after: 78 },
  { label: "Pipeline Management",         before: 38, after: 84 },
];

function useCountUp(target: number, duration = 1200, delay = 0) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const step = Math.ceil(target / (duration / 16));
      const timer = setInterval(() => {
        start += step;
        if (start >= target) { setCount(target); clearInterval(timer); }
        else setCount(start);
      }, 16);
      return () => clearInterval(timer);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, duration, delay]);
  return count;
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp  = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } } };

export default function SalesPage6() {
  const score = useCountUp(726, 1400, 200);

  return (
    <DemoLayout persona="sales" currentPage={6}>
      <motion.div variants={stagger} initial="hidden" animate="show"
        className="max-w-2xl mx-auto flex flex-col gap-4 px-4"
        style={{ paddingTop: "72px", paddingBottom: "72px" }}>

        <motion.div variants={fadeUp} className="flex items-start gap-3 rounded-xl px-4 py-3"
          style={{ background: "rgba(45,204,112,0.07)", border: "1px solid rgba(45,204,112,0.3)", boxShadow: "0 0 24px rgba(45,204,112,0.06)" }}>
          <TrendingUp size={15} className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent-green)" }} />
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Neha improved her Aaptor Score by <span style={{ color: "var(--accent-glow)", fontWeight: 600 }}>352 points</span> in 6 months — now in the <span style={{ color: "var(--accent-mint)", fontWeight: 600 }}>Top 15%</span> of Sales professionals in her cohort.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="rounded-2xl p-5 flex items-center gap-5"
          style={{ background: "var(--bg-card)", border: "1px solid rgba(45,204,112,0.25)" }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
            style={{ fontFamily: "Syne, sans-serif", background: "var(--bg-elevated)", border: "2px solid var(--accent-green)", color: "var(--accent-mint)", boxShadow: "0 0 20px rgba(45,204,112,0.18)" }}>
            NK
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 className="text-xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>Neha Kapoor</h1>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full tracking-widest uppercase"
                style={{ background: "rgba(45,204,112,0.1)", color: "var(--accent-mint)", border: "1px solid rgba(45,204,112,0.35)", fontFamily: "Syne, sans-serif" }}>
                After Aaptor
              </span>
            </div>
            <div className="flex flex-wrap gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
              <span className="flex items-center gap-1.5"><Briefcase size={11} />Sales Executive · TechCorp</span>
              <span className="flex items-center gap-1.5"><Clock size={11} />3 years experience</span>
              <span className="flex items-center gap-1.5"><MapPin size={11} />Pune, India</span>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl px-5 py-3 flex-shrink-0"
            style={{ background: "rgba(45,204,112,0.06)", border: "1px solid rgba(45,204,112,0.3)", boxShadow: "0 0 20px rgba(45,204,112,0.1)", minWidth: "90px" }}>
            <span className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Aaptor Score</span>
            <span className="text-3xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-mint)" }}>{score}</span>
            <span className="text-xs mt-0.5" style={{ color: "var(--accent-green)" }}>+352 pts</span>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Sales Competency Snapshot</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            {skills.map((item, i) => (
              <div key={item.label} className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.label}</span>
                  <span className="text-sm font-semibold" style={{ color: "var(--accent-mint)", fontFamily: "Syne, sans-serif" }}>{item.after}%</span>
                </div>
                <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
                  <motion.div className="h-full rounded-full"
                    initial={{ width: 0 }} animate={{ width: `${item.after}%` }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 + i * 0.06 }}
                    style={{ background: "linear-gradient(90deg, var(--accent-green), var(--accent-mint))" }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <motion.div variants={fadeUp} className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <div className="flex items-center gap-2">
              <Award size={14} style={{ color: "var(--accent-mint)" }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Certifications</span>
            </div>
            {[{ label: "Salesforce Certified", icon: <BarChart2 size={13} /> }, { label: "HubSpot Sales Certified", icon: <Shield size={13} /> }].map((c) => (
              <div key={c.label} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <span style={{ color: "var(--accent-mint)" }}>{c.icon}</span>{c.label}
              </div>
            ))}
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-2xl p-5 flex flex-col gap-2" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <div className="flex items-center gap-2">
              <BookOpen size={14} style={{ color: "var(--accent-mint)" }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Learning History</span>
            </div>
            <p className="text-sm font-semibold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>7 courses completed</p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>44 hrs · 6 months</p>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-2xl p-5 flex flex-col gap-2" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <div className="flex items-center gap-2">
              <ClipboardCheck size={14} style={{ color: "var(--accent-mint)" }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Assessments</span>
            </div>
            <p className="text-sm font-semibold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>4 assessments taken</p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>Avg score: 76</p>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <div className="px-5 py-3 flex items-center gap-2" style={{ background: "var(--bg-elevated)", borderBottom: "1px solid var(--border)" }}>
            <ArrowUp size={14} style={{ color: "var(--accent-mint)" }} />
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Before vs After</span>
          </div>
          <div className="grid grid-cols-4 px-5 py-2 text-xs uppercase tracking-widest"
            style={{ background: "var(--bg-card)", color: "var(--text-muted)", fontFamily: "Syne, sans-serif", borderBottom: "1px solid var(--border)" }}>
            <span>Competency</span><span className="text-center">Before</span><span className="text-center">After</span><span className="text-center">Change</span>
          </div>
          {skills.map((item, i) => {
            const delta = item.after - item.before;
            return (
              <motion.div key={item.label}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, ease: "easeOut", delay: 0.3 + i * 0.07 }}
                className="grid grid-cols-4 px-5 py-3 items-center text-sm"
                style={{ background: i % 2 === 0 ? "var(--bg-card)" : "var(--bg-secondary)", borderBottom: i < skills.length - 1 ? "1px solid var(--border)" : "none" }}>
                <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{item.label}</span>
                <span className="text-center font-semibold" style={{ color: "#f97316", fontFamily: "Syne, sans-serif" }}>{item.before}%</span>
                <span className="text-center font-semibold" style={{ color: "var(--accent-mint)", fontFamily: "Syne, sans-serif" }}>{item.after}%</span>
                <span className="text-center font-bold flex items-center justify-center gap-1" style={{ color: "var(--accent-green)", fontFamily: "Syne, sans-serif" }}>
                  <ArrowUp size={12} />+{delta}%
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </DemoLayout>
  );
}
