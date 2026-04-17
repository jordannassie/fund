import type { Rank } from '@/types'
import { RANK_CONFIG } from '@/types'

interface RankBadgeProps {
  rank: Rank
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

const RANK_ICONS: Record<Rank, string> = {
  Starter:    '○',
  Builder:    '◈',
  Connector:  '◉',
  Multiplier: '◆',
  Leader:     '★',
  Diamond:    '♦',
  Legacy:     '⬡',
}

export default function RankBadge({ rank, size = 'md', showLabel = true }: RankBadgeProps) {
  const config = RANK_CONFIG[rank]
  const icon = RANK_ICONS[rank]

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-sm px-2.5 py-1 gap-1.5',
    lg: 'text-base px-3 py-1.5 gap-2',
  }

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-full border ${config.bg} ${config.color} ${config.border} ${sizeClasses[size]}`}
    >
      <span>{icon}</span>
      {showLabel && <span>{rank}</span>}
    </span>
  )
}
