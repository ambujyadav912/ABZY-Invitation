"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "@/components/ui/Animation";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { RequestData } from "@/lib/types";
import { getAllRequestsAction, updateRequestStatusAction } from "@/app/actions/requestActions";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Loader2 } from "lucide-react";

export default function ViewRequests() {
  const [requests, setRequests] = useState<RequestData[] | null>(null);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getAllRequestsAction();
    setRequests(data);
  }

  const handleStatus = async (id: string, current: string) => {
    const statuses = ["New", "Contacted", "In Progress", "Completed"];
    const nextIdx = (statuses.indexOf(current) + 1) % statuses.length;
    await updateRequestStatusAction(id, statuses[nextIdx] as any);
    load();
  };

  if (!requests) {
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
        <div>
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">View Requests</h1>
          <p className="text-ash text-lg">Manage invitation requests from the public website.</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {requests.length === 0 && (
             <div className="p-8 text-center text-ash bg-carbon/40 rounded-2xl border border-white/5">
               No requests yet.
             </div>
          )}
          {requests.map((req, i) => (
            <FadeIn key={req.id} delay={i * 0.1}>
              <Card variant="glass" className="p-6 border-white/5">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold text-white">{req.customerName}</h2>
                      <button 
                        onClick={() => handleStatus(req.id, req.status)}
                        className={`text-xs font-bold px-3 py-1.5 rounded-full border ${
                          req.status === 'New' ? 'border-blue-accent/30 text-blue-accent bg-blue-accent/10' :
                          req.status === 'Contacted' ? 'border-amber-500/30 text-amber-500 bg-amber-500/10' :
                          req.status === 'In Progress' ? 'border-purple-500/30 text-purple-500 bg-purple-500/10' :
                          'border-green-500/30 text-green-500 bg-green-500/10'
                        }`}
                      >
                        {req.status.toUpperCase()}
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-slate uppercase tracking-wider mb-1">Contact</div>
                        <div className="text-ash"><a href={`mailto:${req.email}`} className="hover:text-blue-accent">{req.email}</a></div>
                        <div className="text-ash"><a href={`tel:${req.phone}`} className="hover:text-blue-accent">{req.phone}</a></div>
                      </div>
                      <div>
                        <div className="text-xs text-slate uppercase tracking-wider mb-1">Event Info</div>
                        <div className="text-ash">{req.invitationType} • {req.eventDate}</div>
                        <div className="text-ash">{req.venue}</div>
                      </div>
                    </div>

                    <div className="bg-obsidian/50 p-4 rounded-xl border border-white/5 text-ash mt-4 italic">
                      "{req.message}"
                    </div>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  );
}
