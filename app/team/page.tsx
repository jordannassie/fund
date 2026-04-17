import Link from 'next/link'

const boardSeats = [
  {
    id: 1,
    name: 'Open Board Seat',
    position: 'Founder / Vision',
    bio: 'Seeking the founding leader who carries the mission clarity and long-term Gospel vision for 1B Project.',
    avatar: null,
    initials: 'FV',
  },
  {
    id: 2,
    name: 'Open Board Seat',
    position: 'Board Chair',
    bio: 'Seeking a seasoned governance leader with experience overseeing high-integrity organizations.',
    avatar: null,
    initials: 'BC',
  },
  {
    id: 3,
    name: 'Open Board Seat',
    position: 'Executive Finance',
    bio: 'Seeking a CFO-level operator with deep stewardship and financial accountability experience.',
    avatar: null,
    initials: 'EF',
  },
  {
    id: 4,
    name: 'Open Board Seat',
    position: 'Ministry Leader',
    bio: 'Proven leader with experience in evangelism, missions, church planting, or Bible distribution.',
    avatar: null,
    initials: 'ML',
  },
  {
    id: 5,
    name: 'Open Board Seat',
    position: 'Strategic Partnerships',
    bio: 'Connector with strong networks, business acumen, and a heart for the global Gospel mission.',
    avatar: null,
    initials: 'SP',
  },
  {
    id: 6,
    name: 'Open Board Seat',
    position: 'Legal / Governance',
    bio: 'Legal or compliance leader who understands structure, oversight, and responsible governance.',
    avatar: null,
    initials: 'LG',
  },
]

const values = [
  { title: 'Stewardship', description: 'We treat every dollar with seriousness and care.' },
  { title: 'Integrity', description: 'Trust is foundational to this mission.' },
  { title: 'Accountability', description: 'Strong governance protects vision and mission.' },
  { title: 'Gospel Focus', description: 'All resources exist to help move the Gospel farther.' },
]

export default function TeamPage() {
  return (
    <main className="bg-white">

      {/* ── Hero ── */}
      <section className="border-b border-zinc-100 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-zinc-400">
            Leadership
          </p>
          <div className="mt-4 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <h1 className="max-w-2xl text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl">
              Board of Directors
            </h1>
            <Link
              href="mailto:hello@1bproject.org?subject=Join%20Our%20Board"
              className="flex-shrink-0 rounded-full bg-zinc-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-zinc-700"
            >
              Join Our Board
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-500">
            1B Project is building a high-trust leadership team of ministry leaders, operators,
            executives, and financial minds committed to helping fund the spread of the Gospel globally.
            We are actively recruiting serious, mission-aligned leaders for all seats below.
          </p>
        </div>
      </section>

      {/* ── Board seats ── */}
      <section className="border-b border-zinc-100 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {boardSeats.map((seat) => (
              <article key={seat.id} className="group flex flex-col">

                {/* Photo / placeholder */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-100">
                  {seat.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={seat.avatar}
                      alt={seat.name}
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-dashed border-zinc-300 bg-white text-lg font-bold tracking-wide text-zinc-400">
                        {seat.initials}
                      </div>
                    </div>
                  )}
                  {/* Recruiting badge */}
                  <span className="absolute right-3 top-3 rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-zinc-500 shadow-sm">
                    Recruiting
                  </span>
                </div>

                {/* Social icons */}
                <div className="mt-4 flex gap-3 text-zinc-300">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.7 5.5 4.3 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                  </svg>
                </div>

                {/* Position label + underline */}
                <div className="mt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-400">
                    {seat.position}
                  </p>
                  <div className="mt-1.5 h-px w-10 bg-zinc-900" />
                </div>

                {/* Name */}
                <p className="mt-3 text-lg font-bold text-zinc-900">{seat.name}</p>

                {/* Bio */}
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">{seat.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why leadership matters ── */}
      <section className="border-b border-zinc-100 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-24">
            <div className="flex-shrink-0 lg:w-64">
              <h2 className="text-3xl font-bold leading-tight text-zinc-900">
                Why Leadership Matters
              </h2>
            </div>
            <div className="space-y-5 text-sm leading-relaxed text-zinc-600">
              <p>
                To move a billion-dollar Gospel vision with integrity, 1B Project needs trusted
                leaders who bring wisdom, stewardship, accountability, and operational excellence.
              </p>
              <p>
                Strong leadership helps ensure funds are managed well, partners are vetted carefully,
                and the mission moves forward with credibility. Every seat on this board carries real
                weight.
              </p>
              <div className="grid gap-4 pt-2 sm:grid-cols-3">
                {['Stewardship', 'Accountability', 'Mission Focus'].map((pillar) => (
                  <div key={pillar} className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-400">{pillar}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who we're looking for ── */}
      <section className="border-b border-zinc-100 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-zinc-900">Who We&apos;re Looking For</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500">
            We are seeking serious, mission-aligned leaders for every seat on our board.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { role: 'Board Members', desc: 'Governance, strategy, and accountability-focused executives.' },
              { role: 'Finance Leaders', desc: 'CFOs, stewards, and investment-minded operators.' },
              { role: 'Ministry Leaders', desc: 'Evangelism, missions, church planting, or Bible distribution experts.' },
              { role: 'Company Presidents', desc: 'Builders who scale systems, teams, and organizations with excellence.' },
              { role: 'Strategic Advisors', desc: 'People with strong networks, business acumen, and Gospel commitment.' },
              { role: 'Legal / Governance', desc: 'Leaders who understand structure, compliance, and responsible oversight.' },
            ].map((item) => (
              <div key={item.role} className="border-t-2 border-zinc-900 pt-4">
                <p className="font-bold text-zinc-900">{item.role}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-zinc-900/10 bg-zinc-950 px-8 py-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Join Our Board</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60">
                If you are an experienced executive, founder, operator, ministry leader, or financial
                steward who wants to help shape a trusted Gospel funding movement, we would love to
                hear from you.
              </p>
            </div>
            <Link
              href="mailto:hello@1bproject.org?subject=Join%20Our%20Board"
              className="flex-shrink-0 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-900 transition hover:bg-zinc-200"
            >
              Join Our Board
            </Link>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="border-t border-zinc-100 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-zinc-900">How We Lead</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="border-t-2 border-zinc-900 pt-4">
                <p className="font-bold text-zinc-900">{v.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Back to home ── */}
      <div className="border-t border-zinc-100 px-6 py-8 text-center">
        <Link href="/" className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400 hover:text-zinc-900 transition">
          ← Back to Home
        </Link>
      </div>

    </main>
  )
}
