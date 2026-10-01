"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { FadeIn, ScaleReveal } from "@/components/ui/Animation";
import { InvitationData, InvitationType, TemplateStyle } from "@/lib/types";
import { createAndPublishInvitation } from "@/app/actions/invitationActions";
import { InvitationRenderer } from "@/components/invitations/InvitationRenderer";
import { Check, Copy, ExternalLink, RefreshCw, Grid, Loader2 } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";
import { getInvitationById } from "@/app/actions/invitationActions";

const INVITATION_TYPES: { type: InvitationType, emoji: string, desc: string }[] = [
  { type: "Wedding", emoji: "💍", desc: "Elegant invitations for weddings and ceremonies." },
  { type: "Engagement", emoji: "💑", desc: "Romantic announcements for your engagement." },
  { type: "Birthday", emoji: "🎂", desc: "Joyful invites for birthday celebrations." },
  { type: "Anniversary", emoji: "💐", desc: "Celebrate milestones with elegance." },
  { type: "Baby Shower", emoji: "🍼", desc: "Sweet invitations for baby showers." },
  { type: "Housewarming", emoji: "🏠", desc: "Welcome guests to your new home." },
  { type: "Corporate", emoji: "💼", desc: "Professional invites for corporate events." },
  { type: "Party", emoji: "🎉", desc: "Bold invites for exciting parties." },
  { type: "Religious", emoji: "🙏", desc: "Respectful religious ceremony invites." },
  { type: "Festival", emoji: "🪔", desc: "Vibrant festival celebration invites." },
];

const TEMPLATES: { id: TemplateStyle, name: string, category: string, color: string }[] = [
  { id: "royal", name: "Royal", category: "Wedding / Luxury", color: "from-amber-500/20 to-orange-900/20" },
  { id: "cinematic", name: "Cinematic", category: "Modern / Premium", color: "from-blue-500/20 to-obsidian" },
  { id: "minimal", name: "Minimal", category: "Clean / Elegant", color: "from-slate-200 to-white text-obsidian" },
  { id: "floral", name: "Floral", category: "Romantic / Soft", color: "from-green-200/50 to-pink-200/50" },
  { id: "luxury", name: "Luxury", category: "Premium / Dark", color: "from-obsidian to-carbon border-white/10" },
  { id: "fun", name: "Celebration", category: "Birthday / Party", color: "from-pink-500/20 to-yellow-500/20" },
  { id: "traditional", name: "Traditional", category: "Cultural / Religious", color: "from-red-900/40 to-yellow-600/20" },
  { id: "modern", name: "Modern", category: "Corporate / Clean", color: "from-steel to-carbon" },
  { id: "professional", name: "Professional", category: "Corporate / Sharp", color: "from-blue-900/40 to-slate-900" },
  { id: "classic", name: "Organic", category: "Soft / Natural", color: "from-[#E8DCC4]/30 to-[#F0E6D2]/20" },
  { id: "premium", name: "Glamour", category: "High-End / Dark", color: "from-white/10 to-transparent" },
  { id: "elegant", name: "Elegant", category: "Minimal / Luxury", color: "from-slate-700 to-slate-900" },
  { id: "poster", name: "Poster", category: "Bold / Typography", color: "from-gray-300 to-gray-500" },
  { id: "neon", name: "Neon", category: "Night / Glass", color: "from-fuchsia-900/50 to-cyan-900/50" },
  { id: "arch", name: "Arch", category: "Architecture / Editorial", color: "from-[#F5F5F0] to-[#E8E8DF] text-black" }
];

function CreateInvitationWizardContent() {
  const searchParams = useSearchParams();
  const editId = searchParams.get("id");
  
  const [step, setStep] = useState<"LOADING" | "TYPE" | "DETAILS" | "PREVIEW" | "SELECT_DESIGN" | "PUBLISHED">(editId ? "LOADING" : "TYPE");
  
  const [type, setType] = useState<InvitationType>("Wedding");
  const [details, setDetails] = useState({
    recipientName: "",
    creatorName: "ABZY",
    eventTitle: "",
    date: "",
    time: "",
    venue: "",
    address: "",
    contact: "",
    message: "",
    photoUrl: ""
  });
  
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateStyle>("cinematic");
  const [publishedSlug, setPublishedSlug] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (editId) {
      getInvitationById(editId).then(inv => {
        if (inv) {
          setType(inv.type);
          setDetails({
            recipientName: inv.recipientName,
            creatorName: inv.creatorName,
            eventTitle: inv.eventTitle,
            date: inv.date,
            time: inv.time,
            venue: inv.venue,
            address: inv.address,
            contact: inv.contact,
            message: inv.message,
            photoUrl: inv.photoUrl || ""
          });
          setSelectedTemplate(inv.template);
          setPublishedSlug(inv.slug);
          setStep("PREVIEW");
        } else {
          setStep("TYPE");
        }
      });
    }
  }, [editId]);

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editId && step === "DETAILS") {
       // Only randomize template if creating new and coming from Details for the first time
       setSelectedTemplate(TEMPLATES[Math.floor(Math.random() * TEMPLATES.length)].id);
    }
    setStep("PREVIEW");
  };

  const handleFinalize = async () => {
    setIsPublishing(true);
    const payload = {
      type,
      ...details,
      template: selectedTemplate
    };
    
    // Pass editId if editing to the action
    const result = await createAndPublishInvitation(payload, editId);
    
    if (result.success) {
      setPublishedSlug(result.slug);
      setStep("PUBLISHED");
    }
    setIsPublishing(false);
  };

  if (step === "LOADING") {
    return <div className="min-h-[50vh] flex items-center justify-center"><Loader2 className="w-8 h-8 text-blue-accent animate-spin" /></div>;
  }

  const copyLink = () => {
    const url = `${window.location.origin}/invite/${publishedSlug}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (step === "TYPE") {
    return (
      <FadeIn className="space-y-8 pb-20 pt-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Select Invitation Type</h1>
          <p className="text-ash">Choose the occasion for this digital invitation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {INVITATION_TYPES.map((item) => (
            <Card 
              key={item.type} 
              variant="glass" 
              className={`p-5 cursor-pointer transition-all hover:scale-[1.02] ${type === item.type ? 'border-blue-accent bg-blue-accent/10 shadow-lg shadow-blue-accent/20' : 'hover:border-white/20'}`}
              onClick={() => setType(item.type)}
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3 className="text-lg font-bold text-white mb-1">{item.type}</h3>
              <p className="text-xs text-ash leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
        <div className="flex justify-end pt-8 border-t border-white/10">
          <Button onClick={() => setStep("DETAILS")} size="lg">Continue to Details</Button>
        </div>
      </FadeIn>
    );
  }

  if (step === "DETAILS") {
    return (
      <FadeIn className="space-y-8 pb-20 pt-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Enter Details</h1>
            <p className="text-ash">Fill in the information for the {type} invitation.</p>
          </div>
          <Button variant="ghost" onClick={() => setStep("TYPE")}>Back</Button>
        </div>
        
        <form onSubmit={handleDetailsSubmit} className="space-y-8">
          <Card variant="glass" className="p-6 md:p-8 space-y-6">
            <h2 className="text-xl font-semibold text-white">Event Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-slate">Event Title</label>
                <Input required value={details.eventTitle} onChange={e => setDetails({...details, eventTitle: e.target.value})} placeholder="e.g. Sarah & John's Wedding" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate">Message / Description</label>
                <Input required value={details.message} onChange={e => setDetails({...details, message: e.target.value})} placeholder="Join us to celebrate..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate">Date</label>
                <Input type="date" required value={details.date} onChange={e => setDetails({...details, date: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate">Time</label>
                <Input type="time" required value={details.time} onChange={e => setDetails({...details, time: e.target.value})} />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate">Venue Name</label>
                <Input required value={details.venue} onChange={e => setDetails({...details, venue: e.target.value})} placeholder="The Grand Hotel" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate">Address</label>
                <Input required value={details.address} onChange={e => setDetails({...details, address: e.target.value})} placeholder="123 Celebration Ave" />
              </div>
            </div>
            <div className="space-y-2 pt-4 border-t border-white/5">
              <label className="text-sm text-slate">Upload Photo (Optional)</label>
              <div className="relative w-full min-h-[128px] border-2 border-dashed border-steel rounded-2xl flex flex-col items-center justify-center text-ash hover:border-blue-accent hover:text-blue-accent transition-colors bg-graphite overflow-hidden">
                <input 
                  type="file" 
                  accept="image/*" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setDetails(prev => ({ ...prev, photoUrl: reader.result as string }));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                {details.photoUrl ? (
                  <div className="relative w-full h-48">
                    <img src={details.photoUrl} alt="Uploaded preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <span className="text-white font-medium">Click to replace</span>
                    </div>
                  </div>
                ) : (
                  <span className="p-4">Click to upload image</span>
                )}
              </div>
              {details.photoUrl && (
                <div className="flex justify-end mt-2 relative z-20">
                   <Button variant="ghost" size="sm" type="button" onClick={() => setDetails(prev => ({ ...prev, photoUrl: "" }))}>
                     Remove Photo
                   </Button>
                </div>
              )}
            </div>
          </Card>

          <Card variant="glass" className="p-6 md:p-8 space-y-6">
            <h2 className="text-xl font-semibold text-white">Recipient & Creator</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm text-slate">Recipient Name (For preview)</label>
                <Input value={details.recipientName} onChange={e => setDetails({...details, recipientName: e.target.value})} placeholder="e.g. Michael (Optional)" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-slate">Creator Name</label>
                <Input required value={details.creatorName} onChange={e => setDetails({...details, creatorName: e.target.value})} />
              </div>
            </div>
          </Card>

          <div className="flex justify-end pt-8 border-t border-white/10">
            <Button type="submit" size="lg">Generate Invitation</Button>
          </div>
        </form>
      </FadeIn>
    );
  }

  if (step === "PREVIEW") {
    const previewData: InvitationData = {
      id: "preview", slug: "preview", status: "preview", createdAt: Date.now(),
      type, template: selectedTemplate, ...details,
      recipientName: details.recipientName || "Guest"
    };

    return (
      <div className="space-y-8 pb-20 pt-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-carbon p-6 rounded-[28px] border border-white/5 sticky top-24 z-20 shadow-2xl">
          <div>
            <h1 className="text-xl font-bold text-white mb-1">Invitation Preview</h1>
            <p className="text-sm text-ash">Template: <span className="capitalize text-white">{selectedTemplate}</span></p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => setStep("DETAILS")}>Edit Details</Button>
            <Button variant="secondary" size="sm" onClick={() => setStep("SELECT_DESIGN")} className="gap-2">
              <Grid className="w-4 h-4" /> Regenerate
            </Button>
            <Button onClick={handleFinalize} disabled={isPublishing}>
              {isPublishing ? "Finalizing..." : "Looks Good — Finalize"}
            </Button>
          </div>
        </div>

        <div className="w-full border-4 border-obsidian rounded-[40px] overflow-hidden shadow-2xl relative ring-1 ring-white/10">
           <InvitationRenderer key={selectedTemplate} data={previewData} />
        </div>
      </div>
    );
  }

  if (step === "SELECT_DESIGN") {
    return (
      <FadeIn className="space-y-8 pb-20 pt-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Design Collection</h1>
            <p className="text-ash">Select a professional design variation for this invitation.</p>
          </div>
          <Button variant="ghost" onClick={() => setStep("PREVIEW")}>Cancel</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEMPLATES.map((tmpl) => (
            <Card 
              key={tmpl.id} 
              variant="glass" 
              className={`overflow-hidden cursor-pointer transition-all hover:scale-[1.02] ${selectedTemplate === tmpl.id ? 'border-blue-accent ring-2 ring-blue-accent shadow-xl shadow-blue-accent/20' : 'hover:border-white/30'}`}
              onClick={() => {
                setSelectedTemplate(tmpl.id);
                setStep("PREVIEW");
              }}
            >
              <div className={`h-40 w-full bg-gradient-to-br ${tmpl.color} flex items-center justify-center p-6 text-center border-b border-white/5`}>
                <span className="font-serif text-xl opacity-80 mix-blend-overlay">{tmpl.name}</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1">{tmpl.name}</h3>
                <p className="text-sm text-ash mb-4">{tmpl.category}</p>
                <Button variant={selectedTemplate === tmpl.id ? "primary" : "secondary"} size="sm" className="w-full">
                  {selectedTemplate === tmpl.id ? "Selected" : "Select Design"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </FadeIn>
    );
  }

  if (step === "PUBLISHED") {
    return (
      <ScaleReveal className="min-h-[60vh] flex items-center justify-center pt-8">
        <Card variant="glass" className="max-w-md w-full p-10 text-center space-y-8">
          <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10" />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Invitation Created!</h1>
            <p className="text-ash">Your invitation is ready and finalized.</p>
          </div>

          <div className="bg-obsidian p-4 rounded-xl border border-white/10 flex items-center justify-between gap-4">
            <span className="text-sm text-slate truncate">/invite/{publishedSlug}</span>
            <Button size="sm" variant="secondary" onClick={copyLink} className="shrink-0 gap-2">
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Copied" : "Copy"}
            </Button>
          </div>

          <div className="pt-6 border-t border-white/5 space-y-4">
             <Link href={`/invite/${publishedSlug}`} target="_blank">
               <Button className="w-full gap-2">
                 Open Invitation <ExternalLink className="w-4 h-4" />
               </Button>
             </Link>
             <Button variant="ghost" className="w-full" onClick={() => window.location.reload()}>
               Create Another
             </Button>
          </div>
        </Card>
      </ScaleReveal>
    );
  }

  return null;
}

export default function CreateInvitationWizard() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 text-blue-accent animate-spin" /></div>}>
      <CreateInvitationWizardContent />
    </Suspense>
  );
}
