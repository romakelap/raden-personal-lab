"use client";

import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle2 } from "lucide-react";

export default function Vision() {
  return (
    <section id="security" className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-black text-white text-center relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-20 blur-3xl -z-10"
        style={{
          background: "radial-gradient(circle, #06B6D4 0%, #3B82F6 40%, transparent 70%)"
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Dark Section Headline with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-2 sm:px-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-stone-400 text-xs font-mono mb-4">
            <span>LAB PROTOCOL · SECURE ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-4 sm:mb-6">
            Built on RADEN.NI.<br />
            Secure by default.
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-stone-400 font-normal leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-12">
            RADEN.NI operates on sovereign, high-reliability engineering infrastructure. Your catalog telemetry, pricing strategies, and inventory intelligence are protected with end-to-end encryption without third-party exposure.
          </p>
        </motion.div>

        {/* Animated Robot Video Container (Compressed and Web-Optimized) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[420px] aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_80px_rgba(6,182,212,0.2)] mb-8 sm:mb-14 bg-stone-950"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/robot_security.mp4" type="video/mp4" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/robots/wireframe_robot.jpg"
              alt="Raden Security Architecture"
              className="w-full h-full object-cover"
            />
          </video>

          {/* Cyan Glow Overlay */}
          <div className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl border border-cyan-400/20 ring-1 ring-inset ring-white/10" />

          {/* Live Status Badge */}
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-xl bg-black/80 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-cyan-300">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
              <span className="truncate">LIVE TELEMETRY STREAM</span>
            </span>
            <span className="text-white font-bold shrink-0">RADEN LAB</span>
          </div>
        </motion.div>

        {/* Security Specs Row with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-left max-w-2xl mx-auto pt-5 sm:pt-6 border-t border-stone-800 text-xs text-stone-400"
        >
          <div>
            <div className="flex items-center gap-1.5 text-white font-semibold mb-1">
              <Lock size={13} className="text-cyan-400 shrink-0" />
              <span>Layered Encryption</span>
            </div>
            <p className="text-stone-500 leading-relaxed text-[11px]">
              Every API invocation and catalog synchronization is protected by banking-grade TLS 1.3 protocols.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-white font-semibold mb-1">
              <Shield size={13} className="text-cyan-400 shrink-0" />
              <span>Data Sovereignty</span>
            </div>
            <p className="text-stone-500 leading-relaxed text-[11px]">
              Engineered to strictly protect proprietary business data and commercial trade secret confidentiality.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-white font-semibold mb-1">
              <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
              <span>Isolated Tenancy</span>
            </div>
            <p className="text-stone-500 leading-relaxed text-[11px]">
              Your store telemetry is isolated in partitioned environments and never used to train public models.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
