import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function AudioPlayer({ autoStart = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [ytReady, setYtReady] = useState(false);
  const playerRef = useRef(null);
  const fallbackAudioRef = useRef(null);

  const youtubeId = weddingData.music.youtubeId || 'o8M-qOdDckA';

  // Load YouTube Iframe API
  useEffect(() => {
    // If YouTube API already loaded
    if (window.YT && window.YT.Player) {
      initPlayer();
      return;
    }

    // Otherwise inject script tag
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    function initPlayer() {
      try {
        playerRef.current = new window.YT.Player('yt-wedding-player', {
          height: '1',
          width: '1',
          videoId: youtubeId,
          playerVars: {
            autoplay: 0,
            controls: 0,
            disablekb: 1,
            fs: 0,
            loop: 1,
            playlist: youtubeId,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
          },
          events: {
            onReady: (event) => {
              setYtReady(true);
            },
            onStateChange: (event) => {
              // 1: Playing, 2: Paused, 0: Ended
              if (event.data === 1) {
                setIsPlaying(true);
              } else if (event.data === 2 || event.data === 0) {
                setIsPlaying(false);
              }
            },
            onError: () => {
              // Fallback to HTML5 audio if YouTube embeds are restricted
              setYtReady(false);
            },
          },
        });
      } catch {
        setYtReady(false);
      }
    }

    return () => {
      try {
        if (playerRef.current && playerRef.current.destroy) {
          playerRef.current.destroy();
        }
      } catch {
        // Ignore
      }
    };
  }, [youtubeId]);

  // Handle autoStart when opening gate
  useEffect(() => {
    if (autoStart) {
      playAudio();
    }
  }, [autoStart, ytReady]);

  const playAudio = () => {
    if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
      try {
        playerRef.current.unMute();
        playerRef.current.setVolume(85);
        playerRef.current.playVideo();
        setIsPlaying(true);
        return;
      } catch {
        // Fallback
      }
    }

    // HTML5 fallback
    if (fallbackAudioRef.current) {
      fallbackAudioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

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

  const toggleAudio = () => {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  return (
    <>
      {/* Hidden YouTube Iframe Player container */}
      <div
        className="fixed -bottom-10 -right-10 w-1 h-1 opacity-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div id="yt-wedding-player" />
      </div>

      {/* HTML5 audio fallback */}
      <audio
        ref={fallbackAudioRef}
        src={weddingData.music.src}
        loop
        preload="auto"
      />

      {/* Floating Bottom-Right Audio Controller */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={toggleAudio}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-full glass-ivory shadow-xl card-border-ornate hover:scale-105 active:scale-95 transition-all duration-300 group ${
            isPlaying ? 'ring-2 ring-[#C9A24B]/50' : ''
          }`}
          aria-label={isPlaying ? `Mute ${weddingData.music.title}` : `Play ${weddingData.music.title}`}
          title={weddingData.music.title}
        >
          {/* Animated Music Indicator */}
          <div
            className={`w-7 h-7 rounded-full bg-gradient-to-tr from-[#8B1233] to-[#C9A24B] flex items-center justify-center text-[#FFFDF9] ${
              isPlaying ? 'animate-spin-very-slow' : ''
            }`}
          >
            <Music className="w-3.5 h-3.5" />
          </div>

          <div className="hidden sm:flex flex-col text-left">
            <span className="font-serif text-[11px] font-bold text-[#8B1233] leading-tight">
              {weddingData.music.title}
            </span>
            <span className="text-[9px] font-sans text-[#2C241E]/70 uppercase tracking-widest">
              {isPlaying ? 'Now Playing' : 'Tap to Play'}
            </span>
          </div>

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
