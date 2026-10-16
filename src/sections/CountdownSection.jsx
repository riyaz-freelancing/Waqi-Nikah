import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import OrnateDivider from '../components/OrnateDivider';
import { weddingData } from '../data/weddingData';

export default function CountdownSection() {
  const { countdown } = weddingData;
  const [selectedEventId, setSelectedEventId] = useState('nikah');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false,
    activeTitle: 'Nikah Ceremony',
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const nikahTime = new Date(countdown.primaryTarget).getTime();
      const valimaTime = new Date(countdown.secondaryTarget).getTime();

      let targetTime;
      let targetTitle;

      if (selectedEventId === 'valima') {
        targetTime = valimaTime;
        targetTitle = 'Valima Ceremony';
      } else if (selectedEventId === 'nikah') {
        targetTime = nikahTime;
        targetTitle = 'Nikah Ceremony';
      } else {
        if (now < nikahTime) {
          targetTime = nikahTime;
          targetTitle = 'Nikah Ceremony';
        } else if (now < valimaTime) {
          targetTime = valimaTime;
          targetTitle = 'Valima Ceremony';
        } else {
          setTimeLeft({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isCompleted: true,
            activeTitle: 'Ceremonies Completed',
          });
          return;
        }
      }

      const diff = targetTime - now;

      if (diff <= 0) {
        if (selectedEventId === 'nikah' && now < valimaTime) {
          setSelectedEventId('valima');
        } else {
          setTimeLeft({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isCompleted: true,
            activeTitle: targetTitle,
          });
        }
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isCompleted: false,
        activeTitle: targetTitle,
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [selectedEventId, countdown]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 bg-gradient-to-b from-[#0B1030] via-[#121942] to-[#0B1030] text-[#FFFDF9] overflow-hidden">
      {/* Decorative Starry Glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-gold/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Section Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-12"
        >
          <span className="text-sm uppercase tracking-[0.3em] font-serif text-[#E8CF8A] font-bold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#E8CF8A]" />
            Counting Down The Moments
            <Sparkles className="w-4 h-4 text-[#E8CF8A]" />
          </span>

          <h2 className="font-script text-4xl sm:text-6xl md:text-7xl text-[#FFFDF9] mt-2 font-bold drop-shadow-sm">
            Until The Auspicious Moment
          </h2>

          <OrnateDivider color="#E8CF8A" goldColor="#FFFDF9" />

          {/* Toggle between Nikah & Valima Countdown */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#182352] border border-[#C9A24B]/40 mt-3 shadow-md">
            <button
              onClick={() => setSelectedEventId('nikah')}
              className={`px-5 py-2 rounded-full font-serif text-xs sm:text-base transition-all duration-300 ${
                selectedEventId === 'nikah'
                  ? 'bg-[#8B1233] text-[#FFFDF9] shadow-md font-bold'
                  : 'text-[#E8CF8A]/80 hover:text-[#FFFDF9] font-medium'
              }`}
            >
              Nikah (23 Oct)
            </button>
            <button
              onClick={() => setSelectedEventId('valima')}
              className={`px-5 py-2 rounded-full font-serif text-xs sm:text-base transition-all duration-300 ${
                selectedEventId === 'valima'
                  ? 'bg-[#C9A24B] text-[#0B1030] shadow-md font-bold'
                  : 'text-[#E8CF8A]/80 hover:text-[#FFFDF9] font-medium'
              }`}
            >
              Valima Dinner (25 Oct)
            </button>
          </div>
        </motion.div>

        {/* Countdown Display */}
        {timeLeft.isCompleted ? (
          <div className="p-10 rounded-3xl bg-[#15204E]/80 border-2 border-[#C9A24B]/50 shadow-gold-glow max-w-lg">
            <h3 className="font-arabic text-4xl text-[#E8CF8A] mb-3">ٱلْحَمْدُ لِلَّٰهِ</h3>
            <p className="font-serif text-2xl sm:text-3xl text-[#FFFDF9] font-bold">
              Alhamdulillah, thank you for being part of our auspicious day!
            </p>
            <p className="font-serif italic text-base text-[#E8CF8A] mt-2 font-medium">
              May Allah bless this union with eternal peace &amp; barakah.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl">
            {units.map((unit, idx) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.04, transition: { duration: 0.25 } }}
                className="flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-[#11193D]/95 card-border-ornate-navy relative group hover:border-[#E8CF8A] transition-all shadow-xl hover:shadow-[0_15px_35px_rgba(201,162,75,0.25)] cursor-pointer overflow-hidden"
              >
                {/* Top Golden Accent Glow Line */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#E8CF8A]/60 to-transparent group-hover:via-[#FFFDF9] transition-all" />

                {/* Number Card with Pop/Slide Animation on change */}
                <div className="relative h-16 sm:h-20 md:h-24 flex items-center justify-center overflow-hidden">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={unit.value}
                      initial={{ y: -24, opacity: 0, scale: 0.9 }}
                      animate={{ y: 0, opacity: 1, scale: 1 }}
                      exit={{ y: 24, opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5D0] to-[#C9A24B] drop-shadow-md inline-block"
                    >
                      {String(unit.value).padStart(2, '0')}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Label */}
                <span className="text-xs sm:text-sm font-serif uppercase tracking-widest text-[#E8CF8A] mt-2 font-bold">
                  {unit.label}
                </span>

                {/* Corner Golden Jewel with Live Heartbeat Pulse */}
                <motion.div
                  animate={unit.label === 'Seconds' ? { scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] } : { scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: unit.label === 'Seconds' ? 1 : 2.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#E8CF8A] shadow-[0_0_8px_#E8CF8A]"
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Subtext info */}
        <p className="font-serif text-sm sm:text-base text-[#E8CF8A] tracking-wider mt-10 italic font-medium">
          Targeting {selectedEventId === 'nikah' ? 'Friday 23rd Oct 1:30 PM IST' : 'Sunday 25th Oct 8:30 PM IST'} (Hyderabad Time)
        </p>
      </div>
    </section>
  );
}
