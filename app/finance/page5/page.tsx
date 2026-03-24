"use client";

import { motion } from "framer-motion";
import { Link2, BookOpen, Database, MessageSquare, CheckCircle2, Clock } from "lucide-react";
import DemoLayout from "@/components/DemoLayout";

type IntgItem = { label: string; value: string; check?: boolean };

const integrations: {
  icon: React.ReactNode;
  name: string;
  color: string;
  bg: string;
  border: string;
  items: IntgItem[];
  courses?: { title: string; pct: number }[];
}[] = [
  {
    icon: <Link2 size={18} />,
    name: "LinkedIn",
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.06)",
    border: "rgba(96,165,250,0.25)",
    items: [
      { label: "Certifications added", value: "CFA Level 1 · SAP FI Certified", check: true },
      { label: "Courses completed",    value: "5" },
      { label: "Profile views",        value: "+280% post-certifications" },
      { label: "Skills endorsed",      value: "Financial Analysis +15 · SAP +10" },
    ],
  },
  {
    icon: <BookOpen size={18} />,
    name: "Udemy",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.06)",
    border: "rgba(167,139,250,0.25)",
    items: [
      { label: "Enrolled",  value: "5" },
      { label: "Completed", value: "4" },
      { label: "Hours",     value: "46 hrs" },
    ],
    courses: [
      { title: "Advanced Excel for Finance", pct: 100 },
      { title: "SAP FI Module",              pct: 100 },
      { title: "Financial Modelling",        pct: 65  },
    ],
  },
  {
    icon: <Database size={18} />,
    name: "SAP Internal ERP",
    color: "#fbbf24",
    bg: "rgba(251,191,36,0.06)",
    border: "rgba(251,191,36,0.25)",
    items: [
      { label: "Login days",                value: "21 this month" },
      { label: "Reports generated",         value: "34" },
      { label: "Budget variance models",    value: "8 created" },
      { label: "Forecast accuracy",         value: "72% → 89%" },
    ],
  },
  {
    icon: <MessageSquare size={18} />,
    name: "Slack",
    color: "#2dcc70",
    bg: "rgba(45,204,112,0.06)",
    border: "rgba(45,204,112,0.25)",
    items: [
      { label: "Messages in #finance-team", value: "156 this month" },
      { label: "Participated in",           value: "Q3 budget review · Audit prep" },
      { label: "Manager recognition",       value: "\"Arjun's forecast model saved 2 days of manual work\"" },
    ],
  },
];

const events = [
  { date: "Mar 22", label: "Completed SAP FI Module",          platform: "Udemy",    color: "#a78bfa" },
  { date: "Mar 20", label: "Generated Q3 variance report",     platform: "SAP",      color: "#fbbf24" },
  { date: "Mar 18", label: "Added CFA Level 1 cert",           platform: "LinkedIn", color: "#60a5fa" },
  { date: "Mar 15", label: "Participated in audit prep",       platform: "Slack",    color: "#2dcc70" },
  { date: "Mar 12", label: "Completed FP&A Fundamentals",      platform: "Internal", color: "#2dcc70" },
  { date: "Mar 8",  label: "Started Financial Modelling",      platform: "Udemy",    color: "#a78bfa" },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const fadeUp  = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } } };

export default function FinancePage5() {
  return (
    <DemoLayout persona="finance" currentPage={5}>
      <motion.div variants={stagger} initial="hidden" animate="show"
        className="max-w-4xl mx-auto flex flex-col gap-6 px-4"
        style={{ paddingTop: "72px", paddingBottom: "72px" }}>

        {/* Header */}
        <motion.div variants={fadeUp} className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
            Integration Activity
          </p>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
            Aaptor tracks Arjun's activity{" "}
            <span style={{ color: "var(--accent-mint)" }}>across platforms</span> automatically
          </h1>
        </motion.div>

        {/* Integration cards 2x2 */}
        <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {integrations.map((intg) => (
            <motion.div key={intg.name} variants={fadeUp} className="rounded-2xl p-5 flex flex-col gap-4"
              style={{ background: intg.bg, border: `1px solid ${intg.border}` }}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${intg.color}18`, color: intg.color }}>
                  {intg.icon}
                </div>
                <span className="font-bold text-sm" style={{ fontFamily: "Syne, sans-serif", color: intg.color }}>{intg.name}</span>
              </div>

              <div className="flex flex-col gap-2">
                {intg.items.map((item) => (
                  <div key={item.label} className="flex flex-col gap-0.5">
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>{item.label}</span>
                    <div className="flex items-start gap-1.5">
                      {item.check && <CheckCircle2 size={12} className="mt-0.5 flex-shrink-0" style={{ color: intg.color }} />}
                      <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {intg.courses && (
                <div className="flex flex-col gap-2 pt-1 border-t" style={{ borderColor: `${intg.color}20` }}>
                  {intg.courses.map((c) => (
                    <div key={c.title} className="flex flex-col gap-1">
                      <div className="flex justify-between text-xs">
                        <span style={{ color: "var(--text-secondary)" }}>{c.title}</span>
                        <span style={{ color: c.pct === 100 ? "#2dcc70" : "#f59e0b", fontFamily: "Syne, sans-serif", fontWeight: 600 }}>
                          {c.pct === 100 ? "100% ✓" : `${c.pct}%`}
                        </span>
                      </div>
                      <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
                        <motion.div className="h-full rounded-full"
                          initial={{ width: 0 }} whileInView={{ width: `${c.pct}%` }} viewport={{ once: true }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                          style={{ background: c.pct === 100 ? "#2dcc70" : "#f59e0b" }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Activity timeline */}
        <motion.div variants={fadeUp} className="rounded-2xl p-5 flex flex-col gap-4"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
          <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>
            Recent Activity
          </p>
          <div className="flex flex-col gap-0">
            {events.map((ev, i) => (
              <div key={i} className="flex items-start gap-4 py-3 border-b last:border-b-0"
                style={{ borderColor: "var(--border)" }}>
                <div className="flex items-center gap-1.5 flex-shrink-0 w-16">
                  <Clock size={11} style={{ color: "var(--text-muted)" }} />
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>{ev.date}</span>
                </div>
                <div className="flex-1 flex items-center gap-3 flex-wrap">
                  <span className="text-sm" style={{ color: "var(--text-primary)" }}>{ev.label}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full"
                    style={{ background: `${ev.color}15`, color: ev.color, border: `1px solid ${ev.color}30` }}>
                    {ev.platform}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </DemoLayout>
  );
}
