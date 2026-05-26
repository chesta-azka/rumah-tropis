import React from "react";
import { motion } from "motion/react";
import { useTemplate } from "../context/TemplateContext";
import { 
  PhoneCall, 
} from "lucide-react";

export default function WhyUsSection() {
  const { data, theme } = useTemplate();
  const waLink = "https://wa.me/628138969965";

  return (
    <section id="whyus" className="py-20 border-b border-white/[0.03] relative overflow-hidden" style={{ backgroundColor: theme.bg }}>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-[0.03]" style={{ backgroundColor: theme.primary }} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <h2 className="text-white font-serif-title font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none mb-6">
            {data.whyUsTitle || "KENAPA RUMAH TROPIS?"}
          </h2>
          <div className="w-20 h-0.5 mx-auto rounded-full" style={{ backgroundColor: theme.primary }} />
        </div>

        {/* Timeline Layout Container */}
        <div className="relative border-l-2 border-white/5 pl-8 md:pl-16 ml-4 sm:ml-6 md:ml-12 space-y-10 pb-12">
          
          {/* Vertical Lines Indicator */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#B88A6E] via-white/5 to-transparent pointer-events-none" />

          {data.whyUsParas.map((para, i) => (
            <motion.div 
              key={i} 
              className="relative group/timeline"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              
              {/* Chronological Number Pin */}
              <div 
                className="absolute -left-[41px] md:-left-[73px] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border font-mono text-xs md:text-sm font-bold z-10 shadow-lg"
                style={{ 
                  backgroundColor: "#050505",
                  borderColor: theme.primary,
                  color: theme.primary
                }}
              >
                <div>
                  #{String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Content Panel */}
              <div className="max-w-4xl bg-white/[0.02] border border-white/10 p-6 sm:p-8 rounded-3xl hover:border-white/[0.2] transition-all duration-300" style={{ borderLeft: `2px solid ${theme.primary}60` }}>
                 <p className="text-zinc-200 leading-relaxed font-sans text-base sm:text-lg max-w-2xl">
                   {para}
                 </p>
              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href={`${waLink}?text=Halo%20Rumah%20Tropis,%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20rancang%20dan%20bangun%20properti.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 font-sans font-black text-xs uppercase tracking-[0.25em] text-[#FEF9ED] rounded-xl transition-all duration-300 hover:scale-[1.02] border border-white/10 hover:border-white/20"
            style={{
              background: `linear-gradient(135deg, ${theme.primary} 0%, #1a1a1a 100%)`
            }}
          >
            <PhoneCall className="w-4 h-4" />
            <span>Konsultasi Gratis</span>
          </a>
        </div>
      </div>
    </section>
  );
}
