import React from "react";
import { Check, X, PhoneCall, Sparkles } from "lucide-react";
import { useTemplate } from "../context/TemplateContext";

export default function FilterSection() {
  const { data, theme, activeTemplate } = useTemplate();
  const waLink = "https://wa.me/628138969965";

  const pilihJika = data.pilihJika || [];
  const janganPilihJika = data.janganPilihJika || [];

  // Parse title to add premium colored highlight matching Timothy's layout
  const rawTitle = data.filterTitle || "";
  let firstPart = rawTitle;
  let highlightPart = "";

  const splitKey = activeTemplate === "arsitetika-studio" 
    ? "Rumah Tropis" 
    : activeTemplate === "akademicrypto" 
    ? "Akademi Crypto" 
    : "Akademi Creator";

  const index = rawTitle.toLowerCase().indexOf(splitKey.toLowerCase());
  if (index !== -1) {
    firstPart = rawTitle.substring(0, index);
    highlightPart = rawTitle.substring(index);
  } else {
    firstPart = "Sebelum Melangkah Lebih Jauh, Pastikan ";
    highlightPart = `${splitKey} Adalah Partner yang Tepat`;
  }

  // Get CTA Placeholder Link
  const getCtaPlaceholder = () => {
    if (activeTemplate === "arsitetika-studio") {
      return "Halo%20Rumah%2520Tropis,%2520saya%2520tertarik%2520konsultasi%2520gratis%2520desain%2520setelah%2520membaca%2520kualifikasi%2520website";
    }
    if (activeTemplate === "akademicrypto") {
      return "Halo%20Akademi%2520Crypto,%2520saya%2520tertarik%2520mengikuti%2520pembelajaran%2520kelas%2520trading%2520blockchain";
    }
    return "Halo%20Akademi%2520Creator,%2520saya%2520tertarik%2520konsultasi%2520cara%2520membangun%2520personal%2520brand";
  }

  return (
    <section id="kualifikasi" className="py-24 border-b border-white/[0.03] relative" style={{ backgroundColor: theme.bg }}>
      
      {/* Space Grotesk background mesh grid effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-60" />
      
      {/* Decorative ambient gold/purple blur spots in corners */}
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 rounded-full bg-rose-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Tim-style Center Header Block */}
        <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.02] border border-white/5 rounded-full select-none mb-1">
            <Sparkles className="w-3 h-3 text-zinc-400 group-hover:rotate-12 transition-transform" />
            <span className="text-[9px] md:text-[10px] font-mono font-extrabold uppercase tracking-[0.25em] text-zinc-400">
              AUDIENCE CLASSIFICATION
            </span>
          </div>
          
          <h2 className="text-white font-sans font-black text-2xl sm:text-3xl md:text-[40px] uppercase tracking-tight leading-none md:leading-[1.1] max-w-3xl mx-auto">
            {firstPart}
            <span 
              className="block mt-2 tracking-tight transition-all duration-300 bg-clip-text text-transparent"
              style={{
                backgroundImage: activeTemplate === "akademicrypto" 
                  ? "linear-gradient(135deg, #c084fc 0%, #a855f7 100%)" 
                  : activeTemplate === "akademicreator"
                  ? "linear-gradient(135deg, #fb923c 0%, #f97316 100%)"
                  : "linear-gradient(135deg, #fcd34d 0%, #d97706 100%)",
                textShadow: "0 10px 40px rgba(0,0,0,0.5)"
              }}
            >
              {highlightPart}
            </span>
          </h2>
          
          <div className="w-12 h-1 mx-auto mt-6 rounded-full opacity-60" style={{ backgroundColor: theme.primary }} />
        </div>

        {/* 2-COLUMN SIDE-BY-SIDE MATCHING TIMOTHY'S BEAUTIFUL WEBSITE STYLE */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch mb-20 max-w-6xl mx-auto">
          
          {/* SISI KIRI: DAFTAR JIKA / PILIH JIKA */}
          <div className="bg-[#08080C] border border-emerald-500/20 hover:border-emerald-500/40 transition- luxury rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_4px_45px_rgba(16,185,129,0.03)] relative overflow-hidden flex flex-col justify-between group">
            
            {/* Top right decorative emerald light streak */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[40px] rounded-full pointer-events-none group-hover:bg-emerald-500/15 transition-all duration-500" />
            
            <div className="space-y-8">
              
              {/* Card Title Header with custom check bulb */}
              <div className="flex items-center justify-between border-b border-white/[0.04] pb-6">
                <div>
                  <span className="text-[9px] font-mono text-emerald-400 font-extrabold uppercase tracking-widest block mb-1">
                    [ RECOMMENDED AUDIENCE • COHORT 01 ]
                  </span>
                  <h3 className="text-white font-sans text-xl sm:text-2xl font-black uppercase tracking-tight">
                    {data.filterPilihTitle || "Pilih Jika"}
                  </h3>
                </div>
                <div className="w-11 h-11 rounded-full bg-emerald-500 text-black flex items-center justify-center font-black text-sm shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.3)] select-none">
                  ✓
                </div>
              </div>

              {/* Items List */}
              <ul className="space-y-5">
                {pilihJika.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group/item">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:bg-emerald-500 group-hover/item:text-black transition-all duration-300">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-zinc-300 hover:text-white transition-colors text-xs sm:text-sm font-medium tracking-wide leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

            </div>

            {/* Micro tag at bottom left */}
            <div className="mt-8 pt-6 border-t border-white/[0.03] text-[8.5px] font-mono text-zinc-600 uppercase tracking-widest">
              • TERPASANG UNTUK AKSELERASI STRATEGI
            </div>

          </div>

          {/* SISI KANAN: JANGAN PILIH JIKA / JANGAN DAFTAR JIKA */}
          <div className="bg-[#08080C] border border-rose-500/10 hover:border-rose-500/35 transition-luxury rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_4px_45px_rgba(239,68,68,0.01)] relative overflow-hidden flex flex-col justify-between group">
            
            {/* Top right decorative rose light streak */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 blur-[40px] rounded-full pointer-events-none group-hover:bg-rose-500/10 transition-all duration-500" />
            
            <div className="space-y-8">
              
              {/* Card Title Header with custom warning bulb */}
              <div className="flex items-center justify-between border-b border-white/[0.04] pb-6">
                <div>
                  <span className="text-[9px] font-mono text-rose-500/75 font-extrabold uppercase tracking-widest block mb-1">
                    [ CRITICAL QUALIFICATION WARNING ]
                  </span>
                  <h3 className="text-zinc-300 font-sans text-xl sm:text-2xl font-black uppercase tracking-tight">
                    {data.filterJanganTitle || "Jangan Pilih Jika"}
                  </h3>
                </div>
                <div className="w-11 h-11 rounded-full bg-rose-500/15 border border-rose-500/30 text-rose-500 flex items-center justify-center font-black text-sm shrink-0 select-none">
                  ✕
                </div>
              </div>

              {/* Items List */}
              <ul className="space-y-5">
                {janganPilihJika.map((item, index) => (
                  <li key={index} className="flex items-start gap-4 group/item">
                    <div className="w-5 h-5 rounded-full bg-rose-500/5 border border-rose-500/25 text-rose-500/70 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-110 group-hover/item:bg-rose-500 group-hover/item:text-black transition-all duration-300">
                      <X className="w-3 h-3 stroke-[2.5]" />
                    </div>
                    <span className="text-zinc-400 hover:text-rose-400 transition-colors text-xs sm:text-sm tracking-wide leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

            </div>

            {/* Micro tag at bottom left */}
            <div className="mt-8 pt-6 border-t border-white/[0.03] text-[8.5px] font-mono text-zinc-650 uppercase tracking-widest">
              • TINGKAT GAGAL ANALISIS PROYEK TINGGI
            </div>

          </div>

        </div>

        {/* BOTTOM CALL TO ACTION ROW */}
        <div className="text-center relative max-w-2xl mx-auto space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white/[0.02] border border-white/5 rounded-full mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-ping" />
            <span className="text-[8.5px] font-mono text-zinc-400 uppercase tracking-widest">
              RESERVASI SLOT KOMUNIKASI RESMI
            </span>
          </div>

          <div className="flex flex-col items-center">
            <a
              href={`${waLink}?text=${getCtaPlaceholder()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 px-12 py-5 text-black font-sans font-black text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 transform hover:scale-[1.04] active:scale-95 shadow-2xl cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
                boxShadow: `0 12px 30px ${theme.primary}25`
              }}
            >
              <PhoneCall className="w-4 h-4 text-black shrink-0 animate-bounce" />
              <span>MULAI KONSULTASI SEKARANG</span>
            </a>

            <span className="text-[8.5px] font-mono text-zinc-600 uppercase tracking-widest block mt-4 select-none">
              • DAMPINGI OLEH TIM PROFESIONAL RESMI KUALIFIKASI 24/7
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
