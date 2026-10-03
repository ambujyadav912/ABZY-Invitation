"use client";

import { useState, useSyncExternalStore } from "react";
import { FadeIn, ScaleReveal } from "@/components/ui/Animation";
import { Input } from "@/components/ui/Input";
import { InvitationData } from "@/lib/types";
import { InvitationRenderer } from "@/components/invitations/InvitationRenderer";
import Link from "next/link";

type Stage = "NAME_ENTRY" | "INTRO" | "INVITATION";

const emptySubscribe = () => () => {};

export function ClientExperience({ invitation }: { invitation: InvitationData }) {
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const [name, setName] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem(`abzy_guest_${invitation.slug}`) || "";
    }
    return "";
  });

  const [stage, setStage] = useState<Stage>(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem(`abzy_guest_${invitation.slug}`)) {
      return "INVITATION";
    }
    return "NAME_ENTRY";
  });

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem(`abzy_guest_${invitation.slug}`, trimmed);
      }
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
              <label className="block text-xl font-light text-white mb-6">What&apos;s your name?</label>
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
    const isOther = invitation.type.toLowerCase() === "other";
    const invitationTitle = isOther ? invitation.eventTitle : `${invitation.type} Invitation`;

    return (
      <div className="min-h-[100dvh] bg-obsidian text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden perspective-1000">
        
        {/* Background ABZY Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          <div className="absolute inset-0 bg-obsidian" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a1a24] via-obsidian to-obsidian" />
          
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-blue-500/10 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite] motion-reduce:animate-none" />
            <div className="absolute top-[60%] -right-[10%] w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[120px] animate-[pulse_12s_ease-in-out_infinite] motion-reduce:animate-none" />
          </div>

          <div className="absolute inset-0 opacity-40 motion-reduce:hidden">
            <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-white rounded-full blur-[2px] animate-[pulse_3s_ease-in-out_infinite]" />
            <div className="absolute top-[70%] left-[20%] w-1.5 h-1.5 bg-blue-300 rounded-full blur-[1px] animate-[pulse_4s_ease-in-out_infinite_1s]" />
            <div className="absolute top-[40%] right-[30%] w-2.5 h-2.5 bg-white rounded-full blur-[2px] animate-[pulse_5s_ease-in-out_infinite_2s]" />
            <div className="absolute bottom-[20%] right-[20%] w-2 h-2 bg-blue-200 rounded-full blur-[2px] animate-[pulse_3s_ease-in-out_infinite_3s]" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] motion-reduce:opacity-[0.02]">
            <div 
              className="text-[35vw] font-black text-white tracking-widest motion-reduce:transform-none"
              style={{
                animation: 'slowPan 30s ease-in-out infinite alternate',
              }}
            >
              ABZY
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slowPan {
            0% { transform: scale(1) translate(0px, 0px); }
            100% { transform: scale(1.1) translate(20px, -20px); }
          }
          @keyframes floatLogo {
            0% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
            50% { transform: translateY(-8px) rotateX(5deg) rotateY(5deg); }
            100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          }
        `}} />

        <div className="relative z-10 space-y-8 max-w-3xl w-full flex flex-col items-center">
          
          <FadeIn delay={0.2}>
            <div className="text-xs md:text-sm uppercase tracking-[0.4em] text-ash font-medium">
              CREATED BY
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="text-3xl md:text-4xl font-bold tracking-[0.2em] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              ABZY
            </div>
          </FadeIn>

          <FadeIn delay={1.2}>
            <div 
              className="my-2 relative perspective-1000"
              style={{ perspective: '1000px' }}
            >
              <div 
                className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.15)] motion-reduce:animate-none"
                style={{
                  animation: 'floatLogo 6s ease-in-out infinite',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/logo.jpg" 
                  alt="ABZY Logo" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110" 
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={1.8}>
            <div className="text-xs md:text-sm uppercase tracking-[0.3em] text-blue-100/60 border-b border-blue-100/10 pb-2 px-4">
              {invitationTitle}
            </div>
          </FadeIn>

          <FadeIn delay={2.6}>
            <div className="text-lg md:text-xl text-ash font-light italic mt-4">
              <span className="font-medium text-white not-italic">{invitation.creatorName}</span> has created something special for
            </div>
          </FadeIn>

          <ScaleReveal delay={3.4}>
            <div className="text-5xl md:text-7xl font-bold text-white tracking-tight uppercase drop-shadow-[0_0_30px_rgba(255,255,255,0.25)] my-2">
              {name}
            </div>
          </ScaleReveal>

          <FadeIn delay={4.2}>
            <div className="text-xs md:text-sm text-ash/80 tracking-[0.2em] uppercase font-light mt-2">
              An invitation specially prepared for you
            </div>
          </FadeIn>

          <FadeIn delay={5.2} className="pt-8">
            <button 
              onClick={() => setStage("INVITATION")}
              className="group relative px-10 py-5 bg-white/5 overflow-hidden rounded-full border border-white/20 hover:border-white/60 transition-all duration-700 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:-translate-y-1 motion-reduce:hover:translate-y-0"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out motion-reduce:transition-none" />
              <span className="relative z-10 text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-white group-hover:text-obsidian transition-colors duration-500">
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
              
              <Link 
                href={`/feedback?invite=${invitation.slug}`}
                className="inline-block"
              >
                <button className="px-10 py-4 rounded-full border border-white/20 bg-white/5 text-white font-medium hover:bg-white hover:text-obsidian transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] text-sm tracking-widest uppercase">
                  Give Feedback
                </button>
              </Link>
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
