import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import OrnateDivider from '../components/OrnateDivider';
import FloralCorner from '../components/FloralCorner';
import CrystalizedBall from '../components/CrystalizedBall';
import { weddingData } from '../data/weddingData';

export default function EventsSection() {
  const { events } = weddingData;

  const generateGoogleCalendarUrl = (event) => {
    const isNikah = event.id === 'nikah';
    const title = encodeURIComponent(`${event.title} | Waqiullah & Sara`);
    const details = encodeURIComponent(
      `Join us for the ${event.title} of Mohammed Waqiullah Khan & Syeda Sara Fatima.\nTime: ${event.time}\nVenue: ${event.venueName}, ${event.venueAddress}`
    );
    const location = encodeURIComponent(`${event.venueName}, ${event.venueAddress}`);
    const dates = isNikah
      ? '20261023T080000Z/20261023T110000Z'
      : '20261025T150000Z/20261025T183000Z';

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
  };

  return (
    <section id="events" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#F6EFDD]/60 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-14"
        >
          <span className="text-sm uppercase tracking-[0.3em] font-serif text-[#1B3FA0] font-bold">
            Wedding Itinerary
          </span>
          <h2 className="font-script text-4xl sm:text-6xl md:text-7xl text-[#8B1233] mt-2 font-bold drop-shadow-sm">
            Ceremonies &amp; Celebrations
          </h2>
          <OrnateDivider />
        </motion.div>

        {/* Timeline Container */}
        <div className="w-full relative">
          {/* Vertical Golden Timeline Stem */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-[3px] bg-gradient-to-b from-[#C9A24B] via-[#8B1233] to-[#1B3FA0] shadow-sm" />

          <div className="space-y-12 sm:space-y-16">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;
              const isNikah = event.id === 'nikah';

              return (
                <div
                  key={event.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node on Timeline (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FFFDF9] border-2 border-[#C9A24B] shadow-gold-glow items-center justify-center z-20">
                    <div
                      className={`w-5 h-5 rounded-full ${
                        isNikah ? 'bg-[#8B1233]' : 'bg-[#1B3FA0]'
                      }`}
                    />
                  </div>

                  {/* Empty Spacer Column for Desktop Alternate */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Event Card (1/2 width on desktop) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="w-full md:w-1/2"
                  >
                    <TiltCard
                      maxTilt={8}
                      className="bg-[#FFFDF9] rounded-2xl sm:rounded-3xl card-border-ornate p-8 sm:p-10 relative overflow-hidden shadow-xl"
                    >
                      <FloralCorner
                        position={isEven ? 'top-right' : 'top-left'}
                        size="w-24 h-24 sm:w-28 sm:h-28"
                        opacity="opacity-70"
                      />

                      {/* Header Badge */}
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="text-sm font-serif italic text-[#8B1233] font-bold tracking-wider">
                          {event.inshaAllah}
                        </span>
                        <span
                          className={`text-xs font-sans font-bold uppercase tracking-widest px-3.5 py-1 rounded-full ${
                            isNikah
                              ? 'bg-[#8B1233]/10 text-[#8B1233] border border-[#8B1233]/30'
                              : 'bg-[#1B3FA0]/10 text-[#1B3FA0] border border-[#1B3FA0]/30'
                          }`}
                        >
                          {event.badge}
                        </span>
                      </div>

                      {/* Title - Large & Cursive */}
                      <h3 className="font-script text-4xl sm:text-5xl font-bold text-[#8B1233] mb-2 leading-tight">
                        {event.title}
                      </h3>

                      {/* Date & Hijri date */}
                      <div className="space-y-1 pb-4 border-b border-[#C9A24B]/35">
                        <div className="flex items-center gap-2.5 text-[#1B3FA0] font-bold font-serif text-xl sm:text-2xl">
                          <Calendar className="w-5 h-5 text-[#C9A24B]" />
                          <span>{event.gregorianDate}</span>
                        </div>
                        <p className="text-sm sm:text-base text-[#2C241E]/80 font-serif italic pl-7 font-medium">
                          ({event.hijriDate})
                        </p>
                      </div>

                      {/* Time & Venue */}
                      <div className="py-4 space-y-3.5">
                        <div className="flex items-start gap-3 text-base sm:text-lg font-serif font-bold text-[#2C241E]">
                          <Clock className="w-5 h-5 text-[#8B1233] mt-0.5 shrink-0" />
                          <span>{event.time}</span>
                        </div>

                        <div className="flex items-start gap-3 text-sm sm:text-base font-sans text-[#2C241E]">
                          <MapPin className="w-5 h-5 text-[#1B3FA0] mt-0.5 shrink-0" />
                          <div>
                            <p className="font-bold font-serif text-[#8B1233] text-lg sm:text-xl">
                              {event.venueName}
                            </p>
                            <p className="text-xs sm:text-sm text-[#2C241E]/80 font-medium mt-0.5">
                              {event.venueAddress}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Valima Crystal Mood Mini Sphere */}
                      {!isNikah && (
                        <div className="my-3 p-3.5 rounded-2xl bg-gradient-to-r from-[#0B1030] to-[#15204E] text-[#FFFDF9] flex items-center gap-4 border border-[#C9A24B]/50 shadow-md">
                          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-[#E8CF8A]">
                            <CrystalizedBall
                              preset="solar"
                              color="#FFD36E"
                              size={0.7}
                              crackle={0.7}
                              fill={0.5}
                              particleCount={5000}
                              interactive={false}
                              className="w-full h-full"
                            />
                          </div>
                          <div className="text-xs sm:text-sm">
                            <p className="font-serif font-bold text-[#E8CF8A] text-base">
                              Royal Valima Evening
                            </p>
                            <p className="text-xs text-[#FFFDF9]/85 font-sans mt-0.5">
                              Hyderabadi Dawat-e-Valima with blessings of Near &amp; Dear
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="mt-6 flex flex-wrap items-center gap-3 pt-2">
                        <a
                          href={event.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#8B1233] hover:bg-[#A81D43] text-[#FFFDF9] font-serif text-sm sm:text-base font-bold shadow-md transition-all duration-200 group"
                        >
                          <MapPin className="w-4 h-4 text-[#E8CF8A]" />
                          <span>Open in Maps</span>
                          <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
                        </a>

                        <a
                          href={generateGoogleCalendarUrl(event)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1B3FA0] hover:bg-[#2E5AD4] text-[#FFFDF9] font-serif text-sm sm:text-base font-bold shadow-md transition-all duration-200 group"
                        >
                          <CalendarPlus className="w-4 h-4 text-[#E8CF8A]" />
                          <span>Add to Calendar</span>
                        </a>
                      </div>
                    </TiltCard>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
