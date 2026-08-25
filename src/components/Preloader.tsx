import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Keep the preloader visible for 1.5 seconds, then fade out
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      // Wait for the fade-out transition to finish before unmounting
      setTimeout(() => setIsVisible(false), 500); 
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-900 transition-opacity duration-500 ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center justify-center text-center px-4">
        
        {/* Animated Mark */}
        <div className="relative mb-6 animate-fade-in-scale">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse-glow" />
          
          {/* Abstract India-inspired mark (Tilted 10 degrees) */}
          <div className="relative text-blue-400 w-20 h-20 animate-float-tilt">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
              {/* Geometric innovation/lotus/shield combination */}
              <path 
                d="M50 5 L63 37 L95 50 L63 63 L50 95 L37 63 L5 50 L37 37 Z" 
                fill="currentColor" 
                className="opacity-80"
              />
              <circle cx="50" cy="50" r="15" fill="white" className="opacity-90" />
              <circle cx="50" cy="50" r="6" fill="#102a43" />
            </svg>
          </div>
        </div>

        {/* Brand Text */}
        <h1 className="text-3xl font-extrabold text-white tracking-wide mb-2 animate-fade-in-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          Empower India
        </h1>
        
        <p className="text-sm font-medium text-blue-200 tracking-widest uppercase mb-10 animate-fade-in-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
          Connecting Ideas. Empowering India.
        </p>

        {/* Subtle loading indicator */}
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
