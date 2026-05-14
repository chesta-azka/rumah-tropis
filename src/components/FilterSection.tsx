"use client";

import { useInView } from '@/hooks/useInView';
import { CheckCircle2, XCircle } from 'lucide-react';

const yes = [
    'Menginginkan hunian yang tahan lama & bernilai tinggi',
    'Peduli pada material premium dan finishing berkualitas',
    'Menghargai proses desain yang terstruktur & transparan',
    'Ingin berinvestasi pada properti jangka panjang',
    'Mengutamakan keindahan alam tropis dalam arsitektur',
];

const no = [
    'Hanya mencari harga termurah tanpa memperhatikan kualitas',
    'Menginginkan proyek instan dalam waktu singkat',
    'Tidak mementingkan garansi dan jaminan kualitas',
    'Tidak berencana menghuni atau menyewakan properti',
    'Mengabaikan nilai estetika dan fungsi bangunan',
];

export default function FilterSection() {
    const { ref, inView } = useInView(0.1);

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="py-28 px-6"
            style={{ backgroundColor: '#4D3C2F' }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className={`text-center mb-16 reveal ${inView ? 'visible' : ''}`}>
                    <span className="text-gold text-xs tracking-[0.3em] uppercase">Untuk Siapa Kami</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 gold-line-center">
                        Pilih Kami Jika...
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {/* YES card */}
                    <div className={`filter-card reveal reveal-left ${inView ? 'visible' : ''} delay-200`}>
                        <div
                            className="rounded-2xl border border-forest/40 p-8 h-full"
                            style={{ backgroundColor: 'rgba(91,106,86,0.12)' }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-forest/20 border border-forest/40 flex items-center justify-center">
                                    <CheckCircle2 size={18} className="text-forest-light" />
                                </div>
                                <div>
                                    <div className="text-forest-light font-semibold tracking-wide text-sm uppercase">Pilih Kami</div>
                                    <div className="text-cream/40 text-xs">Anda adalah klien ideal kami</div>
                                </div>
                            </div>
                            <ul className="space-y-4">
                                {yes.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CheckCircle2 size={16} className="text-forest-light mt-0.5 flex-shrink-0" />
                                        <span className="text-cream/80 text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* NO card */}
                    <div className={`filter-card reveal reveal-right ${inView ? 'visible' : ''} delay-300`}>
                        <div
                            className="rounded-2xl border border-gold/20 p-8 h-full"
                            style={{ backgroundColor: 'rgba(184,138,110,0.06)' }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                                    <XCircle size={18} className="text-gold/70" />
                                </div>
                                <div>
                                    <div className="text-gold/80 font-semibold tracking-wide text-sm uppercase">Jangan Pilih Kami</div>
                                    <div className="text-cream/40 text-xs">Kami mungkin bukan untuk Anda</div>
                                </div>
                            </div>
                            <ul className="space-y-4">
                                {no.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <XCircle size={16} className="text-gold/50 mt-0.5 flex-shrink-0" />
                                        <span className="text-cream/50 text-sm leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}