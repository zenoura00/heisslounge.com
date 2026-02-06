"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

export default function MovingSpotlight() {
  const [autoPosition, setAutoPosition] = useState({ x: 30, y: 30 });
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

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

  // Different colors for light and dark themes
  const goldColor = theme === "light" ? "160, 131, 57" : "201, 169, 98";
  const opacity1 = theme === "light" ? 0.12 : 0.08;
  const opacity2 = theme === "light" ? 0.08 : 0.05;
  const opacity3 = theme === "light" ? 0.1 : 0.06;

  return (
    <>
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(ellipse 600px 600px at ${autoPosition.x}% ${autoPosition.y}%, rgba(${goldColor}, ${opacity1}) 0%, rgba(${goldColor}, ${opacity1 * 0.4}) 30%, transparent 70%)`,
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(ellipse 400px 400px at ${100 - autoPosition.x}% ${100 - autoPosition.y}%, rgba(${goldColor}, ${opacity2}) 0%, rgba(${goldColor}, ${opacity2 * 0.4}) 40%, transparent 70%)`,
        }}
      />
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none z-0"
        style={{
          background: `radial-gradient(ellipse at center top, rgba(${goldColor}, ${opacity3}) 0%, transparent 60%)`,
        }}
      />
    </>
  );
}
