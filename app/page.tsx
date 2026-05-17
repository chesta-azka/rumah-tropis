import Header from '@/components/organisms/Header';
import Hero from '@/components/organisms/Hero';
import About from '@/components/organisms/About';
import Services from '@/components/organisms/Services';
import Portfolio from '@/components/organisms/Portfolio';
import Testimonials from '@/components/organisms/Testimonials';
import Contact from '@/components/organisms/Contact';
import Footer from '@/components/organisms/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
