'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from './Icons'; // Corrected import

const processSteps = [
    { 
        title: "Konsultasi & Konsep",
        description: "Memahami visi dan kebutuhan Anda untuk menciptakan konsep desain awal yang selaras dengan impian Anda."
    },
    { 
        title: "Desain Arsitektur",
        description: "Mengembangkan denah, fasad, dan visualisasi 3D yang detail, memastikan setiap aspek fungsional dan estetis."
    },
    { 
        title: "Perencanaan & Izin",
        description: "Menyiapkan gambar kerja teknis, mengurus perizinan (IMB), hingga persiapan Rencana Anggaran Biaya (RAB)."
    },
    { 
        title: "Konstruksi & Pengawasan",
        description: "Melaksanakan pembangunan dengan standar tertinggi sambil melakukan pengawasan kualitas secara berkala."
    },
    { 
        title: "Serah Terima & Garansi",
        description: "Menyerahkan kunci rumah impian Anda, lengkap dengan masa garansi untuk ketenangan pikiran Anda."
    }
];

const Process = () => {
  return (
    <section id="process" className="w-full bg-[#050505] text-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
        >
            <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 tracking-wide">Proses Kerja Profesional Kami</h2>
            <p className="text-[#A3A3A3] text-lg lg:text-xl">
                Dari ide hingga realita, kami memandu Anda melalui setiap langkah dengan transparansi dan keahlian, memastikan proses yang mulus dan hasil yang memuaskan.
            </p>
        </motion.div>

        <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
            {processSteps.map((step, index) => (
                <motion.div 
                    key={index} 
                    className="md:flex items-center justify-center mb-12 md:mb-0 relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h3 className="text-2xl font-serif font-semibold text-[#C5A880] mb-3">{`0${index + 1}. ${step.title}`}</h3>
                            <p className="text-[#A3A3A3] leading-relaxed">{step.description}</p>
                        </motion.div>
                    </div>
                    <div className="hidden md:block md:w-2/12 md:order-1">
                        <motion.div 
                            className="w-8 h-8 bg-[#C5A880] rounded-full mx-auto flex items-center justify-center shadow-lg shadow-[#C5A880]/20"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, ease: "backOut" }}
                        >
                            <ChevronRight size={20} className="text-black"/>
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Process;
