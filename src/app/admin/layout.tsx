"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, PlusCircle, List, Settings } from "lucide-react";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Create", href: "/admin/create", icon: PlusCircle },
  { name: "Invitations", href: "/admin/invitations", icon: List },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-obsidian flex flex-col md:flex-row pt-[72px]">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-white/10 bg-graphite md:fixed md:bottom-0 md:top-[72px] left-0">
        <nav className="p-4 space-y-2 flex md:flex-col overflow-x-auto md:overflow-x-visible">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors min-w-max",
                  isActive 
                    ? "bg-steel text-white" 
                    : "text-ash hover:text-white hover:bg-carbon"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-6 md:p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
