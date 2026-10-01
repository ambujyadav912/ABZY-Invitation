import Link from "next/link";

export default function InvitationNotFound() {
  return (
    <div className="min-h-[100dvh] bg-obsidian text-white flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-carbon via-obsidian to-obsidian" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[600px] max-h-[600px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 space-y-8 max-w-md w-full">
        <div className="w-20 h-20 bg-carbon rounded-full border border-white/10 flex items-center justify-center mx-auto shadow-2xl">
          <svg className="w-8 h-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Invitation Not Found
          </h1>
          <p className="text-lg text-ash leading-relaxed">
            Sorry, this invitation is unavailable or the link may be incorrect.
          </p>
        </div>

        <div className="pt-8">
          <Link href="/" className="inline-block px-8 py-4 bg-white text-obsidian font-bold uppercase tracking-widest text-sm rounded-full hover:bg-white/90 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            Back to ABZY
          </Link>
        </div>
      </div>
    </div>
  );
}
