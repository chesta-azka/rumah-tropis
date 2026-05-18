'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Berapa lama proses desain hingga selesai konstruksi?",
    answer: "Tergantung pada skala dan kompleksitas proyek, proses desain biasanya memakan waktu 2-3 bulan, dan konstruksi sekitar 8-12 bulan."
  },
  {
    question: "Apakah saya bisa menggunakan jasa desainnya saja?",
    answer: "Tentu saja. Kami menyediakan paket layanan yang fleksibel, mulai dari desain arsitektur saja, hingga paket lengkap desain & bangun."
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer: "Pembayaran dilakukan secara bertahap sesuai dengan progres pekerjaan yang tertuang dalam kontrak, sehingga transparan dan aman bagi kedua belah pihak."
  },
  {
    question: "Apakah saya bisa mengajukan revisi pada saat proses desain?",
    answer: "Ya, kami memberikan beberapa kali kesempatan revisi pada fase desain konseptual untuk memastikan hasil akhir sesuai dengan keinginan Anda."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#050505] text-white p-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#0D0D0D] rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left p-6"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0, marginBottom: 0, padding: 0 }}
                    animate={{ height: 'auto', opacity: 1, marginTop: '1rem', marginBottom: '1rem', padding: '1.5rem'}}
                    exit={{ height: 0, opacity: 0, marginTop: 0, marginBottom: 0, padding: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-[#A3A3A3]">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
