'use client';

import { motion } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/24/solid'; // Pastikan heroicons sudah terinstall
import Image from 'next/image';

const VideoSection = () => {
  // Placeholder untuk state jika video akan dimainkan di modal/popup
  // const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  return (
    <motion.section 
      className="py-20 md:py-32 bg-deep-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl cursor-pointer group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* --- VIDEO THUMBNAIL --- */}
          {/* Ganti dengan thumbnail dari aset yang ada */}
          <Image 
            src="/images/video-thumbnail.jpg" // Placeholder, ganti dengan path gambar yang benar
            alt="Showreel Rumah Tropis"
            width={1280}
            height={720}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* --- OVERLAY --- */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
          
          {/* --- PLAY BUTTON --- */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center shadow-lg">
                <PlayIcon className="w-10 h-10 md:w-12 md:h-12 text-charcoal" />
              </div>
            </div>
          </div>

          {/* --- JUDUL VIDEO --- */}
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <h3 className="text-white font-serif text-2xl md:text-3xl font-bold">(Video Singkat)</h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="https://wa.me/628138969965"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block px-8 py-4 text-base font-semibold text-white bg-transparent border border-copper-bronze rounded-md hover:bg-copper-bronze/10 transition-all duration-300 transform hover:scale-105"
          >
            Konsultasi Gratis
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VideoSection;
