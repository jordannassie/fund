import type {
  User,
  Badge,
  NetworkNode,
  LeaderboardEntry,
  LiveStats,
  InviteEntry,
} from '@/types'

export const SAMPLE_BADGES: Badge[] = [
  { id: 'b1', name: 'First Gift',      description: 'Made your first contribution',   icon: '🎁', earned: true,  earnedAt: 'Jan 12, 2025' },
  { id: 'b2', name: 'First Invite',    description: 'Invited your first member',       icon: '✉️', earned: true,  earnedAt: 'Jan 14, 2025' },
  { id: 'b3', name: 'Network of 5',    description: 'Built a network of 5 people',     icon: '⭐', earned: true,  earnedAt: 'Jan 20, 2025' },
  { id: 'b4', name: 'Network of 25',   description: 'Built a network of 25 people',    icon: '🌟', earned: true,  earnedAt: 'Feb 8, 2025' },
  { id: 'b5', name: 'Network of 100',  description: 'Built a network of 100 people',   icon: '💫', earned: false },
  { id: 'b6', name: 'Rising Builder',  description: 'Top 10% growth in a month',       icon: '🚀', earned: true,  earnedAt: 'Feb 28, 2025' },
  { id: 'b7', name: 'Top Connector',   description: 'Invited 10+ active members',      icon: '🔗', earned: false },
  { id: 'b8', name: 'Diamond Level',   description: 'Reached Diamond rank',            icon: '💎', earned: false },
]

export const SAMPLE_DIRECT_INVITES: InviteEntry[] = [
  { id: 'u2', name: 'Sarah Mitchell',  initials: 'SM', rank: 'Builder',   networkSize: 9,  totalGiving: 1500 },
  { id: 'u3', name: 'Marcus Thompson', initials: 'MT', rank: 'Connector', networkSize: 18, totalGiving: 3200 },
  { id: 'u4', name: 'Aisha Kamara',    initials: 'AK', rank: 'Builder',   networkSize: 7,  totalGiving: 900  },
  { id: 'u5', name: 'David Rivera',    initials: 'DR', rank: 'Starter',   networkSize: 3,  totalGiving: 400  },
  { id: 'u6', name: 'Emma Laurent',    initials: 'EL', rank: 'Builder',   networkSize: 6,  totalGiving: 750  },
  { id: 'u7', name: 'James Okafor',    initials: 'JO', rank: 'Starter',   networkSize: 2,  totalGiving: 200  },
  { id: 'u8', name: 'Priya Sharma',    initials: 'PS', rank: 'Builder',   networkSize: 5,  totalGiving: 600  },
  { id: 'u9', name: 'Caleb Foster',    initials: 'CF', rank: 'Starter',   networkSize: 1,  totalGiving: 150  },
]

export const CURRENT_USER: User = {
  id: 'u1',
  name: 'Jordan Nassie',
  username: '@jordannassie',
  bio: 'Building something that matters. Join the 1B Project and grow your network.',
  initials: 'JN',
  rank: 'Connector',
  badges: SAMPLE_BADGES,
  totalGiving: 2500,
  networkGiving: 48750,
  directInvites: 8,
  networkSize: 47,
  leaderboardRank: 14,
  invitedBy: 'Chris Osei',
  invitedByUsername: '@chrisosei',
  directInvitesList: SAMPLE_DIRECT_INVITES,
  joinedAt: 'Jan 10, 2025',
}

export const LIVE_STATS: LiveStats = {
  totalRaised: 4_820_500,
  totalMembers: 12_847,
  largestNetwork: 1_240,
  latestBadge: 'Diamond Level',
  latestBadgeUser: 'Amara Collins',
}

// ─── Network Graph Data ───────────────────────────────────────────────────────
// SVG canvas: 850 × 580, center node at (425, 290)

export const NETWORK_NODES: NetworkNode[] = [
  // Level 0 — you
  { id: 'u1',  name: 'Jordan Nassie',   initials: 'JN', rank: 'Connector',  rankColor: '#059669', totalGiving: 2500, networkGiving: 48750, directInvites: 8,  level: 0, x: 425, y: 290, parentId: null },

  // Level 1 — direct invites (radius 145 from center)
  { id: 'u2',  name: 'Sarah Mitchell',  initials: 'SM', rank: 'Builder',    rankColor: '#2563EB', totalGiving: 1500, networkGiving: 9800,  directInvites: 3,  level: 1, x: 425, y: 145, parentId: 'u1' },
  { id: 'u3',  name: 'Marcus Thompson', initials: 'MT', rank: 'Connector',  rankColor: '#059669', totalGiving: 3200, networkGiving: 18400, directInvites: 4,  level: 1, x: 550, y: 217, parentId: 'u1' },
  { id: 'u4',  name: 'Aisha Kamara',    initials: 'AK', rank: 'Builder',    rankColor: '#2563EB', totalGiving: 900,  networkGiving: 7100,  directInvites: 3,  level: 1, x: 550, y: 362, parentId: 'u1' },
  { id: 'u5',  name: 'David Rivera',    initials: 'DR', rank: 'Starter',    rankColor: '#71717a', totalGiving: 400,  networkGiving: 2800,  directInvites: 2,  level: 1, x: 425, y: 435, parentId: 'u1' },
  { id: 'u6',  name: 'Emma Laurent',    initials: 'EL', rank: 'Builder',    rankColor: '#2563EB', totalGiving: 750,  networkGiving: 6400,  directInvites: 4,  level: 1, x: 300, y: 362, parentId: 'u1' },
  { id: 'u7',  name: 'James Okafor',    initials: 'JO', rank: 'Starter',    rankColor: '#71717a', totalGiving: 200,  networkGiving: 1200,  directInvites: 1,  level: 1, x: 300, y: 217, parentId: 'u1' },

  // Level 2 — Sarah's network
  { id: 'sa1', name: 'Nina Blake',      initials: 'NB', rank: 'Starter',    rankColor: '#71717a', totalGiving: 500,  networkGiving: 500,   directInvites: 0,  level: 2, x: 355, y: 72,  parentId: 'u2' },
  { id: 'sa2', name: 'Tolu Adeyemi',    initials: 'TA', rank: 'Starter',    rankColor: '#71717a', totalGiving: 300,  networkGiving: 300,   directInvites: 0,  level: 2, x: 425, y: 55,  parentId: 'u2' },
  { id: 'sa3', name: 'Leo Park',        initials: 'LP', rank: 'Builder',    rankColor: '#2563EB', totalGiving: 700,  networkGiving: 2100,  directInvites: 2,  level: 2, x: 495, y: 72,  parentId: 'u2' },

  // Level 2 — Marcus's network
  { id: 'ma1', name: 'Faith Okonkwo',   initials: 'FO', rank: 'Starter',    rankColor: '#71717a', totalGiving: 400,  networkGiving: 400,   directInvites: 0,  level: 2, x: 632, y: 158, parentId: 'u3' },
  { id: 'ma2', name: 'Zara Wilson',     initials: 'ZW', rank: 'Starter',    rankColor: '#71717a', totalGiving: 250,  networkGiving: 250,   directInvites: 0,  level: 2, x: 648, y: 232, parentId: 'u3' },
  { id: 'ma3', name: 'Owen Clarke',     initials: 'OC', rank: 'Starter',    rankColor: '#71717a', totalGiving: 600,  networkGiving: 600,   directInvites: 0,  level: 2, x: 630, y: 305, parentId: 'u3' },
  { id: 'ma4', name: 'Remi Osei',       initials: 'RO', rank: 'Builder',    rankColor: '#2563EB', totalGiving: 800,  networkGiving: 1900,  directInvites: 2,  level: 2, x: 700, y: 195, parentId: 'u3' },

  // Level 2 — Aisha's network
  { id: 'ai1', name: 'Chloe Marsh',     initials: 'CM', rank: 'Starter',    rankColor: '#71717a', totalGiving: 350,  networkGiving: 350,   directInvites: 0,  level: 2, x: 628, y: 325, parentId: 'u4' },
  { id: 'ai2', name: 'Isaac Diallo',    initials: 'ID', rank: 'Starter',    rankColor: '#71717a', totalGiving: 450,  networkGiving: 450,   directInvites: 0,  level: 2, x: 640, y: 400, parentId: 'u4' },
  { id: 'ai3', name: 'Maya Singh',      initials: 'MS', rank: 'Starter',    rankColor: '#71717a', totalGiving: 200,  networkGiving: 200,   directInvites: 0,  level: 2, x: 600, y: 455, parentId: 'u4' },

  // Level 2 — David's network
  { id: 'da1', name: 'Kwame Asante',    initials: 'KA', rank: 'Starter',    rankColor: '#71717a', totalGiving: 300,  networkGiving: 300,   directInvites: 0,  level: 2, x: 365, y: 510, parentId: 'u5' },
  { id: 'da2', name: 'Lily Chen',       initials: 'LC', rank: 'Starter',    rankColor: '#71717a', totalGiving: 250,  networkGiving: 250,   directInvites: 0,  level: 2, x: 485, y: 510, parentId: 'u5' },

  // Level 2 — Emma's network
  { id: 'em1', name: 'Ahmed Farooq',    initials: 'AF', rank: 'Starter',    rankColor: '#71717a', totalGiving: 400,  networkGiving: 400,   directInvites: 0,  level: 2, x: 200, y: 318, parentId: 'u6' },
  { id: 'em2', name: 'Sofia Reyes',     initials: 'SR', rank: 'Starter',    rankColor: '#71717a', totalGiving: 300,  networkGiving: 300,   directInvites: 0,  level: 2, x: 188, y: 402, parentId: 'u6' },
  { id: 'em3', name: 'Ben Adeyemi',     initials: 'BA', rank: 'Starter',    rankColor: '#71717a', totalGiving: 200,  networkGiving: 200,   directInvites: 0,  level: 2, x: 238, y: 462, parentId: 'u6' },
  { id: 'em4', name: 'Grace Nwosu',     initials: 'GN', rank: 'Starter',    rankColor: '#71717a', totalGiving: 250,  networkGiving: 250,   directInvites: 0,  level: 2, x: 162, y: 360, parentId: 'u6' },

  // Level 2 — James's network
  { id: 'ja1', name: 'Temi Adama',      initials: 'TA', rank: 'Starter',    rankColor: '#71717a', totalGiving: 150,  networkGiving: 150,   directInvites: 0,  level: 2, x: 198, y: 162, parentId: 'u7' },
]

// ─── Leaderboard Data ─────────────────────────────────────────────────────────

export const LEADERBOARD_BIGGEST: LeaderboardEntry[] = [
  { rank: 1,  id: 'l1',  name: 'Amara Collins',    initials: 'AC', badge: 'Diamond Level',  userRank: 'Diamond',    totalGiving: 18500, networkTotal: 892000, networkSize: 1240, growthRate: 22, badgeCount: 8 },
  { rank: 2,  id: 'l2',  name: 'Chris Osei',       initials: 'CO', badge: 'Top Connector',  userRank: 'Diamond',    totalGiving: 12000, networkTotal: 710000, networkSize: 984,  growthRate: 18, badgeCount: 7 },
  { rank: 3,  id: 'l3',  name: 'Nadia Petrov',     initials: 'NP', badge: 'Top Connector',  userRank: 'Leader',     totalGiving: 9800,  networkTotal: 548000, networkSize: 720,  growthRate: 15, badgeCount: 7 },
  { rank: 4,  id: 'l4',  name: 'Daniel Owusu',     initials: 'DO', badge: 'Network of 100', userRank: 'Leader',     totalGiving: 7500,  networkTotal: 430000, networkSize: 520,  growthRate: 12, badgeCount: 6 },
  { rank: 5,  id: 'l5',  name: 'Fatima Al-Hassan', initials: 'FA', badge: 'Network of 100', userRank: 'Multiplier', totalGiving: 6200,  networkTotal: 310000, networkSize: 388,  growthRate: 19, badgeCount: 6 },
  { rank: 6,  id: 'l6',  name: 'Samuel Wright',    initials: 'SW', badge: 'Network of 100', userRank: 'Multiplier', totalGiving: 5400,  networkTotal: 248000, networkSize: 290,  growthRate: 14, badgeCount: 5 },
  { rank: 7,  id: 'l7',  name: 'Yemi Adeleke',     initials: 'YA', badge: 'Network of 25',  userRank: 'Multiplier', totalGiving: 4800,  networkTotal: 195000, networkSize: 210,  growthRate: 11, badgeCount: 5 },
  { rank: 8,  id: 'l8',  name: 'Hannah Kim',       initials: 'HK', badge: 'Network of 25',  userRank: 'Multiplier', totalGiving: 3900,  networkTotal: 142000, networkSize: 158,  growthRate: 16, badgeCount: 5 },
  { rank: 9,  id: 'l9',  name: 'Tom Fletcher',     initials: 'TF', badge: 'Network of 25',  userRank: 'Leader',     totalGiving: 3200,  networkTotal: 118000, networkSize: 130,  growthRate: 9,  badgeCount: 5 },
  { rank: 10, id: 'l10', name: 'Ayo Balogun',      initials: 'AB', badge: 'Network of 25',  userRank: 'Leader',     totalGiving: 2800,  networkTotal: 96000,  networkSize: 112,  growthRate: 13, badgeCount: 4 },
  { rank: 11, id: 'l11', name: 'Rosa Mendez',      initials: 'RM', badge: 'Network of 25',  userRank: 'Leader',     totalGiving: 2400,  networkTotal: 78000,  networkSize: 98,   growthRate: 10, badgeCount: 4 },
  { rank: 12, id: 'l12', name: 'Ben Asante',       initials: 'BA', badge: 'Rising Builder',  userRank: 'Connector', totalGiving: 2200,  networkTotal: 64000,  networkSize: 80,   growthRate: 21, badgeCount: 4 },
  { rank: 13, id: 'l13', name: 'Pita Havili',      initials: 'PH', badge: 'Rising Builder',  userRank: 'Connector', totalGiving: 1900,  networkTotal: 55000,  networkSize: 63,   growthRate: 17, badgeCount: 4 },
  { rank: 14, id: 'u1',  name: 'Jordan Nassie',    initials: 'JN', badge: 'Rising Builder',  userRank: 'Connector', totalGiving: 2500,  networkTotal: 48750,  networkSize: 47,   growthRate: 14, badgeCount: 5 },
  { rank: 15, id: 'l15', name: 'Celine Dubois',    initials: 'CD', badge: 'Network of 5',   userRank: 'Builder',   totalGiving: 1200,  networkTotal: 32000,  networkSize: 38,   growthRate: 8,  badgeCount: 3 },
]

export const LEADERBOARD_GIVING: LeaderboardEntry[] = [...LEADERBOARD_BIGGEST]
  .sort((a, b) => b.totalGiving - a.totalGiving)
  .map((e, i) => ({ ...e, rank: i + 1 }))

export const LEADERBOARD_GROWING: LeaderboardEntry[] = [...LEADERBOARD_BIGGEST]
  .sort((a, b) => b.growthRate - a.growthRate)
  .map((e, i) => ({ ...e, rank: i + 1 }))

export const LEADERBOARD_BADGES: LeaderboardEntry[] = [...LEADERBOARD_BIGGEST]
  .sort((a, b) => b.badgeCount - a.badgeCount)
  .map((e, i) => ({ ...e, rank: i + 1 }))
