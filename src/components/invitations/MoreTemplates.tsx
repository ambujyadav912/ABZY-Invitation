"use client";
import { FadeIn, ScaleReveal } from "@/components/ui/Animation";
import { InvitationData } from "@/lib/types";

// GEOMETRIC / CORPORATE
// GEOMETRIC / CORPORATE
export function CorporateTemplate({ data }: { data: InvitationData }) {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-4 md:p-12 flex items-center justify-center font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-6xl bg-[#1E293B] relative overflow-hidden shadow-2xl rounded-2xl border border-slate-700 flex flex-col md:flex-row">
        
        <div className={`p-10 md:p-20 relative z-10 border-l-4 border-blue-500 flex-1 flex flex-col justify-center ${!data.photoUrl && 'max-w-4xl mx-auto'}`}>
          <FadeIn>
            <div className="uppercase tracking-[0.2em] text-blue-400 font-bold mb-6 text-sm">{data.type} Event</div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-8 leading-tight drop-shadow-lg">{data.eventTitle}</h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-12 border-l-2 border-slate-600 pl-4">{data.message}</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-slate-700 pt-10">
            <FadeIn delay={0.2}>
              <div className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-2">Schedule</div>
              <div className="text-xl font-medium text-white">{data.date}</div>
              <div className="text-blue-400 font-medium">{data.time}</div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-2">Location</div>
              <div className="text-xl font-medium text-white">{data.venue}</div>
              <div className="text-slate-300">{data.address}</div>
            </FadeIn>
          </div>
        </div>

        {data.photoUrl && (
          <div className="w-full md:w-[45%] bg-slate-800 relative">
            <img src={data.photoUrl} alt="Event" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E293B] to-transparent md:bg-gradient-to-l" />
          </div>
        )}
      </div>
    </div>
  );
}

// ORGANIC / SOFT
export function OrganicTemplate({ data }: { data: InvitationData }) {
  return (
    <div className="min-h-screen bg-[#FDF8F5] text-[#5C4D43] p-4 md:p-12 flex items-center justify-center font-serif relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] opacity-40 pointer-events-none mix-blend-multiply" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#E8DCC4] rounded-[100%] blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#F0E6D2] rounded-[100%] blur-3xl opacity-50 pointer-events-none" />
      
      <div className="w-full max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-10">
        
        {data.photoUrl && (
          <div className="w-full md:w-1/2 p-6 flex justify-center">
             <div className="w-full max-w-md aspect-[4/5] rounded-[200px] rounded-bl-[40px] overflow-hidden shadow-2xl border-8 border-white/60">
               <img src={data.photoUrl} alt="Event" className="w-full h-full object-cover" />
             </div>
          </div>
        )}

        <div className={`flex-1 flex flex-col justify-center text-center p-8 bg-white/40 backdrop-blur-md rounded-[40px] border border-white/50 shadow-xl ${!data.photoUrl && 'max-w-3xl mx-auto py-20'}`}>
          <ScaleReveal>
            <div className="text-xs tracking-[0.3em] uppercase mb-8 text-[#8C7A6B] font-bold">{data.type}</div>
            <h1 className="text-5xl md:text-7xl mb-10 leading-tight text-[#4A3D35]">{data.eventTitle}</h1>
          </ScaleReveal>
          <FadeIn delay={0.3} className="relative py-10 border-y border-[#5C4D43]/20 mx-auto max-w-xl">
            <p className="text-xl md:text-2xl leading-relaxed italic">{data.message}</p>
          </FadeIn>
          
          <FadeIn delay={0.6} className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10">
            <div>
               <div className="text-xs uppercase tracking-widest text-[#8C7A6B] mb-2">When</div>
               <div className="font-bold text-xl text-[#4A3D35] mb-1">{data.date}</div>
               <div className="text-[#8C7A6B]">{data.time}</div>
            </div>
            <div>
               <div className="text-xs uppercase tracking-widest text-[#8C7A6B] mb-2">Where</div>
               <div className="font-bold text-xl text-[#4A3D35] mb-1">{data.venue}</div>
               <div className="text-[#8C7A6B] text-sm leading-snug mx-auto max-w-xs">{data.address}</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

// DARK GLAMOUR
export function GlamourTemplate({ data }: { data: InvitationData }) {
  return (
    <div className="min-h-screen bg-[#111111] text-[#E0E0E0] p-4 md:p-8 flex flex-col font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#333] via-[#111] to-[#000] z-0" />
      
      <div className="flex-1 border border-[#333333] rounded-[40px] p-6 md:p-12 flex flex-col relative z-10 shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden bg-black/40 backdrop-blur-3xl">
        
        {data.photoUrl && (
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none mask-image-[linear-gradient(to_left,black,transparent)] hidden md:block">
            <img src={data.photoUrl} alt="Event" className="w-full h-full object-cover mix-blend-screen" />
          </div>
        )}

        <div className="relative z-10 h-full flex flex-col justify-between max-w-4xl mx-auto w-full">
          <FadeIn className="text-center mb-12 mt-8">
            <div className="mb-6 text-xs tracking-[0.5em] text-white/50 uppercase">{data.type}</div>
            <h1 className="text-6xl md:text-9xl font-thin tracking-widest uppercase text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              {data.eventTitle}
            </h1>
          </FadeIn>
          
          <div className="flex-1 flex items-center justify-center my-12">
            <FadeIn delay={0.4}>
              <p className="text-2xl md:text-3xl text-center max-w-3xl leading-relaxed text-white/80 font-light italic">
                &quot;{data.message}&quot;
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.8} className="flex flex-col md:flex-row justify-between items-center border-t border-[#333333]/50 pt-10 gap-8">
            <div className="text-center md:text-left">
              <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-3">When</div>
              <div className="text-2xl text-white font-medium mb-1">{data.date}</div>
              <div className="text-white/60 tracking-wider">{data.time}</div>
            </div>
            
            {data.photoUrl && (
              <div className="w-32 h-32 md:hidden rounded-full overflow-hidden border-2 border-white/20 my-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                 <img src={data.photoUrl} alt="Event" className="w-full h-full object-cover" />
              </div>
            )}

            <div className="text-center md:text-right">
              <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-3">Where</div>
              <div className="text-2xl text-white font-medium mb-1">{data.venue}</div>
              <div className="text-white/60 tracking-wider max-w-xs">{data.address}</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
