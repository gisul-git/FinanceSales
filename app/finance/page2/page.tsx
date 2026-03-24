"use client";

import { motion } from "framer-motion";
import { Bot, FileText, Cpu } from "lucide-react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import DemoLayout from "@/components/DemoLayout";

const ringData = [{ name: "Score", value: 61, fill: "#f59e0b" }];

const breakdown = [
  { label: "Financial Acumen",      score: 72 },
  { label: "Analytical Depth",      score: 65 },
  { label: "Risk Awareness",        score: 48 },
  { label: "Communication Clarity", score: 58 },
];

function barColor(s: number) {
  if (s >= 70) return "#2dcc70";
  if (s >= 55) return "#f59e0b";
  return "#f97316";
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp  = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } } };

export default function FinancePage2() {
  return (
    <DemoLayout persona="finance" currentPage={2}>
      <motion.div variants={stagger} initial="hidden" animate="show"
        className="max-w-3xl mx-auto flex flex-col gap-5 px-4"
        style={{ paddingTop: "72px", paddingBottom: "72px" }}>

        {/* Header */}
        <motion.div variants={fadeUp} className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
            Assessment & AI Evaluation
          </p>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
            Arjun took the Finance Competency + Risk Assessment
          </h1>
          <div className="flex flex-wrap gap-2 mt-1">
            {["FP&A Assessment", "Compliance & Risk", "Excel Proficiency"].map((b) => (
              <span key={b} className="text-xs px-3 py-1 rounded-full font-medium"
                style={{ background: "rgba(245,158,11,0.1)", color: "#fbbf24", border: "1px solid rgba(245,158,11,0.3)" }}>
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-5">
          {/* LEFT — question card */}
          <motion.div variants={fadeUp} className="flex-1 flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="px-5 py-2.5 flex items-center gap-2"
                style={{ background: "rgba(245,158,11,0.08)", borderBottom: "1px solid rgba(245,158,11,0.2)" }}>
                <FileText size={13} style={{ color: "#fbbf24" }} />
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#fbbf24", fontFamily: "Syne, sans-serif" }}>
                  Case Study — Analytical
                </span>
              </div>
              <div className="p-5 flex flex-col gap-4">
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-primary)" }}>
                  Your company's Q3 revenue is 15% below forecast. The CFO asks you to present a recovery plan by EOD. Walk through your analysis approach and key actions.
                </p>
                <div className="rounded-xl p-4" style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)" }}>
                  <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
                    Arjun's Answer
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    I would pull the variance report from SAP, identify the top 3 underperforming business units, analyze cost vs revenue drivers, and present a reforecast with 2 scenarios — conservative and aggressive recovery.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — score + breakdown */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4 lg:w-64">
            {/* Score ring */}
            <div className="rounded-2xl p-5 flex flex-col items-center gap-2"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
                Assessment Score
              </p>
              <div style={{ width: 120, height: 120, position: "relative" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart cx="50%" cy="50%" innerRadius="65%" outerRadius="90%"
                    startAngle={90} endAngle={90 - 360 * (61 / 100)} data={ringData}>
                    <RadialBar dataKey="value" cornerRadius={6} background={{ fill: "var(--bg-elevated)" }} />
                  </RadialBarChart>
                </ResponsiveContainer>
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                  <span className="text-2xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "#f59e0b" }}>61</span>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>/ 100</span>
                </div>
              </div>

              {/* Breakdown bars */}
              <div className="w-full flex flex-col gap-3 mt-1">
                {breakdown.map((item, i) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <div className="flex justify-between text-xs">
                      <span style={{ color: "var(--text-secondary)" }}>{item.label}</span>
                      <span style={{ color: barColor(item.score), fontFamily: "Syne, sans-serif", fontWeight: 600 }}>{item.score}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
                      <motion.div className="h-full rounded-full"
                        initial={{ width: 0 }} animate={{ width: `${item.score}%` }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 + i * 0.07 }}
                        style={{ background: barColor(item.score) }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI bubble */}
            <div className="rounded-2xl p-4 flex flex-col gap-3"
              style={{ background: "rgba(184,245,212,0.04)", border: "1px solid rgba(184,245,212,0.15)" }}>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(184,245,212,0.08)", border: "1px solid rgba(184,245,212,0.2)" }}>
                  <Bot size={14} style={{ color: "var(--accent-mint)" }} />
                </div>
                <span className="text-xs font-semibold" style={{ color: "var(--accent-mint)", fontFamily: "Syne, sans-serif" }}>Aaptor AI</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Good use of variance analysis and scenario planning. However, your answer lacks specific KPIs to track recovery and doesn't address stakeholder communication strategy. Add a timeline with milestones.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["KPI Definition", "Stakeholder Reporting", "Timeline Planning"].map((pill) => (
                  <span key={pill} className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: "rgba(239,68,68,0.08)", color: "#fca5a5", border: "1px solid rgba(239,68,68,0.2)" }}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer note */}
        <motion.div variants={fadeUp} className="flex items-center gap-2 justify-center">
          <Cpu size={13} style={{ color: "var(--text-muted)" }} />
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            AI evaluated 44 responses in this assessment
          </p>
        </motion.div>

      </motion.div>
    </DemoLayout>
  );
}
