'use client';

import React from 'react';

// --- IMPORT COMPONENTS ---
import Navbar from '../components/molecules/Navigation';
import Hero from '../components/organisms/Hero';
import VideoSection from '../components/organisms/About'; // Menggunakan file About.tsx untuk VideoSection
import IdealClientSection from '../components/organisms/Services'; // Menggunakan file Services.tsx untuk IdealClientSection
import WhyUsSection from '../components/Philosophy'; // Menggunakan file Philosophy.tsx untuk WhyUsSection
import TestimonialSection from '../components/organisms/Testimonials'; // Menggunakan file Testimonials.tsx untuk TestimonialSection
import FooterCTASection from '../components/organisms/CTA'; // Menggunakan file CTA.tsx untuk FooterCTASection

export default function LandingPage() {
  return (
    <div className="bg-soft-black min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <VideoSection />
        <IdealClientSection />
        <WhyUsSection />
        <TestimonialSection />
      </main>

      <FooterCTASection />

    </div>
  );
}