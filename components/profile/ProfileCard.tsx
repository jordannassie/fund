import { Globe, AtSign, Link2 } from 'lucide-react'
import RankBadge from '@/components/ui/RankBadge'
import ProgressBar from '@/components/ui/ProgressBar'
import type { User } from '@/types'
import { RANK_CONFIG, getRankProgress } from '@/types'

interface ProfileCardProps {
  user: User
}

export default function ProfileCard({ user }: ProfileCardProps) {
  const progress = getRankProgress(user.networkSize)
  const rankConfig = RANK_CONFIG[user.rank]
  const nextRank = rankConfig.next

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm">
      {/* Cover */}
      <div className="h-28 bg-gradient-to-br from-zinc-100 via-zinc-50 to-white sm:h-36" />

      {/* Profile info */}
      <div className="px-5 pb-6 sm:px-8">
        {/* Avatar */}
        <div className="-mt-10 mb-4 flex items-end justify-between sm:-mt-12">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-white bg-zinc-900 text-xl font-bold text-white shadow-sm sm:h-24 sm:w-24">
            {user.initials}
          </div>
          <button className="rounded-full border border-zinc-200 px-4 py-1.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors">
            Edit Profile
          </button>
        </div>

        {/* Name / username */}
        <div className="mb-3">
          <h1 className="text-xl font-semibold text-zinc-900">{user.name}</h1>
          <p className="text-sm text-zinc-400">{user.username}</p>
        </div>

        {/* Bio */}
        <p className="mb-4 text-sm leading-relaxed text-zinc-500">{user.bio}</p>

        {/* Social links */}
        <div className="mb-5 flex items-center gap-3 text-zinc-400">
          <button className="hover:text-zinc-700 transition-colors"><AtSign size={16} /></button>
          <button className="hover:text-zinc-700 transition-colors"><Globe size={16} /></button>
          <button className="hover:text-zinc-700 transition-colors"><Link2 size={16} /></button>
        </div>

        {/* Rank + progress */}
        <div className="rounded-xl border border-zinc-100 bg-zinc-50/60 p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-zinc-400">Current rank</p>
              <div className="mt-1">
                <RankBadge rank={user.rank} size="md" />
              </div>
            </div>
            {nextRank && (
              <div className="text-right">
                <p className="text-xs text-zinc-400">Next rank</p>
                <div className="mt-1">
                  <RankBadge rank={nextRank} size="sm" />
                </div>
              </div>
            )}
          </div>
          <ProgressBar
            value={progress}
            label={`${user.networkSize} of ${rankConfig.max + 1} members`}
            sublabel={nextRank ? `${rankConfig.max + 1 - user.networkSize} to ${nextRank}` : 'Max rank'}
          />
        </div>

        {/* Joined */}
        <p className="mt-4 text-xs text-zinc-400">Member since {user.joinedAt}</p>
      </div>
    </div>
  )
}
