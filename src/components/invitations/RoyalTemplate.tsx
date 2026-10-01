"use client";
import { FadeIn, ScaleReveal } from "@/components/ui/Animation";
import { InvitationData } from "@/lib/types";

export function RoyalTemplate({ data }: { data: InvitationData }) {
  return (
    <div className="min-h-screen bg-obsidian text-[#D4AF37] relative overflow-hidden flex flex-col items-center justify-center p-6 md:p-12 font-serif">
      {/* Rich Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-obsidian to-obsidian" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M30 0l15 30-15 30L15 30z\\' fill=\\'%23D4AF37\\' fill-opacity=\\'1\\' fill-rule=\\'evenodd\\'/%3E%3C/svg%3E')", backgroundSize: "30px 30px" }} />
      <div className="absolute inset-4 border border-[#D4AF37]/40 rounded-3xl pointer-events-none" />
      <div className="absolute inset-6 border border-[#D4AF37]/20 rounded-2xl pointer-events-none" />
      
      <FadeIn delay={0.2} className="relative z-10 w-full max-w-5xl bg-carbon/80 backdrop-blur-xl p-8 md:p-12 rounded-[32px] border border-[#D4AF37]/30 shadow-[0_0_50px_rgba(212,175,55,0.1)] flex flex-col md:flex-row gap-12 items-center">
        
        {data.photoUrl && (
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4] p-2 border border-[#D4AF37]/40 rounded-t-full">
              <img src={data.photoUrl} alt="Event" className="w-full h-full object-cover rounded-t-full grayscale-[30%] contrast-125" />
            </div>
          </div>
        )}

        <div className={`w-full ${data.photoUrl ? 'md:w-1/2 text-left' : 'max-w-2xl mx-auto text-center'} space-y-10`}>
          <div className="text-xs tracking-[0.4em] uppercase text-[#D4AF37] font-semibold">
            You are cordially invited to
          </div>
          
          <ScaleReveal delay={0.4}>
            <h1 className="text-5xl md:text-7xl text-white font-normal mb-6 leading-tight drop-shadow-lg">
              {data.eventTitle}
            </h1>
          </ScaleReveal>

          <FadeIn delay={0.6} className="space-y-6">
            <div className={`h-px w-24 bg-[#D4AF37]/50 ${data.photoUrl ? '' : 'mx-auto'}`} />
            <p className="text-lg text-white/90 leading-relaxed font-sans font-light">
              {data.message}
            </p>
            <div className={`h-px w-24 bg-[#D4AF37]/50 ${data.photoUrl ? '' : 'mx-auto'}`} />
          </FadeIn>

          <FadeIn delay={0.8} className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-8 font-sans">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#D4AF37] mb-2 font-bold">When</div>
              <div className="text-white text-lg font-medium">{data.date}</div>
              <div className="text-white/70">{data.time}</div>
            </div>
            
            <div>
              <div className="text-xs uppercase tracking-widest text-[#D4AF37] mb-2 font-bold">Where</div>
              <div className="text-white text-lg font-medium">{data.venue}</div>
              <div className="text-white/70">{data.address}</div>
            </div>
          </FadeIn>
        </div>
      </FadeIn>
    </div>
  );
}
