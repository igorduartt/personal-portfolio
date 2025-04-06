import React from "react";

/**
 * DecorativeElement Component
 * 
 * Provides various decorative shapes (circle, square, dot grid) used to enhance
 * the visual design of sections with subtle background elements.
 * 
 * These elements are typically positioned absolutely within relative parent containers
 * and contribute to the refined minimalist design with subtle geometric shapes.
 */
export interface Props {
  className?: string;
  variant?: "circle" | "square" | "dot-grid";
  color?: string;
}

export function DecorativeElement({ 
  className = "", 
  variant = "circle",
  color = "bg-teal-500/10" 
}: Props) {
  
  if (variant === "circle") {
    return (
      <div 
        className={`absolute rounded-full ${color} ${className}`}
        aria-hidden="true"
      />
    );
  }
  
  if (variant === "square") {
    return (
      <div 
        className={`absolute rounded-md ${color} ${className}`}
        aria-hidden="true"
      />
    );
  }
  
  if (variant === "dot-grid") {
    // Generate a 5x5 grid of dots
    return (
      <div className={`absolute ${className}`} aria-hidden="true">
        <div className="relative grid grid-cols-5 gap-2">
          {Array.from({ length: 25 }).map((_, i) => (
            <div 
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${color}`}
            />
          ))}
        </div>
      </div>
    );
  }
  
  return null;
}
