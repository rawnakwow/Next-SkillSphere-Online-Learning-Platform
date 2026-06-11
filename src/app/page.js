"use client";
import React from "react";
import Link from "next/link";
import Hero from "@/components/Hero";
import coursesData from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";
import Image from "next/image";
import { motion } from "motion/react"; 


export default function HomePage() {
  const popularCourses = [...coursesData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const learningTips = [
    {
      id: 1,
      icon: "⏱️",
      title: "The Pomodoro Flow",
      desc: "Boost focus by breaking study sessions into 25-minute intervals followed by short breaks."
    },
    {
      id: 2,
      icon: "🧠",
      title: "Mind Mapping",
      desc: "Visualize complex concepts by creating interconnected diagrams for better memory retention."
    },
    {
      id: 3,
      icon: "🔄",
      title: "Spaced Repetition",
      desc: "Review content at increasing intervals to move knowledge from short-term to long-term memory."
    }
  ];

  const instructors = [
    { id: 1, name: "Sarah Chen", role: "DevOps Engineer", img: "https://unsplash.com" },
    { id: 2, name: "David Miller", role: "Senior UX Designer", img: "https://unsplash.com" },
    { id: 3, name: "Elena Rodriguez", role: "Marketing Specialist", img: "https://unsplash.com" },
    { id: 4, name: "Marcus Thorne", role: "Data Scientist", img: "https://unsplash.com" }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      <Hero />

      <section className="bg-gray-50/50 py-16 border-y border-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Popular Courses</h2>
              <p className="text-gray-400 text-xs font-semibold mt-0.5">Handpicked by our expert community for your quick skills growth.</p>
            </div>
            <Link href="/courses" className="text-xs font-bold text-indigo-900 hover:underline">
              View All Courses →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING SECTION */}
      <section className="container mx-auto px-6 md:px-12 py-16">
        <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-8">Trending Now</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 bg-gradient-to-br from-indigo-950 to-purple-900 text-white p-8 rounded-2xl flex flex-col justify-between min-h-[280px] shadow-sm">
            <span className="badge bg-indigo-500 border-none text-white text-[9px] font-bold uppercase px-2.5 py-2">New Release</span>
            <div className="max-w-md my-4">
              <h3 className="text-2xl font-black tracking-tight mb-2">Generative AI for Creatives</h3>
              <p className="text-white/70 text-xs font-medium leading-relaxed">Master prompt chains and algorithmic modeling interfaces to supercharge your vector design workflows effortlessly.</p>
            </div>
            <Link href="/courses" className="btn btn-sm bg-white hover:bg-gray-100 text-indigo-900 font-bold border-none rounded-lg self-start normal-case text-xs px-5">Enroll Now</Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between flex-grow">
              <div>
                <span className="text-[10px] font-bold text-indigo-900 tracking-wider uppercase mb-0.5 block">Finance</span>
                <h4 className="font-bold text-base text-gray-900 mb-0.5">FinTech Fundamentals</h4>
                <p className="text-xs text-gray-400 font-medium line-clamp-2">Explore ledger architectures, banking protocols, and transaction nodes.</p>
              </div>
              <span className="text-[10px] font-bold text-gray-400 mt-4 block">📚 12 Lessons</span>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between flex-grow">
              <div>
                <span className="text-[10px] font-bold text-purple-900 tracking-wider uppercase mb-0.5 block">Psychology</span>
                <h4 className="font-bold text-base text-gray-900 mb-0.5">Behavioral Economics</h4>
                <p className="text-xs text-gray-400 font-medium line-clamp-2">Understand user psychology patterns regarding digital market actions.</p>
              </div>
              <span className="text-[10px] font-bold text-gray-400 mt-4 block">📚 22 Lessons</span>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl font-black text-white tracking-tight mb-1">Master the Art of Learning</h2>
          <p className="text-slate-400 text-xs font-medium mb-12 max-w-sm mx-auto">Science-backed techniques to maximize code comprehension rules.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningTips.map((tip, index) => (
              <motion.div 
                key={tip.id} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-left space-y-3 shadow-inner"
              >
                <span className="text-2xl w-10 h-10 flex items-center justify-center bg-slate-900 rounded-xl">{tip.icon}</span>
                <h3 className="text-base font-bold text-white tracking-wide">{tip.title}</h3>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">{tip.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 py-16 mb-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight">World-Class Mentors</h2>
          <p className="text-gray-400 text-xs font-semibold mt-0.5">Learn straight from engineers working at top global tech enterprise grids.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((ins, index) => (
            <motion.div 
              key={ins.id} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow"
            >
              <div className="avatar mb-3">
                <div className="w-16 h-16 rounded-full ring ring-indigo-900 ring-offset-base-100 ring-offset-2 overflow-hidden relative bg-gray-100">
                  <Image 
                    src={ins.img} 
                    alt={ins.name} 
                    fill
                    sizes="64px"
                    className="object-cover" 
                  />
                </div>
              </div>
              <h3 className="font-bold text-sm text-gray-900 leading-tight">{ins.name}</h3>
              <p className="text-[11px] text-gray-400 font-semibold mt-0.5">{ins.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
