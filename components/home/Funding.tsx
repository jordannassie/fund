import { BookOpen, Megaphone, Building } from 'lucide-react'

const FUNDING_ITEMS = [
  {
    icon: BookOpen,
    title: 'Bible Project',
    body: "Help send Bibles and Scripture resources to people who need God’s Word.",
  },
  {
    icon: Megaphone,
    title: 'Evangelism Project',
    body: 'Help fund Gospel outreach, preaching, media, and evangelists reaching people with Jesus.',
  },
  {
    icon: Building,
    title: 'Church Planting Project',
    body: 'Help start and strengthen churches, leaders, and discipleship communities around the world.',
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
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-7 text-left shadow-2xl shadow-black/50 backdrop-blur"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">
                <item.icon size={32} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-semibold uppercase tracking-[0.4em] text-white/60">
          One fund. Three Gospel outcomes. One global mission.
        </p>
      </div>
    </section>
  )
}
