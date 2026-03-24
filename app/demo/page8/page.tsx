"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Users, Clock, ArrowRight } from "lucide-react";

const matchedDevs = [
  { name: "Rahul Sharma",   role: "Software Developer",    score: 724, match: 94, skills: ["React", "Node.js", "DSA"],          initials: "RS" },
  { name: "Priya Mehta",    role: "Senior Developer",      score: 810, match: 91, skills: ["React", "System Design", "AWS"],    initials: "PM" },
  { name: "Arjun Nair",     role: "Full Stack Developer",  score: 768, match: 89, skills: ["Node.js", "AWS", "DevOps"],         initials: "AN" },
  { name: "Sneha Kapoor",   role: "Frontend Engineer",     score: 742, match: 87, skills: ["React", "TypeScript", "DSA"],       initials: "SK" },
  { name: "Vikram Rao",     role: "Backend Engineer",      score: 695, match: 85, skills: ["Node.js", "System Design", "DSA"],  initials: "VR" },
  { name: "Ananya Singh",   role: "Cloud Engineer",        score: 731, match: 83, skills: ["AWS", "DevOps", "Cloud"],           initials: "AS" },
  { name: "Rohan Gupta",    role: "Software Developer",    score: 678, match: 81, skills: ["React", "Node.js", "AWS"],          initials: "RG" },
  { name: "Meera Iyer",     role: "Systems Engineer",      score: 712, match: 80, skills: ["System Design", "DSA", "Python"],   initials: "MI" },
];

const rahulSkillMatch = [
  { skill: "React",         score: 92 },
  { skill: "Node.js",       score: 88 },
  { skill: "AWS",           score: 65 },
  { skill: "System Design", score: 72 },
  { skill: "DSA",           score: 78 },
];

// 20 avatar slots — indices 0-7 are matched
const TOTAL_AVATARS = 24;
const MATCHED_INDICES = [0, 3, 5, 8, 11, 14, 17, 20];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function TalentPool() {
  const [lit, setLit] = useState<number[]>([]);

  useEffect(() => {
    const t = setTimeout(() => {
      MATCHED_INDICES.forEach((idx, i) => {
        setTimeout(() => setLit((prev) => [...prev, idx]), i * 180);
      });
    }, 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-wrap gap-2 justify-center max-w-sm mx-auto">
      {Array.from({ length: TOTAL_AVATARS }).map((_, i) => {
        const isLit = lit.includes(i);
        return (
          <motion.div
            key={i}
            animate={isLit ? { scale: [1, 1.25, 1] } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
            style={{
              background: isLit ? "rgba(13,122,69,0.12)" : "var(--bg-elevated)",
              border: `2px solid ${isLit ? "var(--accent-mint)" : "var(--border)"}`,
              color: isLit ? "var(--accent-mint)" : "var(--text-muted)",
              boxShadow: isLit ? "0 0 10px rgba(13,122,69,0.25)" : "none",
              fontFamily: "Syne, sans-serif",
              transition: "all 0.3s ease",
            }}
          >
            {isLit ? "✓" : "·"}
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Page7() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="max-w-4xl mx-auto flex flex-col gap-7 px-4 py-8"
      style={{ paddingTop: "88px", paddingBottom: "88px" }}
    >
      {/* Project card */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl p-6 flex flex-col sm:flex-row gap-6 justify-between"
        style={{ background: "var(--bg-card)", border: "1px solid rgba(22,163,74,0.2)" }}
      >
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
            Active Project
          </p>
          <h2 className="text-xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
            Project Alpha — E-commerce Platform Rebuild
          </h2>
          <div className="flex flex-wrap gap-2 mt-1">
            {["React (Senior)", "Node.js", "AWS", "System Design", "DSA"].map((s) => (
              <span key={s} className="text-xs px-2.5 py-1 rounded-full"
                style={{ background: "rgba(13,122,69,0.08)", color: "var(--accent-mint)", border: "1px solid rgba(13,122,69,0.2)" }}>
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm flex-shrink-0">
          <span className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
            <Users size={13} /> 8 developers required
          </span>
          <span className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
            <Clock size={13} /> 3 months · Start: Immediate
          </span>
        </div>
      </motion.div>

      {/* Match headline + talent pool */}
      <motion.div variants={fadeUp} className="flex flex-col items-center gap-5 text-center">
        <div className="flex items-center gap-2">
          <Zap size={18} style={{ color: "var(--accent-glow)" }} />
          <p className="text-base font-semibold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-secondary)" }}>
            Aaptor matched{" "}
            <span style={{ color: "var(--accent-mint)" }}>8 developers</span> from TechCorp&apos;s{" "}
            <span style={{ color: "var(--text-primary)" }}>1,200 employees</span> in{" "}
            <span style={{ color: "var(--accent-glow)" }}>0.3 seconds</span>
          </p>
        </div>
        <TalentPool />
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          {TOTAL_AVATARS} shown · 1,200 total scanned
        </p>
      </motion.div>

      {/* Matched devs grid */}
      <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {matchedDevs.map((dev, i) => {
          const isRahul = i === 0;
          return (
            <motion.div
              key={dev.name}
              variants={fadeUp}
              className="rounded-xl p-4 flex items-center gap-4"
              style={{
                background: isRahul ? "rgba(13,122,69,0.07)" : "var(--bg-card)",
                border: `1px solid ${isRahul ? "rgba(13,122,69,0.35)" : "var(--border)"}`,
                boxShadow: isRahul ? "0 0 16px rgba(13,122,69,0.06)" : "none",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{
                  fontFamily: "Syne, sans-serif",
                  background: isRahul ? "rgba(13,122,69,0.1)" : "var(--bg-elevated)",
                  border: `1.5px solid ${isRahul ? "var(--accent-mint)" : "var(--border)"}`,
                  color: isRahul ? "var(--accent-mint)" : "var(--text-muted)",
                }}
              >
                {dev.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
                    {dev.name}
                  </span>
                  {isRahul && (
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(13,122,69,0.08)", color: "var(--accent-mint)", border: "1px solid rgba(13,122,69,0.25)" }}>
                      You
                    </span>
                  )}
                </div>
                <p className="text-xs truncate" style={{ color: "var(--text-muted)" }}>{dev.role}</p>
                <div className="flex gap-1.5 mt-1.5 flex-wrap">
                  {dev.skills.map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded" style={{ background: "var(--bg-elevated)", color: "var(--text-secondary)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <span className="text-xs font-bold px-2 py-1 rounded-full"
                  style={{ background: "rgba(22,163,74,0.1)", color: "var(--accent-green)", fontFamily: "Syne, sans-serif" }}>
                  {dev.match}%
                </span>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>{dev.score}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Rahul skill match breakdown */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl p-5 flex flex-col gap-4"
        style={{ background: "var(--bg-card)", border: "1px solid rgba(22,163,74,0.2)" }}
      >
        <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
          Rahul&apos;s Skill Match Breakdown
        </p>
        <div className="flex flex-col gap-2">
          {rahulSkillMatch.map((item) => (
            <div key={item.skill} className="flex items-center gap-3">
              <CheckCircle2 size={15} style={{ color: "var(--accent-green)", flexShrink: 0 }} />
              <span className="text-sm w-32 flex-shrink-0" style={{ color: "var(--text-secondary)" }}>{item.skill}</span>
              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
                <motion.div
                  className="h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.score}%` }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                  style={{ background: "linear-gradient(90deg, var(--accent-green), var(--accent-mint))" }}
                />
              </div>
              <span className="text-sm font-semibold w-10 text-right flex-shrink-0"
                style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-mint)" }}>
                {item.score}%
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA close */}
      <motion.div
        variants={fadeUp}
        className="rounded-2xl p-8 flex flex-col items-center gap-6 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(22,163,74,0.08), rgba(13,122,69,0.03))",
          border: "1px solid rgba(22,163,74,0.25)",
          boxShadow: "0 0 40px rgba(13,122,69,0.05)",
        }}
      >
        <h2 className="text-3xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
          Aaptor turns capability chaos{" "}
          <span style={{ color: "var(--accent-mint)" }}>into clarity</span>
        </h2>

        <div className="flex flex-wrap gap-3 justify-center">
          {[
            "1,200 employees mapped",
            "8 matched in 0.3s",
            "94% accuracy",
          ].map((pill) => (
            <span key={pill} className="text-sm font-semibold px-4 py-2 rounded-full"
              style={{
                background: "rgba(13,122,69,0.08)",
                color: "var(--accent-mint)",
                border: "1px solid rgba(13,122,69,0.2)",
                fontFamily: "Syne, sans-serif",
              }}>
              {pill}
            </span>
          ))}
        </div>

        <div className="flex gap-3 flex-wrap justify-center">
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90"
            style={{
              background: "var(--accent-mint)",
              color: "var(--bg-primary)",
              fontFamily: "Syne, sans-serif",
              border: "none",
              cursor: "pointer",
            }}
          >
            Request a Demo <ArrowRight size={15} />
          </button>
          <button
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-80"
            style={{
              background: "transparent",
              color: "var(--accent-mint)",
              border: "1px solid rgba(13,122,69,0.3)",
              fontFamily: "Syne, sans-serif",
              cursor: "pointer",
            }}
          >
            Learn More
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
