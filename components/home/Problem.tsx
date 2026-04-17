const PROFILE_CARD = {
  name: 'Jordan Nassie',
  username: '@jordannassie',
  bio: 'Building something that matters. Join the 1B Project and grow your network.',
  avatarSrc: 'https://i.pravatar.cc/150?img=11',
  currentRank: 'Connector',
  nextRank: 'Multiplier',
  networkSize: 47,
  networkTarget: 50,
  toNext: 3,
  memberSince: 'Jan 10, 2025',
}

export default function Problem() {
  const progress = Math.round((PROFILE_CARD.networkSize / PROFILE_CARD.networkTarget) * 100)

  return (
    <section className="border-b border-zinc-100 bg-white px-4 py-20 sm:py-28">
      <div className="mx-auto flex max-w-lg flex-col items-center text-center">

        {/* ── Profile card ── */}
        <div className="w-full rounded-2xl border border-zinc-200 bg-white px-6 py-6 shadow-lg">

          {/* Top row: avatar + edit button */}
          <div className="flex items-start justify-between">
            <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-zinc-100 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={PROFILE_CARD.avatarSrc}
                alt={PROFILE_CARD.name}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="rounded-lg border border-zinc-200 px-3 py-1 text-[11px] font-medium text-zinc-500">
              Edit Profile
            </span>
          </div>

          {/* Name + handle */}
          <div className="mt-3 text-left">
            <p className="text-base font-bold text-zinc-900">{PROFILE_CARD.name}</p>
            <p className="text-xs text-zinc-400">{PROFILE_CARD.username}</p>
          </div>

          {/* Bio */}
          <p className="mt-2 text-left text-xs leading-relaxed text-zinc-500">
            {PROFILE_CARD.bio}
          </p>

          {/* Social icons */}
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

          {/* Divider */}
          <div className="my-4 border-t border-zinc-100" />

          {/* Rank pills */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                Current rank
              </p>
              <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {PROFILE_CARD.currentRank}
              </span>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">
                Next rank
              </p>
              <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">
                ♦ {PROFILE_CARD.nextRank}
              </span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="mb-1.5 flex justify-between text-[10px] text-zinc-400">
              <span>{PROFILE_CARD.networkSize} of {PROFILE_CARD.networkTarget} members</span>
              <span>{PROFILE_CARD.toNext} to {PROFILE_CARD.nextRank}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
              <div
                className="h-full rounded-full bg-violet-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Member since */}
          <p className="mt-4 text-[10px] text-zinc-300">Member since {PROFILE_CARD.memberSince}</p>
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
