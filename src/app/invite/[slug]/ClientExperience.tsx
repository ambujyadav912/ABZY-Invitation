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
        
        {/* Background ABZY Cinematic 3D Environment */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none bg-[#08080a]" style={{ perspective: '1200px' }}>
          {/* Deep dark gradient with subtle blue/champagne highlights */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#131520] via-[#08080a] to-[#030303]" />
          
          <div className="absolute top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite] motion-reduce:animate-none" />
          <div className="absolute bottom-[20%] -right-[10%] w-[40vw] h-[40vw] bg-amber-500/5 rounded-full blur-[120px] animate-[pulse_14s_ease-in-out_infinite] motion-reduce:animate-none" />
          
          {/* BACKGROUND LAYER: Faint embossed typography */}
          <div className="absolute inset-0 opacity-[0.015] motion-reduce:opacity-[0.01]">
            <div className="absolute top-[20%] left-[5%] text-[25vw] font-black tracking-tighter" style={{ animation: 'float3D-1 40s infinite linear' }}>A</div>
            <div className="absolute top-[60%] left-[65%] text-[20vw] font-black tracking-widest hidden md:block" style={{ animation: 'float3D-2 45s infinite linear reverse' }}>B</div>
            <div className="absolute top-[10%] left-[75%] text-[15vw] font-black" style={{ animation: 'float3D-3 35s infinite linear' }}>Z</div>
            <div className="absolute top-[70%] left-[10%] text-[18vw] font-black hidden md:block" style={{ animation: 'float3D-4 50s infinite linear reverse' }}>Y</div>
          </div>

          {/* MIDDLE LAYER: Small illuminated 3D logos / wordmarks */}
          <div className="absolute inset-0 opacity-20 motion-reduce:hidden">
            <div className="absolute top-[15%] left-[20%] w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ animation: 'float3D-2 30s infinite ease-in-out' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-transparent.png" className="w-full h-full object-contain brightness-150" alt="" />
            </div>
            <div className="absolute bottom-[25%] right-[15%] w-8 h-8 md:w-12 md:h-12 drop-shadow-[0_0_8px_rgba(150,200,255,0.4)]" style={{ animation: 'float3D-1 25s infinite ease-in-out' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-transparent.png" className="w-full h-full object-contain brightness-125" alt="" />
            </div>
            <div className="absolute top-[35%] right-[10%] text-xl md:text-2xl font-black tracking-widest text-white/40 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] hidden md:block" style={{ animation: 'float3D-3 35s infinite ease-in-out' }}>
              ABZY
            </div>
            <div className="absolute bottom-[30%] left-[15%] text-lg md:text-xl font-bold tracking-widest text-blue-100/30 drop-shadow-[0_0_10px_rgba(150,200,255,0.2)] hidden md:block" style={{ animation: 'float3D-4 40s infinite ease-in-out' }}>
              ABZY
            </div>
          </div>

          {/* FOREGROUND LAYER: Very small subtle floating glass/metallic elements & particles */}
          <div className="absolute inset-0 opacity-40 motion-reduce:hidden z-0">
            <div className="absolute top-[50%] left-[8%] w-8 h-8 md:w-10 md:h-10 rounded-lg backdrop-blur-md border border-white/10 bg-white/5 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)]" style={{ animation: 'float3D-1 20s infinite ease-in-out' }}>
              <span className="text-[10px] font-bold text-white/50 tracking-widest">A</span>
            </div>
            <div className="absolute top-[75%] right-[8%] w-10 h-10 md:w-12 md:h-12 rounded-full backdrop-blur-sm border border-white/5 bg-white/5 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.02)] hidden md:flex" style={{ animation: 'float3D-2 22s infinite ease-in-out reverse' }}>
              <span className="text-[12px] font-bold text-white/30 tracking-widest">ZY</span>
            </div>
            
            <div className="absolute top-[30%] left-[-10%] w-[40%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-[35deg]" style={{ animation: 'float3D-3 20s infinite linear' }} />
            <div className="absolute bottom-[40%] right-[-10%] w-[30%] h-px bg-gradient-to-r from-transparent via-blue-200/10 to-transparent -rotate-[45deg] hidden md:block" style={{ animation: 'float3D-4 25s infinite linear' }} />

            <div className="absolute top-[20%] left-[40%] w-1 h-1 bg-white rounded-full blur-[1px] animate-[pulse_4s_ease-in-out_infinite]" />
            <div className="absolute top-[80%] left-[30%] w-1 h-1 bg-blue-200 rounded-full blur-[1px] animate-[pulse_5s_ease-in-out_infinite_1s]" />
            <div className="absolute top-[40%] right-[35%] w-1.5 h-1.5 bg-amber-100 rounded-full blur-[2px] animate-[pulse_6s_ease-in-out_infinite_2s]" />
            <div className="absolute bottom-[20%] right-[30%] w-1 h-1 bg-white rounded-full blur-[1px] animate-[pulse_3s_ease-in-out_infinite_3s]" />
            <div className="absolute top-[60%] left-[80%] w-2 h-2 bg-blue-100 rounded-full blur-[2px] animate-[pulse_7s_ease-in-out_infinite]" />
            <div className="absolute top-[15%] left-[80%] w-1 h-1 bg-white rounded-full blur-[1px] animate-[pulse_5s_ease-in-out_infinite]" />
            <div className="absolute bottom-[10%] left-[50%] w-1 h-1 bg-amber-100/50 rounded-full blur-[1px] animate-[pulse_6s_ease-in-out_infinite_1s]" />
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes floatLogo {
            0% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
            50% { transform: translateY(-8px) rotateX(5deg) rotateY(5deg); }
            100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg); }
          }
          @keyframes float3D-1 {
            0% { transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg); }
            33% { transform: translate3d(20px, -30px, 30px) rotateX(8deg) rotateY(12deg); }
            66% { transform: translate3d(-15px, 20px, -20px) rotateX(-5deg) rotateY(-8deg); }
            100% { transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg); }
          }
          @keyframes float3D-2 {
            0% { transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg); }
            33% { transform: translate3d(-25px, 15px, 40px) rotateX(-10deg) rotateY(5deg); }
            66% { transform: translate3d(10px, -25px, -30px) rotateX(5deg) rotateY(-10deg); }
            100% { transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg); }
          }
          @keyframes float3D-3 {
            0% { transform: translate3d(0, 0, 0) rotateZ(0deg) scale(1); }
            50% { transform: translate3d(15px, 25px, 20px) rotateZ(5deg) scale(1.05); }
            100% { transform: translate3d(0, 0, 0) rotateZ(0deg) scale(1); }
          }
          @keyframes float3D-4 {
            0% { transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1); }
            50% { transform: translate3d(-20px, -20px, 50px) rotateX(15deg) rotateY(-15deg) scale(1.1); }
            100% { transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg) scale(1); }
          }
        `}} />

        <div className="relative z-10 space-y-8 max-w-3xl w-full flex flex-col items-center">
          
          <FadeIn delay={0.2}>
            <div className="text-xs md:text-sm uppercase tracking-[0.4em] text-ash font-medium mb-1">
              CREATED BY
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div 
              className="my-3 relative perspective-1000 flex justify-center items-center"
              style={{ perspective: '1000px' }}
            >
              <div 
                className="w-24 h-24 md:w-32 md:h-32 motion-reduce:animate-none flex justify-center items-center"
                style={{
                  animation: 'floatLogo 6s ease-in-out infinite',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/logo-transparent.png" 
                  alt="ABZY Logo" 
                  className="w-full h-full object-contain transition-transform duration-1000 hover:scale-105 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] brightness-110" 
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={1.2}>
            <div className="text-4xl md:text-5xl font-black tracking-[0.25em] text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] mt-1">
              ABZY
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
