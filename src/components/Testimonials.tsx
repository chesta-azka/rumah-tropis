"use client";

import { useInView } from '@/hooks/useInView';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Bapak Hendra Wijaya',
        title: 'Pengusaha, Jakarta',
        rating: 5,
        text: 'Rumah Tropis benar-benar memahami visi kami. Mereka tidak sekadar membangun — mereka menciptakan ruang yang terasa hidup. Setiap detail diperhatikan, dari pemilihan batu alam hingga sirkulasi udara yang sempurna.',
        project: 'Villa Pribadi, Bali',
        img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    },
    {
        name: 'Ibu Sari Puspita',
        title: 'Direktur F&B, Surabaya',
        rating: 5,
        text: 'Kami memercayakan proyek boutique hotel kami kepada Rumah Tropis dan hasilnya melampaui ekspektasi. Progress report mingguan membuat kami tenang meski ada di kota berbeda. Sangat profesional.',
        project: 'Boutique Hotel, Lombok',
        img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    },
    {
        name: 'Bapak Rizky Santosa',
        title: 'Arsitek Independen, Bandung',
        rating: 5,
        text: 'Sebagai arsitek, saya sangat kritis soal kualitas konstruksi. Rumah Tropis adalah salah satu kontraktor yang benar-benar menghormati gambar desain dan menjalankannya dengan presisi tinggi.',
        project: 'Rumah Tinggal, Bandung',
        img: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
    },
    {
        name: 'Keluarga Budiman',
        title: 'Klien Residensial, Yogyakarta',
        rating: 5,
        text: 'Dari konsultasi pertama hingga serah terima kunci, tim Rumah Tropis selalu responsif dan transparan. Budget control mereka sangat membantu kami tetap on track tanpa mengorbankan kualitas.',
        project: 'Hunian Tropis, Yogyakarta',
        img: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    },
];

export default function Testimonials() {
    const { ref, inView } = useInView(0.1);
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="py-28 px-6"
            style={{ backgroundColor: '#4D3C2F' }}
        >
            <div className="max-w-7xl mx-auto">
                <div className={`text-center mb-16 reveal ${inView ? 'visible' : ''}`}>
                    <span className="text-gold text-xs tracking-[0.3em] uppercase">Suara Klien</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 gold-line-center">
                        Apa Kata Mereka
                    </h2>
                </div>

                {/* Main testimonial card */}
                <div className={`reveal ${inView ? 'visible' : ''} delay-200 max-w-4xl mx-auto`}>
                    <div
                        className="rounded-3xl border border-gold/15 p-10 md:p-14 relative overflow-hidden"
                        style={{ backgroundColor: 'rgba(28,21,16,0.6)' }}
                    >
                        {/* Large quote mark */}
                        <Quote
                            size={80}
                            className="absolute top-8 right-10 text-gold/8"
                            strokeWidth={1}
                        />

                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Avatar */}
                            <div className="flex-shrink-0">
                                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-gold/30">
                                    <img
                                        src={testimonials[current].img}
                                        alt={testimonials[current].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex items-center gap-1 mb-4">
                                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                                        <Star key={i} size={14} className="text-gold fill-gold" />
                                    ))}
                                </div>
                                <p className="text-cream/80 text-lg md:text-xl leading-relaxed font-light italic mb-6">
                                    "{testimonials[current].text}"
                                </p>
                                <div>
                                    <div className="text-cream font-semibold">{testimonials[current].name}</div>
                                    <div className="text-cream/40 text-sm mt-0.5">{testimonials[current].title}</div>
                                    <div className="text-gold text-xs tracking-wide mt-1">{testimonials[current].project}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8">
                        {/* Dots */}
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-2 bg-gold' : 'w-2 h-2 bg-gold/25 hover:bg-gold/50'
                                        }`}
                                />
                            ))}
                        </div>
                        {/* Arrows */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={prev}
                                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-all duration-300"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                onClick={next}
                                className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-all duration-300"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mini cards row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                    {testimonials.map((t, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`testimonial-card p-4 rounded-xl border text-left transition-all duration-300 ${i === current
                                ? 'border-gold/40 bg-gold/8'
                                : 'border-gold/10 hover:border-gold/25'
                                }`}
                            style={{ backgroundColor: i === current ? 'rgba(184,138,110,0.08)' : 'rgba(28,21,16,0.4)' }}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <img src={t.img} alt={t.name} className="w-8 h-8 rounded-full object-cover border border-gold/25" />
                                <div className="text-cream text-xs font-medium truncate">{t.name.split(' ').slice(0, 2).join(' ')}</div>
                            </div>
                            <p className="text-cream/40 text-xs line-clamp-2">{t.text.slice(0, 60)}...</p>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}