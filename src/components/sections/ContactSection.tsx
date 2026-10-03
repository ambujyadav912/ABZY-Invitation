"use client";

import { FadeIn } from "@/components/ui/Animation";
import { Card } from "@/components/ui/Card";
import { Mail, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-6 bg-graphite relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-accent/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <FadeIn>
          <Card variant="glass" className="p-12 text-center border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-accent/50 to-transparent" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Want an invitation like this?</h2>
            <p className="text-ash text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Tell ABZY about your special occasion and we&apos;ll create something memorable.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-12">
              
              <a href="mailto:ahirambuj4@gmail.com" className="group flex-1">
                <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all hover:bg-white/10 flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div className="text-white font-medium">Email</div>
                  <div className="text-ash text-sm">ahirambuj4@gmail.com</div>
                </div>
              </a>

              <a href="tel:8652460120" className="group flex-1">
                <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all hover:bg-white/10 flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div className="text-white font-medium">Phone</div>
                  <div className="text-ash text-sm">8652460120</div>
                </div>
              </a>

              <a href="https://instagram.com/abzy_cartoon_2026" target="_blank" rel="noopener noreferrer" className="group flex-1">
                <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all hover:bg-white/10 flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-accent/20 flex items-center justify-center text-blue-accent group-hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
                  <div className="text-white font-medium">Instagram</div>
                  <div className="text-ash text-sm">@abzy_cartoon_2026</div>
                </div>
              </a>

            </div>

            <a href="mailto:ahirambuj4@gmail.com" className="inline-flex items-center justify-center px-12 py-5 bg-white text-obsidian font-bold rounded-full hover:scale-105 transition-transform tracking-widest text-sm uppercase">
              Contact ABZY
            </a>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
