import React, { useState } from "react";
import { useTemplate } from "../context/TemplateContext";
import { Plus, Minus, HelpCircle, PhoneCall } from "lucide-react";

export default function FAQSection() {
  const { data, theme, activeTemplate } = useTemplate();
  const faqs = data.faqs || [];
  const waLink = "https://wa.me/628138969965";

  const [openId, setOpenId] = useState<string | null>(faqs.length > 0 ? faqs[0].id : null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 border-b border-white/[0.03] relative" style={{ backgroundColor: theme.card }}>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute top-1/4 right-1/10 w-80 h-80 rounded-full blur-[90px]" 
          style={{ backgroundColor: `${theme.primary}05` }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] block mb-4 font-bold" style={{ color: theme.primary }}>
            {data.faqLabel}
          </span>
          <h2 className="text-white font-serif-title font-bold text-3xl md:text-4xl uppercase tracking-tight">
            {data.faqTitle}
          </h2>
          <div className="w-16 h-0.5 mx-auto mt-4" style={{ backgroundColor: theme.primary }} />
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-white/5 rounded-xl overflow-hidden transition-all duration-300"
                style={{ 
                  backgroundColor: theme.bg,
                }}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer transition-colors"
                >
                  <div className="flex gap-4 items-center pr-4">
                    <HelpCircle className="w-5 h-5 flex-shrink-0" style={{ color: theme.primary }} />
                    <span className="text-white font-serif-title font-bold text-sm md:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center transition-transform hover:scale-105">
                    {isOpen ? (
                      <Minus className="w-4 h-4" style={{ color: theme.primary }} />
                    ) : (
                      <Plus className="w-4 h-4" style={{ color: theme.primary }} />
                    )}
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-white/5 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="p-6 bg-black/10 text-[#A3A3A3] font-sans text-xs md:text-sm leading-relaxed text-justify">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button Block underneath FAQs matching structural requirements */}
        <div className="text-center mt-16 space-y-6 max-w-lg mx-auto">
          
          <div className="flex flex-col items-center">
            {activeTemplate === "arsitetika-studio" ? (
              <a
                href={`${waLink}?text=Halo%2520Rumah%2520Tropis,%2520saya%2520tertarik%2520konsultasi%2520gratis%2520desain%2520setelah%2520membaca%2520FAQ%2520website`}
                target="_blank"
                rel="noopener noreferrer"
                className="group/faqbtn relative px-12 py-5 font-sans font-black text-xs uppercase tracking-[0.25em] text-[#FEF9ED] rounded-xl overflow-hidden transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_rgba(184,138,110,0.25)] hover:scale-[1.03] active:scale-95 border border-[#B88A6E]/30 flex items-center gap-3.5 cursor-pointer"
              >
                {/* Elegant gradient background with copper and aged teak */}
                <div 
                  className="absolute inset-0 transition-opacity duration-500 group-hover/faqbtn:opacity-95"
                  style={{
                    background: "linear-gradient(135deg, #B88A6E 0%, #4D3C2F 100%)"
                  }}
                />
                {/* Luminous shimmer gloss effect */}
                <div className="absolute inset-0 opacity-0 group-hover/faqbtn:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(254,249,237,0.15)_0%,transparent_70%)]" />
                
                <PhoneCall className="w-4 h-4 text-[#FEF9ED] relative z-10 animate-pulse group-hover/faqbtn:scale-110 transition-transform" />
                <span className="relative z-10 transition-colors duration-300">
                  Konsultasi Gratis
                </span>
              </a>
            ) : (
              <a
                href={
                  activeTemplate === "akademicrypto"
                    ? `${waLink}?text=Halo%2520Akademi%2520Crypto,%2520saya%2520tertarik%2520bertanya%2520lebih%2520lanjut%2520tentang%2520pembelajaran%2520di%2520kelas`
                    : `${waLink}?text=Halo%2520Akademi%2520Creator,%2520saya%2520ingin%2520konsultasi%2520mengenai%2520cara%2520membangun%2520personal%2520brand`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-11 py-4.5 font-sans font-black text-xs uppercase tracking-[0.2em] rounded-full transition-all duration-300 transform hover:scale-[1.04] active:scale-95 shadow-2xl cursor-pointer"
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
                    <PhoneCall className="w-3.5 h-3.5 text-black shrink-0 animate-bounce" />
                    <span>Konsultasi Gratis</span>
                  </>
                )}
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
