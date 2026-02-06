"use client";

import { useState, useEffect, useRef } from "react";

interface Trail {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

export default function MouseTrail() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const trailIdRef = useRef(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = {
        id: trailIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      };

      setTrails((prev) => [...prev.slice(-15), newTrail]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up old trails
    const cleanupInterval = setInterval(() => {
      const now = Date.now();
      setTrails((prev) => prev.filter((trail) => now - trail.timestamp < 500));
    }, 50);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(cleanupInterval);
    };
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trails.map((trail, index) => {
        const age = Date.now() - trail.timestamp;
        const opacity = Math.max(0, 1 - age / 500) * 0.6;
        const scale = Math.max(0.1, 1 - age / 500);
        const size = 8 + (trails.length - index) * 0.5;

        return (
          <div
            key={trail.id}
            className="absolute rounded-full"
            style={{
              left: trail.x - size / 2,
              top: trail.y - size / 2,
              width: size,
              height: size,
              background: `radial-gradient(circle, rgba(201, 169, 98, ${opacity}) 0%, rgba(201, 169, 98, 0) 70%)`,
              boxShadow: `0 0 ${size}px rgba(201, 169, 98, ${opacity * 0.8})`,
              transform: `scale(${scale})`,
              transition: "opacity 0.1s ease-out",
            }}
          />
        );
      })}

      {/* Main cursor glow */}
      {trails.length > 0 && (
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            left: trails[trails.length - 1].x - 20,
            top: trails[trails.length - 1].y - 20,
            width: 40,
            height: 40,
            background: `radial-gradient(circle, rgba(201, 169, 98, 0.15) 0%, transparent 70%)`,
            transition: "left 0.05s ease-out, top 0.05s ease-out",
          }}
        />
      )}
    </div>
  );
}
