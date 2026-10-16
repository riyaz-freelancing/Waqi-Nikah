import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from '../components/TiltCard';
import OrnateDivider from '../components/OrnateDivider';
import FloralCorner from '../components/FloralCorner';
import { weddingData } from '../data/weddingData';

export default function FamilyInvitationSection() {
  const { family, couple } = weddingData;

  return (
    <section id="family" className="relative py-16 sm:py-24 px-4 sm:px-8 bg-[#F6EFDD]/70 overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gold/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-burgundy/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-serif text-[#1B3FA0] font-bold">
            In The Name of Allah
          </span>
          <h2 className="font-script text-4xl sm:text-6xl md:text-7xl text-[#8B1233] mt-2 font-bold drop-shadow-sm">
            Blessings &amp; Cordial Invitation
          </h2>
          <OrnateDivider />
        </motion.div>

        {/* PART 1: Respected Elders & Guardianship (2 Compact Cards Side-by-Side) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 max-w-4xl">
          {/* Card 1A: Blessings of Respected Elders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <TiltCard
              maxTilt={6}
              glare={true}
              className="h-full bg-[#FFFDF9] rounded-2xl sm:rounded-3xl card-border-ornate p-6 sm:p-8 relative shadow-lg flex flex-col justify-center text-center group"
            >
              <FloralCorner position="top-left" size="w-20 h-20" opacity="opacity-70" />
              <FloralCorner position="bottom-right" size="w-20 h-20" opacity="opacity-70" />

              <span className="text-xs uppercase tracking-widest font-serif text-[#1B3FA0] font-bold mb-2 block">
                {family.blessingsTitle}
              </span>

              <h3 className="font-script text-3xl sm:text-4xl text-[#8B1233] font-bold tracking-wide mb-1 leading-snug">
                {family.grandparents}
              </h3>

              <p className="font-serif text-xs sm:text-sm text-[#2C241E]/80 italic font-medium">
                {family.grandparentsSub}
              </p>
            </TiltCard>
          </motion.div>

          {/* Card 1B: Guardianship */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <TiltCard
              maxTilt={6}
              glare={true}
              className="h-full bg-[#FFFDF9] rounded-2xl sm:rounded-3xl card-border-ornate p-6 sm:p-8 relative shadow-lg flex flex-col justify-center text-center group"
            >
              <FloralCorner position="top-right" size="w-20 h-20" opacity="opacity-70" />
              <FloralCorner position="bottom-left" size="w-20 h-20" opacity="opacity-70" />

              <span className="text-xs uppercase tracking-widest font-serif text-[#1B3FA0] font-bold mb-2 block">
                {family.guardianshipTitle}
              </span>

              <h3 className="font-script text-3xl sm:text-4xl text-[#8B1233] font-bold tracking-wide leading-snug">
                {family.guardianName}
              </h3>
            </TiltCard>
          </motion.div>
        </div>

        {/* PART 2: Main Invitation from Hosts (Short, Centered, Prestigious Card) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="w-full max-w-3xl"
        >
          <TiltCard
            maxTilt={6}
            glare={true}
            className="bg-[#FFFDF9] rounded-2xl sm:rounded-3xl card-border-ornate p-8 sm:p-12 relative shadow-2xl flex flex-col items-center text-center"
          >
            <FloralCorner position="top-left" size="w-24 h-24 sm:w-32 sm:h-32" opacity="opacity-80" />
            <FloralCorner position="top-right" size="w-24 h-24 sm:w-32 sm:h-32" opacity="opacity-80" />
            <FloralCorner position="bottom-left" size="w-24 h-24 sm:w-32 sm:h-32" opacity="opacity-80" />
            <FloralCorner position="bottom-right" size="w-24 h-24 sm:w-32 sm:h-32" opacity="opacity-80" />

            {/* Inner Border */}
            <div className="absolute inset-3 sm:inset-5 border border-[#C9A24B]/40 rounded-xl sm:rounded-2xl pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-xl mx-auto">
              <span className="text-xs sm:text-sm font-serif text-[#1B3FA0] font-bold uppercase tracking-[0.25em] block">
                Mrs. &amp; Mr. Alhaj
              </span>

              {/* Host Names in Cursive Script */}
              <h3 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#8B1233] font-bold tracking-wide leading-tight drop-shadow-sm">
                Mohammed Samiullah Khan
                <span className="inline-block text-2xl sm:text-3xl md:text-4xl text-[#1B3FA0] font-script font-bold ml-2">
                  (Jawaid)
                </span>
              </h3>

              <p className="font-serif text-xs sm:text-sm text-[#1B3FA0] font-semibold italic">
                {family.hosts.subtitle}
              </p>

              <div className="w-36 h-[1.5px] bg-gradient-to-r from-transparent via-[#C9A24B] to-transparent mx-auto my-3" />

              <p className="font-serif text-sm sm:text-base md:text-lg text-[#2C241E] leading-relaxed pt-1">
                Solicit your gracious presence on the auspicious occasion of the{' '}
                <span className="font-bold text-[#8B1233]">Valima Ceremony</span> of our son
              </p>

              {/* Couple Badge in Cursive Script */}
              <div className="inline-flex items-center justify-center gap-3 px-8 py-2.5 rounded-full bg-[#8B1233]/10 border-2 border-[#C9A24B]/60 shadow-sm mt-3">
                <span className="font-script font-bold text-2xl sm:text-4xl text-[#8B1233] tracking-wide">
                  {couple.groom.shortName}
                </span>
                <span className="font-serif font-bold text-lg sm:text-2xl text-[#C9A24B]">&amp;</span>
                <span className="font-script font-bold text-2xl sm:text-4xl text-[#8B1233] tracking-wide">
                  {couple.bride.shortName}
                </span>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
}
