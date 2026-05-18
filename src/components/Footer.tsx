
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-[#A3A3A3] pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand and About */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Rumah Tropis</h3>
            <p className="text-sm">
              Mewujudkan hunian tropis premium yang menyatu dengan alam, didesain oleh arsitek senior berpengalaman.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2">
              <li><Link href="#portfolio" className="hover:text-[#C5A880] transition-colors">Portofolio</Link></li>
              <li><Link href="#process" className="hover:text-[#C5A880] transition-colors">Proses Kami</Link></li>
              <li><Link href="#team" className="hover:text-[#C5A880] transition-colors">Tim Arsitek</Link></li>
              <li><Link href="#faq" className="hover:text-[#C5A880] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Hubungi Kami</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:info@rumahtropis.com" className="hover:text-[#C5A880]">info@rumahtropis.com</a></li>
              <li>Telepon: +62 812 3456 7890</li>
              <li>Alamat: Jl. Arsitektur No. 1, Jakarta, Indonesia</li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h4 className="font-semibold text-white mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#C5A880] transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-[#C5A880] transition-colors"><FaFacebook /></a>
              <a href="#" className="hover:text-[#C5A880] transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-[#C5A880] transition-colors"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Rumah Tropis. All rights reserved. Desain oleh Arsitek Senior Berpengalaman.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
