import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink, Element } from "react-scroll";
import { Link, Link as RouterLink } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="min-h-screen bg-white text-black">
        <Header />
        <Hero />
        <About1 />
        <Services />
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 bg-white border-b-2 border-red-600 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex flex-shrink-0 items-center">
          <img src="/logo2.jpg" className="w-14 h-14" />
          <h1 className="text-xl font-bold">
            Aayu<span className="text-red-700">Veda</span>
          </h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-5">
            <li>
              <RouterLink
                to="/"
                className="text-black hover:bg-red-600 hover:text-white transition-colors p-2 rounded-full px-3"
              >
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/about"
                className="text-black hover:bg-red-600 hover:text-white transition-colors p-2 rounded-full px-3"
              >
                About
              </RouterLink>
              </li>
              <li>
              <RouterLink to="/medicine-search" className="text-black hover:bg-red-600 hover:text-white transition-colors p-2 rounded-full px-3"
              >
                Medicine Search
              </RouterLink>
            </li>
              <li>
              <RouterLink to="/hospitalmap" className="text-black hover:bg-red-600 hover:text-white transition-colors p-2 rounded-full px-3"
              >
                Hospital Map
              </RouterLink>
            </li>
          </ul>
        </nav>
        <div>
          <a
            href="#contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <TypeAnimation
          sequence={[
            "Your Wellness, Our Priority!",
            1000,
            "Stay Informed, Stay Healthy!",
            1000,
            "Find the Right Medicine, Instantly!",
            1000,
          ]}
          wrapper="h1"
          speed={30}
          className="text-6xl font-bold text-red-500"
          repeat={Infinity}
        />
        <br />
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          An intelligent platform for personalized medicine suggestions and
          dynamic health assistance. Get the right care, instantly and
          effortlessly.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <ScrollLink
            to="section1"
            smooth={true}
            className="inline-block bg-red-600 hover:bg-red-700 hover:cursor-pointer text-white font-medium py-3 px-6 rounded transition-colors"
          >
            Get Started
          </ScrollLink>
          <a
            href="#services"
            className="inline-block bg-transparent hover:bg-gray-800 text-black hover:text-white border border-gray-700 font-medium py-3 px-6 rounded transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

function About1() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-3xl text-red-600 md:text-4xl font-bold mb-6">
              About Our Team 
            </h2>
            <p className="text-gray-600 mb-6">
              Founded in 2015, we've been at the forefront of digital
              innovation, helping businesses of all sizes transform their online
              presence.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of experts combines technical excellence with creative
              thinking to deliver solutions that not only meet but exceed our
              clients' expectations.
            </p>
            <Link
              to="/about"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-blue-500 mb-2">250+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-blue-500 mb-2">180+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-blue-500 mb-2">25+</h3>
                <p className="text-gray-600">Team Members</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-blue-500 mb-2">10+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <Element name="section1">
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-red-600 font-bold mb-4">
              Let's Implements
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-xl p-8 rounded-lg transition-transform hover:-translate-y-2">
              <div className="text-blue-500 text-4xl mb-6">💻</div>
              <h3 className="text-xl font-semibold mb-4"></h3>
              <p className="text-gray-600">
                Custom websites and web applications built with the latest
                technologies.
              </p>
            </div>
            <div className="bg-white shadow-xl p-8 rounded-lg transition-transform hover:-translate-y-2">
              <div className="text-blue-500 text-4xl mb-6">📱</div>
              <h3 className="text-xl font-semibold mb-4">Mobile Apps</h3>
              <p className="text-gray-600">
                Native and cross-platform mobile applications for iOS and
                Android.
              </p>
            </div>
            <div className="bg-white shadow-xl  p-8 rounded-lg transition-transform hover:-translate-y-2">
              <div className="text-blue-500 text-4xl mb-6">🎨</div>
              <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-gray-600">
                User-centered design that creates intuitive and engaging
                experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h2 className="text-xl font-bold mb-4">
              Nexus<span className="text-blue-500">Tech</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Building digital experiences that help businesses thrive in the
              modern world.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center bg-gray-900 hover:bg-blue-600 rounded-full text-gray-600 hover:text-black transition-colors"
              >
                🐦
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center bg-gray-900 hover:bg-blue-600 rounded-full text-gray-600 hover:text-black transition-colors"
              >
                🐙
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center bg-gray-900 hover:bg-blue-600 rounded-full text-gray-600 hover:text-black transition-colors"
              >
                📷
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#web"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#mobile"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#design"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#blog"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#docs"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AayuVeda All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Home;
