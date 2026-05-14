"use client";

import React from 'react';

// Link Navigasi
const navLinks = [
    { label: 'Layanan', href: '#services' },
    { label: 'Portofolio', href: '#portfolio' },
    { label: 'Filosofi', href: '#philosophy' },
    { label: 'Harga', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontak', href: '#contact' },
];

// Ikon Sosial Media (SVG Manual - Anti Library Error)
const socials = [
    {
        label: 'Instagram',
        href: '#',
        icon: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
        )
    },
    {
        label: 'YouTube',
        href: '#',
        icon: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
        )
    },
    {
        label: 'WhatsApp',
        href: '#',
        icon: () => (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        )
    }
];

export default function Footer() {
    return (
        <footer className="bg-bark-deeper pt-16 pb-8 px-6 border-t border-gold/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-9 h-9 rounded border border-gold/60 flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M9 1L16 6V17H2V6L9 1Z" stroke="#B88A6E" strokeWidth="1.2" fill="none" />
                                    <path d="M6 17V11H12V17" stroke="#B88A6E" strokeWidth="1.2" />
                                </svg>
                            </div>
                            <span className="font-serif text-cream text-lg">Rumah Tropis</span>
                        </div>
                        <p className="text-cream/45 text-sm leading-relaxed max-w-sm mb-6">
                            Studio arsitektur dan konstruksi yang berdedikasi untuk menghadirkan hunian tropis premium
                            yang menyatu dengan alam dan bernilai investasi tinggi.
                        </p>
                        <div className="flex items-center gap-3">
                            {socials.map((s) => {
                                const Icon = s.icon;
                                return (
                                    <a
                                        key={s.label}
                                        href={s.href}
                                        aria-label={s.label}
                                        className="w-9 h-9 rounded-lg border border-gold/20 flex items-center justify-center text-cream/50 hover:border-gold/50 hover:text-gold transition-all duration-300"
                                    >
                                        <Icon />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <div className="text-cream/35 text-xs tracking-[0.2em] uppercase mb-5">Navigasi</div>
                        <ul className="space-y-3">
                            {navLinks.map((l) => (
                                <li key={l.label}>
                                    <a href={l.href} className="text-cream/55 text-sm hover:text-gold transition-colors duration-200">
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kolom Kontak & Alamat */}
                    <div>
                      <h4 className="text-[#F5F2ED]/30 text-xs font-bold tracking-[0.2em] uppercase mb-6">Kontak & Alamat</h4>
                        <div className="space-y-5">
                            {/* Alamat Resmi */}
                                <div className="flex items-start gap-4">
                                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B88A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                      <circle cx="12" cy="10" r="3" />
                                                            </svg>
                                                                  <p className="text-[#F5F2ED]/60 text-sm leading-relaxed">
                                                                          Eightyeight @Kasablanka Office Tower A Lantai 26 Unit F, Jl. Casablanca Raya No.Kav. 88, Menteng Dalam, Kec. [span_0](start_span)Tebet, Jakarta Selatan, 12870[span_0](end_span)
                                                                                </p>
                                                                                    </div>

                                                                                        {/* WhatsApp Resmi */}
                                                                                            <div className="flex items-center gap-4">
                                                                                                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B88A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                                                                                                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                                                                                                </svg>
                                                                                                                      [span_1](start_span)<span className="text-[#F5F2ED]/60 text-sm">+62 813-8969-965[span_1](end_span)</span>
                                                                                                                          </div>

                                                                                                                              {/* Email Resmi */}
                                                                                                                                  <div className="flex items-center gap-4">
                                                                                                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#B88A6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                                                                                                                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                                                                                                                        <polyline points="22,6 12,13 2,6" />
                                                                                                                                                              </svg>
                                                                                                                                                                    [span_2](start_span)<span className="text-[#F5F2ED]/60 text-sm">hello@rumahtropis.co.id[span_2](end_span)</span>
                                                                                                                                                                        </div>
                                                                                                                                                                          </div>
                                                                                                                                                                          </div>
                                                                                                                                                                          

                                                                                                                                                                                                                                                            

                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-cream/25 text-xs">
                        © 2026 Rumah Tropis. Hak cipta dilindungi.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-cream/25 text-xs hover:text-cream/50 transition-colors duration-200">
                            Kebijakan Privasi
                        </a>
                        <a href="#" className="text-cream/25 text-xs hover:text-cream/50 transition-colors duration-200">
                            Syarat & Ketentuan
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}