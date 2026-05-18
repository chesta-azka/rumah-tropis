'use client';

import { Shield, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyUs = () => {
  return (
    <section id="why-us" className="w-full bg-[#050505] text-white p-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Kenapa Rumah Tropis?</h2>
        <p className="text-[#A3A3A3] text-lg max-w-3xl mx-auto mb-12">Mempercayakan pembangunan kepada kami berarti Anda berinvestasi pada ketenangan pikiran dan jaminan kualitas, bukan sekedar bangunan fisik.</p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-[#0D0D0D] p-8 rounded-lg border border-transparent hover:border-[#C5A880] transition-colors duration-300"
          >
            <div className="flex items-center mb-4">
              <AlertTriangle className="text-red-500 mr-4" size={40} />
              <h3 className="text-2xl font-bold">Risiko Bangun Sendiri</h3>
            </div>
            <ul className="space-y-3 text-[#A3A3A3]">
              <li>- Desain yang tidak optimal & pemborosan ruang.</li>
              <li>- Biaya tak terduga akibat perencanaan yang kurang matang.</li>
              <li>- Kualitas bangunan di bawah standar & rentan masalah.</li>
              <li>- Stres dan waktu yang terkuras untuk mengelola tukang & material.</li>
              <li>- Tidak ada jaminan & garansi hasil akhir.</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0D0D0D] p-8 rounded-lg border border-transparent hover:border-[#C5A880] transition-colors duration-300"
          >
            <div className="flex items-center mb-4">
              <Shield className="text-green-500 mr-4" size={40} />
              <h3 className="text-2xl font-bold">Jaminan Arsitek Senior</h3>
            </div>
            <ul className="space-y-3 text-[#A3A3A3]">
              <li>+ Desain cerdas yang memaksimalkan fungsi & estetika tropis.</li>
              <li>+ Rencana Anggaran Biaya (RAB) yang transparan dan terkontrol.</li>
              <li>+ Spesifikasi material premium & pengawasan kualitas yang ketat.</li>
              <li>+ Proses terstruktur yang dipimpin oleh manajer proyek profesional.</li>
              <li>+ Garansi konstruksi & kepuasan hasil akhir.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
