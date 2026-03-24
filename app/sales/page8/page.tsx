"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Users, Clock, ArrowRight } from "lucide-react";
import DemoLayout from "@/components/DemoLayout";

const matchedCandidates = [
  { name: "Neha Kapoor",   role: "Sales Executive",      score: 726, match: 93, skills: ["Salesforce", "Negotiation", "CRM"],      initials: "NK", isYou: true  },
  { name: "Aditya Sharma", role: "Sr. Sales Executive",  score: 798, match: 91, skills: ["HubSpot", "Pipeline Mgmt", "Closing"],   initials: "AS", isYou: false },
  { name: "Priya Joshi",   role: "Account Manager",      score: 762, match: 88, skills: ["CRM", "Presentation", "Negotiation"],    initials: "PJ", isYou: false },
  { name: "Rahul Verma",   role: "Business Dev Rep",     score: 734, match: 85, skills: ["Product Knowledge", "Closing", "CRM"],   initials: "RV", isYou: false },
  { name: "Meera Singh",   role: "Sales Analyst",        score: 701, match: 82, skills: ["Pipeline Mgmt", "Salesforce", "Excel"],  initials: "MS", isYou: false },
];

const nehaSkillMatch = [
  { skill: "Product Knowledge",  score: 85 },
  { skill: "Negotiation",        score: 80 },
  { skill: "CRM Proficiency",    score: 88 },
  { skill: "Objection Handling", score: 78 },
  { skill: "Pipeline Mgmt",      score: 84 },
];

const TOTAL_AVATARS = 24;
const MATCHED_INDICES = [0, 4, 7, 11, 16];

const fadeUp  = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function TalentPool() {
  const [lit, setLit] = useState<number[]>([]);
  useEffect(() => {
    const t = setTimeout(() => {
      MATCHED_INDICES.forEach((idx, i) => {
        setTimeout(() => setLit((prev) => [...prev, idx]), i * 200);
      });
    }, 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-wrap gap-2 justify-center max-w-sm mx-auto">
      {Array.from({ length: TOTAL_AVATARS }).map((_, i) => {
        const isLit = lit.includes(i);
        return (
          <motion.div key={i}
            animate={isLit ? { scale: [1, 1.3, 1] } : {}}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
            style={{
              background: isLit ? "rgba(45,204,112,0.12)" : "var(--bg-elevated)",
              border:     `2px solid ${isLit ? "var(--accent-mint)" : "var(--border)"}`,
              color:      isLit ? "var(--accent-mint)" : "var(--text-muted)",
              boxShadow:  isLit ? "0 0 14px rgba(45,204,112,0.35)" : "none",
              fontFamily: "Syne, sans-serif",
              transition: "all 0.3s ease",
            }}>
            {isLit ? "✓" : "·"}
          </motion.div>
        );
      })}
    </div>
  );
}

export default function SalesPage8() {
  return (
    <DemoLayout persona="sales" currentPage={8}>
      <motion.div variants={stagger} initial="hidden" animate="show"
        className="max-w-4xl mx-auto flex flex-col gap-7 px-4"
        style={{ paddingTop: "88px", paddingBottom: "88px" }}>

        <motion.div variants={fadeUp} className="rounded-2xl p-6 flex flex-col sm:flex-row gap-6 justify-between"
          style={{ background: "var(--bg-card)", border: "1px solid rgba(45,204,112,0.2)" }}>
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Open Role</p>
            <h2 className="text-xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
              Enterprise Sales Drive — Q3 2025
            </h2>
            <div className="flex flex-wrap gap-2 mt-1">
              {["Salesforce CRM", "Negotiation", "Product Knowledge", "Pipeline Mgmt", "Closing"].map((s) => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(45,204,112,0.08)", color: "var(--accent-mint)", border: "1px solid rgba(45,204,112,0.2)" }}>{s}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm flex-shrink-0">
            <span className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}><Users size={13} /> 5 Sales Executives needed</span>
            <span className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}><Clock size={13} /> 2 months · Start: Immediate</span>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col items-center gap-5 text-center">
          <div className="flex items-center gap-2">
            <Zap size={18} style={{ color: "var(--accent-glow)" }} />
            <p className="text-base font-semibold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-secondary)" }}>
              Aaptor matched <span style={{ color: "var(--accent-mint)" }}>5 Sales professionals</span> from TechCorp's{" "}
              <span style={{ color: "var(--text-primary)" }}>420 Sales employees</span> in{" "}
              <span style={{ color: "var(--accent-glow)" }}>0.2 seconds</span>
            </p>
          </div>
          <TalentPool />
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>{TOTAL_AVATARS} shown · 420 total scanned</p>
        </motion.div>

        <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {matchedCandidates.map((person) => (
            <motion.div key={person.name} variants={fadeUp} className="rounded-xl p-4 flex items-center gap-4"
              style={{ background: person.isYou ? "rgba(45,204,112,0.07)" : "var(--bg-card)", border: `1px solid ${person.isYou ? "rgba(45,204,112,0.35)" : "var(--border)"}`, boxShadow: person.isYou ? "0 0 16px rgba(45,204,112,0.08)" : "none" }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                style={{ fontFamily: "Syne, sans-serif", background: person.isYou ? "rgba(45,204,112,0.1)" : "var(--bg-elevated)", border: `1.5px solid ${person.isYou ? "var(--accent-mint)" : "var(--border)"}`, color: person.isYou ? "var(--accent-mint)" : "var(--text-muted)" }}>
                {person.initials}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>{person.name}</span>
                  {person.isYou && (
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(45,204,112,0.08)", color: "var(--accent-mint)", border: "1px solid rgba(45,204,112,0.25)" }}>You</span>
                  )}
                </div>
                <p className="text-xs truncate" style={{ color: "var(--text-muted)" }}>{person.role}</p>
                <div className="flex gap-1.5 mt-1.5 flex-wrap">
                  {person.skills.map((s) => (
                    <span key={s} className="text-xs px-2 py-0.5 rounded" style={{ background: "var(--bg-elevated)", color: "var(--text-secondary)" }}>{s}</span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 flex-shrink-0">
                <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: "rgba(45,204,112,0.1)", color: "var(--accent-green)", fontFamily: "Syne, sans-serif" }}>{person.match}%</span>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>{person.score}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="rounded-2xl p-5 flex flex-col gap-4" style={{ background: "var(--bg-card)", border: "1px solid rgba(45,204,112,0.2)" }}>
          <p className="text-xs uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}>Neha's Skill Match Breakdown</p>
          <div className="flex flex-col gap-3">
            {nehaSkillMatch.map((item, i) => (
              <div key={item.skill} className="flex items-center gap-3">
                <CheckCircle2 size={15} style={{ color: "var(--accent-green)", flexShrink: 0 }} />
                <span className="text-sm w-40 flex-shrink-0" style={{ color: "var(--text-secondary)" }}>{item.skill}</span>
                <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: "var(--bg-elevated)" }}>
                  <motion.div className="h-full rounded-full"
                    initial={{ width: 0 }} whileInView={{ width: `${item.score}%` }} viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.08 }}
                    style={{ background: "linear-gradient(90deg, var(--accent-green), var(--accent-mint))" }} />
                </div>
                <span className="text-sm font-semibold w-10 text-right flex-shrink-0" style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-mint)" }}>{item.score}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="rounded-2xl p-8 flex flex-col items-center gap-6 text-center"
          style={{ background: "linear-gradient(135deg, rgba(45,204,112,0.08), rgba(26,255,122,0.03))", border: "1px solid rgba(45,204,112,0.25)", boxShadow: "0 0 40px rgba(45,204,112,0.06)" }}>
          <h2 className="text-3xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "var(--text-primary)" }}>
            Aaptor turns Sales capability chaos <span style={{ color: "var(--accent-mint)" }}>into clarity</span>
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {["420 Sales employees mapped", "5 matched in 0.2s", "93% accuracy"].map((pill) => (
              <span key={pill} className="text-sm font-semibold px-4 py-2 rounded-full"
                style={{ background: "rgba(45,204,112,0.08)", color: "var(--accent-mint)", border: "1px solid rgba(45,204,112,0.2)", fontFamily: "Syne, sans-serif" }}>{pill}</span>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap justify-center">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90"
              style={{ background: "var(--accent-mint)", color: "var(--bg-primary)", fontFamily: "Syne, sans-serif", border: "none", cursor: "pointer" }}>
              Request a Demo <ArrowRight size={15} />
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-80"
              style={{ background: "transparent", color: "var(--accent-mint)", border: "1px solid rgba(45,204,112,0.3)", fontFamily: "Syne, sans-serif", cursor: "pointer" }}>
              Learn More
            </button>
          </div>
        </motion.div>
      </motion.div>
    </DemoLayout>
  );
}
