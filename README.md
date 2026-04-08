# Aman Raibole — Portfolio

A minimal, interactive personal portfolio built with React, TypeScript, and Three.js. Features a real-time 3D particle field background that reacts to your mouse cursor.

---

## ✨ Features

- **Interactive particle background** — 600 capsule-shaped particles rendered via WebGL using `@react-three/fiber`. They form rings around your cursor and drift autonomously when idle.
- **Single-page layout** — Name, profile photo, social links, and a personal statement, all in one clean view.
- **Responsive design** — Stacked on mobile, side-by-side on desktop.
- **Zero external UI libraries** — Styled with Tailwind CSS (CDN) and vanilla CSS only.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build tool | [Vite 6](https://vitejs.dev/) |
| 3D / WebGL | [Three.js](https://threejs.org/) + [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) (CDN) |
| Font | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |

---

## 📁 Project Structure

```
Portfolio/
├── assets/
│   └── images/
│       └── image.webp        # Profile photo
├── components/
│   ├── BrandIcons.tsx         # LinkedIn, GitHub, Instagram SVG icons
│   └── LinkButton.tsx         # Reusable animated social link button
├── Antigravity/
│   ├── Antigravity.tsx        # 3D particle field component (Three.js)
│   └── index.tsx              # Barrel re-export
├── App.tsx                    # Root layout — background + content layers
├── index.tsx                  # React DOM entry point
├── index.html                 # HTML shell + Tailwind CDN
├── vite-env.d.ts              # Asset type declarations (.webp, .png, etc.)
├── vite.config.ts             # Vite config with path alias
└── tsconfig.json              # TypeScript config
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Antigravity Component Props

The particle background is fully configurable via props in `App.tsx`:

| Prop | Type | Default | Description |
|---|---|---|---|
| `count` | `number` | `300` | Number of particles |
| `magnetRadius` | `number` | `10` | Distance at which particles are attracted to cursor |
| `ringRadius` | `number` | `10` | Radius of the ring formed around the cursor |
| `waveSpeed` | `number` | `0.4` | Speed of the wave animation on the ring |
| `waveAmplitude` | `number` | `1` | Height of the wave oscillation |
| `particleSize` | `number` | `2` | Scale of each particle |
| `lerpSpeed` | `number` | `0.1` | Smoothness of particle movement (`0` = frozen, `1` = instant) |
| `color` | `string` | `'#FF9FFC'` | Particle color (any CSS color) |
| `autoAnimate` | `boolean` | `false` | Auto-move cursor target when idle for 2s |
| `particleVariance` | `number` | `1` | Amount of random size variation per particle |
| `rotationSpeed` | `number` | `0` | Speed at which the ring rotates |
| `depthFactor` | `number` | `1` | Depth spread of particles on the Z axis |
| `pulseSpeed` | `number` | `3` | Speed of the per-particle pulse animation |
| `particleShape` | `'capsule' \| 'sphere' \| 'box' \| 'tetrahedron'` | `'capsule'` | Geometry shape of each particle |
| `fieldStrength` | `number` | `10` | Controls how tightly particles cluster (higher = tighter) |

---

## 🔗 Links

- [LinkedIn](https://linkedin.com/in/aman-raibole-022b66225)
- [GitHub](https://github.com/Amon3006)
- [Instagram](https://instagram.com/amanraibole_)
