"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { InvitationData } from "@/lib/types";
import { getAllInvitations, deleteInvitationAction, updateInvitationStatusAction } from "@/app/actions/adminActions";
import Link from "next/link";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Eye, Edit2, Copy, Trash, Loader2 } from "lucide-react";

export default function ManageInvitations() {
  const [invitations, setInvitations] = useState<InvitationData[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const reload = () => {
    setError(null);
    setRefreshKey((k) => k + 1);
  };

  useEffect(() => {
    let active = true;
    getAllInvitations()
      .then((data) => {
        if (active) setInvitations(data);
      })
      .catch((err: unknown) => {
        if (active) {
          setError(err instanceof Error ? err.message : "Failed to load invitations");
        }
      });
    return () => {
      active = false;
    };
  }, [refreshKey]);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this invitation?")) {
      await deleteInvitationAction(id);
      reload();
    }
  };

  const handleStatus = async (id: string, current: string) => {
    const next: InvitationData["status"] = current === "published" ? "draft" : "published";
    await updateInvitationStatusAction(id, next);
    reload();
  };

  const copyLink = (slug: string) => {
    navigator.clipboard.writeText(`${window.location.origin}/invite/${slug}`);
    alert("Link copied!");
  };

  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
        <AnimatedBackground />
        <p className="text-red-400 font-medium">{error}</p>
        <Button onClick={reload} variant="secondary">Retry</Button>
      </div>
    );
  }

  if (!invitations) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <AnimatedBackground />
        <Loader2 className="w-8 h-8 text-blue-accent animate-spin" />
      </div>
    );
  }

  return (
    <>
      <AnimatedBackground />
      <div className="space-y-8 pb-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Manage Invitations</h1>
            <p className="text-ash text-lg">View and edit all generated invitations.</p>
          </div>
          <Link href="/admin/create">
            <Button>Create New</Button>
          </Link>
        </div>

        <Card variant="glass" className="overflow-hidden border-white/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-slate text-sm">
                  <th className="p-4 font-medium">Event Title</th>
                  <th className="p-4 font-medium">Type</th>
                  <th className="p-4 font-medium">Recipient</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Created</th>
                  <th className="p-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {invitations.length === 0 && (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-ash">No invitations found.</td>
                  </tr>
                )}
                {invitations.map((inv) => (
                  <tr key={inv.id} className="hover:bg-white/5 transition-colors group">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        {inv.photoUrl ? (
                          <img src={inv.photoUrl} alt="" className="w-10 h-10 rounded-lg object-cover" />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-obsidian flex items-center justify-center text-sm border border-white/10">
                            {inv.type === 'Wedding' ? '💍' : '🎉'}
                          </div>
                        )}
                        <div>
                          <div className="font-bold text-white">{inv.eventTitle}</div>
                          <div className="text-xs text-ash">{inv.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-ash">{inv.type}</td>
                    <td className="p-4 text-ash">{inv.recipientName || "Guest"}</td>
                    <td className="p-4">
                      <button 
                        onClick={() => handleStatus(inv.id, inv.status)}
                        className={`text-xs px-2 py-1 rounded-full border ${
                          inv.status === 'published' ? 'border-green-500/30 text-green-500 bg-green-500/10' : 
                          'border-amber-500/30 text-amber-500 bg-amber-500/10'
                        }`}
                      >
                        {inv.status.toUpperCase()}
                      </button>
                    </td>
                    <td className="p-4 text-ash">{new Date(inv.createdAt).toLocaleDateString()}</td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2 opacity-50 group-hover:opacity-100 transition-opacity">
                        <Link href={`/admin/create?id=${inv.id}`}>
                          <Button variant="ghost" size="sm" title="Edit">
                            <Edit2 className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm" onClick={() => copyLink(inv.slug)} title="Copy Link">
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Link href={`/invite/${inv.slug}`} target="_blank">
                          <Button variant="ghost" size="sm" title="Preview">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm" onClick={() => handleDelete(inv.id)} title="Delete" className="text-red-400 hover:text-red-300 hover:bg-red-400/10">
                          <Trash className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </>
  );
}
