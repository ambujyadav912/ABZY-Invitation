"use client";
import { FadeIn, ScaleReveal } from "@/components/ui/Animation";
import { InvitationData } from "@/lib/types";

// FLORAL
export function FloralTemplate({ data }: { data: InvitationData }) {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C3E2D] relative p-4 md:p-8 flex items-center justify-center font-serif overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M50 0C50 27.6 27.6 50 0 50C27.6 50 50 72.4 50 100C50 72.4 72.4 50 100 50C72.4 50 50 27.6 50 0Z\\' fill=\\'%232C3E2D\\' fill-opacity=\\'0.1\\'/%3E%3C/svg%3E')", backgroundSize: "100px 100px" }} />
      <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-green-300 rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-pink-300 rounded-full blur-[120px] opacity-40 pointer-events-none" />
      
      <div className="max-w-6xl w-full bg-white/70 backdrop-blur-xl border border-white/40 p-6 md:p-12 rounded-[40px] shadow-2xl relative z-10 flex flex-col md:flex-row items-stretch overflow-hidden">
        
        {data.photoUrl && (
          <div className="w-full md:w-1/2 flex items-center justify-center p-4">
            <div className="w-full h-full min-h-[300px] relative rounded-t-[100px] rounded-b-[20px] overflow-hidden shadow-lg border-4 border-white">
              <img src={data.photoUrl} alt="Event" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#2C3E2D]/10 mix-blend-overlay" />
            </div>
          </div>
        )}

        <div className={`w-full ${data.photoUrl ? 'md:w-1/2 p-6 md:p-12 text-left' : 'max-w-3xl mx-auto p-8 md:p-16 text-center'} flex flex-col justify-center`}>
          <FadeIn>
            <div className="text-xs tracking-[0.3em] uppercase mb-6 text-[#2C3E2D]/60 font-semibold">Join us in celebration</div>
            <h1 className="text-5xl md:text-7xl font-normal mb-8 italic text-[#1A251B]">{data.eventTitle}</h1>
            <p className="text-lg md:text-xl mb-12 leading-relaxed text-[#2C3E2D]/80 font-sans font-light">
              {data.message}
            </p>
          </FadeIn>
          <ScaleReveal delay={0.4}>
            <div className={`grid grid-cols-1 gap-6 font-sans border-t border-[#2C3E2D]/20 pt-8 ${!data.photoUrl && 'sm:grid-cols-2 text-left'}`}>
               <div>
                 <div className="text-[#2C3E2D]/60 text-xs uppercase tracking-widest font-bold mb-1">When</div>
                 <div className="text-xl text-[#1A251B] font-medium">{data.date}</div>
                 <div className="text-[#2C3E2D]/80">{data.time}</div>
               </div>
               <div>
                 <div className="text-[#2C3E2D]/60 text-xs uppercase tracking-widest font-bold mb-1">Where</div>
                 <div className="text-lg text-[#1A251B] font-semibold">{data.venue}</div>
                 <div className="text-[#2C3E2D]/70 text-sm leading-tight mt-1">{data.address}</div>
               </div>
            </div>
          </ScaleReveal>
        </div>
      </div>
    </div>
  );
}

// LUXURY
export function LuxuryTemplate({ data }: { data: InvitationData }) {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-12 flex items-center justify-center font-sans overflow-hidden relative">
      {/* Abstract dark gradients and subtle grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#050505]" />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
      
      <div className="w-full max-w-6xl relative z-10 flex flex-col md:flex-row border border-white/10 rounded-[32px] overflow-hidden bg-black/40 backdrop-blur-2xl shadow-2xl">
        
        {data.photoUrl && (
          <div className="w-full md:w-[45%] min-h-[300px] md:min-h-full relative">
            <img src={data.photoUrl} alt="Event" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-lighten" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-gradient-to-r" />
          </div>
        )}

        <div className={`p-10 md:p-16 flex flex-col justify-between flex-1 ${!data.photoUrl && 'items-center text-center'}`}>
          <div className={`w-full flex ${data.photoUrl ? 'justify-between' : 'justify-center gap-16'} items-start mb-16`}>
            <FadeIn delay={0.1}><div className="text-xs uppercase tracking-[0.4em] text-white/50 font-bold">{data.type}</div></FadeIn>
            <FadeIn delay={0.2}><div className="text-xs uppercase tracking-[0.4em] text-white/50 font-bold">{data.date}</div></FadeIn>
          </div>
          
          <div className={`flex-1 flex flex-col ${data.photoUrl ? 'justify-center' : 'items-center'} mb-16`}>
            <ScaleReveal>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-br from-white to-white/40 bg-clip-text text-transparent pb-4 leading-[1.1]">
                {data.eventTitle}
              </h1>
            </ScaleReveal>
            <FadeIn delay={0.5}>
              <p className="text-lg md:text-xl max-w-2xl text-white/60 font-light leading-relaxed">
                {data.message}
              </p>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.8} className={`w-full grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/10 pt-8 ${!data.photoUrl && 'text-left max-w-3xl'}`}>
            <div>
              <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Time</div>
              <div className="text-xl font-medium">{data.time}</div>
            </div>
            <div>
              <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Location</div>
              <div className="text-xl font-medium">{data.venue}</div>
              <div className="text-sm text-white/60 mt-1">{data.address}</div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

// ELEGANT
export function ElegantTemplate({ data }: { data: InvitationData }) {
  return (
    <div className="min-h-screen bg-[#F0F2F5] text-[#1E293B] p-6 md:p-12 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-white rounded-full blur-[80px] pointer-events-none opacity-60" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-slate-200 rounded-full blur-[100px] pointer-events-none opacity-60" />

      <div className="max-w-6xl w-full bg-white rounded-[2rem] shadow-2xl relative flex flex-col md:flex-row overflow-hidden border border-slate-100">
        <div className={`p-10 md:p-20 flex-1 flex flex-col justify-center ${!data.photoUrl && 'items-center text-center'}`}>
          <div className="absolute top-0 left-1/2 md:left-10 -translate-x-1/2 md:translate-x-0 w-32 h-1 bg-[#1E293B] rounded-b-full" />
          <FadeIn className="space-y-10 w-full max-w-2xl">
            <div className="text-sm tracking-widest text-slate-500 uppercase font-semibold">{data.type}</div>
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-[#0F172A]">{data.eventTitle}</h1>
            <div className={`w-12 h-1 bg-slate-200 ${!data.photoUrl && 'mx-auto'}`} />
            <p className="text-lg md:text-xl text-slate-600 leading-loose">{data.message}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="font-semibold text-slate-900 mb-2 uppercase tracking-wide text-xs">When</div>
                <div className="text-slate-700 text-lg">{data.date}</div>
                <div className="text-slate-500">{data.time}</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="font-semibold text-slate-900 mb-2 uppercase tracking-wide text-xs">Where</div>
                <div className="text-slate-700 text-lg">{data.venue}</div>
                <div className="text-slate-500 text-sm mt-1">{data.address}</div>
              </div>
            </div>
          </FadeIn>
        </div>

        {data.photoUrl && (
          <div className="w-full md:w-[45%] h-[400px] md:h-auto relative p-6 bg-slate-50 flex items-center justify-center">
            <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-lg">
              <img src={data.photoUrl} alt="Event" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// FUN / COLORFUL
export function FunTemplate({ data }: { data: InvitationData }) {
  return (
    <div className="min-h-screen bg-[#FFF0F5] text-[#FF4B4B] p-6 md:p-12 flex flex-col font-sans overflow-hidden relative justify-center items-center">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(#FF4B4B 2px, transparent 2px)", backgroundSize: "30px 30px" }} />
      <div className="absolute top-10 right-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply opacity-60 animate-bounce" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply opacity-40 blur-2xl pointer-events-none" />

      <div className="w-full max-w-6xl relative z-10 flex flex-col md:flex-row gap-8 items-center">
        
        {data.photoUrl && (
          <div className="w-full md:w-1/2 relative p-4">
             <div className="w-full aspect-square md:aspect-auto md:h-[600px] rounded-[3rem] overflow-hidden border-8 border-white shadow-[20px_20px_0px_#FF4B4B] rotate-2 bg-white">
               <img src={data.photoUrl} alt="Event" className="w-full h-full object-cover" />
             </div>
          </div>
        )}

        <div className={`flex-1 flex flex-col justify-center text-center md:text-left ${!data.photoUrl && 'items-center max-w-3xl mx-auto md:text-center'}`}>
          <ScaleReveal>
            <div className={`inline-block px-6 py-2 bg-[#FF4B4B] text-white rounded-full font-bold text-sm tracking-widest mb-8 shadow-xl -rotate-2 ${!data.photoUrl && 'mx-auto'}`}>
              YOU&apos;RE INVITED!
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] -rotate-1 drop-shadow-sm text-[#FF4B4B]">{data.eventTitle}</h1>
          </ScaleReveal>
          <FadeIn delay={0.4} className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-[3rem] shadow-xl rotate-1 border-4 border-transparent hover:border-yellow-300 transition-all w-full">
            <p className="text-2xl text-slate-800 font-medium mb-10 leading-relaxed">{data.message}</p>
            <div className={`flex flex-col sm:flex-row gap-8 text-left ${!data.photoUrl && 'justify-center'}`}>
              <div className="flex-1 bg-[#FFF0F5] p-5 rounded-3xl border-2 border-pink-100">
                <div className="text-[#FF4B4B] font-black text-xs mb-2 uppercase tracking-widest bg-white inline-block px-3 py-1 rounded-full">Date & Time</div>
                <div className="text-xl text-slate-900 font-bold mt-2">{data.date}</div>
                <div className="text-slate-600 font-medium">{data.time}</div>
              </div>
              <div className="flex-1 bg-[#FFF0F5] p-5 rounded-3xl border-2 border-pink-100">
                <div className="text-[#FF4B4B] font-black text-xs mb-2 uppercase tracking-widest bg-white inline-block px-3 py-1 rounded-full">Location</div>
                <div className="text-xl text-slate-900 font-bold mt-2">{data.venue}</div>
                <div className="text-sm text-slate-500 font-medium mt-1">{data.address}</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

// TRADITIONAL
export function TraditionalTemplate({ data }: { data: InvitationData }) {
  return (
    <div className="min-h-screen bg-[#8B0000] text-[#FFD700] p-6 md:p-12 flex flex-col items-center justify-center font-serif relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cpath d=\\'M30 5L35 25L55 30L35 35L30 55L25 35L5 30L25 25L30 5Z\\' fill=\\'%23FFD700\\' fill-opacity=\\'1\\'/%3E%3C/svg%3E')", backgroundSize: "60px 60px" }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-700 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-5xl border-8 border-[#FFD700]/80 p-2 md:p-4 rounded-3xl relative z-10 bg-[#8B0000]/90 backdrop-blur-md shadow-2xl">
        <div className="border-4 border-[#FFD700]/40 p-6 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-10">
          
          {data.photoUrl && (
            <div className="w-full md:w-2/5 p-4 relative">
              <div className="aspect-[3/4] relative rounded-t-[150px] overflow-hidden border-[6px] border-[#FFD700] shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                <img src={data.photoUrl} alt="Event" className="absolute inset-0 w-full h-full object-cover sepia-[0.3]" />
              </div>
            </div>
          )}

          <div className={`flex-1 flex flex-col items-center text-center ${!data.photoUrl && 'py-10'}`}>
            <FadeIn className="w-full flex flex-col items-center">
              <div className="w-20 h-20 border-4 border-[#FFD700] rounded-full flex items-center justify-center mb-10 rotate-45 mx-auto bg-[#8B0000] shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                <div className="w-14 h-14 border-2 border-[#FFD700] rounded-full" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 drop-shadow-lg leading-tight">{data.eventTitle}</h1>
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-2xl font-light mb-12 drop-shadow">{data.message}</p>
            </FadeIn>
            <ScaleReveal delay={0.5} className="w-full pt-10 border-t-2 border-[#FFD700]/50 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                 <div className="text-[#FFD700]/70 uppercase tracking-widest text-sm font-bold mb-2">When</div>
                 <div className="text-3xl mb-1 text-white font-medium drop-shadow">{data.date}</div>
                 <div className="text-xl text-[#FFD700]/90">{data.time}</div>
              </div>
              <div>
                 <div className="text-[#FFD700]/70 uppercase tracking-widest text-sm font-bold mb-2">Where</div>
                 <div className="text-2xl font-bold text-white mb-2 drop-shadow">{data.venue}</div>
                 <div className="text-lg text-[#FFD700]/90">{data.address}</div>
              </div>
            </ScaleReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
