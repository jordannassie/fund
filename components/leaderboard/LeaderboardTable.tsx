'use client'

import { useState } from 'react'
import {
  LEADERBOARD_BIGGEST,
  LEADERBOARD_GIVING,
  LEADERBOARD_GROWING,
  LEADERBOARD_BADGES,
} from '@/data/sample'
import type { LeaderboardEntry } from '@/types'
import RankBadge from '@/components/ui/RankBadge'
import Avatar from '@/components/ui/Avatar'
import { Medal } from 'lucide-react'

const TABS = [
  { id: 'networks', label: 'Biggest Networks', data: LEADERBOARD_BIGGEST },
  { id: 'giving',   label: 'Most Giving',       data: LEADERBOARD_GIVING },
  { id: 'growing',  label: 'Fastest Growing',   data: LEADERBOARD_GROWING },
  { id: 'badges',   label: 'Top Badge Earners', data: LEADERBOARD_BADGES },
] as const

function fmt(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000)     return `$${(n / 1_000).toFixed(0)}k`
  return `$${n}`
}

function RankMedal({ rank }: { rank: number }) {
  if (rank === 1) return <Medal size={16} className="text-yellow-500" />
  if (rank === 2) return <Medal size={16} className="text-zinc-400" />
  if (rank === 3) return <Medal size={16} className="text-amber-600" />
  return <span className="w-4 text-center text-xs font-medium text-zinc-400">{rank}</span>
}

function Row({ entry, activeTab, isCurrentUser }: { entry: LeaderboardEntry; activeTab: string; isCurrentUser: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl px-3 py-3 transition-colors sm:gap-4 sm:px-4 ${
        isCurrentUser ? 'bg-blue-50/60 ring-1 ring-blue-100' : 'hover:bg-zinc-50'
      }`}
    >
      {/* Rank */}
      <div className="flex w-6 flex-shrink-0 items-center justify-center">
        <RankMedal rank={entry.rank} />
      </div>

      {/* Avatar */}
      <Avatar
        src={entry.avatar}
        initials={entry.initials}
        size="sm"
        ring={isCurrentUser}
        ringColor="ring-blue-200"
      />

      {/* Name + rank */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className={`truncate text-sm font-medium ${isCurrentUser ? 'text-blue-900' : 'text-zinc-900'}`}>
            {entry.name}
          </p>
          {isCurrentUser && (
            <span className="rounded-full bg-blue-100 px-1.5 py-0.5 text-[10px] font-semibold text-blue-600">
              You
            </span>
          )}
        </div>
        <div className="mt-0.5">
          <RankBadge rank={entry.userRank} size="sm" />
        </div>
      </div>

      {/* Stats (desktop) */}
      <div className="hidden items-center gap-8 sm:flex">
        <StatCell label="Giving"   value={fmt(entry.totalGiving)} />
        {activeTab === 'networks' && <StatCell label="Net. Total" value={fmt(entry.networkTotal)} />}
        {activeTab === 'giving'   && <StatCell label="Net. Total" value={fmt(entry.networkTotal)} />}
        {activeTab === 'growing'  && <StatCell label="Growth"     value={`+${entry.growthRate}%/mo`} />}
        {activeTab === 'badges'   && <StatCell label="Badges"     value={entry.badgeCount.toString()} />}
        <StatCell label="Network" value={entry.networkSize.toLocaleString()} />
      </div>

      {/* Mobile: single stat */}
      <div className="text-right sm:hidden">
        <p className="text-sm font-semibold text-zinc-900">
          {activeTab === 'growing' ? `+${entry.growthRate}%` : activeTab === 'badges' ? `${entry.badgeCount} 🏅` : entry.networkSize.toLocaleString()}
        </p>
        <p className="text-[10px] text-zinc-400">
          {activeTab === 'growing' ? 'mo. growth' : activeTab === 'badges' ? 'badges' : 'members'}
        </p>
      </div>
    </div>
  )
}

function StatCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-right">
      <p className="text-sm font-semibold text-zinc-900">{value}</p>
      <p className="text-[10px] text-zinc-400">{label}</p>
    </div>
  )
}

export default function LeaderboardTable() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]['id']>('networks')

  const activeData = TABS.find(t => t.id === activeTab)!.data

  return (
    <div>
      {/* Tabs */}
      <div className="mb-6 flex gap-1 overflow-x-auto rounded-xl border border-zinc-100 bg-zinc-50 p-1">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-white text-zinc-900 shadow-sm'
                : 'text-zinc-500 hover:text-zinc-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Column headers (desktop) */}
      <div className="mb-2 hidden items-center gap-3 px-4 sm:flex sm:gap-4">
        <div className="w-6 flex-shrink-0" />
        <div className="w-9 flex-shrink-0" />
        <div className="flex-1 text-xs font-medium uppercase tracking-wider text-zinc-400">Member</div>
        <div className="flex items-center gap-8 text-xs font-medium uppercase tracking-wider text-zinc-400">
          <span className="w-16 text-right">Giving</span>
          <span className="w-20 text-right">{activeTab === 'growing' ? 'Growth' : activeTab === 'badges' ? 'Badges' : 'Net. Total'}</span>
          <span className="w-16 text-right">Network</span>
        </div>
      </div>

      {/* Rows */}
      <div className="space-y-1">
        {activeData.map((entry) => (
          <Row
            key={entry.id}
            entry={entry}
            activeTab={activeTab}
            isCurrentUser={entry.id === 'u1'}
          />
        ))}
      </div>
    </div>
  )
}
