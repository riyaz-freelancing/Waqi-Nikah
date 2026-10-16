import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, MessageSquare, Users, HeartHandshake, Sparkles } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import OrnateDivider from '../components/OrnateDivider';
import FloralCorner from '../components/FloralCorner';
import { weddingData } from '../data/weddingData';

const INITIAL_DUAS = [
  {
    name: 'Syed Faheem & Family',
    message: 'Barakallahu lakuma wa baraka alaikuma wa jama\'a bainakuma fee khair! Wishing Waqiullah Bhai and Sara Bhabhi an abundance of joy and peace.',
    date: 'Just now',
  },
  {
    name: 'Mohammed Samiuddin',
    message: 'Mubarak to the entire family! May Allah shower His blessings upon this beautiful union. Looking forward to celebrating at Perfect Palace!',
    date: '2 hours ago',
  },
  {
    name: 'Farhan & Ayesha',
    message: 'Heartiest congratulations Waqiullah and Sara! May your life together be filled with harmony, piety and happiness.',
    date: '1 day ago',
  },
];

export default function RsvpSection() {
  const { rsvp, couple } = weddingData;
  const [formData, setFormData] = useState({
    name: '',
    guests: '2',
    attendance: 'both', // 'nikah' | 'valima' | 'both'
    message: '',
  });

  const [duas, setDuas] = useState(INITIAL_DUAS);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('wedding_duas_waqiullah_sara');
      if (stored) {
        setDuas(JSON.parse(stored));
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#8B1233', '#C9A24B', '#1B3FA0', '#E8CF8A', '#F4C6D0'],
      });
    } catch {
      // Confetti fallback
    }

    // Save Dua to localStorage if provided
    if (formData.message.trim()) {
      const newDua = {
        name: formData.name.trim(),
        message: formData.message.trim(),
        date: 'Just now',
      };
      const updated = [newDua, ...duas];
      setDuas(updated);
      try {
        localStorage.setItem('wedding_duas_waqiullah_sara', JSON.stringify(updated));
      } catch {
        // Storage fallback
      }
    }

    setSubmitted(true);

    // Format WhatsApp message
    const attendingText =
      formData.attendance === 'both'
        ? 'Both Nikah & Valima'
        : formData.attendance === 'valima'
        ? 'Valima Ceremony (Dinner)'
        : 'Nikah Ceremony';

    const text =
      `*Wedding RSVP - ${couple.initials}*\n` +
      `Assalamu Alaikum!\n` +
      `*Name:* ${formData.name}\n` +
      `*Number of Guests:* ${formData.guests}\n` +
      `*Attending:* ${attendingText}\n` +
      (formData.message ? `*Dua / Message:* ${formData.message}\n` : '') +
      `In Sha Allah looking forward to the celebration!`;

    const whatsappUrl = `https://wa.me/${rsvp.whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 700);
  };

  return (
    <section id="rsvp" className="relative py-16 sm:py-24 px-4 sm:px-8 bg-[#F6EFDD]/70 arabesque-pattern overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] font-serif text-[#1B3FA0] font-semibold">
            Soliciting Your Prayers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#8B1233] mt-2 font-bold">
            RSVP &amp; Duas for the Couple
          </h2>
          <OrnateDivider />
        </motion.div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* RSVP Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 w-full"
          >
            <TiltCard
              maxTilt={5}
              className="bg-[#FFFDF9] rounded-3xl card-border-ornate p-6 sm:p-10 relative shadow-2xl"
            >
              <FloralCorner position="top-right" size="w-24 h-24 sm:w-32 sm:h-32" opacity="opacity-70" />

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#8B1233]/10 text-[#8B1233] border border-[#C9A24B] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#8B1233] font-bold">
                    JazakAllah Khair!
                  </h3>
                  <p className="font-serif text-sm sm:text-base text-[#2C241E]/90 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#1B3FA0]">{formData.name}</span>! Your RSVP response has been generated and WhatsApp is opening to notify the family hosts.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#8B1233] text-[#FFFDF9] font-serif text-xs uppercase tracking-wider font-semibold mt-4 shadow-md hover:bg-[#A81D43] transition-colors"
                  >
                    Submit another response
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-serif text-sm font-semibold text-[#8B1233] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mr. & Mrs. Syed Ali"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF7EC] border border-[#C9A24B]/40 focus:border-[#8B1233] focus:ring-1 focus:ring-[#8B1233] outline-none font-serif text-sm text-[#2C241E] transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-serif text-sm font-semibold text-[#8B1233] mb-1.5">
                        Number of Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF7EC] border border-[#C9A24B]/40 focus:border-[#8B1233] outline-none font-serif text-sm text-[#2C241E]"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="5+">5+ (Family)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-serif text-sm font-semibold text-[#8B1233] mb-1.5">
                        Attending
                      </label>
                      <select
                        value={formData.attendance}
                        onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FBF7EC] border border-[#C9A24B]/40 focus:border-[#8B1233] outline-none font-serif text-sm text-[#2C241E]"
                      >
                        <option value="both">Both Nikah &amp; Valima</option>
                        <option value="valima">Valima Dinner Only</option>
                        <option value="nikah">Nikah Only</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-serif text-sm font-semibold text-[#8B1233] mb-1.5">
                      Send Your Duas / Wishes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share your prayers and heartfelt wishes for Waqiullah & Sara..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FBF7EC] border border-[#C9A24B]/40 focus:border-[#8B1233] focus:ring-1 focus:ring-[#8B1233] outline-none font-serif text-sm text-[#2C241E] resize-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#8B1233] via-[#A81D43] to-[#8B1233] text-[#FFFDF9] font-serif text-base font-bold shadow-gold-soft hover:shadow-gold-glow hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 group"
                  >
                    <span>Confirm RSVP &amp; Send on WhatsApp</span>
                    <Send className="w-4 h-4 text-[#E8CF8A] group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </TiltCard>
          </motion.div>

          {/* Duas Wall (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 w-full space-y-4"
          >
            <div className="bg-[#FFFDF9] rounded-3xl card-border-ornate p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#C9A24B]/30 pb-4 mb-4">
                <div className="flex items-center gap-2 text-[#8B1233]">
                  <HeartHandshake className="w-5 h-5 text-[#C9A24B]" />
                  <h3 className="font-serif font-bold text-lg sm:text-xl">
                    Duas &amp; Wishes Wall
                  </h3>
                </div>
                <span className="text-[11px] font-sans text-[#1B3FA0] font-semibold bg-[#1B3FA0]/10 px-2.5 py-0.5 rounded-full">
                  {duas.length} prayers
                </span>
              </div>

              {/* Scrollable Duas List */}
              <div className="space-y-3.5 max-h-[380px] overflow-y-auto pr-1">
                {duas.map((dua, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-[#FBF7EC] border border-[#C9A24B]/30 space-y-1 hover:border-[#8B1233]/40 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-serif font-bold text-[#8B1233]">{dua.name}</span>
                      <span className="text-[10px] text-[#2C241E]/60">{dua.date}</span>
                    </div>
                    <p className="font-serif italic text-xs sm:text-sm text-[#2C241E]/90 leading-relaxed">
                      "{dua.message}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
