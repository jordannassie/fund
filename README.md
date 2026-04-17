# 1B Project

A social-network-style fundraising platform with visible network growth. Build your profile, grow your network, earn badges, and help move the movement toward a single **$1 Billion Gospel Fund**.

## Stack

| Layer       | Tech                                    |
|-------------|-----------------------------------------|
| Framework   | Next.js 16 (App Router, TypeScript)     |
| Styling     | Tailwind CSS v4                         |
| Database    | Supabase (scaffolded — not yet wired)   |
| Hosting     | Netlify                                 |
| Icons       | Lucide React                            |

## Pages

| Route          | Description                                             |
|----------------|---------------------------------------------------------|
| `/`            | Landing page — hero, live stats, vision, how it works   |
| `/profile`     | User profile, stats, badges, invite tree                |
| `/network`     | Interactive SVG network graph with node click-through   |
| `/leaderboard` | Ranked tables — networks, giving, growth, badges        |

## Gamification System

### Ranks (by network size)
| Rank       | Network size |
|------------|-------------|
| Starter    | 0 – 4       |
| Builder    | 5 – 14      |
| Connector  | 15 – 49     |
| Multiplier | 50 – 99     |
| Leader     | 100 – 249   |
| Diamond    | 250 – 499   |
| Legacy     | 500+        |

### Badges
First Gift · First Invite · Network of 5 · Network of 25 · Network of 100 · Rising Builder · Top Connector · Diamond Level

## Project Structure

```
app/                  # Next.js App Router pages
components/
  home/               # Landing page sections
  nav/                # Sticky top nav
  network/            # Graph + node panel
  profile/            # Profile card, stats, badges, invite tree
  leaderboard/        # Ranked table
  ui/                 # RankBadge, ProgressBar (shared)
data/
  sample.ts           # Realistic mock data (replace with Supabase)
lib/
  supabase/
    client.ts         # Browser client (Supabase SSR)
    server.ts         # Server client (Supabase SSR)
types/
  index.ts            # All shared types + rank config helpers
  database.types.ts   # Scaffolded Supabase schema types
```

## Getting Started

```bash
npm install
npm run dev
```

## Connect Supabase

1. Create a project at [supabase.com](https://supabase.com)
2. Copy `.env.local.example` → `.env.local`
3. Fill in `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Replace `data/sample.ts` usage with real Supabase queries via `lib/supabase/`
5. Run `npx supabase gen types typescript --project-id YOUR_ID > types/database.types.ts`

## Deploy to Netlify

1. Connect the GitHub repo to a new Netlify site
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add the environment variables from `.env.local.example` in **Site settings → Environment variables**
5. The `netlify.toml` and `@netlify/plugin-nextjs` handle everything else automatically
