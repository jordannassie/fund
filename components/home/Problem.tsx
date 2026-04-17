const PROFILE_CARD = {
  name: 'Jordan Nassie',
  username: '@jordannassie',
  bio: 'Building something that matters. Join the 1B Project and grow your network.',
  avatarSrc: 'https://i.pravatar.cc/150?img=12',
  currentRank: 'Connector',
  nextRank: 'Multiplier',
  networkSize: 47,
  networkTarget: 50,
  toNext: 3,
  memberSince: 'Jan 10, 2025',
}

// SVG network — all coords in a 1200×740 viewBox, center ≈ (600, 290)
const CENTER = { x: 600, y: 290 }

const L1_NODES = [
  { id: 'a', x: 330,  y: 90,  img: 5,  r: 22 },
  { id: 'b', x: 655,  y: 65,  img: 15, r: 22 },
  { id: 'c', x: 890,  y: 150, img: 25, r: 22 },
  { id: 'd', x: 915,  y: 390, img: 32, r: 22 },
  { id: 'e', x: 365,  y: 470, img: 44, r: 22 },
  { id: 'f', x: 185,  y: 305, img: 52, r: 22 },
]

const L2_NODES = [
  { id: 'a1', x: 155,  y: 25,  img: 60, r: 14, parent: 'a' },
  { id: 'a2', x: 290,  y: 230, img: 56, r: 14, parent: 'a' },
  { id: 'b1', x: 770,  y: 18,  img: 9,  r: 14, parent: 'b' },
  { id: 'b2', x: 530,  y: 10,  img: 3,  r: 14, parent: 'b' },
  { id: 'c1', x: 1045, y: 75,  img: 7,  r: 14, parent: 'c' },
  { id: 'c2', x: 990,  y: 275, img: 8,  r: 14, parent: 'c' },
  { id: 'd1', x: 1090, y: 310, img: 16, r: 14, parent: 'd' },
  { id: 'd2', x: 1065, y: 490, img: 17, r: 14, parent: 'd' },
  { id: 'e1', x: 220,  y: 575, img: 18, r: 14, parent: 'e' },
  { id: 'e2', x: 435,  y: 605, img: 19, r: 14, parent: 'e' },
  { id: 'f1', x: 55,   y: 210, img: 20, r: 14, parent: 'f' },
  { id: 'f2', x: 45,   y: 435, img: 21, r: 14, parent: 'f' },
]

function NetworkBackground() {
  const l2Map = L2_NODES.reduce<Record<string, typeof L2_NODES>>((acc, n) => {
    acc[n.parent] = acc[n.parent] ?? []
    acc[n.parent].push(n)
    return acc
  }, {})

  return (
    <svg
      viewBox="0 0 1200 740"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        {/* Clip paths for circular avatar images */}
        {[...L1_NODES, ...L2_NODES].map((n) => (
          <clipPath key={`clip-${n.id}`} id={`clip-${n.id}`}>
            <circle cx={n.x} cy={n.y} r={n.r} />
          </clipPath>
        ))}
        {/* Radial fade so network softens toward the center card area */}
        <radialGradient id="centerFade" cx="50%" cy="40%" r="30%">
          <stop offset="0%"  stopColor="white" stopOpacity="0.95" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* ── Edges: center → L1 ── */}
      {L1_NODES.map((n) => (
        <line
          key={`edge-center-${n.id}`}
          x1={CENTER.x} y1={CENTER.y}
          x2={n.x}      y2={n.y}
          stroke="#a1a1aa" strokeWidth="1" strokeOpacity="0.35"
          strokeDasharray="4 4"
        />
      ))}

      {/* ── Edges: L1 → L2 ── */}
      {L1_NODES.map((n) =>
        (l2Map[n.id] ?? []).map((l2) => (
          <line
            key={`edge-${n.id}-${l2.id}`}
            x1={n.x}  y1={n.y}
            x2={l2.x} y2={l2.y}
            stroke="#a1a1aa" strokeWidth="1" strokeOpacity="0.22"
            strokeDasharray="3 4"
          />
        ))
      )}

      {/* ── L2 nodes ── */}
      {L2_NODES.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={n.r + 1.5} fill="white" opacity="0.7" />
          <image
            href={`https://i.pravatar.cc/150?img=${n.img}`}
            x={n.x - n.r} y={n.y - n.r}
            width={n.r * 2} height={n.r * 2}
            clipPath={`url(#clip-${n.id})`}
            opacity="0.6"
          />
          <circle cx={n.x} cy={n.y} r={n.r} fill="none" stroke="#d4d4d8" strokeWidth="1" />
        </g>
      ))}

      {/* ── L1 nodes ── */}
      {L1_NODES.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={n.r + 2.5} fill="white" opacity="0.85" />
          <image
            href={`https://i.pravatar.cc/150?img=${n.img}`}
            x={n.x - n.r} y={n.y - n.r}
            width={n.r * 2} height={n.r * 2}
            clipPath={`url(#clip-${n.id})`}
            opacity="0.8"
          />
          <circle cx={n.x} cy={n.y} r={n.r} fill="none" stroke="#a1a1aa" strokeWidth="1.5" />
        </g>
      ))}

      {/* Soft white radial mask over center so card reads cleanly */}
      <circle
        cx={CENTER.x} cy={CENTER.y} r="160"
        fill="url(#centerFade)"
      />
    </svg>
  )
}

export default function Problem() {
  const progress = Math.round((PROFILE_CARD.networkSize / PROFILE_CARD.networkTarget) * 100)

  return (
    <section className="relative overflow-hidden border-b border-zinc-100 bg-white px-4 pb-20 pt-24 sm:pb-28 sm:pt-32">

      {/* ── Network background ── */}
      <NetworkBackground />

      <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center text-center">

        {/* ── Profile card ── */}
        <div className="relative w-full pt-14">

          {/* Floating avatar */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-xl ring-2 ring-zinc-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PROFILE_CARD.avatarSrc}
                alt={PROFILE_CARD.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Card body */}
          <div className="rounded-2xl border border-zinc-200 bg-white/95 px-6 pb-6 pt-16 shadow-xl backdrop-blur-sm">

            <div className="flex justify-end">
              <span className="rounded-lg border border-zinc-200 px-3 py-1 text-[11px] font-medium text-zinc-500">
                Edit Profile
              </span>
            </div>

            <div className="mt-2 text-left">
              <p className="text-base font-bold text-zinc-900">{PROFILE_CARD.name}</p>
              <p className="text-xs text-zinc-400">{PROFILE_CARD.username}</p>
            </div>

            <p className="mt-2 text-left text-xs leading-relaxed text-zinc-500">
              {PROFILE_CARD.bio}
            </p>

            <div className="mt-3 flex gap-3 text-zinc-300">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M4 4l16 16M4 20L20 4" />
              </svg>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
              </svg>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
              </svg>
            </div>

            <div className="my-4 border-t border-zinc-100" />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Current rank</p>
                <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {PROFILE_CARD.currentRank}
                </span>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Next rank</p>
                <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                  ♦ {PROFILE_CARD.nextRank}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <div className="mb-1.5 flex justify-between text-[10px] text-zinc-400">
                <span>{PROFILE_CARD.networkSize} of {PROFILE_CARD.networkTarget} members</span>
                <span>{PROFILE_CARD.toNext} to {PROFILE_CARD.nextRank}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                <div className="h-full rounded-full bg-violet-500" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <p className="mt-4 text-center text-[10px] text-zinc-300">
              Member since {PROFILE_CARD.memberSince}
            </p>
          </div>
        </div>

        {/* ── Problem text ── */}
        <div className="mt-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-zinc-400">
            The Problem
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-snug text-zinc-900 sm:text-3xl">
            The greatest barrier to spreading the Gospel is not the mission — it is funding.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-500">
            We carry the funding burden so mission leaders can stay focused on prayer, ministry, and evangelism.
          </p>
        </div>

      </div>
    </section>
  )
}
