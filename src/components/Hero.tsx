"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Activity, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Dynamic Scroll-driven 3D perspective animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.45], [16, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.45], [0.92, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.45], [50, 0]);
  const ornamentScale = useTransform(scrollYProgress, [0, 0.45], [1, 0.85]);
  const ornamentRotate = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0.6]);

  const chips = [
    "What changed in the store today?",
    "Detect abnormal price fluctuations",
    "Critical stock alert (<5 units)",
    "Blibli storefront synchronization",
  ];

  return (
    <section
      ref={containerRef}
      className="pt-24 sm:pt-32 pb-16 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-white text-center relative overflow-hidden"
    >
      {/* Background Subtle Ambient Glow */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none opacity-40 blur-3xl -z-10"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(236, 72, 153, 0.06) 40%, rgba(6, 182, 212, 0.04) 70%, transparent 80%)"
        }}
      />

      <div className="max-w-5xl mx-auto">

        {/* Lab Authorship Bar - Responsive with clean underline */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 pb-2 mb-6 sm:mb-8 border-b border-stone-200 text-[10px] sm:text-xs font-mono text-stone-600 tracking-tight max-w-full text-center"
        >
          <span className="font-bold text-black tracking-wider uppercase">RADEN.NI TECHNOLOGY LABORATORY</span>
          <span className="text-stone-300 font-light hidden sm:inline">|</span>
          <span className="text-stone-700">Managed by Nico Revaldo Putra E.A, S.Kom</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: "easeOut" }}
          className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold text-black tracking-tight leading-[1.1] mb-4 sm:mb-6"
        >
          Practical technology<br />
          for modern businesses.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-sm sm:text-lg md:text-xl text-stone-600 max-w-2xl mx-auto font-normal leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0"
        >
          <strong className="text-black font-semibold">RADEN.NI</strong> is a personal applied technology laboratory exploring practical applications of data, automation, digital commerce, and AI through experiments, prototypes, and software products such as <strong className="text-black font-semibold">Raden Nitenin</strong>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-14 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="#nitenin"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black text-white text-xs font-semibold shadow-md hover:bg-stone-800 transition-all"
          >
            <span>Explore Raden Nitenin</span>
            <ArrowRight size={14} className="text-stone-400" />
          </a>
          <a
            href="#ecosystem"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-stone-100 text-stone-800 text-xs font-semibold hover:bg-stone-200 transition-all border border-stone-200"
          >
            <span>Ecosystem Roadmap</span>
          </a>
        </motion.div>

        {/* 3D Glass Data Processing Ornament with Scroll Parallax */}
        <div className="relative mx-auto flex flex-col items-center justify-center -mb-6 sm:-mb-8 z-20">

          {/* Radiating telemetry tags */}
          <div className="hidden sm:flex items-center justify-between w-full max-w-md absolute -top-4 z-30 pointer-events-none text-[10px] font-mono font-semibold">
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/80 text-stone-700 shadow-xs flex items-center gap-1.5">
              LAB TELEMETRY: 128 BLIBLI SKUs
            </span>
            <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/80 text-stone-700 shadow-xs flex items-center gap-1.5">
              REAL-TIME SYNCHRONIZATION
            </span>
          </div>

          {/* 3D Iridescent Loop Ornament with smooth scroll rotation */}
          <motion.div
            style={{ scale: ornamentScale, rotate: ornamentRotate }}
            className="w-36 sm:w-56 h-36 sm:h-56 relative flex items-center justify-center"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/ornament.png"
              className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(168,85,247,0.25)]"
            >
              <source src="/ornament.webm" type="video/webm" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/ornament.png" alt="RADEN.NI 3D Data Processing Core" className="w-full h-full object-contain" />
            </video>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-gradient-to-tr from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-xl" />
            </div>
          </motion.div>

          {/* Processing Status Chip */}
          <div className="px-3 py-1 rounded-full bg-black text-white text-[9px] sm:text-[10px] font-mono font-bold tracking-wider -mt-3 sm:-mt-4 shadow-md flex items-center gap-1.5 z-30">
            <Activity size={12} className="text-cyan-400 animate-pulse shrink-0" />
            <span className="truncate max-w-[240px] sm:max-w-none">NITENIN CORE ENGINE · PROCESSING DATA</span>
          </div>
        </div>

        {/* App Mockup Frame with 3D Perspective Scroll Effect */}
        <motion.div
          id="nitenin-app"
          style={{
            rotateX,
            scale,
            translateY,
            opacity,
            transformPerspective: 1200,
          }}
          className="relative z-10 mx-auto rounded-2xl sm:rounded-3xl p-[1.5px] sm:p-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-rose-500 shadow-2xl transition-shadow duration-300"
        >
          <div className="bg-[#FAF9F7] rounded-[18px] sm:rounded-[22px] overflow-hidden border border-stone-200/50 text-left">

            {/* Top Prompt Chips Bar */}
            <div className="bg-white/90 backdrop-blur-sm px-3 sm:px-6 py-2.5 sm:py-3.5 border-b border-stone-200 flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar">
              {chips.map((chip) => (
                <button
                  key={chip}
                  className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors whitespace-nowrap shrink-0"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                  <span>{chip}</span>
                </button>
              ))}
            </div>

            {/* Application Window Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[360px] sm:min-h-[400px] bg-white">

              {/* Left Channels Sidebar (Desktop) */}
              <div className="hidden md:block md:col-span-4 bg-[#F7F6F3] p-4 border-r border-stone-200 text-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-stone-200 font-semibold text-black">
                  <span>Official Storefront</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-[#0095DA] font-bold">BLIBLI</span>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-2">
                    OBSERVATION CHANNELS
                  </span>
                  <div className="space-y-1">
                    <div className="px-2.5 py-1.5 rounded-lg bg-stone-200/70 font-semibold text-black flex items-center justify-between">
                      <span># catalog-monitoring</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                    <div className="px-2.5 py-1.5 rounded-lg text-stone-600 hover:bg-stone-200/40 transition-colors">
                      # price-discount-shifts
                    </div>
                    <div className="px-2.5 py-1.5 rounded-lg text-stone-600 hover:bg-stone-200/40 transition-colors">
                      # critical-stock-alerts
                    </div>
                    <div className="px-2.5 py-1.5 rounded-lg text-stone-600 hover:bg-stone-200/40 transition-colors">
                      # reviews-and-ratings
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-200">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider block mb-2">
                    LAB DAEMON STATUS
                  </span>
                  <div className="p-2.5 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-1 text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Monitored Items</span>
                      <span className="font-bold text-black font-mono">128 SKUs</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-stone-500">Ingestion Pipeline</span>
                      <span className="font-bold text-cyan-600 font-mono">Nitenin Core v2.4</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="col-span-12 md:col-span-8 p-3.5 sm:p-6 flex flex-col justify-between space-y-4 sm:space-y-5">

                <div className="flex flex-col xs:flex-row xs:items-center justify-between pb-3 border-b border-stone-100 text-xs gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-black text-xs sm:text-sm">Raden Nitenin Cockpit</span>
                    <span className="px-1.5 sm:px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-bold bg-emerald-100 text-emerald-800 shrink-0">
                      LIVE · 128 SKUs
                    </span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-[11px] text-stone-400">Last Synced: 2m ago</span>
                </div>

                {/* Event Cards */}
                <div className="space-y-2.5 sm:space-y-3">

                  {/* Event 1: Price Change */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-orange-50/70 border border-orange-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center font-bold shrink-0 mt-0.5 sm:mt-0">
                        <TrendingUp size={14} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-black text-xs sm:text-sm">Price Fluctuation Detected (+8.7%)</div>
                        <div className="text-[10px] sm:text-[11px] text-stone-500">Exclusive Silk Batik · Rp 1,150,000 → Rp 1,250,000</div>
                      </div>
                    </div>
                    <span className="self-start sm:self-center shrink-0 px-2 py-0.5 rounded bg-white text-orange-800 font-semibold text-[9px] sm:text-[10px] border border-orange-200">
                      Safe Margin
                    </span>
                  </div>

                  {/* Event 2: Stock Depletion */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-red-50/70 border border-red-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-red-100 text-red-700 flex items-center justify-center font-bold shrink-0 mt-0.5 sm:mt-0">
                        <AlertCircle size={14} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-[#BA1A1A] text-xs sm:text-sm">Stock Depleted Near Critical Threshold</div>
                        <div className="text-[10px] sm:text-[11px] text-stone-500">Classic Men&apos;s Oxford Shoes · 2 units remaining on shelf</div>
                      </div>
                    </div>
                    <span className="self-start sm:self-center shrink-0 px-2 py-0.5 rounded bg-white text-red-700 font-semibold text-[9px] sm:text-[10px] border border-red-200">
                      Restock Alert
                    </span>
                  </div>

                  {/* Event 3: Content Change */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-stone-200 text-stone-700 flex items-center justify-center font-bold shrink-0 mt-0.5 sm:mt-0">
                        <CheckCircle2 size={14} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-black text-xs sm:text-sm">Product Attributes &amp; Description Updated</div>
                        <div className="text-[10px] sm:text-[11px] text-stone-500">Modern Fit Woven Blazer · 18 units available</div>
                      </div>
                    </div>
                    <span className="self-start sm:self-center shrink-0 px-2 py-0.5 rounded bg-white text-stone-600 font-semibold text-[9px] sm:text-[10px] border border-stone-200">
                      Verified
                    </span>
                  </div>

                </div>

                {/* Bottom Footer Status */}
                <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[9px] sm:text-[11px] text-stone-500 font-mono">
                  <span>AUTOMATED SURVEILLANCE: ACTIVE</span>
                  <span className="text-black font-semibold">OBSERVE · DETECT · ACTION</span>
                </div>

              </div>

            </div>

          </div>
        </motion.div>

        {/* 3 Columns Below Hero with Continuous Scroll InView Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 mt-14 sm:mt-24 text-left">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-2 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-stone-50/70 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-stone-400">01 / MONITORING</span>
              <span className="px-2 py-0.5 rounded text-[8px] sm:text-[9px] font-bold bg-emerald-100 text-emerald-800">AVAILABLE NOW</span>
            </div>
            <h3 className="text-base font-bold text-black tracking-tight">
              Raden Nitenin &mdash; &ldquo;What changed?&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Continuously monitors your marketplace storefronts: price shifts, out-of-stock items, new variants, incoming reviews, and catalog revisions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="space-y-2 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-stone-50/70 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-stone-400">02 / ANALYTICS</span>
              <span className="text-[8px] sm:text-[9px] font-mono text-stone-400">NEXT PHASE</span>
            </div>
            <h3 className="text-base font-bold text-black tracking-tight">
              Raden Analytics &mdash; &ldquo;What does it mean?&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Transforms raw surveillance data into actionable insights: sales trends, consumer demand velocity, product unit margins, and executive KPIs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="space-y-2 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-stone-50/70 border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] sm:text-xs font-mono font-bold text-stone-400">03 / AUTOMATION</span>
              <span className="text-[8px] sm:text-[9px] font-mono text-stone-400">NEXT PHASE</span>
            </div>
            <h3 className="text-base font-bold text-black tracking-tight">
              Raden Automate &mdash; &ldquo;What can we automate?&rdquo;
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              Beyond notifying anomalies: automating subsequent business actions through instant alerts, multi-channel syncing, and workflow automation.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
