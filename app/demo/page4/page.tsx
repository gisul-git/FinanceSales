"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Lock, Clock, Bot, BarChart2 } from "lucide-react";

type ModuleStatus = "completed" | "in-progress" | "locked";

interface Module {
  title: string;
  status: ModuleStatus;
  progress?: number;
  source: string;
  hours: number;
  difficulty: string;
}

interface Track {
  title: string;
  gap: number;
  color: string;
  modules: Module[];
}

const tracks: Track[] = [
  {
    title: "DSA Mastery",
    gap: 68,
    color: "#0d7a45",
    modules: [
      { title: "Arrays & Sliding Window", status: "completed", source: "Internal", hours: 6, difficulty: "Beginner" },
      { title: "Trees & Graphs", status: "completed", source: "Udemy", hours: 8, difficulty: "Intermediate" },
      { title: "Dynamic Programming", status: "in-progress", progress: 60, source: "YouTube", hours: 10, difficulty: "Advanced" },
      { title: "Advanced Algorithms", status: "locked", source: "Internal", hours: 12, difficulty: "Advanced" },
    ],
  },
  {
    title: "Cloud Fundamentals",
    gap: 80,
    color: "#67e8f9",
    modules: [
      { title: "AWS Core Services", status: "completed", source: "Udemy", hours: 7, difficulty: "Beginner" },
      { title: "Serverless Architecture", status: "in-progress", progress: 30, source: "Internal", hours: 9, difficulty: "Intermediate" },
      { title: "Cloud Security", status: "locked", source: "YouTube", hours: 8, difficulty: "Intermediate" },
    ],
  },
  {
    title: "System Design",
    gap: 72,
    color: "#a78bfa",
    modules: [
      { title: "Scalability Basics", status: "completed", source: "YouTube", hours: 5, difficulty: "Beginner" },
      { title: "Database Design", status: "in-progress", progress: 45, source: "Udemy", hours: 8, difficulty: "Intermediate" },
    ],
  },
];

const sourceColors: Record<string, { bg: string; color: string }> = {
  Udemy:    { bg: "rgba(236,72,153,0.1)",  color: "#f9a8d4" },
  YouTube:  { bg: "rgba(239,68,68,0.1)",   color: "#fca5a5" },
  Internal: { bg: "rgba(13,122,69,0.1)",   color: "#0d7a45" },
};

const diffColors: Record<string, string> = {
  Beginner:     "#16a34a",
  Intermediate: "#f59e0b",
  Advanced:     "#ef4444",
};

function ModuleCard({ mod }: { mod: Module }) {
  const isCompleted  = mod.status === "completed";
  const isInProgress = mod.status === "in-progress";
  const isLocked     = mod.status === "locked";
  return (
    <div
      className="rounded-xl p-4 flex flex-col gap-3"
      style={{
        background: isLocked ? "rgba(255,255,255,0.02)" : "var(--bg-elevated)",
        border: `1px solid ${isCompleted ? "rgba(45,204,112,0.3)" : isInProgress ? "rgba(245,158,11,0.3)" : "var(--border)"}`,
        opacity: isLocked ? 0.55 : 1,
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {isCompleted  && <CheckCircle2 size={15} style={{ color: "#16a34a", flexShrink: 0 }} />}
          {isInProgress && <div className="w-3.5 h-3.5 rounded-full border-2 flex-shrink-0" style={{ borderColor: "#f59e0b" }} />}
          {isLocked     && <Lock size={14} style={{ color: "#4b5563", flexShrink: 0 }} />}
          <span className="text-sm font-medium" style={{ color: isLocked ? "#4b5563" : "var(--text-primary)", fontFamily: "Syne, sans-serif" }}>
            {mod.title}
          </span>
        </div>
        <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
          style={{ background: sourceColors[mod.source].bg, color: sourceColors[mod.source].color }}>
          {mod.source}
        </span>
      </div>
      {isInProgress && mod.progress !== undefined && (
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg-card)" }}>
            <motion.div className="h-full rounded-full"
              initial={{ width: 0 }} animate={{ width: `${mod.progress}%` }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              style={{ background: "#f59e0b" }} />
          </div>
          <span className="text-xs font-semibold" style={{ color: "#f59e0b", fontFamily: "Syne, sans-serif" }}>{mod.progress}%</span>
        </div>
      )}
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1 text-xs" style={{ color: "var(--text-muted)" }}>
          <Clock size={11} /> {mod.hours}h
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full"
          style={{ background: "rgba(255,255,255,0.04)", color: diffColors[mod.difficulty] }}>
          {mod.difficulty}
        </span>
      </div>
    </div>
  );
}

const trackVariant = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };

export default function Page4() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show"
      className="max-w-5xl mx-auto flex flex-col gap-7 px-4 py-8"
      style={{ paddingTop: "88px", paddingBottom: "88px" }}>
      <motion.div variants={trackVariant} className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
          AI Learning Path
        </p>
        <h1 className="text-3xl font-bold leading-snug" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
          Aaptor AI identified{" "}
          <span style={{ color: "var(--accent-mint)" }}>3 critical skill gaps</span>{" "}
          and built a personalized learning path
        </h1>
      </motion.div>
      <div className="flex flex-col lg:flex-row gap-6">
        <motion.div variants={stagger} className="flex-1 flex flex-col gap-5">
          {tracks.map((track) => (
            <motion.div key={track.title} variants={trackVariant}
              className="rounded-2xl p-5 flex flex-col gap-4"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: track.color }} />
                  <span className="font-bold text-base" style={{ fontFamily: "Syne, sans-serif", color: track.color }}>{track.title}</span>
                </div>
                <span className="text-xs px-3 py-1 rounded-full font-semibold"
                  style={{ background: "rgba(239,68,68,0.08)", color: "#fca5a5", border: "1px solid rgba(239,68,68,0.2)", fontFamily: "Syne, sans-serif" }}>
                  Gap: {track.gap}%
                </span>
              </div>
              <div className="flex flex-col gap-2 pl-1 border-l-2" style={{ borderColor: "var(--border)" }}>
                {track.modules.map((mod) => (
                  <div key={mod.title} className="pl-4 relative">
                    <div className="absolute left-0 top-4 w-2 h-2 rounded-full -translate-x-[5px]"
                      style={{ background: mod.status === "completed" ? "#16a34a" : mod.status === "in-progress" ? "#f59e0b" : "var(--border)" }} />
                    <ModuleCard mod={mod} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div variants={trackVariant} className="flex flex-col gap-4 lg:w-64 xl:w-72">
          <div className="rounded-2xl p-5 flex flex-col gap-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <div className="flex items-center gap-2">
              <BarChart2 size={15} style={{ color: "var(--accent-mint)" }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Learning Stats</span>
            </div>
            {[
              { label: "Total Hours Logged", value: "47 hrs" },
              { label: "Avg Weekly", value: "6.2 hrs" },
              { label: "Consistency Score", value: "84%" },
            ].map((s) => (
              <div key={s.label} className="flex justify-between items-center">
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</span>
                <span className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-mint)" }}>{s.value}</span>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-5 flex flex-col gap-3"
            style={{ background: "rgba(13,122,69,0.06)", border: "1px solid rgba(13,122,69,0.2)" }}>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(184,245,212,0.1)", border: "1px solid rgba(184,245,212,0.25)" }}>
                <Bot size={14} style={{ color: "var(--accent-mint)" }} />
              </div>
              <span className="text-xs font-semibold" style={{ color: "var(--accent-mint)", fontFamily: "Syne, sans-serif" }}>Aaptor AI</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Based on your pace, you&apos;ll complete{" "}
              <span style={{ color: "var(--accent-mint)" }}>DSA Mastery in ~3 weeks</span>.
              Recommended: increase daily practice to{" "}
              <span style={{ color: "#fbbf24" }}>45 min</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}