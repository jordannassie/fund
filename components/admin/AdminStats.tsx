import { Users, DollarSign, Award, Network } from 'lucide-react'
import { LIVE_STATS, ADMIN_MEMBERS } from '@/data/sample'

function fmt(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000)     return `$${(n / 1_000).toFixed(1)}k`
  return `$${n}`
}

export default function AdminStats() {
  const badgesTotal = ADMIN_MEMBERS.reduce((s, m) => s + m.badgeCount, 0)
  const activeNetworks = ADMIN_MEMBERS.filter(m => m.networkSize >= 5).length

  const CARDS = [
    {
      icon: Users,
      label: 'Total Members',
      value: LIVE_STATS.totalMembers.toLocaleString(),
      delta: '+248 this week',
      deltaPositive: true,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: DollarSign,
      label: 'Total Raised',
      value: fmt(LIVE_STATS.totalRaised),
      delta: '+$84k this week',
      deltaPositive: true,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      icon: Award,
      label: 'Badges Awarded',
      value: (badgesTotal + 61_200).toLocaleString(),
      delta: '+312 this week',
      deltaPositive: true,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
    {
      icon: Network,
      label: 'Active Networks',
      value: (activeNetworks + 4_820).toLocaleString(),
      delta: '+67 this week',
      deltaPositive: true,
      color: 'text-violet-600',
      bg: 'bg-violet-50',
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {CARDS.map(({ icon: Icon, label, value, delta, deltaPositive, color, bg }) => (
        <div key={label} className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
          <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${bg}`}>
            <Icon size={18} className={color} />
          </div>
          <p className="text-2xl font-semibold text-zinc-900">{value}</p>
          <p className="mt-0.5 text-sm text-zinc-500">{label}</p>
          <p className={`mt-3 text-xs font-medium ${deltaPositive ? 'text-emerald-600' : 'text-red-500'}`}>
            {delta}
          </p>
        </div>
      ))}
    </div>
  )
}
