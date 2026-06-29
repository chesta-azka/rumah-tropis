import React, { Suspense, lazy, useState, useEffect } from "react";
import StickyNavbar from "./components/StickyNavbar";
import HeroSection from "./components/HeroSection";
import FilterSection from "./components/FilterSection";
import { useTemplate } from "./context/TemplateContext";

// Lazy loaded components for improved initial load speed
const WhyUsSection = lazy(() => import("./components/WhyUsSection"));
const ServicesSection = lazy(() => import("./components/ServicesSection"));
const PortfolioSection = lazy(() => import("./components/PortfolioSection"));
const PricingSection = lazy(() => import("./components/PricingSection"));
const StatsSection = lazy(() => import("./components/StatsSection"));
const TestimonialSection = lazy(() => import("./components/TestimonialSection"));
const FAQSection = lazy(() => import("./components/FAQSection"));
const FooterSection = lazy(() => import("./components/FooterSection"));
const ComparisonSection = lazy(() => import("./components/ComparisonSection"));
const ExclusiveFacilities = lazy(() => import("./components/ExclusiveFacilities"));
const BlogPage = lazy(() => import("./components/BlogPage"));

export default function App() {
  const { activeTemplate } = useTemplate();
  const getUrlState = () => {
    const pathname = window.location.pathname;

    // Handle old hash links
    if (window.location.hash.startsWith("#blog")) {
      const slug = window.location.hash.startsWith("#blog/") ? window.location.hash.replace("#blog/", "") : undefined;
      const newUrl = slug ? `/blog/${slug}` : `/blog`;
      window.history.replaceState(null, "", newUrl);
      return { isBlog: true, slug };
    }

    // Handle old query params
    if (window.location.search.includes("blog")) {
      const params = new URLSearchParams(window.location.search);
      const slug = params.get("blog") || undefined;
      const newUrl = slug ? `/blog/${slug}` : `/blog`;
      window.history.replaceState(null, "", newUrl);
      return { isBlog: true, slug };
    }

    // Modern clean path
    if (pathname.startsWith("/blog")) {
      const slug = pathname.replace("/blog", "").replace(/^\//, "");
      return { isBlog: true, slug: slug || undefined };
    }

    return { isBlog: false, slug: undefined };
  };

  const [urlState, setUrlState] = useState(getUrlState());

  useEffect(() => {
    const handleLocationChange = () => {
      setUrlState(getUrlState());
    };

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (href && (href.startsWith("/blog") || href === "/blog" || href === "/")) {
          e.preventDefault();
          window.history.pushState(null, "", href);
          window.dispatchEvent(new Event("popstate"));
        }
      }
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  const isBlogView = urlState.isBlog;
  const selectedPostSlug = urlState.slug;

  const handleSelectPost = (slug: string | null) => {
    if (slug) {
      const newUrl = `/blog/${slug}`;
      window.history.pushState(null, "", newUrl);
      window.dispatchEvent(new Event("popstate"));
    } else {
      const newUrl = `/blog`;
      window.history.pushState(null, "", newUrl);
      window.dispatchEvent(new Event("popstate"));
    }
  };

  const handleBackToHome = () => {
    const newUrl = `/`;
    window.history.pushState(null, "", newUrl);
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#B88A6E]/30 selection:text-white overflow-x-hidden antialiased font-sans">
      {/* Dynamic Exquisite 5-Color Ambient Background Spotlights specifically tailored for Rumah Tropis */}
      {activeTemplate === "arsitetika-studio" && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 hidden md:block">
          {/* Spotlight 1: Premium Copper-Bronze (#B88A6E) top left */}
          <div 
            className="absolute top-[2%] left-[-15%] w-[550px] h-[550px] rounded-full blur-[140px] opacity-[0.22]"
            style={{ backgroundColor: "#B88A6E" }}
          />
          {/* Spotlight 2: Rainforest Moss (#5B6A56) behind qualifications */}
          <div 
            className="absolute top-[18%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.16]"
            style={{ backgroundColor: "#5B6A56" }}
          />
          {/* Spotlight 3: Aged Teak (#4D3C2F) behind Stats & Services */}
          <div 
            className="absolute top-[35%] left-[-8%] w-[580px] h-[580px] rounded-full blur-[130px] opacity-[0.25]"
            style={{ backgroundColor: "#4D3C2F" }}
          />
          {/* Spotlight 4: Sandy Travertine (#F5E6D3) behind Portfolio & Testimonials */}
          <div 
            className="absolute top-[58%] right-[-12%] w-[650px] h-[650px] rounded-full blur-[160px] opacity-[0.14]"
            style={{ backgroundColor: "#F5E6D3" }}
          />
          {/* Spotlight 5: Filtered Sunbeam (#FEF9ED) bottom center behind FAQ */}
          <div 
            className="absolute bottom-[2%] left-[10%] w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.15]"
            style={{ backgroundColor: "#FEF9ED" }}
          />
        </div>
      )}

      {/* Modern Top Navigation that sticks on scroll */}
      <StickyNavbar isBlogView={isBlogView} onBackToHome={handleBackToHome} />

      <main className="relative z-10 w-full overflow-hidden">
        {isBlogView ? (
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center pt-24 pb-12">
              <div className="w-8 h-8 border-2 border-[#C5A880] border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <BlogPage 
              onBackToHome={handleBackToHome} 
              onSelectPost={handleSelectPost} 
              selectedPostSlug={selectedPostSlug} 
            />
          </Suspense>
        ) : (
          <>
            <HeroSection />
            <FilterSection />
            <Suspense fallback={<div className="h-40 w-full flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#C5A880] border-t-transparent rounded-full animate-spin"></div></div>}>
              <WhyUsSection />
              <ComparisonSection />
              <StatsSection />
              <ServicesSection />
              <ExclusiveFacilities />
              <PortfolioSection />
              <PricingSection />
              <TestimonialSection />
              <FAQSection />
            </Suspense>
          </>
        )}
      </main>

      <Suspense fallback={<div className="h-20 w-full bg-[#050505]" />}>
        <FooterSection />
      </Suspense>
    </div>
  );
}
