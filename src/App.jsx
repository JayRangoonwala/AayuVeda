import React from 'react';
// import { TypeAnimation } from 'react-type-animation';
// import { Link as ScrollLink, Element } from 'react-scroll';
import {  Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import HospitalMap from './pages/HospitalMap';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/hospitalmap' element={<HospitalMap />} />
      </Routes> 
      </>
  );
}
export default App;
// function Header() {
//   return (
//     <header className="sticky top-0 bg-gray-950 border-b border-gray-800 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
//         <div className="flex flex-shrink-0 items-center">
//           <img src='/logo1.png' className='w-16 h-12'/>
//           <h1 className="text-xl font-bold">Aayu<span className="text-blue-500">Veda</span></h1>
//         </div>
//         <nav className="hidden md:block">
//           <ul className="flex space-x-8">
//             <li><RouterLink to="/" className="text-gray-300 hover:text-white transition-colors">Home</RouterLink></li>
//             <li><RouterLink to="/about" className="text-gray-300 hover:text-white transition-colors">About</RouterLink></li>
//           </ul>
//         </nav>
//         <div>
//           <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
//             Get Started
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }


// function Hero() {
//   return (
//     <section id="home" className="py-24 md:py-32 bg-gray-950">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <TypeAnimation 
//         sequence={[
//           'Your Wellness, Our Priority!',
//           1000,
//           'Stay Informed, Stay Healthy!',
//           1000,
//           'Find the Right Medicine, Instantly!',
//           1000,
//         ]}
//         wrapper="h1"
//         speed={30}
//         className="text-6xl font-bold text-blue-500"
//         repeat={Infinity}
// />
// <br />
//         <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
//         An intelligent platform for personalized medicine suggestions and dynamic health assistance. Get the right care, instantly and effortlessly.
//         </p>
//         <div className="flex flex-wrap justify-center gap-4">
//           <ScrollLink to='section1' smooth={true} className="inline-block bg-blue-600 hover:bg-blue-700 hover:cursor-pointer text-white font-medium py-3 px-6 rounded transition-colors">
//             Get Started
//           </ScrollLink>
//           <a href="#services" className="inline-block bg-transparent hover:bg-gray-800 text-white border border-gray-700 font-medium py-3 px-6 rounded transition-colors">
//             Learn More
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }

// function CTA() {
//   return (
//     <section className="max-w-5xl mx-auto my-16 bg-gray-900 rounded-xl">
//       <div className="px-4 py-16 sm:px-6 lg:px-8 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
//         <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
//           Let's work together to bring your ideas to life. Contact us today to discuss your project.
//         </p>
//         <a href="#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition-colors">
//           Get In Touch
//         </a>
//       </div>
//     </section>
//   );
// }

// function About() {
//   return (
//     <section id="about" className="py-20 bg-gray-950">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="lg:flex lg:gap-16">
//           <div className="lg:w-1/2 mb-12 lg:mb-0">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Company</h2>
//             <p className="text-gray-300 mb-6">
//               Founded in 2015, we've been at the forefront of digital innovation, helping businesses of all sizes transform their online presence.
//             </p>
//             <p className="text-gray-300 mb-6">
//               Our team of experts combines technical excellence with creative thinking to deliver solutions that not only meet but exceed our clients' expectations.
//             </p>
//             <a href="#about" className="inline-block bg-transparent hover:bg-gray-800 text-white border border-gray-700 font-medium py-2 px-4 rounded transition-colors">
//               Learn More About Us
//             </a>
//           </div>
//           <div className="lg:w-1/2">
//             <div className="grid grid-cols-2 gap-6">
//               <div className="bg-gray-900 p-6 rounded-lg text-center">
//                 <h3 className="text-3xl font-bold text-blue-500 mb-2">250+</h3>
//                 <p className="text-gray-300">Projects Completed</p>
//               </div>
//               <div className="bg-gray-900 p-6 rounded-lg text-center">
//                 <h3 className="text-3xl font-bold text-blue-500 mb-2">180+</h3>
//                 <p className="text-gray-300">Happy Clients</p>
//               </div>
//               <div className="bg-gray-900 p-6 rounded-lg text-center">
//                 <h3 className="text-3xl font-bold text-blue-500 mb-2">25+</h3>
//                 <p className="text-gray-300">Team Members</p>
//               </div>
//               <div className="bg-gray-900 p-6 rounded-lg text-center">
//                 <h3 className="text-3xl font-bold text-blue-500 mb-2">10+</h3>
//                 <p className="text-gray-300">Years Experience</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function Services() {
//   return (
//     <Element name='section1'>
//     <section id="services" className="py-20 bg-gray-950">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
//           <p className="text-lg text-gray-300 max-w-3xl mx-auto">
//             We offer a comprehensive range of digital services to help your business grow and succeed.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-gray-900 p-8 rounded-lg transition-transform hover:-translate-y-2">
//             <div className="text-blue-500 text-4xl mb-6">💻</div>
//             <h3 className="text-xl font-semibold mb-4">Web Development</h3>
//             <p className="text-gray-300">
//               Custom websites and web applications built with the latest technologies.
//             </p>
//           </div>
//           <div className="bg-gray-900 p-8 rounded-lg transition-transform hover:-translate-y-2">
//             <div className="text-blue-500 text-4xl mb-6">📱</div>
//             <h3 className="text-xl font-semibold mb-4">Mobile Apps</h3>
//             <p className="text-gray-300">
//               Native and cross-platform mobile applications for iOS and Android.
//             </p>
//           </div>
//           <div className="bg-gray-900 p-8 rounded-lg transition-transform hover:-translate-y-2">
//             <div className="text-blue-500 text-4xl mb-6">🎨</div>
//             <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
//             <p className="text-gray-300">
//               User-centered design that creates intuitive and engaging experiences.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//     </Element>
//   );
// }

// function Footer() {
//   return (
//     <footer className="bg-gray-950 border-t border-gray-800 pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
//           <div>
//             <h2 className="text-xl font-bold mb-4">Nexus<span className="text-blue-500">Tech</span></h2>
//             <p className="text-gray-400 mb-6">
//               Building digital experiences that help businesses thrive in the modern world.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center bg-gray-900 hover:bg-blue-600 rounded-full text-gray-300 hover:text-white transition-colors">
//                 🐦
//               </a>
//               <a href="#" aria-label="GitHub" className="w-10 h-10 flex items-center justify-center bg-gray-900 hover:bg-blue-600 rounded-full text-gray-300 hover:text-white transition-colors">
//                 🐙
//               </a>
//               <a href="#" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center bg-gray-900 hover:bg-blue-600 rounded-full text-gray-300 hover:text-white transition-colors">
//                 📷
//               </a>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Company</h3>
//             <ul className="space-y-3">
//               <li><a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors">About</a></li>
//               <li><a href="#team" className="text-gray-400 hover:text-blue-500 transition-colors">Team</a></li>
//               <li><a href="#careers" className="text-gray-400 hover:text-blue-500 transition-colors">Careers</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Services</h3>
//             <ul className="space-y-3">
//               <li><a href="#web" className="text-gray-400 hover:text-blue-500 transition-colors">Web Development</a></li>
//               <li><a href="#mobile" className="text-gray-400 hover:text-blue-500 transition-colors">Mobile Apps</a></li>
//               <li><a href="#design" className="text-gray-400 hover:text-blue-500 transition-colors">UI/UX Design</a></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Resources</h3>
//             <ul className="space-y-3">
//               <li><a href="#blog" className="text-gray-400 hover:text-blue-500 transition-colors">Blog</a></li>
//               <li><a href="#docs" className="text-gray-400 hover:text-blue-500 transition-colors">Documentation</a></li>
//               <li><a href="#support" className="text-gray-400 hover:text-blue-500 transition-colors">Support</a></li>
//             </ul>
//           </div>
//         </div>
//         <div className="border-t border-gray-800 pt-8 text-center">
//           <p className="text-gray-500 text-sm">
//             &copy; {new Date().getFullYear()} NexusTech. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default App;