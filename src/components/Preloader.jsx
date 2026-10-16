import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';

export default function Preloader({ onReady }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for fonts & initial dom load
    const timer = setTimeout(() => {
      setLoading(false);
      onReady?.();
    }, 1400);

    return () => clearTimeout(timer);
  }, [onReady]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] bg-[#FBF7EC] flex flex-col items-center justify-center arabesque-pattern select-none"
        >
          {/* Animated Golden Ring */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center">
            {/* Outer spinning gold dash ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#C9A24B] animate-spin-very-slow" />
            <div className="absolute inset-2 rounded-full border border-[#8B1233]/20" />

            {/* Inner Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <span className="font-script text-4xl sm:text-5xl text-[#8B1233]">
                {weddingData.couple.initials}
              </span>
              <span className="font-serif text-[10px] uppercase tracking-widest text-[#1B3FA0] font-bold mt-1">
                Valima
              </span>
            </motion.div>
          </div>

          {/* Loading status */}
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="font-serif italic text-xs sm:text-sm text-[#8B1233] tracking-widest mt-6"
          >
            Preparing Auspicious Invitation...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
