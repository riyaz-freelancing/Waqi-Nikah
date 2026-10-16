import React, { useState } from 'react';
import { Share2, Copy, Check, MessageCircle, Heart } from 'lucide-react';
import OrnateDivider from '../components/OrnateDivider';
import { weddingData } from '../data/weddingData';

export default function FooterSection() {
  const { family, siteMetadata, couple } = weddingData;
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: siteMetadata.title,
      text: `You are cordially invited to the Valima Ceremony of ${couple.groom.name} & ${couple.bride.name} on Sunday, 25th October 2026 at Perfect Palace, Hyderabad.`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        copyLink();
      }
    } else {
      copyLink();
    }
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const shareOnWhatsApp = () => {
    const text = `*Valima Ceremony Invitation*\nAssalamu Alaikum!\nSolicit your gracious presence on the auspicious occasion of the Valima Ceremony of *${couple.groom.name}* & *${couple.bride.name}* on Sunday, 25th October 2026.\n\nView online invitation:\n${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <footer className="relative bg-[#F6EFDD] pt-16 pb-14 px-4 sm:px-8 border-t-2 border-[#C9A24B]/40 overflow-hidden text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Blue Ornament Divider */}
        <OrnateDivider width="max-w-md" />

        {/* Compliments line from Card - Large, Bold, Prominent */}
        <div className="my-6 space-y-2">
          <p className="font-serif italic text-base sm:text-xl text-[#1B3FA0] font-bold tracking-wide">
            With best compliments from:
          </p>
          <h3 className="font-script text-4xl sm:text-6xl md:text-7xl font-bold text-[#8B1233] tracking-wide drop-shadow-sm">
            {family.compliments}
          </h3>
        </div>

        {/* Share Invitation Action Bar */}
        <div className="my-6 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#8B1233] text-[#FFFDF9] font-serif text-sm sm:text-base font-bold shadow-md hover:bg-[#A81D43] transition-all hover:scale-105"
          >
            <Share2 className="w-4 h-4 text-[#E8CF8A]" />
            <span>Share Invitation</span>
          </button>

          <button
            onClick={shareOnWhatsApp}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#25D366] text-[#FFFFFF] font-serif text-sm sm:text-base font-bold shadow-md hover:brightness-105 transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Share via WhatsApp</span>
          </button>

          <button
            onClick={copyLink}
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#FFFDF9] border-2 border-[#C9A24B] text-[#8B1233] font-serif text-sm sm:text-base font-bold shadow-sm hover:bg-[#FBF7EC] transition-all hover:scale-105"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#C9A24B]" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>

        {/* Monogram Seal in Footer - Enlarged & Grand */}
        <div className="mt-8 mb-5">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#C9A24B] bg-[#FFFDF9] flex items-center justify-center mx-auto shadow-md">
            <span className="font-script text-3xl sm:text-4xl text-[#8B1233] font-bold">
              {couple.initials}
            </span>
          </div>
        </div>

        {/* Quranic Duas / Blessings - Clear & Legible */}
        <p className="font-serif text-sm sm:text-lg text-[#2C241E] italic max-w-2xl mx-auto leading-relaxed font-medium">
          "And among His signs is that He created for you mates from among yourselves, that you may dwell in peace with them, and He has put love and mercy between you."
        </p>

        {/* Credit Line */}
        <p className="text-xs sm:text-sm font-sans text-[#2C241E]/70 mt-8 font-medium flex items-center justify-center gap-1.5">
          <span>{siteMetadata.credits}</span>
          <Heart className="w-3.5 h-3.5 text-[#8B1233] fill-[#8B1233]" />
        </p>
      </div>
    </footer>
  );
}
