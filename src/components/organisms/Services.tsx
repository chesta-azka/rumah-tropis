const Services = () => {
  return (
    <section id="services" className="w-full bg-gray-100 text-black p-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Architectural Design</h3>
            <p>We create innovative and sustainable architectural designs that are tailored to your needs.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Interior Design</h3>
            <p>Our interior design team will transform your space into a beautiful and functional oasis.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Construction</h3>
            <p>We provide high-quality construction services to bring your dream home to life.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
