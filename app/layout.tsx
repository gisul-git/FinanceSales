import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaptor Demo",
  description: "Non-tech professional performance demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
