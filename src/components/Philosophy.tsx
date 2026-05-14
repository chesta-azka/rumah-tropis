"use client";

import { useInView } from '@/hooks/useInView';
import { AlertTriangle, Leaf, TrendingUp } from 'lucide-react';

const points = [
    {
        icon: AlertTriangle,
        color: 'text-amber-400',
        bg: 'bg-amber-400/10 border-amber-400/20',
        title: 'Masalah yang Kami Lihat',
        desc: 'Banyak kontraktor menawarkan harga murah namun menggunakan material rendah kualitas — menghasilkan bangunan yang cepat rusak dan kehilangan nilai investasi.',
    },
    {
        icon: Leaf,
        color: 'text-forest-light',
        bg: 'bg-forest/10 border-forest/30',
        title: 'Filosofi Kami',
        desc: 'Kami percaya bahwa bangunan terbaik adalah yang hidup selaras dengan iklim tropis — memanfaatkan angin, cahaya, dan material lokal premium untuk menciptakan ruang yang sejuk, sehat, dan indah.',
    },
    {
        icon: TrendingUp,
        color: 'text-gold',
        bg: 'bg-gold/10 border-gold/25',
        title: 'Solusi Kami',
        desc: 'Pendekatan desain integratif yang menyatukan estetika tropis modern, material tahan lama, dan sistem konstruksi terstandar — menghasilkan properti yang bernilai tinggi dan tahan waktu.',
    },
];

export default function Philosophy() {
    const { ref, inView } = useInView(0.1);

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="py-28 px-6 overflow-hidden"
            style={{ backgroundColor: '#1C1510' }}
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Images */}
                    <div className={`reveal-left ${inView ? 'visible' : ''} relative`}>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="col-span-2 rounded-2xl overflow-hidden h-72">
                                <img
                                    src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
                                    alt="Tropical Home"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden h-44">
                                <img
                                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                                    alt="Interior"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="rounded-2xl overflow-hidden h-44">
                                <img
                                    src="https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg"
                                    alt="Detail"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Floating badge */}
                        <div
                            className="absolute -bottom-6 -right-6 rounded-2xl border border-gold/30 p-5 backdrop-blur-sm shadow-2xl"
                            style={{ backgroundColor: 'rgba(46,35,27,0.9)' }}
                        >
                            <div className="font-serif text-3xl text-gold">98%</div>
                            <div className="text-cream/60 text-xs mt-1">Kepuasan Klien</div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className={`reveal-right ${inView ? 'visible' : ''} delay-200`}>
                        <span className="text-gold text-xs tracking-[0.3em] uppercase">Kenapa Rumah Tropis</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 mb-4 leading-tight gold-line">
                            Arsitektur yang Hidup<br />
                            <span className="italic text-gold">Bersama Alam</span>
                        </h2>
                        <p className="text-cream/60 leading-relaxed mb-10 text-base">
                            Di Rumah Tropis, kami tidak sekadar membangun — kami merajut cerita antara manusia,
                            alam, dan ruang hidup yang bermakna.
                        </p>

                        <div className="space-y-5">
                            {points.map((p, i) => {
                                const Icon = p.icon;
                                return (
                                    <div
                                        key={p.title}
                                        className={`reveal ${inView ? 'visible' : ''} delay-${(i + 3) * 100} flex gap-4 p-5 rounded-xl border ${p.bg}`}
                                    >
                                        <div className="flex-shrink-0 mt-0.5">
                                            <Icon size={18} className={p.color} />
                                        </div>
                                        <div>
                                            <div className={`font-semibold text-sm mb-1 ${p.color}`}>{p.title}</div>
                                            <p className="text-cream/60 text-sm leading-relaxed">{p.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}