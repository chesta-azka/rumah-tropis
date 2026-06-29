import React from "react";
import { useTemplate } from "../context/TemplateContext";
import { Mail, Phone, MapPin, MessageCircle, Landmark, TrendingUp, Clapperboard } from "lucide-react";
import { resolveMediaUrl } from "../utils";

export default function FooterSection() {
  const { activeTemplate, data, theme } = useTemplate();
  const currentYear = new Date().getFullYear();

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
    <footer id="kontak" className="border-t border-white/5 relative z-10 pt-20 pb-12" style={{ backgroundColor: theme.bg }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column (5 Columns wide in desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-6 group">
                <div 
                  className="w-12 h-12 flex flex-col items-center justify-center relative overflow-hidden rounded-lg p-1 transition-colors border"
                  style={{ 
                    backgroundColor: theme.card || "rgba(0,0,0,0.6)",
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
                
                <div className="border-l pl-3 flex flex-col justify-center" style={{ borderColor: `${theme.primary}50` }}>
                  <h3 className="text-white font-serif tracking-wide text-md font-bold uppercase leading-none transition-all duration-300">
                    {data.name}
                  </h3>
                  {data.subName && (
                    <span className="text-xs font-sans tracking-widest uppercase mt-1 leading-none font-medium transition-all duration-300" style={{ color: theme.primary }}>
                      {data.subName}
                    </span>
                  )}
                </div>
              </div>

              {/* Teks Profil */}
              <p className="text-[#A3A3A3] text-xs sm:text-sm font-sans leading-relaxed text-justify pr-4">
                {data.footerProfile}
              </p>
            </div>

            <div className="mt-8 flex gap-3 text-zinc-600 text-xs font-mono">
              <span>{data.tagline.toUpperCase()}</span>
              <span>•</span>
              <span>OFFICIAL PROGRAM PARTNER</span>
            </div>
          </div>

          {/* Quick Links Column (3 Columns wide) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-serif-title text-sm font-bold uppercase tracking-wider mb-6">
              Navigasi Cepat
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a href="#beranda" className="text-[#A3A3A3] hover:text-white text-xs uppercase tracking-wider font-sans transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang" className="text-[#A3A3A3] hover:text-white text-xs uppercase tracking-wider font-sans transition-colors">
                  Filosofi
                </a>
              </li>
              <li>
                <a href="#layanan" className="text-[#A3A3A3] hover:text-white text-xs uppercase tracking-wider font-sans transition-colors">
                  Layanan Kami
                </a>
              </li>
              <li>
                <a href="#portofolio" className="text-[#A3A3A3] hover:text-white text-xs uppercase tracking-wider font-sans transition-colors">
                  Karya Portofolio
                </a>
              </li>
              <li>
                <a href="#paket" className="text-[#A3A3A3] hover:text-white text-xs uppercase tracking-wider font-sans transition-colors">
                  Program & Promo
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#A3A3A3] hover:text-white text-xs uppercase tracking-wider font-sans transition-colors">
                  FAQ Bantuan
                </a>
              </li>
              <li>
                <a href="?blog" className="text-[#A3A3A3] hover:text-white text-xs uppercase tracking-wider font-sans transition-colors">
                  Jurnal Arsitektur (Blog)
                </a>
              </li>
            </ul>
          </div>

          {/* Corporate Offices & Contact Column (4 Columns wide) */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-serif-title text-sm font-bold uppercase tracking-wider mb-6">
              Kantor Pusat & Kontak
            </h4>
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex gap-3.5 items-start">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: theme.primary }} />
                <div>
                  <span className="text-white/40 text-[9px] font-mono uppercase tracking-widest block mb-1">
                    Corporate Address
                  </span>
                  <p className="text-[#A3A3A3] text-xs font-sans leading-relaxed text-justify">
                    {data.footerAddress}
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="flex gap-3.5 items-start">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: theme.primary }} />
                <div>
                  <span className="text-white/40 text-[9px] font-mono uppercase tracking-widest block mb-1">
                    Direct Hotline
                  </span>
                  <a
                    href={`https://wa.me/${data.footerContact.replace(/[^0-9]/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline text-sm font-sans font-bold transition-colors block"
                    style={{ "--tw-hover-color": theme.primary } as React.CSSProperties}
                  >
                    {data.footerContact}
                  </a>
                </div>
              </div>

              {/* Email Address */}
              <div className="flex gap-3.5 items-start">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: theme.primary }} />
                <div>
                  <span className="text-white/40 text-[9px] font-mono uppercase tracking-widest block mb-1">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${data.footerEmail}`}
                    className="text-white hover:underline text-sm font-sans font-bold transition-colors block"
                    style={{ "--tw-hover-color": theme.primary } as React.CSSProperties}
                  >
                    {data.footerEmail}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Closing Copyright Footer */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-zinc-650 text-xs font-sans">
            &copy; {currentYear} {data.name} by {data.tagline}. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-zinc-500 text-[10px] sm:text-xs font-sans uppercase tracking-widest">
            <span>Privasi</span>
            <span>•</span>
            <span>Syarat & Ketentuan</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
