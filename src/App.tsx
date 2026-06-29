import React, { Suspense, lazy } from "react";
import StickyNavbar from "./components/StickyNavbar";
import HeroSection from "./components/HeroSection";
import FilterSection from "./components/FilterSection";
import { useTemplate } from "./context/TemplateContext";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

// Lazy loaded components for improved initial load speed
const WhyUsSection = lazy(() => import("./components/WhyUsSection"));
const StatsSection = lazy(() => import("./components/StatsSection"));
const ServicesSection = lazy(() => import("./components/ServicesSection"));
const ExclusiveFacilities = lazy(() => import("./components/ExclusiveFacilities"));
const ComparisonSection = lazy(() => import("./components/ComparisonSection"));
const PortfolioSection = lazy(() => import("./components/PortfolioSection"));
const TestimonialSection = lazy(() => import("./components/TestimonialSection"));
const PricingSection = lazy(() => import("./components/PricingSection"));
const FAQSection = lazy(() => import("./components/FAQSection"));
const FooterSection = lazy(() => import("./components/FooterSection"));

export default function App() {
  const { activeTemplate } = useTemplate();

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#B88A6E]/30 selection:text-white overflow-x-hidden antialiased font-sans">
      {/* Dynamic Exquisite 5-Color Ambient Background Spotlights specifically tailored for Rumah Tropis */}
      {activeTemplate === "arsitetika-studio" && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Spotlight 1: Premium Copper-Bronze (#B88A6E) top left */}
          <div 
            className="absolute top-[2%] left-[-15%] w-[550px] h-[550px] rounded-full blur-[140px] opacity-[0.22] transition-colors duration-1000 animate-pulse"
            style={{ backgroundColor: "#B88A6E" }}
          />
          {/* Spotlight 2: Rainforest Moss (#5B6A56) behind qualifications */}
          <div 
            className="absolute top-[18%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.16] transition-colors duration-1000"
            style={{ backgroundColor: "#5B6A56" }}
          />
          {/* Spotlight 3: Aged Teak (#4D3C2F) behind Stats & Services */}
          <div 
            className="absolute top-[35%] left-[-8%] w-[580px] h-[580px] rounded-full blur-[130px] opacity-[0.25] transition-colors duration-1000"
            style={{ backgroundColor: "#4D3C2F" }}
          />
          {/* Spotlight 4: Sandy Travertine (#F5E6D3) behind Portfolio & Testimonials */}
          <div 
            className="absolute top-[58%] right-[-12%] w-[650px] h-[650px] rounded-full blur-[160px] opacity-[0.14] transition-colors duration-1000 animate-pulse"
            style={{ backgroundColor: "#F5E6D3" }}
          />
          {/* Spotlight 5: Filtered Sunbeam (#FEF9ED) bottom center behind FAQ */}
          <div 
            className="absolute bottom-[2%] left-[10%] w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.15] transition-colors duration-1000"
            style={{ backgroundColor: "#FEF9ED" }}
          />
        </div>
      )}

      {/* 1. Sticky Navbar & Floating Actions */}
      <StickyNavbar />

      {/* Main Composition Grid */}
      <main className="relative z-10">
        {/* 2. Hero Section (Headline & Video Utama) */}
        <HeroSection />

        {/* 3. Kualifikasi Filter Section */}
        <FilterSection />

        <Suspense fallback={<div className="h-20 w-full bg-[#050505]" />}>
          {/* 4. Alasan Utama "Kenapa Rumah Tropis?" */}
          <WhyUsSection />

          {/* 5. Statistik Pencapaian Counter */}
          <StatsSection />

          {/* 6. Layanan Utama Core Services */}
          <ServicesSection />

          {/* 7. Fasilitas Eksklusif Klien */}
          <ExclusiveFacilities />

          {/* 8. Komparasi Dua Sisi Nilai */}
          <ComparisonSection />

          {/* 9. Portfolio Masterpiece Grid */}
          <PortfolioSection />

          {/* 10. Testimonial WhatsApp Bubbles / Photos */}
          <TestimonialSection />

          {/* 11, 12, 13. Pricing Packages, Rebate Banner & Stephen Gardiner Quote */}
          <PricingSection />

          {/* 14. Support & FAQ Accordion */}
          <FAQSection />
        </Suspense>
        <SpeedInsights />
        <Analytics />
      </main>

      <Suspense fallback={<div className="h-20 w-full bg-[#050505]" />}>
        {/* 15. Footer & Contacts */}
        <FooterSection />
      </Suspense>
    </div>
  );
}
