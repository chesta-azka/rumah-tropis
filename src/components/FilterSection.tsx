import React from "react";
import { Check, X, PhoneCall, HelpCircle, AlertTriangle } from "lucide-react";
import { useTemplate } from "../context/TemplateContext";

export default function FilterSection() {
  const { data, theme } = useTemplate();
  const waLink = "https://wa.me/628138969965";

  const pilihJika = data.pilihJika || [];
  const janganPilihJika = data.janganPilihJika || [];

  // Parse title to add premium colored highlight matching the screenshot style
  const rawTitle = data.filterTitle || "";
  let firstPart = rawTitle;
  let highlightPart = "";

  const splitKey = "Adalah Partner";
  const index = rawTitle.toLowerCase().indexOf(splitKey.toLowerCase());
  if (index !== -1) {
    firstPart = rawTitle.substring(0, index);
    highlightPart = rawTitle.substring(index);
  } else {
    // Fallback if key not found
    firstPart = "Sebelum Melangkah Lebih Jauh, Pastikan ";
    highlightPart = "Rumah Tropis Adalah Partner yang Tepat";
  }

  return (
    <section id="kualifikasi" className="py-24 border-b border-white/[0.03] relative" style={{ backgroundColor: theme.bg }}>
      {/* Dynamic Background Noise Line or Grid lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title Section matching the screenshot's centered, high-impact style */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-mono uppercase tracking-[0.2em] block mb-5 font-bold" style={{ color: theme.primary }}>
            QUALIFICATION MATRIX
          </span>
          <h2 className="text-white font-serif-title font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight leading-snug uppercase">
            {firstPart}
            <span className="block mt-2 text-[#EF4444] animate-pulse-slow">
              {highlightPart}
            </span>
          </h2>
          <div className="w-12 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: theme.primary }} />
        </div>

        {/* Vertical Stack List (Identical layout to screenshot / AkadCreator) */}
        <div className="space-y-8 max-w-2xl mx-auto mb-16">
          
          {/* Card 1: PILIH JIKA (Green border, glow, solid ticks) */}
          <div className="bg-[#09090B] border-2 border-emerald-500/90 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.1)] overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]">
            <div className="p-6 md:p-8">
              {/* Header inside green box */}
              <div className="flex items-center justify-between border-b border-white/5 pb-5 mb-5">
                <div className="flex items-center gap-3">
                  <h3 className="text-white font-serif-title text-xl md:text-2xl font-bold tracking-wide">
                    {data.filterPilihTitle || "Pilih Jika"}
                  </h3>
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-black font-bold text-xs shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                    ✓
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B88A6E]">
                  Highly Recommended
                </span>
              </div>

              {/* Ticks List with dividing line */}
              <ul className="divide-y divide-white/5">
                {pilihJika.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0 group">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-black shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-zinc-100 text-sm md:text-base font-sans tracking-wide leading-relaxed font-medium transition-colors group-hover:text-emerald-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: JANGAN PILIH JIKA (Red border, dimmed look, red ticks) */}
          <div className="bg-[#09090B] border-2 border-red-500/40 rounded-2xl opacity-85 hover:opacity-100 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.05)]">
            <div className="p-6 md:p-8">
              {/* Header inside red box */}
              <div className="flex items-center justify-between border-b border-white/5 pb-5 mb-5">
                <div className="flex items-center gap-3">
                  <h3 className="text-zinc-300 font-serif-title text-xl md:text-2xl font-bold tracking-wide">
                    {data.filterJanganTitle || "Jangan Pilih Jika"}
                  </h3>
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.4)]">
                    ✕
                  </div>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                  Critical Warning
                </span>
              </div>

              {/* Crosses List with dividing lines, dimmed text */}
              <ul className="divide-y divide-white/5">
                {janganPilihJika.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0 group">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-500/20">
                      <X className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-zinc-400 text-sm md:text-base font-sans tracking-wide leading-relaxed group-hover:text-red-400 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* CTA Button Block at the bottom */}
        <div className="text-center relative">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 text-black font-sans font-extrabold text-sm uppercase tracking-[0.2em] rounded-full transition-all duration-300 transform hover:scale-[1.04] active:scale-95 shadow-xl hover:shadow-2xl cursor-pointer"
            id="filter-cta-btn"
            style={{
              background: `linear-gradient(135s, ${theme.primary} 0%, ${theme.secondary} 100%)`,
              boxShadow: `0 10px 30px ${theme.primary}40`
            }}
          >
            <PhoneCall className="w-4.5 h-4.5 animate-bounce text-black shrink-0" />
            <span>Konsultasi Gratis</span>
          </a>
          <p className="text-zinc-500 text-[10px] font-mono mt-4 uppercase tracking-[0.15em]">
            *Tersambung langsung dengan Direktur Teknik Arsitektur Kami
          </p>
        </div>

      </div>
    </section>
  );
}
