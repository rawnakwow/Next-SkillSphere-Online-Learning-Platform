import React from 'react';

// components/Navbar.jsx
"use client";
import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function Navbar() {
  const { user, loading, logout, showToast } = useApp();

  const handleLogout = async () => {
    try {
      await logout();
      showToast("Logged out successfully");
    } catch (err) {
      showToast("Logout failed", "error");
    }
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 30px", background: "#1F2937", color: "white" }}>
      <div>
        <Link href="/" style={{ fontSize: "24px", fontWeight: "bold", textDecoration: "none", color: "white" }}>SkillSphere</Link>
      </div>
      <div style={{ display: "flex", gap: "25px", alignItems: "center" }}>
        <Link href="/" style={{ color: "#E5E7EB", textDecoration: "none" }}>Home</Link>
        <Link href="/courses" style={{ color: "#E5E7EB", textDecoration: "none" }}>Courses</Link>
        
        {!loading && (
          <>
            {user ? (
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <img 
                  src={user.photoURL || "https://unsplash.com"} 
                  alt="Profile" 
                  style={{ width: "35px", height: "35px", borderRadius: "50%", objectFit: "cover", border: "2px solid #3B82F6" }} 
                />
                <button onClick={handleLogout} style={{ background: "#EF4444", color: "white", border: "none", padding: "8px 14px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}>
                  Logout
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "12px" }}>
                <Link href="/login" style={{ background: "#3B82F6", color: "white", padding: "8px 16px", borderRadius: "4px", textDecoration: "none", fontWeight: "bold" }}>Login</Link>
                <Link href="/register" style={{ border: "1px solid #9CA3AF", color: "#E5E7EB", padding: "8px 16px", borderRadius: "4px", textDecoration: "none" }}>Register</Link>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
}
