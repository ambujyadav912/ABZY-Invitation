"use client";
import { FadeIn, ScaleReveal } from "@/components/ui/Animation";
import { InvitationData } from "@/lib/types";

export function CinematicTemplate({ data }: { data: InvitationData }) {
  return (
    <div className="min-h-screen bg-obsidian text-white relative flex flex-col md:flex-row overflow-hidden">
      {/* Background for non-photo or text area */}
      <div className="absolute inset-0 bg-gradient-to-tr from-obsidian via-graphite to-[#0a1128] z-0" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-accent/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3 z-0" />
      
      {/* Photo Area (Cinematic Poster Side) */}
      {data.photoUrl && (
        <div className="relative w-full md:w-1/2 min-h-[40vh] md:min-h-screen z-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-obsidian md:hidden z-10 opacity-40 mix-blend-multiply" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-obsidian z-10 hidden md:block" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-obsidian to-transparent z-10 md:hidden" />
          <img src={data.photoUrl} alt="Event" className="w-full h-full object-cover" />
        </div>
      )}

      {/* Content Area */}
      <div className={`relative z-20 w-full ${data.photoUrl ? 'md:w-1/2' : 'max-w-5xl mx-auto'} p-8 md:p-16 flex flex-col justify-center`}>
        <ScaleReveal delay={0.2} className="mb-8">
          <div className="w-20 h-1 bg-blue-accent mb-8 shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
          <div className="inline-block px-3 py-1 border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-slate-300">
            {data.type}
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            {data.eventTitle}
          </h1>
        </ScaleReveal>

        <FadeIn delay={0.6} className="mb-12">
          <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-xl">
            {data.message}
          </p>
        </FadeIn>
          
        <FadeIn delay={0.8} className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
          <div className="bg-white/5 backdrop-blur-md p-6 border-l-2 border-blue-accent">
            <div className="text-sm font-bold text-blue-accent uppercase tracking-widest mb-2">Time</div>
            <div className="text-2xl font-semibold mb-1">{data.date}</div>
            <div className="text-slate-400">{data.time}</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-6 border-l-2 border-blue-accent">
            <div className="text-sm font-bold text-blue-accent uppercase tracking-widest mb-2">Venue</div>
            <div className="text-2xl font-semibold mb-1">{data.venue}</div>
            <div className="text-slate-400">{data.address}</div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
