import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-600 font-sans">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/90 border-b-2 border-red-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-blue-500 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">AayuVeda</span>
            </div>
            <nav>
              <ul className="flex space-x-8">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm uppercase tracking-wider font-medium">Home</a></li>
                <li><a href="#" className="text-gray-600 border-b-2 border-blue-500 pb-1 text-sm uppercase tracking-wider font-medium">About</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative py-16">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">About AayuVeda</h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">Revolutionizing Healthcare with AI-Powered Medical Assistance</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700">
          <p className="text-lg text-gray-300 mb-12 leading-relaxed">
            In today's fast-paced world, access to accurate and reliable medical information is more
            important than ever. AayuVeda is an advanced AI-powered chatbot designed to transform the way
            we diagnose medical conditions and access essential healthcare information.
          </p>
          
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Key Features</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="group bg-white/80 rounded-xl p-6 shadow-lg hover:shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 border border-gray-800 hover:border-blue-800">
              <div className="rounded-full bg-blue-900/30 w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3 group-hover:text-blue-300">Instant Medical Information</h3>
              <p className="text-gray-400 group-hover:text-gray-300">
                Quick and accurate responses to medical queries, providing real-time
                results for medicine information.
              </p>
            </div>
            
            <div className="group bg-white/80 rounded-xl p-6 shadow-lg hover:shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 border border-gray-800 hover:border-blue-800">
              <div className="rounded-full bg-blue-900/30 w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3 group-hover:text-blue-300">Comprehensive Database</h3>
              <p className="text-gray-400 group-hover:text-gray-300">
                Extensive collection of medical and pharmaceutical data with detailed
                insights.
              </p>
            </div>
            
            <div className="group bg-white/80 rounded-xl p-6 shadow-lg hover:shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 border border-gray-800 hover:border-blue-800">
              <div className="rounded-full bg-blue-900/30 w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3 group-hover:text-blue-300">24/7 Availability</h3>
              <p className="text-gray-400 group-hover:text-gray-300">
                Access medical information anytime, anywhere without waiting for appointments.
              </p>
            </div>
            
            <div className="group bg-white/80 rounded-xl p-6 shadow-lg hover:shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 border border-gray-800 hover:border-blue-800">
              <div className="rounded-full bg-blue-900/30 w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3 group-hover:text-blue-300">Personalized Health Insights</h3>
              <p className="text-gray-400 group-hover:text-gray-300">
                Tailored recommendations based on your health profile and history.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Who Can Benefit?</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              <div className="flex items-start p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-800 transition-all duration-300">
                <div className="rounded-full bg-blue-900/30 w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-400 text-xl">•</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-600 mb-1">Patients</h3>
                  <p className="text-gray-400">Seeking reliable medical information</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-800 transition-all duration-300">
                <div className="rounded-full bg-blue-900/30 w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-400 text-xl">•</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-600 mb-1">Healthcare Professionals</h3>
                  <p className="text-gray-400">Needing quick reference</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-800 transition-all duration-300">
                <div className="rounded-full bg-blue-900/30 w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-400 text-xl">•</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-600 mb-1">Medical Students</h3>
                  <p className="text-gray-400">Enhancing their knowledge</p>
                </div>
              </div>
              
              <div className="flex items-start p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-blue-800 transition-all duration-300">
                <div className="rounded-full bg-blue-900/30 w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-400 text-xl">•</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-600 mb-1">Caregivers</h3>
                  <p className="text-gray-400">Managing medications for others</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-900/30 to-gray-800 rounded-xl p-8 mb-12 shadow-lg border border-blue-900/50">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">The Future of AayuBot</h3>
              <p className="text-gray-300 leading-relaxed">
                AayuBot is continuously evolving with upcoming features including voice assistance,
                multilingual support, and integration with wearable health devices. Our mission is to make
                reliable healthcare information accessible to everyone.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-gray-600 bg-blue-600 rounded-lg group">
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-blue-700 rounded-full group-hover:w-full group-hover:h-56"></span>
              <span className="relative font-semibold tracking-wide">Try AayuBot Now</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="text-blue-500 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-blue-500">AayuBot</span>
            </div>
            <p className="text-gray-500 text-sm">© 2025 AayuBot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;