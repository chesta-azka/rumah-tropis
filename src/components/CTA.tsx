'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from './Icons'; // Corrected import

const CTA = () => {
  return (
    <section id="cta" className="w-full bg-[#050505] text-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#0D0D0D] border border-white/10 rounded-2xl text-center p-10 sm:p-16 relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#C5A880]/5 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#C5A880]/5 rounded-full filter blur-3xl"></div>

          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 tracking-wide relative z-10">Siap Wujudkan Rumah Impian Anda?</h2>
          <p className="text-[#A3A3A3] text-lg lg:text-xl max-w-2xl mx-auto mb-10 relative z-10">
            Jangan tunda lagi. Ambil langkah pertama untuk memiliki hunian tropis yang mewah dan nyaman. Hubungi kami sekarang untuk konsultasi gratis.
          </p>
          <motion.button 
                 whileHover={{ scale: 1.05, boxShadow: '0px 0px 25px rgba(197, 168, 128, 0.5)' }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
                 className="bg-[#C5A880] text-black font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-[#C5A880]/30 flex items-center mx-auto relative z-10">
                Hubungi Kami Sekarang <ArrowRight className="ml-3" size={22}/>
            </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
