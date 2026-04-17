import { DollarSign, Network, UserPlus, Users, Award, Trophy } from 'lucide-react'
import type { User } from '@/types'

interface StatsRowProps {
  user: User
}

function fmt(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000)     return `$${(n / 1_000).toFixed(1)}k`
  return `$${n.toLocaleString()}`
}

export default function StatsRow({ user }: StatsRowProps) {
  const STATS = [
    { icon: DollarSign, label: 'Total Giving',      value: fmt(user.totalGiving),      raw: true },
    { icon: Network,    label: 'Network Giving',    value: fmt(user.networkGiving),    raw: true },
    { icon: UserPlus,   label: 'Direct Invites',    value: user.directInvites.toString(), raw: false },
    { icon: Users,      label: 'Network Size',      value: user.networkSize.toString(), raw: false },
    { icon: Award,      label: 'Badges Earned',     value: user.badges.filter(b => b.earned).length.toString(), raw: false },
    { icon: Trophy,     label: 'Leaderboard Rank',  value: `#${user.leaderboardRank}`,  raw: false },
  ]

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {STATS.map(({ icon: Icon, label, value }) => (
        <div
          key={label}
          className="flex flex-col gap-1.5 rounded-xl border border-zinc-100 bg-white p-4 shadow-sm"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-50 text-zinc-500">
            <Icon size={15} />
          </div>
          <p className="text-xl font-semibold text-zinc-900">{value}</p>
          <p className="text-xs text-zinc-400">{label}</p>
        </div>
      ))}
    </div>
  )
}
