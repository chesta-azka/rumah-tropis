'use client';

import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "1. Konsultasi & Konsep Awal",
    description: "Kami mendengarkan visi, kebutuhan, dan budget Anda untuk merumuskan konsep desain yang selaras."
  },
  {
    title: "2. Desain Arsitektur & RAB",
    description: "Pengembangan desain detail, gambar kerja, visualisasi 3D, hingga Rencana Anggaran Biaya (RAB) yang transparan."
  },
  {
    title: "3. Pra-Konstruksi & Perizinan",
    description: "Pengurusan IMB dan persiapan teknis di lapangan sebelum konstruksi dimulai."
  },
  {
    title: "4. Konstruksi & Pengawasan",
    description: "Pelaksanaan pembangunan dengan material premium dan pengawasan kualitas harian oleh arsitek."
  },
  {
    title: "5. Serah Terima & Garansi",
    description: "Penyerahan kunci rumah impian Anda, lengkap dengan garansi konstruksi sebagai jaminan kualitas."
  }
];

const Process = () => {
  return (
    <section id="process" className="w-full bg-[#050505] text-white p-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Proses Desain & Bangun Terstruktur</h2>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-[#C5A880] opacity-20"></div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-12 flex items-center justify-center"
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <h3 className="text-2xl font-bold mb-2 text-[#C5A880]">{step.title}</h3>
                <p className="text-[#A3A3A3]">{step.description}</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 bg-[#050505] p-2 rounded-full">
                <CheckCircle className="text-[#C5A880]" size={32} />
              </div>
              <div className={`w-1/2`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
