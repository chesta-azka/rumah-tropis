'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from './Icons'; // Corrected import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Qualifications", href: "#why-us" },
    { name: "Services", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#" className="text-2xl font-serif font-semibold uppercase tracking-widest text-white">
            Rumah Tropis
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm uppercase tracking-wider text-[#A3A3A3] hover:text-[#C5A880] transition-all duration-300 hover:text-shadow-[0_0_8px_rgba(197,168,128,0.7)]">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: '#C5A880', color: '#000', boxShadow: '0px 0px 20px rgba(197, 168, 128, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/50 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors duration-300">
              Konsultasi
            </motion.button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-4 pb-4 space-y-4 bg-black/80">
          {navLinks.map(link => (
            <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="block text-sm uppercase tracking-wider text-[#A3A3A3] hover:text-[#C5A880] py-2 transition-all duration-300 hover:text-shadow-[0_0_8px_rgba(197,168,128,0.7)]">
              {link.name}
            </Link>
          ))}
          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: '0px 0px 20px rgba(197, 168, 128, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#C5A880] text-black font-bold text-sm px-6 py-3 rounded-full">
            Konsultasi
          </motion.button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
