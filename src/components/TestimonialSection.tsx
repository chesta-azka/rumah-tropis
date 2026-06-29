import React, { useState, useEffect } from "react";
import { useTemplate } from "../context/TemplateContext";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X,
  MessageSquare
} from "lucide-react";

export default function TestimonialSection() {
  const { theme, activeTemplate, data } = useTemplate();
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const testimonials = data?.testimonials || [];
  const totalSlides = testimonials.length;

  // Reset slider index and images status when template changes
  useEffect(() => {
    setActiveSlide(0);
    setImgErrors({});
  }, [activeTemplate]);

  // Autoplay handler
  useEffect(() => {
    if (!isAutoPlay || totalSlides === 0) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  const handlePrev = () => {
    if (totalSlides === 0) return;
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    if (totalSlides === 0) return;
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  // Helper to dynamically resolve target paths
  const getTestimonialPath = (avatarPath: string) => {
    if (!avatarPath) return "";
    // Resolves both placeholder routes to the public testimonial assets
    return avatarPath.replace("/images/portfolio/", "/images/testimonial/");
  };

  const getSectionTexts = () => {
    if (activeTemplate === "arsitetika-studio") {
      return {
        label: "Testimonial",
        title: "Simak ulasan para klien",
        sub: "Bukan asal visualisasi 3D dan janji seperti kontraktor di pasaran luar, tetapi tim Rumah Tropis menghadirkan properti yang berhasil naik valuasinya lewat detail struktur yang kokoh."
      };
    }
    if (activeTemplate === "akademicrypto") {
      return {
        label: "BUKTI NYATA MEMBER",
        title: "Cerita Jujur Alumni",
        sub: "Bukan rekayasa screenshot demo atau janji kaya kilat tanpa usaha, tetapi bimbingan teknis analisis on-chain mendalam demi ketahanan aset yang berdaya saing."
      };
    }
    return {
      label: "BUKTI HASIL KREATOR",
      title: "Cerita Jujur Siswa Kami",
      sub: "Bukan asal membuat video viral sesaat, kurikulum penulisan naskah yang matang terbukti meningkatkan retensi audiens dan mendatangkan sponsor brand ternama."
    };
  };

  const textMeta = getSectionTexts();
  const currentItem = testimonials[activeSlide];

  return (
    <section id="testimonial" className="pt-16 pb-8 border-b border-white/[0.03] relative overflow-hidden bg-[#020204]" style={{ backgroundColor: theme.bg }}>
      
      {/* Absolute luxurious background effects */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px] bg-emerald-500/20" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[140px] bg-fuchsia-500/20" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-0 space-y-2">
          <span 
            className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] font-extrabold block"
            style={{ color: theme.primary }}
          >
            {textMeta.label}
          </span>
          <h2 className="text-white font-serif-title font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight leading-none text-center">
            {textMeta.title}
          </h2>
          <p className="text-zinc-400 font-sans text-xs md:text-sm leading-relaxed max-w-2xl mx-auto opacity-90 italic">
            "{textMeta.sub}"
          </p>
          <div className="w-12 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: theme.primary }} />
        </div>

        {/* Carousel Content */}
        {totalSlides > 0 && currentItem ? (
          <div className="max-w-md mx-auto relative px-8 sm:px-0 -mt-6">
            
            {/* Left Control Arrow */}
            <div className="absolute left-[-24px] sm:left-[-64px] top-[45%] -translate-y-1/2 z-30">
              <button 
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-[#1A1A22]/80 hover:bg-[#252530] text-white border border-white/10 hover:border-white/20 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-[1.08] active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 text-zinc-300" />
              </button>
            </div>

            {/* Right Control Arrow */}
            <div className="absolute right-[-24px] sm:right-[-64px] top-[45%] -translate-y-1/2 z-30">
              <button 
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-[#1A1A22]/80 hover:bg-[#252530] text-white border border-white/10 hover:border-white/20 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-[1.08] active:scale-95 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 text-zinc-300" />
              </button>
            </div>

            {/* Display Frameless Portrait Screenshot Container */}
            <div 
              className="relative group/card transition-all duration-500"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              <div className="relative w-full overflow-hidden flex items-center justify-center min-h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, scale: 0.98, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.98, x: -20 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.4}
                    onDragEnd={(e, info) => {
                      const swipeThreshold = 50;
                      if (info.offset.x > swipeThreshold) {
                        handlePrev();
                      } else if (info.offset.x < -swipeThreshold) {
                        handleNext();
                      }
                    }}
                    className="w-full h-full flex flex-col items-center justify-center cursor-grab active:cursor-grabbing select-none"
                  >
                    {!imgErrors[activeSlide] ? (
                      <img 
                        src={getTestimonialPath(currentItem.avatar)}
                        alt={`Testimonial screenshot`}
                        loading="lazy"
                        onError={() => {
                          setImgErrors(prev => ({ ...prev, [activeSlide]: true }));
                        }}
                        className="w-auto h-auto max-h-[80vh] max-w-full object-contain object-center pointer-events-none rounded-xl"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#0f0f13] flex flex-col justify-center items-center p-8 text-center space-y-4">
                        <div 
                          className="w-12 h-12 rounded-full flex items-center justify-center border text-[#B88A6E]"
                          style={{ color: theme.primary, borderColor: `${theme.primary}30`, backgroundColor: `${theme.primary}08` }}
                        >
                          <MessageSquare className="w-6 h-6" />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">
                            Screenshot Pending
                          </span>
                          <p className="text-[10px] font-mono text-zinc-400">
                            Path: <span className="bg-black/45 px-1.5 py-0.5 rounded text-xs select-all text-neutral-300 font-bold">{getTestimonialPath(currentItem.avatar)}</span>
                          </p>
                        </div>
                        <div className="max-w-xs bg-black/40 p-4 rounded-xl border border-white/5 mx-auto">
                          <p className="text-zinc-300 font-sans text-xs italic leading-relaxed">
                            "{currentItem.text}"
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Luminous interactive Magnifier Overlay on Hover */}
                    {!imgErrors[activeSlide] && (
                      <button 
                        onClick={() => setLightboxImage(getTestimonialPath(currentItem.avatar))}
                        className="absolute top-4 right-4 z-20 bg-black/80 hover:bg-black backdrop-blur-md rounded-full p-2.5 border border-white/10 hover:border-white/20 opacity-0 group-hover/card:opacity-100 transition-all duration-300 shadow-xl hover:scale-110 active:scale-95 pointer-events-auto cursor-pointer"
                        aria-label="Zoom screenshot"
                      >
                        <Maximize2 className="w-4 h-4 text-white" />
                      </button>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

            {/* Bullet List Navigation Indicators */}
            <div className="flex items-center justify-center gap-1.5 -mt-4 relative z-30 pb-4">
              {testimonials.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveSlide(dotIdx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === dotIdx 
                      ? 'scale-125' 
                      : 'bg-zinc-700/60 hover:bg-zinc-500'
                  }`}
                  style={{
                    backgroundColor: activeSlide === dotIdx ? theme.primary : undefined
                  }}
                  aria-label={`Lihat testimonial ${dotIdx + 1}`}
                />
              ))}
            </div>

          </div>
        ) : (
          <div className="text-center text-zinc-500 font-mono text-xs">
            Tidak ada data testimonial.
          </div>
        )}

      </div>

      {/* Full Lightbox Overlay Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex flex-col justify-center items-center p-4 cursor-zoom-out"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full max-h-[85vh] flex flex-col items-center bg-[#0d0d11] p-3 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              {/* Navigation tips */}
              <div className="absolute top-[-32px] left-0 right-0 flex justify-between items-center text-zinc-400 font-mono text-[10px] uppercase tracking-wider px-2 select-none pointer-events-none">
                <span>Testimonial</span>
                <span>Klik luar untuk menutup</span>
              </div>

              {/* Close Button */}
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 z-[110] bg-black/80 hover:bg-black p-2.5 rounded-full border border-white/10 hover:border-white/20 text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Robust Screenshot display panel */}
              <div className="w-full h-full overflow-y-auto rounded-xl bg-black flex justify-center items-center">
                <img 
                  src={lightboxImage} 
                  alt="Perbesaran ulasan" 
                  className="max-h-[75vh] w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
