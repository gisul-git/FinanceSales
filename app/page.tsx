"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { BarChart2, TrendingUp, ArrowRight } from "lucide-react";

const personas = [
  {
    key: "finance",
    icon: <BarChart2 size={32} />,
    title: "Finance Manager",
    subtitle: "Arjun Mehta · TechCorp · Mumbai",
    description:
      "See how Aaptor benchmarks financial competencies — from FP&A and SAP proficiency to risk management and stakeholder communication.",
    tags: ["FP&A", "SAP", "Risk & Compliance", "Budget Forecasting"],
    cta: "Explore Finance Journey",
    path: "/finance/page1",
  },
  {
    key: "sales",
    icon: <TrendingUp size={32} />,
    title: "Sales Executive",
    subtitle: "Neha Kapoor · TechCorp · Pune",
    description:
      "See how Aaptor maps sales capabilities — from CRM proficiency and negotiation skills to pipeline management and closing rate improvement.",
    tags: ["CRM", "Negotiation", "Pipeline", "Objection Handling"],
    cta: "Explore Sales Journey",
    path: "/sales/page1",
  },
];

const fadeIn = (delay: number) => ({
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const, delay } },
});

const tagStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.6 } },
};
const tagItem = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: "easeOut" as const } },
};

export default function LandingPage() {
  const router = useRouter();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="w-full max-w-3xl flex flex-col items-center gap-10">

        {/* Logo + tagline */}
        <div className="flex flex-col items-center gap-3 text-center">
          <motion.span
            variants={fadeIn(0)}
            initial="hidden"
            animate="show"
            className="font-bold tracking-tight"
            style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-mint)", fontSize: "48px", lineHeight: 1 }}
          >
            aaptor
          </motion.span>

          <motion.p
            variants={fadeIn(0.2)}
            initial="hidden"
            animate="show"
            style={{ fontFamily: "DM Sans, sans-serif", color: "var(--text-secondary)", fontSize: "18px" }}
          >
            Capability intelligence for every role
          </motion.p>

          <motion.div
            variants={fadeIn(0.25)}
            initial="hidden"
            animate="show"
            className="w-24 h-px mt-1"
            style={{ background: "var(--accent-mint)", opacity: 0.35 }}
          />
        </div>

        {/* Section label */}
        <motion.p
          variants={fadeIn(0.35)}
          initial="hidden"
          animate="show"
          className="text-xs uppercase tracking-widest"
          style={{ color: "var(--text-muted)", fontFamily: "Syne, sans-serif" }}
        >
          Select a role demo
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
          {personas.map((p, i) => (
            <motion.div
              key={p.key}
              variants={fadeIn(0.4 + i * 0.1)}
              initial="hidden"
              animate="show"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group flex flex-col gap-5 rounded-2xl p-8 cursor-pointer"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                transition: "border-color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--accent-green)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
              onClick={() => router.push(p.path)}
            >
              {/* Icon */}
              <div style={{ color: "var(--accent-mint)" }}>{p.icon}</div>

              {/* Title + subtitle */}
              <div className="flex flex-col gap-1">
                <h2
                  className="font-bold"
                  style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-mint)", fontSize: "24px" }}
                >
                  {p.title}
                </h2>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>{p.subtitle}</p>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {p.description}
              </p>

              {/* Tags */}
              <motion.div
                variants={tagStagger}
                initial="hidden"
                animate="show"
                className="flex flex-wrap gap-2"
              >
                {p.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    variants={tagItem}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      background: "var(--bg-elevated)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA */}
              <button
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-opacity duration-200 hover:opacity-90"
                style={{
                  background: "var(--accent-mint)",
                  color: "var(--bg-primary)",
                  fontFamily: "Syne, sans-serif",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {p.cta} <ArrowRight size={15} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          variants={fadeIn(0.7)}
          initial="hidden"
          animate="show"
          className="text-xs text-center"
          style={{ color: "var(--text-muted)" }}
        >
          8-page interactive journey · Powered by Aaptor AI
        </motion.p>
      </div>
    </div>
  );
}
