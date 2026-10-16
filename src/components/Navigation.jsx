import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, Heart, Calendar, MapPin, Send, Home, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Family', href: '#family', icon: Heart },
    { name: 'Couple', href: '#couple', icon: Sparkles },
    { name: 'Events', href: '#events', icon: Calendar },
    { name: 'Venue', href: '#venue', icon: MapPin },
  ];

  return (
    <>
      {/* Scroll Progress Bar at Top */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A24B] via-[#E8CF8A] to-[#8B1233] origin-left z-50 pointer-events-none shadow-sm"
      />

      {/* Floating Pill Nav for Desktop & Mobile Toggle */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-500 ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-90'
        }`}
      >
        <div className="flex items-center gap-1 sm:gap-2 px-3 sm:px-5 py-2 rounded-full glass-ivory shadow-lg card-border-ornate">
          {/* Logo / Monogram */}
          <a
            href="#home"
            className="flex items-center gap-1.5 pr-2 sm:pr-3 border-r border-[#C9A24B]/40 text-[#8B1233] font-script text-xl sm:text-2xl font-bold hover:scale-105 transition-transform"
          >
            {weddingData.couple.initials}
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 rounded-full font-serif text-sm sm:text-base text-[#2C241E] hover:text-[#8B1233] hover:bg-[#8B1233]/10 font-bold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-[#8B1233] hover:bg-[#8B1233]/10 rounded-full transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer / Overlay Sheet */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 z-30 bg-[#0B1030]/60 backdrop-blur-sm flex justify-center pt-24 px-6 animate-in fade-in duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm bg-[#FFFDF9] rounded-3xl card-border-ornate p-6 shadow-2xl flex flex-col gap-3"
          >
            <div className="flex items-center justify-between border-b border-[#C9A24B]/30 pb-3 mb-2">
              <span className="font-script text-2xl text-[#8B1233]">
                {weddingData.couple.initials}
              </span>
              <span className="font-serif text-xs uppercase tracking-widest text-[#1B3FA0] font-bold">
                Valima Ceremony
              </span>
            </div>

            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-[#8B1233]/10 text-[#2C241E] hover:text-[#8B1233] font-serif text-base font-semibold transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#C9A24B]" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
