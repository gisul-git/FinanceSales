"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Bot, ArrowRight, TrendingUp, BarChart2, ClipboardList, BookOpen, Award, GitCommit, Clock, Zap, Trophy, CheckCircle2, Cloud } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, AreaChart, Area, ReferenceLine, Legend,
} from "recharts";

// ─── Data ──────────────────────────────────────────────────────────────────

const skillGrowth = [
  { skill: "React",         before: 65, after: 92 },
  { skill: "Node.js",       before: 58, after: 88 },
  { skill: "DSA",           before: 32, after: 78 },
  { skill: "System Design", before: 28, after: 72 },
  { skill: "Cloud",         before: 20, after: 65 },
  { skill: "DevOps",        before: 15, after: 60 },
];

const scoreJourney = [
  { month: "Month 1", score: 412 },
  { month: "Month 2", score: 480 },
  { month: "Month 3", score: 530 },
  { month: "Month 4", score: 600 },
  { month: "Month 5", score: 670 },
  { month: "Month 6", score: 724 },
];

const assessments = [
  { name: "General",        score: 54, month: "Month 1", color: "#f59e0b" },
  { name: "DSA",            score: 61, month: "Month 2", color: "#f97316" },
  { name: "General Re-test",score: 74, month: "Month 4", color: "#16a34a" },
  { name: "DSA Re-test",    score: 82, month: "Month 6", color: "#0d7a45" },
];

const metricRows: { icon: React.ReactNode; label: string; before: string; after: string; highlight?: boolean }[] = [
  { icon: <BarChart2 size={16} />,    label: "Aaptor Score",          before: "412",    after: "724",      highlight: true },
  { icon: <ClipboardList size={16} />,label: "Assessments Taken",      before: "0",      after: "4"         },
  { icon: <BookOpen size={16} />,     label: "Courses Completed",      before: "0",      after: "7"         },
  { icon: <Award size={16} />,        label: "Certifications",         before: "0",      after: "2"         },
  { icon: <GitCommit size={16} />,    label: "GitHub Commits (Qtr)",   before: "23",     after: "143"       },
  { icon: <Clock size={16} />,        label: "Learning Hours",         before: "0 hrs",  after: "47 hrs"    },
  { icon: <Zap size={16} />,          label: "Active Streak",          before: "—",      after: "21 days"   },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const slideUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

// ─── Score count-up cells ─────────────────────────────────────────────────────

function ScoreCell({ value, color }: { value: string; color: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const num = parseInt(value.replace(/\D/g, ""), 10);
  const isNum = !isNaN(num) && value !== "—";
  const counted = useCountUp(isNum ? num : 0, 1000, inView && isNum);
  const display = isNum ? (value.includes("hrs") ? `${counted} hrs` : value.includes("days") ? `${counted} days` : `${counted}`) : value;

  return (
    <span ref={ref} className="text-2xl font-bold" style={{ fontFamily: "Syne, sans-serif", color }}>
      {display}
    </span>
  );
}

// ─── Assessment ring ──────────────────────────────────────────────────────────

function AssessmentRing({ score, color }: { score: number; color: string }) {
  const r = 28;
  const circ = 2 * Math.PI * r;
  return (
    <div className="relative flex items-center justify-center" style={{ width: 72, height: 72 }}>
      <svg width="72" height="72" style={{ transform: "rotate(-90deg)", position: "absolute" }}>
        <circle cx="36" cy="36" r={r} fill="none" stroke="var(--bg-elevated)" strokeWidth="6" />
        <motion.circle
          cx="36" cy="36" r={r} fill="none"
          stroke={color} strokeWidth="6" strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          whileInView={{ strokeDashoffset: circ - (score / 100) * circ }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </svg>
      <span className="text-base font-bold z-10" style={{ fontFamily: "Syne, sans-serif", color }}>
        {score}
      </span>
    </div>
  );
}

// ─── Custom tooltip ───────────────────────────────────────────────────────────

const ChartTooltip = ({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg px-3 py-2 text-xs" style={{ background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-primary)" }}>
      <p className="font-semibold mb-1">{label}</p>
      {payload.map((p, i) => (
        <p key={i} style={{ color: i === 0 ? "#f97316" : "#0d7a45" }}>
          {i === 0 ? "Before" : "After"}: {p.value}%
        </p>
      ))}
    </div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page7() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="max-w-4xl mx-auto flex flex-col gap-6 px-4"
      style={{ paddingTop: "72px", paddingBottom: "72px" }}
    >
      {/* ── SECTION 1: Hero Banner ── */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl px-6 py-6"
        style={{
          background: "linear-gradient(135deg, rgba(13,122,69,0.1) 0%, rgba(22,163,74,0.06) 100%)",
          border: "1px solid rgba(13,122,69,0.25)",
          boxShadow: "0 2px 20px rgba(13,122,69,0.08)",
        }}
      >
        <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
          Transformation Summary
        </p>
        <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
          Rahul&apos;s Transformation in{" "}
          <span style={{ color: "var(--accent-mint)" }}>6 Months on Aaptor</span>
        </h1>
        <div className="flex flex-wrap gap-4">
          {[
            { label: "Aaptor Score",       from: "412", to: "724",  delta: "+312 pts" },
            { label: "Overall Skill Level", from: "36%", to: "76%",  delta: "+40%" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3 rounded-xl px-4 py-3"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <div className="flex flex-col">
                <span className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>{s.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold" style={{ fontFamily: "Syne, sans-serif", color: "#9ca3af" }}>{s.from}</span>
                  <ArrowRight size={14} style={{ color: "var(--accent-green)" }} />
                  <span className="text-lg font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-mint)" }}>{s.to}</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-1"
                    style={{ background: "rgba(22,163,74,0.1)", color: "var(--accent-green)" }}>
                    <TrendingUp size={10} />{s.delta}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── SECTION 2: Metric Comparison Rows ── */}
      <motion.div variants={fadeUp}>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div className="rounded-t-xl px-4 py-2 text-center text-xs font-bold uppercase tracking-widest"
            style={{ background: "#fffbeb", color: "#d97706", border: "1px solid #fde68a", fontFamily: "Syne, sans-serif" }}>
            Before Aaptor
          </div>
          <div className="rounded-t-xl px-4 py-2 text-center text-xs font-bold uppercase tracking-widest"
            style={{ background: "rgba(13,122,69,0.08)", color: "var(--accent-mint)", border: "1px solid rgba(13,122,69,0.2)", fontFamily: "Syne, sans-serif" }}>
            After Aaptor
          </div>
        </div>
        <motion.div variants={stagger} className="flex flex-col gap-2">
          {metricRows.map((row) => (
            <motion.div
              key={row.label}
              variants={slideUp}
              className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-xl px-4 py-3"
              style={{
                background: row.highlight ? "rgba(13,122,69,0.04)" : "var(--bg-card)",
                border: `1px solid ${row.highlight ? "rgba(13,122,69,0.2)" : "var(--border)"}`,
              }}
            >
              {/* Before */}
              <div className="flex items-center gap-3">
                <span style={{ color: "var(--accent-mint)" }}>{row.icon}</span>
                <div className="flex flex-col">
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{row.label}</span>
                  <ScoreCell value={row.before} color={row.before === "—" || row.before === "0" || row.before === "0 hrs" ? "#9ca3af" : "#d97706"} />
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight size={16} style={{ color: "var(--accent-green)", flexShrink: 0 }} />

              {/* After */}
              <div className="flex justify-end">
                <ScoreCell value={row.after} color={row.highlight ? "var(--accent-mint)" : "var(--accent-green)"} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── SECTION 3: Skill Growth Bar Chart ── */}
      <motion.div
        variants={fadeUp}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true }}
        className="rounded-2xl p-5"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
      >
        <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
          Skill-by-Skill Growth
        </p>
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={skillGrowth} layout="vertical" margin={{ top: 8, right: 40, left: 8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
            <XAxis type="number" domain={[0, 100]} tick={{ fill: "var(--text-muted)", fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
            <YAxis type="category" dataKey="skill" tick={{ fill: "var(--text-secondary)", fontSize: 12 }} width={90} />
            <Tooltip content={<ChartTooltip />} />
            <Legend wrapperStyle={{ fontSize: 12, color: "var(--text-secondary)" }}
              formatter={(v) => v === "before" ? "Before" : "After"} />
            <Bar dataKey="before" name="before" fill="#f97316" radius={[0, 4, 4, 0]} label={{ position: "right", fontSize: 10, fill: "#f97316", formatter: (v: unknown) => `${v}%` }} />
            <Bar dataKey="after"  name="after"  fill="#0d7a45" radius={[0, 4, 4, 0]} label={{ position: "right", fontSize: 10, fill: "#0d7a45", formatter: (v: unknown) => `${v}%` }} />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* ── SECTION 4: Score Journey ── */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl p-5"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
      >
        <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
          Aaptor Score Journey
        </p>
        <ResponsiveContainer width="100%" height={220}>
          <AreaChart data={scoreJourney} margin={{ top: 20, right: 16, left: -10, bottom: 0 }}>
            <defs>
              <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#0d7a45" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0d7a45" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="month" tick={{ fill: "var(--text-muted)", fontSize: 11 }} tickFormatter={(v) => v.replace("Month ", "M")} />
            <YAxis tick={{ fill: "var(--text-muted)", fontSize: 11 }} domain={[350, 800]} />
            <Tooltip contentStyle={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--text-primary)", fontSize: 12 }} />
            <ReferenceLine x="Month 3" stroke="rgba(13,122,69,0.4)" strokeDasharray="4 3"
              label={{ value: "DSA Path ✓", position: "top", fill: "#0d7a45", fontSize: 10 }} />
            <ReferenceLine x="Month 5" stroke="rgba(13,122,69,0.4)" strokeDasharray="4 3"
              label={{ value: "GitHub Streak ✓", position: "top", fill: "#0d7a45", fontSize: 10 }} />
            <Area type="monotone" dataKey="score" stroke="#0d7a45" strokeWidth={2}
              fill="url(#scoreGrad)"
              dot={(props) => {
                const { cx, cy, index } = props;
                if (index !== scoreJourney.length - 1) return <circle key={index} cx={cx} cy={cy} r={3} fill="#0d7a45" />;
                return (
                  <g key={index}>
                    <circle cx={cx} cy={cy} r={9} fill="rgba(13,122,69,0.15)" />
                    <circle cx={cx} cy={cy} r={5} fill="#0d7a45" />
                  </g>
                );
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      {/* ── SECTION 5: Assessment Progression ── */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl p-5"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
      >
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
          Assessment Performance Over Time
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {assessments.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.1 }}
              className="rounded-xl p-4 flex flex-col items-center gap-2 text-center"
              style={{ background: "var(--bg-elevated)", border: `1px solid ${a.color}30` }}
            >
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

      {/* ── SECTION 6: AI Summary ── */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="rounded-2xl p-5 flex flex-col gap-4"
        style={{ background: "rgba(13,122,69,0.05)", border: "1px solid rgba(13,122,69,0.2)" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(13,122,69,0.1)", border: "1px solid rgba(13,122,69,0.25)" }}>
            <Bot size={14} style={{ color: "var(--accent-mint)" }} />
          </div>
          <span className="text-xs font-semibold" style={{ color: "var(--accent-mint)", fontFamily: "Syne, sans-serif" }}>
            Aaptor AI
          </span>
        </div>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          Rahul has shown exceptional consistency over 6 months. His{" "}
          <span style={{ color: "var(--accent-mint)" }}>DSA score improved by 46%</span>, the highest growth area.
          He is now ranked in the{" "}
          <span style={{ color: "var(--accent-green)" }}>Top 18% of his cohort</span> and is project-ready for senior-level engagements.
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            { icon: <Trophy size={12} />, label: "Top 18% in cohort" },
            { icon: <CheckCircle2 size={12} />, label: "DSA Certified" },
            { icon: <Cloud size={12} />, label: "Cloud Beginner" },
          ].map((badge) => (
            <span key={badge.label} className="text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5"
              style={{ background: "rgba(13,122,69,0.08)", color: "var(--accent-mint)", border: "1px solid rgba(13,122,69,0.2)" }}>
              {badge.icon}{badge.label}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
