'use client';

import { Instagram, Youtube, Twitter } from './Icons'; // Corrected import

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050505] text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-[#A3A3A3] text-sm text-center sm:text-left mb-4 sm:mb-0">
          &copy; {year} RUMAH TROPIS. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-[#A3A3A3] hover:text-[#C5A880] transition-colors duration-300">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-[#A3A3A3] hover:text-[#C5A880] transition-colors duration-300">
            <Youtube size={20} />
          </a>
          <a href="#" className="text-[#A3A3A3] hover:text-[#C5A880] transition-colors duration-300">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
