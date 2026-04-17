const STEPS = [
  { n: '01', title: 'Create your profile',  body: 'Set up your identity in the network. Tell your story and set your intention.' },
  { n: '02', title: 'Join the network',     body: 'Connect to the movement. Every member is part of a single, unified mission.' },
  { n: '03', title: 'Invite others',        body: 'Grow your branch by inviting people. Each person you invite becomes part of your network.' },
  { n: '04', title: 'Grow your branch',     body: 'Watch your network expand. See your branch grow as the people you invite do the same.' },
  { n: '05', title: 'Earn badges',          body: 'Unlock badges and climb ranks as your network and giving grow. Compete on the leaderboard.' },
]

export default function Vision() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-24">
          {/* Left */}
          <div className="lg:sticky lg:top-20">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">The vision</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
              One fund. One movement.{' '}
              <span className="text-zinc-400">A billion dollars raised.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-500">
              The 1B Project is a social fundraising network where every member contributes to a single
              Gospel Fund. You don&apos;t need to give the most — you just need to grow the most.
              Build your network. Move the mission forward.
            </p>
            <div className="mt-8 rounded-2xl border border-zinc-100 bg-zinc-50 p-5">
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">Current progress</p>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-zinc-200">
                <div className="h-full rounded-full bg-zinc-900" style={{ width: '0.5%' }} />
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="font-semibold text-zinc-900">$4.82M raised</span>
                <span className="text-zinc-400">Goal: $1,000,000,000</span>
              </div>
            </div>
          </div>

          {/* Right — step list */}
          <div className="flex flex-col gap-6">
            {STEPS.map((step) => (
              <div key={step.n} className="flex gap-5">
                <div className="flex-shrink-0 mt-0.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-xs font-bold text-zinc-400">
                    {step.n}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-zinc-900">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-500">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
