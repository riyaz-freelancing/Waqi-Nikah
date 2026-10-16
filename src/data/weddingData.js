/**
 * All Wedding Details and Configuration
 * Centralized data file - can be edited for future clients seamlessly
 */

export const weddingData = {
  couple: {
    initials: "W & S",
    groom: {
      name: "Mohammed Waqiullah Khan",
      shortName: "Waqiullah",
      degrees: "B.Com., M.B.A.",
      bio: "Son of Mrs. & Mr. Alhaj Mohammed Samiullah Khan (Jawaid)",
      image: null, // Placeholder or photo URL
    },
    bride: {
      name: "Syeda Sara Fatima",
      shortName: "Sara",
      degrees: "M.A., B.Ed.",
      bio: "Daughter of Late Hz. Alhaj Syed Ahmed Ali Shah Dhoti",
      lineage: "Ex. Sajjada Nasheen Bargah Hz. Murad Shah Dhoti R.A.",
      image: null,
    },
  },

  invitationHeading: "Valima Ceremony",
  tagline: "Celebrating Love, Faith & Togetherness",

  bismillah: {
    arabic: "بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    translation: "In the name of ALLAH the most beneficent & merciful",
  },

  family: {
    blessingsTitle: "With the Blessings of Our Respected Parents",
    grandparents: "Mrs. & Mr. Late Mohammed Anwar Khan",
    grandparentsSub: "Well Known Khalifa Hakeem Shahji Biyabani (Rh.)",
    guardianshipTitle: "Under the Guardianship of",
    guardianName: "Mr. Alhaj Syed Shujauddin Hussaini (Shameem)",
    hosts: {
      title: "Solicit your gracious presence on the auspicious occasion of the Valima Ceremony of our son",
      names: "Mrs. & Mr. Alhaj Mohammed Samiullah Khan (Jawaid)",
      subtitle: "(Khalifa Hz. Hameeduddin Sharfi Quadri Rh.)",
    },
    compliments: "Near & Dear",
  },

  events: [
    {
      id: "nikah",
      title: "Nikah Ceremony",
      inshaAllah: "In Sha Allah",
      gregorianDate: "Friday, 23rd October 2026",
      hijriDate: "12th Jamadi ul Awwal 1448 H",
      time: "After Juma. Namaz-e-Juma at 1:30 PM IST",
      isoDateTime: "2026-10-23T13:30:00+05:30",
      venueName: "MASJID-E-QUTUB SHAHI (Choti Masjid)",
      venueAddress: "Murad Nagar, Hyderabad, Telangana",
      badge: "Solemn Occasion",
      mapsQuery: "Masjid-e-Qutub+Shahi+Murad+Nagar+Hyderabad",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Masjid-E-Qutub+Shahi+Choti+Masjid+Murad+Nagar+Hyderabad",
      embedMapUrl: "https://maps.google.com/maps?q=Masjid-e-Qutub%20Shahi%20Murad%20Nagar%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed",
      accent: "#8B1233",
    },
    {
      id: "valima",
      title: "Valima Reception & Dinner",
      inshaAllah: "In Sha Allah",
      gregorianDate: "Sunday, 25th October 2026",
      hijriDate: "14th Jamadi ul Awwal 1448 Hijri",
      time: "DINNER: After Namaz-e-Isha (8:30 PM IST)",
      isoDateTime: "2026-10-25T20:30:00+05:30",
      venueName: "PERFECT PALACE",
      venueAddress: "Pillar No. 89, Attapur Road, Ring Road, Hyderabad",
      badge: "Main Celebration",
      mapsQuery: "Perfect+Palace+Attapur+Ring+Road+Hyderabad",
      mapsUrl: "https://www.google.com/maps/search/?api=1&query=Perfect+Palace+Attapur+Ring+Road+Hyderabad",
      embedMapUrl: "https://maps.google.com/maps?q=Perfect%20Palace%20Pillar%2089%20Attapur%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed",
      parkingInfo: "Valet parking available at Venue Entrance (Pillar No. 89).",
      accent: "#1B3FA0",
    },
  ],

  countdown: {
    primaryTarget: "2026-10-23T13:30:00+05:30", // Nikah
    secondaryTarget: "2026-10-25T20:30:00+05:30", // Valima
  },

  rsvp: {
    whatsappNumber: "919876543210", // Default organizer WhatsApp number (with country code, no +)
    defaultMessage: "Assalamu Alaikum! I would like to RSVP for the wedding celebrations of Waqiullah & Sara.",
  },

  music: {
    title: "Wedding Nasheed & Melody",
    youtubeId: "Dkv3KlgSIlY",
    youtubeUrl: "https://www.youtube.com/shorts/Dkv3KlgSIlY",
    src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=arabic-oriental-flute-112349.mp3",
  },

  siteMetadata: {
    title: "Valima Ceremony | Waqiullah & Sara",
    description: "Wedding Invitation of Mohammed Waqiullah Khan & Syeda Sara Fatima",
    credits: "Designed with love & prayers for the couple",
  },
};
