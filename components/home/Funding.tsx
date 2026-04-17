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
    <section className="border-y border-zinc-100 bg-white px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-400">
            HOW IT WORKS
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-zinc-900 sm:text-4xl">
            How 1B Project Funds the Gospel
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500">
            Every gift given through 1B Project helps fund three Gospel priorities through trusted
            ministry partners worldwide.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {FUNDING_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-4 rounded-3xl border border-zinc-100 bg-white p-6 text-left shadow-sm transition hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-50 text-zinc-900">
                <item.icon size={32} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-semibold uppercase tracking-[0.4em] text-zinc-400">
          One fund. Three Gospel outcomes. One global mission.
        </p>
      </div>
    </section>
  )
}
