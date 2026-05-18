'use client';

import { ShieldCheck, Award, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const guarantees = [
  {
    icon: <ShieldCheck className="text-[#C5A880] mb-4" size={48} />,
    title: "Garansi Konstruksi 1 Tahun",
    description: "Kami memberikan garansi untuk semua pekerjaan konstruksi, mencakup perbaikan struktural dan kebocoran."
  },
  {
    icon: <Award className="text-[#C5A880] mb-4" size={48} />,
    title: "Jaminan Kualitas Material",
    description: "Kami hanya menggunakan material premium yang telah teruji kualitas dan daya tahannya untuk iklim tropis."
  },
  {
    icon: <MessageSquare className="text-[#C5A880] mb-4" size={48} />,
    title: "Jaminan Kepuasan Desain",
    description: "Kami bekerja sama dengan Anda hingga desain akhir benar-benar sesuai dengan visi dan impian Anda."
  }
];

const Guarantee = () => {
  return (
    <section id="guarantee" className="w-full bg-[#0D0D0D] text-white p-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Ketenangan Pikiran Anda Adalah Prioritas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#050505] p-8 rounded-lg text-center border border-transparent hover:border-[#C5A880] transition-colors duration-300"
            >
              <div className="flex justify-center">{guarantee.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{guarantee.title}</h3>
              <p className="text-[#A3A3A3]">{guarantee.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
