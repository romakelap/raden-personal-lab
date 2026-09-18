"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import RadenLogo from "./RadenLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on hash click or resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "#ecosystem", label: "Ecosystem" },
    { href: "#nitenin", label: "Nitenin", badge: "Live" },
    { href: "#analytics", label: "Analytics" },
    { href: "#automate", label: "Automate" },
    { href: "#ai", label: "Raden AI" },
    { href: "#security", label: "Infrastructure" },
    { href: "#lab-authorship", label: "Lab Leadership" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-2xs py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Left: RADEN.NI Laboratory */}
          <a href="#" className="flex items-center gap-2 group">
            <RadenLogo className="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:scale-105" />
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-bold text-black text-sm sm:text-base tracking-tight">
                RADEN.NI
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-semibold px-1.5 sm:px-2 py-0.5 rounded bg-stone-100 text-stone-700 border border-stone-200/90 tracking-wide">
                TECH LAB
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-xs font-medium text-stone-600">
            <a href="#ecosystem" className="hover:text-black transition-colors font-semibold text-black">Ecosystem</a>
            <a href="#nitenin" className="hover:text-black transition-colors flex items-center gap-1.5">
              <span>Nitenin</span>
              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-emerald-100 text-emerald-800">Live</span>
            </a>
            <a href="#analytics" className="hover:text-black transition-colors text-stone-500">Analytics</a>
            <a href="#automate" className="hover:text-black transition-colors text-stone-500">Automate</a>
            <a href="#ai" className="hover:text-black transition-colors text-stone-500">Raden AI</a>
            <a href="#security" className="hover:text-black transition-colors">Infrastructure</a>
            <a href="#lab-authorship" className="hover:text-black transition-colors text-stone-700 font-mono text-[11px]">Lab Leadership</a>
          </nav>

          {/* Right Action: Desktop CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#nitenin"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black text-white text-[11px] sm:text-xs font-semibold shadow-sm hover:bg-stone-800 transition-all duration-200"
            >
              <span>Explore Nitenin</span>
              <ArrowUpRight size={13} className="text-stone-400 shrink-0" />
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-stone-700 hover:text-black hover:bg-stone-100 transition-colors focus:outline-hidden"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-t border-stone-200/80 bg-white/98 backdrop-blur-lg px-4 py-5 shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col space-y-1.5 text-sm font-medium text-stone-700">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-xl hover:bg-stone-100 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-black">{link.label}</span>
                  {link.badge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            <div className="pt-4 mt-3 border-t border-stone-100 text-[11px] text-stone-500 font-mono flex items-center justify-between px-3">
              <span>RADEN.NI LAB</span>
              <span className="text-black font-semibold">SOVEREIGN ARCHITECTURE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
