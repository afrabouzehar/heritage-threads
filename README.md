# Heritage Threads

A digital archive of 17th and 18th century European fashion.  
Built as a museum-quality web experience using React, Tailwind CSS v4, and Framer Motion.

**Live:** [heritage-threads-afra.vercel.app](https://heritage-threads-afra.vercel.app)

---

## Overview

Heritage Threads is a curated digital archive documenting garments from the courts,
salons, and streets of early modern Europe. The project treats clothing as historical
evidence — each entry is documented with provenance, material, origin, and cultural context.

The interface is designed to reflect the weight of the subject: restrained typography,
warm parchment tones, deliberate whitespace, and subtle motion — closer to a museum
catalogue than a typical web app.

---

## Features

- **Animated hero** — full-bleed garment photography with staggered entrance animations
- **Collection gallery** — responsive 3-column grid with category filtering and `useMemo` optimization
- **Detail modal** — slide-in panel with full metadata, provenance, and tags
- **Timeline page** — chronological view grouped by historical era (Baroque, Rococo, Enlightenment)
- **Featured section** — curated selection on the homepage with scroll-triggered animations
- **About page** — editorial layout with archive mission and historical context
- **Fully responsive** — mobile hamburger nav, adaptive grid breakpoints
- **Accessibility** — keyboard navigation (Escape to close modal), semantic HTML, lazy image loading

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI architecture and component model |
| Vite | Build tool and dev server |
| Tailwind CSS v4 | Utility-first styling with `@theme` design tokens |
| Framer Motion | Page animations, layout transitions, modal entrance |
| React Router v6 | Nested routing with persistent layout shell |

---

## Project Structure

heritage-threads/
├── public/
│   └── images/
│       ├── robe-francaise.jpg
│       ├── justaucorps.jpg
│       ├── mantua.jpg
│       ├── banyan.jpg
│       ├── robe-polonaise.jpg
│       └── stomacher.jpg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── RootLayout.jsx
│   │   └── ui/
│   │       ├── GarmentCard.jsx
│   │       ├── FilterBar.jsx
│   │       └── GarmentModal.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Collection.jsx
│   │   ├── Timeline.jsx
│   │   └── About.jsx
│   ├── data/
│   │   └── garments.js
│   ├── hooks/
│   ├── utils/
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .vscode/
│   └── settings.json
├── index.html
├── package.json
├── vite.config.js
└── README.md

---

## Design System

| Token | Value | Usage |
|---|---|---|
| `parchment` | `#F9F6F0` | Background |
| `ink` | `#1C1C1C` | Primary text |
| `accent` | `#7B2D42` | Hover states, active links |
| `muted` | `#6B6560` | Secondary text, labels |
| `border` | `#DDD8D0` | Dividers, card borders |
| Heading font | Cormorant Garamond | All `h1`–`h4` elements |
| Body font | DM Sans | All body text |

Design philosophy: restraint over decoration. No drop shadows, no pill buttons,
no gradients except in the hero overlay. Every visual decision references
the aesthetic of printed museum catalogues.

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/heritage-threads.git
cd heritage-threads

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Data Model

Each garment in `src/data/garments.js` follows this structure:

```js
{
  id: '001',
  title: "Robe à la Française",
  era: "Rococo",           // Baroque | Rococo | Enlightenment
  century: "18th",
  decade: "1760s",
  category: "Womenswear", // Womenswear | Menswear | Accessories
  origin: "France",
  material: "Silk brocade, linen lining",
  collection: "Victoria & Albert Museum",
  description: "...",
  image: "/images/robe-francaise.jpg",
  tags: ["court dress", "silk", "pleats", "French"],
}
```

To add new garments, append entries to the array following this schema.
The gallery, timeline, and featured section update automatically.

---

## Deployment

Deployed on **Vercel** via GitHub integration.  
Every push to `main` triggers an automatic redeploy.

```bash
# Production build test
npm run build
npm run preview
```

---

## Roadmap

- [ ] Search functionality across title, material, and era
- [ ] Smooth page transitions with Framer Motion `AnimatePresence`
- [ ] 404 page
- [ ] Individual garment detail pages (`/collection/:id`)
- [ ] SEO meta tags per page
- [ ] Expanded collection (20+ garments)

---

## Author

**Afra**  
[Afra](https://github.com/afrabouzehar) 

---

## License

© 2026 Afra. All rights reserved.  
This project is not open source. Do not copy, redistribute, 
or reuse any part of this codebase or design without explicit permission.
