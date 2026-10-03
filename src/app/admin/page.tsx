"use client";

import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/Animation";
import { FileText, Send, MailOpen, Plus, Edit2, Loader2 } from "lucide-react";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { InvitationData } from "@/lib/types";
import { getDashboardStats } from "@/app/actions/adminActions";

export default function AdminDashboard() {
  const [stats, setStats] = useState<{ total: number; published: number; drafts: number; requests: number; recentInvitations: InvitationData[] } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const reload = () => {
    setError(null);
    setRefreshKey((k) => k + 1);
  };

  useEffect(() => {
    let active = true;
    getDashboardStats()
      .then((data) => {
        if (active) setStats(data);
      })
      .catch((err: unknown) => {
        if (active) {
          setError(err instanceof Error ? err.message : "Failed to load dashboard statistics");
        }
      });
    return () => {
      active = false;
    };
  }, [refreshKey]);

  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
        <AnimatedBackground />
        <p className="text-red-400 font-medium">{error}</p>
        <Button onClick={reload} variant="secondary">Retry</Button>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <AnimatedBackground />
        <Loader2 className="w-8 h-8 text-blue-accent animate-spin" />
      </div>
    );
  }

  const statCards = [
    { label: "Total Invitations", value: stats.total, icon: FileText, color: "text-blue-accent" },
    { label: "Published", value: stats.published, icon: Send, color: "text-green-500" },
    { label: "Drafts", value: stats.drafts, icon: Edit2, color: "text-amber-500" },
    { label: "Total Requests", value: stats.requests, icon: MailOpen, color: "text-pink-500" },
  ];

  return (
    <>
      <AnimatedBackground />
      <div className="space-y-12 pb-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Overview</h1>
            <p className="text-ash text-lg">Welcome back to the ABZY admin portal.</p>
          </div>
          
          <div className="flex gap-4">
            <Link href="/admin/create">
              <Button className="gap-2 shadow-xl shadow-blue-accent/20">
                <Plus className="w-5 h-5" /> Create Invitation
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <Card variant="glass" className="p-6 flex flex-col gap-4 border-white/10 hover:border-white/20 transition-colors bg-carbon/60 backdrop-blur-xl shadow-2xl">
                  <div className="flex items-center justify-between">
                    <span className="text-slate font-medium">{stat.label}</span>
                    <div className={`p-2 bg-obsidian rounded-full ${stat.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white tracking-tight">
                    {stat.value}
                  </div>
                </Card>
              </FadeIn>
            );
          })}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Recent Invitations</h2>
              <Link href="/admin/invitations" className="text-sm text-blue-accent hover:text-white transition-colors">
                View All →
              </Link>
            </div>
            
            <div className="space-y-4">
              {stats.recentInvitations.length === 0 && (
                <div className="text-ash p-8 bg-carbon/40 rounded-[28px] border border-white/5 text-center">
                  No invitations created yet.
                </div>
              )}
              {stats.recentInvitations.map((inv, i) => (
                <FadeIn key={inv.id} delay={0.2 + (i * 0.1)}>
                  <Card variant="glass" className="p-4 flex flex-col sm:flex-row items-center gap-6 bg-carbon/40 backdrop-blur-md hover:bg-carbon/60 transition-colors border-white/5">
                    {inv.photoUrl ? (
                       <img src={inv.photoUrl} alt={inv.type} className="w-full sm:w-24 h-24 object-cover rounded-2xl border border-white/10 shrink-0" />
                    ) : (
                       <div className="w-full sm:w-24 h-24 bg-obsidian rounded-2xl border border-white/10 flex items-center justify-center shrink-0">
                         <span className="text-2xl">{inv.type === 'Wedding' ? '💍' : (inv.type === 'Birthday' ? '🎂' : '✨')}</span>
                       </div>
                    )}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-lg font-bold text-white">{inv.eventTitle}</h3>
                      <p className="text-sm text-ash mb-2">{inv.recipientName} • {inv.type}</p>
                      <div className="flex items-center justify-center sm:justify-start gap-3">
                        <span className={`text-xs px-2 py-1 rounded-full border ${
                          inv.status === 'published' ? 'border-green-500/30 text-green-500 bg-green-500/10' : 
                          'border-amber-500/30 text-amber-500 bg-amber-500/10'
                        }`}>
                          {inv.status.toUpperCase()}
                        </span>
                        <span className="text-xs text-slate">
                          {new Date(inv.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
                      <Link href={`/admin/invitations`}><Button variant="outline" size="sm" className="w-full">Manage</Button></Link>
                      {inv.status === 'published' && (
                        <Link href={`/invite/${inv.slug}`} target="_blank"><Button variant="secondary" size="sm" className="w-full">View</Button></Link>
                      )}
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Quick Actions</h2>
            <Card variant="glass" className="p-6 space-y-4 bg-carbon/40 backdrop-blur-md border-white/5">
               <Link href="/admin/create" className="block">
                <Button variant="secondary" className="w-full justify-start gap-3 h-14">
                  <Plus className="w-5 h-5 text-blue-accent" /> New Invitation
                </Button>
               </Link>
               <Link href="/admin/invitations" className="block">
                <Button variant="secondary" className="w-full justify-start gap-3 h-14">
                  <FileText className="w-5 h-5 text-ash" /> Manage Invitations
                </Button>
               </Link>
               <Link href="/admin/requests" className="block">
                <Button variant="secondary" className="w-full justify-start gap-3 h-14">
                  <MailOpen className="w-5 h-5 text-ash" /> View Requests
                </Button>
               </Link>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
