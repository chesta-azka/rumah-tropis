import React, { useState, useEffect } from "react";
import { useTemplate } from "../context/TemplateContext";
import { 
  MapPin, 
  Layers, 
  Sparkles, 
  PhoneCall, 
  FileText, 
  Maximize2,
  X,
  Compass,
  Award,
  BookOpen
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PortfolioItem {
  id: string;
  path: string;
  title: string;
  location: string;
  dimensions?: string;
  aspectRatio?: string;
  fileFormat?: string;
  fileSize?: string;
  styleTheme?: string;
  keyMaterials?: string[];
  designStory?: string;
}

export default function PortfolioSection() {
  const { data, theme, activeTemplate } = useTemplate();
  const portfolioItems = (data.portfolioItems || []) as PortfolioItem[];
  const portfolioFilter = (data.portfolioFilter || []) as string[];
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const waLink = "https://wa.me/628138969965";

  // Reset filter when template changes
  useEffect(() => {
    setActiveFilter("All");
    setSelectedProject(null);
  }, [activeTemplate]);

  const getCleanFilenameTitle = (item: PortfolioItem) => {
    const filenameMap: Record<string, string> = {
      p1: "the ai house",
      p2: "the ss house",
      p3: "the ra house",
      p4: "the fl house",
      p5: "the ad house",
      p6: "the nn house",
      p7: "the nd house",
      p8: "the ea house",
      p9: "the bf house",
      p10: "the yo house"
    };
    const title = filenameMap[item.id] || item.title.toLowerCase();
    // Prepend 'the ' if not already there, e.g. "the nn house"
    const prefix = title.startsWith("the ") ? "" : "the ";
    return `${prefix}${title}`.toUpperCase();
  };

  // Safe fallback matching Unsplash images if template assets are not loaded
  function getFallbackImage(id: string): string {
    if (activeTemplate === "arsitetika-studio") {
      const fallbacks: Record<string, string> = {
        p1: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800", // AI House
        p2: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", // SS House
        p3: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&q=80&w=800", // RA Residence
        p4: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800", // FL House
        p5: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800", // AD Manor
        p6: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800", // NN Retreat
        p7: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800", // ND Courtyard
        p8: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=800", // EA Breeze
        p9: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800", // BF House
        p10: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" // YO Glasshouse
      };
      return fallbacks[id] || "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800";
    } else if (activeTemplate === "akademicrypto") {
      const fallbacks: Record<string, string> = {
        p1: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=800", // Chart
        p2: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800", // Bot
        p3: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800", // Accumulation Map
        p4: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&q=80&w=800", // Yield Farming
        p5: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=800", // custom smart contract
        p6: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=800"  // airdrop victory
      };
      return fallbacks[id] || "https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=800";
    } else {
      const fallbacks: Record<string, string> = {
        p1: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800", // YouTube Growth
        p2: "https://images.unsplash.com/photo-1624969862644-791f3dc98927?auto=format&fit=crop&q=80&w=800", // travel blog
        p3: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=800", // nike sponsorship
        p4: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", // vlogs
        p5: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800", // educational hook
        p6: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=800"  // agency connections
      };
      return fallbacks[id] || "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800";
    }
  }

  // Realistic Owners Mapping based on templates
  const getOwnerName = (item: PortfolioItem) => {
    if (activeTemplate === "arsitetika-studio") {
      const owners: Record<string, string> = {
        p1: "BAPAK AGUNG",
        p2: "IBU LUH DE",
        p3: "KELUARGA WIJAYA",
        p4: "BAPAK STEVANUS",
        p5: "KO CHRISTIAN",
        p6: "BAPAK HERAWAN",
        p7: "BAPAK ARI", // Citraland Surabaya (Symmetric Palace)
        p8: "IBU DESAK",
        p9: "IBU MELANI",
        p10: "KELUARGA SUTISNA",
        p11: "BAPAK SAMUEL"
      };
      return owners[item.id] || "BAPAK ARI";
    }
    if (activeTemplate === "akademicrypto") {
      const members: Record<string, string> = {
        p1: "BPK. AGUS K.",
        p2: "BPK. ROMY B.",
        p3: "IBU NINDYA S.",
        p4: "BPK. FERRY T.",
        p5: "BPK. CHRIS A.",
        p6: "IBU LIDYA CO"
      };
      return members[item.id] || "ALUMNI ACADEMY";
    }
    const creators: Record<string, string> = {
      p1: "BPK. H. SAKIRIN",
      p2: "BPK. ROMY B.",
      p3: "IBU ANDINI",
      p4: "BPK. WILDAN",
      p5: "BPK. KEVIN V.",
      p6: "IBU DEASY S."
    };
    return creators[item.id] || "CHANNELS ALUMNI";
  };

  const getOwnerRoleLabel = () => {
    if (activeTemplate === "arsitetika-studio") return "Owner";
    if (activeTemplate === "akademicrypto") return "Trader";
    return "Creator";
  };

  const getDomainText = () => {
    if (activeTemplate === "arsitetika-studio") return "";
    if (activeTemplate === "akademicrypto") return "akademicrypto.com";
    return "akademicreator.com";
  };

  const getBrandLogoText = () => {
    if (activeTemplate === "arsitetika-studio") return "";
    if (activeTemplate === "akademicrypto") return "Akademi Crypto";
    return "Akademi Creator";
  };

  // Prefilled link creator
  const getWhatsAppMessageLink = (item: PortfolioItem) => {
    let msg = "";
    if (activeTemplate === "arsitetika-studio") {
      msg = `Halo Rumah Tropis, saya sangat tertarik dengan hasil karya arsitektur '${item.title}' di ${item.location} (Owner: ${getOwnerName(item)}). Bolehkah saya berkonsultasi mengenai rancangan dan skema anggaran serupa untuk properti saya?`;
    } else if (activeTemplate === "akademicrypto") {
      msg = `Halo Akademi Crypto, saya sangat tertarik dengan hasil setup '${item.title}' kategori ${item.location}. Mohon informasi pendaftaran kelas intensif bimbingan trading blockchain.`;
    } else {
      msg = `Halo Akademi Creator, saya sangat tertarik mengamati keberhasilan channel '${item.title}' kategori ${item.location}. Saya ingin konsultasi kelas personal branding dan naskah script.`;
    }
    return `${waLink}?text=${encodeURIComponent(msg)}`;
  };

  const getCtaPlaceholder = () => {
    if (activeTemplate === "arsitetika-studio") {
      return "Halo%20Rumah%20Tropis,%20saya%20tertarik%20konsultasi%20mengenai%20desain%20dan%20pembangunan%20properti%20tropis";
    }
    if (activeTemplate === "akademicrypto") {
      return "Halo%20Akademi%20Crypto,%20saya%20tertarik%20untuk%20mendaftar%20dan%20berkonsultasi%20mengenai%20kelas%20intensif%20trading";
    }
    return "Halo%20Akademi%20Creator,%20saya%20tertarik%20untuk%20konsultasi%20mengenai%20kelas%20membangun%20personal%20branding";
  };

  // Filter logic
  const filteredItems = portfolioItems.filter((item) => {
    if (activeFilter === "All") return true;
    const filterLower = activeFilter.toLowerCase();
    
    // Check fields for match
    const locationMatch = item.location?.toLowerCase().includes(filterLower);
    const titleMatch = item.title?.toLowerCase().includes(filterLower);
    const idMatch = item.id?.toLowerCase().includes(filterLower);
    const themeMatch = (item as any).styleTheme?.toLowerCase().includes(filterLower);
    
    return locationMatch || titleMatch || idMatch || themeMatch;
  });

  return (
    <section id="portofolio" className="py-24 border-b border-white/[0.03] relative overflow-hidden bg-[#030305]" style={{ backgroundColor: theme.bg }}>
      
      {/* Dynamic luxury backdrop light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[180px] opacity-[0.08] pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${theme.primary} 0%, transparent 75%)`
        }} 
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <span 
            className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] font-extrabold block"
            style={{ color: theme.primary }}
          >
            {data.portfolioLabel || "PORTOFOLIO"}
          </span>
          <h2 className="text-white font-serif-title font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none">
            {data.portfolioTitle || "Hasil Project Yang Kami Kerjakan"}
          </h2>
          <p className="text-zinc-400 font-sans text-xs md:text-sm tracking-wide max-w-xl mx-auto opacity-85 italic">
            "{data.portfolioSub || "Lihat Hasil Karya yang Sudah Terwujud (Slide Portfolio Project)"}"
          </p>
          <div className="w-12 h-1 mx-auto mt-5 rounded-full" style={{ backgroundColor: theme.primary }} />
        </div>

        {/* LUXURY INTERACTIVE FILTER TABS */}
        {activeTemplate !== "arsitetika-studio" && portfolioFilter && portfolioFilter.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2.5 mb-14 max-w-4xl mx-auto px-2">
            {portfolioFilter.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-5 py-2.5 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all duration-300 font-extrabold cursor-pointer border ${
                    isActive
                      ? "text-black border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                      : "text-zinc-400 bg-[#0A0A0C]/60 border-white/5 hover:text-white hover:border-white/10"
                  }`}
                  style={isActive ? {
                    background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
                    boxShadow: `0 8px 20px ${theme.primary}25`
                  } : undefined}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        )}

        {/* HIGH-FIDELITY BENTO PORTFOLIO SHOWCASE GRID */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-[#08080B] border border-white/5 rounded-3xl p-10 max-w-lg mx-auto">
            <Compass className="w-10 h-10 text-zinc-500 mx-auto mb-4 animate-spin-slow" />
            <h4 className="text-white font-sans text-sm font-bold uppercase tracking-wider mb-2">Belum Ada Proyek</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Lokasi ini sedang dalam tahap review tim desainer kami atau segera dirilis. Hubungi kami untuk merintis proyek pertama di wilayah Anda!
            </p>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => {
                const isArsitetika = activeTemplate === "arsitetika-studio";
                const displayTitle = isArsitetika ? getCleanFilenameTitle(item) : item.title;
                const ownerName = getOwnerName(item);

                if (isArsitetika) {
                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="group relative rounded-2xl overflow-hidden bg-[#070709] border border-white/5 shadow-2xl hover:border-white/10 transition-all duration-500 flex flex-col"
                    >
                      {/* Visual Aspect Ratio Container */}
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0A0A0D]">
                        <img 
                          src={item.path} 
                          alt={displayTitle} 
                          className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out-sine group-hover:scale-105"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const img = e.target as HTMLImageElement;
                            img.src = getFallbackImage(item.id);
                          }}
                        />
                        {/* Soft Cover Dark Vignette Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030305]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 z-10" />

                        {/* Minimal uppercase project name near the bottom-left */}
                        <div className="absolute bottom-5 left-5 right-5 z-20">
                          <span className="text-white/90 font-mono text-xs tracking-widest uppercase group-hover:text-amber-500 transition-colors duration-300">
                            {displayTitle}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group relative rounded-3xl overflow-hidden bg-[#070709] border border-white/5 shadow-2xl hover:border-white/15 transition-all duration-500 flex flex-col cursor-pointer"
                    onClick={() => setSelectedProject(item)}
                  >
                    
                    {/* Visual Aspect Ratio Container */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0A0A0D]">
                      
                      <img 
                        src={item.path} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-[4000ms] ease-out-sine group-hover:scale-110"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.src = getFallbackImage(item.id);
                        }}
                      />

                      {/* Brand Tag Watermark in Layout */}
                      {getBrandLogoText() && (
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded shadow-lg border border-white/10 z-10">
                          <span className="text-[8px] font-sans font-black text-slate-950 tracking-wide">
                            {getBrandLogoText()}
                          </span>
                        </div>
                      )}

                      {/* Cover Dark Gradients Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-black/40 to-transparent z-10" />

                      {/* Overlaid specs triggers icon */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-20">
                        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                          <Maximize2 className="w-5 h-5" />
                        </div>
                      </div>

                    </div>

                    {/* Metadata Content block */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4 relative z-20">
                      
                      <div className="space-y-1">
                        <div className="flex justify-between items-center w-full">
                          <span 
                            className="text-[9px] font-mono tracking-widest uppercase font-extrabold"
                            style={{ color: theme.primary }}
                          >
                            {getOwnerRoleLabel()} • {ownerName}
                          </span>
                          <span className="text-[9px] font-mono text-zinc-500 uppercase">
                            {item.location}
                          </span>
                        </div>

                        <h3 className="text-white font-sans text-base md:text-lg font-black uppercase tracking-tight leading-snug group-hover:text-zinc-200 transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      {/* Sleek divider line */}
                      <div className="w-full h-px bg-white/5 my-1" />

                      <div className="flex items-center justify-between text-[10px] font-mono">
                        {getDomainText() && (
                          <span className="text-zinc-500 tracking-wider">
                            {getDomainText()}
                          </span>
                        )}
                        <span className="text-zinc-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          LIHAT DETAIL →
                        </span>
                      </div>

                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* CORE CTA CONVERSION ROW */}
        <div className="text-center pt-20 space-y-6">
          <div className="flex flex-col items-center">
            <a
              href={`${waLink}?text=${getCtaPlaceholder()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 px-12 py-5 text-black font-sans font-black text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 transform hover:scale-[1.04] active:scale-95 shadow-2xl cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
                boxShadow: `0 10px 25px ${theme.primary}30`
              }}
            >
              <PhoneCall className="w-4 h-4 text-black shrink-0 animate-bounce" />
              <span>{activeTemplate === "arsitetika-studio" ? "Konsultasi Gratis" : (data.rebateBtnText || "Konsultasi Gratis")}</span>
            </a>
          </div>
        </div>

      </div>

      {/* LUXURIOUS STRUCTURAL BLUEPRINT LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            
            {/* Dynamic glass backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              onClick={() => setSelectedProject(null)}
            />

            {/* Main Premium Blueprint Dialogue Board */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="relative w-full max-w-4xl bg-[#09090C] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.85)] z-10 flex flex-col md:grid md:grid-cols-12 max-h-[90vh]"
            >
              
              {/* Floating Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 z-50 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Column Left: Visual High-Res Frame */}
              <div className="md:col-span-6 relative bg-black flex flex-col justify-center overflow-hidden min-h-[300px] md:min-h-0">
                <img
                  src={selectedProject.path}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover md:absolute md:inset-0"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.src = getFallbackImage(selectedProject.id);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />
                
                {/* Embedded dynamic Specs layout details on image */}
                <div className="absolute bottom-6 left-6 right-6 space-y-2 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] bg-black/50 backdrop-blur-md px-3 py-1 rounded border border-white/10 w-fit block">
                    {selectedProject.location}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-sans font-black uppercase tracking-tight leading-none text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Column Right: Elegant Blueprint Certificate Details */}
              <div className="md:col-span-6 p-6 sm:p-8 md:p-10 flex flex-col justify-between overflow-y-auto max-h-[60vh] md:max-h-full bg-gradient-to-b from-[#09090C] to-[#040406] border-t md:border-t-0 md:border-l border-white/10">
                
                <div className="space-y-6">
                  
                  {/* Decorative Title certificate border */}
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5" style={{ color: theme.primary }} />
                    <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase font-bold">
                      SERTIFIKASI BLUEPRINT STRUKTUR
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-white font-serif-title font-bold text-2xl uppercase tracking-tight leading-none">
                      {selectedProject.styleTheme || selectedProject.title}
                    </h3>
                    
                    {/* Material Story Description Narrative */}
                    {selectedProject.designStory ? (
                      <p className="text-zinc-400 font-sans text-xs md:text-sm leading-relaxed text-justify">
                        {selectedProject.designStory}
                      </p>
                    ) : (
                      <p className="text-zinc-400 font-sans text-xs md:text-sm leading-relaxed text-justify">
                        Hasil pengerjaan fisik terverifikasi oleh tim arsitek dan pengawas konstruksi untuk menjamin pergerakan dan sirkulasi udara bersih, pencahayaan alami optimal, serta ketahanan jangka panjang yang bernilai investasi tinggi.
                      </p>
                    )}
                  </div>

                  {/* Blueprint Specifications Table Block */}
                  <div className="border border-white/5 rounded-2xl bg-black/50 overflow-hidden font-mono text-[10px] md:text-[11px]">
                    <div className="grid grid-cols-2 border-b border-white/5 p-3.5">
                      <span className="text-zinc-500 uppercase tracking-wider">PROJECT {getOwnerRoleLabel()}</span>
                      <span className="text-white font-bold text-right uppercase">{getOwnerName(selectedProject)}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-white/5 p-3.5">
                      <span className="text-zinc-500 uppercase tracking-wider">Tapak / Lokasi</span>
                      <span className="text-white font-bold text-right uppercase">{selectedProject.location}</span>
                    </div>
                    <div className="grid grid-cols-2 border-b border-white/5 p-3.5">
                      <span className="text-zinc-500 uppercase tracking-wider">Format Data</span>
                      <span className="text-emerald-400 font-bold text-right uppercase">{selectedProject.fileFormat || "Lossless Core Web"}</span>
                    </div>
                    <div className="grid grid-cols-2 p-3.5 bg-white/[0.01]">
                      <span className="text-zinc-500 uppercase tracking-wider">Ukuran Aset</span>
                      <span className="text-[#B88A6E] font-bold text-right uppercase">{selectedProject.dimensions || "1080 x 1350 px"}</span>
                    </div>
                  </div>

                  {/* Materials Tag List Section */}
                  {selectedProject.keyMaterials && selectedProject.keyMaterials.length > 0 && (
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-zinc-500" />
                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                          Material Unggulan:
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.keyMaterials.map((mat, i) => (
                          <span 
                            key={i} 
                            className="text-[9px] font-mono bg-white/5 border border-white/10 px-3 py-1 rounded-md text-zinc-200 uppercase font-semibold"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

                {/* Direct Action Link row */}
                <div className="pt-8 border-t border-white/5 mt-8 flex flex-col gap-3">
                  <a
                    href={getWhatsAppMessageLink(selectedProject)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3.5 px-8 py-4 text-black font-sans font-black text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-xl cursor-pointer"
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
                      boxShadow: `0 8px 20px ${theme.primary}20`
                    }}
                  >
                    <PhoneCall className="w-4 h-4 text-black animate-bounce" />
                    <span>Konsultasi Proyek Ini</span>
                  </a>
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-full text-center text-zinc-500 font-mono text-[9px] uppercase tracking-widest hover:text-white transition-colors py-2 cursor-pointer"
                  >
                    Tutup Spesifikasi
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
