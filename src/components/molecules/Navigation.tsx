import Link from '@/components/atoms/Link';

const Navigation = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li><Link href="#about">About</Link></li>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#portfolio">Portfolio</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
