"use client";

import { useEffect, useRef } from "react";

export default function MovingSpotlight() {
  const spotlight1Ref = useRef<HTMLDivElement>(null);
  const spotlight2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.003; // Slow movement

      if (spotlight1Ref.current) {
        // Main spotlight - larger, moves in circular pattern
        const x1 = 50 + Math.sin(time) * 30;
        const y1 = 50 + Math.cos(time * 0.7) * 25;
        spotlight1Ref.current.style.left = `${x1}%`;
        spotlight1Ref.current.style.top = `${y1}%`;
      }

      if (spotlight2Ref.current) {
        // Secondary spotlight - smaller, moves in opposite direction
        const x2 = 50 + Math.sin(time * 0.8 + Math.PI) * 35;
        const y2 = 50 + Math.cos(time * 0.6 + Math.PI) * 30;
        spotlight2Ref.current.style.left = `${x2}%`;
        spotlight2Ref.current.style.top = `${y2}%`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main Spotlight - Large golden glow */}
      <div
        ref={spotlight1Ref}
        className="absolute w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(circle, rgba(201, 169, 98, 0.07) 0%, rgba(201, 169, 98, 0.03) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Secondary Spotlight - Smaller, different golden tone */}
      <div
        ref={spotlight2Ref}
        className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(circle, rgba(212, 184, 122, 0.06) 0%, rgba(212, 184, 122, 0.02) 50%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Subtle ambient glow at the top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px]"
        style={{
          background: "radial-gradient(ellipse at center top, rgba(201, 169, 98, 0.04) 0%, transparent 60%)",
        }}
      />

      {/* Very subtle bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px]"
        style={{
          background: "radial-gradient(ellipse at center bottom, rgba(201, 169, 98, 0.03) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
