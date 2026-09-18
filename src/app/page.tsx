"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductEcosystem from "@/components/ProductEcosystem";
import PlatformSection from "@/components/PlatformSection";
import Features from "@/components/Features";
import Vision from "@/components/Vision";
import FinalCTA from "@/components/FinalCTA";
import LabLeadership from "@/components/LabLeadership";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main className="overflow-x-hidden bg-white text-black min-h-screen selection:bg-stone-200 relative">
      {/* Top Hairline Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-purple-500 to-rose-500 origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      <Navbar />
      <Hero />
      <ProductEcosystem />
      <PlatformSection />
      <Features />
      <Vision />
      <FinalCTA />
      <LabLeadership />
      <Footer />
    </main>
  );
}
