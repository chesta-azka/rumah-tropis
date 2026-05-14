"use client";

import { useInView } from '@/hooks/useInView';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        q: 'Berapa lama proses desain arsitektur berlangsung?',
        a: 'Proses desain umumnya memakan waktu 4–8 minggu tergantung kompleksitas proyek. Ini mencakup fase konsep, design development, dan gambar konstruksi final. Kami selalu melibatkan klien di setiap tahap untuk memastikan hasil sesuai visi.',
    },
    {
        q: 'Apakah Rumah Tropis juga menangani perizinan bangunan?',
        a: 'Ya, kami memiliki tim yang berpengalaman dalam pengurusan IMB (Izin Mendirikan Bangunan) dan dokumen perizinan lainnya. Layanan pendampingan perizinan tersedia di paket Architecture dan All-in.',
    },
    {
        q: 'Bagaimana sistem pembayaran untuk proyek konstruksi?',
        a: 'Kami menerapkan sistem pembayaran bertahap yang adil: 30% di awal, 30% saat struktur selesai, 30% saat finishing, dan 10% saat serah terima. Setiap tahap disertai laporan progres yang detail.',
    },
    {
        q: 'Apakah ada garansi setelah proyek selesai?',
        a: 'Kami memberikan garansi struktural 2 tahun untuk paket All-in dan 1 tahun untuk paket lainnya. Tim after-sales kami siap membantu menangani keluhan dan perbaikan selama masa garansi.',
    },
    {
        q: 'Bisakah saya meminta modifikasi desain di tengah proses konstruksi?',
        a: 'Perubahan minor masih dapat dilakukan dengan persetujuan tertulis dan penyesuaian biaya jika diperlukan. Kami sangat menyarankan finalisasi desain sebelum konstruksi dimulai untuk menghindari keterlambatan.',
    },
    {
        q: 'Apa yang membedakan Rumah Tropis dari kontraktor biasa?',
        a: 'Kami menggabungkan keahlian desain arsitektur tropis, sistem konstruksi terstandar, transparansi penuh melalui progress report digital, dan komitmen pada material premium. Kami bukan sekadar kontraktor — kami adalah mitra investasi properti jangka panjang Anda.',
    },
];

export default function FAQ() {
    const { ref, inView } = useInView(0.1);
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section
            id="faq"
            ref={ref as React.RefObject<HTMLElement>}
            className="py-28 px-6"
            style={{ backgroundColor: '#1C1510' }}
        >
            <div className="max-w-3xl mx-auto">
                <div className={`text-center mb-14 reveal ${inView ? 'visible' : ''}`}>
                    <span className="text-gold text-xs tracking-[0.3em] uppercase">Yang Sering Ditanyakan</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 gold-line-center">
                        FAQ
                    </h2>
                </div>

                <div className="space-y-0">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`faq-item reveal ${inView ? 'visible' : ''} delay-${i * 100}`}
                        >
                            <button
                                className="w-full flex items-start justify-between gap-4 py-6 text-left group"
                                onClick={() => setOpen(open === i ? null : i)}
                            >
                                <span
                                    className={`text-base font-medium leading-snug transition-colors duration-200 ${open === i ? 'text-gold' : 'text-cream group-hover:text-cream'
                                        }`}
                                >
                                    {faq.q}
                                </span>
                                <ChevronDown
                                    size={18}
                                    className={`flex-shrink-0 mt-0.5 transition-all duration-300 ${open === i ? 'rotate-180 text-gold' : 'text-cream/40'
                                        }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-400 ease-in-out ${open === i ? 'max-h-60 pb-6' : 'max-h-0'
                                    }`}
                            >
                                <p className="text-cream/55 leading-relaxed text-sm">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}