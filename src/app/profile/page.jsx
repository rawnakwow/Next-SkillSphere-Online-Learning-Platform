"use client";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";

export default function MyProfilePage() {
  const router = useRouter();
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login?callbackUrl=/my-profile");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex flex-col gap-3 justify-center items-center min-h-[70vh]">
        <span className="loading loading-spinner loading-md text-indigo-900"></span>
        <p className="text-xs font-bold text-gray-400">Loading student profile...</p>
      </div>
    );
  }

  if (!user) return null;

  const defaultAvatar = "https://unsplash.com";

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl min-h-[80vh]">
      <div className="card bg-white border border-gray-100 shadow-xl rounded-2xl overflow-hidden">
        
        <div className="h-32 bg-indigo-900 w-full relative">
          <div className="absolute top-4 right-4 bg-indigo-800 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full border border-indigo-700/50">
            Student Account
          </div>
        </div>

        <div className="card-body p-6 sm:p-8 -mt-16 flex flex-col items-center text-center">
          
          <div className="avatar ring-4 ring-white rounded-full overflow-hidden shadow-md bg-gray-100 w-28 h-28 relative z-10 mb-4">
            <Image
              src={user.image || user.photoURL || defaultAvatar}
              alt={user.name || "Student profile picture"}
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>

          <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-1">
            {user.name || "Anonymous Learner"}
          </h2>
          <p className="text-xs text-gray-400 font-semibold mb-6">
            {user.email}
          </p>

          <div className="w-full border-t border-gray-100 my-2 pt-6">
            <div className="grid grid-cols-2 gap-4 text-left">
              <div className="bg-gray-50/50 border border-gray-100 p-4 rounded-xl">
                <span className="block text-[10px] uppercase font-bold text-gray-400 mb-0.5">Enrolled Programs</span>
                <span className="text-sm font-black text-indigo-900">Premium Membership</span>
              </div>
              <div className="bg-gray-50/50 border border-gray-100 p-4 rounded-xl">
                <span className="block text-[10px] uppercase font-bold text-gray-400 mb-0.5">Learning Progress</span>
                <span className="text-sm font-black text-indigo-900">Active</span>
              </div>
            </div>
          </div>

          <div className="card-actions w-full mt-6">
            <Link 
              href="/my-profile/update" 
              className="btn btn-sm bg-indigo-900 hover:bg-indigo-950 text-white font-bold h-11 w-full rounded-xl border-none tracking-wide text-xs normal-case shadow-md flex items-center justify-center gap-2"
            >
              ⚙️ Update Information
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
