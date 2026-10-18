import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import OrnateDivider from '../components/OrnateDivider';
import FloralCorner from '../components/FloralCorner';
import { weddingData } from '../data/weddingData';

export default function VenueSection() {
  const { events } = weddingData;
  const [activeTab, setActiveTab] = useState('valima');

  const activeVenue = events.find((e) => e.id === activeTab) || events[1];

  return (
    <section id="venue" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#FBF7EC] overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <span className="text-sm uppercase tracking-[0.3em] font-serif text-[#1B3FA0] font-bold">
            Location &amp; Directions
          </span>
          <h2 className="font-script text-4xl sm:text-6xl md:text-7xl text-[#8B1233] mt-2 font-bold drop-shadow-sm">
            Venues &amp; Arrival Guide
          </h2>
          <OrnateDivider />
        </motion.div>

        {/* Venue Selection Tabs */}
        <div className="flex items-center gap-3 p-1.5 rounded-2xl bg-[#FFFDF9] border-2 border-[#C9A24B]/40 shadow-md mb-10">
          <button
            onClick={() => setActiveTab('valima')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-serif text-sm sm:text-base transition-all duration-300 ${
              activeTab === 'valima'
                ? 'bg-[#8B1233] text-[#FFFDF9] shadow-md font-bold'
                : 'text-[#2C241E] hover:text-[#8B1233] font-semibold'
            }`}
          >
            <Compass className="w-5 h-5" />
            <span>Valima: Perfect Palace</span>
          </button>
          <button
            onClick={() => setActiveTab('nikah')}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-serif text-sm sm:text-base transition-all duration-300 ${
              activeTab === 'nikah'
                ? 'bg-[#1B3FA0] text-[#FFFDF9] shadow-md font-bold'
                : 'text-[#2C241E] hover:text-[#1B3FA0] font-semibold'
            }`}
          >
            <MapPin className="w-5 h-5" />
            <span>Nikah: Masjid-e-Qutub Shahi</span>
          </button>
        </div>

        {/* Venue Card with Map Embed & Directions */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details & Parking Box (5 cols) */}
          <motion.div
            key={`info-${activeVenue.id}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <TiltCard
              maxTilt={6}
              className="h-full bg-[#FFFDF9] rounded-3xl card-border-ornate p-8 sm:p-10 flex flex-col justify-between relative shadow-xl"
            >
              <FloralCorner position="top-left" size="w-24 h-24 sm:w-28 sm:h-28" opacity="opacity-70" />

              <div>
                <span className="text-xs font-sans font-bold uppercase tracking-widest text-[#1B3FA0] bg-[#1B3FA0]/10 px-3.5 py-1 rounded-full border border-[#1B3FA0]/30 inline-block mb-4">
                  {activeVenue.badge}
                </span>

                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#8B1233] mb-3 leading-tight">
                  {activeVenue.venueName}
                </h3>

                <p className="font-serif text-base sm:text-lg text-[#2C241E] leading-relaxed mb-6 font-medium">
                  {activeVenue.venueAddress}
                </p>

                <div className="space-y-4 pt-4 border-t border-[#C9A24B]/30">
                  <div className="flex items-start gap-3.5 text-sm sm:text-base font-sans text-[#2C241E]">
                    <Compass className="w-5 h-5 text-[#1B3FA0] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold font-serif text-[#1B3FA0] text-base sm:text-lg">
                        Ceremony Timings
                      </p>
                      <p className="text-[#2C241E]/85 text-xs sm:text-sm mt-0.5 font-bold">
                        {activeVenue.time}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="mt-8 pt-4">
                <a
                  href={activeVenue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-[#8B1233] to-[#5E0921] text-[#FFFDF9] font-serif text-base sm:text-lg font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all group"
                >
                  <Navigation className="w-5 h-5 text-[#E8CF8A]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-4 h-4 opacity-80 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </TiltCard>
          </motion.div>

          {/* Interactive Map Embed (7 cols) */}
          <motion.div
            key={`map-${activeVenue.id}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-[420px] sm:h-[480px] lg:h-auto rounded-3xl overflow-hidden card-border-ornate shadow-2xl relative bg-[#EADCC8]"
          >
            <iframe
              title={`Map for ${activeVenue.venueName}`}
              src={activeVenue.embedMapUrl}
              className="w-full h-full border-0 filter contrast-[1.02] saturate-[0.95]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Venue Badge Overlay on Map */}
            <div className="absolute top-4 left-4 z-10 px-5 py-2.5 rounded-xl bg-[#FFFDF9]/95 backdrop-blur-md border border-[#C9A24B]/50 shadow-md">
              <p className="font-serif font-bold text-sm sm:text-base text-[#8B1233]">
                {activeVenue.venueName}
              </p>
              <p className="text-xs text-[#2C241E]/75 font-sans font-medium">Hyderabad, Telangana</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
