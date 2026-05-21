import React from "react";
import StickyNavbar from "./components/StickyNavbar";
import HeroSection from "./components/HeroSection";
import FilterSection from "./components/FilterSection";
import WhyUsSection from "./components/WhyUsSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import ExclusiveFacilities from "./components/ExclusiveFacilities";
import ComparisonSection from "./components/ComparisonSection";
import PortfolioSection from "./components/PortfolioSection";
import TestimonialSection from "./components/TestimonialSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#C5A880]/30 selection:text-white overflow-x-hidden antialiased">
      {/* 1. Sticky Navbar & Floating Actions */}
      <StickyNavbar />

      {/* Main Composition Grid */}
      <main>
        {/* 2. Hero Section (Headline & Video Utama) */}
        <HeroSection />

        {/* 3. Kualifikasi Filter Section */}
        <FilterSection />

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

        {/* 10. Testimonial WhatsApp Bubbles */}
        <TestimonialSection />

        {/* 11, 12, 13. Pricing Packages, Rebate Banner & Stephen Gardiner Quote */}
        <PricingSection />

        {/* 14. Support & FAQ Accordion */}
        <FAQSection />
      </main>

      {/* 15. Footer & Contacts */}
      <FooterSection />
    </div>
  );
}
