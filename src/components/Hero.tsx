'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from './Icons'; // Corrected import

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white pt-20 sm:pt-0">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center px-4 max-w-5xl"
        >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold uppercase tracking-wider leading-tight mb-4">
                Ciptakan Bangunan Bernilai Tinggi Lewat Pesona Gaya Tropis
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#A3A3A3] italic max-w-3xl mx-auto mb-10">
                Detail Desain dan Konstruksi Amankan Nilai Investasi.
            </p>

            <motion.div 
                className="relative aspect-video max-w-4xl mx-auto mb-10 rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                 <video
                    className="w-full h-full object-cover"
                    src="/videos/IMG_8223.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
            </motion.div>

            <motion.button 
                 whileHover={{ scale: 1.05, backgroundColor: '#C5A880', color: '#000' }}
                 whileTap={{ scale: 0.95 }}
                 transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="bg-white text-black font-bold text-lg px-10 py-4 rounded-full shadow-lg shadow-white/20">
                Jadwalkan Konsultasi
            </motion.button>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }}
            className="absolute bottom-10 z-10"
        >
            <ArrowDown className="text-white" size={28}/>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/50 to-[#050505]"></div>
    </section>
  );
};

export default Hero;
