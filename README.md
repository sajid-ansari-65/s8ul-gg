# S8UL — Global Digital HQ 🎮

**BGIS 2026 Champions · EWC 2026 Club Partner · Road to Riyadh**

Production-grade esports website built with Next.js 15, Tailwind CSS, Framer Motion, and Apollo/GraphQL.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
s8ul-hq/
├── .github/workflows/deploy.yml   # CI/CD → Vercel + Cloudflare
├── public/                         # Static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout (fonts, metadata, scan-line overlay)
│   │   ├── page.tsx                # Homepage (Hero + nav cards)
│   │   ├── globals.css             # Tailwind + S8UL custom styles + animations
│   │   ├── vault/page.tsx          # BGIS Champions Vault
│   │   ├── ewc/page.tsx            # EWC Road to Riyadh dashboard
│   │   ├── superfan/page.tsx       # Superfan Portal (registration + perks)
│   │   └── merch/page.tsx          # Merch Engine (multi-currency shop)
│   ├── components/
│   │   ├── Nav.tsx                 # Fixed nav with animated indicator
│   │   ├── Ticker.tsx              # Gold marquee ticker
│   │   ├── HeroSection.tsx         # Hero with glitch text, parallax, countdown
│   │   ├── CountdownTimer.tsx      # Live countdown to EWC Riyadh (Jul 6)
│   │   ├── PlayerCard.tsx          # Roster card with stats
│   │   ├── MatchCard.tsx           # EWC match card (live/upcoming/completed)
│   │   └── StatBar.tsx             # Animated progress bar
│   └── lib/
│       ├── constants.ts            # Brand colors, roster data, match data
│       ├── hooks.ts                # useCountdown, useInView
│       ├── apollo-client.ts        # Apollo Client for WPGraphQL
│       └── playerQueries.ts        # GraphQL queries + TypeScript interfaces
├── tailwind.config.ts              # S8UL brand system (colors, fonts, animations)
├── next.config.ts                  # ISR, image optimization, security headers
├── vercel.json                     # Multi-region deploy + caching rules
├── tsconfig.json
├── postcss.config.js
└── package.json
```

---

## 🎨 Brand System

| Token          | Hex       | Usage                     |
|----------------|-----------|---------------------------|
| `s8ul-black`   | `#0A0A0A` | Primary background        |
| `s8ul-gold`    | `#FFD700` | Champions gold, accents   |
| `s8ul-red`     | `#E63946` | Team Soul signature, live |
| `s8ul-cyan`    | `#00f0ff` | Superfan portal accent    |

**Typography:** Orbitron (headings), Rajdhani (body)

**Aesthetic:** Neubrutalist/Cyberpunk — CRT scan-lines, HUD brackets, glitch text, gold shimmer

---

## 🔧 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 3
- **Animation:** Framer Motion 11
- **CMS:** WordPress + WPGraphQL (headless)
- **Data:** Apollo Client
- **Deploy:** Vercel (multi-region) + Cloudflare Edge

---

## 🚢 Deploy to Vercel

1. Push to GitHub
2. Import in [vercel.com](https://vercel.com) → auto-detects Next.js
3. Add env vars: `NEXT_PUBLIC_WP_GRAPHQL_URL`
4. Deploy — every `git push main` auto-deploys

---

## 📡 CI/CD Pipeline

The included GitHub Actions workflow:
- **Pull requests:** lint → type-check → build → deploy preview → comment URL
- **Push to main:** full build → production deploy → purge Cloudflare cache

Add these GitHub Secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`, `CF_ZONE_ID`, `CF_API_TOKEN`

---

## 📄 License

Built for S8UL Esports. All rights reserved.
