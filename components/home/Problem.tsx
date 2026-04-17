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
    <section className="relative overflow-hidden border-b border-zinc-100">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      {/* Dark overlay — heavier at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/35" />

      {/* Centered content — flows naturally so nothing gets clipped */}
      <div className="relative flex flex-col items-center px-4 pt-16 pb-14 sm:pt-20 sm:pb-16">

        {/* ── Profile card ── */}
        <div className="w-full max-w-xs">
          <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-5 shadow-2xl backdrop-blur-md">

            {/* Avatar */}
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 overflow-hidden rounded-full ring-2 ring-white/30 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PROFILE_CARD.avatarSrc}
                  alt={PROFILE_CARD.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Edit Profile button — purely cosmetic here */}
              <div className="mt-3 flex w-full items-start justify-between">
                <div />
                <span className="rounded-lg border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/80">
                  Edit Profile
                </span>
              </div>

              {/* Name + username */}
              <div className="mt-1 w-full text-left">
                <p className="text-base font-bold leading-tight text-white">{PROFILE_CARD.name}</p>
                <p className="text-xs text-white/50">{PROFILE_CARD.username}</p>
              </div>

              {/* Bio */}
              <p className="mt-2 w-full text-left text-xs leading-relaxed text-white/70">
                {PROFILE_CARD.bio}
              </p>

              {/* Social icons placeholder */}
              <div className="mt-3 flex w-full gap-3 text-white/40">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="4"/><path d="M4 4l4 4M16 4l-4 4M4 20l4-4M16 20l-4-4"/></svg>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
              </div>
            </div>

            {/* Divider */}
            <div className="my-3 border-t border-white/10" />

            {/* Rank row */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40">Current rank</p>
                <span className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {PROFILE_CARD.currentRank}
                </span>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-widest text-white/40">Next rank</p>
                <span className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-300">
                  ♦ {PROFILE_CARD.nextRank}
                </span>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-3">
              <div className="flex justify-between text-[10px] text-white/50 mb-1">
                <span>{PROFILE_CARD.networkSize} of {PROFILE_CARD.networkTarget} members</span>
                <span>{PROFILE_CARD.toNext} to {PROFILE_CARD.nextRank}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-violet-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Member since */}
            <p className="mt-3 text-[10px] text-white/30">Member since {PROFILE_CARD.memberSince}</p>
          </div>
        </div>

        {/* ── Problem text ── */}
        <div className="mt-8 max-w-xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.55em] text-white/50">
            THE PROBLEM
          </p>
          <h2 className="mt-3 text-2xl font-semibold leading-snug text-white sm:text-3xl">
            The greatest barrier to spreading the Gospel is not the mission — it is funding.
          </h2>
          <p className="mt-3 text-xs font-medium uppercase tracking-[0.3em] text-white/60">
            We carry the funding burden so mission leaders can stay focused on prayer, ministry, and evangelism.
          </p>
        </div>
      </div>

    </section>
  )
}
