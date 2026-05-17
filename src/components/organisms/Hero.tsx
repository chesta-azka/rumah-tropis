'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-deep-black text-white min-h-[95vh] md:min-h-screen flex items-center">
      {/* Background Image/Video */}
      <div className="absolute inset-0 z-0">
        {/* Ganti dengan gambar dari aset yang ada */}
        <Image
          src="/images/hero-background.jpg" // Placeholder, ganti dengan path gambar yang benar
          alt="Latar belakang rumah tropis mewah"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-semibold tracking-widest text-copper-bronze uppercase bg-charcoal/50 rounded-full border border-copper-bronze/30">
                Modern Tropical Luxury
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight"
            >
              CIPTAKAN BANGUNAN BERNILAI TINGGI <br />
              LEWAT PESONA GAYA TROPIS.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4 text-lg md:text-xl text-neutral-gray max-w-xl mx-auto md:mx-0"
            >
              DETAIL DESAIN DAN KONSTRUKSI AMANKAN NILAI INVESTASI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
            >
              <a
                href="https://wa.me/628138969965"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-charcoal bg-white rounded-md hover:bg-warm-off-white transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Konsultasi Gratis
              </a>
            </motion.div>
          </div>

          {/* Right Column: Can be empty or have a subtle visual element */}
          {/* Desain ini lebih fokus pada teks di kiri dengan background yang kuat */}
        </div>
      </div>
      
      {/* Optional: Scroll down indicator */}
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:block">
          <motion.div
             initial={{ opacity: 0, y: 0 }}
             animate={{ opacity: 1, y: 10 }}
             transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg className="w-6 h-6 text-neutral-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          </motion.div>
        </div>
    </section>
  );
};

export default Hero;
