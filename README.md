# 🍸 GSAP Cocktails — Animated Landing Page

A scroll-driven cocktail bar landing page built with **React 19, GSAP 3 and Tailwind CSS v4**. The project focuses on motion design: split-text reveals, parallax, pinned sections and a hero video that scrubs frame by frame as you scroll.

## ✨ Highlights

- **Split-text hero reveal**: GSAP `SplitText` breaks the title into characters and the subtitle into lines, then staggers them in with an `expo.out` ease.
- **Scroll-scrubbed video**: the hero video is pinned with `ScrollTrigger` and its `currentTime` is tied to scroll progress, so scrolling "plays" the video.
- **Parallax layers**: decorative leaves move in opposite directions on scroll for depth.
- **Responsive animation logic**: `react-responsive` switches ScrollTrigger start/end points between mobile and desktop so the motion feels right at every size.
- **Section-based components**: Navbar, Hero, Cocktails, About, Art, Menu and Contact, each with its own animation timeline via the `useGSAP` hook.

## 🛠 Tech Stack

| Area | Tools |
| --- | --- |
| UI | React 19, Vite 7 |
| Animation | GSAP 3 (`ScrollTrigger`, `SplitText`), `@gsap/react` |
| Styling | Tailwind CSS v4 |
| Responsiveness | react-responsive |
| Tooling | ESLint |

## 📁 Structure

```
src/
├─ components/
│  ├─ Navbar.jsx
│  ├─ Hero.jsx        # split-text intro, parallax, scroll-scrubbed video
│  ├─ Cocktails.jsx
│  ├─ About.jsx
│  ├─ Art.jsx
│  ├─ Menu.jsx
│  └─ Contact.jsx
├─ App.jsx            # registers GSAP plugins, composes sections
├─ index.css
└─ main.jsx
```

## 🚀 Getting Started

```bash
git clone https://github.com/Glorybrain/gsap-cocktails.git
cd gsap-cocktails
npm install
npm run dev
```

Then open http://localhost:5173.

Build for production:

```bash
npm run build
npm run preview
```

## 👤 Author

**Glory Kotin**, Frontend & Mobile Developer (React, Next.js, React Native)

- GitHub: [@Glorybrain](https://github.com/Glorybrain)
- Portfolio: [kotin-glory.netlify.app](https://kotin-glory.netlify.app/)
