// src/app/loading.jsx
import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center gap-4 bg-base-50">
      {/* DaisyUI Ring Spinner */}
      <span className="loading loading-ring loading-lg text-primary scale-125"></span>
      <p className="text-sm font-semibold text-base-content/60 tracking-wide animate-pulse">
        Loading SkillSphere...
      </p>
    </div>
  );
}
