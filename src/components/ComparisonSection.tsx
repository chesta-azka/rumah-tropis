import React from "react";
import { useTemplate } from "../context/TemplateContext";
import { PhoneCall, Sparkles, AlertTriangle, ArrowRight } from "lucide-react";

// Importing the generated success and regret illustrations
import jumpToSuccessImg from "../assets/images/jump_to_success_1779364845069.png";
import idleRegretImg from "../assets/images/idle_regret_1779364863028.png";

export default function ComparisonSection() {
  const { theme, activeTemplate } = useTemplate();
  const waLink = "https://wa.me/628138969965";

  // Template specific texts mapping the screenshots & requests
  const getContent = () => {
    if (activeTemplate === "arsitetika-studio") {
      return {
        label: "Pilih Aset Yang Terbaik?",
        title: "Properti Ini Punya 2 Sisi Nilai,",
        cardLeftText: "Aset Tropis Bernilai Tinggi, Dirancang & Dibangun Presisi",
        cardRightText: "Dan Yang Menunda Berinvestasi.",
        ctaText: "Konsultasi Gratis",
        ctaPlaceholder: "Halo%20Rumah%20Tropis,%20saya%20tertarik%20untuk%20mengkonsultasikan%20pilihan%20investasi%20aset%20properti.",
        description: "Setiap keputusan konstruksi berdampak langsung pada nilai masa depan. Apakah Anda akan mengamankan aset kokoh tropis bernilai tinggi atau membiarkan dana menguap begitu saja?"
      };
    }
    if (activeTemplate === "akademicrypto") {
      return {
        label: "KAMU ADA DI TIPE MANA?",
        title: "di Dunia ini Ada 2 Tipe Orang",
        cardLeftText: "Orang Yang Mau Melompat Untuk Merubah Hidupnya",
        cardRightText: "Dan Yang Mau Berdiam Diri",
        ctaText: "Take Action Sekarang",
        ctaPlaceholder: "Halo%20Akademi%20Crypto,%20saya%20siap%20mengambil%20tindakan%20untuk%20merubah%20hidup%20saya",
        description: "Kesempatan emas dalam siklus pasar tidak datang dua kali. Putuskan jalan finansial Anda hari ini sebelum gelombang inflasi melahap habis modal tersisa."
      };
    }
    // Default / akademicreator
    return {
      label: "SISI KARIR DIGITAL ANDA",
      title: "Ada Tipe Kreator yang Berbeda",
      cardLeftText: "Kreator Yang Mengambil Langkah Menguasai Industri",
      cardRightText: "Dan Yang Tetap Menjadi Penonton Pasif",
      ctaText: "Mulai Bangun Personal Brand",
      ctaPlaceholder: "Halo%20Akademi%20Creator,%2520saya%20ingin%2520berkonsultasi%20mengenai%20cara%2520membangun%2520personal%2520brand%2520saya",
      description: "Ekonomi digital terus bergerak maju. Ambil tindakan nyata dengan formula hook viral, atau melihat kreator lain mendominasi feed media sosial."
    };
  };

  const content = getContent();

  return (
    <section id="komparasi" className="py-24 border-b border-white/[0.03] relative overflow-hidden bg-[#030305]" style={{ backgroundColor: theme.bg }}>
      
      {/* Visual luxury ambient lights in background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[180px] bg-fuchsia-500/30" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header mimicking Timothy's original clean design */}
        <div className="text-center mb-16 md:mb-20 space-y-3">
          <span 
            className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] font-extrabold block"
            style={{ color: theme.primary }}
          >
            {content.label}
          </span>
          <h2 className="text-white font-serif-title font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none text-center">
            {content.title}
          </h2>
          <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-[0.15em] block pt-1">
            * PILIHAN TEPAT MENENTUKAN KEPUTUSAN FINANSIAL ANDA *
          </p>
          <div className="w-12 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: theme.primary }} />
        </div>

        {/* Dual Path Responsive Layout */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-8 items-center max-w-3xl mx-auto relative">
          
          {/* OR Connector Badge in middle (visible on desktop) */}
          <div className="hidden md:flex absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center w-14 h-14 rounded-full bg-black border border-white/10 shadow-2xl">
            <span className="text-[10px] font-mono text-zinc-400 font-extrabold uppercase tracking-widest">
              {activeTemplate === "arsitetika-studio" ? "Atau" : "VS"}
            </span>
          </div>

          {/* SISI 1: THE SUCCESS PATH CARD */}
          <div className="relative group">
            
            {/* Top Cyan Verified Badge over border exactly as in reference photo 2! */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-black text-black"
                style={{ 
                  background: activeTemplate === "arsitetika-studio"
                    ? "linear-gradient(135deg, #5B6A56 0%, #B88A6E 100%)"
                    : activeTemplate === "akademicrypto"
                    ? "linear-gradient(135deg, #00fc8b 0%, #10b981 100%)"
                    : "linear-gradient(135deg, #D846EF 0%, #f472b6 100%)",
                  boxShadow: activeTemplate === "arsitetika-studio" ? '0 0 15px rgba(91, 106, 86, 0.4)' : activeTemplate === "akademicrypto" ? '0 0 15px rgba(0, 252, 139, 0.4)' : '0 0 15px rgba(216, 70, 239, 0.4)'
                }}
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Glowing active neon outer border envelope (Screenshot matching) */}
            <div 
              className="absolute -inset-0.5 rounded-[24px] opacity-100 blur-sm pointer-events-none transition-opacity duration-500" 
              style={{
                background: `linear-gradient(180deg, ${theme.primary} 0%, rgba(255,255,255,0.02) 100%)`,
              }}
            />

            {/* Main content body */}
            <div className="relative rounded-[22px] overflow-hidden bg-[#0A0A0E] border border-white/10 shadow-2xl h-[380px] md:h-[420px] flex flex-col justify-end">
              
              {/* Image Underlay */}
              <img 
                src={jumpToSuccessImg} 
                alt="Jumping to success illustration"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] contrast-125 transition-transform duration-[8000ms] group-hover:scale-105"
              />

              {/* Gradient dark fade layer so text pops */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 z-10" />

              {/* Verified glowing border accent */}
              <div 
                className="absolute inset-0 rounded-[22px] border pointer-events-none z-20"
                style={{ borderColor: `${theme.primary}50` }}
              />

              {/* Float code label */}
              <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md border border-white/5 px-3 py-1 rounded z-20 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: theme.primary }} />
                <span className="text-[8px] font-mono tracking-widest uppercase font-bold" style={{ color: theme.primary }}>
                  RECOMMENDED ACTION
                </span>
              </div>

              {/* Content overlay */}
              <div className="p-6 md:p-8 space-y-4 relative z-20 text-center md:text-left">
                <h3 className="text-white font-sans text-lg sm:text-[21px] font-black leading-snug tracking-tight uppercase">
                  {content.cardLeftText}
                </h3>
                <div className="flex items-center justify-center md:justify-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.primary }} />
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                    ASET AMAN & KOKOH
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* OR text label (for mobile only) */}
          <div className="flex md:hidden items-center justify-center gap-4 my-2 text-zinc-600 font-mono text-xs">
            <div className="h-px bg-white/5 flex-1" />
            <span>ATAU</span>
            <div className="h-px bg-white/5 flex-1" />
          </div>

          {/* SISI 2: THE REGRAT / DELAY PATH CARD */}
          <div className="relative group opacity-85 hover:opacity-100 transition-all duration-300">
            
            {/* Outline grey boundary wrapper */}
            <div className="relative rounded-[22px] overflow-hidden bg-[#070709] border border-white/5 shadow-xl h-[380px] md:h-[420px] flex flex-col justify-end">
              
              {/* Image Underlay */}
              <img 
                src={idleRegretImg} 
                alt="Idle regret illustration"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-110 brightness-[0.55] transition-transform duration-[6000ms] group-hover:scale-102"
              />

              {/* Gradient dark fade layer */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

              {/* Float code label */}
              <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-sm border border-white/5 px-3 py-1 rounded z-20 flex items-center gap-2">
                <AlertTriangle className="w-3 h-3 text-rose-500/80" />
                <span className="text-[8px] font-mono tracking-widest text-zinc-400 uppercase">
                  STAGNATION VALUE
                </span>
              </div>

              {/* Content overlay */}
              <div className="p-6 md:p-8 space-y-4 relative z-20 text-center md:text-left">
                <h3 className="text-zinc-300 font-sans text-lg sm:text-[21px] font-black leading-snug tracking-tight uppercase">
                  {content.cardRightText}
                </h3>
                <div className="flex items-center justify-center md:justify-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500/60" />
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    RISIKO INFLASI & PEMBENGKAKAN
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Action Call Response Zone (Floating take-action layer matching Screenshot 3) */}
        <div className="mt-16 text-center space-y-8 max-w-2xl mx-auto">
          
          <p className="text-zinc-400 font-sans text-xs md:text-sm leading-relaxed max-w-lg mx-auto opacity-95">
            {content.description}
          </p>

          <div className="flex flex-col items-center justify-center">
            
            {activeTemplate === "arsitetika-studio" ? (
              <a
                href={`${waLink}?text=${content.ctaPlaceholder}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group/compbtn relative px-12 py-5 font-sans font-black text-xs uppercase tracking-[0.25em] text-[#FEF9ED] rounded-xl overflow-hidden transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(184,138,110,0.25)] hover:scale-[1.03] active:scale-95 border border-[#B88A6E]/30 flex items-center gap-3.5 cursor-pointer"
              >
                {/* Elegant gradient background with copper and aged teak */}
                <div 
                  className="absolute inset-0 transition-opacity duration-500 group-hover/compbtn:opacity-95"
                  style={{
                    background: "linear-gradient(135deg, #B88A6E 0%, #4D3C2F 100%)"
                  }}
                />
                {/* Luminous shimmer gloss effect */}
                <div className="absolute inset-0 opacity-0 group-hover/compbtn:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(254,249,237,0.15)_0%,transparent_70%)]" />
                
                <PhoneCall className="w-4 h-4 text-[#FEF9ED] relative z-10 animate-pulse group-hover/compbtn:scale-110 transition-transform" />
                <span className="relative z-10 transition-colors duration-300">
                  {content.ctaText}
                </span>
              </a>
            ) : (
              /* Elegant action link mimicking custom purple pill button from Timothy's layout */
              <a
                href={`${waLink}?text=${content.ctaPlaceholder}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3.5 px-12 py-5 text-black font-sans font-black text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 transform hover:scale-[1.04] active:scale-95 shadow-2xl cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
                  boxShadow: `0 10px 25px ${theme.primary}30`
                }}
              >
                <PhoneCall className="w-4 h-4 text-black shrink-0 animate-bounce" />
                <span>{content.ctaText}</span>
              </a>
            )}

            {/* Small status line */}
            <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest block mt-4">
              • LAYANAN PRIVASI TINGGI DIRESMIKAN
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}
