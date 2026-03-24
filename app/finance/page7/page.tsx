"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, ArrowRight, TrendingUp, BarChart2, ClipboardList, BookOpen, Award, Clock, Zap, Trophy, CheckCircle2, Shield } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, ReferenceLine, Legend } from "recharts";
import DemoLayout from "@/components/DemoLayout";

const skillGrowth = [
  { skill: "Fin. Reporting", before: 45, after: 82 },
  { skill: "Excel & SAP",    before: 50, after: 90 },
  { skill: "Risk & Compl.",  before: 30, after: 76 },
  { skill: "Forecasting",    before: 38, after: 80 },
  { skill: "Stakeholder",    before: 42, after: 78 },
  { skill: "Leadership",     before: 35, after: 74 },
];

const scoreJourney = [
  { month: "Month 1", score: 402 },
  { month: "Month 2", score: 478 },
  { month: "Month 3", score: 545 },
  { month: "Month 4", score: 610 },
  { month: "Month 5", score: 680 },
  { month: "Month 6", score: 738 },
];

const assessments = [
  { name: "Finance Competency", score: 61, month: "Month 1", color: "#f59e0b" },
  { name: "Risk Assessment",    score: 68, month: "Month 2", color: "#f97316" },
  { name: "Retest",             score: 75, month: "Month 4", color: "#16a34a" },
  { name: "Final Review",       score: 84, month: "Month 6", color: "#2dcc70" },
];

const metricRows: { icon: React.ReactNode; label: string; before: string; after: string; highlight?: boolean }[] = [
  { icon: <BarChart2 size={16} />,     label: "Aaptor Score",       before: "402",     after: "738",      highlight: true },
  { icon: <ClipboardList size={16} />, label: "Assessments Taken",  before: "0",       after: "4"         },
  { icon: <BookOpen size={16} />,      label: "Courses Completed",  before: "0",       after: "8"         },
  { icon: <Award size={16} />,         label: "Certifications",     before: "0",       after: "2"         },
  { icon: <TrendingUp size={16} />,    label: "Forecast Accuracy",  before: "72%",     after: "89%"       },
  { icon: <BarChart2 size={16} />,     label: "Reports / Month",    before: "8",       after: "34"        },
  { icon: <BookOpen size={16} />,      label: "Learning Hours",     before: "0 hrs",   after: "52 hrs"    },
  { icon: <Zap size={16} />,           label: "Active Streak",      before: "—",       after: "24 days"   },
];

function useCountUp(target: number, duration = 1200, active = true) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

const fadeUp  = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const slideUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } } };

function ScoreCell({ value, color }: { value: string; color: string }) {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true });
  const raw    = value.replace(/\D/g, "");
  const num    = parseInt(raw, 10);
  const isNum  = !isNaN(num) && value !== "—";
  const counted = useCountUp(isNum ? num : 0, 1000, inView && isNum);
  let display = value;
  if (isNum) {
    if (value.includes("hrs"))  display = `${counted} hrs`;
    else if (value.includes("days")) display = `${counted} days`;
    else if (value.includes("%")) display = `${counted}%`;
    else display = `${counted}`;
  }
  return <span ref={ref} className="text-2xl font-bold" style={{ fontFamily: "Syne, sans-serif", color }}>{display}</span>;
}

function AssessmentRing({ score, color }: { score: number; color: string }) {
  const r = 28, circ = 2 * Math.PI * r;
  return (
    <div className="relative flex items-center justify-center" style={{ width: 72, height: 72 }}>
      <svg width="72" height="72" style={{ transform: "rotate(-90deg)", position: "absolute" }}>
        <circle cx="36" cy="36" r={r} fill="none" stroke="var(--bg-elevated)" strokeWidth="6" />
        <motion.circle cx="36" cy="36" r={r} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: circ - (score / 100) * circ }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }} />
      </svg>
      <span className="text-base font-bold z-10" style={{ fontFamily: "Syne, sans-serif", color }}>{score}</span>
    </div>
  );
}

const ChartTooltip = ({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg px-3 py-2 text-xs" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)" }}>
      <p className="font-semibold mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: i === 0 ? "#f97316" : "#2dcc70" }}>{i === 0 ? "Before" : "After"}: {p.value}%</p>
      ))}
    </div>
  );
};

export default function FinancePage7() {
  return (
    <DemoLayout persona="finance" currentPage={7}>
      <motion.div variants={stagger} initial="hidden" animate="show"
        className="max-w-4xl mx-auto flex flex-col gap-6 px-4"
        style={{ paddingTop: "72px", paddingBottom: "72px" }}>

        {/* Hero banner */}
        <motion.div variants={fadeUp} className="rounded-2xl px-6 py-6"
          style={{ background: "linear-gradient(135deg, rgba(45,204,112,0.1) 0%, rgba(26,255,122,0.04) 100%)", border: "1px solid rgba(45,204,112,0.25)", boxShadow: "0 2px 20px rgba(45,204,112,0.08)" }}>
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Performance Dashboard</p>
          <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
            Arjun's Finance Transformation in <span style={{ color: "var(--accent-mint)" }}>6 Months on Aaptor</span>
          </h1>
          <div className="flex flex-wrap gap-4">
            {[{ label: "Aaptor Score", from: "402", to: "738", delta: "+336 pts" }, { label: "Overall Finance Level", from: "43%", to: "80%", delta: "+37%" }].map((s) => (
              <div key={s.label} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
                <div className="flex flex-col">
                  <span className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>{s.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold" style={{ fontFamily: "Syne, sans-serif", color: "#4b5563" }}>{s.from}</span>
                    <ArrowRight size={14} style={{ color: "var(--accent-green)" }} />
                    <span className="text-lg font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-mint)" }}>{s.to}</span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1" style={{ background: "rgba(45,204,112,0.1)", color: "var(--accent-green)" }}>
                      <TrendingUp size={10} />{s.delta}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Before / After metric rows */}
        <motion.div variants={fadeUp}>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div className="rounded-t-xl px-4 py-2 text-center text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(245,158,11,0.08)", color: "#f59e0b", border: "1px solid rgba(245,158,11,0.2)", fontFamily: "Syne, sans-serif" }}>Before Aaptor</div>
            <div className="rounded-t-xl px-4 py-2 text-center text-xs font-bold uppercase tracking-widest"
              style={{ background: "rgba(45,204,112,0.08)", color: "var(--accent-mint)", border: "1px solid rgba(45,204,112,0.2)", fontFamily: "Syne, sans-serif" }}>After Aaptor</div>
          </div>
          <motion.div variants={stagger} className="flex flex-col gap-2">
            {metricRows.map((row) => (
              <motion.div key={row.label} variants={slideUp}
                className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-xl px-4 py-3"
                style={{ background: row.highlight ? "rgba(45,204,112,0.04)" : "var(--bg-card)", border: `1px solid ${row.highlight ? "rgba(45,204,112,0.2)" : "var(--border)"}` }}>
                <div className="flex items-center gap-3">
                  <span style={{ color: "var(--accent-mint)" }}>{row.icon}</span>
                  <div className="flex flex-col">
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>{row.label}</span>
                    <ScoreCell value={row.before} color={row.before === "—" || row.before === "0" || row.before === "0 hrs" ? "#4b5563" : "#d97706"} />
                  </div>
                </div>
                <ArrowRight size={16} style={{ color: "var(--accent-green)", flexShrink: 0 }} />
                <div className="flex justify-end">
                  <ScoreCell value={row.after} color={row.highlight ? "var(--accent-mint)" : "var(--accent-green)"} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skill growth bar chart */}
        <motion.div variants={fadeUp} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 24 }} viewport={{ once: true }}
          className="rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Competency-by-Competency Growth</p>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={skillGrowth} layout="vertical" margin={{ top: 8, right: 40, left: 8, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tick={{ fill: "var(--text-muted)", fontSize: 11 }} tickFormatter={(v: number) => `${v}%`} />
              <YAxis type="category" dataKey="skill" tick={{ fill: "var(--text-secondary)", fontSize: 12 }} width={80} />
              <Tooltip content={<ChartTooltip />} />
              <Legend wrapperStyle={{ fontSize: 12, color: "var(--text-secondary)" }} formatter={(v: string) => v === "before" ? "Before" : "After"} />
              <Bar dataKey="before" name="before" fill="#f97316" radius={[0, 4, 4, 0]} label={{ position: "right", fontSize: 10, fill: "#f97316", formatter: (v: unknown) => `${v}%` }} />
              <Bar dataKey="after"  name="after"  fill="#2dcc70" radius={[0, 4, 4, 0]} label={{ position: "right", fontSize: 10, fill: "#2dcc70", formatter: (v: unknown) => `${v}%` }} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Score journey area chart */}
        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 24 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
          className="rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Aaptor Score Journey</p>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={scoreJourney} margin={{ top: 20, right: 16, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="finGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#2dcc70" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2dcc70" stopOpacity={0}   />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" tick={{ fill: "var(--text-muted)", fontSize: 11 }} tickFormatter={(v: string) => v.replace("Month ", "M")} />
              <YAxis tick={{ fill: "var(--text-muted)", fontSize: 11 }} domain={[350, 800]} />
              <Tooltip contentStyle={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--text-primary)", fontSize: 12 }} />
              <ReferenceLine x="Month 3" stroke="rgba(45,204,112,0.45)" strokeDasharray="4 3"
                label={{ value: "SAP Course ✓", position: "top", fill: "#2dcc70", fontSize: 10 }} />
              <ReferenceLine x="Month 5" stroke="rgba(45,204,112,0.45)" strokeDasharray="4 3"
                label={{ value: "FP&A Cert ✓", position: "top", fill: "#2dcc70", fontSize: 10 }} />
              <Area type="monotone" dataKey="score" stroke="#2dcc70" strokeWidth={2} fill="url(#finGrad)"
                dot={(props: { cx?: number; cy?: number; index?: number }) => {
                  const { cx = 0, cy = 0, index = 0 } = props;
                  if (index !== scoreJourney.length - 1) return <circle key={index} cx={cx} cy={cy} r={3} fill="#2dcc70" />;
                  return <g key={index}><circle cx={cx} cy={cy} r={9} fill="rgba(45,204,112,0.15)" /><circle cx={cx} cy={cy} r={5} fill="#2dcc70" /></g>;
                }} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Assessment progression */}
        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 24 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
          className="rounded-2xl p-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Assessment Performance Over Time</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {assessments.map((a, i) => (
              <motion.div key={a.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.1 }}
                className="rounded-xl p-4 flex flex-col items-center gap-2 text-center"
                style={{ background: "var(--bg-elevated)", border: `1px solid ${a.color}30` }}>
                <AssessmentRing score={a.score} color={a.color} />
                <p className="text-xs font-semibold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>{a.name}</p>
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${a.color}15`, color: a.color }}>{a.month}</span>
              </motion.div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-1 mt-3">
            {assessments.map((a, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ background: a.color }} />
                {i < assessments.length - 1 && <div className="w-8 h-px" style={{ background: "var(--border)" }} />}
              </div>
            ))}
            <TrendingUp size={14} style={{ color: "var(--accent-green)", marginLeft: 4 }} />
          </div>
        </motion.div>

        {/* AI summary */}
        <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 24 }} viewport={{ once: true }} transition={{ duration: 0.45 }}
          className="rounded-2xl p-5 flex flex-col gap-4"
          style={{ background: "rgba(45,204,112,0.05)", border: "1px solid rgba(45,204,112,0.2)" }}>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(45,204,112,0.1)", border: "1px solid rgba(45,204,112,0.25)" }}>
              <Bot size={14} style={{ color: "var(--accent-mint)" }} />
            </div>
            <span className="text-xs font-semibold" style={{ color: "var(--accent-mint)", fontFamily: "Syne, sans-serif" }}>Aaptor AI</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Arjun's forecast accuracy improved by <span style={{ color: "var(--accent-mint)" }}>17 percentage points</span> — a direct business impact. Excel & SAP scored <span style={{ color: "var(--accent-mint)" }}>90%</span>, highest in his department. Ranked <span style={{ color: "var(--accent-green)" }}>Top 15% in cohort</span>. Ready for Senior Finance Manager and CFO-track engagements.
          </p>
          <div className="flex flex-wrap gap-2">
            {[{ icon: <Trophy size={12} />, label: "Top 15% in cohort" }, { icon: <CheckCircle2 size={12} />, label: "FP&A Certified" }, { icon: <Shield size={12} />, label: "SAP Pro" }].map((badge) => (
              <span key={badge.label} className="text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5"
                style={{ background: "rgba(45,204,112,0.08)", color: "var(--accent-mint)", border: "1px solid rgba(45,204,112,0.2)" }}>
                {badge.icon}{badge.label}
              </span>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </DemoLayout>
  );
}
