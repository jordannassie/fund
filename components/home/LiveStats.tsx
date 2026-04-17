import { LIVE_STATS } from '@/data/sample'
import { TrendingUp, Users, Network, Award } from 'lucide-react'

function fmt(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return n >= 10_000 ? `${(n / 1_000).toFixed(1)}k` : n.toLocaleString()
  return n.toString()
}

const STATS = [
  {
    icon: TrendingUp,
    label: 'Total Raised',
    value: `$${(LIVE_STATS.totalRaised / 1_000_000).toFixed(2)}M`,
    sub: 'toward $1B goal',
  },
  {
    icon: Users,
    label: 'Total Members',
    value: LIVE_STATS.totalMembers.toLocaleString(),
    sub: 'and growing daily',
  },
  {
    icon: Network,
    label: 'Largest Network',
    value: LIVE_STATS.largestNetwork.toLocaleString(),
    sub: 'by a single member',
  },
  {
    icon: Award,
    label: 'Latest Badge',
    value: LIVE_STATS.latestBadge,
    sub: `earned by ${LIVE_STATS.latestBadgeUser}`,
  },
]

export default function LiveStats() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50/60 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map(({ icon: Icon, label, value, sub }) => (
            <div key={label} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-500">
                <Icon size={16} />
              </div>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">{label}</p>
              <p className="mt-1 text-2xl font-semibold text-zinc-900">{value}</p>
              <p className="mt-0.5 text-xs text-zinc-400">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
