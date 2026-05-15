"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Play, MousePointerClick } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bark pt-20">
            {/* --- ELEMEN DEKORATIF POJOK (Background Decor) --- */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest/10 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3" />
            
            {/* Garis Border Frame Tipis (Pojok) */}
            <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-gold/20 z-0" />
            <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-gold/20 z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="flex flex-col items-center text-center space-y-10">
                    
                    {/* 1. LABEL & HEADLINE */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-12 h-px bg-gold/50" />
                            <span className="text-gold text-xs tracking-[0.5em] uppercase font-medium">
                                Luxury Tropical Specialist
                            </span>
                            <div className="w-12 h-px bg-gold/50" />
                        </div>

                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.1] mb-6">
                            Ciptakan Bangunan <br />
                            <span className="italic text-gold">Bernilai Tinggi</span>
                        </h1>

                        <p className="text-cream/70 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                            Manifestasi kemewahan tropis yang menyatu dengan alam. Kami memastikan setiap desain 
                            terwujud secara presisi dengan nilai investasi yang terus bertumbuh.
                        </p>
                    </motion.div>

                    {/* 2. VIDEO PEMBUKA (The Masterpiece) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative w-full max-w-5xl group"
                    >
                        {/* Efek Cahaya di belakang video */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 to-forest/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
                        
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <video 
                                autoPlay 
                                loop 
                                muted 
                                playsInline 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            >
                                <source src="/videos/IMG_8223.MOV" type="video/mp4" />
                            </video>
                            
                            {/* Overlay Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-bark/60 via-transparent to-transparent pointer-events-none" />
                            
                            {/* Label Video */}
                            <div className="absolute bottom-6 left-6 flex items-center gap-3 bg-bark/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                                <span className="text-[10px] text-cream tracking-[0.2em] uppercase">Process Transformation</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. CTAs & STATS */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col md:flex-row items-center gap-8 w-full justify-between pt-10"
                    >
                        {/* Tombol Kiri */}
                        <div className="flex items-center gap-6">
                            <button className="px-10 py-4 bg-gold text-bark font-bold text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-cream transition-all duration-500 shadow-xl shadow-gold/10">
                                Mulai Konsultasi
                            </button>
                            <a href="#portfolio" className="flex items-center gap-3 group">
                                <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-all duration-500">
                                    <Play size={12} className="text-gold group-hover:text-bark fill-current" />
                                </div>
                                <span className="text-xs uppercase tracking-widest text-cream/80 group-hover:text-gold transition-colors">Lihat Karya</span>
                            </a>
                        </div>

                        {/* Stats Kanan (Simple & Clean) */}
                        <div className="flex gap-12 border-l border-white/10 pl-8 hidden md:flex">
                            <div className="text-left">
                                <div className="text-2xl font-serif text-gold leading-none">100+</div>
                                <div className="text-[10px] text-cream/40 uppercase tracking-widest mt-2">Projects</div>
                            </div>
                            <div className="text-left">
                                <div className="text-2xl font-serif text-gold leading-none">07+</div>
                                <div className="text-[10px] text-cream/40 uppercase tracking-widest mt-2">Years Exp</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50">
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-gold rotate-90 origin-left mt-8">Scroll</span>
            </div>
        </section>
    );
}