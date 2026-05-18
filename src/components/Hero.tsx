'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-full h-full object-cover"
      >
        <source src="/images/portfolio/IMG_8223.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Wujudkan Rumah Tropis Impian Anda
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-2xl mb-8"
        >
          Dari Konsep Hingga Kenyataan, Bersama Arsitek Senior Berpengalaman.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition-all duration-300">
            Konsultasi Gratis
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
