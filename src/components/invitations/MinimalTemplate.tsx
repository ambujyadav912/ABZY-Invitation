"use client";
import { FadeIn } from "@/components/ui/Animation";
import { InvitationData } from "@/lib/types";

export function MinimalTemplate({ data }: { data: InvitationData }) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-obsidian flex flex-col items-center justify-center p-6 md:p-16 font-sans relative overflow-hidden">
      {/* Soft abstract background */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-slate-200/50 rounded-bl-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-[#F5F2EA] rounded-tr-full pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-6xl flex flex-col-reverse md:flex-row shadow-2xl rounded-3xl overflow-hidden bg-white/80 backdrop-blur-md border border-black/5">
        
        <FadeIn delay={0.2} className="flex-1 p-10 md:p-16 flex flex-col justify-center">
          <div className="inline-block px-3 py-1 bg-obsidian text-white text-xs font-bold uppercase tracking-widest mb-8 self-start">
            {data.type}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-obsidian leading-[1.1]">
            {data.eventTitle}
          </h1>

          <p className="text-xl md:text-2xl font-light leading-relaxed text-slate-700 mb-12 max-w-lg">
            {data.message}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-obsidian/10">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-2">When</div>
              <div className="text-lg font-medium">{data.date}</div>
              <div className="text-slate-500">{data.time}</div>
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest text-slate-400 mb-2">Where</div>
              <div className="text-lg font-medium">{data.venue}</div>
              <div className="text-slate-500">{data.address}</div>
            </div>
          </div>
        </FadeIn>

        {data.photoUrl && (
          <div className="w-full md:w-[45%] h-[400px] md:h-auto relative">
            <img src={data.photoUrl} alt="Event" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        )}
      </div>
    </div>
  );
}
