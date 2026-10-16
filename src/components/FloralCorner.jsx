import React from 'react';

/**
 * Ultra-Luxury Botanical Floral & Gold Leaf Corner
 * High-end royal wedding invitation design: multi-layered English garden rose,
 * delicate dusty-blue hydrangeas, gold foil leafy branches, and ornate filigree vines.
 */
export default function FloralCorner({
  position = 'top-left', // 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  className = '',
  size = 'w-32 h-32 sm:w-44 sm:h-44',
  opacity = 'opacity-90',
}) {
  const getTransforms = () => {
    switch (position) {
      case 'top-right':
        return 'scale-x-[-1] right-0 top-0';
      case 'bottom-left':
        return 'scale-y-[-1] left-0 bottom-0';
      case 'bottom-right':
        return 'scale-x-[-1] scale-y-[-1] right-0 bottom-0';
      case 'top-left':
      default:
        return 'left-0 top-0';
    }
  };

  return (
    <div
      className={`absolute pointer-events-none select-none z-10 transition-transform duration-700 ${getTransforms()} ${size} ${opacity} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full filter drop-shadow-[0_2px_8px_rgba(201,162,75,0.18)]"
      >
        <defs>
          {/* Metallic Real Gold Gradient */}
          <linearGradient id="realGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#AA771C" />
            <stop offset="25%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#F9EBB2" />
            <stop offset="75%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8A5A12" />
          </linearGradient>

          {/* Soft Watercolor Blush Rose Petals */}
          <radialGradient id="roseCenter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8B1233" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#D86B85" stopOpacity="0.9" />
            <stop offset="85%" stopColor="#F7C8D2" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FDF0F3" stopOpacity="0.7" />
          </radialGradient>

          <linearGradient id="roseOuterPetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FBE1E7" />
            <stop offset="50%" stopColor="#F4B8C6" />
            <stop offset="100%" stopColor="#E2899F" />
          </linearGradient>

          {/* Soft Dusty Blue Flower Gradients */}
          <radialGradient id="dustyBlueWash" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2A4B8D" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#6C8EBF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C4D6ED" stopOpacity="0.7" />
          </radialGradient>

          <linearGradient id="bluePetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFEAFC" />
            <stop offset="60%" stopColor="#9DB7D5" />
            <stop offset="100%" stopColor="#5E83AC" />
          </linearGradient>

          {/* Golden Olive Leaves */}
          <linearGradient id="goldLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E3A9" />
            <stop offset="40%" stopColor="#C9A24B" />
            <stop offset="100%" stopColor="#7E5B13" />
          </linearGradient>

          {/* Soft Sage Leaf Accent */}
          <linearGradient id="sageLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D2DEC8" />
            <stop offset="50%" stopColor="#9AB38C" />
            <stop offset="100%" stopColor="#678058" />
          </linearGradient>

          {/* Delicate Pearl / Ivory Bud */}
          <radialGradient id="pearlBud" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="65%" stopColor="#FFF2DC" />
            <stop offset="100%" stopColor="#D4AF37" />
          </radialGradient>
        </defs>

        {/* 1. Ornate Gold Filigree Corner Frame */}
        <path
          d="M6 6 L190 6 C155 18, 120 40, 85 85 C40 120, 18 155, 6 190 Z"
          fill="none"
          stroke="url(#realGold)"
          strokeWidth="0.75"
          opacity="0.4"
        />

        {/* Delicate Swirling Gold Vines */}
        <path
          d="M8 8 C35 8, 90 20, 135 55 C175 90, 195 140, 205 200"
          stroke="url(#realGold)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M8 8 C8 35, 20 90, 55 135 C90 175, 140 195, 200 205"
          stroke="url(#realGold)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Inner Filigree Vine Tendrils & Swirls */}
        <path
          d="M45 20 C75 30, 110 70, 120 120 C125 145, 145 165, 170 175"
          stroke="url(#realGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M20 45 C30 75, 70 110, 120 120 C145 125, 165 145, 175 170"
          stroke="url(#realGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />

        {/* Delicate Curled Tendril Finials */}
        <path
          d="M135 55 C150 45, 165 50, 160 62 C155 72, 142 68, 145 60"
          stroke="url(#realGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M55 135 C45 150, 50 165, 62 160 C72 155, 68 142, 60 145"
          stroke="url(#realGold)"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />

        {/* 2. Realistic Gold Leaves with Center Veins */}
        <g>
          {/* Leaf 1 */}
          <path d="M78 28 C95 24, 108 15, 104 5 C90 10, 82 20, 78 28 Z" fill="url(#goldLeafGrad)" />
          <path d="M78 28 C90 18, 104 5, 104 5" stroke="#FFF5D0" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />

          {/* Leaf 2 */}
          <path d="M28 78 C24 95, 15 108, 5 104 C10 90, 20 82, 28 78 Z" fill="url(#goldLeafGrad)" />
          <path d="M28 78 C18 90, 5 104, 5 104" stroke="#FFF5D0" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />

          {/* Leaf 3 */}
          <path d="M142 62 C162 60, 174 52, 170 42 C155 48, 147 55, 142 62 Z" fill="url(#goldLeafGrad)" />
          <path d="M142 62 C155 53, 170 42, 170 42" stroke="#FFF5D0" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />

          {/* Leaf 4 */}
          <path d="M62 142 C60 162, 52 174, 42 170 C48 155, 55 147, 62 142 Z" fill="url(#goldLeafGrad)" />
          <path d="M62 142 C53 155, 42 170, 42 170" stroke="#FFF5D0" strokeWidth="0.6" strokeLinecap="round" opacity="0.7" />

          {/* Leaf 5 (Tip) */}
          <path d="M185 155 C202 165, 215 168, 220 158 C208 150, 195 150, 185 155 Z" fill="url(#goldLeafGrad)" />
          {/* Leaf 6 (Tip) */}
          <path d="M155 185 C165 202, 168 215, 158 220 C150 208, 150 195, 155 185 Z" fill="url(#goldLeafGrad)" />

          {/* Soft Sage Foliage Sprigs */}
          <path d="M105 45 C120 40, 130 32, 126 24 C114 28, 108 36, 105 45 Z" fill="url(#sageLeafGrad)" opacity="0.85" />
          <path d="M45 105 C40 120, 32 130, 24 126 C28 114, 36 108, 45 105 Z" fill="url(#sageLeafGrad)" opacity="0.85" />
        </g>

        {/* 3. Main Centerpiece English Garden Rose (Blush, layered, botanical) */}
        <g transform="translate(68, 68)">
          {/* Outer Layer Petals (Organic overlapping curves) */}
          <path
            d="M-28 -8 C-35 -24, -12 -38, 8 -34 C24 -30, 34 -15, 28 6 C22 24, 0 34, -16 28 C-30 22, -35 5, -28 -8 Z"
            fill="url(#roseOuterPetal)"
            opacity="0.85"
          />
          <path
            d="M-15 -30 C8 -38, 30 -22, 34 -2 C38 18, 20 36, 2 35 C-18 34, -32 18, -32 -2 C-32 -20, -22 -28, -15 -30 Z"
            fill="url(#roseOuterPetal)"
            opacity="0.75"
          />

          {/* Middle Petals */}
          <path
            d="M-20 -15 C-18 -26, 4 -28, 16 -18 C26 -8, 24 12, 12 20 C0 26, -18 18, -22 6 C-24 -4, -22 -10, -20 -15 Z"
            fill="url(#roseCenter)"
            opacity="0.9"
          />
          <path
            d="M-12 -20 C6 -24, 22 -12, 18 6 C14 22, -4 24, -15 14 C-24 4, -22 -14, -12 -20 Z"
            fill="url(#roseOuterPetal)"
            opacity="0.9"
          />

          {/* Inner Swirl & Stamen Rose Heart */}
          <path
            d="M-8 -6 C-2 -12, 10 -8, 10 2 C10 10, -2 12, -8 6 C-12 2, -10 -2, -8 -6 Z"
            fill="url(#roseCenter)"
          />
          <path
            d="M-4 -4 C0 -8, 6 -6, 6 0 C6 5, 0 6, -4 3 C-6 1, -5 -2, -4 -4 Z"
            fill="#8B1233"
          />
          {/* Gold Pistil Highlight */}
          <circle cx="0" cy="0" r="3.5" fill="url(#realGold)" />
          <circle cx="0.5" cy="-0.5" r="1.5" fill="#FFFDF9" />
        </g>

        {/* 4. Secondary Dusty Blue Hydrangea Floret (Upper Right) */}
        <g transform="translate(145, 42)">
          {/* 4 Delicate Botanical Petals */}
          <path d="M0 -3 C-7 -14, 7 -14, 0 -3 Z" fill="url(#bluePetalGrad)" />
          <path d="M0 3 C-7 14, 7 14, 0 3 Z" fill="url(#bluePetalGrad)" />
          <path d="M-3 0 C-14 -7, -14 7, -3 0 Z" fill="url(#bluePetalGrad)" />
          <path d="M3 0 C14 -7, 14 7, 3 0 Z" fill="url(#bluePetalGrad)" />
          {/* Overlapping Rounded Petals */}
          <circle cx="-6" cy="-6" r="6" fill="url(#dustyBlueWash)" />
          <circle cx="6" cy="-6" r="6" fill="url(#dustyBlueWash)" />
          <circle cx="-6" cy="6" r="6" fill="url(#dustyBlueWash)" />
          <circle cx="6" cy="6" r="6" fill="url(#dustyBlueWash)" />
          {/* Golden Center Bead */}
          <circle cx="0" cy="0" r="2.5" fill="url(#realGold)" />
          <circle cx="0.5" cy="-0.5" r="1" fill="#FFFFFF" />
        </g>

        {/* 5. Tertiary Dusty Blue Hydrangea Floret (Lower Left) */}
        <g transform="translate(42, 145)">
          <path d="M0 -3 C-7 -14, 7 -14, 0 -3 Z" fill="url(#bluePetalGrad)" />
          <path d="M0 3 C-7 14, 7 14, 0 3 Z" fill="url(#bluePetalGrad)" />
          <path d="M-3 0 C-14 -7, -14 7, -3 0 Z" fill="url(#bluePetalGrad)" />
          <path d="M3 0 C14 -7, 14 7, 3 0 Z" fill="url(#bluePetalGrad)" />
          <circle cx="-6" cy="-6" r="6" fill="url(#dustyBlueWash)" />
          <circle cx="6" cy="-6" r="6" fill="url(#dustyBlueWash)" />
          <circle cx="-6" cy="6" r="6" fill="url(#dustyBlueWash)" />
          <circle cx="6" cy="6" r="6" fill="url(#dustyBlueWash)" />
          <circle cx="0" cy="0" r="2.5" fill="url(#realGold)" />
          <circle cx="0.5" cy="-0.5" r="1" fill="#FFFFFF" />
        </g>

        {/* 6. Delicate Pearl & Jasmine Buds */}
        <circle cx="180" cy="115" r="4.5" fill="url(#pearlBud)" />
        <circle cx="180" cy="115" r="1.5" fill="#8B1233" opacity="0.6" />

        <circle cx="115" cy="180" r="4.5" fill="url(#pearlBud)" />
        <circle cx="115" cy="180" r="1.5" fill="#8B1233" opacity="0.6" />

        {/* Tiny Baby's Breath / Star Dust Accents */}
        <circle cx="100" cy="22" r="2" fill="url(#realGold)" />
        <circle cx="22" cy="100" r="2" fill="url(#realGold)" />
        <circle cx="160" cy="95" r="2.2" fill="url(#realGold)" />
        <circle cx="95" cy="160" r="2.2" fill="url(#realGold)" />
      </svg>
    </div>
  );
}
