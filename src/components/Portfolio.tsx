'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "Tropical Paradise",
    description: "A stunning villa with a seamless indoor-outdoor flow.",
    image: "/images/portfolio/IMG_3937.jpg",
  },
  {
    title: "Modern Oasis",
    description: "Clean lines and natural materials create a serene retreat.",
    image: "/images/portfolio/IMG_4218.jpeg",
  },
  {
    title: "Jungle Haven",
    description: "A house nestled in nature, embracing the lush surroundings.",
    image: "/images/portfolio/IMG_6692.HEIC",
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="portfolio" className="w-full bg-[#0D0D0D] text-white p-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Galeri Karya Pilihan</h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                   <Image
                     src={projects[currentIndex].image}
                     alt={projects[currentIndex].title}
                     layout="fill"
                     objectFit="cover"
                   />
                </div>
                <div className="text-left">
                  <h3 className="text-3xl font-bold mb-4 text-[#C5A880]">{projects[currentIndex].title}</h3>
                  <p className="text-[#A3A3A3] text-lg">{projects[currentIndex].description}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
            <button onClick={handlePrev} className="bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition">
              <ChevronLeft size={32} />
            </button>
            <button onClick={handleNext} className="bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition">
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
