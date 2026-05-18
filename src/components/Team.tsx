'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Budi Santoso, IAI",
    role: "Principal Architect",
    description: "Berpengalaman lebih dari 20 tahun dalam merancang hunian tropis mewah yang fungsional dan estetis.",
    image: "/images/team/architect1.jpg"
  },
  {
    name: "Citra Lestari, S.Ars",
    role: "Lead Project Architect",
    description: "Spesialis dalam manajemen proyek dan pengawasan konstruksi, memastikan setiap detail terwujud sempurna.",
    image: "/images/team/architect2.jpg"
  },
  {
    name: "Rizky Pratama, M.Ars",
    role: "Senior Architect & 3D Visualizer",
    description: "Ahli dalam mengubah konsep menjadi visualisasi 3D yang realistis dan imersif.",
    image: "/images/team/architect3.jpg"
  }
];

const Team = () => {
  return (
    <section id="team" className="w-full bg-[#050505] text-white p-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Dipimpin oleh Arsitek Senior Berpengalaman</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#0D0D0D] p-6 rounded-lg text-center"
            >
              <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-6">
                 <Image
                   src={member.image}
                   alt={member.name}
                   layout="fill"
                   objectFit="cover"
                 />
              </div>
              <h3 className="text-2xl font-bold text-[#C5A880]">{member.name}</h3>
              <p className="text-md text-[#A3A3A3] mb-4">{member.role}</p>
              <p className="text-sm text-[#A3A3A3]">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
