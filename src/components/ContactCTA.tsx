import React from 'react';
import { motion } from 'framer-motion';

const ContactCTA: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#E1C5A8] to-[#C3A180] py-16 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-[#4D3C2F] mb-4"
      >
        Ready to Build Your Tropical Dream Home?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-lg text-[#654C37] mb-8 max-w-2xl mx-auto"
      >
        Let our architects bring your vision to life. Schedule a free consultation today to discuss your project and get a personalized quote.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-[#4D3C2F] text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform duration-300 ease-in-out"
      >
        Schedule A Free Consultation
      </motion.button>
    </div>
  );
};

export default ContactCTA;
