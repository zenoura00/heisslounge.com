"use client";

import { useState, useEffect } from "react";

export default function MovingSpotlight() {
  const [autoPosition, setAutoPosition] = useState({ x: 30, y: 30 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let angle = 0;
    const interval = setInterval(() => {
      angle += 0.005;
      const x = 50 + Math.sin(angle) * 30;
      const y = 50 + Math.cos(angle * 0.7) * 25;
      setAutoPosition({ x, y });
    }, 50);

    return () => clearInterval(interval);
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(ellipse 600px 600px at ${autoPosition.x}% ${autoPosition.y}%, rgba(201, 169, 98, 0.08) 0%, rgba(201, 169, 98, 0.03) 30%, transparent 70%)`,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(ellipse 400px 400px at ${100 - autoPosition.x}% ${100 - autoPosition.y}%, rgba(201, 169, 98, 0.05) 0%, rgba(201, 169, 98, 0.02) 40%, transparent 70%)`,
        }}
      />
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at center top, rgba(201, 169, 98, 0.06) 0%, transparent 60%)`,
        }}
      />
    </>
  );
}
