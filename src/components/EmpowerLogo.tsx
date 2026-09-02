import React from 'react';
import { Link } from 'react-router-dom';

interface EmpowerLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
  href?: string;
}

export const EmpowerLogoMark: React.FC<{ sizeClass?: string; className?: string }> = ({
  sizeClass = 'w-8 h-8',
  className = '',
}) => {
  return (
    <div className={`relative ${sizeClass} empower-logo-symbol shrink-0 ${className}`}>
      <div className="w-full h-full animate-logo-entrance">
        <div className="w-full h-full animate-logo-float">
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full drop-shadow-xs"
          >
            <defs>
              <linearGradient id="empowerEGradGlobal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#2563EB" />
              </linearGradient>
            </defs>
            {/* Stylized tilted letter E with crisp modern angles */}
            <path
              d="M26 18C26 14.6863 28.6863 12 32 12H76C78.2091 12 80 13.7909 80 16C80 18.2091 78.2091 20 76 20H36V42H70C72.2091 42 74 43.7909 74 46C74 48.2091 72.2091 50 70 50H36V78H76C78.2091 78 80 79.7909 80 82C80 84.2091 78.2091 86 76 86H32C28.6863 86 26 83.3137 26 80V18Z"
              fill="url(#empowerEGradGlobal)"
            />
            {/* Innovation accent dot */}
            <circle cx="56" cy="64" r="3.5" fill="#93C5FD" opacity="0.9" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export const EmpowerLogo: React.FC<EmpowerLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'text-white',
  href = '/',
}) => {
  const sizeMap = {
    sm: { mark: 'w-6 h-6', text: 'text-base font-bold tracking-wide' },
    md: { mark: 'w-8 h-8', text: 'text-xl font-bold tracking-wide' },
    lg: { mark: 'w-10 h-10', text: 'text-2xl font-extrabold tracking-wide' },
    xl: { mark: 'w-16 h-16', text: 'text-3xl font-extrabold tracking-wide' },
  };

  const { mark: markSize, text: textSize } = sizeMap[size];

  const content = (
    <div className={`empower-logo-container inline-flex items-center gap-2.5 ${className}`}>
      <EmpowerLogoMark sizeClass={markSize} />

      {showText && (
        <span className={`${textSize} ${textColor}`}>
          Empower India
        </span>
      )}
    </div>
  );

  if (href) {
    return <Link to={href} className="inline-block focus:outline-none">{content}</Link>;
  }

  return content;
};

export default EmpowerLogo;
