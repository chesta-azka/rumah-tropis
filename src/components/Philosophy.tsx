'use client';

import { motion } from 'framer-motion';
import { GlobeAltIcon, ShieldCheckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Desain Berkelanjutan & Ikonik',
    description: 'Kami tidak hanya mengikuti tren. Kami merancang bangunan yang menyatu dengan alam, relevan hingga puluhan tahun ke depan, dan menjadi landmark di lingkungannya.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Konstruksi Presisi & Terjamin',
    description: 'Dengan pengawasan ketat dan material pilihan, kami memastikan setiap detail terbangun dengan sempurna, menghasilkan kualitas yang bisa Anda lihat dan rasakan.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Aset Investasi Bernilai Tinggi',
    description: 'Setiap proyek kami adalah instrumen investasi. Desain yang superior dan kualitas konstruksi premium memastikan nilai properti Anda terus meningkat dari waktu ke waktu.',
    icon: CurrencyDollarIcon,
  },
];

const WhyUsSection = () => {
  return (
    <div className="bg-deep-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-base font-semibold leading-7 text-copper-bronze">Nilai Jangka Panjang</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-serif">
              Bukan Sekadar Bangunan, Tapi Sebuah Mahakarya
            </p>
            <p className="mt-6 text-lg leading-8 text-neutral-gray">
              Tiga pilar utama yang menjadi fondasi kami dalam menciptakan properti yang tidak hanya indah, tapi juga kokoh dan menguntungkan.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name} 
                className="relative pl-16"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-charcoal border border-copper-bronze/30">
                    <feature.icon className="h-6 w-6 text-copper-bronze" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-neutral-gray">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
