"use client";

import { motion } from "framer-motion";
import { GitCommit, BookOpen, Link2, MessageSquare, CheckCircle2, ExternalLink, Award } from "lucide-react";

const heatmap = Array.from({ length: 12 }, (_, week) =>
  Array.from({ length: 7 }, () => {
    const val = Math.random();
    if (week < 2) return val > 0.7 ? 2 : val > 0.4 ? 1 : 0;
    if (week < 6) return val > 0.5 ? 3 : val > 0.3 ? 2 : val > 0.15 ? 1 : 0;
    return val > 0.35 ? 4 : val > 0.2 ? 3 : val > 0.1 ? 2 : val > 0.05 ? 1 : 0;
  })
);

const heatColor = ["#e6f4ec", "#86efac", "#4ade80", "#16a34a", "#0d7a45"];

const activityFeed = [
  { platform: "GitHub",   icon: "git",      color: "#16a34a", bg: "rgba(22,163,74,0.1)",   text: "Pushed 6 commits to dsa-practice repo",         date: "Mar 22" },
  { platform: "Udemy",    icon: "book",     color: "#7c3aed", bg: "rgba(124,58,237,0.1)",  text: "Completed 'AWS Solutions Architect' — Module 7", date: "Mar 20" },
  { platform: "LinkedIn", icon: "linkedin", color: "#2563eb", bg: "rgba(37,99,235,0.1)",   text: "Added certification: Meta Frontend Developer",   date: "Mar 18" },
  { platform: "Slack",    icon: "slack",    color: "#d97706", bg: "rgba(217,119,6,0.1)",   text: "Recognized by manager in #engineering",          date: "Mar 15" },
  { platform: "GitHub",   icon: "git",      color: "#16a34a", bg: "rgba(22,163,74,0.1)",   text: "Opened PR: refactor auth middleware",            date: "Mar 12" },
  { platform: "Udemy",    icon: "book",     color: "#7c3aed", bg: "rgba(124,58,237,0.1)",  text: "Completed 'The Complete DSA Bootcamp' — 100%",  date: "Mar 8"  },
];

const cardVariant = {
  hidden: { opacity: 0, scale: 0.93 },
  show:   { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const feedVariant = {
  hidden: { opacity: 0, x: -16 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

function PlatformIcon({ type, color }: { type: string; color: string }) {
  const s = { color, size: 15 };
  if (type === "git")      return <GitCommit {...s} />;
  if (type === "book")     return <BookOpen {...s} />;
  if (type === "linkedin") return <Link2 {...s} />;
  return <MessageSquare {...s} />;
}

export default function Page5() {
  return (
    <motion.div variants={stagger} initial="hidden" animate="show"
      className="max-w-5xl mx-auto flex flex-col gap-7 px-4 py-8"
      style={{ paddingTop: "88px", paddingBottom: "88px" }}>

      <motion.div variants={cardVariant} className="flex flex-col gap-2">
        <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
          Integration Activity
        </p>
        <h1 className="text-3xl font-bold leading-snug" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
          Aaptor tracks Rahul&apos;s activity{" "}
          <span style={{ color: "var(--accent-mint)" }}>across platforms</span> automatically
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <motion.div variants={cardVariant} className="rounded-2xl p-5 flex flex-col gap-4"
          style={{ background: "var(--bg-card)", border: "1px solid rgba(22,163,74,0.35)" }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GitCommit size={16} style={{ color: "#16a34a" }} />
              <span className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif", color: "#16a34a" }}>GitHub</span>
            </div>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>@rahul-sharma-dev</span>
          </div>
          <div className="flex gap-0.5">
            {heatmap.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-0.5">
                {week.map((val, di) => (
                  <div key={di} className="w-3 h-3 rounded-sm" style={{ background: heatColor[val] }} />
                ))}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[{ label: "Commits", value: "143" }, { label: "Active Repos", value: "12" }, { label: "Top Lang", value: "Python" }].map((s) => (
              <div key={s.label} className="flex flex-col gap-0.5">
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</span>
                <span className="text-sm font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>{s.value}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-1.5">
            {["Pushed DSA practice solutions", "Opened PR on company repo"].map((a) => (
              <div key={a} className="flex items-center gap-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#16a34a" }} />
                {a}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={cardVariant} className="rounded-2xl p-5 flex flex-col gap-4"
          style={{ background: "var(--bg-card)", border: "1px solid rgba(124,58,237,0.3)" }}>
          <div className="flex items-center gap-2">
            <BookOpen size={16} style={{ color: "#7c3aed" }} />
            <span className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif", color: "#7c3aed" }}>Udemy</span>
          </div>
          <div className="flex gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
            <span>Enrolled: <strong style={{ color: "var(--text-primary)" }}>3</strong></span>
            <span>Completed: <strong style={{ color: "#7c3aed" }}>2</strong></span>
            <span>Hours: <strong style={{ color: "var(--text-primary)" }}>38 hrs</strong></span>
          </div>
          <div className="flex flex-col gap-3">
            {[{ title: "The Complete DSA Bootcamp", progress: 100 }, { title: "AWS Solutions Architect", progress: 67 }].map((c) => (
              <div key={c.title} className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{c.title}</span>
                  <div className="flex items-center gap-1">
                    {c.progress === 100 && <CheckCircle2 size={12} style={{ color: "#16a34a" }} />}
                    <span className="text-xs font-semibold" style={{ fontFamily: "Syne, sans-serif", color: c.progress === 100 ? "#16a34a" : "#7c3aed" }}>{c.progress}%</span>
                  </div>
                </div>
                <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
                  <motion.div className="h-full rounded-full" initial={{ width: 0 }} animate={{ width: `${c.progress}%` }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    style={{ background: c.progress === 100 ? "#16a34a" : "#7c3aed" }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={cardVariant} className="rounded-2xl p-5 flex flex-col gap-4"
          style={{ background: "var(--bg-card)", border: "1px solid rgba(96,165,250,0.3)" }}>
          <div className="flex items-center gap-2">
            <Link2 size={16} style={{ color: "#60a5fa" }} />
            <span className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif", color: "#60a5fa" }}>LinkedIn</span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Certifications Added</p>
            {["AWS Cloud Practitioner", "Meta Frontend Developer"].map((cert) => (
              <div key={cert} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <CheckCircle2 size={13} style={{ color: "#60a5fa" }} /> {cert}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Skills Endorsed</p>
            <div className="flex gap-2 flex-wrap">
              {[{ skill: "React", count: "+12" }, { skill: "Node.js", count: "+8" }].map((e) => (
                <span key={e.skill} className="text-xs px-3 py-1 rounded-full"
                  style={{ background: "rgba(37,99,235,0.08)", color: "#1d4ed8", border: "1px solid rgba(37,99,235,0.2)" }}>
                  {e.skill} <span style={{ color: "#2563eb" }}>{e.count}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
            <ExternalLink size={11} />
            Profile strength: <span style={{ color: "#2563eb" }}>Growing</span>
          </div>
        </motion.div>

        <motion.div variants={cardVariant} className="rounded-2xl p-5 flex flex-col gap-4"
          style={{ background: "var(--bg-card)", border: "1px solid rgba(245,158,11,0.3)" }}>
          <div className="flex items-center gap-2">
            <MessageSquare size={16} style={{ color: "#f59e0b" }} />
            <span className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif", color: "#f59e0b" }}>Slack</span>
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
            <span className="font-bold text-xl" style={{ fontFamily: "Syne, sans-serif", color: "#fbbf24" }}>234</span>
            messages in <span style={{ color: "var(--text-muted)" }}>#engineering</span> this month
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Participated In</p>
            {["DSA challenge", "System design review"].map((ch) => (
              <div key={ch} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#f59e0b" }} /> {ch}
              </div>
            ))}
          </div>
          <div className="rounded-xl px-4 py-3 text-sm flex items-start gap-2"
            style={{ background: "rgba(217,119,6,0.08)", border: "1px solid rgba(217,119,6,0.2)", color: "#92400e" }}>
            <Award size={14} style={{ color: "#d97706", flexShrink: 0, marginTop: 2 }} />
            <span>Recognized by manager: &quot;Great work on the PR review&quot;</span>
          </div>
        </motion.div>
      </div>

      <motion.div variants={cardVariant} className="rounded-2xl p-5 flex flex-col gap-4"
        style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
        <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
          Recent Activity — Cross Platform
        </p>
        <motion.div variants={stagger} className="flex flex-col">
          {activityFeed.map((item, i) => (
            <motion.div key={i} variants={feedVariant} className="flex items-start gap-4 py-3"
              style={{ borderBottom: i < activityFeed.length - 1 ? "1px solid var(--border)" : "none" }}>
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: item.bg }}>
                <PlatformIcon type={item.icon} color={item.color} />
              </div>
              <div className="flex-1 flex flex-col gap-0.5">
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.text}</p>
                <span className="text-xs px-2 py-0.5 rounded-full self-start"
                  style={{ background: item.bg, color: item.color }}>{item.platform}</span>
              </div>
              <span className="text-xs flex-shrink-0 mt-1" style={{ color: "var(--text-muted)" }}>{item.date}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}