"use client";

import { useInView } from '@/hooks/useInView';
import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactCTA() {
    const { ref, inView } = useInView(0.1);
    const [form, setForm] = useState({ name: '', phone: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
    };

    return (
        <section
            id="contact"
            ref={ref as React.RefObject<HTMLElement>}
            className="py-28 px-6 relative overflow-hidden"
            style={{ backgroundColor: '#4D3C2F' }}
        >
            {/* Background image with overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                    alt="Contact Background"
                    className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-bark/80" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left */}
                    <div className={`reveal-left ${inView ? 'visible' : ''}`}>
                        <span className="text-gold text-xs tracking-[0.3em] uppercase">Mulai Perjalanan Anda</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 mb-4 leading-tight gold-line">
                            Wujudkan Hunian<br />
                            <span className="italic text-gold">Impian Anda</span>
                        </h2>
                        <p className="text-cream/60 leading-relaxed mt-6 mb-8">
                            Konsultasi pertama Anda sepenuhnya gratis. Ceritakan visi Anda dan biarkan kami
                            menunjukkan bagaimana kami dapat mewujudkannya.
                        </p>

                        <div className="space-y-5">
                            {[
                                { label: 'Telepon / WhatsApp', value: '+62 812 3456 7890' },
                                { label: 'Email', value: 'halo@rumahtropis.id' },
                                { label: 'Studio', value: 'Jl. Raya Tropis No. 12, Jakarta Selatan' },
                                { label: 'Jam Operasional', value: 'Senin–Sabtu, 09.00–18.00 WIB' },
                            ].map((item) => (
                                <div key={item.label}>
                                    <div className="text-cream/35 text-xs tracking-widest uppercase mb-1">{item.label}</div>
                                    <div className="text-cream text-sm">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className={`reveal-right ${inView ? 'visible' : ''} delay-200`}>
                        <div
                            className="rounded-2xl border border-gold/20 p-8"
                            style={{ backgroundColor: 'rgba(28,21,16,0.6)', backdropFilter: 'blur(12px)' }}
                        >
                            {sent ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 rounded-full bg-forest/20 border border-forest/40 flex items-center justify-center mx-auto mb-4">
                                        <Send size={24} className="text-forest-light" />
                                    </div>
                                    <h3 className="font-serif text-cream text-2xl mb-2">Pesan Terkirim!</h3>
                                    <p className="text-cream/50 text-sm">Tim kami akan menghubungi Anda dalam 1x24 jam.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label className="text-cream/50 text-xs tracking-wide uppercase block mb-2">Nama Lengkap</label>
                                        <input
                                            type="text"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            required
                                            placeholder="Bapak / Ibu..."
                                            className="w-full bg-bark/60 border border-gold/20 rounded-lg px-4 py-3 text-cream text-sm placeholder-cream/25 focus:outline-none focus:border-gold/50 transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-cream/50 text-xs tracking-wide uppercase block mb-2">WhatsApp / Telepon</label>
                                        <input
                                            type="tel"
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            required
                                            placeholder="+62..."
                                            className="w-full bg-bark/60 border border-gold/20 rounded-lg px-4 py-3 text-cream text-sm placeholder-cream/25 focus:outline-none focus:border-gold/50 transition-colors duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-cream/50 text-xs tracking-wide uppercase block mb-2">Ceritakan Proyek Anda</label>
                                        <textarea
                                            value={form.message}
                                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            required
                                            rows={4}
                                            placeholder="Lokasi, luas tanah, anggaran, dll..."
                                            className="w-full bg-bark/60 border border-gold/20 rounded-lg px-4 py-3 text-cream text-sm placeholder-cream/25 focus:outline-none focus:border-gold/50 transition-colors duration-200 resize-none"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-gold text-bark-deeper font-semibold text-sm rounded-lg hover:bg-gold-light transition-all duration-300 hover:shadow-[0_8px_30px_rgba(184,138,110,0.35)] flex items-center justify-center gap-2"
                                    >
                                        Kirim & Konsultasi Gratis
                                        <Send size={15} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}