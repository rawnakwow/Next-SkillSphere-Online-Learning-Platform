// src/components/Footer.jsx
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content pt-16 pb-8 border-t border-neutral-focus mt-auto">
      <div className="container mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <Link href="/" className="text-2xl font-black text-white tracking-tight flex items-center gap-1">
            🎓 SkillSphere
          </Link>
          <p className="text-sm text-neutral-content/70 leading-relaxed max-w-xs">
            Empowering professionals through high-end digital education and curated learning tracks designed for the modern era.
          </p>
        </div>

        {/* Navigation Links Column */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Navigation</h4>
          <ul className="space-y-2.5 text-sm font-medium text-neutral-content/70">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/courses" className="hover:text-white transition-colors">All Courses</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
          </ul>
        </div>

        {/* Support Links Column */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Support</h4>
          <ul className="space-y-2.5 text-sm font-medium text-neutral-content/70">
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
            <li><Link href="/help-center" className="hover:text-white transition-colors">Help Center</Link></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Newsletter</h4>
          <p className="text-xs text-neutral-content/70">
            Get the latest course updates, tech insights, and career tips sent directly to your inbox.
          </p>
          <div className="form-control w-full">
            <div className="join w-full">
              <input 
                type="email" 
                placeholder="Email address" 
                className="input input-bordered input-sm join-item bg-neutral-focus text-white border-neutral-content/20 focus:outline-none w-full max-w-[180px]" 
              />
              <button className="btn btn-primary btn-sm join-item font-bold">Join</button>
            </div>
          </div>
        </div>

      </div>

      {/* Baseline Copyright Strip */}
      <div className="container mx-auto px-6 md:px-8 border-t border-neutral-content/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-content/50">
        <p>© 2026 SkillSphere. All rights reserved.</p>
        
        {/* Social Media Link Icons */}
        <div className="flex gap-4 text-lg">
          <a href="#" className="hover:text-white transition-colors">🌐</a>
          <a href="#" className="hover:text-white transition-colors">🐦</a>
          <a href="#" className="hover:text-white transition-colors">💼</a>
        </div>
      </div>
    </footer>
  );
}
