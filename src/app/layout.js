import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// src/app/layout.js
import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


function MockProvider({ children }) {
  return <>{children}</>;
}

export const metadata = {
  title: "SkillSphere – Online Learning Platform",
  description: "Explore courses, watch lessons, and enroll in skill-based programs seamlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="antialiased min-h-screen flex flex-col bg-base-50 text-base-content">
       
        <MockProvider>
         
          <Navbar />
          
        
          <main className="flex-grow">
            {children}
          </main>
          
         
          <Footer />
        </MockProvider>
      </body>
    </html>
  );
}

