import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ChevronDown, Sparkles } from 'lucide-react';
import CrystalizedBall from '../components/CrystalizedBall';
import FloralCorner from '../components/FloralCorner';
import { weddingData } from '../data/weddingData';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  const handleBallClick = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.5 },
        colors: ['#C9A24B', '#F4C6D0', '#E8CF8A', '#8B1233', '#FFFFFF'],
      });
    } catch {
      // Confetti fallback
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-between items-center pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 sm:px-8 overflow-hidden bg-[#FBF7EC]"
    >
      {/* Ornate Gold Double-Line Outer Frame (Matching Card) */}
      <div className="absolute inset-3 sm:inset-6 card-border-ornate rounded-3xl pointer-events-none z-10" />

      {/* Watercolor Floral Corners */}
      <FloralCorner position="top-left" size="w-36 h-36 sm:w-56 sm:h-56 md:w-64 md:h-64" />
      <FloralCorner position="top-right" size="w-36 h-36 sm:w-56 sm:h-56 md:w-64 md:h-64" />
      <FloralCorner position="bottom-left" size="w-36 h-36 sm:w-56 sm:h-56 md:w-64 md:h-64" />
      <FloralCorner position="bottom-right" size="w-36 h-36 sm:w-56 sm:h-56 md:w-64 md:h-64" />

      {/* Header Area: Bismillah Calligraphy (Positioned clearly below the floating navbar) */}
      <motion.div
        style={{ y: yParallax, opacity: opacityParallax }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-20 flex flex-col items-center text-center mt-2 sm:mt-4 max-w-2xl px-2"
      >
        {/* Arabic Calligraphy - Large, Clear, Royal Blue */}
        <h2 className="font-arabic text-3xl sm:text-5xl md:text-6xl text-[#1B3FA0] font-bold leading-relaxed drop-shadow-md select-none">
          {weddingData.bismillah.arabic}
        </h2>
        {/* Translation - Clear & Legible */}
        <p className="font-serif italic text-sm sm:text-base md:text-lg text-[#8B1233] font-semibold tracking-wide mt-2">
          {weddingData.bismillah.translation}
        </p>

        {/* Gold Flourish Divider */}
        <div className="w-32 sm:w-44 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24B] to-transparent my-3" />
      </motion.div>

      {/* Center 3D Wow Piece: CrystalizedBall with Floating Monogram */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center my-4 sm:my-6">
        {/* Decorative Celestial Portal for CrystalizedBall */}
        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] rounded-full flex items-center justify-center">
          {/* Outer Royal Glow & Gold Rim */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#0B1030] to-[#151C42] shadow-2xl p-2.5 sm:p-3 card-border-ornate-navy">
            {/* Concentric Golden Orbit Rings */}
            <div className="absolute inset-1.5 rounded-full border border-dashed border-[#E8CF8A]/40 animate-spin-very-slow pointer-events-none" />
            <div className="absolute inset-4 rounded-full border border-[#C9A24B]/30 pointer-events-none" />

            {/* React Bits CrystalizedBall centerpiece */}
            <div
              onClick={handleBallClick}
              className="w-full h-full rounded-full overflow-hidden relative cursor-pointer"
              title="Touch the Crystal Sphere"
            >
              <CrystalizedBall
                preset="plasma"
                color="#F25BD0"
                size={0.7}
                crackle={0.85}
                fill={0.5}
                interactive={true}
                hoverStrength={0.75}
                particleCount={15000}
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Floating Monogram "W & S" in Center / Over the Ball */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute pointer-events-none z-30 flex flex-col items-center justify-center select-none"
          >
            {/* Elegant Royal Medallion with contrast shield for crystal clarity */}
            <div className="px-6 py-4 sm:px-8 sm:py-5 rounded-full bg-[#080C24]/85 backdrop-blur-md border border-[#E8CF8A]/50 shadow-[0_0_30px_rgba(0,0,0,0.85),inset_0_0_15px_rgba(201,162,75,0.2)] flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-2 sm:gap-2.5 leading-none">
                <span className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF7] via-[#F4DE9C] to-[#C9A24B] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  W
                </span>
                <span className="font-serif italic font-normal text-2xl sm:text-3xl md:text-4xl text-[#E8CF8A] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] -mt-1">
                  &amp;
                </span>
                <span className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-[#FFFDF7] via-[#F4DE9C] to-[#C9A24B] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  S
                </span>
              </div>
              <div className="w-16 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-[#E8CF8A] to-transparent my-1.5" />
              <span className="text-[9px] sm:text-[11px] tracking-[0.35em] text-[#E8CF8A] font-serif uppercase font-bold drop-shadow">
                Eternal Union
              </span>
            </div>
          </motion.div>
        </div>

        {/* Interactive Tap Hint */}
        {/* <p className="text-xs sm:text-sm font-sans font-semibold tracking-wider uppercase text-[#8B1233] mt-3 flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#C9A24B] animate-pulse" />
          Tap sphere to interact &amp; swirl
          <Sparkles className="w-4 h-4 text-[#C9A24B] animate-pulse" />
        </p> */}
      </div>

      {/* Main Names & Ceremony Badging - Fully Clear, Large, Bold, Legible */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-20 flex flex-col items-center text-center max-w-4xl px-3"
      >
        {/* Valima Ceremony Burgundy Pill Badge (Like Card) */}
        <div className="inline-flex items-center gap-2 px-7 py-2 rounded-full bg-gradient-to-r from-[#8B1233] via-[#A81D43] to-[#8B1233] text-[#FFFDF7] border-2 border-[#E8CF8A] shadow-md mb-3">
          <span className="text-xs sm:text-sm md:text-base font-serif uppercase tracking-[0.25em] font-bold">
            {weddingData.invitationHeading}
          </span>
        </div>

        {/* Groom Giant Name - Solid Bold Burgundy */}
        <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#8B1233] font-bold tracking-wide leading-tight drop-shadow-sm my-1">
          {weddingData.couple.groom.name}
        </h1>

        {/* With Divider */}
        <div className="font-serif italic text-2xl sm:text-3xl text-[#1B3FA0] my-2 font-bold flex items-center gap-4">
          <span className="h-[1.5px] w-12 bg-[#C9A24B]" />
          With
          <span className="h-[1.5px] w-12 bg-[#C9A24B]" />
        </div>

        {/* Bride Giant Name - Solid Bold Burgundy */}
        <h2 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#8B1233] font-bold tracking-wide leading-tight drop-shadow-sm my-1">
          {weddingData.couple.bride.name}
        </h2>

        {/* Date Line - Large, Crisp, Royal Blue */}
        <div className="mt-5 flex flex-col items-center space-y-1">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1B3FA0] font-bold tracking-wider">
            Sunday, 25th October 2026
          </p>
          <p className="font-serif text-sm sm:text-base text-[#8B1233] font-bold tracking-widest uppercase">
            14th Jamadi ul Awwal 1448 Hijri &bull; Hyderabad
          </p>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#family"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-20 mt-8 sm:mt-10 flex flex-col items-center text-[#8B1233] hover:text-[#1B3FA0] transition-colors cursor-pointer group"
      >
        <span className="text-xs font-serif uppercase tracking-[0.25em] mb-1.5 font-bold group-hover:text-[#1B3FA0]">
          Scroll to explore
        </span>
        <div className="w-9 h-9 rounded-full border-2 border-[#C9A24B] flex items-center justify-center bg-[#FFFDF7] shadow-md group-hover:scale-110 transition-transform">
          <ChevronDown className="w-5 h-5 text-[#8B1233]" />
        </div>
      </motion.a>
    </section>
  );
}
