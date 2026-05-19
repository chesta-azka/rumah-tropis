'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    { title: "The Serenity Villa", image: "/images/portfolio/tropical-villa-1.webp" },
    { title: "Cascading Gardens House", image: "/images/portfolio/tropical-villa-2.webp" },
    { title: "Oceanbreeze Residence", image: "/images/portfolio/tropical-villa-3.webp" },
    { title: "The Sanctuary", image: "/images/portfolio/tropical-villa-4.webp" },
    { title: "Verdant Courtyard Home", image: "/images/portfolio/tropical-villa-5.webp" },
    { title: "Golden Hour Pavilion", image: "/images/portfolio/tropical-villa-6.webp" },
    { title: "Nusa Dua Paradise", image: "/images/portfolio/tropical-villa-7.webp" },
    { title: "Canggu Modern Retreat", image: "/images/portfolio/tropical-villa-8.webp" },
    { title: "Ubud Jungle Haven", image: "/images/portfolio/tropical-villa-9.webp" },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelectProject = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="portfolio" className="w-full bg-[#050505] text-white py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-4 tracking-wide">Galeri Karya Pilihan</h2>
          <p className="text-[#A3A3A3] text-lg lg:text-xl max-w-3xl mx-auto">
            Setiap proyek adalah cerminan visi klien yang kami wujudkan menjadi kenyataan dengan sentuhan kemewahan tropis.
          </p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 mb-8"
                style={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.3)" }}
              >
                <Image
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                  unoptimized={true} // Tambahkan ini jika gambar dari sumber eksternal
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                  <h3 className="text-2xl lg:text-4xl font-serif font-semibold text-white tracking-wide">{projects[currentIndex].title}</h3>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="w-full overflow-x-auto pb-4">
                <div className="flex space-x-4 p-2">
                {projects.map((project, index) => (
                    <div
                    key={project.title}
                    onClick={() => handleSelectProject(index)}
                    className={`relative flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-28 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border-2 ${currentIndex === index ? 'border-gold' : 'border-transparent opacity-60 hover:opacity-100 hover:border-white/50'}`}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        unoptimized={true} // Tambahkan ini jika gambar dari sumber eksternal
                    />
                    </div>
                ))}
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
