'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { title: "AD House", image: "/images/portfolio/portfolio-ad-house.webp" },
  { title: "AI House", image: "/images/portfolio/portfolio-ai-house.webp" },
  { title: "BF House", image: "/images/portfolio/portfolio-bf-house.webp" },
  { title: "EA House", image: "/images/portfolio/portfolio-ea-house.webp" },
  { title: "FL House", image: "/images/portfolio/portfolio-fl-house.webp" },
  { title: "ND House", image: "/images/portfolio/portfolio-nd-house.webp" },
  { title: "NN House", image: "/images/portfolio/portfolio-nn-house.webp" },
  { title: "PN House", image: "/images/portfolio/portfolio-pn-house.webp" },
  { title: "RA House", image: "/images/portfolio/portfolio-ra-house.webp" },
  { title: "SS House", image: "/images/portfolio/portfolio-ss-house.webp" },
  { title: "YO House", image: "/images/portfolio/portfolio-yo-house.webp" },
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
                className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 mb-8"
              >
                <Image
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
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
                    className={`relative flex-shrink-0 w-32 h-20 sm:w-40 sm:h-24 md:w-48 md:h-28 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border-2 ${currentIndex === index ? 'border-[#C5A880]' : 'border-transparent opacity-60 hover:opacity-100 hover:border-white/50'}`}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
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
