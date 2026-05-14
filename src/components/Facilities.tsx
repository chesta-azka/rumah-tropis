"use client";

import { useInView } from '../hooks/useInView';
import { FileText, ShieldCheck, Wallet, Clock, Camera, HeadphonesIcon } from 'lucide-react';

const facilities = [
    {
        icon: FileText,
        title: 'Progress Report',
        desc: 'Laporan perkembangan proyek secara berkala — foto, video, dan data aktual langsung ke tangan Anda.',
    },
    {
        icon: ShieldCheck,
        title: 'Cek Mutu Berkala',
        desc: 'Inspeksi kualitas material dan pengerjaan di setiap tahap konstruksi oleh tim QC profesional.',
    },
    {
        icon: Wallet,
        title: 'Budget Control',
        desc: 'Transparansi penuh atas alokasi anggaran — tidak ada biaya tersembunyi, laporan keuangan real-time.',
    },
    {
        icon: Clock,
        title: 'Tepat Waktu',
        desc: 'Komitmen jadwal dengan sistem monitoring proyek digital yang ketat dan akuntabel.',
    },
    {
        icon: Camera,
        title: 'Dokumentasi 3D',
        desc: 'Visualisasi 3D dan rendering fotorealistis sebelum konstruksi dimulai untuk kepastian desain.',
    },
    {
        icon: HeadphonesIcon,
        title: 'After Sales Support',
        desc: 'Layanan purna jual dan garansi bangunan selama 1 tahun untuk ketenangan pikiran Anda.',
    },
];

export default function Facilities() {
    const { ref, inView } = useInView(0.1);

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="py-28 px-6"
            style={{ backgroundColor: '#2E231B' }}
        >
            <div className="max-w-7xl mx-auto">
                <div className={`text-center mb-16 reveal ${inView ? 'visible' : ''}`}>
                    <span className="text-gold text-xs tracking-[0.3em] uppercase">Keunggulan Eksklusif</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-cream mt-4 gold-line-center">
                        Fasilitas Premium
                    </h2>
                    <p className="text-cream/50 mt-6 max-w-xl mx-auto leading-relaxed">
                        Setiap klien mendapatkan akses ke sistem layanan eksklusif kami yang dirancang untuk
                        memastikan ketenangan pikiran selama proses pembangunan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {facilities.map((f, i) => {
                        const Icon = f.icon;
                        return (
                            <div
                                key={f.title}
                                className={`reveal ${inView ? 'visible' : ''} delay-${i * 100} group p-7 rounded-2xl border border-gold/15 transition-all duration-400 hover:border-gold/35 cursor-default`}
                                style={{ backgroundColor: 'rgba(77,60,47,0.4)' }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl border border-forest/40 bg-forest/10 flex items-center justify-center flex-shrink-0 group-hover:bg-forest/20 transition-colors duration-300">
                                        <Icon size={20} className="text-forest-light" />
                                    </div>
                                    <div>
                                        <h3 className="text-cream font-semibold text-base mb-2">{f.title}</h3>
                                        <p className="text-cream/50 text-sm leading-relaxed">{f.desc}</p>
                                    </div>
                                </div>
                                <div className="mt-5 h-px bg-gradient-to-r from-gold/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}