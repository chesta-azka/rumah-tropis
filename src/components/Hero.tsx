"use client";


import { ArrowDown, Play } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <div className="ken-burns absolute inset-0">
                    <img
                        src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
                        alt="Tropical Architecture"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Cinematic gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-bark-deeper/90 via-bark-darker/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-bark-deeper/80 via-transparent to-bark-darker/30" />
                {/* Subtle warm tint */}
                <div className="absolute inset-0 bg-bark/20" />
            </div>

            {/* Decorative line left */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent z-10" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
                <div className="max-w-2xl">
                    {/* Label */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-8 h-px bg-gold" />
                        <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
                            Arsitektur Tropis Premium
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-6">
                        Ciptakan Bangunan{' '}
                        <span className="italic text-gold">Bernilai</span>
                        <br />
                        Tinggi
                    </h1>

                    {/* Subheadline */}
                    <p className="text-cream/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light">
                        Kami merancang dan membangun hunian tropis yang menyatu dengan alam —
                        dengan material premium, desain timeless, dan nilai investasi yang terus berkembang.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="#contact"
                            className="group relative px-8 py-4 bg-gold text-bark-deeper font-semibold text-sm tracking-wide rounded overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(184,138,110,0.4)]"
                        >
                            <span className="relative z-10">Mulai Konsultasi</span>
                            <div className="absolute inset-0 bg-gold-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </a>
                        <a
                            href="#portfolio"
                            className="flex items-center gap-3 text-cream/80 hover:text-cream transition-colors duration-200 group"
                        >
                            <div className="w-11 h-11 rounded-full border border-cream/30 flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                                <Play size={14} className="ml-0.5 text-gold" />
                            </div>
                            <span className="text-sm tracking-wide">Lihat Portofolio</span>
                        </a>
                    </div>
                </div>

                {/* Stats floating bottom */}
                <div className="absolute bottom-12 right-8 hidden lg:flex flex-col gap-6">
                    <div className="text-right">
                        <div className="font-serif text-4xl text-gold">100+</div>
                        <div className="text-cream/50 text-xs tracking-widest uppercase mt-1">Proyek Selesai</div>
                    </div>
                    <div className="w-px h-12 bg-gold/30 self-end" />
                    <div className="text-right">
                        <div className="font-serif text-4xl text-gold">7+</div>
                        <div className="text-cream/50 text-xs tracking-widest uppercase mt-1">Tahun Pengalaman</div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
                <ArrowDown size={16} className="text-gold/60" />
                <span className="text-cream/30 text-xs tracking-widest uppercase">Scroll</span>
            </div>
        </section>
    );
}