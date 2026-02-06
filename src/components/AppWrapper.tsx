"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SplashScreen from "./SplashScreen";

interface AppWrapperProps {
  children: React.ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  const pathname = usePathname();
  const [showSplash, setShowSplash] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setTimeout(() => {
      setContentVisible(true);
    }, 100);
  };

  // Check if user has seen splash in this session
  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (hasSeenSplash) {
      setShowSplash(false);
      setContentVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!showSplash) {
      sessionStorage.setItem("hasSeenSplash", "true");
    }
  }, [showSplash]);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div
        className={`transition-opacity duration-700 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
