'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Hasilnya melebihi ekspektasi. Tim Rumah Tropis benar-benar memahami visi kami dan menerjemahkannya menjadi sebuah kenyataan yang indah. Komunikasi selalu lancar dan transparan.',
    name: 'Bapak H. Satya',
    location: 'Permata Hijau, Jakarta Selatan',
    avatar: '/images/avatars/satya.jpg', // Placeholder
  },
  {
    quote: 'Investasi terbaik yang pernah saya lakukan. Nilai properti saya meningkat drastis, dan prosesnya sendiri sangat profesional. Sangat direkomendasikan untuk siapa saja yang serius tentang kualitas.',
    name: 'Ibu A. Wulandari',
    location: 'Badung, Bali',
    avatar: '/images/avatars/wulandari.jpg', // Placeholder
  },
  {
    quote: 'Saya kagum dengan perhatian mereka terhadap detail. Dari material yang digunakan hingga penyelesaian akhir, semuanya sempurna. Rumah kami tidak hanya mewah, tetapi juga terasa sangat personal.',
    name: 'Keluarga Tjahjono',
    location: 'Sutami, Bandung',
    avatar: '/images/avatars/tjahjono.jpg', // Placeholder
  },
];

const TestimonialSection = () => {
  const cardVariants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', bounce: 0.2, duration: 1 }
    }
  };

  return (
    <section className="bg-soft-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">Apa Kata Mereka?</h2>
          <p className="mt-4 text-lg leading-8 text-neutral-gray">
            Kisah sukses klien kami adalah bukti terbesar dari komitmen kami terhadap keunggulan.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-1 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.name}
              className="rounded-2xl bg-charcoal border border-white/10 p-8 shadow-xl" 
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.4 }}
            >
              <figure className="flex flex-col h-full">
                <blockquote className="flex-grow text-neutral-gray">
                  <p>{`“${testimonial.quote}”`}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4 border-t border-white/10 pt-6">
                  {/* Placeholder untuk avatar */}
                  <div className="h-12 w-12 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-neutral-gray">{testimonial.location}</div>
                  </div>
                </figcaption>
              </figure>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
