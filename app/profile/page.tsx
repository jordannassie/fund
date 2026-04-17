import type { Metadata } from 'next'
import { CURRENT_USER } from '@/data/sample'
import ProfileCard from '@/components/profile/ProfileCard'
import StatsRow from '@/components/profile/StatsRow'
import BadgesSection from '@/components/profile/BadgesSection'
import InviteTree from '@/components/profile/InviteTree'

export const metadata: Metadata = {
  title: 'My Profile — 1B Project',
  description: 'Your profile, network stats, badges, and invite tree.',
}

export default function ProfilePage() {
  return (
    <div className="bg-zinc-50/40 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          {/* Left column */}
          <div className="space-y-4">
            <ProfileCard user={CURRENT_USER} />
            <InviteTree user={CURRENT_USER} />
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Page heading */}
            <div>
              <h1 className="text-2xl font-semibold text-zinc-900">Your Dashboard</h1>
              <p className="mt-1 text-sm text-zinc-500">
                Leaderboard rank{' '}
                <span className="font-medium text-zinc-900">#{CURRENT_USER.leaderboardRank}</span>{' '}
                ·{' '}
                <span className="font-medium text-zinc-900">{CURRENT_USER.networkSize} members</span>{' '}
                in your network
              </p>
            </div>

            {/* Stats */}
            <StatsRow user={CURRENT_USER} />

            {/* Badges */}
            <BadgesSection badges={CURRENT_USER.badges} />

            {/* Invite CTA */}
            <div className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-zinc-900">Grow your network</h3>
              <p className="mt-1 text-sm text-zinc-500">
                Share your personal invite link. Every person who joins through you counts toward your rank.
              </p>
              <div className="mt-4 flex gap-2">
                <div className="flex-1 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-400 truncate">
                  1bproject.com/join/jordannassie
                </div>
                <button className="flex-shrink-0 rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 transition-colors">
                  Copy link
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
