'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white text-2xl font-bold">
              Rumah Tropis
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#portfolio" className="text-gray-300 hover:text-[#C5A880] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Portofolio
              </Link>
              <Link href="#process" className="text-gray-300 hover:text-[#C5A880] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Proses
              </Link>
              <Link href="#team" className="text-gray-300 hover:text-[#C5A880] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Tim
              </Link>
              <Link href="#faq" className="text-gray-300 hover:text-[#C5A880] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                FAQ
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Link href="#cta">
              <button className="bg-[#C5A880] text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-opacity-90 transition-all transform hover:scale-105">
                Konsultasi Gratis
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;