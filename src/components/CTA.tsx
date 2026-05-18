'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="cta" className="relative w-full text-white py-20 px-4 bg-cover bg-center" style={{ backgroundImage: "url('/images/portfolio/IMG_6692.HEIC')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Siap Memulai Perjalanan Mewujudkan Rumah Impian Anda?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Jangan biarkan keraguan menunda impian Anda. Satu langkah kecil hari ini adalah awal dari mahakarya yang akan Anda nikmati selamanya.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="bg-[#C5A880] text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            Konsultasi Gratis Sekarang <ArrowRight className="ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
