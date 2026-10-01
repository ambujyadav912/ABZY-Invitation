"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Smooth cinematic entrance
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={cn(
        "relative flex items-center justify-center overflow-hidden transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] perspective-[1000px] motion-reduce:transition-none",
        mounted ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2 motion-reduce:opacity-100 motion-reduce:scale-100 motion-reduce:translate-y-0",
        className
      )}
    >
      {/* Subtle depth shadow behind the logo */}
      <div className="absolute inset-0 bg-white/5 blur-lg rounded-full scale-[1.2] pointer-events-none" />
      
      {/* The actual Logo Image with gentle floating/perspective effect */}
      <div className="relative z-10 w-full h-full transition-transform duration-[2000ms] ease-out hover:scale-[1.03] hover:-translate-y-0.5 motion-reduce:hover:transform-none" style={{ transformStyle: 'preserve-3d' }}>
        <Image 
          src="/logo.jpg" 
          alt="ABZY Logo" 
          width={200}
          height={200}
          className="object-contain w-full h-full rounded-2xl invert mix-blend-screen drop-shadow-[0_4px_12px_rgba(255,255,255,0.05)]"
          priority
        />
        
        {/* Very subtle light reflection sweep */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[200%] animate-[shimmer_5s_ease-in-out_infinite] mix-blend-overlay pointer-events-none motion-reduce:animate-none motion-reduce:hidden" />
      </div>
    </div>
  );
}
