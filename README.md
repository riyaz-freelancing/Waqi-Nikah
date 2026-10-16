# 3D Animated Wedding Website (Valima Ceremony)

A cinematic, 3D-feeling, responsive single-page wedding invitation website built with **React**, **Vite**, **Tailwind CSS**, and **React Bits** components (`CrystalizedBall`, `ShinyText`, `ClickSpark`, `TiltCard`).

## ✨ Features

- **3D Mughal Gate Intro**: Full-screen ivory envelope and double arched doors with a 3D perspective swing and gold wax seal monogram (`W & S`).
- **React Bits `CrystalizedBall`**: Swirling glowing electric plasma sphere in the center of the hero with interactive tilt, gyro/touch reaction, and gold particle sparks.
- **Solar Crystal Mood**: Embedded celestial crystal orb on the Valima dinner timeline.
- **3D Tilt Cards**: Cursor-reactive 3D cards with moving specular sheen for the couple cards and invitation details.
- **ClickSpark Effect**: Touch & click starburst celebrations across the page.
- **Buttery Smooth Scroll**: Powered by **Lenis**.
- **Live Event Countdown**: Reactive timer automatically switching from Nikah to Valima reception.
- **Venue Maps & Directions**: Embedded Google Maps with one-tap deep links for navigation.
- **Interactive WhatsApp RSVP & Duas Wall**: Prefilled WhatsApp guest messages and live community prayers wall with local persistence.
- **Ambient Serene Melody**: Floating music player with mute/unmute control.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🎨 How to Customize for a New Client

All wedding content, names, dates, venues, Quranic verses, and configurations live in **a single file**:
`src/data/weddingData.js`

To customize for another wedding or client:
1. Open `src/data/weddingData.js`.
2. Update:
   - `couple.groom` & `couple.bride` (Names, degrees, photos, bios)
   - `couple.initials` (e.g. `"A & Z"`)
   - `events` (Nikah, Mehendi, Barat, Valima with dates, times, venues, and Google Maps links)
   - `countdown` target dates
   - `rsvp.whatsappNumber` (Enter organizer's WhatsApp number with country code, e.g. `"919876543210"`)
   - `music.src` (Audio file URL or path)
3. Save the file. All sections across the website update instantly!

---

## 🌐 Deployment to Vercel / Netlify

### Deploying to Vercel
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

### Deploying to Netlify
1. Connect your repository to [netlify.com](https://netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy site**.
