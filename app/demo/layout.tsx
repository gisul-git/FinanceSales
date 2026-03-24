import TechNavbar from "@/components/TechNavbar";
import TechBottomBar from "@/components/TechBottomBar";
import { ReactNode } from "react";

export default function DemoLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <TechNavbar />
      <main>{children}</main>
      <TechBottomBar />
    </div>
  );
}
