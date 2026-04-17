import type { Metadata } from 'next'
import { CURRENT_USER, LIVE_STATS } from '@/data/sample'
import LeaderboardTable from '@/components/leaderboard/LeaderboardTable'
import { Trophy, Users, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Leaderboard — 1B Project',
  description: 'See who is building the biggest networks and giving the most.',
}

export default function LeaderboardPage() {
  return (
    <div className="bg-zinc-50/40 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Header */}
        <div className="text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
            Updated live
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900">Leaderboard</h1>
          <p className="mt-2 text-sm text-zinc-500">
            See who&apos;s building the biggest networks, giving the most, and earning the most badges.
          </p>
        </div>

        {/* Top-line numbers */}
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm text-center">
            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-50 text-zinc-500">
              <Users size={16} />
            </div>
            <p className="text-2xl font-semibold text-zinc-900">{LIVE_STATS.totalMembers.toLocaleString()}</p>
            <p className="mt-0.5 text-xs text-zinc-400">Total members</p>
          </div>
          <div className="flex flex-col items-center rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm text-center">
            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-50 text-zinc-500">
              <Trophy size={16} />
            </div>
            <p className="text-2xl font-semibold text-zinc-900">#{CURRENT_USER.leaderboardRank}</p>
            <p className="mt-0.5 text-xs text-zinc-400">Your current rank</p>
          </div>
          <div className="flex flex-col items-center rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm text-center">
            <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-50 text-zinc-500">
              <TrendingUp size={16} />
            </div>
            <p className="text-2xl font-semibold text-zinc-900">{LIVE_STATS.largestNetwork.toLocaleString()}</p>
            <p className="mt-0.5 text-xs text-zinc-400">Largest network</p>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm sm:p-6">
          <LeaderboardTable />
        </div>
      </div>
    </div>
  )
}
