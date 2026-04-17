export type Rank =
  | 'Starter'
  | 'Builder'
  | 'Connector'
  | 'Multiplier'
  | 'Leader'
  | 'Diamond'
  | 'Legacy'

export type BadgeName =
  | 'First Gift'
  | 'First Invite'
  | 'Network of 5'
  | 'Network of 25'
  | 'Network of 100'
  | 'Rising Builder'
  | 'Top Connector'
  | 'Diamond Level'

export interface Badge {
  id: string
  name: BadgeName
  description: string
  icon: string
  earned: boolean
  earnedAt?: string
}

export interface User {
  id: string
  name: string
  username: string
  bio: string
  initials: string
  avatar: string
  rank: Rank
  badges: Badge[]
  totalGiving: number
  networkGiving: number
  directInvites: number
  networkSize: number
  leaderboardRank: number
  invitedBy: string | null
  invitedByUsername: string | null
  directInvitesList: InviteEntry[]
  joinedAt: string
}

export interface InviteEntry {
  id: string
  name: string
  initials: string
  avatar: string
  rank: Rank
  networkSize: number
  totalGiving: number
}

export interface NetworkNode {
  id: string
  name: string
  initials: string
  avatar: string
  rank: Rank
  rankColor: string
  totalGiving: number
  networkGiving: number
  directInvites: number
  level: number
  x: number
  y: number
  parentId: string | null
}

export interface LeaderboardEntry {
  rank: number
  id: string
  name: string
  initials: string
  avatar: string
  badge: BadgeName | null
  userRank: Rank
  totalGiving: number
  networkTotal: number
  networkSize: number
  growthRate: number
  badgeCount: number
}

export interface LiveStats {
  totalRaised: number
  totalMembers: number
  largestNetwork: number
  latestBadge: string
  latestBadgeUser: string
}

export const RANK_CONFIG: Record<
  Rank,
  { min: number; max: number; color: string; bg: string; border: string; next?: Rank }
> = {
  Starter:    { min: 0,   max: 4,   color: 'text-zinc-500',  bg: 'bg-zinc-100',   border: 'border-zinc-200',  next: 'Builder' },
  Builder:    { min: 5,   max: 14,  color: 'text-blue-600',  bg: 'bg-blue-50',    border: 'border-blue-200',  next: 'Connector' },
  Connector:  { min: 15,  max: 49,  color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', next: 'Multiplier' },
  Multiplier: { min: 50,  max: 99,  color: 'text-violet-600', bg: 'bg-violet-50',  border: 'border-violet-200', next: 'Leader' },
  Leader:     { min: 100, max: 249, color: 'text-amber-600',  bg: 'bg-amber-50',   border: 'border-amber-200',  next: 'Diamond' },
  Diamond:    { min: 250, max: 499, color: 'text-cyan-600',   bg: 'bg-cyan-50',    border: 'border-cyan-200',   next: 'Legacy' },
  Legacy:     { min: 500, max: Infinity, color: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-200' },
}

export function getRankForSize(networkSize: number): Rank {
  for (const [rank, config] of Object.entries(RANK_CONFIG)) {
    if (networkSize >= config.min && networkSize <= config.max) {
      return rank as Rank
    }
  }
  return 'Starter'
}

export function getRankProgress(networkSize: number): number {
  const rank = getRankForSize(networkSize)
  const config = RANK_CONFIG[rank]
  if (!config.next) return 100
  const range = config.max - config.min + 1
  const progress = networkSize - config.min
  return Math.min(Math.round((progress / range) * 100), 99)
}
