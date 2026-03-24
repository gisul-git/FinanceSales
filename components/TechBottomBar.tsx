"use client";

import { usePathname, useRouter } from "next/navigation";
import { pages } from "@/lib/demoData";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TechBottomBar() {
  const pathname = usePathname();
  const router = useRouter();
  const currentIndex = pages.findIndex((p) => p.path === pathname);

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < pages.length - 1;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
      style={{
        background: "var(--bg-card)",
        borderTop: "1px solid var(--border)",
        boxShadow: "0 -1px 8px rgba(0,0,0,0.05)",
      }}
    >
      <button
        onClick={() => hasPrev && router.push(pages[currentIndex - 1].path)}
        disabled={!hasPrev}
        className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200"
        style={{
          border: `1px solid ${hasPrev ? "var(--border-bright)" : "var(--border)"}`,
          color: hasPrev ? "var(--accent-mint)" : "var(--text-muted)",
          background: "transparent",
          cursor: hasPrev ? "pointer" : "not-allowed",
          opacity: hasPrev ? 1 : 0.45,
        }}
      >
        <ArrowLeft size={15} />
        Back
      </button>

      <span className="text-xs font-medium" style={{ color: "var(--text-muted)" }}>
        {currentIndex + 1} / {pages.length}
      </span>

      <button
        onClick={() => hasNext && router.push(pages[currentIndex + 1].path)}
        disabled={!hasNext}
        className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
        style={{
          background: hasNext ? "var(--accent-mint)" : "var(--border)",
          color: hasNext ? "var(--bg-primary)" : "var(--text-muted)",
          border: "none",
          cursor: hasNext ? "pointer" : "not-allowed",
          opacity: hasNext ? 1 : 0.5,
        }}
      >
        Next
        <ArrowRight size={15} />
      </button>
    </div>
  );
}
