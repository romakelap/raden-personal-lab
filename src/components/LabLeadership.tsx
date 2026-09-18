"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Cpu } from "lucide-react";
import RadenLogo from "./RadenLogo";

export default function LabLeadership() {
  return (
    <section id="lab-authorship" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-stone-50/80 border-t border-stone-200/80">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-2xl sm:rounded-3xl bg-white border border-stone-200/90 p-5 sm:p-8 md:p-10 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 text-left"
        >
          {/* Left: Leadership Identity */}
          <div className="space-y-3 max-w-2xl w-full">
            <div className="flex items-center gap-2">
              <span className="text-[9px] sm:text-[10px] font-mono font-bold text-stone-500 uppercase tracking-widest">
                LABORATORY LEADERSHIP &amp; AUTHORSHIP
              </span>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black tracking-tight flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <span className="text-stone-700">Lab Author &amp; CO Manager :</span>
                <span className="text-stone-900 underline decoration-stone-300 underline-offset-4">
                  Nico Revaldo Putra E.A, S.Kom
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed font-normal">
                Directing system architecture design and software engineering at <strong>RADEN.NI Technology Laboratory</strong>. Spearheading applied research across four sovereign digital pillars: e-commerce intelligence (Nitenin), business data analytics, workflow automation, and applied artificial intelligence.
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1">
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold bg-stone-100 text-stone-700 border border-stone-200 flex items-center gap-1.5">
                <Terminal size={11} className="text-black shrink-0" />
                Principal Systems Architect
              </span>
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold bg-stone-100 text-stone-700 border border-stone-200 flex items-center gap-1.5">
                <Cpu size={11} className="text-black shrink-0" />
                Applied AI &amp; E-Commerce R&amp;D
              </span>
              <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold bg-stone-100 text-stone-700 border border-stone-200 flex items-center gap-1.5">
                <ShieldCheck size={11} className="text-emerald-700 shrink-0" />
                Sovereign Digital Lab
              </span>
            </div>
          </div>

          {/* Right: Lab Monogram Crest */}
          <div className="w-full md:w-auto flex flex-col items-center justify-center self-center md:self-auto shrink-0 p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-stone-50 border border-stone-200 text-center">
            <RadenLogo className="w-10 h-10 sm:w-12 sm:h-12 mb-2" />
            <span className="text-[10px] font-mono font-bold text-black block">RADEN.NI</span>
            <span className="text-[9px] font-mono text-stone-400">LAB SYSTEM ID</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
