"use client";

import { motion } from "framer-motion";
import { Link2, BookOpen, MessageSquare, CheckCircle2, ExternalLink, Award, TrendingUp, Monitor } from "lucide-react";
import DemoLayout from "@/components/DemoLayout";

const activityFeed = [
  { platform: "LinkedIn",   icon: "linkedin", color: "#60a5fa", bg: "rgba(96,165,250,0.1)",  text: "Added Salesforce Certified badge to profile",              date: "Mar 22" },
  { platform: "Udemy",      icon: "book",     color: "#f9a8d4", bg: "rgba(236,72,153,0.1)",  text: "Completed SPIN Selling Fundamentals — Module 6",           date: "Mar 19" },
  { platform: "Salesforce", icon: "monitor",  color: "#67e8f9", bg: "rgba(103,232,249,0.1)", text: "Logged 14 deals — 9 moved to proposal stage",             date: "Mar 16" },
  { platform: "Slack",      icon: "slack",    color: "#f59e0b", bg: "rgba(245,158,11,0.1)",  text: "Recognised in #sales-team: closed ₹24L deal this quarter", date: "Mar 13" },
  { platform: "LinkedIn",   icon: "linkedin", color: "#60a5fa", bg: "rgba(96,165,250,0.1)",  text: "Profile views up +310% after HubSpot cert added",          date: "Mar 10" },
  { platform: "Salesforce", icon: "monitor",  color: "#67e8f9", bg: "rgba(103,232,249,0.1)", text: "Win rate improved from 28% to 46% this quarter",           date: "Mar 7"  },
];

const cardVariant = { hidden: { opacity: 0, scale: 0.93 }, show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } } };
const stagger     = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const feedVariant = { hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" as const } } };

function FeedIcon({ type, color }: { type: string; color: string }) {
  if (type === "linkedin") return <Link2        size={14} style={{ color }} />;
  if (type === "book")     return <BookOpen     size={14} style={{ color }} />;
  if (type === "monitor")  return <Monitor      size={14} style={{ color }} />;
  return                          <MessageSquare size={14} style={{ color }} />;
}

export default function SalesPage5() {
  return (
    <DemoLayout persona="sales" currentPage={5}>
      <motion.div variants={stagger} initial="hidden" animate="show"
        className="max-w-5xl mx-auto flex flex-col gap-7 px-4"
        style={{ paddingTop: "88px", paddingBottom: "88px" }}>

        <motion.div variants={cardVariant} className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Integration Activity</p>
          <h1 className="text-3xl font-bold leading-snug" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
            Aaptor tracks Neha's activity <span style={{ color: "var(--accent-mint)" }}>across platforms</span> automatically
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* LinkedIn */}
          <motion.div variants={cardVariant} className="rounded-2xl p-5 flex flex-col gap-4" style={{ background: "var(--bg-card)", border: "1px solid rgba(96,165,250,0.35)" }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Link2 size={16} style={{ color: "#60a5fa" }} />
                <span className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif", color: "#60a5fa" }}>LinkedIn</span>
              </div>
              <div className="flex items-center gap-1 text-xs" style={{ color: "#4ade80" }}>
                <TrendingUp size={12} />
                <span style={{ fontFamily: "Syne, sans-serif", fontWeight: 600 }}>+310% profile views</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Certifications Added</p>
              {["Salesforce Certified", "HubSpot Sales Certified"].map((cert) => (
                <div key={cert} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <CheckCircle2 size={13} style={{ color: "#60a5fa" }} />{cert}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
              <span>Courses: <strong style={{ color: "var(--text-primary)" }}>4</strong></span>
              <span>Completed: <strong style={{ color: "#60a5fa" }}>3</strong></span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Skills Endorsed</p>
              <div className="flex gap-2 flex-wrap">
                {[{ skill: "B2B Sales", count: "+20" }, { skill: "CRM", count: "+14" }].map((e) => (
                  <span key={e.skill} className="text-xs px-3 py-1 rounded-full"
                    style={{ background: "rgba(37,99,235,0.08)", color: "#93c5fd", border: "1px solid rgba(37,99,235,0.2)" }}>
                    {e.skill} <span style={{ color: "#60a5fa" }}>{e.count}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs" style={{ color: "var(--text-muted)" }}>
              <ExternalLink size={11} />Profile strength: <span style={{ color: "#60a5fa" }}>All-Star</span>
            </div>
          </motion.div>

          {/* Udemy */}
          <motion.div variants={cardVariant} className="rounded-2xl p-5 flex flex-col gap-4" style={{ background: "var(--bg-card)", border: "1px solid rgba(236,72,153,0.3)" }}>
            <div className="flex items-center gap-2">
              <BookOpen size={16} style={{ color: "#f9a8d4" }} />
              <span className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif", color: "#f9a8d4" }}>Udemy</span>
            </div>
            <div className="flex gap-4 text-xs" style={{ color: "var(--text-muted)" }}>
              <span>Enrolled: <strong style={{ color: "var(--text-primary)" }}>4</strong></span>
              <span>Completed: <strong style={{ color: "#f9a8d4" }}>3</strong></span>
              <span>Hours: <strong style={{ color: "var(--text-primary)" }}>36 hrs</strong></span>
            </div>
            <div className="flex flex-col gap-3">
              {[
                { title: "SPIN Selling Fundamentals",  progress: 100 },
                { title: "Salesforce CRM Basics",      progress: 100 },
                { title: "HubSpot Sales Hub",          progress: 50  },
              ].map((c) => (
                <div key={c.title} className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{c.title}</span>
                    <div className="flex items-center gap-1">
                      {c.progress === 100 && <CheckCircle2 size={12} style={{ color: "#2dcc70" }} />}
                      <span className="text-xs font-semibold" style={{ fontFamily: "Syne, sans-serif", color: c.progress === 100 ? "#2dcc70" : "#f9a8d4" }}>{c.progress}%</span>
                    </div>
                  </div>
                  <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
                    <motion.div className="h-full rounded-full" initial={{ width: 0 }} animate={{ width: `${c.progress}%` }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} style={{ background: c.progress === 100 ? "#2dcc70" : "#f9a8d4" }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Salesforce CRM */}
          <motion.div variants={cardVariant} className="rounded-2xl p-5 flex flex-col gap-4" style={{ background: "var(--bg-card)", border: "1px solid rgba(103,232,249,0.3)" }}>
            <div className="flex items-center gap-2">
              <Monitor size={16} style={{ color: "#67e8f9" }} />
              <span className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif", color: "#67e8f9" }}>Salesforce CRM</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[{ label: "Active Days", value: "22 days" }, { label: "Deals Logged", value: "14" }, { label: "Proposals Sent", value: "9" }, { label: "Win Rate", value: "46%" }].map((s) => (
                <div key={s.label} className="rounded-xl p-3 flex flex-col gap-0.5" style={{ background: "var(--bg-elevated)" }}>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{s.label}</span>
                  <span className="text-lg font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-mint)" }}>{s.value}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl px-4 py-3 flex items-center gap-3" style={{ background: "rgba(45,204,112,0.06)", border: "1px solid rgba(45,204,112,0.2)" }}>
              <TrendingUp size={14} style={{ color: "var(--accent-green)", flexShrink: 0 }} />
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Win rate improved from <span style={{ color: "#f97316" }}>28%</span> to <span style={{ color: "var(--accent-mint)" }}>46%</span> this quarter
              </p>
            </div>
          </motion.div>

          {/* Slack */}
          <motion.div variants={cardVariant} className="rounded-2xl p-5 flex flex-col gap-4" style={{ background: "var(--bg-card)", border: "1px solid rgba(245,158,11,0.3)" }}>
            <div className="flex items-center gap-2">
              <MessageSquare size={16} style={{ color: "#f59e0b" }} />
              <span className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif", color: "#f59e0b" }}>Slack</span>
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
              <span className="font-bold text-xl" style={{ fontFamily: "Syne, sans-serif", color: "#fbbf24" }}>162</span>
              messages in <span style={{ color: "var(--text-muted)" }}>#sales-team</span> this month
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Participated In</p>
              {["Q1 deal sprint", "Pricing strategy review"].map((ch) => (
                <div key={ch} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#f59e0b" }} />{ch}
                </div>
              ))}
            </div>
            <div className="rounded-xl px-4 py-3 text-sm flex items-start gap-2" style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", color: "#fbbf24" }}>
              <Award size={14} style={{ color: "#f59e0b", flexShrink: 0, marginTop: 2 }} />
              <span>Neha closed ₹24L deal — recognised by Sales Head</span>
            </div>
          </motion.div>
        </div>

        {/* Activity timeline */}
        <motion.div variants={cardVariant} className="rounded-2xl p-5 flex flex-col gap-4" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Recent Activity — Cross Platform</p>
          <motion.div variants={stagger} className="flex flex-col">
            {activityFeed.map((item, i) => (
              <motion.div key={i} variants={feedVariant} className="flex items-start gap-4 py-3"
                style={{ borderBottom: i < activityFeed.length - 1 ? "1px solid var(--border)" : "none" }}>
                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: item.bg }}>
                  <FeedIcon type={item.icon} color={item.color} />
                </div>
                <div className="flex-1 flex flex-col gap-0.5">
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{item.text}</p>
                  <span className="text-xs px-2 py-0.5 rounded-full self-start" style={{ background: item.bg, color: item.color }}>{item.platform}</span>
                </div>
                <span className="text-xs flex-shrink-0 mt-1" style={{ color: "var(--text-muted)" }}>{item.date}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </DemoLayout>
  );
}
