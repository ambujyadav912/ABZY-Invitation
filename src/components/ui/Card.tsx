import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "solid" | "outline";
}

export function Card({ className, variant = "glass", children, ...props }: CardProps) {
  const baseStyles = "rounded-[var(--radius-card)] overflow-hidden";
  
  const variants = {
    glass: "bg-carbon/50 backdrop-blur-md border border-steel/50",
    solid: "bg-carbon border border-transparent",
    outline: "bg-transparent border border-steel",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </div>
  );
}
