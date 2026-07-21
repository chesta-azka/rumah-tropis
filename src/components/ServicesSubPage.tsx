import React, { useEffect, useState } from "react";
import { useTemplate } from "../context/TemplateContext";
import { motion } from "motion/react";
import { 
  Compass, 
  Hammer, 
  Palette, 
  Sofa, 
  TreePine, 
  Ruler, 
  Layers, 
  Sparkles, 
  PhoneCall, 
  ShieldCheck, 
  CheckCircle2,
  Award,
  ArrowLeft,
  ChevronRight,
  Eye,
  Activity,
  Maximize2
} from "lucide-react";

interface ServicesSubPageProps {
  onBackToHome: () => void;
}

const SECTIONS = [
  { id: "architecture", label: "Architecture", num: "01" },
  { id: "interior", label: "Interior", num: "02" },
  { id: "landscape", label: "Landscape", num: "03" },
  { id: "furniture", label: "Furniture", num: "04" },
  { id: "all-in-design", label: "All-in-Design", num: "05" }
];

export default function ServicesSubPage({ onBackToHome }: ServicesSubPageProps) {
  const { theme } = useTemplate();
  const waLink = "https://wa.me/628138969965";
  const [activeSection, setActiveSection] = useState("architecture");

  // Auto scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Layanan Lengkap Arsitek & Interior | Rumah Tropis";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Pelajari lebih lanjut tentang layanan lengkap kami: arsitektur, interior, lanskap, custom furniture, dan layanan All-In Design dari Rumah Tropis.");
    }
  }, []);

  // Intersection Observer for scroll tracking
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px", // Focus in upper-middle viewport
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => {
      SECTIONS.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      // Offset accounts for StickyNavbar (~80px) + Horizontal Pill Nav (~60px)
      const navbarOffset = 160;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Framer Motion animation presets
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-stone-100 pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Exquisite ambient background lighting spotlights specifically tailored for high-end subpage feeling */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[180px] opacity-[0.1]" style={{ backgroundColor: "#B88A6E" }} />
        <div className="absolute top-[35%] right-[-15%] w-[800px] h-[800px] rounded-full blur-[200px] opacity-[0.08]" style={{ backgroundColor: "#5B6A56" }} />
        <div className="absolute bottom-[15%] left-[5%] w-[600px] h-[600px] rounded-full blur-[170px] opacity-[0.09]" style={{ backgroundColor: "#4D3C2F" }} />
        
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation Breadcrumb with Framer Motion hover */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <button
            onClick={onBackToHome}
            className="group flex items-center gap-2.5 text-[#A3A3A3] hover:text-white font-sans text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 cursor-pointer border border-white/5 bg-white/[0.01] px-5 py-2.5 rounded-full hover:bg-white/[0.04] hover:border-white/15"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1.5 text-[#B88A6E]" />
            Kembali ke Beranda
          </button>
        </motion.div>

        {/* High-End Floating Vertical Anchor Navigation for Desktop */}
        <div className="fixed left-6 2xl:left-12 top-[40%] -translate-y-1/2 z-40 hidden xl:flex flex-col gap-8 pl-4 border-l border-white/5 py-4">
          {SECTIONS.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="group flex items-center gap-4 text-left transition-all duration-300 cursor-pointer"
              >
                <span className={`font-mono text-xs tracking-wider transition-colors duration-300 ${
                  isActive ? "text-[#B88A6E] font-bold" : "text-zinc-500 group-hover:text-stone-300"
                }`}>
                  {section.num}
                </span>
                <div className="flex flex-col">
                  <span className={`font-sans text-[10px] uppercase tracking-[0.25em] transition-all duration-300 ${
                    isActive 
                      ? "text-white font-extrabold translate-x-1" 
                      : "text-zinc-400 group-hover:text-stone-200 group-hover:translate-x-0.5"
                  }`}>
                    {section.label}
                  </span>
                  <div className={`h-[1px] mt-1 transition-all duration-500 ${
                    isActive ? "w-12 bg-[#B88A6E]" : "w-0 bg-zinc-600 group-hover:w-6"
                  }`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Subpage Cinematic Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24 text-left max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 mb-5 border border-[#B88A6E]/30 px-4 py-1.5 rounded-full bg-[#B88A6E]/5">
            <Award className="w-3.5 h-3.5 text-[#B88A6E]" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#B88A6E] uppercase font-bold">Premium Deliverables</span>
          </div>
          <h1 className="text-white font-serif text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] mb-8">
            Layanan & Lingkup <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B88A6E] via-[#D4B299] to-[#8C644D]">Pekerjaan Kami</span>
          </h1>
          <div className="h-[1px] w-24 bg-gradient-to-r from-[#B88A6E] to-transparent mb-8" />
          <p className="text-zinc-400 font-sans text-sm sm:text-base md:text-xl leading-relaxed font-light max-w-3xl">
            Sinergi tanpa batas antara kemurnian konsepsual desain dan realisasi fisik yang tak kenal kompromi. Kami merangkai setiap impian ruang tinggal Anda menjadi warisan arsitektur bernilai estetika abadi.
          </p>
        </motion.div>

        {/* Sticky Horizontal Sub-Navigation for Smaller Screens */}
        <div className="sticky top-[72px] md:top-[80px] -mx-6 md:-mx-12 px-6 md:px-12 py-3.5 z-30 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 overflow-x-auto scrollbar-none flex gap-2 sm:gap-3 items-center xl:hidden transition-all duration-300 mb-16 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {SECTIONS.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-full font-sans text-[10px] sm:text-xs uppercase tracking-wider font-bold transition-all duration-300 shrink-0 cursor-pointer border ${
                  isActive 
                    ? "bg-[#B88A6E] text-[#000000] border-[#B88A6E] shadow-[0_4px_20px_rgba(184,138,110,0.25)]" 
                    : "bg-white/[0.02] text-zinc-400 border-white/5 hover:text-white hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <span className="font-mono text-[9px] mr-1.5 opacity-80">{section.num}.</span>
                {section.label}
              </button>
            );
          })}
        </div>

        {/* Vertically Arranged Services Stack with stagger effects */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-32 md:space-y-44"
        >

          {/* 1. ARCHITECTURE SECTION */}
          <motion.div 
            id="architecture"
            variants={itemVariants} 
            className="relative group scroll-mt-32 md:scroll-mt-44"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Header: Large Category Index & Title */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8 mb-16 gap-6">
              <div className="flex items-baseline gap-4 md:gap-8">
                <span className="text-5xl md:text-7xl font-serif text-white/5 font-black select-none leading-none tracking-tighter">01</span>
                <div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.3em] block mb-2 font-light">Category Spec</span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-widest uppercase font-medium leading-none">
                    ARCHITECTURE
                  </h3>
                </div>
              </div>
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.25em]">Comprehensive Structural Integrity</span>
            </div>

            {/* Two-Column Layout */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
              {/* Left Column - DESIGN */}
              <div className="group/card space-y-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-zinc-400 group-hover/card:text-[#B88A6E] transition-colors duration-500">
                    <Compass className="w-5 h-5 stroke-[1]" />
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 block mb-1">Phase 01</span>
                      <h4 className="text-[11px] font-sans uppercase tracking-[0.15em] text-white font-medium">DESIGN ARSITEKTUR</h4>
                    </div>
                  </div>
                </div>
                
                <div className="h-[1px] w-full bg-white/5" />
                
                <p className="text-zinc-400 font-sans text-sm leading-loose font-light text-left">
                  Mengartikulasikan kemewahan melalui komposisi spasial yang paripurna. Kami merancang mahakarya arsitektur yang melampaui sekadar fungsi—memadukan proporsi fasad yang elegan, orkestrasi sirkulasi udara alami, dan koreografi pencahayaan yang dramatis. Setiap garis desain ditarik dengan presisi untuk merespons iklim tropis, menciptakan hunian ikonis yang tak lekang oleh waktu.
                </p>

                <div className="flex flex-wrap gap-3 pt-2 mt-auto">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Site Analysis</span>
                  <span className="text-[9px] font-mono text-zinc-700">•</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Facade Engineering</span>
                  <span className="text-[9px] font-mono text-zinc-700">•</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Solar Passive Design</span>
                </div>
              </div>

              {/* Right Column - BUILD */}
              <div className="group/card space-y-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-zinc-400 group-hover/card:text-[#8A9A83] transition-colors duration-500">
                    <Hammer className="w-5 h-5 stroke-[1]" />
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 block mb-1">Phase 02</span>
                      <h4 className="text-[11px] font-sans uppercase tracking-[0.15em] text-white font-medium">BUILD ARSITEKTUR</h4>
                    </div>
                  </div>
                </div>
                
                <div className="h-[1px] w-full bg-white/5" />
                
                <p className="text-zinc-400 font-sans text-sm leading-loose font-light text-left">
                  Mewujudkan cetak biru menjadi struktur berskala monumental dengan integritas absolut. Mengandalkan keahlian konstruksi tingkat tinggi, material kelas satu, dan supervisi struktural yang ketat, kami mengawal setiap fase pembangunan tanpa kompromi. Garansi kami adalah translasi sempurna dari visi desain Anda menjadi realitas fisik yang tangguh dan memukau.
                </p>

                <div className="flex flex-wrap gap-3 pt-2 mt-auto">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Real Execution</span>
                  <span className="text-[9px] font-mono text-zinc-700">•</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Material Control</span>
                  <span className="text-[9px] font-mono text-zinc-700">•</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">QC Checklist Guarded</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 2. INTERIOR SECTION */}
          <motion.div 
            id="interior"
            variants={itemVariants} 
            className="relative group scroll-mt-32 md:scroll-mt-44"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Header: Large Category Index & Title */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8 mb-16 gap-6">
              <div className="flex items-baseline gap-4 md:gap-8">
                <span className="text-5xl md:text-7xl font-serif text-white/5 font-black select-none leading-none tracking-tighter">02</span>
                <div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.3em] block mb-2 font-light">Space Harmony</span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-widest uppercase font-medium leading-none">
                    INTERIOR
                  </h3>
                </div>
              </div>
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.25em]">Ergonomic Spatial Experience</span>
            </div>

            {/* Two-Column Layout */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
              {/* Left Column - DESIGN */}
              <div className="group/card space-y-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-zinc-400 group-hover/card:text-[#B88A6E] transition-colors duration-500">
                    <Palette className="w-5 h-5 stroke-[1]" />
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 block mb-1">Phase 01</span>
                      <h4 className="text-[11px] font-sans uppercase tracking-[0.15em] text-white font-medium">DESAIN INTERIOR</h4>
                    </div>
                  </div>
                </div>
                
                <div className="h-[1px] w-full bg-white/5" />
                
                <p className="text-zinc-400 font-sans text-sm leading-loose font-light text-left">
                  Menggubah simfoni kemewahan dalam setiap dimensi ruang. Kami memformulasikan desain interior yang berpusat pada pengalaman sensorik—mengawinkan ergonomi tingkat tinggi dengan kurasi material taktil, palet warna berkelas, dan skenario pencahayaan yang intim. Hasilnya adalah ruang privat yang memancarkan eksklusivitas sekaligus membisikkan karakter personal Anda.
                </p>

                <div className="flex flex-wrap gap-3 pt-2 mt-auto">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Spatial Aesthetics</span>
                  <span className="text-[9px] font-mono text-zinc-700">•</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Material Board Config</span>
                  <span className="text-[9px] font-mono text-zinc-700">•</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Bespoke Moodboard</span>
                </div>
              </div>

              {/* Right Column - BUILD */}
              <div className="group/card space-y-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-zinc-400 group-hover/card:text-[#8A9A83] transition-colors duration-500">
                    <ShieldCheck className="w-5 h-5 stroke-[1]" />
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 block mb-1">Phase 02</span>
                      <h4 className="text-[11px] font-sans uppercase tracking-[0.15em] text-white font-medium">BUILD INTERIOR</h4>
                    </div>
                  </div>
                </div>
                
                <div className="h-[1px] w-full bg-white/5" />
                
                <p className="text-zinc-400 font-sans text-sm leading-loose font-light text-left">
                  Mengeksekusi setiap detail interior dengan kehalusan pengerjaan bertaraf butik. Dari presisi instalasi hingga keunggulan finishing, tim craftsman kami mendaur ide menjadi realitas ruang yang flawless. Kami memastikan setiap sentuhan akhir menghadirkan sensasi kemewahan nyata yang langsung dapat Anda raba dan rasakan.
                </p>

                <div className="flex flex-wrap gap-3 pt-2 mt-auto">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Superb Detailing</span>
                  <span className="text-[9px] font-mono text-zinc-700">•</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Turnkey Fitout</span>
                  <span className="text-[9px] font-mono text-zinc-700">•</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Perfect Joints Guaranteed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. LANDSCAPE SECTION */}
          <motion.div 
            id="landscape"
            variants={itemVariants} 
            className="relative group scroll-mt-32 md:scroll-mt-44"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Header: Large Category Index & Title */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8 mb-16 gap-6">
              <div className="flex items-baseline gap-4 md:gap-8">
                <span className="text-5xl md:text-7xl font-serif text-white/5 font-black select-none leading-none tracking-tighter">03</span>
                <div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.3em] block mb-2 font-light">Nature Synthesis</span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-widest uppercase font-medium leading-none">
                    LANDSCAPE
                  </h3>
                </div>
              </div>
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.25em]">Outdoor Living Sanctuary</span>
            </div>

            {/* Two-Column Layout */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
              {/* Left Column - DESIGN */}
              <div className="group/card space-y-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-zinc-400 group-hover/card:text-[#B88A6E] transition-colors duration-500">
                    <TreePine className="w-5 h-5 stroke-[1]" />
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 block mb-1">Phase 01</span>
                      <h4 className="text-[11px] font-sans uppercase tracking-[0.15em] text-white font-medium">DESAIN LANDSCAPE</h4>
                    </div>
                  </div>
                </div>
                
                <div className="h-[1px] w-full bg-white/5" />
                
                <p className="text-zinc-400 font-sans text-sm leading-loose font-light text-left">
                  Mengorkestrasi elemen alam menjadi oase privat yang eksklusif. Kami merancang topografi luar ruang secara komprehensif—dari kurasi botani premium, integrasi water feature yang menenangkan, hingga struktur hardscape yang elegan. Desain lanskap kami hadir sebagai perpanjangan arsitektur bangunan, menciptakan tempat persembunyian tropis yang syahdu di rumah Anda.
                </p>

                <div className="flex flex-wrap gap-3 pt-2 mt-auto">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Microclimate Tuning</span>
                  <span className="text-[9px] font-mono text-zinc-700">•</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Softscape Botanical Spec</span>
                  <span className="text-[9px] font-mono text-zinc-700">•</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Bespoke Hardscape</span>
                </div>
              </div>

              {/* Right Column - BUILD */}
              <div className="group/card space-y-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-zinc-400 group-hover/card:text-[#8A9A83] transition-colors duration-500">
                    <Ruler className="w-5 h-5 stroke-[1]" />
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 block mb-1">Phase 02</span>
                      <h4 className="text-[11px] font-sans uppercase tracking-[0.15em] text-white font-medium">BUILD LANDSCAPE</h4>
                    </div>
                  </div>
                </div>
                
                <div className="h-[1px] w-full bg-white/5" />
                
                <p className="text-zinc-400 font-sans text-sm leading-loose font-light text-left">
                  Menghidupkan mahakarya ekologis di halaman Anda dengan teknik landscaping tingkat tinggi. Penguasaan kami atas rekayasa kontur, sistem irigasi cerdas, dan aklimatisasi vegetasi eksotis memastikan setiap elemen softscape dan hardscape tumbuh dan menyatu dengan sempurna, menghadirkan resor pribadi yang hidup dan asri.
                </p>

                <div className="flex flex-wrap gap-3 pt-2 mt-auto">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Mature Specimen Planting</span>
                  <span className="text-[9px] font-mono text-zinc-700">•</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Advanced Pool Filtration</span>
                  <span className="text-[9px] font-mono text-zinc-700">•</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Lush Oasis Complete</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4. FURNITURE SECTION */}
          <motion.div 
            id="furniture"
            variants={itemVariants} 
            className="relative group scroll-mt-32 md:scroll-mt-44"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Header: Large Category Index & Title */}
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-8 mb-16 gap-6">
              <div className="flex items-baseline gap-4 md:gap-8">
                <span className="text-5xl md:text-7xl font-serif text-white/5 font-black select-none leading-none tracking-tighter">04</span>
                <div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.3em] block mb-2 font-light">Artisanal Craft</span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-widest uppercase font-medium leading-none">
                    FURNITURE
                  </h3>
                </div>
              </div>
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.25em]">Millwork & Custom Joinery</span>
            </div>

            {/* Two-Column Layout */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
              {/* Left Column - DESIGN */}
              <div className="group/card space-y-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-zinc-400 group-hover/card:text-[#B88A6E] transition-colors duration-500">
                    <Sofa className="w-5 h-5 stroke-[1]" />
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 block mb-1">Phase 01</span>
                      <h4 className="text-[11px] font-sans uppercase tracking-[0.15em] text-white font-medium">DESAIN FURNITURE</h4>
                    </div>
                  </div>
                </div>
                
                <div className="h-[1px] w-full bg-white/5" />
                
                <p className="text-zinc-400 font-sans text-sm leading-loose font-light text-left">
                  Merancang mahakarya bespoke yang mentransformasi esensi sebuah ruang. Alih-alih terikat pada produksi massal, kami mendesain furnitur pesanan khusus dengan proporsi yang dikalibrasi secara presisi, ergonomi superior, dan detail material eksklusif yang diracik khusus untuk menyempurnakan gaya hidup spesifik dan tata ruang Anda.
                </p>

                <div className="flex flex-wrap gap-3 pt-2 mt-auto">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Ergonomic Precision</span>
                  <span className="text-[9px] font-mono text-zinc-700">•</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Timber & Metal Selection</span>
                  <span className="text-[9px] font-mono text-zinc-700">•</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Bespoke Furniture</span>
                </div>
              </div>

              {/* Right Column - BUILD */}
              <div className="group/card space-y-6 flex flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-zinc-400 group-hover/card:text-[#8A9A83] transition-colors duration-500">
                    <CheckCircle2 className="w-5 h-5 stroke-[1]" />
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-500 block mb-1">Phase 02</span>
                      <h4 className="text-[11px] font-sans uppercase tracking-[0.15em] text-white font-medium">BUILD FURNITURE</h4>
                    </div>
                  </div>
                </div>
                
                <div className="h-[1px] w-full bg-white/5" />
                
                <p className="text-zinc-400 font-sans text-sm leading-loose font-light text-left">
                  Memproduksi furnitur dengan standar craftsmanship tanpa celah. Menggunakan impeccable joinery, seleksi veneer kayu premium, dan lapisan akhir yang flawless, kami mengonstruksi kitchen set, walk-in closet, hingga wall panel yang tidak sekadar fungsional, tetapi menjadi pusaka estetik (statement pieces) di dalam ruang interior Anda.
                </p>

                <div className="flex flex-wrap gap-3 pt-2 mt-auto">
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Impeccable Joinery</span>
                  <span className="text-[9px] font-mono text-zinc-700">•</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Custom Veneers</span>
                  <span className="text-[9px] font-mono text-zinc-700">•</span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Premium Wood Finished</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 5. ALL IN DESIGN (Featured / Flagship Tier) */}
          <motion.div 
            id="all-in-design"
            variants={itemVariants} 
            className="relative group scroll-mt-32 md:scroll-mt-44"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Visual Distinction Container: Much simpler now */}
            <div className="relative pt-12 border-t border-[#B88A6E]/20">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-32 h-[1px] bg-[#B88A6E]" />
              
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 gap-6">
                <div className="flex items-baseline gap-4 md:gap-8">
                  <span className="text-5xl md:text-7xl font-serif text-[#B88A6E]/20 font-black select-none leading-none tracking-tighter">05</span>
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#B88A6E]" />
                      <span className="text-[9px] font-mono tracking-[0.25em] text-[#B88A6E] uppercase font-bold">The Ultimate Experience</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-widest uppercase font-medium leading-none">
                      ALL IN DESIGN
                    </h3>
                  </div>
                </div>
                <span className="text-[9px] font-mono text-[#B88A6E]/70 uppercase tracking-[0.3em] font-medium">One-Stop Solution</span>
              </div>

              {/* Two-Column Layout */}
              <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
                {/* Left Column - DESIGN */}
                <div className="group/flagcard space-y-6 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-zinc-400 group-hover/flagcard:text-[#B88A6E] transition-colors duration-500">
                      <Layers className="w-5 h-5 stroke-[1]" />
                      <div>
                        <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#B88A6E] block mb-1">Phase 01</span>
                        <h4 className="text-[11px] font-sans uppercase tracking-[0.15em] text-white font-medium">DESAIN ALL IN DESIGN</h4>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-[1px] w-full bg-white/5" />
                  
                  <p className="text-zinc-400 font-sans text-sm leading-loose font-light text-left">
                    Merangkum absolutisme visi properti Anda ke dalam satu sinkronisasi konsep tanpa celah (seamless integration). Kami mengorkestrasi arsitektur, interior, lanskap, dan furnitur kustom menjadi sebuah rancangan holistik (master blueprint) yang memiliki satu bahasa desain yang kuat, menjamin setiap transisi ruang mengalir dengan keanggunan paripurna.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2 mt-auto">
                    <span className="text-[9px] font-mono text-[#B88A6E]/70 uppercase tracking-widest">Total Synergy Blueprint</span>
                    <span className="text-[9px] font-mono text-zinc-700">•</span>
                    <span className="text-[9px] font-mono text-[#B88A6E]/70 uppercase tracking-widest">Zero Inconsistency</span>
                  </div>
                </div>

                {/* Right Column - BUILD */}
                <div className="group/flagcard space-y-6 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-zinc-400 group-hover/flagcard:text-[#B88A6E] transition-colors duration-500">
                      <Sparkles className="w-5 h-5 stroke-[1]" />
                      <div>
                        <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#B88A6E] block mb-1">Phase 02</span>
                        <h4 className="text-[11px] font-sans uppercase tracking-[0.15em] text-white font-medium">BUILD ALL IN DESIGN</h4>
                      </div>
                    </div>
                  </div>
                  
                  <div className="h-[1px] w-full bg-white/5" />
                  
                  <p className="text-zinc-400 font-sans text-sm leading-loose font-light text-left">
                    Menghadirkan layanan eksekusi end-to-end berskala turnkey dengan orkestrasi absolut. Dari penuangan fondasi pertama hingga penataan ornamen interior terakhir, seluruh progres dikendalikan di bawah satu manajemen terpadu (unified point of contact), mengeliminasi inefisiensi dan menjamin kemewahan mahakarya terbangun presisi 100% sesuai visi awal.
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2 mt-auto">
                    <span className="text-[9px] font-mono text-[#B88A6E]/70 uppercase tracking-widest">Turnkey Construction</span>
                    <span className="text-[9px] font-mono text-zinc-700">•</span>
                    <span className="text-[9px] font-mono text-[#B88A6E]/70 uppercase tracking-widest">Unified Point of Contact</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* Cinematic Bottom Conversion Callout */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mt-32 md:mt-44 relative flex flex-col items-center border-t border-white/5 pt-20"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 mb-2 bg-[#B88A6E]/10 border border-[#B88A6E]/20 px-3.5 py-1.5 rounded-full">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#B88A6E] uppercase font-bold">Start Your Journey</span>
            </div>
            <h4 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight">
              KONSULTASIKAN RENCANA <br />
              <span className="text-[#B88A6E]">PROPERTI PRESTISIUS ANDA</span>
            </h4>
            <p className="text-zinc-400 font-sans text-sm sm:text-base leading-relaxed font-light max-w-2xl mx-auto">
              Diskusikan visi, budget, dan preferensi arsitektur tropis Anda bersama tim ahli desainer & pembangun kami. Dapatkan analisis ruang awal secara menyeluruh.
            </p>
          </div>
          
          <div className="mt-12 relative select-none group/btn">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#B88A6E] to-[#4D3C2F] opacity-30 blur-xl group-hover/btn:opacity-60 transition duration-1000 group-hover/btn:duration-200" />
            <a
              href={`${waLink}?text=${encodeURIComponent('Halo Rumah Tropis, saya tertarik untuk mengkonsultasikan rencana layanan rancang dan pembangunan aset properti.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-12 py-5 font-sans font-bold text-xs uppercase tracking-[0.25em] text-[#000000] rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.03] active:scale-95 flex items-center gap-3.5"
              style={{
                background: "linear-gradient(135deg, #B88A6E 0%, #E6C2AC 100%)",
                boxShadow: "0 20px 40px rgba(184,138,110,0.15)"
              }}
            >
              {/* Luminous shimmer gloss effect */}
              <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)]" />
              
              <PhoneCall className="w-4 h-4 text-[#000000] relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative z-10 font-bold">
                Hubungi via WhatsApp
              </span>
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
