import React from 'react';
import { Link } from 'react-router-dom';
import EmpowerLogo from './EmpowerLogo';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-gray-300 py-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <EmpowerLogo href="/" size="sm" textColor="text-white" />
          </div>
          <div className="flex space-x-6 text-sm">
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/challenges" className="hover:text-white transition-colors">Challenges</Link>
            <Link to="/startups" className="hover:text-white transition-colors">Startups</Link>
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-navy-400">
          &copy; {new Date().getFullYear()} Empower India Prototype. For SIH Demonstration Purposes Only.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
