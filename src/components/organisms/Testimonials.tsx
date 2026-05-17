const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full bg-gray-100 text-black p-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg mb-4">"The team at Rumah Tropis did an amazing job designing and building our dream home. We couldn't be happier with the result!"</p>
            <p className="font-bold">- John Doe</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg mb-4">"Working with Rumah Tropis was a pleasure. They are true professionals who are passionate about what they do."</p>
            <p className="font-bold">- Jane Smith</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
