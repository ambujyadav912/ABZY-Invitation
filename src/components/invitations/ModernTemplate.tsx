"use client";
import { FadeIn } from "@/components/ui/Animation";
import { InvitationData } from "@/lib/types";

export function ModernTemplate({ data }: { data: InvitationData }) {
  return (
    <div className="min-h-screen bg-obsidian text-white p-4 md:p-12 flex items-center justify-center relative overflow-hidden">
      {/* Geometric background */}
      <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-[#141b2e] to-obsidian" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric/10 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />
      
      {/* Subtle grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="w-full max-w-5xl bg-carbon/60 backdrop-blur-2xl rounded-[40px] shadow-2xl relative overflow-hidden border border-white/5 flex flex-col md:flex-row">
        
        {data.photoUrl && (
          <div className="w-full md:w-[40%] h-[350px] md:h-auto relative p-6 md:p-8 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-carbon/90 z-10 hidden md:block" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-carbon/90 z-10 md:hidden" />
            <div className="w-full h-full relative z-0 rounded-3xl overflow-hidden shadow-lg border border-white/10">
              <img src={data.photoUrl} alt="Event" className="w-full h-full object-cover" />
            </div>
          </div>
        )}

        <div className={`p-8 md:p-16 relative z-20 flex-1 flex flex-col justify-center ${!data.photoUrl && 'max-w-3xl mx-auto'}`}>
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-electric/20 text-electric rounded-full text-xs font-bold tracking-widest uppercase mb-8 border border-electric/30">
              <div className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
              {data.type}
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tight text-white drop-shadow-md">
              {data.eventTitle}
            </h1>
            
            <p className="text-xl text-slate-300 mb-12 border-l-4 border-electric pl-6 leading-relaxed bg-gradient-to-r from-electric/5 to-transparent py-2">
              {data.message}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FadeIn delay={0.4} className="bg-white/5 hover:bg-white/10 transition-colors p-6 rounded-3xl border border-white/5">
              <div className="text-electric mb-3 bg-electric/10 w-10 h-10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-xl font-medium text-white mb-1">{data.date}</div>
              <div className="text-slate-400">{data.time}</div>
            </FadeIn>

            <FadeIn delay={0.6} className="bg-white/5 hover:bg-white/10 transition-colors p-6 rounded-3xl border border-white/5">
              <div className="text-electric mb-3 bg-electric/10 w-10 h-10 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-xl font-medium text-white mb-1">{data.venue}</div>
              <div className="text-slate-400">{data.address}</div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}
