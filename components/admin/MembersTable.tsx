'use client'

import { useState } from 'react'
import { ADMIN_MEMBERS, type AdminMember } from '@/data/sample'
import Avatar from '@/components/ui/Avatar'
import RankBadge from '@/components/ui/RankBadge'
import { Search, ChevronUp, ChevronDown, MoreHorizontal } from 'lucide-react'

type SortKey = 'name' | 'networkSize' | 'totalGiving' | 'badgeCount'

function fmt(n: number): string {
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}k`
  return `$${n}`
}

function StatusPill({ status }: { status: AdminMember['status'] }) {
  const map = {
    active:   'bg-emerald-50 text-emerald-700 border-emerald-200',
    pending:  'bg-amber-50 text-amber-700 border-amber-200',
    inactive: 'bg-zinc-100 text-zinc-500 border-zinc-200',
  }
  return (
    <span className={`rounded-full border px-2 py-0.5 text-[11px] font-medium capitalize ${map[status]}`}>
      {status}
    </span>
  )
}

export default function MembersTable() {
  const [search, setSearch] = useState('')
  const [sortKey, setSortKey] = useState<SortKey>('networkSize')
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc')

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(d => d === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDir('desc')
    }
  }

  const filtered = ADMIN_MEMBERS
    .filter(m =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.username.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      const mul = sortDir === 'asc' ? 1 : -1
      if (sortKey === 'name') return mul * a.name.localeCompare(b.name)
      return mul * (a[sortKey] - b[sortKey])
    })

  function SortIcon({ col }: { col: SortKey }) {
    if (sortKey !== col) return <ChevronUp size={12} className="text-zinc-300" />
    return sortDir === 'asc'
      ? <ChevronUp size={12} className="text-zinc-600" />
      : <ChevronDown size={12} className="text-zinc-600" />
  }

  return (
    <div className="rounded-2xl border border-zinc-100 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4">
        <h2 className="font-semibold text-zinc-900">Members</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search members..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-48 rounded-lg border border-zinc-200 bg-zinc-50 py-1.5 pl-8 pr-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <span className="text-xs text-zinc-400">{filtered.length} members</span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-100 bg-zinc-50/60">
              <th className="px-5 py-3 text-left">
                <button onClick={() => handleSort('name')} className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-zinc-700">
                  Member <SortIcon col="name" />
                </button>
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400">Rank</th>
              <th className="px-4 py-3 text-right">
                <button onClick={() => handleSort('networkSize')} className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-zinc-700 ml-auto">
                  Network <SortIcon col="networkSize" />
                </button>
              </th>
              <th className="px-4 py-3 text-right">
                <button onClick={() => handleSort('totalGiving')} className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-zinc-700 ml-auto">
                  Giving <SortIcon col="totalGiving" />
                </button>
              </th>
              <th className="px-4 py-3 text-right">
                <button onClick={() => handleSort('badgeCount')} className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:text-zinc-700 ml-auto">
                  Badges <SortIcon col="badgeCount" />
                </button>
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400">Status</th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-zinc-400">Joined</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-50">
            {filtered.map(member => (
              <tr key={member.id} className={`hover:bg-zinc-50/60 transition-colors ${member.id === 'u1' ? 'bg-blue-50/30' : ''}`}>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar src={member.avatar} initials={member.initials} size="sm" />
                    <div>
                      <p className="font-medium text-zinc-900">{member.name}</p>
                      <p className="text-xs text-zinc-400">{member.username}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <RankBadge rank={member.rank} size="sm" />
                </td>
                <td className="px-4 py-3 text-right font-medium text-zinc-900">
                  {member.networkSize.toLocaleString()}
                </td>
                <td className="px-4 py-3 text-right font-medium text-zinc-900">
                  {fmt(member.totalGiving)}
                </td>
                <td className="px-4 py-3 text-right font-medium text-zinc-900">
                  {member.badgeCount}
                </td>
                <td className="px-4 py-3">
                  <StatusPill status={member.status} />
                </td>
                <td className="px-4 py-3 text-xs text-zinc-400 whitespace-nowrap">
                  {member.joinedAt}
                </td>
                <td className="px-4 py-3">
                  <button className="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 transition-colors">
                    <MoreHorizontal size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-zinc-100 px-5 py-3">
        <p className="text-xs text-zinc-400">Showing {filtered.length} of {ADMIN_MEMBERS.length} members</p>
        <p className="text-xs text-zinc-400">Demo data · connect Supabase for live records</p>
      </div>
    </div>
  )
}
