import CTA from "@/components/CTA";
import FilterSection from "@/components/FilterSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";


export default function Home() {
  return (
    <main className="bg-[#050505] overflow-x-hidden text-white">
      <Navbar />
      <Hero />
      <Stats />
      <WhyUs />
      <Process />
      <Portfolio />
      <FilterSection />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
