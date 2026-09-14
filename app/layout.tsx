import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eyüp Akdeniz — Software Developer",
  description: "Software developer in Istanbul. Java, Spring Boot, distributed systems, and end-to-end ownership from data models to deployment.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

