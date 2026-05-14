"use client";

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
    { label: 'Layanan', href: '#services' },
    { label: 'Portofolio', href: '#portfolio' },
    { label: 'Harga', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-bark-darker/95 backdrop-blur-md border-b border-gold/10 py-4' : 'py-6'
                }`}
            style={{ backgroundColor: scrolled ? 'rgba(28,21,16,0.95)' : 'transparent' }}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded border border-gold/60 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M9 1L16 6V17H2V6L9 1Z" stroke="#B88A6E" strokeWidth="1.2" fill="none" />
                            <path d="M6 17V11H12V17" stroke="#B88A6E" strokeWidth="1.2" />
                        </svg>
                    </div>
                    <div>
                        <span className="font-serif text-cream text-lg tracking-wide">Rumah Tropis</span>
                    </div>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="nav-link text-cream/70 hover:text-cream text-sm tracking-wide transition-colors duration-200"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="#contact"
                        className="px-5 py-2.5 border border-gold/50 text-gold text-sm rounded hover:bg-gold/10 transition-all duration-300 tracking-wide"
                    >
                        Konsultasi Gratis
                    </a>
                </div>

                <button
                    className="md:hidden text-cream"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {open && (
                <div className="md:hidden px-6 pb-6 pt-4 flex flex-col gap-4 border-t border-gold/10 mt-4"
                    style={{ backgroundColor: 'rgba(28,21,16,0.98)' }}>
                    {links.map((l) => (
                        <a key={l.href} href={l.href} className="text-cream/80 py-1" onClick={() => setOpen(false)}>
                            {l.label}
                        </a>
                    ))}
                    <a href="#contact" className="mt-2 px-5 py-2.5 border border-gold/50 text-gold text-sm rounded text-center">
                        Konsultasi Gratis
                    </a>
                </div>
            )}
        </header>
    );
}