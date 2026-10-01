"use client";

import { FadeIn } from "@/components/ui/Animation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { submitRequest } from "@/app/actions/requestActions";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import Link from "next/link";

export default function RequestPage() {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    invitationType: "",
    eventDate: "",
    venue: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await submitRequest(formData);
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-24 px-6 bg-obsidian flex flex-col items-center justify-center text-center">
        <FadeIn className="max-w-md space-y-6">
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Request Sent!</h1>
          <p className="text-ash mb-8">We&apos;ve received your invitation request. The ABZY team will contact you shortly.</p>
          <Link href="/">
             <Button>Return Home</Button>
          </Link>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-obsidian flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Request an Invitation</h1>
            <p className="text-ash text-lg">
              Your invitation will be professionally created by ABZY. Provide the details below to get started.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Card variant="glass" className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate">Full Name</label>
                  <Input placeholder="John Doe" value={formData.customerName} onChange={e => setFormData({...formData, customerName: e.target.value})} required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate">Contact Number</label>
                  <Input placeholder="+1 234 567 8900" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate">Email</label>
                  <Input type="email" placeholder="john@example.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate">Invitation Type</label>
                  <Input placeholder="Wedding, Birthday, etc." value={formData.invitationType} onChange={e => setFormData({...formData, invitationType: e.target.value})} required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate">Event Date</label>
                  <Input type="date" value={formData.eventDate} onChange={e => setFormData({...formData, eventDate: e.target.value})} required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate">Venue / Location</label>
                  <Input placeholder="The Grand Hotel" value={formData.venue} onChange={e => setFormData({...formData, venue: e.target.value})} required />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate">Message / Description</label>
                <Textarea placeholder="Any specific requirements or message to include..." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required />
              </div>

              <div className="pt-6 space-y-4">
                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                  Send Request to ABZY
                </Button>
                <div className="text-center text-sm text-ash pt-4">
                  Prefer to contact us directly? <Link href="/contact" className="text-blue-accent hover:underline">Go to Contact Page</Link>
                </div>
              </div>
            </form>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
