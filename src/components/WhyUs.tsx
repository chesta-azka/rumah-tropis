'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from './Icons'; // Corrected import

const whyUsPoints = [
    "Desain Berkelanjutan yang Menyatu dengan Alam",
    "Material Berkualitas dan Tahan Cuaca Tropis",
    "Fungsionalitas Tinggi dengan Sirkulasi Udara Optimal",
    "Estetika Mewah yang Merefleksikan Gaya Hidup Anda",
    "Tim Arsitek dan Desainer Interior Berpengalaman",
    "Proses Konstruksi yang Terjamin dan Tepat Waktu"
]

const WhyUs = () => {
  return (
    <section id="why-us" className="w-full bg-[#0D0D0D] text-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="pr-4"
        >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 tracking-wide">Kenapa Memilih Arsitektur Tropis?</h2>
            <p className="text-[#A3A3A3] text-lg lg:text-xl mb-8">
                Arsitektur tropis bukan hanya soal estetika, tetapi tentang menciptakan ruang hidup yang harmonis dengan iklim. Kami menggabungkan kearifan lokal dengan teknologi modern untuk menghasilkan hunian yang tidak hanya indah, tetapi juga hemat energi, sehat, dan nyaman sepanjang tahun.
            </p>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                {whyUsPoints.map((point, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                        className="flex items-start"
                    >
                        <CheckCircle className="text-[#C5A880] mt-1 mr-4 flex-shrink-0" size={22} />
                        <p className="text-base text-[#E0E0E0]">{point}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
