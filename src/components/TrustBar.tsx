"use client";

import { useInView } from '@/hooks/useInView';
import { Award, Building2, Ruler, Users } from 'lucide-react';

const stats = [
    { icon: Award, value: '7+', label: 'Years of Excellence', sub: 'Pengalaman Terpercaya' },
    { icon: Building2, value: '100+', label: 'Projects Completed', sub: 'Proyek Terbangun' },
    { icon: Ruler, value: '10.000+', label: 'Square Meters', sub: 'Total Luas Terbangun' },
    { icon: Users, value: '30+', label: 'Expert Team', sub: 'Profesional Berdedikasi' },
];

export default function TrustBar() {
    const { ref, inView } = useInView(0.2);

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="relative py-16 overflow-hidden"
            style={{ backgroundColor: '#2E231B' }}
        >
            {/* Top / Bottom gold lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-gold/15">
                    {stats.map((s, i) => {
                        const Icon = s.icon;
                        return (
                            <div
                                key={s.label}
                                className={`reveal flex flex-col items-center text-center px-6 ${inView ? 'visible' : ''} delay-${i * 100}`}
                            >
                                <div className="w-12 h-12 rounded-full border border-forest/50 bg-forest/10 flex items-center justify-center mb-4">
                                    <Icon size={20} className="text-forest-light" />
                                </div>
                                <div className="font-serif text-4xl md:text-5xl text-gold mb-1">{s.value}</div>
                                <div className="text-cream text-sm font-semibold tracking-wide mb-0.5">{s.label}</div>
                                <div className="text-cream/40 text-xs tracking-wider">{s.sub}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}