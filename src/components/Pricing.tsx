"use client";

import { useInView } from '@/hooks/useInView';
import { Check, Zap } from 'lucide-react';

const packages = [
    {
        name: 'Furniture',
        tag: null,
        originalPrice: 'Rp 45 jt',
        price: 'Rp 22,5 jt',
        unit: '/ paket',
        desc: 'Solusi furnitur custom tropis premium untuk hunian Anda.',
        features: [
            'Konsultasi desain furnitur',
            'Material kayu jati & rotan',
            '3D visualisasi',
            'Produksi custom',
            'Instalasi & finishing',
        ],
        highlight: false,
        color: 'border-gold/20',
    },
    {
        name: 'Landscape',
        tag: null,
        originalPrice: 'Rp 65 jt',
        price: 'Rp 32,5 jt',
        unit: '/ paket',
        desc: 'Desain taman tropis yang menyatu dengan alam sekitar.',
        features: [
            'Site analysis & konsep',
            'Pemilihan tanaman tropis',
            'Sistem irigasi otomatis',
            'Instalasi batu alam',
            'Perawatan 3 bulan',
        ],
        highlight: false,
        color: 'border-gold/20',
    },
    {
        name: 'Interior',
        tag: 'Terpopuler',
        originalPrice: 'Rp 120 jt',
        price: 'Rp 60 jt',
        unit: '/ paket',
        desc: 'Desain interior tropis modern dengan material premium pilihan.',
        features: [
            'Konsultasi desain penuh',
            'Gambar kerja & 3D render',
            'Material & furnitur premium',
            'Pengawasan pelaksanaan',
            'Garansi 1 tahun',
            'After sales support',
        ],
        highlight: true,
        color: 'border-gold',
    },
    {
        name: 'Architecture',
        tag: null,
        originalPrice: 'Rp 180 jt',
        price: 'Rp 90 jt',
        unit: '/ paket',
        desc: 'Desain arsitektur tropis dari konsep hingga gambar konstruksi.',
        features: [
            'Konsep & schematic design',
            'Design development',
            'Gambar konstruksi lengkap',
            'RAB & spesifikasi teknis',
            'Pendampingan perizinan',
            'Konsultasi konstruksi',
        ],
        highlight: false,
        color: 'border-gold/20',
    },
    {
        name: 'All-in',
        tag: 'Best Value',
        originalPrice: 'Rp 450 jt',
        price: 'Rp 225 jt',
        unit: '/ paket',
        desc: 'Paket lengkap: desain, konstruksi, interior, landscape & furnitur.',
        features: [
            'Semua layanan Architecture',
            'Konstruksi full management',
            'Interior design & build',
            'Landscape & furniture',
            'Progress report weekly',
            'Garansi 2 tahun',
            'VIP after sales support',
        ],
        highlight: false,
        color: 'border-forest/40',
    },
];

export default function Pricing() {
    const { ref, inView } = useInView(0.05);

    return (
        <section
            id="pricing"
            ref={ref as React.RefObject<HTMLElement>}
            className="py-28 px-6"
            style={{ backgroundColor: '#2E231B' }}
        >
            <div className="max-w-7xl mx-auto">
                <div className={`text-center mb-6 reveal ${inView ? 'visible' : ''}`}>
                    <span className="text-gold text-xs tracking-[0.3em] uppercase">Investasi Terbaik</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 gold-line-center">
                        Paket Layanan
                    </h2>
                </div>

                {/* Promo banner */}
                <div className={`reveal ${inView ? 'visible' : ''} delay-100 max-w-lg mx-auto mb-12`}>
                    <div
                        className="flex items-center justify-center gap-3 rounded-xl border border-gold/30 py-3 px-6"
                        style={{ backgroundColor: 'rgba(184,138,110,0.1)' }}
                    >
                        <Zap size={16} className="text-gold" />
                        <span className="text-gold text-sm font-semibold tracking-wide">
                            Promo Spesial — Hemat 50% untuk semua paket!
                        </span>
                        <Zap size={16} className="text-gold" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
                    {packages.map((pkg, i) => (
                        <div
                            key={pkg.name}
                            className={`pricing-card reveal ${inView ? 'visible' : ''} delay-${i * 100} relative rounded-2xl border ${pkg.color} p-6 flex flex-col ${pkg.highlight ? 'ring-1 ring-gold/50 shadow-[0_0_40px_rgba(184,138,110,0.2)]' : ''
                                }`}
                            style={{
                                backgroundColor: pkg.highlight
                                    ? 'rgba(184,138,110,0.1)'
                                    : 'rgba(77,60,47,0.4)',
                            }}
                        >
                            {/* Tag */}
                            {pkg.tag && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                    <span className="px-4 py-1 bg-gold text-bark-deeper text-xs font-bold rounded-full tracking-wide whitespace-nowrap">
                                        {pkg.tag}
                                    </span>
                                </div>
                            )}

                            <div className="mb-5">
                                <h3 className="font-serif text-cream text-xl mb-1">{pkg.name}</h3>
                                <p className="text-cream/40 text-xs leading-relaxed">{pkg.desc}</p>
                            </div>

                            <div className="mb-5">
                                <div className="text-cream/35 text-xs line-through">{pkg.originalPrice}</div>
                                <div className="font-serif text-gold text-3xl mt-0.5">{pkg.price}</div>
                                <div className="text-cream/40 text-xs">{pkg.unit}</div>
                            </div>

                            <ul className="space-y-2.5 flex-1 mb-6">
                                {pkg.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2">
                                        <Check size={13} className="text-forest-light mt-0.5 flex-shrink-0" />
                                        <span className="text-cream/60 text-xs leading-relaxed">{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`w-full py-3 rounded-lg text-sm font-semibold tracking-wide text-center transition-all duration-300 ${pkg.highlight
                                    ? 'bg-gold text-bark-deeper hover:bg-gold-light'
                                    : 'border border-gold/35 text-gold hover:bg-gold/10'
                                    }`}
                            >
                                Pilih Paket Ini
                            </a>
                        </div>
                    ))}
                </div>

                <div className={`text-center mt-12 text-cream/40 text-sm reveal ${inView ? 'visible' : ''} delay-500`}>
                    * Harga bersifat estimasi. Konsultasi gratis untuk penawaran custom sesuai kebutuhan Anda.
                </div>
            </div>
        </section>
    );
}