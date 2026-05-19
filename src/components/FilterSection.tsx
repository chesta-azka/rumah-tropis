'use client';

import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const FilterSection = () => {
  return (
    <section id="filter" className="w-full bg-[#050505] text-white py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#0D0D0D] p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-6 tracking-wide">Pilih Kami Jika...</h2>
            <ul className="space-y-5">
              <li className="flex items-start">
                <Check className="text-[#C5A880] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-[#A3A3A3] text-base lg:text-lg">Anda ingin proses desain & bangun yang terstruktur, efisien, dan bebas stres.</p>
              </li>
              <li className="flex items-start">
                <Check className="text-[#C5A880] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-[#A3A3A3] text-base lg:text-lg">Anda menghargai kualitas premium, detail arsitektur yang presisi, dan hasil akhir yang memukau.</p>
              </li>
              <li className="flex items-start">
                <Check className="text-[#C5A880] mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-[#A3A3A3] text-base lg:text-lg">Anda mencari mitra arsitek senior yang mampu menerjemahkan visi Anda menjadi sebuah mahakarya.</p>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-[#0D0D0D] p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl shadow-black/40"
          >
            <h2 className="text-3xl lg:text-4xl font-serif font-semibold mb-6 tracking-wide">Jangan Pilih Kami Jika...</h2>
            <ul className="space-y-5">
              <li className="flex items-start">
                <X className="text-gray-600 mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-[#A3A3A3] text-base lg:text-lg">Anda mencari solusi &apos;asal jadi&apos; dan &apos;harga termurah&apos; tanpa mementingkan kualitas jangka panjang.</p>
              </li>
              <li className="flex items-start">
                <X className="text-gray-600 mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-[#A3A3A3] text-base lg:text-lg">Anda tidak menghargai proses kolaboratif dan masukan dari para ahli di bidangnya.</p>
              </li>
              <li className="flex items-start">
                <X className="text-gray-600 mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-[#A3A3A3] text-base lg:text-lg">Anda lebih suka mengambil risiko mengelola semuanya sendiri tanpa panduan profesional.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
