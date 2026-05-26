import React from "react";
import { useTemplate } from "../context/TemplateContext";
import { Check, PhoneCall, Sparkles, Quote, HelpCircle } from "lucide-react";

export default function PricingSection() {
  const { data, theme, activeTemplate } = useTemplate();
  const waLink = "https://wa.me/628138969965";
  const pricingPackages = data.pricingPackages || [];

  return (
    <section id="paket" className="py-24 border-b border-white/[0.03] relative overflow-hidden" style={{ backgroundColor: theme.bg }}>
      
      {/* Absolute luxurious background element */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px]" style={{ backgroundColor: theme.primary }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* PRICING PACKAGES HEADER */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-white font-serif-title font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none">
            {data.pricingTitle}
          </h2>
          <p className="text-zinc-400 font-sans text-xs md:text-sm max-w-2xl mx-auto opacity-90">
            Pilih Layanan yang Paling Tepat Sesuai Kebutuhan Proyek
          </p>
          <div className="w-12 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: theme.primary }} />
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto mb-20 items-stretch font-sans">
          {pricingPackages.map((pkg) => {
            const isFeatured = pkg.popular || pkg.id.includes("all-in-package") || pkg.id.includes("pro");
            
            return (
              <div
                key={pkg.id}
                className="rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative group border overflow-hidden select-none"
                style={{
                  backgroundColor: theme.card,
                  borderColor: isFeatured ? theme.primary : "rgba(255,255,255,0.06)",
                  boxShadow: isFeatured ? `0 15px 40px ${theme.primary}20` : "none"
                }}
              >
                {/* Visual Diagonal Ribbon for BEST SELLER/POPULAR item */}
                {isFeatured && (
                  <div className="absolute top-0 right-0 overflow-hidden w-28 h-28 pointer-events-none">
                    <div className="absolute top-4 -right-10 bg-yellow-600 text-black text-[8px] font-black uppercase tracking-[0.12em] py-1.5 w-36 text-center rotate-45 shadow-sm">
                      Best Seller
                    </div>
                  </div>
                )}

                <div>
                  
                  {/* Top Price Badge / Sticker matching References */}
                  <div className="mb-6 flex flex-col items-start">
                    <div className="font-serif-title text-2xl lg:text-3xl font-black text-white tracking-tight leading-none mb-1">
                      {pkg.promoPrice.split(" ")[0]} <span className="text-[11px] font-sans font-medium text-zinc-400">/ m²</span>
                    </div>
                    
                    {/* Header Package Title */}
                    <h3 className="text-white font-serif-title text-sm lg:text-sm font-black uppercase tracking-widest mt-1 mb-2 leading-snug text-zinc-100 group-hover:text-white transition-colors duration-200">
                      {pkg.title}
                    </h3>
                  </div>

                  {/* Horizontal solid separator */}
                  <div className="border-t border-white/10 my-4" />

                  {/* Specification details label */}
                  <div className="text-[10px] font-bold text-zinc-300 uppercase tracking-widest mb-3.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" style={{ color: theme.primary }} />
                    <span>Termasuk :</span>
                  </div>

                  {/* Specification items detail list */}
                  <ul className="space-y-3 mb-6">
                    {pkg.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-[11px] sm:text-[11.5px] leading-relaxed">
                        <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: theme.primary }} />
                        <span className="text-zinc-400 font-sans leading-relaxed group-hover:text-zinc-300 transition-colors duration-200">
                          {spec}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button: Konsultasi Gratis (Tailored specifically for WhatsApp redirections) */}
                <div className="pt-5 border-t border-white/5 mt-auto">
                  <a
                    href={`${waLink}?text=Halo%2520Rumah%2520Tropis,%2520saya%2520tertarik%2520konsultasi%2520gratis%2520mengenai%2520rancangan%2520paket%2520${encodeURIComponent(pkg.title)}%2520dengan%2520promo%2520spesial`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-11 flex items-center justify-center gap-2 rounded-xl font-sans font-black text-[10px] uppercase tracking-widest transition-all duration-350 cursor-pointer"
                    style={
                      isFeatured
                        ? {
                            backgroundColor: theme.primary,
                            color: "#000000",
                            boxShadow: `0 4px 15px ${theme.primary}25`
                          }
                        : {
                            backgroundColor: "rgba(255, 255, 255, 0.04)",
                            color: "#FFFFFF",
                            border: "1px solid rgba(255,255,255,0.08)"
                          }
                    }
                  >
                    <PhoneCall className="w-3 h-3 shrink-0" />
                    <span>Konsultasi Gratis</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* REBATE BANNER matching "Lanjut ke Tahap Pembangunan Bersama Rumah Tropis? Seluruh Biaya Desain Akan Dikembalikan 100% Menjadi Gratis!" */}
        {/* REBATE BANNER */}
        <div className="max-w-4xl mx-auto mb-10 select-none">
            <div 
              className="rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden ring-1 ring-white/10"
              style={{ backgroundColor: theme.card }}
            >
              {/* Soft decorative background glow highlights */}
              <div 
                className="absolute top-0 right-0 w-64 h-64 rounded-bl-full pointer-events-none opacity-10" 
                style={{ backgroundColor: theme.primary }}
              />
              
              <div className="flex items-start md:items-center gap-5 relative z-10 max-w-xl">
                <div>
                  <h3 className="text-white font-serif-title text-base sm:text-lg md:text-xl font-black leading-snug uppercase tracking-wide whitespace-pre-line">
                    {data.rebateTitle || "MISSING TITLE"}
                  </h3>
                </div>
              </div>

              <a
                href={`${waLink}?text=Halo%2520Rumah%2520Tropis,%2520saya%2520tertarik%2520mewujudkan%2520pembangunan%2520dan%2520ingin%2520mengklaim%2520ongkos%2520desain%2520dikembalikan%2520100%2525%2520menjadi%2520gratis`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2.5 px-8 h-12 hover:opacity-90 font-sans font-black text-[10px] uppercase tracking-widest rounded-full transition-all duration-300 shadow-xl active:scale-95 cursor-pointer relative z-10"
                style={{
                  backgroundColor: theme.primary,
                  color: "#000000"
                }}
              >
                <PhoneCall className="w-3.5 h-3.5 shrink-0" />
                <span>Konsultasi Gratis</span>
              </a>
            </div>
        </div>

        {/* QUOTE SECTION */}
        {data.quoteText && (
          <div className="max-w-4xl mx-auto select-none mt-16">
            <div className="bg-[#090a12]/80 ring-1 ring-white/5 rounded-3xl p-8 md:p-12 shadow-2xl relative text-center relative overflow-hidden animate-fade-in">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-zinc-500/30 to-transparent" />
              <Quote className="w-8 h-8 mx-auto mb-6 opacity-35" style={{ color: theme.primary }} />
              <p className="text-zinc-200 font-serif-title italic text-base md:text-xl leading-relaxed max-w-3xl mx-auto mb-3">
                {data.quoteText}
              </p>
              <div className="w-12 h-0.5 mx-auto mt-6 mb-3 rounded-full opacity-30" style={{ backgroundColor: theme.primary }} />
              <span className="text-zinc-500 font-mono text-[10px] uppercase font-bold tracking-widest block mb-8">
                – {data.quoteAuthor}
              </span>

              {/* High-Fidelity Call-To-Action Button under Quote Matching Screenshots */}
              <div className="flex justify-center mt-3">
                <a
                  href={
                    activeTemplate === "akademicrypto"
                      ? `${waLink}?text=Halo%2520Akademi%2520Crypto,%2520saya%2520ingin%2520gabung%2520sekarang%2520belajar%2520on-chain`
                      : activeTemplate === "akademicreator"
                      ? `${waLink}?text=Halo%2520Akademi%2520Creator,%2520saya%2520tertarik%2520konsultasi%2520gratis%2520mewujudkan%2520personal%2520brand`
                      : `${waLink}?text=Halo%2520Rumah%2520Tropis,%2520saya%2520tertarik%2520berkonsultasi%2520desain%2520dan%2520struktur%2520bangunan`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-4 font-sans font-black text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 transform hover:scale-[1.04] active:scale-95 shadow-2xl cursor-pointer"
                  style={
                    activeTemplate === "akademicrypto"
                      ? {
                          background: "linear-gradient(135deg, #c084fc 0%, #7e22ce 100%)",
                          color: "#ffffff",
                          boxShadow: "0 10px 25px rgba(126, 34, 206, 0.4)"
                        }
                      : {
                          background: `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`,
                          color: "#000000",
                          boxShadow: `0 10px 25px ${theme.primary}30`
                        }
                  }
                >
                  {activeTemplate === "akademicrypto" ? (
                    <>
                      <span className="text-[10px] opacity-75">▶</span>
                      <span>Gabung Sekarang</span>
                      <span className="text-[10px] opacity-75">◀</span>
                    </>
                  ) : (
                    <>
                      <PhoneCall className="w-3.5 h-3.5 text-black shrink-0" />
                      <span>Konsultasi Gratis</span>
                    </>
                  )}
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
