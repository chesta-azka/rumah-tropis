"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Client Story 01",
        role: "Homeowner",
        content: "Kepuasan luar biasa atas detail arsitektur yang diberikan. Rumah kami bukan sekadar bangunan, tapi karya seni.",
        img: "/images/portfolio/IMG_7838.webp",
    },
    {
        id: 2,
        name: "Client Story 02",
        role: "Villa Owner",
        content: "Tim yang sangat profesional. Mereka berhasil mewujudkan konsep tropis modern yang kami impikan selama bertahun-tahun.",
        img: "/images/portfolio/IMG_7840.webp",
    },
    {
        id: 3,
        name: "Client Story 03",
        role: "Private Investor",
        content: "Investasi yang sangat sepadan. Nilai properti kami naik drastis setelah pengerjaan desain dari Rumah Tropis.",
        img: "/images/portfolio/IMG_7841.webp",
    },
    {
        id: 4,
        name: "Client Story 04",
        role: "Residency Owner",
        content: "Detail material dan pencahayaan alaminya juara. Rumah jadi terasa sangat luas dan sejuk setiap harinya.",
        img: "/images/portfolio/IMG_7842.webp",
    },
    {
        id: 5,
        name: "Client Story 05",
        role: "Estate Owner",
        content: "Komunikasi tim sangat transparan. Meskipun saya jarang ke lokasi, progres pembangunan tetap berjalan sesuai jadwal.",
        img: "/images/portfolio/IMG_7843.webp",
    },
    {
        id: 6,
        name: "Client Story 06",
        role: "Bussiness Owner",
        content: "Sangat memperhatikan detail dari gambar kerja hingga konstruksi fisik. Hasil akhirnya benar-benar presisi.",
        img: "/images/portfolio/IMG_7844.webp",
    },
    {
        id: 7,
        name: "Client Story 07",
        role: "Architecture Enthusiast",
        content: "Rumah Tropis mengerti cara membuat hunian yang 'bernafas'. Sirkulasi udaranya membuat rumah sangat nyaman.",
        img: "/images/portfolio/IMG_7846.webp",
    },
    {
        id: 8,
        name: "Client Story 08",
        role: "Homeowner",
        content: "Proses desainnya sangat solutif. Mereka bisa menggabungkan keinginan saya dengan estetika tropis yang mewah.",
        img: "/images/portfolio/IMG_7847.webp",
    },
    {
        id: 9,
        name: "Client Story 09",
        role: "Modern Villa Owner",
        content: "Tim yang energik dan penuh ambisi. Mereka memberikan dedikasi 100% untuk hasil yang terbaik.",
        img: "/images/portfolio/IMG_7849.webp",
    },
    {
        id: 10,
        name: "Client Story 10",
        role: "Family Home Owner",
        content: "Mewujudkan rumah impian keluarga kami dengan pengerjaan yang rapi dan material yang berkualitas tinggi.",
        img: "/images/portfolio/IMG_7851.webp",
    }
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-bark overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <span className="text-gold text-xs tracking-[0.5em] uppercase">Voices of Trust</span>
                        <h2 className="font-serif text-4xl md:text-6xl text-cream">Apa Kata <span className="italic text-gold">Klien Kami</span></h2>
                        <div className="w-20 h-[1px] bg-gold/30 mx-auto mt-6" />
                    </motion.div>
                </div>

                {/* Testimonial Grid */}
                <div className="flex flex-wrap justify-center gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(25%-2rem)] min-w-[280px]"
                        >
                            {/* Card Container */}
                            <div className="relative bg-bark-lighter p-8 rounded-2xl border border-white/5 h-full flex flex-col justify-between transition-all duration-500 hover:border-gold/30 hover:-translate-y-2">
                                
                                <Quote className="text-gold/20 mb-6 group-hover:text-gold/40 transition-colors" size={40} />
                                
                                <p className="text-cream/70 font-light leading-relaxed mb-8 italic">
                                    "{item.content}"
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    {/* Avatar dari file asli lu */}
                                    <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/20">
                                        <img 
                                            src={item.img} 
                                            alt={item.name} 
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-cream font-serif text-sm">{item.name}</h4>
                                        <p className="text-gold/60 text-[10px] uppercase tracking-widest">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Info Note (Kecil di bawah) */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center text-white/20 text-[10px] mt-16 uppercase tracking-[0.3em]"
                >
                    &copy; Rumah Tropis — Memberikan Bukti, Bukan Janji.
                </motion.p>
            </div>
        </section>
    );
}