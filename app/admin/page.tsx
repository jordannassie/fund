import type { Metadata } from 'next'
import { LIVE_STATS } from '@/data/sample'
import AdminStats from '@/components/admin/AdminStats'
import MembersTable from '@/components/admin/MembersTable'
import RecentActivity from '@/components/admin/RecentActivity'
import { ShieldCheck, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Admin — 1B Project',
  description: 'Admin dashboard for the 1B Project.',
}

// Simple inline bar for the fund progress
function FundProgress() {
  const goal = 1_000_000_000
  const raised = LIVE_STATS.totalRaised
  const pct = (raised / goal) * 100

  return (
    <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="font-semibold text-zinc-900">Gospel Fund Progress</h2>
        <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-600">
          {pct.toFixed(3)}% of goal
        </span>
      </div>
      <div className="mb-3 h-2.5 w-full overflow-hidden rounded-full bg-zinc-100">
        <div
          className="h-full rounded-full bg-zinc-900 transition-all duration-700"
          style={{ width: `${Math.max(pct, 0.3)}%` }}
        />
      </div>
      <div className="flex items-center justify-between text-sm">
        <div>
          <p className="font-semibold text-zinc-900">
            ${(raised / 1_000_000).toFixed(2)}M raised
          </p>
          <p className="text-xs text-zinc-400">across {LIVE_STATS.totalMembers.toLocaleString()} members</p>
        </div>
        <div className="text-right">
          <p className="font-semibold text-zinc-900">$1,000,000,000</p>
          <p className="text-xs text-zinc-400">total goal</p>
        </div>
      </div>
    </div>
  )
}

function QuickActions() {
  const ACTIONS = [
    { label: 'Export members CSV',    desc: 'Download full member list',       color: 'hover:border-blue-200 hover:bg-blue-50/40' },
    { label: 'Broadcast message',     desc: 'Send a message to all members',   color: 'hover:border-violet-200 hover:bg-violet-50/40' },
    { label: 'Award manual badge',    desc: 'Manually assign a badge',         color: 'hover:border-amber-200 hover:bg-amber-50/40' },
    { label: 'Add admin user',        desc: 'Grant admin access to a member',  color: 'hover:border-emerald-200 hover:bg-emerald-50/40' },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
      <h2 className="mb-4 font-semibold text-zinc-900">Quick Actions</h2>
      <div className="space-y-2">
        {ACTIONS.map(action => (
          <button
            key={action.label}
            className={`flex w-full items-center justify-between rounded-xl border border-zinc-100 px-4 py-3 text-left transition-colors ${action.color}`}
          >
            <div>
              <p className="text-sm font-medium text-zinc-900">{action.label}</p>
              <p className="text-xs text-zinc-400">{action.desc}</p>
            </div>
            <TrendingUp size={14} className="text-zinc-300" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default function AdminPage() {
  return (
    <div className="bg-zinc-50/40 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-zinc-400" />
              <h1 className="text-2xl font-semibold text-zinc-900">Admin Dashboard</h1>
              <span className="rounded-full bg-zinc-900 px-2.5 py-0.5 text-[11px] font-bold text-white">
                ADMIN
              </span>
            </div>
            <p className="mt-1 text-sm text-zinc-500">
              Overview of the 1B Project network · demo data
            </p>
          </div>
        </div>

        {/* Demo notice */}
        <div className="flex items-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
          <ShieldCheck size={16} className="flex-shrink-0 text-amber-600" />
          <p className="text-sm text-amber-800">
            <span className="font-semibold">Demo admin panel.</span> This page displays sample data.
            Connect Supabase and add role-based auth to secure this in production.
          </p>
        </div>

        {/* Stats */}
        <AdminStats />

        {/* Fund progress */}
        <FundProgress />

        {/* Members + Activity + Actions */}
        <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
          <MembersTable />
          <div className="space-y-6">
            <RecentActivity />
            <QuickActions />
          </div>
        </div>

      </div>
    </div>
  )
}
