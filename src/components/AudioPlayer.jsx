import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingData } from '../data/weddingData';

/**
 * AudioPlayer Component
 * 
 * Manages background music playback for the wedding invitation.
 * Supports:
 *  1. Background YouTube Iframe API playback (from Shorts or standard videos).
 *  2. HTML5 audio fallback in case YouTube embed is restricted by the creator.
 *  3. Interactive floating music controller button at bottom-right.
 *  4. Auto-playback triggering when the gate/envelope is opened.
 * 
 * @param {boolean} autoStart - When true (e.g. after gate is unlocked), begins playing audio.
 */
export default function AudioPlayer({ autoStart = false }) {
  // State: whether audio is actively playing or paused
  const [isPlaying, setIsPlaying] = useState(false);

  // State: whether YouTube Iframe API player is ready to accept commands
  const [ytReady, setYtReady] = useState(false);

  // Ref to hold the YT.Player instance
  const playerRef = useRef(null);

  // Ref to hold the fallback HTML5 <audio> element
  const fallbackAudioRef = useRef(null);

  // Active YouTube video ID (from weddingData or default fallback)
  // URL: https://www.youtube.com/shorts/Dkv3KlgSIlY
  const youtubeId = weddingData.music.youtubeId || 'Dkv3KlgSIlY';

  // =========================================================================
  // 1. YouTube Iframe API Initialization
  // =========================================================================
  useEffect(() => {
    // Check if the YouTube Iframe API script has already been loaded on window
    if (window.YT && window.YT.Player) {
      initPlayer();
      return;
    }

    // Dynamically inject the YouTube Iframe API script tag if not yet present
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Global callback invoked by YouTube when the script finishes loading
    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    /**
     * Instantiates the YouTube player into the hidden '#yt-wedding-player' container.
     */
    function initPlayer() {
      try {
        playerRef.current = new window.YT.Player('yt-wedding-player', {
          height: '1',
          width: '1',
          videoId: youtubeId,
          playerVars: {
            autoplay: 0,       // Do not autoplay immediately (browser policy blocks unmuted autoplay)
            controls: 0,       // Hide native YouTube controls
            disablekb: 1,      // Disable keyboard shortcuts
            fs: 0,             // Disable fullscreen button
            loop: 1,           // Loop playback continuously
            playlist: youtubeId, // YouTube requires playlist param with the same videoId to loop single video
            modestbranding: 1, // Minimize YouTube branding
            playsinline: 1,    // Play inline on mobile iOS/Android
            rel: 0,            // Do not show related videos
          },
          events: {
            onReady: () => {
              // Mark player as ready for play/pause commands
              setYtReady(true);
            },
            onStateChange: (event) => {
              // YouTube player states:
              //  1 = Playing
              //  2 = Paused
              //  0 = Ended
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2 || event.data === 0) {
                setIsPlaying(false);
              }
            },
            onError: () => {
              // If YouTube embed is blocked or restricted (error 101/150), fallback to HTML5 audio
              setYtReady(false);
            },
          },
        });
      } catch {
        // Fallback gracefully to HTML5 audio if initialization throws
        setYtReady(false);
      }
    }

    // Cleanup: destroy player on component unmount to prevent memory leaks
    return () => {
      try {
        if (playerRef.current && playerRef.current.destroy) {
          playerRef.current.destroy();
        }
      } catch {
        // Ignore unmount teardown errors
      }
    };
  }, [youtubeId]);

  // =========================================================================
  // 2. Auto-Start Trigger (When User Opens Invitation Gate)
  // =========================================================================
  useEffect(() => {
    if (autoStart) {
      playAudio();
    }
  }, [autoStart, ytReady]);

  // =========================================================================
  // 3. Audio Control Methods (Play / Pause / Toggle)
  // =========================================================================
  
  /**
   * Starts playback: tries YouTube player first, falls back to HTML5 audio.
   */
  const playAudio = () => {
    // Attempt playback using YouTube Iframe Player
    if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
      try {
        playerRef.current.unMute();
        playerRef.current.setVolume(85);
        playerRef.current.playVideo();
        setIsPlaying(true);
        return;
      } catch {
        // Fall through to HTML5 fallback if YouTube fails
      }
    }

    // Fallback: HTML5 <audio> element
    if (fallbackAudioRef.current) {
      fallbackAudioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  /**
   * Pauses playback on both YouTube player and HTML5 audio.
   */
  const pauseAudio = () => {
    if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
      try {
        playerRef.current.pauseVideo();
        setIsPlaying(false);
        return;
      } catch {
        // Fallback
      }
    }

    if (fallbackAudioRef.current) {
      fallbackAudioRef.current.pause();
      setIsPlaying(false);
    }
  };

  /**
   * Toggles between play and pause states.
   */
  const toggleAudio = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  // =========================================================================
  // 4. Render
  // =========================================================================
  return (
    <>
      {/* Hidden YouTube Iframe Player container (1x1 offscreen) */}
      <div
        className="fixed -bottom-10 -right-10 w-1 h-1 opacity-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div id="yt-wedding-player" />
      </div>

      {/* HTML5 audio fallback element */}
      <audio
        ref={fallbackAudioRef}
        src={weddingData.music.src}
        loop
        preload="auto"
      />

      {/* Floating Bottom-Right Audio Controller Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={toggleAudio}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-full glass-ivory shadow-xl card-border-ornate hover:scale-105 active:scale-95 transition-all duration-300 group ${
            isPlaying ? 'ring-2 ring-[#C9A24B]/50' : ''
          }`}
          aria-label={isPlaying ? `Mute ${weddingData.music.title}` : `Play ${weddingData.music.title}`}
          title={weddingData.music.title}
        >
          {/* Animated Spinning Music Icon Indicator */}
          <div
            className={`w-7 h-7 rounded-full bg-gradient-to-tr from-[#8B1233] to-[#C9A24B] flex items-center justify-center text-[#FFFDF9] ${
              isPlaying ? 'animate-spin-very-slow' : ''
            }`}
          >
            <Music className="w-3.5 h-3.5" />
          </div>

          {/* Title and Play Status Text */}
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-serif text-[11px] font-bold text-[#8B1233] leading-tight">
              {weddingData.music.title}
            </span>
            <span className="text-[9px] font-sans text-[#2C241E]/70 uppercase tracking-widest">
              {isPlaying ? 'Now Playing' : 'Tap to Play'}
            </span>
          </div>

          {/* Dynamic Speaker Volume Icon */}
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-[#8B1233] ml-1" />
          ) : (
            <VolumeX className="w-4 h-4 text-[#8B1233]/70 ml-1" />
          )}
        </button>
      </div>
    </>
  );
}
