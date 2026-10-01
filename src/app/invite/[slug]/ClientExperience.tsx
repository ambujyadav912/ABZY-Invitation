"use client";

import { useState, useEffect } from "react";
import { FadeIn, ScaleReveal } from "@/components/ui/Animation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { InvitationData } from "@/lib/types";
import { InvitationRenderer } from "@/components/invitations/InvitationRenderer";
import Link from "next/link";

type Stage = "NAME_ENTRY" | "INTRO" | "INVITATION";

export function ClientExperience({ invitation }: { invitation: InvitationData }) {
  const [stage, setStage] = useState<Stage>("NAME_ENTRY");
  const [name, setName] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setStage("INTRO");
    }
  };

  if (!isMounted) return null; // Avoid hydration mismatch

  if (stage === "NAME_ENTRY") {
    return (
      <div className="min-h-[100dvh] bg-obsidian text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        {/* Subtle cinematic background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-carbon via-obsidian to-obsidian" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        
        <FadeIn className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center">
          <div className="w-16 h-px bg-white/20 mb-10" />
          <h1 className="text-sm md:text-base uppercase tracking-[0.4em] text-ash mb-12 font-medium leading-loose">
            You&apos;ve received a<br/>special invitation
          </h1>
          
          <form onSubmit={handleNameSubmit} className="w-full space-y-8 bg-carbon/40 p-8 md:p-12 rounded-[2rem] border border-white/5 backdrop-blur-md shadow-2xl">
            <div className="space-y-4">
              <label className="block text-xl font-light text-white mb-6">What's your name?</label>
              <Input 
                placeholder="Enter your name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-center text-xl h-16 bg-obsidian/50 border-white/10 rounded-2xl focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-white/20"
                autoFocus
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={!name.trim()}
              className="w-full h-16 bg-white text-obsidian font-bold uppercase tracking-widest text-sm rounded-2xl hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              Continue
            </button>
          </form>
        </FadeIn>
      </div>
    );
  }

  if (stage === "INTRO") {
    return (
      <div className="min-h-[100dvh] bg-obsidian text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-carbon to-obsidian" />
        
        <div className="relative z-10 space-y-12 max-w-2xl w-full flex flex-col items-center">
          <FadeIn delay={0.3}>
            <div className="text-xs uppercase tracking-[0.4em] text-ash mb-4">Created by</div>
            <div className="text-4xl md:text-5xl font-bold tracking-wider text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              ABZY
            </div>
          </FadeIn>

          <FadeIn delay={1.5}>
            <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent mx-auto" />
          </FadeIn>

          <FadeIn delay={2.5}>
            <div className="text-xl md:text-2xl text-ash font-light italic">
              has created something special for
            </div>
          </FadeIn>

          <ScaleReveal delay={4.0}>
            <div className="text-5xl md:text-7xl font-bold text-white tracking-tight uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              {name}
            </div>
          </ScaleReveal>

          <FadeIn delay={6.0} className="pt-12">
            <button 
              onClick={() => setStage("INVITATION")}
              className="group relative px-10 py-5 bg-transparent overflow-hidden rounded-full border border-white/20 hover:border-white transition-all duration-500"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 text-sm font-bold uppercase tracking-[0.3em] text-white group-hover:text-obsidian transition-colors duration-500">
                View Invitation
              </span>
            </button>
          </FadeIn>
        </div>
      </div>
    );
  }

  // INVITATION Stage
  const renderData = { ...invitation, recipientName: name };

  return (
    <div className="min-h-[100dvh] bg-obsidian text-white flex flex-col w-full overflow-x-hidden selection:bg-white/20">
      
      {/* 1. Exact Finalized Invitation */}
      <main className="w-full relative">
        <InvitationRenderer data={renderData} />
      </main>

      {/* 2. Premium Feedback & CTA Section */}
      <footer className="w-full bg-obsidian border-t border-white/5 relative z-50 overflow-hidden pt-24 pb-32 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-carbon/50 via-obsidian to-obsidian pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          
          <FadeIn>
            <div className="mb-24">
              <h3 className="text-3xl md:text-4xl font-light text-white mb-10 tracking-tight">
                How did you like this invitation?
              </h3>
              
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScMockFormId/viewform" // Placeholder Google Form
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="px-10 py-4 rounded-full border border-white/20 bg-white/5 text-white font-medium hover:bg-white hover:text-obsidian transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] text-sm tracking-widest uppercase">
                  Give Feedback
                </button>
              </a>
            </div>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-24" />

            <div className="bg-carbon/40 border border-white/5 rounded-[3rem] p-10 md:p-16 backdrop-blur-sm shadow-2xl">
              <div className="text-xs uppercase tracking-[0.3em] text-ash mb-4 font-bold">Experience ABZY</div>
              <h4 className="text-4xl font-bold text-white mb-6">Want an invitation like this?</h4>
              <p className="text-lg text-ash leading-relaxed max-w-lg mx-auto mb-12">
                Let ABZY create a professionally designed digital invitation for your next special occasion.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-white text-obsidian font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  Contact ABZY
                </Link>
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-ash">
                <a href="mailto:ahirambuj4@gmail.com" className="hover:text-white transition-colors">ahirambuj4@gmail.com</a>
                <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
                <a href="tel:8652460120" className="hover:text-white transition-colors">8652460120</a>
                <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full" />
                <a href="https://instagram.com/abzy_cartoon_2026" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@abzy_cartoon_2026</a>
              </div>
            </div>
          </FadeIn>

        </div>
      </footer>
    </div>
  );
}
