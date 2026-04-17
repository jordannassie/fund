import type { User, InviteEntry } from '@/types'
import RankBadge from '@/components/ui/RankBadge'
import Avatar from '@/components/ui/Avatar'
import { ChevronRight, UserCheck } from 'lucide-react'

interface InviteTreeProps {
  user: User
}

function fmt(n: number): string {
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}k`
  return `$${n}`
}

export default function InviteTree({ user }: InviteTreeProps) {
  return (
    <div className="space-y-4">
      {/* Invited by */}
      {user.invitedBy && (
        <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-400">Invited by</p>
          <div className="flex items-center gap-3">
            <Avatar src="https://i.pravatar.cc/150?img=14" initials="CO" size="sm" />
            <div className="min-w-0 flex-1">
              <p className="font-medium text-zinc-900">{user.invitedBy}</p>
              <p className="text-xs text-zinc-400">{user.invitedByUsername}</p>
            </div>
            <UserCheck size={16} className="text-zinc-300" />
          </div>
        </div>
      )}

      {/* People you invited */}
      <div className="rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
            Your invites ({user.directInvitesList.length})
          </p>
          <button className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">
            See all
          </button>
        </div>

        <div className="space-y-2">
          {user.directInvitesList.map((invite: InviteEntry) => (
            <div
              key={invite.id}
              className="flex items-center gap-3 rounded-lg p-2 hover:bg-zinc-50 transition-colors cursor-pointer"
            >
              <Avatar src={invite.avatar} initials={invite.initials} size="sm" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-zinc-900 truncate">{invite.name}</p>
                  <RankBadge rank={invite.rank} size="sm" showLabel={false} />
                </div>
                <p className="text-xs text-zinc-400">
                  {invite.networkSize} in network · {fmt(invite.totalGiving)} given
                </p>
              </div>
              <ChevronRight size={14} className="text-zinc-300 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
