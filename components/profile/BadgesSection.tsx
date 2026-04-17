import type { Badge } from '@/types'
import { Check, Lock } from 'lucide-react'

interface BadgesSectionProps {
  badges: Badge[]
}

export default function BadgesSection({ badges }: BadgesSectionProps) {
  const earned = badges.filter(b => b.earned)
  const locked = badges.filter(b => !b.earned)

  return (
    <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="font-semibold text-zinc-900">Badges</h2>
        <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600">
          {earned.length} / {badges.length} earned
        </span>
      </div>

      {/* Earned */}
      <div className="mb-6">
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-400">Earned</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {earned.map((badge) => (
            <div
              key={badge.id}
              className="flex flex-col items-center rounded-xl border border-zinc-100 bg-zinc-50 p-4 text-center"
            >
              <span className="mb-2 text-2xl">{badge.icon}</span>
              <p className="text-xs font-semibold text-zinc-800">{badge.name}</p>
              <p className="mt-1 text-[10px] text-zinc-400">{badge.earnedAt}</p>
              <div className="mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100">
                <Check size={10} className="text-emerald-600" strokeWidth={3} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Locked */}
      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-400">Locked</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {locked.map((badge) => (
            <div
              key={badge.id}
              className="flex flex-col items-center rounded-xl border border-dashed border-zinc-200 p-4 text-center opacity-50"
            >
              <span className="mb-2 text-2xl grayscale">{badge.icon}</span>
              <p className="text-xs font-semibold text-zinc-500">{badge.name}</p>
              <p className="mt-1 text-[10px] text-zinc-400">{badge.description}</p>
              <div className="mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-100">
                <Lock size={9} className="text-zinc-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
