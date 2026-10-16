import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Award } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import OrnateDivider from '../components/OrnateDivider';
import FloralCorner from '../components/FloralCorner';
import { weddingData } from '../data/weddingData';

export default function CoupleSection() {
  const { groom, bride } = weddingData.couple;

  return (
    <section id="couple" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#FBF7EC] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-gold/10 via-blush/20 to-royal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <span className="text-sm uppercase tracking-[0.3em] font-serif text-[#1B3FA0] font-bold">
            Together in Faith &amp; Love
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#8B1233] mt-2 font-bold">
            The Blessed Couple
          </h2>
          <OrnateDivider />
        </motion.div>

        {/* 3D Couple Cards with Heart Centerpiece */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-11 gap-6 sm:gap-8 items-center">
          {/* Groom Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5"
          >
            <TiltCard
              maxTilt={10}
              className="bg-[#FFFDF9] rounded-2xl sm:rounded-3xl card-border-ornate p-8 sm:p-12 relative overflow-hidden shadow-xl flex flex-col items-center text-center group"
            >
              <FloralCorner position="top-left" size="w-24 h-24 sm:w-32 sm:h-32" opacity="opacity-75" />
              <FloralCorner position="bottom-right" size="w-24 h-24 sm:w-32 sm:h-32" opacity="opacity-75" />

              {/* Groom Monogram / Photo Avatar */}
              <div className="relative mb-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-[#8B1233] via-[#650B23] to-[#1B3FA0] p-2 shadow-gold-glow">
                  <div className="w-full h-full rounded-full border-2 border-dashed border-[#E8CF8A] flex flex-col items-center justify-center bg-[#FBF7EC] text-[#8B1233] overflow-hidden">
                    {groom.image ? (
                      <img src={groom.image} alt={groom.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="font-script text-6xl sm:text-7xl text-[#8B1233] group-hover:scale-110 transition-transform duration-500">
                        W
                      </span>
                    )}
                  </div>
                </div>
                {/* Groom Tag Badge */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full bg-[#8B1233] text-[#FFFDF9] text-xs font-serif uppercase tracking-widest border border-[#E8CF8A] shadow-md font-bold">
                  Groom
                </div>
              </div>

              {/* Name & Degrees - Solid Bold Burgundy */}
              <h3 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#8B1233] font-bold mt-2 mb-2 leading-tight">
                {groom.name}
              </h3>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B3FA0]/10 border border-[#1B3FA0]/30 text-[#1B3FA0] text-sm font-serif font-bold my-2">
                <Award className="w-4 h-4 text-[#1B3FA0]" />
                <span>{groom.degrees}</span>
              </div>

              <p className="font-serif text-base sm:text-lg text-[#2C241E]/90 italic mt-3 max-w-sm font-medium">
                {groom.bio}
              </p>
            </TiltCard>
          </motion.div>

          {/* Center Connector (1 col) */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center my-3 lg:my-0">
            <motion.div
              animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#8B1233] to-[#C9A24B] p-1.5 shadow-gold-glow flex items-center justify-center text-[#FFFDF9]"
            >
              <div className="w-full h-full rounded-full bg-[#FBF7EC] flex items-center justify-center border-2 border-[#E8CF8A]">
                <Heart className="w-7 h-7 sm:w-9 sm:h-9 text-[#8B1233] fill-[#8B1233]/25" />
              </div>
            </motion.div>
            <span className="font-script text-3xl sm:text-4xl text-[#1B3FA0] mt-2 font-bold">With</span>
          </div>

          {/* Bride Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5"
          >
            <TiltCard
              maxTilt={10}
              className="bg-[#FFFDF9] rounded-2xl sm:rounded-3xl card-border-ornate p-8 sm:p-12 relative overflow-hidden shadow-xl flex flex-col items-center text-center group"
            >
              <FloralCorner position="top-right" size="w-24 h-24 sm:w-32 sm:h-32" opacity="opacity-75" />
              <FloralCorner position="bottom-left" size="w-24 h-24 sm:w-32 sm:h-32" opacity="opacity-75" />

              {/* Bride Monogram / Photo Avatar */}
              <div className="relative mb-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-[#C9A24B] via-[#8B1233] to-[#9DB7D5] p-2 shadow-gold-glow">
                  <div className="w-full h-full rounded-full border-2 border-dashed border-[#E8CF8A] flex flex-col items-center justify-center bg-[#FBF7EC] text-[#8B1233] overflow-hidden">
                    {bride.image ? (
                      <img src={bride.image} alt={bride.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="font-script text-6xl sm:text-7xl text-[#8B1233] group-hover:scale-110 transition-transform duration-500">
                        S
                      </span>
                    )}
                  </div>
                </div>
                {/* Bride Tag Badge */}
                <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full bg-[#1B3FA0] text-[#FFFDF9] text-xs font-serif uppercase tracking-widest border border-[#E8CF8A] shadow-md font-bold">
                  Bride
                </div>
              </div>

              {/* Name & Degrees - Solid Bold Burgundy */}
              <h3 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#8B1233] font-bold mt-2 mb-2 leading-tight">
                {bride.name}
              </h3>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B1233]/10 border border-[#8B1233]/30 text-[#8B1233] text-sm font-serif font-bold my-2">
                <Award className="w-4 h-4 text-[#8B1233]" />
                <span>{bride.degrees}</span>
              </div>

              <div className="space-y-1.5 mt-3 max-w-sm">
                <p className="font-serif text-base sm:text-lg text-[#2C241E] font-medium">
                  {bride.bio}
                </p>
                <p className="font-serif text-sm sm:text-base text-[#1B3FA0] font-semibold italic">
                  ({bride.lineage})
                </p>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
