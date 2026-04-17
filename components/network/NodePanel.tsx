import { X, DollarSign, Users, UserPlus } from 'lucide-react'
import type { NetworkNode } from '@/types'
import RankBadge from '@/components/ui/RankBadge'
import Avatar from '@/components/ui/Avatar'

interface NodePanelProps {
  node: NetworkNode
  onClose: () => void
}

function fmt(n: number): string {
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}k`
  return `$${n}`
}

export default function NodePanel({ node, onClose }: NodePanelProps) {
  const isCenter = node.level === 0

  return (
    <div className="pointer-events-auto flex w-72 flex-col rounded-2xl border border-zinc-100 bg-white shadow-xl">
      {/* Header */}
      <div className="flex items-start justify-between border-b border-zinc-100 p-5">
        <div className="flex items-center gap-3">
          <Avatar src={node.avatar} initials={node.initials} size="md" />
          <div>
            <p className="font-semibold text-zinc-900">{node.name}</p>
            {isCenter && <p className="text-xs text-zinc-400">You</p>}
          </div>
        </div>
        <button
          onClick={onClose}
          className="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 transition-colors"
        >
          <X size={14} />
        </button>
      </div>

      {/* Badge */}
      <div className="border-b border-zinc-100 px-5 py-3">
        <RankBadge rank={node.rank} size="sm" />
      </div>

      {/* Stats */}
      <div className="divide-y divide-zinc-50 px-5 py-2">
        <StatRow icon={DollarSign} label="Personal giving" value={fmt(node.totalGiving)} />
        <StatRow icon={Users}      label="Network giving"  value={fmt(node.networkGiving)} />
        <StatRow icon={UserPlus}   label="Direct invites"  value={node.directInvites.toString()} />
      </div>

      {/* Level tag */}
      <div className="px-5 pb-5 pt-3">
        <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-500">
          {node.level === 0 ? 'Your profile' : node.level === 1 ? 'Direct connection' : 'Extended network'}
        </span>
      </div>
    </div>
  )
}

function StatRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <div className="flex items-center gap-2 text-zinc-400">
        <Icon size={13} />
        <span className="text-xs">{label}</span>
      </div>
      <span className="text-sm font-semibold text-zinc-900">{value}</span>
    </div>
  )
}
