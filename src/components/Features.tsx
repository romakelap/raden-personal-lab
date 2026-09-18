"use client";

import { motion } from "framer-motion";
import { BarChart3, Cpu, Sparkles, CheckCircle2 } from "lucide-react";

export default function Features() {
  return (
    <div className="bg-white overflow-hidden">
      
      {/* SECTION 1: Raden Analytics */}
      <section id="analytics" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left: Realistic Analytics Card Stack with Continuous Scroll Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-stone-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-stone-200 text-left space-y-4 sm:space-y-6 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 text-xs">
                <span className="font-bold text-black flex items-center gap-1.5">
                  <BarChart3 size={15} className="text-black" />
                  Raden Analytics Engine
                </span>
                <span className="px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono font-semibold bg-stone-200 text-stone-700">
                  UNDERSTANDING LAYER
                </span>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-stone-200 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-stone-500 font-medium">Top Product Performance</span>
                    <span className="font-bold text-emerald-600 font-mono">+18.4% MoM</span>
                  </div>
                  <div className="h-2 rounded-full bg-stone-100 overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "74%" }} />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono pt-1">
                    <span>128 SKUs Analyzed</span>
                    <span>Average Margin: 24.2%</span>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-stone-200 space-y-1.5">
                  <span className="text-stone-500 font-medium text-xs block">Key Question Answered:</span>
                  <p className="text-xs text-black font-semibold">
                    &ldquo;Which products experienced margin erosion due to price shifts this month?&rdquo;
                  </p>
                  <p className="text-[11px] text-stone-500">
                    System identified 3 SKUs with compressed margins caused by unexpected promotional expenses.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-[10px] sm:text-[11px] font-mono text-stone-400 flex items-center justify-between">
                <span>ECOSYSTEM STAGE: 02</span>
                <span className="text-black font-bold">SALES &amp; MARGIN KPI</span>
              </div>
            </motion.div>

            {/* Right: Copy for Raden Analytics with Continuous Scroll Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-left space-y-3 sm:space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold">
                <BarChart3 size={13} />
                <span>Stage 2: Raden Analytics</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-[1.15]">
                From monitoring,<br />
                to deep understanding.
              </h2>

              <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
                If Raden Nitenin answers <em>&ldquo;What changed?&rdquo;</em>, then <strong>Raden Analytics</strong> reveals <em>&ldquo;What does this data mean for your business profitability?&rdquo;</em>.
              </p>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start sm:items-center gap-2">
                  <CheckCircle2 size={15} className="text-black shrink-0 mt-0.5 sm:mt-0" />
                  <span>Sales &amp; Product Performance Analytics</span>
                </div>
                <div className="flex items-start sm:items-center gap-2">
                  <CheckCircle2 size={15} className="text-black shrink-0 mt-0.5 sm:mt-0" />
                  <span>Marketplace Category &amp; Benchmark Intelligence</span>
                </div>
                <div className="flex items-start sm:items-center gap-2">
                  <CheckCircle2 size={15} className="text-black shrink-0 mt-0.5 sm:mt-0" />
                  <span>Automated Weekly Reporting &amp; Executive Dashboards</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Raden Automate */}
      <section id="automate" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-stone-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left: Copy for Raden Automate with Continuous Scroll Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-left space-y-3 sm:space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold">
                <Cpu size={13} />
                <span>Stage 3: Raden Automate</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-[1.15]">
                Beyond identifying problems:<br />
                the response is already automated.
              </h2>

              <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
                Once a business understands its data, the next critical leap is executing immediate actions without human bottlenecks. Raden Automate connects real-time detection directly to rule-based business workflows.
              </p>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start sm:items-center gap-2">
                  <CheckCircle2 size={15} className="text-black shrink-0 mt-0.5 sm:mt-0" />
                  <span>Send instant critical-stock alerts directly to vendors via WhatsApp/Email</span>
                </div>
                <div className="flex items-start sm:items-center gap-2">
                  <CheckCircle2 size={15} className="text-black shrink-0 mt-0.5 sm:mt-0" />
                  <span>Automated sync to internal Google Sheets or warehouse ERP systems</span>
                </div>
                <div className="flex items-start sm:items-center gap-2">
                  <CheckCircle2 size={15} className="text-black shrink-0 mt-0.5 sm:mt-0" />
                  <span>Multi-marketplace automated pricing synchronization</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Visual Rule Trigger Blueprint with Continuous Scroll Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="bg-stone-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-stone-200 text-left space-y-3 sm:space-y-4 shadow-xs"
            >
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 text-xs">
                <span className="font-bold text-black flex items-center gap-1.5">
                  <Cpu size={15} className="text-black" />
                  Automated Workflow Logic
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-stone-500">TRIGGER PIPELINE</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-stone-200 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[9px] sm:text-[10px] text-stone-400 font-mono block">STAGE 1</span>
                    <span className="font-semibold text-black text-xs sm:text-sm truncate block">Marketplace Data Event Triggered</span>
                  </div>
                  <span className="text-[10px] font-mono text-stone-400 shrink-0">Blibli API</span>
                </div>

                <div className="flex justify-center text-stone-400 text-xs">↓</div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-stone-200 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[9px] sm:text-[10px] text-stone-400 font-mono block">STAGE 2</span>
                    <span className="font-semibold text-black text-xs sm:text-sm truncate block">Nitenin Detects Anomaly</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold shrink-0">&lt;30s</span>
                </div>

                <div className="flex justify-center text-stone-400 text-xs">↓</div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-stone-200 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[9px] sm:text-[10px] text-stone-400 font-mono block">STAGE 3</span>
                    <span className="font-semibold text-black text-xs sm:text-sm truncate block">Business Rule Evaluation</span>
                  </div>
                  <span className="text-[10px] font-mono text-stone-600 shrink-0">Rule: Stock &lt; 5</span>
                </div>

                <div className="flex justify-center text-stone-400 text-xs">↓</div>

                <div className="p-2.5 sm:p-3 rounded-xl bg-black text-white flex items-center justify-between gap-2 shadow-sm">
                  <div className="min-w-0">
                    <span className="text-[9px] sm:text-[10px] text-stone-400 font-mono block">STAGE 4</span>
                    <span className="font-semibold text-white text-xs sm:text-sm truncate block">Automated Action Executed</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold shrink-0">EXECUTED</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Raden AI */}
      <section id="ai" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-stone-100 bg-stone-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left: AI Architecture Visual with Continuous Scroll Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-stone-200 text-left space-y-3 sm:space-y-4 shadow-sm"
            >
              <div className="flex items-center justify-between pb-3 border-b border-stone-200 text-xs">
                <span className="font-bold text-black flex items-center gap-1.5">
                  <Sparkles size={15} className="text-black" />
                  Raden AI Layer
                </span>
                <span className="font-mono text-[9px] sm:text-[10px] text-stone-500">INTELLIGENCE LAYER</span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-2.5 sm:space-y-3">
                <div className="font-mono text-[9px] sm:text-[10px] text-stone-400 uppercase">
                  Ingestion → Decision Flow
                </div>
                <div className="font-mono text-[11px] sm:text-xs font-semibold text-stone-800 flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span>Raw Data</span>
                  <span className="text-stone-400">→</span>
                  <span>Nitenin / Analytics</span>
                  <span className="text-stone-400">→</span>
                  <span className="text-black font-bold">Raden AI</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-stone-200 text-[11px] text-stone-700 leading-relaxed">
                  <strong className="text-black block mb-1">Weekly Executive Summary:</strong>
                  &ldquo;Men&apos;s apparel sales surged +14% WoW; however, two hero SKUs face imminent stockouts as current order velocity will exhaust existing shelf inventory within 48 hours.&rdquo;
                </div>
              </div>

              <p className="text-[11px] text-stone-500 leading-relaxed">
                AI is not a buzzword at RADEN.NI; it is an applied intelligence layer elevating your surveillance, data insights, and operational workflows.
              </p>
            </motion.div>

            {/* Right: Copy for Raden AI with Continuous Scroll Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-left space-y-3 sm:space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold">
                <Sparkles size={13} />
                <span>Stage 4: Raden AI</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-[1.15]">
                Applied intelligence,<br />
                not generic hype.
              </h2>

              <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed">
                Raden AI acts as an operational co-pilot with tailored business domain knowledge. Not an idle chatbot, but an executive strategic decision companion.
              </p>

              <div className="space-y-2 pt-2 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start sm:items-center gap-2">
                  <CheckCircle2 size={15} className="text-black shrink-0 mt-0.5 sm:mt-0" />
                  <span>Synthesize weekly business shifts automatically into concise memos</span>
                </div>
                <div className="flex items-start sm:items-center gap-2">
                  <CheckCircle2 size={15} className="text-black shrink-0 mt-0.5 sm:mt-0" />
                  <span>Diagnose root causes behind sudden margin shifts or revenue anomalies</span>
                </div>
                <div className="flex items-start sm:items-center gap-2">
                  <CheckCircle2 size={15} className="text-black shrink-0 mt-0.5 sm:mt-0" />
                  <span>Answer team queries instantly on inventory velocity and catalog telemetry</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
