import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext"; 
import { ToastProvider } from "@/context/ToastContext"; 



export const metadata = {
  title: "SkillSphere – Online Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="antialiased min-h-screen flex flex-col bg-base-50 text-base-content">
        <AuthProvider>
          <ToastProvider> {/* Embedded safely to capture global messaging routines */}
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

