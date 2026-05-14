"use client";

import { useInView } from '@/hooks/useInView';
import { PenTool, Hammer, BookOpen, BarChart3, TrendingUp } from 'lucide-react';

const services = [
    {
        id: 1,
        icon: PenTool,
        title: 'Rancang',
        subtitle: 'Architectural Design',
        desc: 'Desain arsitektur tropis yang menyatu dengan iklim lokal — dari konsep awal hingga gambar kerja detail.',
        img: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg',
        span: 'col-span-1 md:col-span-2 row-span-2',
        large: true,
    },
    {
        id: 2,
        icon: Hammer,
        title: 'Konstruksi',
        subtitle: 'Build & Construct',
        desc: 'Pembangunan dengan standar kualitas tinggi menggunakan material premium pilihan.',
        img: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
        span: 'col-span-1',
        large: false,
    },
    {
        id: 3,
        icon: BookOpen,
        title: 'Ilmu Rancang',
        subtitle: 'Design Education',
        desc: 'Workshop & konsultasi teknis desain arsitektur tropis untuk profesional.',
        img: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
        span: 'col-span-1',
        large: false,
    },
    {
        id: 4,
        icon: BarChart3,
        title: 'Manajemen',
        subtitle: 'Project Management',
        desc: 'Pengawasan penuh dari awal hingga serah terima — tepat waktu, tepat anggaran.',
        img: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg',
        span: 'col-span-1',
        large: false,
    },
    {
        id: 5,
        icon: TrendingUp,
        title: 'Investasi',
        subtitle: 'Property Investment',
        desc: 'Konsultasi strategi investasi properti tropis untuk ROI optimal jangka panjang.',
        img: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
        span: 'col-span-1',
        large: false,
    },
];

export default function ServicesBento() {
    const { ref, inView } = useInView(0.1);

    return (
        <section
            id="services"
            ref={ref as React.RefObject<HTMLElement>}
            className="py-28 px-6"
            style={{ backgroundColor: '#4D3C2F' }}
        >
            <div className="max-w-7xl mx-auto">
                <div className={`text-center mb-16 reveal ${inView ? 'visible' : ''}`}>
                    <span className="text-gold text-xs tracking-[0.3em] uppercase">Apa Yang Kami Lakukan</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 gold-line-center">
                        Layanan Kami
                    </h2>
                    <p className="text-cream/50 mt-6 max-w-xl mx-auto leading-relaxed">
                        Lima layanan terintegrasi untuk mewujudkan hunian tropis premium Anda dari mimpi hingga kenyataan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[240px]">
                    {services.map((s, i) => {
                        const Icon = s.icon;
                        const isLarge = s.id === 1;
                        return (
                            <div
                                key={s.id}
                                className={`bento-card reveal ${inView ? 'visible' : ''} delay-${i * 100} ${isLarge ? 'md:col-span-2 md:row-span-2' : ''
                                    } relative rounded-2xl overflow-hidden cursor-pointer group border border-gold/10`}
                            >
                                {/* Background image */}
                                <img
                                    src={s.img}
                                    alt={s.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-bark-deeper/95 via-bark-deeper/50 to-transparent" />

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    <div className="flex items-center justify-between">
                                        <div className="w-9 h-9 rounded-lg bg-bark-deeper/70 border border-gold/20 flex items-center justify-center backdrop-blur-sm">
                                            <Icon size={16} className="text-gold" />
                                        </div>
                                        <span className="text-cream/40 text-xs tracking-widest uppercase">{s.subtitle}</span>
                                    </div>
                                    <div>
                                        <h3 className={`font-serif text-cream mb-2 ${isLarge ? 'text-3xl' : 'text-xl'}`}>
                                            {s.title}
                                        </h3>
                                        <p className={`text-cream/60 leading-relaxed ${isLarge ? 'text-base' : 'text-sm'}`}>
                                            {s.desc}
                                        </p>
                                        <div className="mt-4 flex items-center gap-2 text-gold text-xs tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <span>Pelajari lebih lanjut</span>
                                            <span>→</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}