'use client';

import React from 'react';

interface SaffronLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function SaffronLogo({ size = 'md', className = '' }: SaffronLogoProps) {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  };

  return (
    <div
      className={`relative flex items-center justify-center shrink-0 group ${sizeMap[size]} ${className}`}
      aria-label="نشان زرین قائنات"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md transition-transform duration-500 group-hover:scale-105"
      >
        <defs>
          {/* Royal Persian Gold Gradient */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF1B8" />
            <stop offset="35%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#AA820A" />
            <stop offset="100%" stopColor="#F5D77F" />
          </linearGradient>

          {/* Deep Crimson Velvet Gradient */}
          <radialGradient id="crimsonVelvet" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6B081D" />
            <stop offset="75%" stopColor="#4A0512" />
            <stop offset="100%" stopColor="#250208" />
          </radialGradient>

          {/* Ruby Saffron Flame Gradient */}
          <linearGradient id="saffronFlame" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#B30C2E" />
            <stop offset="50%" stopColor="#E63946" />
            <stop offset="100%" stopColor="#FED65B" />
          </linearGradient>

          {/* Subtle Glow Filter */}
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#D4AF37" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer 8-Pointed Persian Star Rosette (Shamseh Motif) */}
        <g stroke="url(#goldGradient)" strokeWidth="1.5" fill="none" opacity="0.9">
          <rect x="15" y="15" width="70" height="70" rx="10" transform="rotate(0 50 50)" />
          <rect x="15" y="15" width="70" height="70" rx="10" transform="rotate(45 50 50)" />
        </g>

        {/* Central Crimson Medallion */}
        <circle cx="50" cy="50" r="38" fill="url(#crimsonVelvet)" stroke="url(#goldGradient)" strokeWidth="1.8" />

        {/* Delicate Inner Beaded Orbit */}
        <circle cx="50" cy="50" r="33" stroke="url(#goldGradient)" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.75" />

        {/* Saffron Flower 3-Stigmata Emblem (Royal Persian Motif) */}
        {/* Left Stigma Petal Curve */}
        <path
          d="M 50 72 C 45 62 31 52 35 34 C 38 22 46 29 44 38 C 42 45 47 56 50 68"
          fill="url(#saffronFlame)"
          stroke="#FED65B"
          strokeWidth="0.8"
          filter="url(#goldGlow)"
        />

        {/* Right Stigma Petal Curve */}
        <path
          d="M 50 72 C 55 62 69 52 65 34 C 62 22 54 29 56 38 C 58 45 53 56 50 68"
          fill="url(#saffronFlame)"
          stroke="#FED65B"
          strokeWidth="0.8"
          filter="url(#goldGlow)"
        />

        {/* Center Crown Stigma (Tallest Royal Filament) */}
        <path
          d="M 50 73 C 48 58 46 42 49 24 C 50 20 51 20 52 24 C 54 42 52 58 50 73"
          fill="url(#goldGradient)"
          stroke="#FED65B"
          strokeWidth="0.8"
          filter="url(#goldGlow)"
        />

        {/* Top Crowning Diamond Jewel */}
        <polygon
          points="50,14 53,19 50,24 47,19"
          fill="url(#goldGradient)"
          stroke="#FFF1B8"
          strokeWidth="0.5"
        />

        {/* Micro Golden Pistil Starlets */}
        <circle cx="37" cy="27" r="1.8" fill="#FFF1B8" />
        <circle cx="63" cy="27" r="1.8" fill="#FFF1B8" />
        <circle cx="50" cy="19" r="1.5" fill="#FFFFFF" />

        {/* Base Lotus Ribbon Knot */}
        <path
          d="M 42 72 Q 50 76 58 72 Q 50 79 42 72 Z"
          fill="url(#goldGradient)"
        />
      </svg>
    </div>
  );
}
