'use client';

import { motion, Variants } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

const IdealClientSection = () => {
  const pilihJika = [
    "Anda ingin desain yang tak lekang oleh waktu.",
    "Anda memprioritaskan kualitas & detail.",
    "Anda melihat properti sebagai investasi jangka panjang.",
    "Anda menghargai proses yang terstruktur & transparan.",
  ];

  const janganPilihJika = [
    "Anda mencari solusi desain tercepat & termurah.",
    "Anda tidak mementingkan detail & kualitas akhir.",
    "Anda hanya berfokus pada biaya awal yang rendah.",
    "Anda tidak siap untuk berkolaborasi secara mendalam.",
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section className="py-20 md:py-32 bg-soft-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Apakah Kita Jodoh?</h2>
          <p className="mt-4 text-lg text-neutral-gray max-w-2xl mx-auto">Kami percaya pada kemitraan yang kuat. Lihat apakah gaya kerja kami cocok untuk Anda.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card: Pilih Kami Jika... */}
          <motion.div 
            className="bg-charcoal border border-rainforest-moss/30 rounded-lg p-8 h-full flex flex-col"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <CheckCircleIcon className="h-10 w-10 text-rainforest-moss mr-4" />
              <h3 className="text-2xl font-serif font-semibold text-white">Pilih Kami Jika...</h3>
            </div>
            <ul className="space-y-4 text-neutral-gray flex-grow">
              {pilihJika.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-rainforest-moss font-bold mr-3">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card: Jangan Pilih Kami Jika... */}
          <motion.div 
            className="bg-charcoal border border-copper-bronze/30 rounded-lg p-8 h-full flex flex-col"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <XCircleIcon className="h-10 w-10 text-copper-bronze mr-4" />
              <h3 className="text-2xl font-serif font-semibold text-white">Jangan Pilih Kami Jika...</h3>
            </div>
            <ul className="space-y-4 text-neutral-gray flex-grow">
              {janganPilihJika.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-copper-bronze font-bold mr-3">✗</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IdealClientSection;
