"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp } from "lucide-react";
import {
  RadialBarChart, RadialBar, ResponsiveContainer,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, Legend,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine,
} from "recharts";
import DemoLayout from "@/components/DemoLayout";

const radarData = [
  { subject: "Fin. Reporting", before: 45, after: 82 },
  { subject: "Excel & SAP",    before: 50, after: 90 },
  { subject: "Risk & Compl.",  before: 30, after: 76 },
  { subject: "Forecasting",    before: 38, after: 80 },
  { subject: "Stakeholder",    before: 42, after: 78 },
  { subject: "Leadership",     before: 35, after: 74 },
];

const timeline = [
  { month: "M1", score: 402 },
  { month: "M2", score: 478 },
  { month: "M3", score: 545 },
  { month: "M4", score: 610 },
  { month: "M5", score: 680 },
  { month: "M6", score: 738 },
];

const ringData = [{ value: 73.8, fill: "var(--accent-mint)" }];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp  = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } } };

function CountUp({ target, duration = 1400 }: { target: number; duration?: number }) {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const t = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(t); }
      else setCount(start);
    }, 16);
    return () => clearInterval(t);
  }, [inView, target, duration]);
  return <span ref={ref}>{count}</span>;
}

export default function FinancePage3() {
  return (
    <DemoLayout persona="finance" currentPage={3}>
      <motion.div variants={stagger} initial="hidden" animate="show"
        className="max-w-4xl mx-auto flex flex-col gap-6 px-4"
        style={{ paddingTop: "72px", paddingBottom: "72px" }}>

        {/* Hero score card */}
        <motion.div variants={fadeUp} className="rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6"
          style={{ background: "var(--bg-card)", border: "1px solid rgba(45,204,112,0.25)", boxShadow: "0 0 32px rgba(45,204,112,0.06)" }}>
          <div style={{ width: 140, height: 140, position: "relative", flexShrink: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart cx="50%" cy="50%" innerRadius="65%" outerRadius="90%"
                startAngle={90} endAngle={90 - 360 * 0.738} data={ringData}>
                <RadialBar dataKey="value" cornerRadius={8} background={{ fill: "var(--bg-elevated)" }} />
              </RadialBarChart>
            </ResponsiveContainer>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <span className="text-3xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-mint)" }}>
                <CountUp target={738} />
              </span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>/ 1000</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
                Aaptor Score
              </p>
              <div className="flex items-center gap-2">
                <TrendingUp size={16} style={{ color: "var(--accent-green)" }} />
                <span className="text-lg font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-green)" }}>
                  +336 pts since joining
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Top 15% in cohort", "FP&A Certified", "SAP Pro"].map((b) => (
                <span key={b} className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{ background: "rgba(45,204,112,0.08)", color: "var(--accent-mint)", border: "1px solid rgba(45,204,112,0.2)" }}>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Radar */}
          <motion.div variants={fadeUp} className="rounded-2xl p-5"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
              Competency Radar
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <RadarChart data={radarData} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
                <PolarGrid stroke="var(--border)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: "var(--text-muted)", fontSize: 11 }} />
                <Radar name="Before" dataKey="before" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.15} strokeWidth={1.5} />
                <Radar name="After"  dataKey="after"  stroke="var(--accent-mint)" fill="var(--accent-mint)" fillOpacity={0.2} strokeWidth={2} />
                <Legend wrapperStyle={{ fontSize: 12, color: "var(--text-secondary)" }} />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Score timeline */}
          <motion.div variants={fadeUp} className="rounded-2xl p-5"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
              Score Journey
            </p>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={timeline} margin={{ top: 20, right: 16, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="month" tick={{ fill: "var(--text-muted)", fontSize: 11 }} />
                <YAxis tick={{ fill: "var(--text-muted)", fontSize: 11 }} domain={[350, 800]} />
                <Tooltip contentStyle={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--text-primary)", fontSize: 12 }} />
                <ReferenceLine x="M3" stroke="rgba(45,204,112,0.5)" strokeDasharray="4 3"
                  label={{ value: "SAP Course ✓", position: "top", fill: "var(--accent-mint)", fontSize: 10 }} />
                <ReferenceLine x="M5" stroke="rgba(45,204,112,0.5)" strokeDasharray="4 3"
                  label={{ value: "FP&A Cert ✓", position: "top", fill: "var(--accent-mint)", fontSize: 10 }} />
                <Line type="monotone" dataKey="score" stroke="var(--accent-mint)" strokeWidth={2.5}
                  dot={(props: { cx?: number; cy?: number; index?: number }) => {
                    const { cx = 0, cy = 0, index = 0 } = props;
                    if (index !== timeline.length - 1)
                      return <circle key={index} cx={cx} cy={cy} r={3} fill="var(--accent-mint)" />;
                    return (
                      <g key={index}>
                        <circle cx={cx} cy={cy} r={9} fill="rgba(45,204,112,0.15)" />
                        <circle cx={cx} cy={cy} r={5} fill="var(--accent-mint)" />
                      </g>
                    );
                  }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Stat cards */}
        <motion.div variants={fadeUp} className="grid grid-cols-3 gap-4">
          {[
            { label: "Assessments Taken",  value: "4"      },
            { label: "Courses Completed",  value: "8"      },
            { label: "Active Streak",      value: "24 days" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl p-5 flex flex-col items-center gap-1 text-center"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <span className="text-2xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-mint)" }}>
                {s.value}
              </span>
              <span className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</span>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </DemoLayout>
  );
}
