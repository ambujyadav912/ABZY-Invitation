"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Founder", href: "/founder" },
  { name: "Invitations", href: "/#invitations" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  
  // Hide navbar on invite links to keep the cinematic experience pure
  if (pathname.startsWith("/invite/")) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-obsidian/80 backdrop-blur-md border-b border-white/5">
      <div className="flex items-center gap-12">
        <Link href="/" className="flex items-center">
          <Logo className="w-10 h-10 md:w-12 md:h-12" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-ash hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Link href="/request">
          <Button variant="primary" size="sm" className="hidden md:inline-flex">
            Create Your Invitation
          </Button>
        </Link>
        {/* Mobile menu trigger could go here */}
      </div>
    </nav>
  );
}
