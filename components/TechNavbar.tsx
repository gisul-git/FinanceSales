"use client";

import { pages, employee } from "@/lib/demoData";
import { usePathname } from "next/navigation";

export default function TechNavbar() {
  const pathname = usePathname();
  const currentIndex = pages.findIndex((p) => p.path === pathname);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
      style={{
        background: "var(--bg-card)",
        borderBottom: "1px solid var(--border)",
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
      }}
    >
      <span
        className="font-bold text-xl tracking-tight"
        style={{ fontFamily: "Syne, sans-serif", color: "var(--accent-mint)" }}
      >
        Aaptor
      </span>

      <div className="flex items-center gap-2">
        {pages.map((page, i) => {
          const isActive = i === currentIndex;
          const isDone = i < currentIndex;
          return (
            <div
              key={page.id}
              title={page.title}
              className="rounded-full transition-all duration-300"
              style={{
                width: isActive ? "28px" : "8px",
                height: "8px",
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
          {employee.avatar}
        </div>
        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
          {employee.name}
        </span>
      </div>
    </nav>
  );
}
