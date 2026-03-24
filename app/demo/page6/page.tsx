"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Award, BookOpen, ClipboardCheck, TrendingUp, ArrowUp, Cloud, Code2 } from "lucide-react";

const skills = [
  { skill: "React",         before: 65, after: 92 },
  { skill: "Node.js",       before: 58, after: 88 },
  { skill: "DSA",           before: 32, after: 78 },
  { skill: "System Design", before: 28, after: 72 },
  { skill: "Cloud",         before: 20, after: 65 },
  { skill: "DevOps",        before: 15, after: 60 },
];

const certs = [
  { label: "AWS Cloud Practitioner", icon: <Cloud size={14} /> },
  { label: "Meta Frontend Developer", icon: <Code2 size={14} /> },
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

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};
const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

export default function Page6() {
  const score = useCountUp(724, 1400, 200);

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="max-w-3xl mx-auto flex flex-col gap-6 px-4 py-8"
      style={{ paddingTop: "88px", paddingBottom: "88px" }}
    >
      {/* Transformation summary — glowing hero */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl px-6 py-5 flex items-center gap-4"
        style={{
          background: "linear-gradient(135deg, rgba(22,163,74,0.08), rgba(13,122,69,0.04))",
          border: "1px solid rgba(22,163,74,0.3)",
          boxShadow: "0 0 32px rgba(13,122,69,0.06)",
        }}
      >
        <TrendingUp size={22} style={{ color: "var(--accent-glow)", flexShrink: 0 }} />
        <p className="text-base font-semibold leading-snug" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
          Rahul improved his Aaptor Score by{" "}
          <span style={{ color: "var(--accent-glow)" }}>312 points</span> in 6 months
        </p>
      </motion.div>

      {/* Profile card */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        style={{ background: "var(--bg-card)", border: "1px solid rgba(22,163,74,0.2)" }}
      >
        {/* Avatar — glowing mint */}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold flex-shrink-0"
          style={{
            fontFamily: "Syne, sans-serif",
            background: "var(--bg-elevated)",
            border: "2px solid var(--accent-green)",
            color: "var(--accent-mint)",
            boxShadow: "0 0 24px rgba(13,122,69,0.12)",
          }}
        >
          RS
        </div>

        {/* Info */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
              Rahul Sharma
            </h1>
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full tracking-widest uppercase"
              style={{
                background: "rgba(13,122,69,0.08)",
                color: "var(--accent-mint)",
                border: "1px solid rgba(13,122,69,0.3)",
                fontFamily: "Syne, sans-serif",
              }}
            >
              After Aaptor
            </span>
          </div>
          <div className="flex flex-wrap gap-4 text-sm" style={{ color: "var(--text-muted)" }}>
            <span className="flex items-center gap-1.5"><Briefcase size={13} />Software Developer · TechCorp</span>
            <span className="flex items-center gap-1.5"><Clock size={13} />4 years experience</span>
            <span className="flex items-center gap-1.5"><MapPin size={13} />Bangalore, India</span>
          </div>
        </div>

        {/* Aaptor Score — glowing */}
        <div
          className="flex flex-col items-center justify-center rounded-xl px-6 py-4 flex-shrink-0"
          style={{
            background: "rgba(13,122,69,0.06)",
            border: "1px solid rgba(13,122,69,0.25)",
            boxShadow: "0 0 16px rgba(13,122,69,0.06)",
            minWidth: "100px",
          }}
        >
          <span className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
            Aaptor Score
          </span>
          <span className="text-4xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-mint)" }}>
            {score}
          </span>
          <span className="text-xs mt-1" style={{ color: "var(--accent-green)" }}>+312 pts ↑</span>
        </div>
      </motion.div>

      {/* Skills grid */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl p-6"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
      >
        <p className="text-xs uppercase tracking-widest mb-5" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
          Skill Snapshot
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((item) => (
            <div key={item.skill} className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>{item.skill}</span>
                <span className="text-sm font-semibold" style={{ color: "var(--accent-mint)", fontFamily: "Syne, sans-serif" }}>
                  {item.after}%
                </span>
              </div>
              <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
                <motion.div
                  className="h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.after}%` }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                  style={{ background: "linear-gradient(90deg, var(--accent-green), var(--accent-mint))" }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certs + history row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Certifications */}
        <motion.div
          variants={fadeUp}
          className="sm:col-span-1 rounded-2xl p-5 flex flex-col gap-3"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-2">
            <Award size={14} style={{ color: "var(--accent-mint)" }} />
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
              Certifications
            </span>
          </div>
          {certs.map((c) => (
            <div key={c.label} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <span>{c.icon}</span>
              {c.label}
            </div>
          ))}
        </motion.div>

        {/* Learning history */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl p-5 flex flex-col gap-2"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-2">
            <BookOpen size={14} style={{ color: "var(--accent-mint)" }} />
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
              Learning History
            </span>
          </div>
          <p className="text-sm font-semibold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
            7 courses completed
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>47 hours · 6 months</p>
        </motion.div>

        {/* Assessment history */}
        <motion.div
          variants={fadeUp}
          className="rounded-2xl p-5 flex flex-col gap-2"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-2">
            <ClipboardCheck size={14} style={{ color: "var(--accent-mint)" }} />
            <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
              Assessments
            </span>
          </div>
          <p className="text-sm font-semibold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
            4 assessments taken
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>Avg score: 76</p>
        </motion.div>
      </div>

      {/* Before vs After comparison table */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl overflow-hidden"
        style={{ border: "1px solid var(--border)" }}
      >
        <div
          className="px-5 py-3 flex items-center gap-2"
          style={{ background: "var(--bg-elevated)", borderBottom: "1px solid var(--border)" }}
        >
          <ArrowUp size={14} style={{ color: "var(--accent-mint)" }} />
          <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
            Before vs After
          </span>
        </div>

        {/* Header row */}
        <div
          className="grid grid-cols-4 px-5 py-2 text-xs uppercase tracking-widest"
          style={{ background: "var(--bg-card)", color: "var(--text-muted)", fontFamily: "Syne, sans-serif", borderBottom: "1px solid var(--border)" }}
        >
          <span>Skill</span>
          <span className="text-center">Before</span>
          <span className="text-center">After</span>
          <span className="text-center">Change</span>
        </div>

        {skills.map((item, i) => {
          const delta = item.after - item.before;
          return (
            <motion.div
              key={item.skill}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: "easeOut", delay: 0.3 + i * 0.07 }}
              className="grid grid-cols-4 px-5 py-3 items-center text-sm"
              style={{
                background: i % 2 === 0 ? "var(--bg-card)" : "var(--bg-secondary)",
                borderBottom: i < skills.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <span style={{ color: "var(--text-secondary)" }}>{item.skill}</span>
              <span className="text-center font-semibold" style={{ color: "#f97316", fontFamily: "Syne, sans-serif" }}>
                {item.before}%
              </span>
              <span className="text-center font-semibold" style={{ color: "var(--accent-mint)", fontFamily: "Syne, sans-serif" }}>
                {item.after}%
              </span>
              <span
                className="text-center font-bold flex items-center justify-center gap-1"
                style={{ color: "var(--accent-green)", fontFamily: "Syne, sans-serif" }}
              >
                <ArrowUp size={12} />
                +{delta}%
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
