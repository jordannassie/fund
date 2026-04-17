import Image from 'next/image'
import { BookOpen, Megaphone, Building } from 'lucide-react'

const FUNDING_ITEMS = [
  {
    icon: BookOpen,
    title: 'Bible Project',
    body: "Help send Bibles and Scripture resources to people who need God's Word.",
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'amber',
    accentBorder: 'border-amber-400/50',
    accentBg: 'bg-amber-400/20',
    accentText: 'text-amber-300',
    accentBar: 'bg-amber-400',
    heroStat: '2.4M',
    heroLabel: 'Bibles Distributed',
    progress: 32,
    progressLabel: '32% of 2026 goal',
    pills: [
      { label: '147 Countries' },
      { label: '$320K Funded' },
      { label: '12 Partners' },
    ],
  },
  {
    icon: Megaphone,
    title: 'Evangelism Project',
    body: 'Help fund Gospel outreach, preaching, media, and evangelists reaching people with Jesus.',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'sky',
    accentBorder: 'border-sky-400/50',
    accentBg: 'bg-sky-400/20',
    accentText: 'text-sky-300',
    accentBar: 'bg-sky-400',
    heroStat: '890K',
    heroLabel: 'People Reached',
    progress: 58,
    progressLabel: '58% of 2026 goal',
    pills: [
      { label: '89 Nations' },
      { label: '$210K Funded' },
      { label: '24 Evangelists' },
    ],
  },
  {
    icon: Building,
    title: 'Church Planting Project',
    body: 'Help start and strengthen churches, leaders, and discipleship communities around the world.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'emerald',
    accentBorder: 'border-emerald-400/50',
    accentBg: 'bg-emerald-400/20',
    accentText: 'text-emerald-300',
    accentBar: 'bg-emerald-400',
    heroStat: '1,240',
    heroLabel: 'Churches Planted',
    progress: 47,
    progressLabel: '47% of 2026 goal',
    pills: [
      { label: '68 Regions' },
      { label: '$175K Funded' },
      { label: '340 Leaders' },
    ],
  },
]

const PARTNERS = [
  'Jesus Film',
  'Daily Churches',
  '1Billion.org',
  'DCPI',
  'I Am Second',
]


export default function Funding() {
  return (
    <section className="bg-zinc-950 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">

        {/* ── Header ── */}
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.55em] text-white/40">
            Giving to the Gospel
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            One Fund. Three Gospel Priorities.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            Every gift given through 1B Project helps fund three Gospel priorities through trusted
            ministry partners worldwide.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {FUNDING_ITEMS.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/8 bg-zinc-900 shadow-2xl shadow-black/60"
            >
              {/* Image + hero stat overlay */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-black/60 to-black/20" />

                {/* Icon chip */}
                <div className={`absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border ${item.accentBorder} ${item.accentBg} text-white`}>
                  <item.icon size={18} />
                </div>

                {/* Hero stat — bottom of image */}
                <div className="absolute bottom-4 left-5">
                  <p className={`text-4xl font-black tracking-tight ${item.accentText}`}>
                    {item.heroStat}
                  </p>
                  <p className="text-[11px] font-medium uppercase tracking-widest text-white/50">
                    {item.heroLabel}
                  </p>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col gap-4 px-5 py-5">

                {/* Title + body */}
                <div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/55">{item.body}</p>
                </div>

                {/* Mini stat pills */}
                <div className="flex flex-wrap gap-2">
                  {item.pills.map((pill) => (
                    <span
                      key={pill.label}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/60"
                    >
                      {pill.label}
                    </span>
                  ))}
                </div>

                {/* Progress toward 2026 goal */}
                <div className="mt-auto">
                  <div className="mb-1.5 flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-widest text-white/35">
                      2026 Goal Progress
                    </p>
                    <p className={`text-[10px] font-bold ${item.accentText}`}>
                      {item.progress}%
                    </p>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full ${item.accentBar}`}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Bottom line ── */}
        <p className="mt-10 text-center text-[11px] font-semibold uppercase tracking-[0.45em] text-white/30">
          One fund. Three Gospel outcomes. One global mission.
        </p>

        {/* ── Partner marquee ── */}
        <div className="mt-12 border-t border-white/8 pt-10">
          <p className="mb-6 text-center text-[10px] font-semibold uppercase tracking-[0.5em] text-white/25">
            Trusted Partners
          </p>
          <div className="relative overflow-hidden">
            {/* Left + right edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-zinc-950 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-zinc-950 to-transparent" />

            {/* Scrolling track — duplicate list for seamless loop */}
            <div className="flex animate-marquee whitespace-nowrap">
              {[...PARTNERS, ...PARTNERS].map((partner, i) => (
                <span
                  key={i}
                  className="mx-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-white/30 transition-colors duration-300 hover:text-white/60"
                >
                  <span className="h-1 w-1 rounded-full bg-white/20" />
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
