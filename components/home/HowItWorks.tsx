const STEPS = [
  { step: 1, title: 'Create your profile',  desc: 'Sign up and build your profile. Add a photo, bio, and set your network name.' },
  { step: 2, title: 'Join the network',     desc: 'Connect to the 1B Project network. Your profile goes live and you appear on the map.' },
  { step: 3, title: 'Invite people',        desc: 'Share your personal invite link. Every person who joins through you becomes part of your branch.' },
  { step: 4, title: 'Grow your branch',     desc: 'Your branch grows as your invites invite others. Track depth, size, and total network giving.' },
  { step: 5, title: 'Earn badges & climb',  desc: 'Unlock badges as milestones hit. Climb from Starter to Legacy. Compete on the leaderboard.' },
]

export default function HowItWorks() {
  return (
    <section className="bg-zinc-50/50 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">Simple by design</p>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">How it works</h2>
        </div>

        {/* Steps grid */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-zinc-200 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map(({ step, title, desc }) => (
              <div key={step} className="relative flex flex-col">
                {/* Step number bubble */}
                <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white border border-zinc-200 shadow-sm">
                  <span className="text-sm font-bold text-zinc-900">{step}</span>
                </div>
                <h3 className="mb-2 font-semibold text-zinc-900">{title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
