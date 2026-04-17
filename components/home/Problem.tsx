const PROFILE_CARD = {
  name: 'Your Profile',
  status: 'Funding the Mission',
  initials: 'JP',
  stats: [
    { label: 'Funding Raised',  value: '$2.5k'     },
    { label: 'Badge Reward',    value: 'Diamond ♦'  },
    { label: 'Network Impact',  value: '47 Members' },
  ],
  footer: 'Your profile helps solve the funding problem and move the Gospel forward.',
}

export default function Problem() {
  return (
    <section
      className="relative overflow-hidden border-b border-zinc-100"
      style={{ minHeight: '560px' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      {/* Overlay — heavier at bottom so text pops */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />

      {/* Bottom content row */}
      <div className="absolute inset-x-0 bottom-0 px-4 pb-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-end gap-6 sm:flex-row sm:items-end sm:justify-between">

          {/* Left — problem text */}
          <div className="max-w-xl text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/60">
              THE PROBLEM
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-snug text-white sm:text-3xl">
              The greatest barrier to spreading the Gospel is not the mission — it is funding.
            </h2>
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.3em] text-white/70">
              We carry the funding burden so mission leaders can stay focused on prayer, ministry, and evangelism.
            </p>
          </div>

          {/* Right — profile impact card */}
          <div className="w-full flex-shrink-0 sm:w-64">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700 text-xs font-bold text-white">
                    {PROFILE_CARD.initials}
                  </div>
                  <span className="text-sm font-semibold text-white">{PROFILE_CARD.name}</span>
                </div>
                <span className="rounded-full border border-emerald-400/40 bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                  {PROFILE_CARD.status}
                </span>
              </div>

              {/* Divider */}
              <div className="my-3 border-t border-white/10" />

              {/* Stats */}
              <div className="space-y-2">
                {PROFILE_CARD.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between">
                    <span className="text-[11px] text-white/60">{stat.label}</span>
                    <span className="text-[11px] font-semibold text-white">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-3 border-t border-white/10" />

              {/* Footer */}
              <p className="text-[10px] leading-relaxed text-white/50">
                {PROFILE_CARD.footer}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  )
}
