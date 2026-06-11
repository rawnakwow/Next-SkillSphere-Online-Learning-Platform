"use client";
import React from "react";
import Image from "next/image";

export default function InstructorCard({ instructor }) {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow duration-300">
      
      {/* 📸 Optimized Circular Avatar Image Wrapper */}
      <div className="avatar mb-3">
        <div className="w-16 h-16 rounded-full ring ring-indigo-900 ring-offset-base-100 ring-offset-2 overflow-hidden relative bg-gray-100">
          <Image 
            src={instructor.img || "https://unsplash.com"} 
            alt={instructor.name || "Mentor Profile"}
            fill
            sizes="64px"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* 👤 Mentor Name & Role Info Headers */}
      <h3 className="font-bold text-sm text-gray-900 leading-tight">
        {instructor.name}
      </h3>
      <p className="text-[11px] text-gray-400 font-semibold mt-0.5">
        {instructor.role}
      </p>

      {/* 🌐 Social Quick-Links (Matches the small square design icons from your design layout) */}
      <div className="flex gap-2 mt-3 text-[10px] text-indigo-900">
        <span className="w-5 h-5 bg-indigo-50 flex items-center justify-center rounded cursor-pointer hover:bg-indigo-100 transition-colors">
          💼
        </span>
        <span className="w-5 h-5 bg-indigo-50 flex items-center justify-center rounded cursor-pointer hover:bg-indigo-100 transition-colors">
          🐦
        </span>
      </div>

    </div>
  );
}
