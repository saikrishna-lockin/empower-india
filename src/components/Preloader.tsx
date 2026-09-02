import React, { useState, useEffect } from 'react';
import { EmpowerLogoMark } from './EmpowerLogo';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Keep the preloader visible for 1.3 seconds, then smoothly fade out
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => setIsVisible(false), 450); 
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-900 transition-opacity duration-450 ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center text-center px-4">
        
        {/* Animated Stylized E Logo Mark (Enters first) */}
        <div className="relative mb-6">
          {/* Background ambient glow */}
          <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl animate-pulse-glow" />
          
          <EmpowerLogoMark sizeClass="w-20 h-20" />
        </div>

        {/* Brand Text revealed with subtle fade-up */}
        <h1 
          className="text-3xl font-extrabold text-white tracking-wide mb-2 animate-fade-in-up" 
          style={{ animationDelay: '300ms', animationFillMode: 'both' }}
        >
          EMPOWER INDIA
        </h1>
        
        <p 
          className="text-xs sm:text-sm font-medium text-blue-200 tracking-widest uppercase mb-8 animate-fade-in-up" 
          style={{ animationDelay: '450ms', animationFillMode: 'both' }}
        >
          Connecting Ideas. Empowering India.
        </p>

        {/* Subtle loading pulses */}
        <div className="flex gap-1.5 animate-fade-in-up" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        
      </div>
    </div>
  );
};

export default Preloader;
