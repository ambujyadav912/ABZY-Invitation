"use client";

import { FadeIn } from "@/components/ui/Animation";
import { CinematicTemplate } from "@/components/invitations/CinematicTemplate";
import { MinimalTemplate } from "@/components/invitations/MinimalTemplate";
import { ModernTemplate } from "@/components/invitations/ModernTemplate";
import { RoyalTemplate } from "@/components/invitations/RoyalTemplate";
import { FloralTemplate } from "@/components/invitations/AdditionalTemplates";
import { NeonTemplate, PosterTemplate, ArchTemplate } from "@/components/invitations/EvenMoreTemplates";
import { CorporateTemplate } from "@/components/invitations/MoreTemplates";

const categories = [
  { name: "Wedding", desc: "Elegant & Timeless", type: "Wedding" as const, Template: CinematicTemplate },
  { name: "Engagement", desc: "Romantic & Modern", type: "Engagement" as const, Template: RoyalTemplate },
  { name: "Birthday", desc: "Vibrant & Joyful", type: "Birthday" as const, Template: MinimalTemplate },
  { name: "Anniversary", desc: "Classic & Beautiful", type: "Anniversary" as const, Template: ModernTemplate },
  { name: "Baby Shower", desc: "Soft & Sweet", type: "Baby Shower" as const, Template: FloralTemplate },
  { name: "Housewarming", desc: "Warm & Welcoming", type: "Housewarming" as const, Template: ArchTemplate },
  { name: "Party", desc: "Bold & Exciting", type: "Party" as const, Template: NeonTemplate },
  { name: "Festival", desc: "Bright & Festive", type: "Festival" as const, Template: PosterTemplate },
  { name: "Religious", desc: "Sacred & Peaceful", type: "Religious" as const, Template: MinimalTemplate },
  { name: "Corporate", desc: "Clean & Professional", type: "Corporate" as const, Template: CorporateTemplate },
];

const dummyData = {
  id: "cat", slug: "cat", status: "published" as const, createdAt: 0,
  date: "Dec 25, 2026",
  time: "6:00 PM",
  venue: "The Grand Taj",
  address: "Mumbai, India",
  contact: "RSVP to 8652460120",
  message: "Join us in celebrating our special day.",
  creatorName: "ABZY",
  recipientName: "Guest",
  photoUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
};

export function Categories() {
  return (
    <section id="invitations" className="py-32 px-6 bg-graphite relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-electric-blue/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-ash text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
              Collection
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight text-balance">
              Every Occasion, <br /> Beautifully Celebrated.
            </h2>
            <p className="text-ash max-w-2xl mx-auto text-lg leading-relaxed">
              Explore our curated selection of premium digital invitation styles.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <FadeIn key={cat.name} delay={0.05 * i} className="h-full">
              <div className="group h-[380px] rounded-3xl bg-carbon border border-white/10 flex flex-col justify-end p-8 relative overflow-hidden cursor-pointer hover:border-white/30 transition-all hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                
                {/* Live Template Render */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[2400px] origin-top scale-[0.22] opacity-40 group-hover:opacity-90 group-hover:scale-[0.23] transition-all duration-700 ease-out pointer-events-none">
                  <cat.Template data={{ ...dummyData, type: cat.type, eventTitle: cat.name, template: "minimal" }} />
                </div>
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent group-hover:from-obsidian/90 transition-colors duration-500" />
                
                <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">{cat.name}</h3>
                  <p className="text-ash text-sm font-medium">{cat.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
