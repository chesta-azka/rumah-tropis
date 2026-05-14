"use client";

import React from 'react';
import { motion } from 'framer-motion';

// --- IMPORT COMPONENTS ---
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import FilterSection from '../components/FilterSection';
import Philosophy from '../components/Philosophy';
import ServiceBento from '../components/ServiceBento';
import Facilities from '../components/Facilities';
import Portofolio from '../components/Portfolio';
import Testimonial from '../components/Testimonials';
import Pricing from '../components/Pricing';
import ContactCTA from '../components/ContactCTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

// Variabel animasi untuk scroll-reveal yang konsisten
const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function LandingPage() {
  return (
    <div className="bg-[#4D3C2F] min-h-screen">
      {/* Navbar Fixed/Absolute biasanya di handle di dalam komponennya */}
      <Navbar />

      <main>
        {/* 1. HERO - Langsung muncul (Tanpa Reveal) */}
        <Hero />

        {/* 2. TRUST BAR */}
        <section className="bg-[#3A2D23]">
          <TrustBar />
        </section>

        {/* 3. FILTER SECTION */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants}
        >
          <FilterSection />
        </motion.section>

        {/* 4. PHILOSOPHY */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={revealVariants}
        >
          <Philosophy />
        </motion.section>

        {/* 5. SERVICE BENTO */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants}
        >
          <ServiceBento />
        </motion.section>

        {/* 6. FACILITIES */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={revealVariants}
        >
          <Facilities />
        </motion.section>

        {/* 7. PORTOFOLIO */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={revealVariants}
        >
          <Portofolio />
        </motion.section>

        {/* 8. TESTIMONIAL */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={revealVariants}
        >
          <Testimonial />
        </motion.section>

        {/* 9. PRICING */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={revealVariants}
        >
          <Pricing />
        </motion.section>

        {/* 10. CONTACT CTA (Tambahan biar konversi makin ngeri) */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}
        >
          <ContactCTA />
        </motion.section>

        {/* 11. FAQ */}
        <motion.section
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}
        >
          <FAQ />
        </motion.section>
      </main>

      {/* 12. FOOTER */}
      <Footer />
    </div>
  );
}