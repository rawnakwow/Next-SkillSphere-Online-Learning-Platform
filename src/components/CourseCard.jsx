"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react"; // Import Motion components cleanly

export default function CourseCard({ course }) {
  return (
    // Prepend standard layout elements with motion. to add animation capabilities
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="card bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300"
    >
      {/* 🖼️ Course Card Thumbnail Image Section */}
      <div className="relative h-48 w-full bg-gray-50">
        <Image 
          src={course.image || "https://unsplash.com"} 
          alt={course.title} 
          fill
          sizes="(max-w-768px) 100vw, 33vw"
          className="object-cover"
        />
        <span className="absolute top-3 left-3 bg-indigo-900 text-white font-bold text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm z-10">
          {course.category}
        </span>
      </div>

      {/* 📝 Course Content Metadata Section */}
      <div className="card-body p-5 flex flex-col justify-between gap-4">
        <div className="space-y-1.5">
          <h3 className="font-black text-gray-900 text-sm tracking-tight leading-snug line-clamp-2 min-h-[40px]">
            {course.title}
          </h3>
          <p className="text-gray-400 text-[11px] font-semibold">
            By <span className="text-gray-600">{course.instructor}</span>
          </p>
        </div>

        <div className="flex items-center justify-between text-[11px] font-bold text-gray-500 pt-2 border-t border-gray-50">
          <span className="flex items-center gap-1">⏱️ {course.duration}</span>
          <span className="flex items-center gap-1 text-amber-500">⭐ {course.rating.toFixed(1)}</span>
        </div>

        <div className="card-actions mt-2">
          <Link 
            href={`/courses/${course.id}`}
            className="btn btn-sm bg-indigo-50/70 hover:bg-indigo-900 text-indigo-900 hover:text-white font-bold h-9 w-full rounded-xl border-none tracking-wide text-xs normal-case transition-all duration-200"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
