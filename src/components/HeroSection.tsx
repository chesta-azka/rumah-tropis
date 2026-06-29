import React from "react";
import { PhoneCall, Sparkles } from "lucide-react";
import { useTemplate } from "../context/TemplateContext";
import { resolveMediaUrl, isYouTubeUrl, getYouTubeId } from "../utils";

export default function HeroSection() {
  const { activeTemplate, data, theme } = useTemplate();

  const getHeroContent = () => {
    if (activeTemplate === "arsitetika-studio") {
      return {
        whiteText: "CIPTAKAN BANGUNAN BERNILAI TINGGI",
        accentText: "LEWAT PESONA GAYA TROPIS.",
        subText: "DETAIL DESAIN DAN KONSTRUKSI AMANKAN NILAI INVESTASI."
      };
    } else if (activeTemplate === "akademicrypto") {
      return {
        whiteText: "Belajar Investasi di Aset terbaik",
        accentText: "selama 1 dekade terakhir.",
        subText: "71% member berhasil paham crypto dalam waktu 3 minggu"
      };
    } else {
      return {
        whiteText: "KUASAI ALGORITMA DAN",
        accentText: "BANGUN OTORITAS DIGITAL.",
        subText: "92% ALUMNI BERHASIL MENGAMANKAN BRAND DEALS DALAM 30 HARI PERTAMA."
      };
    }
  };

  const { whiteText, accentText, subText } = getHeroContent();

  return (
    <section
      id="beranda"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-black overflow-hidden flex flex-col items-center justify-center border-b border-white/[0.03]"
    >
      {/* Abstract luxury geometric mesh in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-black">
        {activeTemplate === "arsitetika-studio" ? (
          <>
            {/* Color 1: #B88A6E (Premium Copper-Bronze) Blur Glow Top Left */}
            <div className="absolute top-12 left-10 w-[450px] h-[450px] rounded-full blur-[180px] opacity-[0.25] mix-blend-screen" style={{ backgroundColor: "#B88A6E" }} />
            
            {/* Color 4: #5B6A56 (Rainforest Moss) Blur Glow Top Right */}
            <div className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full blur-[200px] opacity-[0.16] mix-blend-screen" style={{ backgroundColor: "#5B6A56" }} />
            
            {/* Color 3: #4D3C2F (Aged Teak) Backdrop overlay right under video */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[160px] opacity-[0.22] mix-blend-screen" style={{ backgroundColor: "#4D3C2F" }} />
            
            {/* Color 2: #F5E6D3 (Sandy Travertine) Soft light leak from bottom left */}
            <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] rounded-full blur-[180px] opacity-[0.18] mix-blend-screen" style={{ backgroundColor: "#F5E6D3" }} />
            
            {/* Color 5: #FEF9ED (Filtered Sunbeam) Ambient Glow Behind Video Center */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[550px] h-[300px] rounded-full blur-[140px] opacity-[0.12] mix-blend-screen" style={{ backgroundColor: "#FEF9ED" }} />
            
            {/* Soft ambient transition flow between Section 1 and Section 2 using these 5 colors */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
            
            {/* Blurry horizontal glow bar right at the intersection of Section 1 and Section 2 */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[6px] rounded-full blur-[12px] opacity-[0.4] mix-blend-screen bg-gradient-to-r from-transparent via-[#4D3C2F] via-[#B88A6E] via-[#FEF9ED] via-[#F5E6D3] via-[#5B6A56] via-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[2px] rounded-full blur-[2px] opacity-[0.6] mix-blend-screen bg-gradient-to-r from-transparent via-[#B88A6E] via-[#FEF9ED] via-[#F5E6D3] via-transparent" />
          </>
        ) : (
          <>
            <div 
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" 
              style={{ backgroundColor: `${theme.primary}15` }}
            />
            <div 
              className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[140px] translate-x-1/2 translate-y-1/2" 
              style={{ backgroundColor: `${theme.secondary || theme.primary}10` }}
            />
          </>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center z-10 animate-fade-in">
        {/* Massive Bold Headline modeled after reference style */}
        <h1 
          className="text-white font-black tracking-tight text-3xl sm:text-5xl md:text-6xl leading-[1.2] mb-4 max-w-4xl select-none"
          style={{ fontFamily: theme.fontTitle }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-300 mr-2">
            {whiteText}
          </span>{" "}
          <span className="inline-block mt-1 sm:mt-0 font-bold" style={{ color: theme.primary }}>
            {accentText}
          </span>
        </h1>

        {/* Dynamic Subtitle / Description beneath */}
        {subText && (
          <p 
            className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed mb-12 tracking-wide font-medium"
            style={{ fontFamily: activeTemplate === "akademicrypto" ? '"JetBrains Mono", monospace' : '"Inter", sans-serif' }}
          >
            {subText}
          </p>
        )}

        {/* Precise Elegant Video Box */}
        <div 
          className="w-full aspect-video rounded-2xl border overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.8)] group"
          style={{ 
            backgroundColor: "#080808",
            borderColor: "rgba(255, 255, 255, 0.08)",
            boxShadow: `0 25px 70px -10px rgba(0, 0, 0, 0.9), 0 0 50px ${theme.primary}10`
          }}
        >
          {activeTemplate !== "arsitetika-studio" && (
            <>
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
            </>
          )}

          {isYouTubeUrl(data.heroVideoUrl || "/images/portfolio/IMG_8223.MOV") ? (
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeId(data.heroVideoUrl || "/images/portfolio/IMG_8223.MOV")}?mute=1&loop=1&playlist=${getYouTubeId(data.heroVideoUrl || "/images/portfolio/IMG_8223.MOV")}&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playsinline=1&enablejsapi=1`}
              title="Cinematic Presentation Video"
              className="w-full h-full object-cover border-0 transition-transform duration-[3s] group-hover:scale-[1.015]"
              style={{ filter: "brightness(0.9) contrast(1.05)" }}
              allow="encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={resolveMediaUrl(data.heroVideoUrl || "/images/portfolio/IMG_8223.MOV")}
              loop
              muted
              playsInline
              controls
              preload="none"
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
                    <h4 class="text-white font-serif text-base font-semibold mb-1 uppercase tracking-wider">${data.name} Video</h4>
                  `;
                  parent.appendChild(placeholder);
                  (e.target as HTMLElement).style.display = 'none';
                }
              }}
            />
          )}
        </div>

        {/* Playful and luxurious CTA Button right below the video */}
        {activeTemplate === "arsitetika-studio" && (
          <div className="mt-12 select-none flex flex-col items-center">
            <a
              href={`https://wa.me/628138969965?text=${encodeURIComponent('Halo Rumah Tropis, saya tertarik untuk melakukan Konsultasi Gratis.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative px-10 py-4.5 font-sans font-black text-xs uppercase tracking-[0.25em] text-[#FEF9ED] rounded-xl overflow-hidden transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(184,138,110,0.25)] hover:scale-[1.03] active:scale-95 border border-[#B88A6E]/30 flex items-center gap-3"
            >
              {/* Button dynamic gradient filling, merging Color 1 (#B88A6E) and Color 3 (#4D3C2F) */}
              <div 
                className="absolute inset-0 transition-opacity duration-500 group-hover/btn:opacity-95"
                style={{
                  background: "linear-gradient(135deg, #B88A6E 0%, #4D3C2F 100%)"
                }}
              />
              
              {/* Soft light shimmer inside */}
              <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(254,249,237,0.15)_0%,transparent_70%)]" />
              
              <PhoneCall className="w-4 h-4 text-[#FEF9ED] relative z-10 animate-pulse group-hover/btn:scale-110 transition-transform" />
              <span className="relative z-10 transition-colors duration-300">
                Konsultasi Gratis
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
