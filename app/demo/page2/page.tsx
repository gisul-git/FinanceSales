"use client";

import { motion } from "framer-motion";
import { Bot, Zap, AlertCircle } from "lucide-react";

const scoreBreakdown = [
  { label: "Correctness", value: 70 },
  { label: "Efficiency", value: 45 },
  { label: "Code Quality", value: 60 },
  { label: "Edge Cases", value: 40 },
];

const improvementTags = ["Time Complexity", "Edge Cases", "Space Optimization"];

const rahulCode = `function longestSubstring(s) {
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let seen = new Set();
    for (let j = i; j < s.length; j++) {
      if (seen.has(s[j])) break;
      seen.add(s[j]);
      max = Math.max(max, j - i + 1);
    }
  }
  return max;
}`;

function scoreColor(v: number) {
  if (v >= 65) return "#f59e0b";
  return "#ef4444";
}

function RingScore({ score }: { score: number }) {
  const r = 52;
  const circ = 2 * Math.PI * r;
  const dash = (score / 100) * circ;
  return (
    <div className="relative flex items-center justify-center" style={{ width: 136, height: 136 }}>
      <svg width="136" height="136" style={{ transform: "rotate(-90deg)" }}>
        <circle cx="68" cy="68" r={r} fill="none" stroke="var(--bg-elevated)" strokeWidth="10" />
        <motion.circle
          cx="68" cy="68" r={r} fill="none" stroke="#f59e0b" strokeWidth="10" strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={{ strokeDashoffset: circ - dash }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "#f59e0b" }}>54</span>
        <span className="text-xs" style={{ color: "var(--text-muted)" }}>/ 100</span>
      </div>
    </div>
  );
}

export default function Page2() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-7 px-4 py-8" style={{ paddingTop: "88px", paddingBottom: "88px" }}>
      <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
          Assessment & AI Evaluation
        </p>
        <h1 className="text-3xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
          Rahul took the General + DSA Assessment
        </h1>
        <div className="flex flex-wrap gap-2 mt-1">
          {["General Assessment", "DSA Competency", "AI/ML Basics"].map((badge) => (
            <span key={badge} className="text-xs font-medium px-3 py-1 rounded-full"
              style={{ background: "rgba(13,122,69,0.08)", color: "var(--accent-mint)", border: "1px solid rgba(13,122,69,0.25)", fontFamily: "Syne, sans-serif" }}>
              {badge}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <motion.div initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }} className="flex flex-col gap-4">
          <div className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <span className="text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded self-start"
              style={{ background: "rgba(245,158,11,0.12)", color: "#fbbf24", fontFamily: "Syne, sans-serif" }}>
              Sample Question — Pseudocode
            </span>
            <p className="text-base font-medium leading-relaxed" style={{ color: "var(--text-primary)", fontFamily: "Syne, sans-serif" }}>
              Write a function to find the longest substring without repeating characters.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--border)" }}>
            <div className="flex items-center justify-between px-4 py-2.5" style={{ background: "#1a2e1f", borderBottom: "1px solid var(--border)" }}>
              <span className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>rahul_answer.js</span>
              <span className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(239,68,68,0.1)", color: "#f87171" }}>O(n²) — suboptimal</span>
            </div>
            <pre className="p-5 text-sm leading-relaxed overflow-x-auto"
              style={{ background: "#0f1a12", color: "#4ade80", fontFamily: "'Fira Code', 'Courier New', monospace", margin: 0 }}>
              {rahulCode}
            </pre>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, ease: "easeOut", delay: 0.25 }} className="flex flex-col gap-4">
          <div className="rounded-2xl p-5 flex flex-col gap-5" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Overall AI Score</p>
                <RingScore score={54} />
              </div>
              <div className="flex-1 flex flex-col gap-3 min-w-[160px]">
                {scoreBreakdown.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <div className="flex justify-between text-xs">
                      <span style={{ color: "var(--text-secondary)" }}>{item.label}</span>
                      <span style={{ color: scoreColor(item.value), fontFamily: "Syne, sans-serif", fontWeight: 600 }}>{item.value}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
                      <motion.div className="h-full rounded-full" initial={{ width: 0 }} animate={{ width: `${item.value}%` }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }} style={{ background: scoreColor(item.value) }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: "rgba(13,122,69,0.06)", border: "1px solid rgba(13,122,69,0.2)" }}>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(13,122,69,0.08)", border: "1px solid rgba(13,122,69,0.25)" }}>
                <Bot size={14} style={{ color: "var(--accent-mint)" }} />
              </div>
              <span className="text-xs font-semibold" style={{ color: "var(--accent-mint)", fontFamily: "Syne, sans-serif" }}>Aaptor AI</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Your solution is functionally correct but uses a nested loop approach{" "}
              <span style={{ color: "#f87171" }}>(O(n²))</span>. Consider using a{" "}
              <span style={{ color: "var(--accent-mint)" }}>sliding window with a hash map</span> for O(n) efficiency.
            </p>
          </div>

          <div className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
            <div className="flex items-center gap-2">
              <AlertCircle size={14} style={{ color: "#f59e0b" }} />
              <span className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Areas of Improvement</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {improvementTags.map((tag) => (
                <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(239,68,68,0.08)", color: "#fca5a5", border: "1px solid rgba(239,68,68,0.25)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.6 }}
        className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
        <Zap size={13} />
        <span className="text-xs">AI evaluated 47 responses in this assessment</span>
      </motion.div>
    </div>
  );
}
