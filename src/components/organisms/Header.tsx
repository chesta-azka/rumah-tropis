import Navigation from '@/components/molecules/Navigation';

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-8 bg-white text-black">
      <div className="text-2xl font-bold">Rumah Tropis</div>
      <Navigation />
    </header>
  );
};

export default Header;
