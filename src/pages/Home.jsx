import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 h-96 flex items-center justify-center text-white">
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in-up">Welcome to CBT Platform</h1>
          <p className="text-xl mb-8 animate-fade-in-up delay-200">Your ultimate solution for cognitive behavioral therapy.</p>
          <Link
            to="/signup"
            className="bg-white text-blue-700 hover:bg-gray-200 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 animate-fade-in-up delay-400"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Personalized Modules</h3>
              <p className="text-gray-600">Access tailored CBT modules designed to meet your specific needs.</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-purple-700">Progress Tracking</h3>
              <p className="text-gray-600">Monitor your progress with intuitive charts and reports.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-green-700">Expert Support</h3>
              <p className="text-gray-600">Connect with certified therapists for guidance and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-purple-700 to-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8">Join thousands of users improving their mental well-being with CBT.</p>
          <Link
            to="/signup"
            className="bg-white text-purple-700 hover:bg-gray-200 font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
          >
            Sign Up Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
