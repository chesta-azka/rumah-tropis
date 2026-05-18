'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Bapak & Ibu Wijoyo",
    location: "Surabaya",
    testimonial: "Tim arsitek tidak hanya profesional, tapi juga sangat sabar dalam mengakomodasi setiap revisi kami. Hasil akhirnya jauh melampaui ekspektasi. Rumah kami benar-benar menjadi oase tropis yang nyaman.",
    image: "/images/testimonials/client1.jpg"
  },
  {
    name: "Keluarga Soetanto",
    location: "Bali",
    testimonial: "Prosesnya sangat transparan, terutama soal budget. Kami merasa aman dan tidak ada 'biaya siluman' yang mengejutkan. Sangat direkomendasikan!",
    image: "/images/testimonials/client2.jpg"
  },
  {
    name: "Ibu Hartati",
    location: "Jakarta",
    testimonial: "Saya paling terkesan dengan perhatian mereka terhadap detail. Setiap sudut rumah, pencahayaan, sirkulasi udara, semuanya dipikirkan dengan matang. Terima kasih telah mewujudkan rumah impian saya.",
    image: "/images/testimonials/client3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-[#0D0D0D] text-white p-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Apa Kata Klien Kami?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#050505] p-6 rounded-lg text-left"
            >
              <p className="text-[#A3A3A3] italic mb-6">"{testimonial.testimonial}"</p>
              <div className="flex items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                   <Image
                     src={testimonial.image}
                     alt={testimonial.name}
                     layout="fill"
                     objectFit="cover"
                   />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#C5A880]">{testimonial.name}</h4>
                  <p className="text-sm text-[#A3A3A3]">{testimonial.location}</p>
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
