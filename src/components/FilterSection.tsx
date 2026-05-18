'use client';

import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const FilterSection = () => {
  return (
    <section id="filter" className="w-full bg-[#050505] text-white p-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#0D0D0D] p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-6">Pilih Kami Jika...</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Check className="text-[#C5A880] mr-4 mt-1" />
              <p className="text-[#A3A3A3]">Anda ingin proses desain & bangun yang terstruktur, efisien, dan bebas stres.</p>
            </li>
            <li className="flex items-start">
              <Check className="text-[#C5A880] mr-4 mt-1" />
              <p className="text-[#A3A3A3]">Anda menghargai kualitas premium, detail arsitektur yang presisi, dan hasil akhir yang memukau.</p>
            </li>
            <li className="flex items-start">
              <Check className="text-[#C5A880] mr-4 mt-1" />
              <p className="text-[#A3A3A3]">Anda mencari mitra arsitek senior yang mampu menerjemahkan visi Anda menjadi sebuah mahakarya.</p>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#0D0D0D] p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-6">Jangan Pilih Kami Jika...</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <X className="text-gray-500 mr-4 mt-1" />
              <p className="text-[#A3A3A3]">Anda mencari solusi 'asal jadi' dan 'harga termurah' tanpa mementingkan kualitas jangka panjang.</p>
            </li>
            <li className="flex items-start">
              <X className="text-gray-500 mr-4 mt-1" />
              <p className="text-[#A3A3A3]">Anda tidak menghargai proses kolaboratif dan masukan dari para ahli di bidangnya.</p>
            </li>
            <li className="flex items-start">
              <X className="text-gray-500 mr-4 mt-1" />
              <p className="text-[#A3A3A3]">Anda lebih suka mengambil risiko mengelola semuanya sendiri tanpa panduan profesional.</p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default FilterSection;
