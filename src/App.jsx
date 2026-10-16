import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import IntroGate from './sections/IntroGate';
import Navigation from './components/Navigation';
import AudioPlayer from './components/AudioPlayer';
import ClickSpark from './components/ClickSpark';

import HeroSection from './sections/HeroSection';
import FamilyInvitationSection from './sections/FamilyInvitationSection';
import CoupleSection from './sections/CoupleSection';
import EventsSection from './sections/EventsSection';
import CountdownSection from './sections/CountdownSection';
import VenueSection from './sections/VenueSection';
import FooterSection from './sections/FooterSection';

export default function App() {
  const [gateOpen, setGateOpen] = useState(false);
  const [audioStarted, setAudioStarted] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleOpenGate = () => {
    setGateOpen(true);
    setAudioStarted(true);
  };

  return (
    <ClickSpark
      sparkColor={['#C9A24B', '#E8CF8A', '#8B1233', '#F4C6D0', '#FFFFFF']}
      sparkSize={12}
      sparkRadius={32}
      sparkCount={9}
      duration={550}
      shape="star"
      className="min-h-screen bg-[#FBF7EC] text-[#2C241E] relative selection:bg-[#8B1233] selection:text-[#FBF7EC]"
    >
      {/* 1. Initial Preloader */}
      <Preloader />

      {/* 2. 3D Gate Intro Animation */}
      <IntroGate onOpen={handleOpenGate} isOpen={gateOpen} />

      {/* 3. Sticky Floating Pill Navigation */}
      <Navigation />

      {/* 5. Floating Music Controller */}
      <AudioPlayer autoStart={audioStarted} />

      {/* 6. Main Invitation Sections */}
      <main className="relative z-10 w-full overflow-hidden">
        {/* Hero with centerpiece CrystalizedBall */}
        <HeroSection />

        {/* Family Blessings & 3D Tilt Invitation Card */}
        <FamilyInvitationSection />

        {/* The Blessed Couple (Groom & Bride 3D Cards) */}
        <CoupleSection />

        {/* Events Timeline (Nikah & Valima Dinner) */}
        <EventsSection />

        {/* Live Event Countdown */}
        <CountdownSection />

        {/* Venues & Arrival Guide (Maps & Directions) */}
        <VenueSection />
      </main>

      {/* 7. Footer & Social Sharing */}
      <FooterSection />
    </ClickSpark>
  );
}
