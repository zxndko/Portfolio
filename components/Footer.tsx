import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="wrap border-t border-deep/15 py-8 text-sm muted">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with Next.js, React, TypeScript and Tailwind CSS.
      </p>
    </footer>
  );
}
