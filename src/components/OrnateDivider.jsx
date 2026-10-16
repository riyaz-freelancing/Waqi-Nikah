import React from 'react';
import { motion } from 'framer-motion';

/**
 * Ornate flourish divider matching the physical card's royal blue & gold filigree
 */
export default function OrnateDivider({
  color = '#1B3FA0', // Royal blue from card
  goldColor = '#C9A24B',
  className = '',
  width = 'max-w-md',
}) {
  return (
    <div className={`flex items-center justify-center my-6 sm:my-8 px-4 ${className}`}>
      <div className={`w-full ${width} flex items-center justify-center gap-3`}>
        {/* Left flourish line */}
        <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A24B]/50 to-[#1B3FA0]/70" />

        {/* Center Ornate Medallion */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex items-center gap-2 text-[#1B3FA0]"
        >
          <svg
            width="54"
            height="22"
            viewBox="0 0 54 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="filter drop-shadow-sm"
          >
            {/* Left curved wing */}
            <path
              d="M2 11C8 11 12 5 18 5C22 5 24 10 27 11C24 12 22 17 18 17C12 17 8 11 2 11Z"
              stroke={color}
              strokeWidth="1.5"
              fill="none"
            />
            {/* Right curved wing */}
            <path
              d="M52 11C46 11 42 5 36 5C32 5 30 10 27 11C30 12 32 17 36 17C42 17 46 11 52 11Z"
              stroke={color}
              strokeWidth="1.5"
              fill="none"
            />
            {/* Center diamond & floral heart */}
            <circle cx="27" cy="11" r="3" fill={goldColor} />
            <circle cx="20" cy="11" r="1.5" fill={color} />
            <circle cx="34" cy="11" r="1.5" fill={color} />
          </svg>
        </motion.div>

        {/* Right flourish line */}
        <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#C9A24B]/50 to-[#1B3FA0]/70" />
      </div>
    </div>
  );
}
