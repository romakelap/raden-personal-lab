"use client";

import RadenLogo from "./RadenLogo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200/60 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-xs text-stone-500 text-left">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 sm:pb-12 border-b border-stone-100">

          {/* Brand & Lab Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <RadenLogo className="w-6 h-6 sm:w-7 sm:h-7" />
              <span className="font-bold text-black text-sm sm:text-base tracking-tight">
                RADEN.NI
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-700">
                LABORATORY
              </span>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed max-w-sm">
              A sovereign technology laboratory and software engineering practice. Helping modern businesses understand data, monitor operations, automate workflows, and harness applied AI.
            </p>
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 text-[10px] sm:text-[11px] text-stone-700 font-mono space-y-1">
              <div className="font-bold text-black">Lab Author &amp; CO Manager :</div>
              <div className="text-stone-900">Nico Revaldo Putra E.A, S.Kom</div>
            </div>
          </div>

          {/* Products Column */}
          <div className="md:col-span-4 space-y-2.5">
            <span className="font-mono text-[10px] font-bold text-black uppercase tracking-wider block mb-1">
              LAB PRODUCTS &amp; ECOSYSTEM
            </span>
            <ul className="space-y-1.5 text-xs text-stone-600">
              <li>
                <a href="#nitenin" className="hover:text-black flex items-center gap-2 font-medium text-black">
                  <span>Raden Nitenin</span>
                  <span className="px-1.5 py-0.2 rounded text-[8px] bg-emerald-100 text-emerald-800 font-bold">Live</span>
                </a>
              </li>
              <li>
                <a href="#analytics" className="hover:text-black text-stone-500">
                  Raden Analytics (Business Insights)
                </a>
              </li>
              <li>
                <a href="#automate" className="hover:text-black text-stone-500">
                  Raden Automate (Workflow Automation)
                </a>
              </li>
              <li>
                <a href="#ai" className="hover:text-black text-stone-500">
                  Raden AI (Intelligence Layer)
                </a>
              </li>
            </ul>
          </div>

          {/* Lab Research & Authorship Column */}
          <div className="md:col-span-3 space-y-2.5">
            <span className="font-mono text-[10px] font-bold text-black uppercase tracking-wider block mb-1">
              RESEARCH LEADERSHIP
            </span>
            <ul className="space-y-1.5 text-xs text-stone-600">
              <li><a href="#lab-authorship" className="hover:text-black font-semibold text-black">Lab Leadership &amp; Author</a></li>
              <li><a href="#ecosystem" className="hover:text-black">4-Stage Architecture</a></li>
              <li><a href="#security" className="hover:text-black">Data Security Protocols</a></li>
              <li><span className="text-stone-400">Malang City / Jakarta · Indonesia</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] sm:text-[11px] text-stone-400 font-mono text-center sm:text-left">
          <div>&copy; 2023 - Present | RADEN.NI Technology Laboratory. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <span>DIRECTOR: NICO REVALDO PUTRA E.A, S.KOM</span>
            <span>SYSTEM v2.5.0</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
