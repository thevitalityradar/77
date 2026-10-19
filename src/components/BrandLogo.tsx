import React, { useState } from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  variant?: 'light' | 'dark';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showTagline = false,
  variant = 'light'
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  const heightClasses = {
    sm: 'h-7',
    md: 'h-9',
    lg: 'h-12'
  };

  const imageSrc = variant === 'dark' 
    ? '/logo-77review-trimmed.png' 
    : '/logo-77review-trimmed.png';

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {!imageFailed ? (
        <img
          src={imageSrc}
          alt="77 Review Logo"
          className={`${heightClasses[size]} w-auto object-contain transition-transform duration-200 hover:scale-[1.02]`}
          onError={() => setImageFailed(true)}
        />
      ) : (
        /* Vector Fallback if image asset is unavailable */
        <svg
          className={`${heightClasses[size]} w-auto transition-transform duration-200 hover:scale-[1.02]`}
          viewBox="0 0 490 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="77 Review Logo"
          role="img"
        >
          <defs>
            <linearGradient id="logoG1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="50%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
            <linearGradient id="logoG2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#0f766e" />
              <stop offset="100%" stopColor="#134e4a" />
            </linearGradient>
            <linearGradient id="logoLeaf" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#86efac" />
            </linearGradient>
          </defs>

          <path d="M 20 20 L 86 20 L 52 104 L 28 104 L 58 38 L 20 38 Z" fill="url(#logoG1)" />
          <path d="M 82 20 L 148 20 L 114 104 L 90 104 L 120 38 L 82 38 Z" fill="url(#logoG2)" />
          <path
            d="M 72 84 C 68 58 88 38 112 36 C 110 56 92 78 72 84 Z"
            fill="url(#logoLeaf)"
          />
          <path
            d="M 75 80 C 86 62 100 48 111 37"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          <text
            x="162"
            y="78"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontSize="66"
            fontWeight="800"
            letterSpacing="-0.03em"
            fill="#15803d"
          >
            77
          </text>
          <text
            x="248"
            y="78"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontSize="66"
            fontWeight="800"
            letterSpacing="-0.03em"
            fill="#0f3b46"
          >
            Review
          </text>
        </svg>
      )}

      {showTagline && (
        <span className="hidden lg:inline-block pl-3 border-l border-stone-200 text-xs font-medium tracking-tight text-stone-500 whitespace-nowrap">
          Evidence-Aware Health & Supplement Reviews
        </span>
      )}
    </div>
  );
};
