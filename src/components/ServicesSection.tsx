import React, { useState, useEffect } from "react";
import { useTemplate } from "../context/TemplateContext";
import { 
  Compass, 
  Hammer, 
  BookOpen, 
  Settings, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  PhoneCall, 
  Sparkles,
  Award
} from "lucide-react";

export default function ServicesSection() {
  const { data, theme, activeTemplate } = useTemplate();
  const services = data.services || [];
  const waLink = "https://wa.me/628138969965";

  const getServiceIcon = (id: string, index: number) => {
    const lowerId = id.toLowerCase();
    if (lowerId.includes("rancang") || lowerId.includes("design") || lowerId.includes("basic") || lowerId.includes("crypto-101")) {
      return <Compass className="w-5 h-5 shrink-0" />;
    } else if (lowerId.includes("konstruksi") || lowerId.includes("build") || lowerId.includes("viral-video") || lowerId.includes("defi")) {
      return <Hammer className="w-5 h-5 shrink-0" />;
    } else if (lowerId.includes("ilmu") || lowerId.includes("academy") || lowerId.includes("naskah") || lowerId.includes("on-chain")) {
      return <BookOpen className="w-5 h-5 shrink-0" />;
    } else if (lowerId.includes("manajemen") || lowerId.includes("control") || lowerId.includes("monetization") || lowerId.includes("portfolio")) {
      return <Settings className="w-5 h-5 shrink-0" />;
    } else if (lowerId.includes("investasi") || lowerId.includes("web3") || lowerId.includes("inner") || lowerId.includes("alpha")) {
      return <TrendingUp className="w-5 h-5 shrink-0" />;
    } else {
      const fallbackIcons = [Compass, Hammer, BookOpen, Settings, TrendingUp];
      const IconComp = fallbackIcons[index % fallbackIcons.length] || Star;
      return <IconComp className="w-5 h-5 shrink-0" />;
    }
  };

  // High quality Unsplash photography for each service mapped by service id / template
  const getServiceCoverImage = (id: string, index: number) => {
    if (activeTemplate === "arsitetika-studio") {
      const images = [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1503387762458-7e52d4ee133e?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600"
      ];
      return images[index % images.length];
    }
    if (activeTemplate === "akademicrypto") {
      const images = [
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=600"
      ];
      return images[index % images.length];
    }
    const images = [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600"
    ];
    return images[index % images.length];
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`service-card-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Helper parser to split a single description paragraph into two separate ones based on natural topic transition markers
  const splitDescription = (desc: string) => {
    // Check if newlines are present
    if (desc.includes('\n\n')) {
      const parts = desc.split('\n\n');
      return [parts[0], parts.slice(1).join('\n\n')];
    }
    
    // Fallback logic
    const markers = [
      "Klien akan menguasai cara membaca",
      "Di layanan ini, klien akan belajar",
      "Di proyek ini, klien melihat",
      "Klien akan menguasai Standardisasi,",
      "Mulai dari konsep hingga fasad,",
      // For cryptocurrency template
      "Murid menguasai manajemen",
      "Anda akan diajarkan cara melacak",
      "Akademi membimbing Anda dari nol",
      "Di program penasehat strategi ini,",
      // For creator template
      "Anda akan menguasai 17 formula",
      "Di modul ini, murid mempelajari",
      "Akademi melatih Anda menguasai",
      "Program ini membekali Anda"
    ];
    
    let splitIndex = -1;
    for (const marker of markers) {
      const idx = desc.indexOf(marker);
      if (idx !== -1) {
        splitIndex = idx;
        break;
      }
    }
    
    if (splitIndex !== -1) {
      const part1 = desc.substring(0, splitIndex).trim();
      const part2 = desc.substring(splitIndex).trim();
      return [part1, part2];
    }
    
    return [desc, ""];
  };

  const getHighlightHeading = () => {
    if (activeTemplate === "arsitetika-studio") return "STANDAR COOP & PROSEDUR DIREKTIF";
    if (activeTemplate === "akademicrypto") return "KURIKULUM RISET & CAPABILITAS UTAMA";
    return "TARGET FORMULA & CAPABILITAS UTAMA";
  };

  return (
    <section id="layanan" className="py-16 border-b border-white/[0.03] relative" style={{ backgroundColor: theme.bg }}>
      {/* Background radial soft light blobs decor */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/3 left-1/10 w-[600px] h-[600px] rounded-full blur-[160px]" style={{ backgroundColor: theme.primary }} />
        <div className="absolute bottom-1/3 right-1/10 w-[550px] h-[550px] rounded-full blur-[150px]" style={{ backgroundColor: theme.secondary }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <h2 className="text-white font-serif-title font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none">
            {data.servicesTitle || "PILIHAN LAYANAN KLIEN"}
          </h2>
          <div className="w-16 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: theme.primary }} />
        </div>

        {/* Main Continuous Dotted Timeline Layout resembling original screenshots */}
        <div className="relative border-l border-dashed border-white/10 pl-8 md:pl-16 ml-2 sm:ml-4 md:ml-8 space-y-8 md:space-y-12 pb-6">
          
          {/* Vertical Track Tracker Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#B88A6E]/30 via-white/5 to-transparent pointer-events-none" />

          {services.map((service, index) => {
            const [part1, part2] = splitDescription(service.description);
            
            // Generate split styled title
            const titleWords = service.title.split(" ");
            const firstPartTitle = titleWords.slice(0, titleWords.length - 1).join(" ");
            const lastPartTitle = titleWords[titleWords.length - 1] || "";

            return (
              <div 
                key={service.id} 
                id={`service-card-${service.id}`}
                className="relative group/service transition-all duration-300 scroll-mt-24"
              >
                {/* Dotted target node timeline marker */}
                <div 
                  className="absolute -left-[42px] md:-left-[74px] top-4 w-7 h-7 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center text-[10px] font-mono text-zinc-500 z-10 transition-colors duration-300 group-hover/service:border-[#B88A6E]/50 group-hover/service:text-white"
                  style={{
                    boxShadow: "0 0 10px rgba(0,0,0,0.8)"
                  }}
                >
                  0{index + 1}
                </div>

                {/* Main Premium Service Panel Wrapper */}
                <div className="bg-[#0A0A0C] border border-white/5 rounded-2xl overflow-hidden shadow-2xl relative transition-all duration-500 hover:border-white/10">
                  
                  {/* Absolute subtle background gradient radial */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-radial from-white/[0.01] to-transparent pointer-events-none" />

                  {/* Header visual banner mimicking trading layout photos */}
                  {activeTemplate !== "arsitetika-studio" && (
                    <div className="h-[200px] w-full relative overflow-hidden">
                      <img 
                        src={getServiceCoverImage(service.id, index)} 
                        alt={service.title}
                        className="w-full h-full object-cover object-center filter grayscale contrast-110 brightness-75 transition-transform duration-[6000ms] group-hover/service:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-black/35" />
                      
                      {/* Visual Card Specs Box overlay */}
                      <div className="absolute bottom-4 left-6 md:left-8 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-lg flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[10px] font-mono tracking-widest text-[#A3A3A3] uppercase font-bold">
                          {service.id.toUpperCase()} MODULE ACT-05
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6 md:p-8 space-y-6">

                    {/* Gradient Splitted Big Heading */}
                    <h3 className="text-white font-sans text-2xl sm:text-3xl font-extrabold uppercase tracking-tight leading-none mb-6">
                      {firstPartTitle}{" "}
                      <span 
                        style={{ color: theme.primary }} 
                        className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white"
                      >
                        {lastPartTitle}
                      </span>
                    </h3>

                    <div className="space-y-4">
                      {/* Paragraph Block 1: Intro */}
                      <p className="text-zinc-300 font-sans text-sm md:text-base leading-relaxed text-left opacity-95">
                        {part1}
                      </p>

                      {/* Paragraph Block 2: Detailed explanation text */}
                      {part2 && (
                        <p className="text-zinc-300 font-sans text-sm md:text-base leading-relaxed text-left opacity-95">
                          {part2}
                        </p>
                      )}
                    </div>

                    {/* Grid highlights & specifics details */}
                    {activeTemplate !== "arsitetika-studio" && service.highlights && service.highlights.length > 0 && (
                      <div className="bg-[#050507] border border-white/5 rounded-xl p-5 md:p-6 space-y-4">
                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block font-bold">
                          {getHighlightHeading()}
                        </span>
                        
                        <div className="grid sm:grid-cols-2 gap-3.5">
                          {service.highlights.map((hlt, idx) => (
                            <div key={idx} className="flex gap-2.5 items-start text-xs text-zinc-300">
                              <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: theme.primary }} />
                              <span className="font-sans font-medium line-clamp-2 md:line-clamp-none">{hlt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Bottom Section CTA for Services list to drive maximum conversion */}
        <div className="text-center mt-10 relative select-none flex justify-center">
          <a
            href={`${waLink}?text=${encodeURIComponent('Halo Rumah Tropis, saya tertarik untuk mengkonsultasikan rencana layanan rancang dan pembangunan aset properti.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group/servsccta relative px-12 py-5 font-sans font-black text-xs uppercase tracking-[0.25em] text-[#000000] rounded-xl overflow-hidden transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:scale-[1.03] active:scale-95 flex items-center gap-3"
            style={{
              background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
              border: `1px solid ${theme.primary}50`
            }}
          >
            {/* Luminous shimmer gloss effect */}
            <div className="absolute inset-0 opacity-0 group-hover/servsccta:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)]" />
            
            <PhoneCall className="w-4 h-4 text-[#000000] relative z-10 hover:animate-bounce transition-transform" />
            <span className="relative z-10 transition-colors duration-300">
              Konsultasi Gratis
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
