import Image from 'next/image'
import { BookOpen, Megaphone, Building } from 'lucide-react'

const FUNDING_ITEMS = [
  {
    icon: BookOpen,
    title: 'Bible Project',
    body: "Help send Bibles and Scripture resources to people who need God’s Word.",
    image:
      'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80',
    accent: 'bg-gradient-to-br from-amber-400/30 via-amber-500/20 to-transparent',
  },
  {
    icon: Megaphone,
    title: 'Evangelism Project',
    body: 'Help fund Gospel outreach, preaching, media, and evangelists reaching people with Jesus.',
    image:
      'https://images.unsplash.com/photo-1509099836639-18ba63c09791?auto=format&fit=crop&w=900&q=80',
    accent: 'bg-gradient-to-br from-sky-500/30 via-sky-600/40 to-transparent',
  },
  {
    icon: Building,
    title: 'Church Planting Project',
    body: 'Help start and strengthen churches, leaders, and discipleship communities around the world.',
    image:
      'https://images.unsplash.com/photo-1510626176961-4b57c0a5d614?auto=format&fit=crop&w=900&q=80',
    accent: 'bg-gradient-to-br from-emerald-500/25 via-emerald-600/40 to-transparent',
  },
]

export default function Funding() {
  return (
    <section className="bg-zinc-950 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            HOW IT WORKS
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            How 1B Project Funds the Gospel
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Every gift given through 1B Project helps fund three Gospel priorities through trusted
            ministry partners worldwide.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {FUNDING_ITEMS.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 text-left shadow-2xl shadow-black/50 backdrop-blur"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
                <div className={`absolute left-5 top-5 h-12 w-12 rounded-2xl border border-white/40 ${item.accent} flex items-center justify-center text-white`}>
                  <item.icon size={26} />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-2 px-6 py-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/70">{item.body}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
          One fund. Three Gospel outcomes. One global mission.
        </p>
      </div>
    </section>
  )
}
