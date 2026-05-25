import React from "react";
import { useTemplate } from "../context/TemplateContext";
import { 
  Award, 
  MessageSquare, 
  PhoneCall, 
  Video, 
  TrendingUp, 
  Compass, 
  ShieldCheck, 
  Layers, 
  Globe, 
  Sparkles, 
  Lock, 
  Volume2,
  CheckCircle,
  Clock,
  ArrowUpRight,
  TrendingDown,
  LineChart,
  Code,
  Users
} from "lucide-react";

export default function ExclusiveFacilities() {
  const { data, theme, activeTemplate } = useTemplate();
  const waLink = "https://wa.me/628138969965";

  const renderHighlightedDescription = (id: string, desc: string) => {
    return <span>{desc}</span>;
  };

  // Get Custom Headers and Titles based on template configurations
  const getHeaders = () => {
    if (activeTemplate === "arsitetika-studio") {
      return {
        label: "FASILITAS EKSKLUSIF PROYEK",
        title: "SEBAGAI KLIEN RESMI RUMAH TROPIS",
        subtitle: ""
      };
    }
    if (activeTemplate === "akademicrypto") {
      return {
        label: "BONUS YANG KALIAN DAPATKAN SERAH GABUNG MEMBER",
        title: "FASILITAS EKSKLUSIF MEMBER ELITE",
        subtitle: "Infrastruktur sinyal, pemantauan wallet whale instan, dan riset geopolitik makro murni untuk mengamankan porto keuangan Anda."
      };
    }
    return {
      label: "BONUS UNGGULAN & DUKUNGAN MEMBER",
      title: "HAK AKSES VIP AKADEMI CREATOR",
      subtitle: "Formula hook psikologis harian berskala jutaan penonton dan sesi group chat eksklusif bersama kreator papan atas."
    };
  };

  const headers = getHeaders();
  const facilities = data.facilities || [];

  return (
    <section id="fasilitas" className="py-24 border-b border-white/[0.03] relative overflow-hidden bg-[#030305]" style={{ backgroundColor: theme.bg }}>
      
      {/* Decorative premium glass circles in background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full blur-[150px] bg-[#B88A6E]/10" style={{ backgroundColor: `${theme.primary}08` }} />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[180px] bg-[#FFFFFF]/3" style={{ backgroundColor: `${theme.secondary}05` }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <span 
            className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] block font-extrabold transition-all duration-300"
            style={{ color: theme.primary }}
          >
            {headers.label}
          </span>
          <h2 className="text-white font-serif-title font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none mb-4">
            {headers.title}
          </h2>
          {headers.subtitle && (
            <p className="text-zinc-400 font-sans text-xs md:text-sm max-w-xl mx-auto tracking-normal leading-relaxed opacity-90">
              {headers.subtitle}
            </p>
          )}
          <div className="w-12 h-1 mx-auto mt-6 rounded-full" style={{ backgroundColor: theme.primary }} />
        </div>

        {/* Modular Feature Row mimicking Timothy's Custom UI Card Layer */}
        <div className="space-y-24 max-w-5xl mx-auto">
          {facilities.map((fac, idx) => {
            const isEven = idx % 2 === 1;
            
            return (
              <div 
                key={fac.id}
                className={activeTemplate === "arsitetika-studio"
                  ? "max-w-3xl mx-auto p-6 md:p-10 rounded-3xl border border-white/5 bg-[#09090C] transition-all duration-500 hover:border-white/10 shadow-2xl relative group"
                  : `grid lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 md:p-10 rounded-3xl border border-white/5 bg-[#09090C] transition-all duration-500 hover:border-white/10 shadow-2xl relative group`}
              >
                {/* Subtle border glow matching active theme on hover */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 rounded-3xl"
                  style={{
                    boxShadow: `inset 0 0 30px ${theme.primary}08, 0 10px 40px -20px ${theme.primary}10`,
                    borderColor: theme.primary,
                    borderWidth: '1px',
                    borderStyle: 'solid',
                  }}
                />

                {/* Left side / Right side descriptive text module */}
                <div className={activeTemplate === "arsitetika-studio"
                  ? "space-y-6 w-full"
                  : `space-y-6 lg:col-span-6 ${isEven ? "lg:order-2" : ""}`}>
                  
                  {/* Heading with Elegant Font and Number on the same line */}
                  <div className="flex flex-row items-start sm:items-center gap-3 sm:gap-4 mb-2">
                    <span 
                      className="text-3xl md:text-4xl font-mono font-black italic select-none shrink-0 leading-none"
                      style={{ 
                        color: theme.primary,
                        textShadow: `0 0 20px ${theme.primary}20`
                      }}
                    >
                      0{idx + 1}.
                    </span>
                    <h3 className="text-white font-serif-title text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight leading-none transition-colors">
                      {fac.title}
                    </h3>
                  </div>

                  {/* Parsed Custom Highlight Description */}
                  <p className="text-zinc-400 font-sans text-xs sm:text-sm md:text-[15px] leading-relaxed text-justify opacity-95">
                    {renderHighlightedDescription(fac.id, fac.description)}
                  </p>

                </div>

                {/* Left side / Right side visual interactive simulator (Custom Widget) */}
                {activeTemplate !== "arsitetika-studio" && (
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : ""} flex justify-center w-full`}>
                    
                    {/* Container representing high-fidelity mockup */}
                    <div className="w-full bg-[#050508] border border-white/5 rounded-2xl p-4 overflow-hidden relative shadow-2xl relative min-h-[220px] md:min-h-[260px] flex flex-col justify-between">
                      
                      {/* Background noise grid patterns */}
                      <div className="absolute inset-0 pointer-events-none bg-grid-pattern opacity-[0.02]" />

                      {/* WIDGET 1: Monthly Live / Live Progress Streaming Interface */}
                      {idx === 0 && (
                        <div className="w-full h-full flex flex-col justify-between h-[210px] md:h-[240px]">
                          
                          {/* Top live header bar */}
                          <div className="flex items-center justify-between border-b border-white/5 pb-2.5">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping shrink-0" />
                              <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-red-500">Live Streaming</span>
                            </div>
                            <span className="text-[9px] font-mono text-zinc-500 uppercase">FEED ID: RT-PROG-2026</span>
                          </div>

                          {/* Mid preview section depicting actual scene */}
                          <div className="my-3.5 flex-1 relative rounded-xl overflow-hidden bg-black border border-white/5 group-hover/widget:border-white/10 transition-colors">
                            <img 
                              src={
                                activeTemplate === "arsitetika-studio" 
                                  ? "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600" // construction site progress
                                  : activeTemplate === "akademicrypto" 
                                  ? "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=600" // podcast streaming duo
                                  : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600" // tablet analytics
                              } 
                              alt="Live report presentation"
                              className="w-full h-full object-cover filter grayscale contrast-115 brightness-90 transition-transform duration-[4000ms] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                            {/* Float Camera badge overlay */}
                            <div className="absolute bottom-2.5 left-3 px-2 py-1 bg-black/60 rounded-md border border-white/10 backdrop-blur-sm flex items-center gap-1.5 text-[9px] font-mono text-zinc-300">
                              <Video className="w-3 h-3 text-[#B88A6E]" style={{ color: theme.primary }} />
                              <span>
                                {activeTemplate === "arsitetika-studio" ? "CAM-03: SLAB FLOOR 2" : activeTemplate === "akademicrypto" ? "STUDIO AC: LIVE UPDATE" : "CREATOR AUDIT HUB"}
                              </span>
                            </div>

                            {/* Float viewers count */}
                            <div className="absolute top-2.5 right-3 px-2.5 py-0.5 bg-red-600/70 text-white font-bold rounded text-[9px] font-sans flex items-center gap-1.5">
                              <span>ONLINE</span>
                            </div>
                          </div>

                          {/* Interactive Status Footer */}
                          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono">
                            <div className="flex items-center gap-2 text-zinc-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              <span>
                                {activeTemplate === "arsitetika-studio" ? "Project Manager: Pak Budi" : activeTemplate === "akademicrypto" ? "Analyst: Timothy & Kali" : "Mentor: Content Strategist"}
                              </span>
                            </div>
                            <span className="text-zinc-500 uppercase">SYS STABLE 100%</span>
                          </div>

                        </div>
                      )}


                      {/* WIDGET 2: Real-time Macro Updates / Structural Safety Audit Analysis Graph */}
                      {idx === 1 && (
                        <div className="w-full h-full flex flex-col justify-between h-[210px] md:h-[240px]">
                          
                          {/* Top Header */}
                          <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <div className="flex items-center gap-2">
                              <span 
                                className="w-1.5 h-1.5 rounded-full" 
                                style={{ backgroundColor: theme.primary }}
                              />
                              <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-white">
                                {activeTemplate === "arsitetika-studio" ? "Structural Health Audit" : activeTemplate === "akademicrypto" ? "Timothy Ronald Advisory Feed" : "Viral Target Audit Sheet"}
                              </span>
                            </div>
                            <span className="text-[9px] font-mono text-zinc-500 uppercase">REAL-TIME TELEMETRY</span>
                          </div>

                          {/* Middle Content Sandbox */}
                          <div className="my-3 flex-1 flex flex-col justify-center relative bg-black/60 rounded-xl border border-white/5 p-3.5 space-y-3 overflow-hidden">
                            
                            {activeTemplate === "arsitetika-studio" ? (
                              // RUMAH TROPIS: Curing graph & structural integrity index
                              <div className="space-y-3.5 w-full">
                                
                                {/* Strengths indicators */}
                                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                                  <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2">
                                    <span className="text-zinc-500 block uppercase">Beton Target</span>
                                    <span className="text-[#5B6A56] font-extrabold block text-xs">MUTU K-350</span>
                                  </div>
                                  <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2">
                                    <span className="text-zinc-500 block uppercase">Cek Slump</span>
                                    <span className="text-white font-extrabold block text-xs">12 cm (PASSED)</span>
                                  </div>
                                </div>

                                {/* Simple SVG diagram mimicking curing days (increasing curve) */}
                                <div className="relative h-16 w-full bg-[#050508] rounded-lg overflow-hidden border border-white/5 pb-2">
                                  <div className="absolute top-2 left-2.5 text-[8px] font-mono text-zinc-500 uppercase">Pemberatan Kekuatan Struktur (28 Hari Curing)</div>
                                  <svg className="w-full h-full" viewBox="0 0 200 40">
                                    <path 
                                      d="M0,35 Q50,30 100,18 T200,5" 
                                      fill="none" 
                                      stroke={theme.primary} 
                                      strokeWidth="2"
                                    />
                                    <circle cx="100" cy="18" r="3" fill="#ffffff" />
                                    <circle cx="200" cy="5" r="3" fill="#5B6A56" />
                                  </svg>
                                  <div className="absolute right-2 bottom-1.5 text-[8.5px] font-mono text-[#5B6A56]">Integrity: 98.4%</div>
                                </div>

                              </div>
                            ) : activeTemplate === "akademicrypto" ? (
                              // AKADEMI CRYPTO: Timothy Ronald message feed overlay (mirroring screenshot 2)
                              <div className="space-y-2.5 w-full relative z-15">
                                
                                {/* Background abstract World map styled beautifully */}
                                <div className="absolute inset-0 opacity-[0.12] pointer-events-none flex items-center justify-center">
                                  <svg className="w-44 h-28" viewBox="0 0 100 50" fill="none" stroke="currentColor">
                                    <path d="M10,20 Q15,10 25,22 T50,15 T75,25" strokeWidth="0.5" strokeDasharray="2" />
                                    <circle cx="25" cy="22" r="2" fill="red" />
                                    <circle cx="50" cy="15" r="2" fill="red" />
                                    <circle cx="75" cy="25" r="1.5" fill="red" />
                                  </svg>
                                </div>

                                {/* Telegram dialog overlay bubble 1 */}
                                <div className="bg-[#12121e]/90 border border-white/10 rounded-xl p-2.5 space-y-1 relative shadow-lg">
                                  <div className="flex items-center justify-between text-[8px] font-mono">
                                    <span className="text-[#a855f7] font-black">Timothy Ronald 👑</span>
                                    <span className="text-zinc-500">08/04/26, 21:05</span>
                                  </div>
                                  <p className="text-[9.5px] font-sans text-zinc-200 leading-normal">
                                    Ceasefire us iran baru di-announce hari ini, tapi kelihatannya kapal kapal belom bisa lewat hormuz. Oil berpotensi koreksi sehat...
                                  </p>
                                </div>

                                {/* Telegram dialogue overlay bubble 2 */}
                                <div className="bg-[#12121e]/95 border border-[#00FC8B]/20 rounded-xl p-2.5 space-y-1 shadow-lg ml-3">
                                  <div className="flex items-center justify-between text-[8px] font-mono">
                                    <span className="text-[#00FC8B] font-black">AC Research Alert</span>
                                    <span className="text-zinc-500">02/04/26, 18:32</span>
                                  </div>
                                  <p className="text-[9.5px] font-sans text-zinc-200 leading-normal">
                                    Oil naik ke level <strong className="text-yellow-400">$110</strong> ketika Trump mau retaliasi. Amankan cash minimal 20% untuk jaga-jaga.
                                  </p>
                                </div>

                              </div>
                            ) : (
                              // AKADEMI CREATOR: WhatsApp creator audit dialog mock
                              <div className="space-y-2.5 w-full">
                                <div className="bg-[#24133d] border border-white/5 rounded-xl p-3 space-y-1">
                                  <div className="flex justify-between text-[8px] font-mono text-[#D846EF] font-bold">
                                    <span>Creator Group Chat</span>
                                    <span>Now</span>
                                  </div>
                                  <p className="text-[10px] text-zinc-300">
                                    "Video Reels Anda pecah di 3 detik pertama karena hook kurang gerak. Ganti b-roll tumpukan dolar di detik satu."
                                  </p>
                                </div>
                                <div className="bg-[#190c2a] border border-white/5 rounded-xl p-2 text-[9px] font-mono text-zinc-400 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                  <span>Rekomun: Retention Rate melompat ke +45%</span>
                                </div>
                              </div>
                            )}

                          </div>

                          {/* Safety Lock Indicator */}
                          <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[9px] font-mono text-zinc-500 uppercase">
                            <span className="flex items-center gap-1">
                              <Lock className="w-3 h-3 text-zinc-500" />
                              <span>ENCRYPTED CONNECTION</span>
                            </span>
                            <span>LEVEL D-ALPHA CONTROL</span>
                          </div>

                        </div>
                      )}


                      {/* WIDGET 3: TradingView Custom Candlestick Charts or 3D House Layout Blueprint elevation projections */}
                      {idx === 2 && (
                        <div className="w-full h-full flex flex-col justify-between h-[210px] md:h-[240px]">
                          
                          {/* Top Header */}
                          <div className="flex items-center justify-between border-b border-white/5 pb-2">
                            <div className="flex items-center gap-2">
                              <span 
                                className="w-1.5 h-1.5 rounded-full" 
                                style={{ backgroundColor: theme.primary }}
                              />
                              <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-white">
                                {activeTemplate === "arsitetika-studio" ? "Tropical Blueprint elevation Model" : "TradingView Pro Terminal"}
                              </span>
                            </div>
                            <span className="text-[9px] font-mono text-zinc-500 uppercase">MODEL M-12 VECTORS</span>
                          </div>

                          {/* Interactive Main Body */}
                          <div className="my-3 flex-1 bg-black rounded-lg overflow-hidden border border-white/5 flex flex-col justify-between relative p-3">
                            
                            {activeTemplate === "arsitetika-studio" ? (
                              // RUMAH TROPIS: SVG blueprint line structure and asset appreciation scale
                              <div className="w-full h-full flex flex-col justify-between">
                                
                                {/* Simple glowing outline blueprint wireframe of house */}
                                <div className="h-20 w-full relative bg-[#030305] rounded border border-white/5 flex items-center justify-center overflow-hidden">
                                  <div className="absolute top-1 left-2 text-[7px] font-mono text-[#B88A6E]/70 uppercase">FRONT ELEVATION VIEW GRID</div>
                                  <svg className="w-24 h-16 opacity-80" viewBox="0 0 100 50">
                                    <line x1="10" y1="40" x2="90" y2="40" stroke="#444" strokeWidth="1" />
                                    <rect x="25" y="20" width="50" height="20" fill="none" stroke="#B88A6E" strokeWidth="1" strokeDasharray="1,1" />
                                    <polygon points="20,20 50,5 80,20" fill="none" stroke="#FAF3E8" strokeWidth="1" />
                                    <line x1="50" y1="5" x2="50" y2="40" stroke="#444" strokeWidth="0.5" strokeDasharray="3,3" />
                                    <circle cx="35" cy="30" r="4" fill="none" stroke="#B88A6E" strokeWidth="0.5" />
                                    <circle cx="65" cy="30" r="4" fill="none" stroke="#B88A6E" strokeWidth="0.5" />
                                  </svg>
                                  <div className="absolute right-1.5 bottom-1 text-[7px] font-mono text-zinc-600 uppercase">W: 12.5m x L: 28m</div>
                                </div>

                                {/* Asset appreciation meter */}
                                <div className="space-y-1 pt-1.5">
                                  <div className="flex justify-between text-[8px] font-mono text-zinc-400">
                                    <span>Rencana Anggaran Lapangan</span>
                                    <span className="text-[#B88A6E]">Skenario Apresiasi Aset 10 thn</span>
                                  </div>
                                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden flex">
                                    <div className="h-full bg-zinc-600" style={{ width: '35%' }} />
                                    <div className="h-full bg-gradient-to-r from-[#B88A6E] to-[#FAF3E8]" style={{ width: '65%' }} />
                                  </div>
                                  <div className="flex justify-between text-[9px] font-mono text-zinc-500">
                                    <span>HPP: Rp 3.8 Miliar</span>
                                    <span className="text-white font-extrabold">Value: Rp 12.5+ Miliar</span>
                                  </div>
                                </div>

                              </div>
                            ) : (
                              // AKADEMI CRYPTO & CREATOR: Candle Chart Mockups (TradingView style as shown in photo 1!)
                              <div className="w-full h-full flex flex-col justify-between">
                                
                                {/* Miniature Candlestick chart */}
                                <div className="flex-1 bg-[#050508] border border-white/5 rounded p-2 flex flex-col justify-between relative">
                                  
                                  <div className="flex items-center justify-between text-[8.5px] font-mono text-zinc-500">
                                    <span className="text-[#00FC8B] font-bold">BTCUSD, 4h</span>
                                    <span>O: 70,120 H: 71,480 L: 69,820 C: 70,450</span>
                                  </div>

                                  <div className="relative h-16 w-full mt-1.5">
                                    {/* Grid background lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                                      <div className="h-px bg-white/10" />
                                      <div className="h-px bg-white/10" />
                                      <div className="h-px bg-white/10" />
                                    </div>

                                    {/* Drawing simple customized styled candles */}
                                    <div className="absolute inset-0 flex items-end justify-around pb-2.5">
                                      {/* Candle 1 (Green) */}
                                      <div className="flex flex-col items-center h-12 w-2.5 justify-center relative">
                                        <div className="w-[1.5px] h-12 bg-emerald-400 absolute" />
                                        <div className="w-2.5 h-6 bg-emerald-500 rounded-sm z-10" />
                                      </div>
                                      {/* Candle 2 (Green) */}
                                      <div className="flex flex-col items-center h-12 w-2.5 justify-center relative pb-2">
                                        <div className="w-[1.5px] h-12 bg-emerald-400 absolute" />
                                        <div className="w-2.5 h-7 bg-emerald-500 rounded-sm z-10" />
                                      </div>
                                      {/* Candle 3 (Red) */}
                                      <div className="flex flex-col items-center h-12 w-2.5 justify-center relative pt-1">
                                        <div className="w-[1.5px] h-10 bg-red-400 absolute" />
                                        <div className="w-2.5 h-5 bg-pink-600 rounded-sm z-10" />
                                      </div>
                                      {/* Candle 4 (Red) */}
                                      <div className="flex flex-col items-center h-12 w-2.5 justify-center relative pt-3">
                                        <div className="w-[1.5px] h-10 bg-red-400 absolute" />
                                        <div className="w-2.5 h-7 bg-pink-600 rounded-sm z-10 animate-pulse" />
                                      </div>
                                    </div>

                                    {/* Target Support/Resistance Pink Translucent Zone overlays */}
                                    <div className="absolute top-2 left-6 right-6 h-3 bg-red-500/10 border border-red-500/20 rounded backdrop-blur-[0.5px] flex items-center justify-center">
                                      <span className="text-[7px] font-mono text-red-400 uppercase tracking-widest font-black">Resistance Block H4</span>
                                    </div>
                                  </div>

                                  {/* Floating alert box overlay from Kalimasada mimicking image 1 */}
                                  <div className="absolute bottom-1 left-1.5 right-1.5 bg-[#090910]/95 border border-white/10 p-1 rounded backdrop-blur-sm shadow-xl">
                                    <div className="flex items-center justify-between text-[7px] font-mono">
                                      <span className="text-[#00FC8B] font-extrabold">Kalimasada ⚡</span>
                                      <span>H4 Alert</span>
                                    </div>
                                    <p className="text-[8px] text-zinc-300 leading-[1.1] font-sans">
                                      Rejection di area significant. Timeframe pendek berpotensi koreksi.
                                    </p>
                                  </div>

                                </div>

                              </div>
                            )}

                          </div>

                          {/* Status bar */}
                          <div className="flex items-center justify-between pt-1 text-[9px] font-mono text-zinc-500 uppercase">
                            <span>Verified Analytics</span>
                            <span>UTC ACTIVE CLOCK</span>
                          </div>

                        </div>
                      )}

                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Beautiful bottom CTA Button block at the end of Exclusive Facilities */}
        {activeTemplate === "arsitetika-studio" ? (
          <div className="text-center mt-20 relative select-none flex flex-col items-center">
            <a
              href="https://wa.me/628138969965?text=Halo%20Rumah%20Tropis,%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20rancang%20dan%20bangun%2520properti."
              target="_blank"
              rel="noopener noreferrer"
              className="group/facbtn relative px-10 py-5 font-sans font-black text-xs uppercase tracking-[0.25em] text-[#FEF9ED] rounded-xl overflow-hidden transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(184,138,110,0.25)] hover:scale-[1.03] active:scale-95 border border-[#B88A6E]/30 flex items-center gap-3"
            >
              {/* Elegant gradient background with copper and aged teak */}
              <div 
                className="absolute inset-0 transition-opacity duration-500 group-hover/facbtn:opacity-95"
                style={{
                  background: "linear-gradient(135deg, #B88A6E 0%, #4D3C2F 100%)"
                }}
              />
              {/* Luminous shimmer gloss effect */}
              <div className="absolute inset-0 opacity-0 group-hover/facbtn:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(254,249,237,0.15)_0%,transparent_70%)]" />
              
              <PhoneCall className="w-4 h-4 text-[#FEF9ED] relative z-10 animate-pulse group-hover/facbtn:scale-110 transition-transform" />
              <span className="relative z-10 transition-colors duration-300">
                Konsultasi Gratis
              </span>
            </a>
          </div>
        ) : (
          <div className="text-center mt-20 relative select-none flex flex-col items-center">
            <a
              href={`${waLink}?text=Halo,%20saya%20tertarik%20dengan%20fasilitas%20VIP`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 text-black font-sans font-extrabold text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 transform hover:scale-[1.04] active:scale-95 shadow-xl hover:shadow-2xl cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
                boxShadow: `0 10px 30px ${theme.primary}40`
              }}
            >
              <PhoneCall className="w-4.5 h-4.5 animate-bounce text-black shrink-0" />
              <span>Konsultasi Gratis</span>
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
