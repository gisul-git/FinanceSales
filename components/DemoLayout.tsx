"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { financePages } from "@/lib/financeData";
import { salesPages } from "@/lib/salesData";

interface DemoLayoutProps {
  persona: "finance" | "sales";
  currentPage: number; // 1-indexed
  children: React.ReactNode;
}

export default function DemoLayout({ persona, currentPage, children }: DemoLayoutProps) {
  const router = useRouter();
  const pages = persona === "finance" ? financePages : salesPages;
  const name  = persona === "finance" ? "Arjun Mehta" : "Neha Kapoor";
  const initials = persona === "finance" ? "AM" : "NK";

  const idx     = currentPage - 1;
  const hasPrev = idx > 0;
  const hasNext = idx < pages.length - 1;

  function go(dir: "prev" | "next") {
    const target = dir === "prev" ? pages[idx - 1] : pages[idx + 1];
    if (target) router.push(target.path);
  }

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      {/* ── Navbar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
        style={{
          background: "var(--bg-card)",
          borderBottom: "1px solid var(--border)",
          boxShadow: "0 1px 12px rgba(0,0,0,0.08)",
        }}
      >
        {/* Logo */}
        <span
          className="font-bold text-xl tracking-tight"
          style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-mint)" }}
        >
          Aaptor
        </span>

        {/* Progress dots */}
        <div className="flex items-center gap-2">
          {pages.map((_, i) => {
            const isActive = i === idx;
            const isDone   = i < idx;
            return (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width:           isActive ? "28px" : "8px",
                  height:          "8px",
                  backgroundColor: isDone
                    ? "var(--accent-green)"
                    : isActive
                    ? "var(--accent-mint)"
                    : "var(--border)",
                }}
              />
            );
          })}
        </div>

        {/* Avatar + name */}
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
            style={{
              fontFamily: "Syne, sans-serif",
              background: "var(--bg-elevated)",
              color: "var(--accent-mint)",
              border: "1.5px solid var(--border)",
            }}
          >
            {initials}
          </div>
          <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
            {name}
          </span>
        </div>
      </nav>

      {/* ── Page content ── */}
      <main>{children}</main>

      {/* ── Bottom bar ── */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
        style={{
          background: "var(--bg-card)",
          borderTop: "1px solid var(--border)",
          boxShadow: "0 -1px 12px rgba(0,0,0,0.06)",
        }}
      >
        <button
          onClick={() => go("prev")}
          disabled={!hasPrev}
          className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
          style={{
            border:     `1px solid ${hasPrev ? "var(--border-bright)" : "var(--border)"}`,
            color:      hasPrev ? "var(--accent-mint)" : "var(--text-muted)",
            background: "transparent",
            cursor:     hasPrev ? "pointer" : "not-allowed",
            opacity:    hasPrev ? 1 : 0.4,
          }}
        >
          <ArrowLeft size={15} />
          Back
        </button>

        <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
          {currentPage} / {pages.length}
        </span>

        <button
          onClick={() => go("next")}
          disabled={!hasNext}
          className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
          style={{
            background: hasNext ? "var(--accent-mint)" : "var(--border)",
            color:      hasNext ? "var(--bg-primary)" : "var(--text-muted)",
            border:     "none",
            cursor:     hasNext ? "pointer" : "not-allowed",
            opacity:    hasNext ? 1 : 0.5,
          }}
        >
          Next
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}
