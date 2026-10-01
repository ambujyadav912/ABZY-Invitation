"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "@/components/ui/Animation";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { SettingsData } from "@/lib/types";
import { getSettingsAction, updateSettingsAction } from "@/app/actions/adminActions";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Loader2 } from "lucide-react";

export default function SettingsPage() {
  const [settings, setSettings] = useState<SettingsData | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function load() {
      setSettings(await getSettingsAction());
    }
    load();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!settings) return;
    setSaving(true);
    await updateSettingsAction(settings);
    setSaving(false);
    alert("Settings saved!");
  };

  if (!settings) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <AnimatedBackground />
        <Loader2 className="w-8 h-8 text-blue-accent animate-spin" />
      </div>
    );
  }

  return (
    <>
      <AnimatedBackground />
      <div className="space-y-8 pb-20 relative z-10 max-w-2xl">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">Settings</h1>
          <p className="text-ash text-lg">Manage ABZY platform configuration.</p>
        </div>

        <FadeIn>
          <Card variant="glass" className="p-8 border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-xl font-bold text-white mb-4">Contact Information</h2>
              
              <div className="space-y-2">
                <label className="text-sm text-slate">Email Address</label>
                <Input 
                  value={settings.email} 
                  onChange={e => setSettings({...settings, email: e.target.value})} 
                  placeholder="e.g. contact@abzy.com" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate">Phone Number</label>
                <Input 
                  value={settings.phone} 
                  onChange={e => setSettings({...settings, phone: e.target.value})} 
                  placeholder="e.g. 1234567890" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-slate">Instagram Handle</label>
                <Input 
                  value={settings.instagram} 
                  onChange={e => setSettings({...settings, instagram: e.target.value})} 
                  placeholder="e.g. @abzy_cartoon_2026" 
                />
              </div>

              <div className="pt-6 border-t border-white/10">
                <Button type="submit" disabled={saving}>
                  {saving ? "Saving..." : "Save Settings"}
                </Button>
              </div>
            </form>
          </Card>
        </FadeIn>
      </div>
    </>
  );
}
