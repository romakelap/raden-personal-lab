"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, ShoppingBag } from "lucide-react";

export default function PlatformSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const laptopParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const laptopScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  const channels = [
    { name: "Blibli", status: "AVAILABLE NOW", live: true, color: "#0095DA", bg: "bg-blue-50 text-blue-700 border-blue-200" },
    { name: "Shopee", status: "UPCOMING EXPANSION", live: false, color: "#EE4D2D", bg: "bg-stone-50 text-stone-600 border-stone-200" },
    { name: "Lazada", status: "UPCOMING EXPANSION", live: false, color: "#0F146D", bg: "bg-stone-50 text-stone-600 border-stone-200" },
    { name: "TikTok Shop", status: "UPCOMING EXPANSION", live: false, color: "#000000", bg: "bg-stone-50 text-stone-600 border-stone-200" },
    { name: "Tokopedia", status: "UPCOMING EXPANSION", live: false, color: "#42B549", bg: "bg-stone-50 text-stone-600 border-stone-200" },
  ];

  const monitoredItems = [
    "Unscheduled price shifts & discount anomalies",
    "Out-of-stock items & low inventory warnings",
    "Catalog modifications, title revisions & attribute changes",
    "Incoming customer reviews & rating score fluctuations",
  ];

  return (
    <section 
      ref={containerRef}
      id="nitenin" 
      className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-100 overflow-hidden relative"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Copy with Continuous Scroll InView Animation */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-left space-y-4 sm:space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-700">
              <ShoppingBag size={13} />
              <span>Flagship Lab Product: Raden Nitenin</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-[1.15]">
              Instead of checking manually:<br />
              Let Nitenin keep watch.
            </h2>

            <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
              Business owners and operations teams waste valuable hours every day manually verifying whether prices are accurate, stocks remain sufficient, or customer feedback requires response. Raden Nitenin observes every critical change automatically.
            </p>

            <div className="space-y-2 sm:space-y-2.5 pt-2">
              {monitoredItems.map((item, i) => (
                <motion.div 
                  key={item} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start sm:items-center gap-2.5 text-xs sm:text-sm text-stone-800 font-medium"
                >
                  <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-xs text-stone-500 italic pt-1 sm:pt-2">
              Official positioning: E-commerce intelligence & monitoring platform — initiated with Blibli and architected to scale across regional omnichannel marketplaces.
            </p>
          </motion.div>

          {/* Right: 3D Robot Mascot with Scroll Parallax & Stagger */}
          <motion.div 
            style={{ y: laptopParallax, scale: laptopScale }}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex flex-col items-center justify-center pt-4 md:pt-0"
          >
            
            {/* Arch of Marketplace badges */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-sm mb-3 sm:mb-4">
              {channels.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold border shadow-2xs flex items-center gap-1.5 ${c.bg}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c.color }} />
                  <span>{c.name}</span>
                  {c.live && (
                    <span className="px-1.5 py-0.2 rounded text-[8px] bg-[#0095DA] text-white font-bold">
                      LIVE
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* 3D Animated Asset - Seamless, No Border, No Shadow */}
            <div className="relative w-full max-w-[260px] xs:max-w-[320px] sm:max-w-sm aspect-square flex items-center justify-center transition-transform duration-300 hover:scale-[1.02]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain mix-blend-multiply"
              >
                <source src="/robots/laptop_robot.webm" type="video/webm" />
              </video>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
