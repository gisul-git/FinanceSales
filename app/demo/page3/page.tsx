"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Target, BookOpen, Flame } from "lucide-react";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine,
} from "recharts";

const radarData = [
  { axis: "DSA",           before: 32, after: 74 },
  { axis: "System Design", before: 28, after: 68 },
  { axis: "Cloud",         before: 20, after: 62 },
  { axis: "DevOps",        before: 15, after: 55 },
  { axis: "AI/ML",         before: 22, after: 60 },
  { axis: "General",       before: 65, after: 88 },
];

const timelineData = [
  { month: "Month 1", score: 412 },
  { month: "Month 2", score: 480 },
  { month: "Month 3", score: 530 },
  { month: "Month 4", score: 600 },
  { month: "Month 5", score: 670 },
  { month: "Month 6", score: 724 },
];

const statCards = [
  { icon: <Target size={16} />, label: "Assessments Taken", value: "4" },
  { icon: <BookOpen size={16} />, label: "Courses Completed", value: "7" },
  { icon: <Flame size={16} />, label: "Active Streak", value: "21 days" },
];

const CustomDot = (props: { cx?: number; cy?: number; index?: number }) => {
  const { cx = 0, cy = 0, index = 0 } = props;
  if (index !== timelineData.length - 1) {
    return <circle cx={cx} cy={cy} r={3} fill="#0d7a45" />;
  }
  return (
    <g>
      <circle cx={cx} cy={cy} r={8} fill="rgba(13,122,69,0.15)" />
      <circle cx={cx} cy={cy} r={5} fill="#0d7a45" />
    </g>
  );
};

function useCountUp(target: number, duration = 1400) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration]);
  return count;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export default function Page3() {
  const score = useCountUp(724);

  return (
    <motion.div variants={stagger} initial="hidden" animate="show"
      className="max-w-4xl mx-auto flex flex-col gap-7 px-4 py-8"
      style={{ paddingTop: "88px", paddingBottom: "88px" }}>

      <motion.p variants={fadeUp} className="text-xs uppercase tracking-widest"
        style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
        Aaptor Score & Growth
      </motion.p>

      <motion.div variants={fadeUp} className="rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
        <div className="flex flex-col items-center gap-3">
          <div className="relative flex items-center justify-center" style={{ width: 160, height: 160 }}>
            <div className="absolute inset-0 rounded-full" style={{ boxShadow: "0 0 32px rgba(13,122,69,0.12)", borderRadius: "50%" }} />
            <svg width="160" height="160" style={{ transform: "rotate(-90deg)", position: "absolute" }}>
              <circle cx="80" cy="80" r="68" fill="none" stroke="var(--bg-elevated)" strokeWidth="8" />
              <motion.circle cx="80" cy="80" r="68" fill="none" stroke="#0d7a45" strokeWidth="8" strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 68}
                initial={{ strokeDashoffset: 2 * Math.PI * 68 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 68 * (1 - 724 / 1000) }}
                transition={{ duration: 1.4, ease: "easeOut" }} />
            </svg>
            <div className="flex flex-col items-center z-10">
              <span className="text-5xl font-bold leading-none" style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-mint)" }}>{score}</span>
              <span className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>/ 1000</span>
            </div>
          </div>
          <span className="text-sm font-semibold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-secondary)" }}>Aaptor Score — Current</span>
        </div>

        <div className="flex flex-col gap-4 flex-1 max-w-xs">
          <div className="flex items-center gap-2">
            <TrendingUp size={20} style={{ color: "var(--accent-green)" }} />
            <span className="text-2xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-green)" }}>+312 pts since joining</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Rahul has shown consistent improvement across all skill domains over 6 months on the Aaptor platform.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Top 18% in cohort", "DSA Certified", "Cloud Beginner"].map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full"
                style={{ background: "rgba(13,122,69,0.08)", color: "var(--accent-mint)", border: "1px solid rgba(13,122,69,0.2)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <motion.div variants={fadeUp} className="rounded-2xl p-5 flex flex-col gap-4"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Skill Comparison — Before vs After</p>
          <ResponsiveContainer width="100%" height={260}>
            <RadarChart data={radarData} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
              <PolarGrid stroke="var(--border)" />
              <PolarAngleAxis dataKey="axis" tick={{ fill: "var(--text-secondary)", fontSize: 11, fontFamily: "DM Sans, sans-serif" }} />
              <Radar name="Before" dataKey="before" stroke="#f97316" fill="#f97316" fillOpacity={0.2} strokeWidth={1.5} />
              <Radar name="After" dataKey="after" stroke="#0d7a45" fill="#0d7a45" fillOpacity={0.2} strokeWidth={2} />
              <Legend wrapperStyle={{ fontSize: 12, fontFamily: "DM Sans, sans-serif", color: "var(--text-secondary)" }} />
            </RadarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div variants={fadeUp} className="rounded-2xl p-5 flex flex-col gap-4"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Score Timeline</p>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={timelineData} margin={{ top: 16, right: 16, bottom: 0, left: -10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" tick={{ fill: "var(--text-muted)", fontSize: 11 }} tickFormatter={(v) => v.replace("Month ", "M")} />
              <YAxis tick={{ fill: "var(--text-muted)", fontSize: 11 }} domain={[350, 800]} />
              <Tooltip contentStyle={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "8px", color: "var(--text-primary)", fontSize: 12 }} />
              <ReferenceLine x="Month 3" stroke="rgba(13,122,69,0.4)" strokeDasharray="4 3"
                label={{ value: "DSA Path ✓", position: "top", fill: "#0d7a45", fontSize: 10 }} />
              <ReferenceLine x="Month 5" stroke="rgba(13,122,69,0.4)" strokeDasharray="4 3"
                label={{ value: "GitHub Streak ✓", position: "top", fill: "#0d7a45", fontSize: 10 }} />
              <Line type="monotone" dataKey="score" stroke="#0d7a45" strokeWidth={2.5}
                dot={<CustomDot />} activeDot={{ r: 6, fill: "#0d7a45" }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {statCards.map((card) => (
          <div key={card.label} className="rounded-xl p-5 flex items-center gap-4"
            style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "var(--bg-elevated)", color: "var(--accent-mint)" }}>
              {card.icon}
            </div>
            <div>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>{card.label}</p>
              <p className="text-xl font-bold mt-0.5" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>{card.value}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
