"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-obsidian text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-carbon via-obsidian to-obsidian" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[500px] max-h-[500px] bg-red-900/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 space-y-6 max-w-md w-full">
        <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 text-red-400 rounded-full flex items-center justify-center mx-auto shadow-2xl">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Something went wrong
          </h1>
          <p className="text-ash text-base leading-relaxed">
            An unexpected error occurred while loading this page. Please try again.
          </p>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={() => reset()} size="md" className="px-8">
            Try Again
          </Button>
          <Link href="/">
            <Button variant="ghost" size="md" className="px-8">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
