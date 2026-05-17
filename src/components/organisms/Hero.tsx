import Button from '@/components/atoms/Button';

const Hero = () => {
  return (
    <section className="w-full h-screen bg-gray-900 text-white flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-6xl font-bold mb-4">Premium Tropical House Design</h1>
      <p className="text-xl mb-8">Crafting beautiful and functional homes in tropical paradise</p>
      <Button>Get a Quote</Button>
    </section>
  );
};

export default Hero;
