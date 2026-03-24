"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Briefcase, MapPin, Clock, BookOpen, ClipboardX } from "lucide-react";

const beforeSkills = [
  { skill: "React",         level: 65 },
  { skill: "Node.js",       level: 58 },
  { skill: "DSA",           level: 32 },
  { skill: "System Design", level: 28 },
  { skill: "Cloud",         level: 20 },
  { skill: "DevOps",        level: 15 },
];

function skillColor(level: number) {
  if (level >= 60) return "#f59e0b";
  if (level >= 30) return "#f97316";
  return "#ef4444";
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const card: React.CSSProperties = {
  background: "var(--bg-card)",
  border: "1px solid var(--border)",
  borderRadius: "16px",
  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
};

export default function Page1() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="max-w-2xl mx-auto flex flex-col gap-4 px-4"
      style={{ paddingTop: "72px", paddingBottom: "72px" }}
    >
      <motion.div
        variants={fadeUp}
        className="flex items-center gap-3 rounded-xl px-4 py-3"
        style={{ background: "#fff5f5", border: "1px solid #fecaca" }}
      >
        <AlertTriangle size={15} className="flex-shrink-0" style={{ color: "#ef4444" }} />
        <p className="text-sm" style={{ color: "#b91c1c" }}>
          This employee&apos;s capabilities are unverified. No benchmark data available.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="p-5 flex items-center gap-5" style={card}>
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
          style={{ fontFamily: "Syne, sans-serif", background: "#fef3c7", border: "2px solid #fcd34d", color: "#92400e" }}
        >
          RS
        </div>
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h1 className="text-xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
              Rahul Sharma
            </h1>
            <span
              className="text-xs font-semibold px-2.5 py-0.5 rounded-full tracking-wide uppercase"
              style={{ background: "#fffbeb", color: "#d97706", border: "1px solid #fcd34d", fontFamily: "Syne, sans-serif" }}
            >
              Before Aaptor
            </span>
          </div>
          <div className="flex flex-wrap gap-3 text-xs" style={{ color: "var(--text-muted)" }}>
            <span className="flex items-center gap-1"><Briefcase size={11} />Software Developer · TechCorp</span>
            <span className="flex items-center gap-1"><Clock size={11} />4 years experience</span>
            <span className="flex items-center gap-1"><MapPin size={11} />Bangalore, India</span>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-xl px-5 py-3 flex-shrink-0"
          style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", minWidth: "90px" }}
        >
          <span className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
            Aaptor Score
          </span>
          <span className="text-3xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "#9ca3af" }}>—</span>
          <span className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>N/A</span>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="p-5" style={card}>
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
          Skill Snapshot
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {beforeSkills.map((item) => (
            <div key={item.skill} className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <span className="text-sm" style={{ color: "var(--text-primary)" }}>{item.skill}</span>
                <span className="text-sm font-semibold" style={{ color: skillColor(item.level), fontFamily: "Syne, sans-serif" }}>
                  {item.level}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
                <motion.div
                  className="h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.level}%` }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                  style={{ background: skillColor(item.level) }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-4">
        <motion.div
          variants={fadeUp}
          className="rounded-2xl p-6 flex flex-col items-center justify-center gap-2.5 text-center"
          style={{ background: "var(--bg-card)", border: "1.5px dashed var(--border)", minHeight: "130px" }}
        >
          <BookOpen size={22} style={{ color: "#9ca3af" }} />
          <p className="text-sm font-semibold" style={{ color: "#6b7280", fontFamily: "Syne, sans-serif" }}>No Learning History</p>
          <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>No courses, certifications, or learning activity recorded.</p>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="rounded-2xl p-6 flex flex-col items-center justify-center gap-2.5 text-center"
          style={{ background: "#fff8f5", border: "1.5px dashed #fca5a5", minHeight: "130px" }}
        >
          <ClipboardX size={22} style={{ color: "#f87171" }} />
          <p className="text-sm font-semibold" style={{ color: "#ef4444", fontFamily: "Syne, sans-serif" }}>Assessment Not Taken</p>
          <p className="text-xs leading-relaxed" style={{ color: "#9ca3af" }}>Skill benchmarks cannot be verified without an assessment.</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
