"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  
  if (pathname.startsWith("/invite/")) return null;

  return (
    <footer className="border-t border-white/5 bg-obsidian py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-bold tracking-wider text-white">
            ABZY
          </Link>
          <p className="text-sm text-ash text-center md:text-left">
            ARCHIVE AND BUILD WITH ABZY
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm text-ash hover:text-white transition-colors">Home</Link>
          <Link href="/#invitations" className="text-sm text-ash hover:text-white transition-colors">Invitations</Link>
          <Link href="/contact" className="text-sm text-ash hover:text-white transition-colors">Contact</Link>
          <Link href="/feedback" className="text-sm text-ash hover:text-white transition-colors">Feedback</Link>
        </div>
        
        <div className="text-xs text-slate">
          © {new Date().getFullYear()} ABZY. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
