"use client";

import { useInView } from '@/hooks/useInView';
import { useState } from 'react';
import { ArrowUpRight, Eye } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Villa Hijau Seminyak',
        category: 'Residential',
        location: 'Bali, Indonesia',
        sqm: '450 m²',
        img: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg',
        tall: true,
    },
    {
        id: 2,
        title: 'Rumah Bambu Modern',
        category: 'Sustainable',
        location: 'Yogyakarta',
        sqm: '280 m²',
        img: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
        tall: false,
    },
    {
        id: 3,
        title: 'Tepi Sungai Retreat',
        category: 'Hospitality',
        location: 'Lombok',
        sqm: '720 m²',
        img: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
        tall: false,
    },
    {
        id: 4,
        title: 'Omah Jawa Kontemporer',
        category: 'Heritage Fusion',
        location: 'Solo, Jawa Tengah',
        sqm: '380 m²',
        img: 'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg',
        tall: true,
    },
    {
        id: 5,
        title: 'Tropis Minimalis BSD',
        category: 'Residential',
        location: 'Tangerang Selatan',
        sqm: '320 m²',
        img: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
        tall: false,
    },
    {
        id: 6,
        title: 'Boutique Hotel Ubud',
        category: 'Hospitality',
        location: 'Ubud, Bali',
        sqm: '1.200 m²',
        img: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
        tall: false,
    },
];

const categories = ['Semua', 'Residential', 'Hospitality', 'Sustainable', 'Heritage Fusion'];

export default function Portfolio() {
    const { ref, inView } = useInView(0.05);
    const [active, setActive] = useState('Semua');

    const filtered = active === 'Semua' ? projects : projects.filter((p) => p.category === active);

    return (
        <section
            id="portfolio"
            ref={ref as React.RefObject<HTMLElement>}
            className="py-28 px-6"
            style={{ backgroundColor: '#1C1510' }}
        >
            <div className="max-w-7xl mx-auto">
                <div className={`text-center mb-10 reveal ${inView ? 'visible' : ''}`}>
                    <span className="text-gold text-xs tracking-[0.3em] uppercase">Karya Nyata</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 gold-line-center">
                        Portofolio Pilihan
                    </h2>
                </div>

                {/* Filter tabs */}
                <div className={`flex flex-wrap justify-center gap-2 mb-12 reveal ${inView ? 'visible' : ''} delay-100`}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`px-5 py-2 rounded-full text-sm tracking-wide transition-all duration-300 border ${active === cat
                                ? 'bg-gold text-bark-deeper border-gold font-semibold'
                                : 'border-gold/25 text-cream/60 hover:border-gold/50 hover:text-cream'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry-like grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
                    {filtered.map((p, i) => (
                        <div
                            key={p.id}
                            className={`portfolio-card reveal ${inView ? 'visible' : ''} delay-${(i % 4) * 100} relative rounded-2xl border border-gold/10 group cursor-pointer break-inside-avoid`}
                        >
                            <img
                                src={p.img}
                                alt={p.title}
                                className={`w-full object-cover rounded-2xl ${p.tall ? 'h-96' : 'h-64'}`}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-bark-deeper/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                            {/* Content on hover */}
                            <div className="absolute inset-0 rounded-2xl p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                <div className="flex justify-end">
                                    <div className="w-9 h-9 bg-gold rounded-full flex items-center justify-center">
                                        <Eye size={15} className="text-bark-deeper" />
                                    </div>
                                </div>
                                <div>
                                    <span className="text-gold text-xs tracking-widest uppercase">{p.category}</span>
                                    <h3 className="font-serif text-cream text-xl mt-1">{p.title}</h3>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-cream/50 text-xs">{p.location} · {p.sqm}</span>
                                        <ArrowUpRight size={16} className="text-gold" />
                                    </div>
                                </div>
                            </div>
                            {/* Always visible category badge */}
                            <div className="absolute top-4 left-4">
                                <span
                                    className="text-xs tracking-wide px-3 py-1 rounded-full border border-gold/30 text-gold/80"
                                    style={{ backgroundColor: 'rgba(28,21,16,0.7)', backdropFilter: 'blur(8px)' }}
                                >
                                    {p.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`text-center mt-12 reveal ${inView ? 'visible' : ''} delay-400`}>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 border border-gold/40 text-gold rounded hover:bg-gold/10 transition-all duration-300 text-sm tracking-wide"
                    >
                        Lihat Semua Proyek
                        <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}