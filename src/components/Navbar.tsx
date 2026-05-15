"use client";

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#4D3C2F]/95 backdrop-blur-md border-b border-[#B88A6E]/20 py-4' : 'py-6'
    }`}
>

            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 overflow-hidden">
                        <Image 
                            src="images/logo-rumah-tropiss.webp" 
                            alt="Logo Rumah Tropis"
                            fill
                            className="object-contain"
                            priority 
                        />
                    </div>
                    <div>
                            {/* Pakai warna teks Filtered Sunbeam */}
                        <span className="font-serif text-[#FEF9ED] text-lg tracking-wide">Rumah Tropis</span>

                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className="text-[#F5F2ED]/70 hover:text-[#F5F2ED] text-sm tracking-wide transition-colors duration-200"
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Button */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="#contact"
                        className="px-5 py-2.5 border border-[#B88A6E]/50 text-[#B88A6E] text-sm rounded hover:bg-[#B88A6E]/10 transition-all duration-300 tracking-wide"
                    >
                        Konsultasi Gratis
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-[#F5F2ED]"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden px-6 pb-6 pt-4 flex flex-col gap-4 border-t border-[#B88A6E]/10 mt-4 bg-[#1C1510]/98">
                    {links.map((l) => (
                        <Link 
                            key={l.href} 
                            href={l.href} 
                            className="text-[#F5F2ED]/80 py-1" 
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                        </Link>
                    ))}
                    <Link 
                        href="#contact" 
                        className="mt-2 px-5 py-2.5 border border-[#B88A6E]/50 text-[#B88A6E] text-sm rounded text-center"
                        onClick={() => setOpen(false)}
                    >
                        Konsultasi Gratis
                    </Link>
                </div>
            )}
        </header>
    );
}