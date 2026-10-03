"use client";

import { useState, Suspense } from "react";
import { FadeIn } from "@/components/ui/Animation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { submitRequest } from "@/app/actions/requestActions";
import { useSearchParams } from "next/navigation";
import { Loader2, Star, CheckCircle } from "lucide-react";
import Link from "next/link";

function FeedbackForm() {
  const searchParams = useSearchParams();
  const inviteParam = searchParams.get("invite") || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inviteCode, setInviteCode] = useState(inviteParam);
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitRequest({
        customerName: name.trim() || "Anonymous Guest",
        email: email.trim(),
        phone: "",
        invitationType: inviteCode ? `Feedback (${inviteCode})` : "General Feedback",
        eventDate: new Date().toLocaleDateString(),
        venue: `Rating: ${rating}/5 stars`,
        message: message.trim(),
      });
      setSubmitted(true);
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Failed to submit feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6">
        <FadeIn className="max-w-md space-y-6">
          <div className="w-20 h-20 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Thank You!</h1>
          <p className="text-ash leading-relaxed">
            Your feedback means the world to us. It helps ABZY continue creating unforgettable digital invitation experiences.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
            {inviteCode && (
              <Link href={`/invite/${inviteCode}`}>
                <Button variant="secondary">Back to Invitation</Button>
              </Link>
            )}
            <Link href="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    );
  }

  return (
    <div className="max-w-2xl w-full mx-auto">
      <FadeIn>
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-ash text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
            Your Experience
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Share Your Feedback</h1>
          <p className="text-ash text-lg">
            How was your ABZY digital invitation experience? We would love to hear your thoughts.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <Card variant="glass" className="p-8 md:p-12 border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate">Rate Your Experience</label>
              <div className="flex items-center gap-2 pt-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className="p-1 text-white/30 hover:text-amber-400 focus:outline-none transition-colors"
                  >
                    <Star
                      className={`w-8 h-8 ${star <= rating ? "fill-amber-400 text-amber-400" : ""}`}
                    />
                  </button>
                ))}
                <span className="text-sm text-ash ml-3 font-medium">
                  {rating === 5 ? "Loved it!" : rating === 4 ? "Great" : rating === 3 ? "Good" : rating === 2 ? "Fair" : "Needs Improvement"}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate">Your Name</label>
                <Input
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate">Email (Optional)</label>
                <Input
                  type="email"
                  placeholder="rahul@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {inviteCode && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate">Invitation Code</label>
                <Input
                  value={inviteCode}
                  onChange={(e) => setInviteCode(e.target.value)}
                  placeholder="e.g. ABZY-123456"
                />
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate">Your Comments & Suggestions</label>
              <Textarea
                placeholder="What did you like most? Anything we can improve?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="min-h-[140px]"
              />
            </div>

            <div className="pt-4 space-y-4">
              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                Submit Feedback
              </Button>
            </div>
          </form>
        </Card>
      </FadeIn>
    </div>
  );
}

export default function FeedbackPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-obsidian flex flex-col items-center justify-center">
      <Suspense fallback={<div className="min-h-[50vh] flex items-center justify-center"><Loader2 className="w-8 h-8 text-blue-accent animate-spin" /></div>}>
        <FeedbackForm />
      </Suspense>
    </div>
  );
}
