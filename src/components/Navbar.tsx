import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-navy-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-xl tracking-wide">Empower India</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link to="/challenges" className="hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Challenges</Link>
              <Link to="/startups" className="hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Startups</Link>
              <Link to="/#how-it-works" className="hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">How It Works</Link>
              <Link to="/about" className="hover:text-blue-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium hover:text-blue-300 transition-colors">Login</Link>
            <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm">
              Get Started
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-navy-800 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-navy-800">
            <Link to="/challenges" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Challenges</Link>
            <Link to="/startups" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Startups</Link>
            <a href="/#how-it-works" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>How It Works</a>
            <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/login" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Login</Link>
            <Link to="/login" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
