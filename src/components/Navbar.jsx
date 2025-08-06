import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white text-lg font-bold">
          <Link to="/">CBT App</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
          <Link to="/signup" className="text-gray-300 hover:text-white">Signup</Link>
          <Link to="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
