export default function InvitationLoading() {
  return (
    <div className="min-h-[100dvh] bg-obsidian text-white flex flex-col items-center justify-center p-6 text-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-carbon via-obsidian to-obsidian" />
      
      <div className="relative z-10 space-y-8 flex flex-col items-center">
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 border-2 border-white/20 rounded-full" />
          <div className="absolute inset-0 border-2 border-white rounded-full border-t-transparent animate-spin" />
        </div>
        
        <div className="text-xl md:text-2xl font-light text-ash tracking-wide animate-pulse">
          Preparing your invitation...
        </div>
      </div>
    </div>
  );
}
