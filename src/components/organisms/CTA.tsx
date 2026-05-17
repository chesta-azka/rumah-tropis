'use client';

import { motion } from 'framer-motion';

const FooterCTASection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-copper-bronze/20">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
            Siap Memulai Proyek Impian Anda?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-neutral-gray">
            Satu langkah lagi untuk mewujudkan bangunan tropis yang tidak hanya memukau, tapi juga merupakan aset investasi yang cerdas.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://wa.me/628138969965"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white px-8 py-4 text-base font-semibold text-charcoal shadow-lg hover:bg-warm-off-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-transform transform hover:scale-105"
            >
              Konsultasi Gratis via WhatsApp
            </a>
          </div>
        </motion.div>

        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 text-center">
          <p className="text-xs leading-5 text-neutral-gray">
            &copy; {currentYear} Rumah Tropis. Hak Cipta Dilindungi.
          </p>
          <p className="text-xs leading-5 text-neutral-gray mt-1">
            Desain & Pengembangan oleh Tim Rumah Tropis.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTASection;
