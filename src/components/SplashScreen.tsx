"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isFading, setIsFading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    // Complete and hide after 3 seconds
    const completeTimer = setTimeout(() => {
      setIsHidden(true);
      onComplete();
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (isHidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-500 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ backgroundColor: "#0f0f0f" }}
    >
      {/* Logo */}
      <div className="animate-fadeIn flex items-center justify-center">
        <Image
          src="/splash-logo.png"
          alt="Heiß Lounge"
          width={250}
          height={222}
          className="w-[180px] h-auto sm:w-[220px] md:w-[250px] object-contain"
          priority
          unoptimized
        />
      </div>

      {/* Text below logo */}
      <div className="mt-6 text-center animate-fadeInDelayed">
        <h1
          className="text-[#c9a962] text-xl sm:text-2xl md:text-3xl tracking-[0.3em] font-light"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          HEIß LOUNGE
        </h1>
        <p className="text-[#8a8a8a] text-xs sm:text-sm tracking-[0.2em] mt-2">
          SHISHA & COCKTAIL BAR
        </p>
      </div>
    </div>
  );
}
