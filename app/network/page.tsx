import type { Metadata } from 'next'
import { CURRENT_USER } from '@/data/sample'
import { RANK_CONFIG, getRankProgress } from '@/types'
import NetworkGraph from '@/components/network/NetworkGraph'
import RankBadge from '@/components/ui/RankBadge'
import ProgressBar from '@/components/ui/ProgressBar'
import { Users, DollarSign, UserPlus, Trophy, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'My Network — 1B Project',
  description: 'Explore your network branch. See every connection and their impact.',
}

function fmt(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}k`
  return `$${n}`
}

export default function NetworkPage() {
  const user = CURRENT_USER
  const progress = getRankProgress(user.networkSize)
  const rankConfig = RANK_CONFIG[user.rank]
  const nextRank = rankConfig.next

  const STATS = [
    { icon: Users,      label: 'Network Size',   value: user.networkSize.toString() },
    { icon: DollarSign, label: 'Network Giving',  value: fmt(user.networkGiving) },
    { icon: UserPlus,   label: 'Direct Invites',  value: user.directInvites.toString() },
    { icon: Trophy,     label: 'Rank',            value: `#${user.leaderboardRank}` },
  ]

  return (
    <div className="bg-zinc-50/40 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Page header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-zinc-900">Your Network</h1>
            <p className="mt-1 text-sm text-zinc-500">
              Every node is a real member of your branch.
            </p>
          </div>
          <a
            href="/profile"
            className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors"
          >
            Invite someone <ArrowRight size={14} />
          </a>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {STATS.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col gap-1.5 rounded-xl border border-zinc-100 bg-white p-4 shadow-sm">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-50 text-zinc-500">
                <Icon size={14} />
              </div>
              <p className="text-xl font-semibold text-zinc-900">{value}</p>
              <p className="text-xs text-zinc-400">{label}</p>
            </div>
          ))}
        </div>

        {/* Rank progress */}
        <div className="rounded-xl border border-zinc-100 bg-white p-4 shadow-sm sm:p-5">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-zinc-700">Current rank</p>
              <RankBadge rank={user.rank} size="sm" />
            </div>
            {nextRank && (
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                Next: <RankBadge rank={nextRank} size="sm" />
              </div>
            )}
          </div>
          <ProgressBar
            value={progress}
            label={`${user.networkSize} members — ${rankConfig.max + 1 - user.networkSize} more to reach ${nextRank ?? 'max rank'}`}
          />
        </div>

        {/* Graph */}
        <div className="h-[560px]">
          <NetworkGraph />
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-5 rounded-xl border border-zinc-100 bg-white px-5 py-3 shadow-sm text-xs text-zinc-500">
          <span className="font-medium text-zinc-700">Legend</span>
          <LegendItem color="#18181b" label="You" />
          <LegendItem color="#fff" border="#d4d4d8" label="Direct connections" />
          <LegendItem color="#fafafa" border="#e4e4e7" label="Extended network" />
        </div>
      </div>
    </div>
  )
}

function LegendItem({ color, border, label }: { color: string; border?: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <div
        className="h-3 w-3 rounded-full"
        style={{ background: color, border: border ? `1.5px solid ${border}` : 'none' }}
      />
      <span>{label}</span>
    </div>
  )
}
