import React from "react";
import { PhoneCall, Sparkles } from "lucide-react";
import { useTemplate } from "../context/TemplateContext";

export default function StatsSection() {
  const { data, theme, activeTemplate } = useTemplate();
  const waLink = "https://wa.me/628138969965";

  // Gorgeous top-tier architectural dusk background image
  const getBackgroundImage = () => {
    if (activeTemplate === "arsitetika-studio") {
      // Stunning linear tropical modern villa render at dusk
      return "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200";
    }
    if (activeTemplate === "akademicrypto") {
      // Immersive premium tech dark background with line grids
      return "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200";
    }
    // High-end digital creator studio lighting
    return "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200";
  };

  const stats = data.stats || [];
  const sloganText = data.whyUsSlogan || "Rumah Tropis tidak akan bisa menciptakan aset properti asli sebanyak ini jika kami tidak konsisten dan disiplin mengontrol konstruksi serta fasilitas perawatan struktur terbaik.";

  return (
    <section id="prestasi" className="py-28 relative overflow-hidden border-b border-white/[0.03] min-h-[90vh] flex items-center justify-center">
      {/* Immersive Dusk Render Background Photo */}
      <div className="absolute inset-0 z-0">
        <img 
          src={getBackgroundImage()} 
          alt="Premium Architecture Backdrop"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-[12000ms] ease-out-sine select-none"
        />
        {/* Layered cinematic dark filters & soft overlays to guarantee text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0B0B0D]/85 to-black/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        <div className="absolute inset-0 bg-[#0B0B0D]/30 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full text-center py-6">
        
        {/* Premium Core Slogan / Statement Block */}
        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          <p className="text-zinc-200 font-sans text-sm sm:text-base md:text-lg leading-relaxed font-medium uppercase tracking-wide border-x border-white/10 px-6 sm:px-10 py-1 inline-block">
            "{sloganText}"
          </p>
          <div className="w-10 h-0.5 mx-auto mt-4" style={{ backgroundColor: theme.primary }} />
        </div>

        {/* 2x2 Architectural Grid with exact white/border dividers from the reference image */}
        <div className="max-w-3xl mx-auto border border-white/10 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.8)] mb-8 relative">
          
          {/* Accent corners mimicking structural blueprints */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30" />

          <div className="grid grid-cols-2">
            
            {/* Stat Item 1 (Top Left) */}
            <div className="p-8 sm:p-12 border-r border-b border-white/10 flex flex-col justify-center items-center group transition-colors duration-300 hover:bg-white/[0.02]">
              <span className="text-white font-sans text-4xl sm:text-5xl md:text-6xl font-light tracking-tight transition-transform duration-500 group-hover:scale-105">
                {stats[0]?.value || "7+"}
              </span>
              <span className="text-zinc-400 text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em] font-bold mt-3 leading-none text-center">
                {stats[0]?.label || "Years Of Experience"}
              </span>
            </div>

            {/* Stat Item 2 (Top Right) */}
            <div className="p-8 sm:p-12 border-b border-white/10 flex flex-col justify-center items-center group transition-colors duration-300 hover:bg-white/[0.02]">
              <span className="text-white font-sans text-4xl sm:text-5xl md:text-6xl font-light tracking-tight transition-transform duration-500 group-hover:scale-105">
                {stats[1]?.value || "100+"}
              </span>
              <span className="text-zinc-400 text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em] font-bold mt-3 leading-none text-center">
                {stats[1]?.label || "Completed Project"}
              </span>
            </div>

            {/* Stat Item 3 (Bottom Left) */}
            <div className="p-8 sm:p-12 border-r border-white/10 flex flex-col justify-center items-center group transition-colors duration-300 hover:bg-white/[0.02]">
              <span className="text-white font-sans text-4xl sm:text-5xl md:text-6xl font-light tracking-tight transition-transform duration-500 group-hover:scale-105">
                {stats[2]?.value || "10.000+"}
              </span>
              <span className="text-zinc-400 text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em] font-bold mt-3 leading-none text-center">
                {stats[2]?.label || "SQ Meter Realized"}
              </span>
            </div>

            {/* Stat Item 4 (Bottom Right) */}
            <div className="p-8 sm:p-12 flex flex-col justify-center items-center group transition-colors duration-300 hover:bg-white/[0.02]">
              <span className="text-white font-sans text-4xl sm:text-5xl md:text-6xl font-light tracking-tight transition-transform duration-500 group-hover:scale-105">
                {stats[3]?.value || "30+"}
              </span>
              <span className="text-zinc-400 text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em] font-bold mt-3 leading-none text-center">
                {stats[3]?.label || "Professional Team"}
              </span>
            </div>

          </div>
        </div>

        {/* CTA Button Block at the bottom */}
        <div className="text-center relative select-none flex flex-col items-center">
          {activeTemplate === "arsitetika-studio" ? (
            <>
              <a
                href="https://wa.me/628138969965?text=Halo%20Rumah%20Tropis,%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20investasi%20properti."
                target="_blank"
                rel="noopener noreferrer"
                id="stats-cta-btn"
                className="group/statsbtn relative px-10 py-5 font-sans font-black text-xs uppercase tracking-[0.25em] text-[#FEF9ED] rounded-xl overflow-hidden transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(184,138,110,0.25)] hover:scale-[1.03] active:scale-95 border border-[#B88A6E]/30 flex items-center gap-3 cursor-pointer"
              >
                {/* Button dynamic gradient filling, merging Color 1 (#B88A6E) and Color 3 (#4D3C2F) */}
                <div 
                  className="absolute inset-0 transition-opacity duration-500 group-hover/statsbtn:opacity-95"
                  style={{
                    background: "linear-gradient(135deg, #B88A6E 0%, #4D3C2F 100%)"
                  }}
                />
                
                {/* Soft light shimmer inside */}
                <div className="absolute inset-0 opacity-0 group-hover/statsbtn:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(254,249,237,0.15)_0%,transparent_70%)]" />
                
                <PhoneCall className="w-4 h-4 text-[#FEF9ED] relative z-10 animate-pulse group-hover/statsbtn:scale-110 transition-transform" />
                <span className="relative z-10 transition-colors duration-300">
                  Konsultasi Gratis
                </span>
              </a>
            </>
          ) : (
            <>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                id="stats-cta-btn"
                className="inline-flex items-center gap-3 px-10 py-5 text-black font-sans font-extrabold text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 transform hover:scale-[1.04] active:scale-95 shadow-xl hover:shadow-2xl cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
                  boxShadow: `0 10px 30px ${theme.primary}40`
                }}
              >
                <PhoneCall className="w-4.5 h-4.5 animate-bounce text-black shrink-0" />
                <span>Konsultasi Gratis</span>
              </a>
            </>
          )}
        </div>

      </div>
    </section>
  );
}
