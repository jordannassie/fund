import type {
  User,
  Badge,
  NetworkNode,
  LeaderboardEntry,
  LiveStats,
  InviteEntry,
} from '@/types'

// Pravatar URLs — consistent demo photos by numeric ID
const av = (id: number) => `https://i.pravatar.cc/150?img=${id}`

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
  { id: 'u2', name: 'Sarah Mitchell',  initials: 'SM', avatar: av(5),  rank: 'Builder',   networkSize: 9,  totalGiving: 1500 },
  { id: 'u3', name: 'Marcus Thompson', initials: 'MT', avatar: av(15), rank: 'Connector', networkSize: 18, totalGiving: 3200 },
  { id: 'u4', name: 'Aisha Kamara',    initials: 'AK', avatar: av(25), rank: 'Builder',   networkSize: 7,  totalGiving: 900  },
  { id: 'u5', name: 'David Rivera',    initials: 'DR', avatar: av(32), rank: 'Starter',   networkSize: 3,  totalGiving: 400  },
  { id: 'u6', name: 'Emma Laurent',    initials: 'EL', avatar: av(44), rank: 'Builder',   networkSize: 6,  totalGiving: 750  },
  { id: 'u7', name: 'James Okafor',    initials: 'JO', avatar: av(52), rank: 'Starter',   networkSize: 2,  totalGiving: 200  },
  { id: 'u8', name: 'Priya Sharma',    initials: 'PS', avatar: av(56), rank: 'Builder',   networkSize: 5,  totalGiving: 600  },
  { id: 'u9', name: 'Caleb Foster',    initials: 'CF', avatar: av(60), rank: 'Starter',   networkSize: 1,  totalGiving: 150  },
]

export const CURRENT_USER: User = {
  id: 'u1',
  name: 'Jordan Nassie',
  username: '@jordannassie',
  bio: 'Building something that matters. Join the 1B Project and grow your network.',
  initials: 'JN',
  avatar: av(12),
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
  { id: 'u1',  name: 'Jordan Nassie',   initials: 'JN', avatar: av(12), rank: 'Connector',  rankColor: '#059669', totalGiving: 2500, networkGiving: 48750, directInvites: 8,  level: 0, x: 425, y: 290, parentId: null },

  // Level 1 — direct invites (radius 145 from center)
  { id: 'u2',  name: 'Sarah Mitchell',  initials: 'SM', avatar: av(5),  rank: 'Builder',    rankColor: '#2563EB', totalGiving: 1500, networkGiving: 9800,  directInvites: 3,  level: 1, x: 425, y: 145, parentId: 'u1' },
  { id: 'u3',  name: 'Marcus Thompson', initials: 'MT', avatar: av(15), rank: 'Connector',  rankColor: '#059669', totalGiving: 3200, networkGiving: 18400, directInvites: 4,  level: 1, x: 550, y: 217, parentId: 'u1' },
  { id: 'u4',  name: 'Aisha Kamara',    initials: 'AK', avatar: av(25), rank: 'Builder',    rankColor: '#2563EB', totalGiving: 900,  networkGiving: 7100,  directInvites: 3,  level: 1, x: 550, y: 362, parentId: 'u1' },
  { id: 'u5',  name: 'David Rivera',    initials: 'DR', avatar: av(32), rank: 'Starter',    rankColor: '#71717a', totalGiving: 400,  networkGiving: 2800,  directInvites: 2,  level: 1, x: 425, y: 435, parentId: 'u1' },
  { id: 'u6',  name: 'Emma Laurent',    initials: 'EL', avatar: av(44), rank: 'Builder',    rankColor: '#2563EB', totalGiving: 750,  networkGiving: 6400,  directInvites: 4,  level: 1, x: 300, y: 362, parentId: 'u1' },
  { id: 'u7',  name: 'James Okafor',    initials: 'JO', avatar: av(52), rank: 'Starter',    rankColor: '#71717a', totalGiving: 200,  networkGiving: 1200,  directInvites: 1,  level: 1, x: 300, y: 217, parentId: 'u1' },

  // Level 2 — Sarah's network
  { id: 'sa1', name: 'Nina Blake',      initials: 'NB', avatar: av(3),  rank: 'Starter',    rankColor: '#71717a', totalGiving: 500,  networkGiving: 500,   directInvites: 0,  level: 2, x: 355, y: 72,  parentId: 'u2' },
  { id: 'sa2', name: 'Tolu Adeyemi',    initials: 'TA', avatar: av(6),  rank: 'Starter',    rankColor: '#71717a', totalGiving: 300,  networkGiving: 300,   directInvites: 0,  level: 2, x: 425, y: 55,  parentId: 'u2' },
  { id: 'sa3', name: 'Leo Park',        initials: 'LP', avatar: av(19), rank: 'Builder',    rankColor: '#2563EB', totalGiving: 700,  networkGiving: 2100,  directInvites: 2,  level: 2, x: 495, y: 72,  parentId: 'u2' },

  // Level 2 — Marcus's network
  { id: 'ma1', name: 'Faith Okonkwo',   initials: 'FO', avatar: av(29), rank: 'Starter',    rankColor: '#71717a', totalGiving: 400,  networkGiving: 400,   directInvites: 0,  level: 2, x: 632, y: 158, parentId: 'u3' },
  { id: 'ma2', name: 'Zara Wilson',     initials: 'ZW', avatar: av(37), rank: 'Starter',    rankColor: '#71717a', totalGiving: 250,  networkGiving: 250,   directInvites: 0,  level: 2, x: 648, y: 232, parentId: 'u3' },
  { id: 'ma3', name: 'Owen Clarke',     initials: 'OC', avatar: av(45), rank: 'Starter',    rankColor: '#71717a', totalGiving: 600,  networkGiving: 600,   directInvites: 0,  level: 2, x: 630, y: 305, parentId: 'u3' },
  { id: 'ma4', name: 'Remi Osei',       initials: 'RO', avatar: av(53), rank: 'Builder',    rankColor: '#2563EB', totalGiving: 800,  networkGiving: 1900,  directInvites: 2,  level: 2, x: 700, y: 195, parentId: 'u3' },

  // Level 2 — Aisha's network
  { id: 'ai1', name: 'Chloe Marsh',     initials: 'CM', avatar: av(2),  rank: 'Starter',    rankColor: '#71717a', totalGiving: 350,  networkGiving: 350,   directInvites: 0,  level: 2, x: 628, y: 325, parentId: 'u4' },
  { id: 'ai2', name: 'Isaac Diallo',    initials: 'ID', avatar: av(17), rank: 'Starter',    rankColor: '#71717a', totalGiving: 450,  networkGiving: 450,   directInvites: 0,  level: 2, x: 640, y: 400, parentId: 'u4' },
  { id: 'ai3', name: 'Maya Singh',      initials: 'MS', avatar: av(35), rank: 'Starter',    rankColor: '#71717a', totalGiving: 200,  networkGiving: 200,   directInvites: 0,  level: 2, x: 600, y: 455, parentId: 'u4' },

  // Level 2 — David's network
  { id: 'da1', name: 'Kwame Asante',    initials: 'KA', avatar: av(41), rank: 'Starter',    rankColor: '#71717a', totalGiving: 300,  networkGiving: 300,   directInvites: 0,  level: 2, x: 365, y: 510, parentId: 'u5' },
  { id: 'da2', name: 'Lily Chen',       initials: 'LC', avatar: av(49), rank: 'Starter',    rankColor: '#71717a', totalGiving: 250,  networkGiving: 250,   directInvites: 0,  level: 2, x: 485, y: 510, parentId: 'u5' },

  // Level 2 — Emma's network
  { id: 'em1', name: 'Ahmed Farooq',    initials: 'AF', avatar: av(58), rank: 'Starter',    rankColor: '#71717a', totalGiving: 400,  networkGiving: 400,   directInvites: 0,  level: 2, x: 200, y: 318, parentId: 'u6' },
  { id: 'em2', name: 'Sofia Reyes',     initials: 'SR', avatar: av(63), rank: 'Starter',    rankColor: '#71717a', totalGiving: 300,  networkGiving: 300,   directInvites: 0,  level: 2, x: 188, y: 402, parentId: 'u6' },
  { id: 'em3', name: 'Ben Adeyemi',     initials: 'BA', avatar: av(67), rank: 'Starter',    rankColor: '#71717a', totalGiving: 200,  networkGiving: 200,   directInvites: 0,  level: 2, x: 238, y: 462, parentId: 'u6' },
  { id: 'em4', name: 'Grace Nwosu',     initials: 'GN', avatar: av(70), rank: 'Starter',    rankColor: '#71717a', totalGiving: 250,  networkGiving: 250,   directInvites: 0,  level: 2, x: 162, y: 360, parentId: 'u6' },

  // Level 2 — James's network
  { id: 'ja1', name: 'Temi Adama',      initials: 'TA', avatar: av(7),  rank: 'Starter',    rankColor: '#71717a', totalGiving: 150,  networkGiving: 150,   directInvites: 0,  level: 2, x: 198, y: 162, parentId: 'u7' },
]

// ─── Leaderboard Data ─────────────────────────────────────────────────────────

export const LEADERBOARD_BIGGEST: LeaderboardEntry[] = [
  { rank: 1,  id: 'l1',  name: 'Amara Collins',    initials: 'AC', avatar: av(1),  badge: 'Diamond Level',  userRank: 'Diamond',    totalGiving: 18500, networkTotal: 892000, networkSize: 1240, growthRate: 22, badgeCount: 8 },
  { rank: 2,  id: 'l2',  name: 'Chris Osei',       initials: 'CO', avatar: av(14), badge: 'Top Connector',  userRank: 'Diamond',    totalGiving: 12000, networkTotal: 710000, networkSize: 984,  growthRate: 18, badgeCount: 7 },
  { rank: 3,  id: 'l3',  name: 'Nadia Petrov',     initials: 'NP', avatar: av(47), badge: 'Top Connector',  userRank: 'Leader',     totalGiving: 9800,  networkTotal: 548000, networkSize: 720,  growthRate: 15, badgeCount: 7 },
  { rank: 4,  id: 'l4',  name: 'Daniel Owusu',     initials: 'DO', avatar: av(20), badge: 'Network of 100', userRank: 'Leader',     totalGiving: 7500,  networkTotal: 430000, networkSize: 520,  growthRate: 12, badgeCount: 6 },
  { rank: 5,  id: 'l5',  name: 'Fatima Al-Hassan', initials: 'FA', avatar: av(9),  badge: 'Network of 100', userRank: 'Multiplier', totalGiving: 6200,  networkTotal: 310000, networkSize: 388,  growthRate: 19, badgeCount: 6 },
  { rank: 6,  id: 'l6',  name: 'Samuel Wright',    initials: 'SW', avatar: av(33), badge: 'Network of 100', userRank: 'Multiplier', totalGiving: 5400,  networkTotal: 248000, networkSize: 290,  growthRate: 14, badgeCount: 5 },
  { rank: 7,  id: 'l7',  name: 'Yemi Adeleke',     initials: 'YA', avatar: av(42), badge: 'Network of 25',  userRank: 'Multiplier', totalGiving: 4800,  networkTotal: 195000, networkSize: 210,  growthRate: 11, badgeCount: 5 },
  { rank: 8,  id: 'l8',  name: 'Hannah Kim',       initials: 'HK', avatar: av(55), badge: 'Network of 25',  userRank: 'Multiplier', totalGiving: 3900,  networkTotal: 142000, networkSize: 158,  growthRate: 16, badgeCount: 5 },
  { rank: 9,  id: 'l9',  name: 'Tom Fletcher',     initials: 'TF', avatar: av(61), badge: 'Network of 25',  userRank: 'Leader',     totalGiving: 3200,  networkTotal: 118000, networkSize: 130,  growthRate: 9,  badgeCount: 5 },
  { rank: 10, id: 'l10', name: 'Ayo Balogun',      initials: 'AB', avatar: av(65), badge: 'Network of 25',  userRank: 'Leader',     totalGiving: 2800,  networkTotal: 96000,  networkSize: 112,  growthRate: 13, badgeCount: 4 },
  { rank: 11, id: 'l11', name: 'Rosa Mendez',      initials: 'RM', avatar: av(68), badge: 'Network of 25',  userRank: 'Leader',     totalGiving: 2400,  networkTotal: 78000,  networkSize: 98,   growthRate: 10, badgeCount: 4 },
  { rank: 12, id: 'l12', name: 'Ben Asante',       initials: 'BA', avatar: av(16), badge: 'Rising Builder',  userRank: 'Connector', totalGiving: 2200,  networkTotal: 64000,  networkSize: 80,   growthRate: 21, badgeCount: 4 },
  { rank: 13, id: 'l13', name: 'Pita Havili',      initials: 'PH', avatar: av(21), badge: 'Rising Builder',  userRank: 'Connector', totalGiving: 1900,  networkTotal: 55000,  networkSize: 63,   growthRate: 17, badgeCount: 4 },
  { rank: 14, id: 'u1',  name: 'Jordan Nassie',    initials: 'JN', avatar: av(12), badge: 'Rising Builder',  userRank: 'Connector', totalGiving: 2500,  networkTotal: 48750,  networkSize: 47,   growthRate: 14, badgeCount: 5 },
  { rank: 15, id: 'l15', name: 'Celine Dubois',    initials: 'CD', avatar: av(50), badge: 'Network of 5',   userRank: 'Builder',   totalGiving: 1200,  networkTotal: 32000,  networkSize: 38,   growthRate: 8,  badgeCount: 3 },
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

// ─── Admin: all members (sample list) ─────────────────────────────────────────

export interface AdminMember {
  id: string
  name: string
  username: string
  initials: string
  avatar: string
  rank: import('@/types').Rank
  networkSize: number
  totalGiving: number
  directInvites: number
  badgeCount: number
  status: 'active' | 'pending' | 'inactive'
  joinedAt: string
}

export const ADMIN_MEMBERS: AdminMember[] = [
  { id: 'l1',  name: 'Amara Collins',    username: '@amaracollins',  initials: 'AC', avatar: av(1),  rank: 'Diamond',    networkSize: 1240, totalGiving: 18500, directInvites: 42, badgeCount: 8, status: 'active',   joinedAt: 'Jan 2, 2025'  },
  { id: 'l2',  name: 'Chris Osei',       username: '@chrisosei',     initials: 'CO', avatar: av(14), rank: 'Diamond',    networkSize: 984,  totalGiving: 12000, directInvites: 36, badgeCount: 7, status: 'active',   joinedAt: 'Jan 3, 2025'  },
  { id: 'l3',  name: 'Nadia Petrov',     username: '@nadiapetrov',   initials: 'NP', avatar: av(47), rank: 'Leader',     networkSize: 720,  totalGiving: 9800,  directInvites: 28, badgeCount: 7, status: 'active',   joinedAt: 'Jan 5, 2025'  },
  { id: 'l4',  name: 'Daniel Owusu',     username: '@danielowusu',   initials: 'DO', avatar: av(20), rank: 'Leader',     networkSize: 520,  totalGiving: 7500,  directInvites: 21, badgeCount: 6, status: 'active',   joinedAt: 'Jan 6, 2025'  },
  { id: 'l5',  name: 'Fatima Al-Hassan', username: '@fatimaah',      initials: 'FA', avatar: av(9),  rank: 'Multiplier', networkSize: 388,  totalGiving: 6200,  directInvites: 18, badgeCount: 6, status: 'active',   joinedAt: 'Jan 8, 2025'  },
  { id: 'l6',  name: 'Samuel Wright',    username: '@samwright',     initials: 'SW', avatar: av(33), rank: 'Multiplier', networkSize: 290,  totalGiving: 5400,  directInvites: 15, badgeCount: 5, status: 'active',   joinedAt: 'Jan 9, 2025'  },
  { id: 'l7',  name: 'Yemi Adeleke',     username: '@yemiadeleke',   initials: 'YA', avatar: av(42), rank: 'Multiplier', networkSize: 210,  totalGiving: 4800,  directInvites: 12, badgeCount: 5, status: 'active',   joinedAt: 'Jan 10, 2025' },
  { id: 'l8',  name: 'Hannah Kim',       username: '@hannahkim',     initials: 'HK', avatar: av(55), rank: 'Multiplier', networkSize: 158,  totalGiving: 3900,  directInvites: 11, badgeCount: 5, status: 'active',   joinedAt: 'Jan 11, 2025' },
  { id: 'l9',  name: 'Tom Fletcher',     username: '@tomfletcher',   initials: 'TF', avatar: av(61), rank: 'Leader',     networkSize: 130,  totalGiving: 3200,  directInvites: 9,  badgeCount: 5, status: 'active',   joinedAt: 'Jan 12, 2025' },
  { id: 'l10', name: 'Ayo Balogun',      username: '@ayobalogun',    initials: 'AB', avatar: av(65), rank: 'Leader',     networkSize: 112,  totalGiving: 2800,  directInvites: 8,  badgeCount: 4, status: 'active',   joinedAt: 'Jan 14, 2025' },
  { id: 'l11', name: 'Rosa Mendez',      username: '@rosam',         initials: 'RM', avatar: av(68), rank: 'Leader',     networkSize: 98,   totalGiving: 2400,  directInvites: 7,  badgeCount: 4, status: 'active',   joinedAt: 'Jan 15, 2025' },
  { id: 'l12', name: 'Ben Asante',       username: '@benasante',     initials: 'BA', avatar: av(16), rank: 'Connector',  networkSize: 80,   totalGiving: 2200,  directInvites: 6,  badgeCount: 4, status: 'active',   joinedAt: 'Jan 16, 2025' },
  { id: 'l13', name: 'Pita Havili',      username: '@pitahavili',    initials: 'PH', avatar: av(21), rank: 'Connector',  networkSize: 63,   totalGiving: 1900,  directInvites: 5,  badgeCount: 4, status: 'active',   joinedAt: 'Jan 18, 2025' },
  { id: 'u1',  name: 'Jordan Nassie',    username: '@jordannassie',  initials: 'JN', avatar: av(12), rank: 'Connector',  networkSize: 47,   totalGiving: 2500,  directInvites: 8,  badgeCount: 5, status: 'active',   joinedAt: 'Jan 10, 2025' },
  { id: 'l15', name: 'Celine Dubois',    username: '@celinedubois',  initials: 'CD', avatar: av(50), rank: 'Builder',    networkSize: 38,   totalGiving: 1200,  directInvites: 4,  badgeCount: 3, status: 'active',   joinedAt: 'Jan 20, 2025' },
  { id: 'u2',  name: 'Sarah Mitchell',   username: '@sarahmitchell', initials: 'SM', avatar: av(5),  rank: 'Builder',    networkSize: 9,    totalGiving: 1500,  directInvites: 3,  badgeCount: 3, status: 'active',   joinedAt: 'Jan 14, 2025' },
  { id: 'u3',  name: 'Marcus Thompson',  username: '@marcust',       initials: 'MT', avatar: av(15), rank: 'Connector',  networkSize: 18,   totalGiving: 3200,  directInvites: 4,  badgeCount: 4, status: 'active',   joinedAt: 'Jan 15, 2025' },
  { id: 'u4',  name: 'Aisha Kamara',     username: '@aishak',        initials: 'AK', avatar: av(25), rank: 'Builder',    networkSize: 7,    totalGiving: 900,   directInvites: 3,  badgeCount: 2, status: 'active',   joinedAt: 'Jan 17, 2025' },
  { id: 'u5',  name: 'David Rivera',     username: '@davidrivera',   initials: 'DR', avatar: av(32), rank: 'Starter',    networkSize: 3,    totalGiving: 400,   directInvites: 2,  badgeCount: 1, status: 'pending',  joinedAt: 'Jan 20, 2025' },
  { id: 'u6',  name: 'Emma Laurent',     username: '@emmal',         initials: 'EL', avatar: av(44), rank: 'Builder',    networkSize: 6,    totalGiving: 750,   directInvites: 4,  badgeCount: 2, status: 'active',   joinedAt: 'Jan 21, 2025' },
  { id: 'u7',  name: 'James Okafor',     username: '@jamesokafor',   initials: 'JO', avatar: av(52), rank: 'Starter',    networkSize: 2,    totalGiving: 200,   directInvites: 1,  badgeCount: 1, status: 'inactive', joinedAt: 'Jan 22, 2025' },
  { id: 'u8',  name: 'Priya Sharma',     username: '@priyasharma',   initials: 'PS', avatar: av(56), rank: 'Builder',    networkSize: 5,    totalGiving: 600,   directInvites: 3,  badgeCount: 2, status: 'active',   joinedAt: 'Jan 25, 2025' },
  { id: 'u9',  name: 'Caleb Foster',     username: '@calebfoster',   initials: 'CF', avatar: av(60), rank: 'Starter',    networkSize: 1,    totalGiving: 150,   directInvites: 1,  badgeCount: 1, status: 'pending',  joinedAt: 'Jan 28, 2025' },
]

export const ADMIN_RECENT_ACTIVITY = [
  { type: 'badge',   user: 'Amara Collins',  avatar: av(1),  detail: 'earned Diamond Level badge',   time: '2 min ago' },
  { type: 'join',    user: 'Caleb Foster',   avatar: av(60), detail: 'joined the network',           time: '14 min ago' },
  { type: 'invite',  user: 'Marcus Thompson',avatar: av(15), detail: 'invited 2 new members',        time: '31 min ago' },
  { type: 'badge',   user: 'Pita Havili',    avatar: av(21), detail: 'earned Rising Builder badge',  time: '1 hr ago' },
  { type: 'join',    user: 'Priya Sharma',   avatar: av(56), detail: 'joined the network',           time: '2 hr ago' },
  { type: 'badge',   user: 'Hannah Kim',     avatar: av(55), detail: 'earned Network of 25 badge',   time: '3 hr ago' },
  { type: 'invite',  user: 'Fatima Al-Hassan', avatar: av(9), detail: 'invited 4 new members',      time: '4 hr ago' },
  { type: 'join',    user: 'Rosa Mendez',    avatar: av(68), detail: 'joined the network',           time: '5 hr ago' },
]
