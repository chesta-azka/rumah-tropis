const Contact = () => {
  return (
    <section id="contact" className="w-full bg-gray-900 text-white p-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <p className="text-lg mb-8">Have a project in mind? We&apos;d love to hear from you.</p>
        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input type="email" placeholder="Enter your email" className="p-4 rounded-full w-full md:w-auto" />
          <button type="submit" className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
