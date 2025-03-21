const Services = () => {
    return (
      <Element name='section1'>
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of digital services to help your business grow and succeed.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-xl p-8 rounded-lg transition-transform hover:-translate-y-2">
              <div className="text-blue-500 text-4xl mb-6">💻</div>
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600">
                Custom websites and web applications built with the latest technologies.
              </p>
            </div>
            <div className="bg-white shadow-xl p-8 rounded-lg transition-transform hover:-translate-y-2">
              <div className="text-blue-500 text-4xl mb-6">📱</div>
              <h3 className="text-xl font-semibold mb-4">Mobile Apps</h3>
              <p className="text-gray-600">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
            </div>
            <div className="bg-white shadow-xl  p-8 rounded-lg transition-transform hover:-translate-y-2">
              <div className="text-blue-500 text-4xl mb-6">🎨</div>
              <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-gray-600">
                User-centered design that creates intuitive and engaging experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      </Element>
    );
  }

  export default Services;