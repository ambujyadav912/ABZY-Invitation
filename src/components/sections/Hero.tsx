"use client";

import { FadeIn, ScaleReveal } from "@/components/ui/Animation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { CinematicTemplate } from "@/components/invitations/CinematicTemplate";
import { RoyalTemplate } from "@/components/invitations/RoyalTemplate";

const dummyData = {
  id: "hero", slug: "hero", status: "published" as const, createdAt: 0,
  type: "Wedding" as import("@/lib/types").InvitationType,
  eventTitle: "Rahul & Deepa",
  date: "Dec 25, 2026",
  time: "6:00 PM",
  venue: "The Grand Taj",
  address: "Mumbai, India",
  contact: "RSVP to 8652460120",
  message: "Join us in celebrating our special day.",
  creatorName: "ABZY",
  recipientName: "Guest",
  template: "cinematic" as const,
  photoUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
};

const dummyData2 = {
  ...dummyData,
  eventTitle: "Durgesh & Kajal",
  type: "Wedding" as import("@/lib/types").InvitationType,
  template: "royal" as const,
  photoUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1000"
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20 bg-obsidian">
      {/* Premium Cinematic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-accent/10 via-obsidian to-obsidian rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 items-center">
        
        {/* Left: Text Content */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start lg:w-5/12">
          <FadeIn delay={0.1}>
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-ash text-[10px] font-bold tracking-[0.3em] uppercase mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              ABZY INVITATION
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/95 mb-6 leading-[1.15] text-balance">
              Crafting Invitations Worth Remembering.
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg text-ash max-w-lg mb-10 leading-relaxed text-balance">
              We design cinematic, personalized digital experiences for weddings, birthdays, and elite events. Move beyond templates into a world of premium presentation.
            </p>
          </FadeIn>
          <FadeIn delay={0.4} className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <Link href="/request" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto px-10 h-14 rounded-full text-sm tracking-widest font-bold">
                Request Invitation
              </Button>
            </Link>
            <Link href="#invitations" className="w-full sm:w-auto">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto px-10 h-14 rounded-full text-sm tracking-widest font-bold border border-white/10 hover:border-white/30 hover:bg-white/5 transition-colors">
                View Gallery
              </Button>
            </Link>
          </FadeIn>
        </div>

        {/* Right: Layered Card Composition */}
        <ScaleReveal delay={0.5} className="relative w-full lg:w-7/12 flex flex-col md:flex-row items-center justify-center lg:justify-end gap-8 md:gap-4 min-h-[600px] perspective-[1200px] motion-reduce:transform-none">
          
          {/* Back Card (Durgesh & Kajal) */}
          <div className="relative w-[300px] sm:w-[350px] h-[550px] sm:h-[650px] rounded-[2.5rem] overflow-hidden border border-white/20 shadow-[0_10px_50px_rgba(0,0,0,0.5)] bg-graphite group hover:-translate-y-4 transition-transform duration-[800ms] md:rotate-y-[15deg] md:rotate-z-[5deg] z-10 md:absolute md:left-[10%] opacity-90 hover:opacity-100 hover:z-40 motion-reduce:transform-none motion-reduce:hover:transform-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[2600px] origin-top scale-[0.21] sm:scale-[0.25] pointer-events-none">
               <RoyalTemplate data={dummyData2} />
            </div>
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
          </div>

          {/* Front Card (Rahul & Deepa) */}
          <div className="relative w-[300px] sm:w-[350px] h-[550px] sm:h-[650px] rounded-[2.5rem] overflow-hidden border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.9)] bg-obsidian group hover:-translate-y-4 transition-transform duration-[800ms] hover:rotate-y-0 md:-rotate-y-[10deg] md:rotate-z-[2deg] z-30 md:ml-auto lg:mr-12 xl:mr-24 motion-reduce:hover:transform-none motion-reduce:transform-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[2600px] origin-top scale-[0.21] sm:scale-[0.25] pointer-events-none">
               <CinematicTemplate data={dummyData} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-30 pointer-events-none" />
          </div>

        </ScaleReveal>
      </div>
    </section>
  );
}
