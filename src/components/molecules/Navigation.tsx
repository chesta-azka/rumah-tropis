'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Beranda", href: "#" },
    { name: "Tentang", href: "#" },
    { name: "Layanan", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Paket", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Kontak", href: "#" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-charcoal/80 backdrop-blur-lg border-b border-copper-bronze/20' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#" className="text-2xl font-serif font-bold text-white tracking-wider">
              Rumah Tropis
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex md:space-x-4 lg:space-x-6">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="px-3 py-2 rounded-md text-sm font-medium text-neutral-gray hover:text-white transition-colors">
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/628138969965"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-semibold text-charcoal bg-white rounded-md hover:bg-warm-off-white transition-all duration-300 shadow-sm"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-gray hover:text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link key={item.name} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-neutral-gray hover:text-white hover:bg-charcoal">
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/628138969965"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-3 mt-2 text-base font-semibold text-charcoal bg-white rounded-md hover:bg-warm-off-white"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
