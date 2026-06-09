"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import Image from "next/image";
export default function Navbar() {
  const router = useRouter();
  
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      toast.success("Logged out successfully");
      router.push("/");
      router.refresh();
    } catch (err) {
      toast.error("An error occurred during logout");
    }
  };

  return (
    <div className="navbar bg-base-100 shadow-sm border-b border-base-200 sticky top-0 z-50 px-4 md:px-8">
      <div className="navbar-start">
        <Link href="/" className="text-xl font-black text-primary tracking-tight">
          🎓 SkillSphere
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium text-sm">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          {session && <li><Link href="/profile">My Profile</Link></li>}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {isPending ? (
          <span className="loading loading-spinner loading-sm text-primary"></span>
        ) : session ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-primary/20">
              <div className="w-10 rounded-full bg-base-300">
                   <Image 
                    src={session.user.image || "https://unsplash.com"} 
                           alt={session.user.name || "User Avatar"} 
                            width={40} 
                                 height={40}
                               className="rounded-full object-cover"
                                />             
             </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-box w-52 border border-base-200">
              <li className="px-4 py-2 border-b border-base-100 font-bold text-xs text-base-content/60">
                Hello, {session.user.name}
              </li>
              <li><Link href="/profile">View Profile</Link></li>
              <li><Link href="/profile/update">Update Settings</Link></li>
              <li><button onClick={handleLogout} className="text-error font-semibold">Logout</button></li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/login" className="btn btn-ghost btn-sm font-semibold">Log In</Link>
            <Link href="/register" className="btn btn-primary btn-sm px-4">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
}
