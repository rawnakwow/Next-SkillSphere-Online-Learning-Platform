"use client";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout, isPending } = useContext(AuthContext);

  return (
    <div className="navbar bg-white border-b border-gray-100 sticky top-0 z-50 px-6 md:px-12 h-16 shadow-sm">
      
      {/* Brand Logo & Navigation Links */}
      <div className="navbar-start">
        <Link href="/" className="text-xl font-black text-indigo-900 tracking-tight">
          SkillSphere
        </Link>
        
        {/* Navigation Track Links (Visible on desktop) */}
        <div className="hidden md:flex ml-8 gap-6 text-sm font-semibold text-gray-600">
          <Link href="/" className="hover:text-indigo-900 transition-colors">Home</Link>
          <Link href="/courses" className="hover:text-indigo-900 transition-colors">Courses</Link>
          {user && (
            <Link href="/profile" className="hover:text-indigo-900 transition-colors">
              My Profile
            </Link>
          )}
        </div>
      </div>

      {/*  Middle Section: Search Bar Input */}
      <div className="navbar-center hidden lg:flex w-full max-w-xs relative">
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400 text-xs">
          🔍
        </span>
        <input 
          type="text" 
          placeholder="Search courses..." 
          className="input input-bordered w-full h-9 pl-9 bg-gray-50 border-gray-200 focus:outline-none focus:border-indigo-900 text-xs rounded-lg"
        />
      </div>

      {/* Right Section: Conditional Action State Buttons */}
      <div className="navbar-end gap-3">
        {isPending ? (
          <span className="loading loading-spinner loading-xs text-indigo-900"></span>
        ) : user ? (
          
          /* IF LOGGED IN: Show user avatar & dropdown menu containing Logout */
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-indigo-900/20">
              <div className="w-9 h-9 rounded-full bg-gray-200 relative overflow-hidden">
                <Image 
                  src={user.image || "https://unsplash.com"} 
                  alt={user.name || "User Avatar"} 
                  fill
                  sizes="36px"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow-2xl bg-white rounded-xl w-52 border border-gray-100 z-50">
              <li className="px-4 py-2 border-b border-gray-100 font-bold text-xs text-gray-400 select-none">
                Hi, {user.name}
              </li>
              <li className="md:hidden"><Link href="/">Home</Link></li>
              <li className="md:hidden"><Link href="/courses">Courses</Link></li>
              <li><Link href="/profile">My Profile</Link></li>
              <li><Link href="/profile/update">Edit Profile Info</Link></li>
              <li>
                {/* Logout button */}
                <button onClick={logout} className="text-red-600 font-bold hover:bg-red-50">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          
          /*  IF LOGGED OUT: Show Login / Register action buttons */
          <div className="flex items-center gap-2">
            <Link href="/login" className="text-xs font-bold text-gray-700 hover:text-indigo-900 px-3 py-2 transition-colors">
              Login
            </Link>
            <Link href="/register" className="btn btn-sm bg-indigo-900 hover:bg-indigo-950 text-white font-bold px-4 tracking-wide rounded-lg border-none normal-case text-xs shadow-sm">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
