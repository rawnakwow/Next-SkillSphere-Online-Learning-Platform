// src/app/courses/page.jsx
"use client";
import React, { useState } from "react";
import coursesData from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";
import Link from "next/link";

const categories = ["All Topics", "Development", "Design", "Marketing", "Business", "Data Science"];

// 🌟 CRITICAL FIX: Ensure 'export default' is explicitly written here
export default function AllCoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Topics");

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Topics" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-6 md:px-12 py-12 min-h-screen bg-gray-50/50">
      
      {/* Header */}
      <div className="mb-8 text-left">
        <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1">
          <Link href="/" className="hover:text-indigo-900">Home</Link> / <span className="text-indigo-900">All Courses</span>
        </div>
        <h1 className="text-3xl font-black tracking-tight text-gray-900 mb-1">All Courses</h1>
        <p className="text-gray-500 text-xs font-medium max-w-xl">
          Expand your horizons with our curated selection of professional-led tracks designed for the modern era.
        </p>
      </div>

      {/* Search Input and Category Tags */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8">
        
        {/* Challenge 1: Search Box Input */}
        <div className="relative w-full lg:max-w-xs">
          <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400 text-xs">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search courses by title..."
            className="input input-bordered w-full h-9 pl-9 bg-gray-50 border-gray-200 text-xs rounded-lg focus:outline-none focus:border-indigo-900"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 w-full lg:w-auto justify-start lg:justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-[11px] font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-indigo-900 text-white shadow-sm"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Rendering Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-400 font-semibold text-sm bg-white rounded-xl border border-dashed border-gray-200">
            No matching training tracks found.
          </div>
        )}
      </div>

    </div>
  );
}
