"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, BarChart3, Cpu, Sparkles } from "lucide-react";

export default function ProductEcosystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Continuous Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const teamParallaxY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const products = [
    {
      num: "01",
      name: "Raden Nitenin",
      focus: "E-commerce Monitoring",
      question: "“What changed?”",
      status: "AVAILABLE NOW",
      available: true,
      desc: "Enables businesses to instantly detect marketplace shifts: price changes, out-of-stock items, variant revisions, and incoming customer reviews. Instead of checking manually: let Nitenin keep watch.",
      channels: "Starting with Blibli → Expanding to Shopee, Lazada, TikTok Shop",
      icon: ShoppingBag,
    },
    {
      num: "02",
      name: "Raden Analytics",
      focus: "Business Analytics & Insights",
      question: "“What does it mean?”",
      status: "NEXT PHASE",
      available: false,
      desc: "From monitoring to understanding. Processes transactional data, product performance, consumer trends, and operational KPIs into high-impact decision dashboards.",
      channels: "Sales analytics, product performance, business dashboards",
      icon: BarChart3,
    },
    {
      num: "03",
      name: "Raden Automate",
      focus: "Workflow & Business Automation",
      question: "“What can we automate?”",
      status: "NEXT PHASE",
      available: false,
      desc: "Beyond identifying problems: automating the subsequent response. Executes automated reporting, restock alerts, and catalog synchronization without manual dependency.",
      channels: "Data changed → Detects change → Business rule → Automatic action",
      icon: Cpu,
    },
    {
      num: "04",
      name: "Raden AI",
      focus: "AI-Powered Intelligence Layer",
      question: "“What should we do with it?”",
      status: "INTELLIGENCE LAYER",
      available: false,
      desc: "The cognitive intelligence layer across the entire ecosystem: synthesizes business shifts, diagnoses anomalies, answers data queries in natural language, and recommends optimal operational actions.",
      channels: "Raw Data → Nitenin / Analytics → Raden AI → Actionable Insights",
      icon: Sparkles,
    },
  ];

  return (
    <section
      ref={containerRef}
      id="ecosystem"
      className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-100 text-center relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">

        {/* Section Header with Continuous Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto mb-10 sm:mb-16 px-2 sm:px-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold mb-4">
            <span>RADEN.NI Lab Research Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-[1.15] mb-3 sm:mb-4">
            Four Stages of Value Creation.<br />
            <span className="text-stone-500 font-normal text-lg sm:text-2xl lg:text-3xl block mt-1">
              Monitor → Understand → Automate → Intelligence
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-normal leading-relaxed">
            RADEN.NI is an applied technology laboratory engineering software systems to power your business growth from baseline surveillance to intelligent workflow automation.
          </p>
        </motion.div>

        {/* 4 Robot Mascots Lineup with Continuous Parallax Scroll */}
        <motion.div
          style={{ y: teamParallaxY }}
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mx-auto max-w-sm sm:max-w-lg mb-8 sm:mb-12"
        >
          <Image
            src="/robots/team_robots.jpg"
            alt="The 4 Pillars of RADEN.NI"
            width={1376}
            height={768}
            className="w-full h-auto object-contain rounded-xl sm:rounded-2xl shadow-sm"
          />
          <div className="flex items-center justify-between px-2 sm:px-6 pt-2.5 sm:pt-3 text-[9px] sm:text-[11px] font-mono text-stone-500">
            <span>01. Nitenin</span>
            <span>02. Analytics</span>
            <span>03. Automate</span>
            <span>04. Raden AI</span>
          </div>
        </motion.div>

        {/* 4 Cards Grid with Responsive Scroll-In Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
          {products.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.12, ease: "easeOut" }}
                className={`rounded-2xl sm:rounded-3xl p-5 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  p.available
                    ? "bg-white border-black shadow-lg ring-2 ring-black/5 hover:-translate-y-1 hover:shadow-xl"
                    : "bg-stone-50/70 border-stone-200 hover:border-stone-300 hover:-translate-y-1 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center shrink-0 ${p.available ? "bg-black text-white" : "bg-stone-200 text-stone-700"}`}>
                        <Icon size={17} />
                      </div>
                      <div>
                        <span className="text-[10px] sm:text-xs font-mono text-stone-400 font-semibold block leading-none">
                          {p.num} · {p.focus}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight mt-1">
                          {p.name}
                        </h3>
                      </div>
                    </div>

                    {p.available ? (
                      <span className="self-start xs:self-center px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 shrink-0">
                        AVAILABLE NOW
                      </span>
                    ) : (
                      <span className="self-start xs:self-center px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-semibold bg-stone-200 text-stone-600 shrink-0">
                        {p.status}
                      </span>
                    )}
                  </div>

                  <div className="text-[11px] sm:text-xs font-mono font-bold text-stone-900 bg-stone-100 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg mb-3 inline-block">
                    Core Question: {p.question}
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-stone-200/70 text-[10px] sm:text-[11px] font-mono text-stone-500">
                  <span className="text-stone-400 block text-[9px] uppercase tracking-wider">Channel Scope / Logic</span>
                  <span className="font-semibold text-stone-800">{p.channels}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
