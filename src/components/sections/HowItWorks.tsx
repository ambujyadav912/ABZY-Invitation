"use client";

import { FadeIn, ScaleReveal } from "@/components/ui/Animation";
import { MinimalTemplate } from "@/components/invitations/MinimalTemplate";
import { ModernTemplate } from "@/components/invitations/ModernTemplate";

const steps = [
  {
    num: "01",
    title: "Tell Us What You Need",
    desc: "Choose the type of invitation and provide the required details."
  },
  {
    num: "02",
    title: "ABZY Creates Your Invitation",
    desc: "ABZY professionally designs the invitation and allows design variations until the final design is selected."
  },
  {
    num: "03",
    title: "Get Your Special Link",
    desc: "Once finalized, a unique invitation link is generated."
  },
  {
    num: "04",
    title: "Share & Celebrate",
    desc: "Share the link with your guest and let them experience the invitation."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 bg-obsidian relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        
        {/* Left: Text Steps */}
        <div className="w-full lg:w-1/2">
          <FadeIn>
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-ash text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
              The Process
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">How It Works</h2>
          </FadeIn>
          
          <div className="flex flex-col gap-8 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-accent/50 via-white/10 to-transparent" />
            
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.1} className="relative pl-16">
                <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-graphite border border-white/10 flex items-center justify-center text-blue-accent font-bold text-sm shadow-[0_0_20px_rgba(0,113,227,0.2)]">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-ash leading-relaxed">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Right: Visual Process */}
        <div className="w-full lg:w-1/2 perspective-[1200px]">
          <ScaleReveal className="relative h-[600px] flex items-center justify-center">
            
            {/* Draft Mode Mockup */}
            <div className="absolute left-0 w-[280px] h-[500px] rounded-[2rem] border border-white/10 bg-graphite opacity-50 transform -rotate-y-[20deg] rotate-z-[-5deg] scale-90 blur-[2px] pointer-events-none shadow-2xl">
               <div className="absolute inset-0 flex items-center justify-center text-ash/30 font-bold tracking-widest uppercase">
                 <div className="w-[1400px] h-[2500px] origin-top scale-[0.2] opacity-50">
                    <MinimalTemplate data={{ type: "Wedding", eventTitle: "Draft Design", message: "Placeholder", date: "TBD", time: "TBD", venue: "TBD", address: "TBD", contact: "TBD", creatorName: "ABZY", recipientName: "Draft", template: "minimal", status: "published", id: "1", slug: "1", createdAt: 0 }} />
                 </div>
               </div>
            </div>

            {/* Final Mode Mockup */}
            <div className="absolute right-0 w-[320px] h-[580px] rounded-[2rem] border border-white/20 bg-obsidian transform rotate-y-[-10deg] rotate-z-[2deg] shadow-[0_20px_70px_rgba(0,113,227,0.2)] z-10 pointer-events-none overflow-hidden">
               <div className="w-[1400px] h-[2500px] origin-top-left scale-[0.228]">
                  <ModernTemplate data={{ type: "Wedding", eventTitle: "Final Design", message: "Join us in celebration", date: "Dec 31", time: "8 PM", venue: "The Grand", address: "City Center", contact: "RSVP", creatorName: "ABZY", recipientName: "Guest", template: "modern", status: "published", id: "2", slug: "2", createdAt: 0 }} />
               </div>
               <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50" />
            </div>

            {/* Link Generation Visual */}
            <div className="absolute bottom-12 right-12 z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 animate-pulse">
               <div className="w-2 h-2 rounded-full bg-green-400" />
               <span className="text-white text-sm font-medium tracking-wide">abzy.com/invite/VIP</span>
            </div>

          </ScaleReveal>
        </div>
      </div>
    </section>
  );
}
