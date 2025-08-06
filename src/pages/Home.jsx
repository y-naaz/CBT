import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserCog, FaChartLine, FaHeadset } from 'react-icons/fa';

const Home = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-indigo-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-2xl">
            Welcome to <span className="text-yellow-300">CBT Platform</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium">
            Your ultimate solution for <span className="text-yellow-200">Cognitive Behavioral Therapy</span>
          </p>
          <Link
            to="/signup"
            className="inline-block bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-10 rounded-full text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-gray-800 underline decoration-blue-500 underline-offset-8">
            Key Features
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="bg-gradient-to-br from-blue-100 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-2 duration-300">
              <FaUserCog className="text-blue-600 text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Personalized Modules</h3>
              <p className="text-gray-700">Tailored CBT modules crafted to match your unique mental health needs.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-2 duration-300">
              <FaChartLine className="text-purple-600 text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Progress Tracking</h3>
              <p className="text-gray-700">Visual charts and logs to monitor and reflect on your journey.</p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-2 duration-300">
              <FaHeadset className="text-green-600 text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">Expert Support</h3>
              <p className="text-gray-700">24/7 access to certified therapists and community forums.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-blue-700 text-white text-center shadow-inner">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-lg md:text-xl mb-10 font-light">
            Join <span className="text-yellow-300 font-semibold">thousands</span> transforming their mental health through CBT.
          </p>
          <Link
            to="/signup"
            className="inline-block bg-yellow-300 text-gray-900 hover:bg-yellow-400 font-bold py-3 px-10 rounded-full text-lg shadow-lg transition duration-300 transform hover:scale-110"
          >
            Sign Up Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
