"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Eye, LayoutGrid } from 'lucide-react';

// Data Project dengan penamaan file yang rapi
const projects = [
    {
        id: 1,
        title: 'FL House',
        category: 'Residential',
        location: 'Jakarta Selatan',
        sqm: '420 m²',
        img: '/images/portfolio/portfolio-fl-house.webp', // Pastikan file ini ada
        tall: true,
    },
    {
        id: 2,
        title: 'ND House',
        category: 'Residential',
        location: 'Bali, Indonesia',
        sqm: '550 m²',
        img: '/images/portfolio/portfolio-nd-house.webp',
        tall: false,
    },
    {
        id: 3,
        title: 'YO House & Eatery',
        category: 'Hospitality',
        location: 'Yogyakarta',
        sqm: '820 m²',
        img: '/images/portfolio/portfolio-yo-house.webp',
        tall: true,
    },
    {
        id: 4,
        title: 'NN House',
        category: 'Residential',
        location: 'Surabaya',
        sqm: '380 m²',
        img: '/images/portfolio/portfolio-nn-house.webp',
        tall: false,
    },
    {
        id: 5,
        title: 'RA House',
        category: 'Residential',
        location: 'Bandung',
        sqm: '410 m²',
        img: '/images/portfolio/portfolio-ra-house.webp',
        tall: false,
    },
    {
        id: 6,
        title: 'PN House',
        category: 'Residential',
        location: 'Semarang',
        sqm: '460 m²',
        img: '/images/portfolio/portfolio-pn-house.webp',
        tall: true,
    },
    {
        id: 7,
        title: 'AI House',
        category: 'Sustainable',
        location: 'Tangerang',
        sqm: '340 m²',
        img: '/images/portfolio/portfolio-ai-house.webp',
        tall: false,
    },
    {
        id: 8,
        title: 'SS House',
        category: 'Residential',
        location: 'Malang',
        sqm: '290 m²',
        img: '/images/portfolio/portfolio-ss-house.webp',
        tall: false,
    },
    {
        id: 9,
        title: 'EA House',
        category: 'Residential',
        location: 'Medan',
        sqm: '510 m²',
        img: '/images/portfolio/portfolio-ea-house.webp',
        tall: true,
    },
    {
        id: 10,
        title: 'AD House',
        category: 'Sustainable',
        location: 'Bogor',
        sqm: '370 m²',
        img: '/images/portfolio/portfolio-ad-house.webp',
        tall: false,
    },
    {
        id: 11,
        title: 'BF House',
        category: 'Residential',
        location: 'Makassar',
        sqm: '440 m²',
        img: '/images/portfolio/portfolio-bf-house.webp',
        tall: false,
    },
];

const categories = ['Semua', 'Residential', 'Hospitality', 'Sustainable'];

export default function Portfolio() {
    const [active, setActive] = useState('Semua');

    const filtered = active === 'Semua' 
        ? projects 
        : projects.filter((p) => p.category === active);

    return (
        <section id="portfolio" className="relative py-32 px-6 bg-bark overflow-hidden">
            {/* Background Decorative Text */}
            <div className="absolute top-20 right-[-5%] text-[15rem] font-serif text-white/[0.02] select-none pointer-events-none uppercase">
                Works
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-[1px] bg-gold" />
                            <span className="text-gold text-xs tracking-[0.4em] uppercase font-medium">Selected Works</span>
                        </div>
                        <h2 className="font-serif text-5xl md:text-6xl text-cream leading-tight">
                            Portofolio <br /> <span className="italic text-gold">Arsitektur</span>
                        </h2>
                    </motion.div>

                    {/* Filter Tabs */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-3"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.2em] transition-all duration-500 border ${
                                    active === cat
                                        ? 'bg-gold text-bark border-gold font-bold shadow-lg shadow-gold/20'
                                        : 'border-white/10 text-cream/50 hover:border-gold/50 hover:text-gold'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* Grid Architecture */}
                <motion.div 
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filtered.map((p) => (
                            <motion.div
                                layout
                                key={p.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="relative group cursor-pointer break-inside-avoid rounded-xl overflow-hidden border border-white/5 bg-bark-lighter"
                            >
                                {/* Image Container */}
                                <div className={`relative overflow-hidden ${p.tall ? 'h-[500px]' : 'h-[320px]'}`}>
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    
                                    {/* Glassmorphism Overlay */}
                                    <div className="absolute inset-0 bg-bark/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col justify-between p-8">
                                        <div className="flex justify-end">
                                            <motion.div 
                                                whileHover={{ rotate: 45 }}
                                                className="w-12 h-12 bg-gold rounded-full flex items-center justify-center"
                                            >
                                                <ArrowUpRight className="text-bark" size={20} />
                                            </motion.div>
                                        </div>
                                        
                                        <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="text-gold text-[10px] tracking-[0.3em] uppercase block mb-2">{p.category}</span>
                                            <h3 className="font-serif text-cream text-2xl mb-1">{p.title}</h3>
                                            <p className="text-cream/60 text-xs font-light">{p.location} • {p.sqm}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Label Terlihat (Opsional - buat kesan katalog mahal) */}
                                <div className="p-5 flex justify-between items-center md:hidden">
                                    <h3 className="text-cream font-serif">{p.title}</h3>
                                    <span className="text-gold text-[10px] tracking-widest">{p.sqm}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View More Button */}
                <div className="mt-20 text-center">
                    <button className="group relative px-12 py-5 bg-transparent border border-gold/30 text-gold text-xs uppercase tracking-[0.3em] overflow-hidden transition-all duration-500 hover:text-bark">
                        <span className="relative z-10">Lihat Portofolio Lengkap</span>
                        <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                </div>
            </div>

            {/* Elemen Dekoratif Pojok Bawah */}
            <div className="absolute bottom-10 left-10 w-32 h-32 border-b border-l border-white/5 pointer-events-none" />
        </section>
    );
}