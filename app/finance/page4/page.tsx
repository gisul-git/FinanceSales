"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Lock, Clock, Bot, BarChart2 } from "lucide-react";
import DemoLayout from "@/components/DemoLayout";

type Status = "completed" | "in-progress" | "locked";
interface Module { title: string; status: Status; progress?: number; source: string; hours: number; difficulty: string; }
interface Track  { title: string; gap: number; color: string; modules: Module[]; }

const tracks: Track[] = [
  {
    title: "Financial Analysis & FP&A", gap: 62, color: "#2dcc70",
    modules: [
      { title: "Advanced Excel for Finance",      status: "completed",   source: "Udemy",    hours: 8,  difficulty: "Beginner"     },
      { title: "FP&A Fundamentals",               status: "completed",   source: "Internal", hours: 6,  difficulty: "Intermediate" },
      { title: "Financial Modelling",             status: "in-progress", progress: 65, source: "Udemy", hours: 10, difficulty: "Advanced" },
      { title: "Scenario & Sensitivity Analysis", status: "locked",      source: "Internal", hours: 12, difficulty: "Advanced"     },
    ],
  },
  {
    title: "SAP & ERP Tools", gap: 50, color: "#60a5fa",
    modules: [
      { title: "SAP FI Module Basics",        status: "completed",   source: "Udemy",    hours: 7,  difficulty: "Beginner"     },
      { title: "SAP Controlling (CO)",        status: "in-progress", progress: 50, source: "Internal", hours: 9, difficulty: "Intermediate" },
      { title: "SAP Reporting & Dashboards",  status: "locked",      source: "Internal", hours: 6,  difficulty: "Intermediate" },
    ],
  },
  {
    title: "Risk & Compliance", gap: 70, color: "#f97316",
    modules: [
      { title: "Financial Risk Frameworks",   status: "completed",   source: "YouTube", hours: 5, difficulty: "Beginner"     },
      { title: "Regulatory Compliance India", status: "in-progress", progress: 35, source: "Udemy", hours: 8, difficulty: "Intermediate" },
    ],
  },
];

const sourceColors: Record<string, { bg: string; color: string }> = {
  Udemy:    { bg: "rgba(236,72,153,0.1)",  color: "#f9a8d4" },
  YouTube:  { bg: "rgba(239,68,68,0.1)",   color: "#fca5a5" },
  Internal: { bg: "rgba(45,204,112,0.1)",  color: "#2dcc70" },
};
const diffColors: Record<string, string> = {
  Beginner: "#2dcc70", Intermediate: "#f59e0b", Advanced: "#ef4444",
};

function ModuleCard({ mod }: { mod: Module }) {
  const done = mod.status === "completed";
  const prog = mod.status === "in-progress";
  const lock = mod.status === "locked";
  return (
    <div className="rounded-xl p-4 flex flex-col gap-3"
      style={{
        background: lock ? "rgba(0,0,0,0.02)" : "var(--bg-elevated)",
        border: `1px solid ${done ? "rgba(45,204,112,0.3)" : prog ? "rgba(245,158,11,0.3)" : "var(--border)"}`,
        opacity: lock ? 0.5 : 1,
      }}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {done && <CheckCircle2 size={15} style={{ color: "#2dcc70", flexShrink: 0 }} />}
          {prog && <div className="w-3.5 h-3.5 rounded-full border-2 flex-shrink-0" style={{ borderColor: "#f59e0b" }} />}
          {lock && <Lock size={14} style={{ color: "var(--border)", flexShrink: 0 }} />}
          <span className="text-sm font-medium"
            style={{ color: lock ? "var(--border)" : "var(--text-primary)", fontFamily: "Syne, sans-serif" }}>
            {mod.title}
          </span>
        </div>
        <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
          style={{ background: sourceColors[mod.source].bg, color: sourceColors[mod.source].color }}>
          {mod.source}
        </span>
      </div>
      {prog && mod.progress !== undefined && (
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
          style={{ background: "rgba(0,0,0,0.04)", color: diffColors[mod.difficulty] }}>
          {mod.difficulty}
        </span>
      </div>
    </div>
  );
}

const trackV = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };

export default function FinancePage4() {
  return (
    <DemoLayout persona="finance" currentPage={4}>
      <motion.div variants={stagger} initial="hidden" animate="show"
        className="max-w-5xl mx-auto flex flex-col gap-7 px-4"
        style={{ paddingTop: "88px", paddingBottom: "88px" }}>

        <motion.div variants={trackV} className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
            AI Learning Path
          </p>
          <h1 className="text-3xl font-bold leading-snug" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
            Aaptor AI identified <span style={{ color: "var(--accent-mint)" }}>3 critical skill gaps</span> and built Arjun's personalized finance learning path
          </h1>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Tracks */}
          <motion.div variants={stagger} className="flex-1 flex flex-col gap-5">
            {tracks.map((track) => (
              <motion.div key={track.title} variants={trackV} className="rounded-2xl p-5 flex flex-col gap-4"
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
                        style={{ background: mod.status === "completed" ? "#2dcc70" : mod.status === "in-progress" ? "#f59e0b" : "var(--border)" }} />
                      <ModuleCard mod={mod} />
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Sidebar */}
          <motion.div variants={trackV} className="flex flex-col gap-4 lg:w-64 xl:w-72">
            <div className="rounded-2xl p-5 flex flex-col gap-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="flex items-center gap-2">
                <BarChart2 size={15} style={{ color: "var(--accent-mint)" }} />
                <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Learning Stats</span>
              </div>
              {[
                { label: "Total Hours Logged", value: "52 hrs" },
                { label: "Avg Weekly",          value: "7.1 hrs" },
                { label: "Consistency Score",   value: "88%"     },
              ].map((s) => (
                <div key={s.label} className="flex justify-between items-center">
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</span>
                  <span className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-mint)" }}>{s.value}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-5 flex flex-col gap-3"
              style={{ background: "rgba(184,245,212,0.04)", border: "1px solid rgba(184,245,212,0.15)" }}>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(184,245,212,0.08)", border: "1px solid rgba(184,245,212,0.2)" }}>
                  <Bot size={14} style={{ color: "var(--accent-mint)" }} />
                </div>
                <span className="text-xs font-semibold" style={{ color: "var(--accent-mint)", fontFamily: "Syne, sans-serif" }}>Aaptor AI</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                At your pace, <span style={{ color: "var(--accent-mint)" }}>Financial Modelling completes in ~10 days</span>. Recommended: practice <span style={{ color: "#fbbf24" }}>1 model per day</span> from the template library.
              </p>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </DemoLayout>
  );
}
