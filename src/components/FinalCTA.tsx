"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, BarChart3, Cpu } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white text-center border-t border-stone-100 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        {/* Headline with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto mb-10 sm:mb-14 px-2 sm:px-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold mb-4">
            <span>Lab Research Implementation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-[1.15] mb-3 sm:mb-4">
            Start focused.<br />
            Scale across the ecosystem.
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
            You can start this week by monitoring your Blibli storefront with <strong className="text-black">Raden Nitenin</strong>, while our laboratory technology foundation stands ready to expand into deep business analytics and workflow automation.
          </p>
        </motion.div>

        {/* 3 Step Progression Cards with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 text-left">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="space-y-2.5 sm:space-y-3 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-stone-50 border border-stone-200 hover:border-stone-300 transition-all hover:-translate-y-1"
          >
            <span className="text-[10px] sm:text-xs font-mono font-bold text-stone-400 block">STEP 01</span>
            <div className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center">
              <ShoppingBag size={16} />
            </div>
            <h3 className="text-base font-bold text-black tracking-tight">
              Activate Raden Nitenin
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              Connect your marketplace storefront. Let the system monitor price fluctuations, inventory depletion, and review changes instantly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="space-y-2.5 sm:space-y-3 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-stone-50 border border-stone-200 hover:border-stone-300 transition-all hover:-translate-y-1"
          >
            <span className="text-[10px] sm:text-xs font-mono font-bold text-stone-400 block">STEP 02</span>
            <div className="w-8 h-8 rounded-xl bg-stone-200 text-stone-700 flex items-center justify-center">
              <BarChart3 size={16} />
            </div>
            <h3 className="text-base font-bold text-black tracking-tight">
              Understand Business Data
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              Unlock sales velocity insights with Raden Analytics to pinpoint true unit product margins and consumer demand trajectories.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="space-y-2.5 sm:space-y-3 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-stone-50 border border-stone-200 hover:border-stone-300 transition-all hover:-translate-y-1"
          >
            <span className="text-[10px] sm:text-xs font-mono font-bold text-stone-400 block">STEP 03</span>
            <div className="w-8 h-8 rounded-xl bg-stone-200 text-stone-700 flex items-center justify-center">
              <Cpu size={16} />
            </div>
            <h3 className="text-base font-bold text-black tracking-tight">
              Automation &amp; Applied AI
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-normal">
              Allow Raden Automate and Raden AI to manage recurring reports, multi-store data sync, and strategic operational guidance.
            </p>
          </motion.div>

        </div>

        {/* Primary CTA Button with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-2.5 sm:gap-3 w-full px-4 sm:px-0"
        >
          <a
            href="#nitenin"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-black text-white text-xs sm:text-sm font-semibold shadow-lg hover:bg-stone-800 transition-all duration-200"
          >
            <span>Start with Raden Nitenin Today</span>
            <ArrowRight size={15} className="text-stone-400 shrink-0" />
          </a>
          <span className="text-[10px] sm:text-xs text-stone-500 font-mono text-center">
            Unified E-Commerce Intelligence Platform · RADEN.NI Technology Lab
          </span>
        </motion.div>

      </div>
    </section>
  );
}
