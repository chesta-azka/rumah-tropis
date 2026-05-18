import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import FilterSection from "@/components/FilterSection";
import Footer from "@/components/Footer";
import Guarantee from "@/components/Guarantee";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="bg-[#050505] overflow-x-hidden">
      <Navbar />
      <Hero />
      <FilterSection />
      <WhyUs />
      <Portfolio />
      <Process />
      <Testimonials />
      <Team />
      <Guarantee />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
