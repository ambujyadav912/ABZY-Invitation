"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-obsidian">
      {/* Abstract 3D-ish Orbs using blurred gradients */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-accent/10 blur-[120px]"
      />
      
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[40%] -right-[20%] w-[40vw] h-[40vw] rounded-full bg-electric/10 blur-[140px]"
      />
      
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[40vw] rounded-full bg-white/5 blur-[150px]"
      />

      {/* Subtle Grid overlay for depth */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />
    </div>
  );
}
