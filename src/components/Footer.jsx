import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b132b] text-gray-400 pt-16 pb-8 border-t border-gray-900 mt-auto">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Brand Mission */}
        <div className="space-y-4">
          <Link href="/" className="text-xl font-black text-white tracking-tight flex items-center">
            SkillSphere
          </Link>
          <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
            Empowering lifelong learners through high-end digital education and curated tech tracks designed for the modern era.
          </p>
        </div>

        {/* Links Left Category Grid */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Links</h4>
          <ul className="space-y-2 text-xs font-semibold">
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
          </ul>
        </div>

        {/* Support Options Category Grid */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Support</h4>
          <ul className="space-y-2 text-xs font-semibold">
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
          </ul>
        </div>

        {/* Newsletter Inline Join Elements */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-2">Newsletter</h4>
          <p className="text-[11px] text-gray-400">
            Get the latest updates and tracking career tips.
          </p>
          <div className="form-control w-full">
            <div className="join w-full border border-gray-800 rounded-lg overflow-hidden">
              <input 
                type="email" 
                placeholder="Email address" 
                className="input input-sm join-item bg-[#1c2541] text-white focus:outline-none text-xs w-full px-3 border-none h-9" 
              />
              <button className="btn btn-sm bg-indigo-900 hover:bg-indigo-950 text-white font-bold border-none rounded-none tracking-wide px-4 h-9 text-xs">
                Join
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Separation Line & Inline Copyright Strips */}
      <div className="container mx-auto px-6 md:px-12 border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-500 font-medium">
        <p>© 2026 SkillSphere. All rights reserved.</p>
        
        {/* Universal Icon Anchors */}
        <div className="flex gap-4 text-base">
          <a href="#" className="hover:text-white transition-colors">🌐</a>
          <a href="#" className="hover:text-white transition-colors">🐦</a>
          <a href="#" className="hover:text-white transition-colors">💼</a>
        </div>
      </div>
    </footer>
  );
}
