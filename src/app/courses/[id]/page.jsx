"use client";
import React, { use, useContext, useEffect } from "react";
import { notFound, useRouter } from "next/navigation";
import Image from "next/image";
import coursesData from "@/data/courses.json";
import { AuthContext } from "@/context/AuthContext"; // Import your authentication context

export default function CourseDetailsPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { id } = params;
  const router = useRouter();
  
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && !user) {
      router.push(`/login?callbackUrl=/courses/${id}`);
    }
  }, [user, loading, id, router]);

  const course = coursesData.find((item) => item.id === parseInt(id));
  if (!course) {
    notFound();
  }

  if (loading) {
    return (
      <div className="flex flex-col gap-3 justify-center items-center min-h-screen bg-gray-50/30">
        <span className="loading loading-spinner loading-md text-indigo-900"></span>
        <p className="text-xs font-bold text-gray-400">Verifying session enrollment...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-6 md:px-12 py-12 min-h-screen bg-gray-50/30">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        <div className="lg:col-span-2 space-y-6">
          <span className="badge bg-indigo-100 border-none text-indigo-900 font-bold text-[10px] uppercase tracking-wider px-2.5 py-2">
            {course.category}
          </span>
          
          <h1 className="text-3xl font-black text-gray-900 tracking-tight leading-tight">
            {course.title}
          </h1>
          
          <p className="text-gray-500 text-sm font-medium leading-relaxed">
            {course.description}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-gray-100 text-xs font-bold text-gray-700">
            <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
              <span className="block text-gray-400 font-semibold text-[10px] uppercase mb-0.5">Instructor</span>
              {course.instructor.split(",")[0]}
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
              <span className="block text-gray-400 font-semibold text-[10px] uppercase mb-0.5">Duration</span>
              🕒 {course.duration}
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
              <span className="block text-gray-400 font-semibold text-[10px] uppercase mb-0.5">Rating</span>
              ⭐ {course.rating.toFixed(1)}
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
              <span className="block text-gray-400 font-semibold text-[10px] uppercase mb-0.5">Course Level</span>
              📊 {course.level}
            </div>
          </div>

          <div className="pt-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Course Curriculum</h3>
            <div className="join join-vertical w-full bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
              
              <div className="collapse collapse-arrow join-item border-b border-gray-100">
                <input type="radio" name="curriculum-accordion" defaultChecked />
                <div className="collapse-title text-sm font-bold text-gray-800">Module 01: Architecture Orientation & Setup</div>
                <div className="collapse-content text-xs text-gray-500 font-medium space-y-1">
                  <p>• Introduction to environment configurations and package layouts</p>
                  <p>• Setting up localized workspace rendering variables</p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item border-b border-gray-100">
                <input type="radio" name="curriculum-accordion" />
                <div className="collapse-title text-sm font-bold text-gray-800">Module 02: Core Practical Application Design</div>
                <div className="collapse-content text-xs text-gray-500 font-medium space-y-1">
                  <p>• Writing structural database nodes and dataset loops</p>
                  <p>• Constructing reusable presentation views and modules</p>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item">
                <input type="radio" name="curriculum-accordion" />
                <div className="collapse-title text-sm font-bold text-gray-800">Module 03: Deployment Production Handshakes</div>
                <div className="collapse-content text-xs text-gray-500 font-medium space-y-1">
                  <p>• Optimizing server caching paths for production</p>
                  <p>• Direct cloud pipeline configurations on live infrastructure</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card bg-white border border-gray-100 shadow-xl rounded-2xl overflow-hidden sticky top-24">
            <div className="relative h-44 w-full bg-gray-100">
              <Image 
                src={course.image} 
                alt={course.title} 
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-black text-gray-900">$89.99</span>
                <span className="text-xs font-semibold text-gray-400 line-through">$149.99</span>
                <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">40% OFF</span>
              </div>
              
              <button className="btn btn-sm bg-indigo-900 hover:bg-indigo-950 text-white font-bold h-11 w-full rounded-xl border-none tracking-wide text-xs normal-case shadow-md mb-3">
                Enroll Now
              </button>
              
              <p className="text-[10px] text-center text-gray-400 font-semibold tracking-wide">
                🔒 30-Day Money-Back Guarantee Included
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
