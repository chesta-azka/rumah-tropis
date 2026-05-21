import React from "react";
import { PhoneCall, Sparkles } from "lucide-react";
import { useTemplate } from "../context/TemplateContext";

export default function HeroSection() {
  const { data, theme } = useTemplate();

  return (
    <section
      id="beranda"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-black overflow-hidden flex flex-col items-center justify-center border-b border-white/[0.03]"
    >
      {/* Abstract luxury geometric mesh in background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" 
          style={{ backgroundColor: `${theme.primary}15` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[140px] translate-x-1/2 translate-y-1/2" 
          style={{ backgroundColor: `${theme.secondary || theme.primary}10` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center z-10">
        {/* Massive Bold Headline */}
        <h1 className="text-white font-serif-title font-black tracking-normal text-4xl sm:text-5xl md:text-7xl uppercase leading-[1.1] mb-12 max-w-4xl select-none">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400">
            {data.heroTitle}
          </span>
        </h1>

        {/* Precise Elegant Video Box */}
        <div 
          className="w-full aspect-video rounded-2xl border overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.8)] group"
          style={{ 
            backgroundColor: "#080808",
            borderColor: "rgba(255, 255, 255, 0.08)",
            boxShadow: `0 25px 70px -10px rgba(0, 0, 0, 0.9), 0 0 50px ${theme.primary}10`
          }}
        >
          {/* Accent decoration corners to look like technical blueprint or architectural crop */}
          <div className="absolute top-4 left-4 z-10 w-4 h-4 border-t-2 border-l-2 rounded-tl-sm pointer-events-none" style={{ borderColor: `${theme.primary}50` }} />
          <div className="absolute top-4 right-4 z-10 w-4 h-4 border-t-2 border-r-2 rounded-tr-sm pointer-events-none" style={{ borderColor: `${theme.primary}50` }} />
          <div className="absolute bottom-4 left-4 z-10 w-4 h-4 border-b-2 border-l-2 rounded-bl-sm pointer-events-none" style={{ borderColor: `${theme.primary}50` }} />
          <div className="absolute bottom-4 right-4 z-10 w-4 h-4 border-b-2 border-r-2 rounded-br-sm pointer-events-none" style={{ borderColor: `${theme.primary}50` }} />

          {/* Real-time decorative indicator */}
          <div className="absolute top-5 left-5 z-10 flex items-center gap-2 px-3 py-1 bg-black/75 backdrop-blur-md border border-white/5 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: theme.primary }} />
            <span className="text-[9px] font-mono tracking-[0.2em] text-[#999999] uppercase font-bold">
              CINEMATIC PRESENTATION
            </span>
          </div>

          <video
            src="/images/portfolio/IMG_8223.MOV"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-[1.015]"
            style={{ filter: "brightness(0.9) contrast(1.05)" }}
            onError={(e) => {
              // Handle video fail elegantly with a dark beautiful placeholder
              const parent = (e.target as HTMLElement).parentElement;
              if (parent) {
                const placeholder = document.createElement('div');
                placeholder.className = "absolute inset-0 bg-gradient-to-b from-black/90 to-black/98 flex flex-col items-center justify-center p-6";
                placeholder.innerHTML = `
                  <div class="h-14 w-14 rounded-full flex items-center justify-center mb-4 border" style="background-color: ${theme.primary}12; border-color: ${theme.primary}30">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="${theme.primary}" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 class="text-white font-serif text-base font-semibold mb-1 uppercase tracking-wider">${data.name} Masterclass</h4>
                  <p class="text-zinc-500 text-xs max-w-md text-center font-sans leading-relaxed px-4">
                    Kurikulum premium & riset mendalam yang didesain khusus untuk melipatgandakan dampak karir digital dan valuasi aset Anda.
                  </p>
                `;
                parent.appendChild(placeholder);
                (e.target as HTMLElement).style.display = 'none';
              }
            }}
          />
        </div>
      </div>
    </section>
  );
}
