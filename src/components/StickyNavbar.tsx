import React, { useState, useEffect } from "react";
import { Menu, X, MessageSquare, PhoneCall, Landmark, TrendingUp, Clapperboard } from "lucide-react";
import { useTemplate } from "../context/TemplateContext";
import { resolveMediaUrl } from "../utils";

export default function StickyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data, activeTemplate, theme } = useTemplate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Beranda", href: "#beranda" },
    { label: "Kualifikasi", href: "#kualifikasi" },
    { label: "Filosofi", href: "#tentang" },
    { label: "Layanan", href: "#layanan" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Paket", href: "#paket" },
    { label: "FAQ", href: "#faq" }
  ];

  const waLink = "https://wa.me/628138969965";

  // Get dynamic logo mark text & icon based on template
  const getLogoInfo = () => {
    switch (activeTemplate) {
      case "akademicrypto":
        return {
          text: "AC",
          icon: TrendingUp,
          color: "#00FC8B"
        };
      case "akademicreator":
        return {
          text: "MC",
          icon: Clapperboard,
          color: "#D846EF"
        };
      default:
        return {
          text: "RT",
          icon: Landmark,
          color: "#C5A880"
        };
    }
  };

  const logoInfo = getLogoInfo();
  const LogoIcon = logoInfo.icon;

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-luxury ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/5 py-3 shadow-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Section */}
          <a
            href="#beranda"
            className="flex items-center gap-3 md:gap-4 group"
            id="nav-logo"
          >
            <div 
              className="w-12 h-12 md:w-14 md:h-14 flex flex-col items-center justify-center relative overflow-hidden rounded-lg p-1 transition-colors border"
              style={{ 
                backgroundColor: theme.card,
                borderColor: `${theme.primary}25`
              }}
            >
              {activeTemplate === "arsitetika-studio" && (data.logoUrl || "/images/logo-rumah-tropis.webp") ? (
                <img
                  src={resolveMediaUrl(data.logoUrl || "/images/logo-rumah-tropis.webp")}
                  alt="Rumah Tropis Logo"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to text logo if image fails
                    (e.target as HTMLElement).style.display = 'none';
                    const parent = (e.target as HTMLElement).parentElement;
                    if (parent) {
                      const textEl = parent.querySelector('.fallback-lettermark');
                      if (textEl) textEl.classList.remove('hidden');
                    }
                  }}
                />
              ) : null}
              <div 
                className={`fallback-lettermark flex flex-col items-center justify-center ${activeTemplate === "arsitetika-studio" ? "hidden" : ""}`}
              >
                <LogoIcon className="w-5 h-5 mb-0.5" style={{ color: theme.primary }} />
                <span className="text-[10px] font-mono font-bold leading-none" style={{ color: theme.primary }}>
                  {logoInfo.text}
                </span>
              </div>
            </div>
            
            {/* Visual alignment of Logo details */}
            <div className="border-l pl-3 flex flex-col justify-center" style={{ borderColor: `${theme.primary}50` }}>
              <h1 className="text-white font-serif tracking-wide text-md md:text-lg font-bold uppercase leading-none transition-all duration-300">
                {data.name}
              </h1>
              <span className="text-xs font-sans tracking-widest uppercase mt-1 leading-none font-medium transition-all duration-300" style={{ color: theme.primary }}>
                {data.subName}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#A3A3A3] hover:text-white font-sans text-xs tracking-wider uppercase transition-colors relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:transition-all after:duration-300"
                style={{
                  // Accent style hover indicator
                  "--tw-after-background": theme.primary
                } as React.CSSProperties}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Call to Action Button */}
          <div className="hidden lg:block">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-black font-sans font-bold text-xs uppercase tracking-widest rounded-full transition-luxury hover:scale-[1.03] active:scale-95"
              style={{
                background: `linear-gradient(135s, ${theme.primary} 0%, ${theme.secondary} 100%)`,
                boxShadow: `0 8px 20px ${theme.primary}25`
              }}
            >
              <PhoneCall className="w-3.5 h-3.5 animate-bounce" />
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#A3A3A3] hover:text-white focus:outline-none p-2 border border-white/10 rounded-md"
            aria-label="Toggle Mobile Menu"
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 top-[60px] md:top-[85px] z-40 border-t border-white/5 flex flex-col justify-between p-8 animate-fade-in"
            style={{ backgroundColor: theme.bg }}
          >
            <div className="flex flex-col gap-6 py-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl text-[#A3A3A3] hover:text-[#C5A880] font-serif font-medium tracking-wide transition-colors py-1 block border-b border-white/5"
                  style={{
                    // Switcher color hover style
                    "--tw-hover-color": theme.primary
                  } as React.CSSProperties}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pb-12">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-3 py-4 text-black font-sans font-bold uppercase tracking-widest rounded-xl transition-all hover:scale-[1.02] shadow-xl"
                style={{
                  background: `linear-gradient(135s, ${theme.primary} 0%, ${theme.secondary} 100%)`
                }}
              >
                <PhoneCall className="w-4 h-4" />
                Konsultasi Gratis
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Floating Call-to-Action (Wajib Melayang dan Mengarah ke WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 group">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-black px-5 py-3.5 rounded-full shadow-2xl transition-luxury duration-300 transform hover:scale-105 hover:-translate-y-1"
          aria-label="WhatsApp Sticky Banner"
          id="floating-wa-btn"
          style={{
            backgroundColor: theme.primary,
            boxShadow: `0 15px 30px ${theme.primary}35`
          }}
        >
          <span className="text-[11px] md:text-xs font-bold uppercase tracking-widest pr-1 pl-1">
            Free Consultation
          </span>
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shadow-lg animate-pulse">
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ color: theme.primary }}
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.3 1.488 5.352 1.489 5.517 0 10.002-4.48 10.005-9.995.001-2.672-1.041-5.183-2.936-7.078-1.895-1.895-4.409-2.936-7.08-2.937-5.523 0-10.012 4.48-10.015 10.003-.001 2.155.562 4.254 1.631 6.096l-.991 3.615 3.738-.979s1.3.784 2.3.784zM16.5 12.85c-.247-.125-1.47-.723-1.696-.807-.228-.083-.393-.125-.558.125-.165.25-.637.807-.781.968-.145.163-.29.184-.537.06-.247-.125-1.045-.385-1.99-1.23-.73-.652-1.223-1.458-1.368-1.7-.145-.246-.015-.38.109-.502.112-.11.247-.29.37-.435.125-.145.165-.25.247-.417.082-.166.04-.312-.02-.437-.06-.125-.558-1.347-.765-1.848-.2-.486-.4-.411-.558-.42-.144-.01-.31-.01-.475-.01-.166 0-.434.062-.661.312-.227.25-.866.848-.866 2.067s.887 2.395.986 2.532c.1.137 1.745 2.664 4.225 3.736.59.255 1.05.408 1.41.52.593.189 1.133.162 1.558.1.475-.07 1.47-.6 1.677-1.18.207-.58.207-1.077.145-1.18-.06-.103-.227-.165-.475-.29z" />
            </svg>
          </div>
        </a>
      </div>
    </>
  );
}
