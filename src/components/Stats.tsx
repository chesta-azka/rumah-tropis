'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Building, Award, Users } from './Icons'; // Corrected import

const stats = [
    { 
        icon: Building,
        end: 75,
        label: "Proyek Selesai",
        suffix: '+'
    },
    { 
        icon: Award,
        end: 15,
        label: "Penghargaan Desain",
        suffix: '+'
    },
    { 
        icon: Users,
        end: 99,
        label: "Klien Bahagia",
        suffix: '%'
    }
];

const Stats = () => {
  return (
    <section id="stats" className="w-full bg-[#121212] text-white py-16 sm:py-20">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.2 }}
                className="flex flex-col items-center"
            >
              <stat.icon className="text-[#C5A880] mb-4" size={44} />
              <div className="text-5xl font-bold font-serif tracking-tighter">
                <CountUp end={stat.end} duration={3} suffix={stat.suffix} enableScrollSpy scrollSpyOnce/>
              </div>
              <p className="text-[#A3A3A3] text-lg mt-2 font-light tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;
