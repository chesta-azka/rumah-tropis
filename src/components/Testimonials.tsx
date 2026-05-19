'use client';

import { motion } from 'framer-motion';
import { Quote, UserCircle2 } from './Icons'; // Corrected import

const testimonials = [
  {
    name: "Bapak Tirtayasa",
    location: "Pondok Indah, Jakarta",
    quote: "Hasilnya melampaui ekspektasi. Rumah kami tidak hanya indah, tapi juga sangat nyaman ditinggali. Sirkulasi udaranya luar biasa, kami jarang menyalakan AC."
  },
  {
    name: "Ibu Setyawati",
    location: "Canggu, Bali",
    quote: "Tim Rumah Tropis sangat profesional dan memahami keinginan klien. Mereka berhasil menerjemahkan impian saya tentang villa tropis modern menjadi kenyataan."
  },
  {
    name: "Keluarga Wijoyo",
    location: "Sentul City, Bogor",
    quote: "Sangat puas dengan perhatian terhadap detail dan kualitas bangunannya. Setiap sudut rumah kami terasa istimewa dan penuh karakter. Benar-benar investasi yang berharga."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-[#0D0D0D] text-white py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6 tracking-wide">Apa Kata Mereka Tentang Kami</h2>
          <p className="text-[#A3A3A3] text-lg lg:text-xl">
            Kepuasan klien adalah prioritas utama kami. Berikut adalah beberapa testimoni dari mereka yang telah mempercayakan pembangunan huniannya kepada kami.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.15 }}
              className="bg-[#121212] rounded-xl p-8 border border-white/10 flex flex-col"
              style={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 25px 50px -12px rgba(0, 0, 0, 0.2)" }}
            >
              <Quote className="text-[#C5A880] mb-5" size={36} />
              <p className="text-[#E0E0E0] italic text-base leading-relaxed flex-grow mb-6">
                “{testimonial.quote}”
              </p>
              <div className="flex items-center mt-auto">
                <UserCircle2 className="text-[#A3A3A3] mr-4" size={48} />
                <div>
                  <p className="font-semibold text-white text-md">{testimonial.name}</p>
                  <p className="text-[#A3A3A3] text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
