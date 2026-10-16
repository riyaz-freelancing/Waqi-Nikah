import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { weddingData } from '../data/weddingData';
import FloralCorner from '../components/FloralCorner';

export default function IntroGate({ onOpen, isOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);

    // Fire royal gold & blush confetti burst
    try {
      confetti({
        particleCount: 75,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#C9A24B', '#E8CF8A', '#8B1233', '#F4C6D0', '#FFFFFF'],
        ticks: 250,
      });
    } catch {
      // Ignore if confetti fails
    }

    // Trigger parent after 3D swing starts
    setTimeout(() => {
      onOpen();
    }, 900);
  };

  if (isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F1713]/70 backdrop-blur-md overflow-hidden perspective-1000"
      >
        {/* Left Mughal Gate Door */}
        <motion.div
          animate={isOpening ? { rotateY: -110, opacity: 0.4 } : { rotateY: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: [0.25, 1, 0.5, 1] }}
          style={{ transformOrigin: 'left center' }}
          className="absolute left-0 top-0 w-1/2 h-full bg-[#FBF7EC] border-r border-[#C9A24B]/40 shadow-2xl flex flex-col justify-between p-6 sm:p-12 overflow-hidden arabesque-pattern"
        >
          {/* Subtle Arabesque & Floral Overlay */}
          <FloralCorner position="top-left" size="w-36 h-36 sm:w-56 sm:h-56" opacity="opacity-70" />
          <FloralCorner position="bottom-left" size="w-36 h-36 sm:w-56 sm:h-56" opacity="opacity-70" />

          {/* Left Door Frame Inner Border */}
          <div className="absolute inset-4 sm:inset-8 border border-[#C9A24B]/50 rounded-l-3xl pointer-events-none" />
          <div className="absolute inset-6 sm:inset-10 border border-[#C9A24B]/20 rounded-l-2xl pointer-events-none" />

          {/* Left Arch Details */}
          <div className="relative z-10 my-auto text-right pr-4 sm:pr-8">
            <span className="text-[#8B1233]/40 font-arabic text-xl sm:text-3xl block">بِسْمِ ٱللَّٰهِ</span>
          </div>
        </motion.div>

        {/* Right Mughal Gate Door */}
        <motion.div
          animate={isOpening ? { rotateY: 110, opacity: 0.4 } : { rotateY: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: [0.25, 1, 0.5, 1] }}
          style={{ transformOrigin: 'right center' }}
          className="absolute right-0 top-0 w-1/2 h-full bg-[#FBF7EC] border-l border-[#C9A24B]/40 shadow-2xl flex flex-col justify-between p-6 sm:p-12 overflow-hidden arabesque-pattern"
        >
          {/* Floral Corners */}
          <FloralCorner position="top-right" size="w-36 h-36 sm:w-56 sm:h-56" opacity="opacity-70" />
          <FloralCorner position="bottom-right" size="w-36 h-36 sm:w-56 sm:h-56" opacity="opacity-70" />

          {/* Right Door Frame Inner Border */}
          <div className="absolute inset-4 sm:inset-8 border border-[#C9A24B]/50 rounded-r-3xl pointer-events-none" />
          <div className="absolute inset-6 sm:inset-10 border border-[#C9A24B]/20 rounded-r-2xl pointer-events-none" />

          {/* Right Arch Details */}
          <div className="relative z-10 my-auto text-left pl-4 sm:pr-8">
            <span className="text-[#8B1233]/40 font-arabic text-xl sm:text-3xl block">ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</span>
          </div>
        </motion.div>

        {/* Center Royal Medallion & Seal */}
        <motion.div
          animate={isOpening ? { scale: 1.4, opacity: 0 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-20 flex flex-col items-center cursor-pointer select-none"
          onClick={handleOpen}
        >
          {/* Outer Pulsing Glow */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-gold/30 via-burgundy/20 to-gold/30 blur-xl animate-pulse-glow" />

            {/* Gold Wax Seal Button */}
            <motion.div
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#8B1233] via-[#680C24] to-[#450716] card-border-ornate flex flex-col items-center justify-center p-3 shadow-gold-glow cursor-pointer transition-all duration-300 group"
            >
              {/* Gold Filigree Ring */}
              <div className="absolute inset-2 rounded-full border border-dashed border-[#E8CF8A]/80 pointer-events-none group-hover:rotate-45 transition-transform duration-700" />
              <div className="absolute inset-3.5 rounded-full border border-[#C9A24B]/50 pointer-events-none" />

              <span className="text-xs uppercase tracking-[0.25em] text-[#E8CF8A]/90 font-serif mb-1">Valima</span>
              <span className="font-script text-3xl sm:text-4xl text-[#FFF4D0] drop-shadow-md">
                {weddingData.couple.initials}
              </span>
              <span className="text-[10px] tracking-widest text-[#E8CF8A]/80 font-serif mt-1">2026</span>
            </motion.div>
          </div>

          {/* Invitation Call to Action */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="mt-6 flex flex-col items-center text-center"
          >
            <span className="font-serif text-lg sm:text-xl font-medium tracking-wide text-[#8B1233] bg-[#FBF7EC]/90 backdrop-blur-sm px-5 py-1.5 rounded-full border border-[#C9A24B]/50 shadow-md">
              Tap to Open Invitation
            </span>
            <span className="text-xs tracking-widest text-[#1B3FA0] mt-2 font-serif uppercase">
              Bismillah-ir-Rahman-ir-Rahim
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
