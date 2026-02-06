"use client";

import { Suspense } from "react";
import LinksPage from "@/components/LinksPage";

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#0f0f0f" }}>
      <div className="text-[#c9a962] text-lg tracking-wider animate-pulse">
        Laden...
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <LinksPage />
    </Suspense>
  );
}
