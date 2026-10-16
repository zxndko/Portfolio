import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "@/lib/data";

const description =
  "Portfolio of Chompoonuch Tubtimsri, a junior frontend developer building clean, intuitive, and responsive web interfaces with Next.js, React, TypeScript, and Tailwind CSS.";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description,
  openGraph: { title: `${profile.name} | ${profile.role}`, description, type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#EEF7FB",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Marks JS as available so scroll reveals only hide content when they can also show it */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
