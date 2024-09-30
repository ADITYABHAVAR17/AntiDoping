// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandsHelping, FaGraduationCap, FaRegLightbulb, FaMedal } from 'react-icons/fa';

function Home() {
  return (
    <div className="p-8">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Anti-Doping Education Platform</h1>
        <p className="text-lg mb-8">
          Learn, Engage, and Empower yourself with the latest anti-doping practices.
        </p>
        <Link to="/signup">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg hover:bg-gray-200">
            Get Started
          </button>
        </Link>
      </section>

      {/* About Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Our Mission</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Our goal is to provide comprehensive anti-doping education to athletes, coaches, and support staff across all sports in India. We aim to make learning about anti-doping regulations engaging and accessible to everyone.
        </p>
      </section>

      {/* Key Features Section */}
      <section className="bg-gray-100 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="text-center">
            <FaGraduationCap className="text-blue-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Comprehensive Courses</h3>
            <p>Learn through multimedia courses, quizzes, and interactive modules designed for athletes and coaches.</p>
          </div>
          <div className="text-center">
            <FaMedal className="text-green-600 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Achievements & Badges</h3>
            <p>Earn badges and certifications for completing educational modules and assessments.</p>
          </div>
          <div className="text-center">
            <FaRegLightbulb className="text-yellow-500 text-6xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Engaging Content</h3>
            <p>Interactive quizzes, case studies, and videos that keep you informed about the latest anti-doping practices.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
            <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
            <p>Register as an athlete, coach, or support staff to access our courses and resources.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
            <h3 className="text-xl font-semibold mb-2">Take Courses</h3>
            <p>Explore our educational modules on anti-doping regulations and best practices.</p>
          </div>
          <div className="text-center">
            <div className="bg-yellow-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
            <h3 className="text-xl font-semibold mb-2">Get Certified</h3>
            <p>Complete courses and assessments to earn badges and certifications.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-200 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Empower Your Knowledge?</h2>
        <Link to="/quiz">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700">
            Take a Quiz Now
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <p>Our mission is to promote clean sports through education and engagement.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/signup" className="hover:underline">Sign Up</Link></li>
              <li><Link to="/content" className="hover:underline">Educational Content</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p>Email: info@antidopingplatform.com</p>
            <p>Phone: +91-1234567890</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
