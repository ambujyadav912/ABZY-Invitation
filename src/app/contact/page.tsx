"use client";

import { FadeIn } from "@/components/ui/Animation";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-obsidian flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-ash text-lg max-w-2xl mx-auto">
              Ready to create an unforgettable invitation? Contact ABZY directly to discuss your special occasion.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <FadeIn delay={0.1}>
            <Card variant="glass" className="p-8 text-center flex flex-col items-center gap-4 h-full hover:border-white/20 transition-colors">
              <div className="w-16 h-16 bg-blue-accent/10 rounded-full flex items-center justify-center text-blue-accent mb-2">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Email Us</h3>
              <p className="text-ash text-sm mb-4">For detailed inquiries and support.</p>
              <a href="mailto:ahirambuj4@gmail.com" className="mt-auto">
                <Button variant="outline" className="w-full gap-2">
                  ahirambuj4@gmail.com
                </Button>
              </a>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card variant="glass" className="p-8 text-center flex flex-col items-center gap-4 h-full hover:border-white/20 transition-colors">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-2">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Call Us</h3>
              <p className="text-ash text-sm mb-4">Direct line for immediate assistance.</p>
              <a href="tel:8652460120" className="mt-auto">
                <Button variant="outline" className="w-full gap-2">
                  +91 8652460120
                </Button>
              </a>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card variant="glass" className="p-8 text-center flex flex-col items-center gap-4 h-full hover:border-white/20 transition-colors">
              <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center text-pink-500 mb-2">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Instagram</h3>
              <p className="text-ash text-sm mb-4">See our latest designs and updates.</p>
              <a href="https://instagram.com/abzy_cartoon_2026" target="_blank" rel="noopener noreferrer" className="mt-auto">
                <Button variant="outline" className="w-full gap-2">
                  @abzy_cartoon_2026
                </Button>
              </a>
            </Card>
          </FadeIn>
        </div>

        <FadeIn delay={0.5}>
          <Card variant="glass" className="p-8 md:p-12 text-center bg-gradient-to-br from-carbon to-obsidian border-blue-accent/20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to start?</h2>
            <p className="text-ash mb-8 max-w-xl mx-auto">
              You can also submit a formal request through our platform and we&apos;ll get back to you with a custom proposal.
            </p>
            <Link href="/request">
              <Button size="lg" className="gap-2">
                Submit an Invitation Request <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
