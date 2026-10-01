"use client";
import { FadeIn, ScaleReveal } from "@/components/ui/Animation";
import { InvitationData } from "@/lib/types";

// POSTER STYLE
export function PosterTemplate({ data }: { data: InvitationData }) {
  return (
    <div className="min-h-screen bg-[#D9E2E8] text-[#1D1D1F] p-4 md:p-12 flex flex-col items-center justify-center font-sans relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffffff,transparent_70%)] opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#94a3b8,transparent_50%)] opacity-40 pointer-events-none" />
      
      <div className="w-full max-w-5xl bg-white shadow-2xl relative flex flex-col md:flex-row border-8 border-[#1D1D1F] overflow-hidden">
        
        {data.photoUrl && (
          <div className="w-full md:w-[40%] bg-black relative p-6 flex flex-col justify-end">
            <img src={data.photoUrl} alt="Event" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            <div className="relative z-10 text-white pb-6 pt-20">
              <div className="text-4xl font-black uppercase tracking-tighter leading-none mb-2">{data.type}</div>
              <div className="text-sm font-bold tracking-widest">{data.date}</div>
            </div>
          </div>
        )}

        <div className={`p-8 md:p-16 flex-1 flex flex-col justify-between ${!data.photoUrl && 'max-w-4xl mx-auto w-full'}`}>
          {!data.photoUrl && (
            <div className="w-full flex justify-between font-bold text-xs uppercase tracking-widest border-b-4 border-[#1D1D1F] pb-4 mb-12">
              <span>{data.type}</span>
              <span>{data.date}</span>
            </div>
          )}
          
          <div className="flex-1 flex flex-col justify-center my-10">
            <ScaleReveal>
              <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter text-[#1D1D1F]">
                {data.eventTitle}
              </h1>
            </ScaleReveal>
            <FadeIn delay={0.3} className="mt-8">
              <p className="text-xl md:text-2xl font-medium leading-snug max-w-xl text-[#333]">{data.message}</p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t-4 border-[#1D1D1F] pt-8 mt-4">
            <FadeIn delay={0.6}>
              <div className="font-black text-xs uppercase tracking-widest mb-1 text-slate-500">Time</div>
              <div className="text-2xl font-bold">{data.time}</div>
              {data.photoUrl && <div className="text-slate-600 font-medium">{data.date}</div>}
            </FadeIn>
            <FadeIn delay={0.7}>
              <div className="font-black text-xs uppercase tracking-widest mb-1 text-slate-500">Location</div>
              <div className="text-2xl font-bold leading-tight">{data.venue}</div>
              <div className="text-sm font-medium mt-1 text-[#555] max-w-xs">{data.address}</div>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

// GLASSMORPHISM / NEON
export function NeonTemplate({ data }: { data: InvitationData }) {
  return (
    <div className="min-h-screen bg-[#050510] text-white p-4 md:p-12 flex items-center justify-center font-sans overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z\\' fill=\\'%23ffffff\\' fill-opacity=\\'0.03\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')] pointer-events-none" />
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-fuchsia-600 rounded-full mix-blend-screen filter blur-[150px] opacity-40 animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-cyan-500 rounded-full mix-blend-screen filter blur-[150px] opacity-40 animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="w-full max-w-5xl bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[40px] shadow-[0_0_50px_rgba(0,255,255,0.1)] relative z-10 flex flex-col md:flex-row overflow-hidden">
        
        {data.photoUrl && (
          <div className="w-full md:w-[45%] h-[400px] md:h-auto relative">
             <img src={data.photoUrl} alt="Event" className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80" />
             <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050510]/80" />
             <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(255,0,255,0.3)] pointer-events-none" />
          </div>
        )}

        <div className={`p-8 md:p-16 flex-1 flex flex-col justify-center ${!data.photoUrl && 'max-w-4xl mx-auto'}`}>
          <FadeIn>
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-400/50 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(0,255,255,0.3)]">
              {data.type}
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-400 mb-6 drop-shadow-[0_0_20px_rgba(255,0,255,0.2)]">
              {data.eventTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12">{data.message}</p>
          </FadeIn>
          
          <ScaleReveal delay={0.4}>
            <div className="bg-black/40 rounded-3xl p-8 border border-white/10 flex flex-col sm:flex-row justify-between gap-8 shadow-inner">
              <div className="flex-1">
                <div className="text-white/50 text-xs font-bold mb-2 uppercase tracking-widest">Date & Time</div>
                <div className="font-bold text-xl text-white mb-1">{data.date}</div>
                <div className="text-cyan-400 font-medium">{data.time}</div>
              </div>
              <div className="hidden sm:block w-px bg-white/10" />
              <div className="flex-1">
                <div className="text-white/50 text-xs font-bold mb-2 uppercase tracking-widest">Venue</div>
                <div className="font-bold text-xl text-white mb-1">{data.venue}</div>
                <div className="text-fuchsia-400 text-sm font-medium">{data.address}</div>
              </div>
            </div>
          </ScaleReveal>
        </div>
      </div>
    </div>
  );
}

// ARCHITECTURAL
export function ArchTemplate({ data }: { data: InvitationData }) {
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#333333] flex items-center justify-center p-4 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%,rgba(0,0,0,0.02)_100%)] bg-[size:20px_20px] pointer-events-none" />
      
      <div className="max-w-6xl w-full bg-white shadow-2xl flex flex-col md:flex-row relative z-10 border border-[#E8E8DF]">
        {data.photoUrl ? (
          <div className="w-full md:w-1/2 min-h-[40vh] md:min-h-[80vh] relative p-6 md:p-12 bg-[#E8E8DF]">
            <div className="w-full h-full absolute inset-0 md:relative">
               <img src={data.photoUrl} alt="Event" className="w-full h-full object-cover grayscale sepia-[0.2] md:rounded-t-full shadow-lg" />
            </div>
          </div>
        ) : (
          <div className="w-full md:w-1/2 min-h-[40vh] md:min-h-full bg-[#E8E8DF] flex items-center justify-center p-12">
            <div className="w-48 h-96 border border-[#333333] rounded-t-full opacity-30" />
          </div>
        )}
        
        <div className={`flex-1 p-10 md:p-20 flex flex-col justify-center ${!data.photoUrl && 'items-center text-center max-w-3xl mx-auto w-full'}`}>
          <FadeIn>
            <div className="text-xs uppercase tracking-[0.4em] mb-6 text-[#888888] font-semibold">{data.type}</div>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 text-[#111] leading-tight">{data.eventTitle}</h1>
            <div className={`w-12 h-1 bg-[#333333] mb-8 ${!data.photoUrl && 'mx-auto'}`} />
            <p className="text-lg leading-loose mb-12 text-[#555] font-light max-w-lg">{data.message}</p>
          </FadeIn>
          
          <ScaleReveal delay={0.3} className={`w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm ${!data.photoUrl && 'text-left'}`}>
             <div className="border-l-2 border-[#DDDDDD] pl-5">
               <strong className="block mb-2 font-serif text-lg text-[#111]">When</strong>
               <div className="text-base mb-1 font-medium">{data.date}</div>
               <div className="text-[#888]">{data.time}</div>
             </div>
             <div className="border-l-2 border-[#DDDDDD] pl-5">
               <strong className="block mb-2 font-serif text-lg text-[#111]">Where</strong>
               <div className="text-base mb-1 font-medium">{data.venue}</div>
               <span className="text-[#888888] block mt-1 leading-relaxed">{data.address}</span>
             </div>
          </ScaleReveal>
        </div>
      </div>
    </div>
  );
}
