import Link from 'next/link'

const leadershipPillars = [
  { title: 'Stewardship', body: 'We manage every dollar with seriousness and care.' },
  { title: 'Accountability', body: 'Governance protects the vision and the mission.' },
  { title: 'Mission Focus', body: 'We keep everything aligned with the Gospel.' },
]

const leadershipStructure = [
  {
    title: 'Founder / Vision',
    description: 'Leading the movement with clarity, faithfulness, and world-class ambition.',
  },
  {
    title: 'Executive Leadership',
    description: 'Operational partners who keep systems running with excellence.',
  },
  {
    title: 'Board of Directors',
    description:
      'Seeking open board seats for leaders with governance, financial, and ministry stewardship experience.',
  },
  {
    title: 'Advisory Leaders',
    description: 'Advisors who bring networks, counsel, and strategic accountability.',
  },
]

const idealLeaders = [
  {
    title: 'Board Members',
    body: 'Governance, strategy, and accountability-focused executives.',
  },
  {
    title: 'Finance Leaders',
    body: 'CFOs, stewards, and investment-minded operators.',
  },
  {
    title: 'Ministry Leaders',
    body: 'Evangelism, missions, church planting, or Bible distribution experts.',
  },
  {
    title: 'Company Presidents / Operators',
    body: 'Builders who scale systems, teams, and organizations with excellence.',
  },
  {
    title: 'Strategic Advisors',
    body: 'People with strong networks, business acumen, and Gospel commitment.',
  },
  {
    title: 'Legal / Governance Advisors',
    body: 'Leaders who understand structure, compliance, and responsible oversight.',
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
    <main className="bg-white px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        {/* Hero */}
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-zinc-400">
            LEADERSHIP
          </p>
          <h1 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
            Built to fund the Gospel with trust, wisdom, and world-class leadership.
          </h1>
          <p className="text-sm leading-relaxed text-zinc-600">
            1B Project is building a high-trust leadership team of ministry leaders, operators,
            executives, and financial minds committed to helping fund the spread of the Gospel globally.
          </p>
          <div className="flex flex-col gap-3 pt-2 text-xs uppercase tracking-[0.3em] sm:flex-row">
            <Link
              href="mailto:hello@1bproject.org?subject=Join%20Our%20Board"
              className="flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-700"
            >
              Join Our Board
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center rounded-full border border-zinc-900 px-6 py-3 text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
            >
              Back to Home
            </Link>
          </div>
        </section>

        {/* Why Leadership */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900">Why Leadership Matters</h2>
          <p className="text-sm leading-relaxed text-zinc-600">
            To move a billion-dollar Gospel vision with integrity, 1B Project needs trusted leaders
            who bring wisdom, stewardship, accountability, and operational excellence. Strong
            leadership helps ensure funds are managed well, partners are vetted carefully, and the
            mission moves forward with credibility.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {leadershipPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4 text-sm leading-relaxed text-zinc-600"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  {pillar.title}
                </p>
                <p className="mt-2 text-zinc-900">{pillar.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Leadership Structure */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900">Leadership Structure</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {leadershipStructure.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-zinc-100 bg-white p-5 text-sm leading-relaxed text-zinc-600 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{item.title}</p>
                <p className="mt-2 text-zinc-900">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Ideal Leaders */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900">Who We’re Looking For</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {idealLeaders.map((role) => (
              <article
                key={role.title}
                className="rounded-2xl border border-zinc-100 bg-white p-4 text-sm leading-relaxed text-zinc-600 shadow-sm"
              >
                <p className="text-lg font-semibold text-zinc-900">{role.title}</p>
                <p className="mt-2">{role.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Strip */}
        <section className="space-y-4 rounded-3xl border border-zinc-900/10 bg-zinc-950 px-6 py-8 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-semibold">Join Our Board</h2>
          <p className="text-sm leading-relaxed text-white/70">
            If you are an experienced executive, founder, operator, ministry leader, or financial steward
            who wants to help shape a trusted Gospel funding movement, we would love to hear from you.
          </p>
          <Link
            href="mailto:hello@1bproject.org?subject=Join%20Our%20Board"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-900 transition hover:bg-zinc-200"
          >
            Join Our Board
          </Link>
          <p className="text-xs text-white/60">
            We are seeking serious, mission-aligned leaders who can help strengthen governance,
            stewardship, and long-term impact.
          </p>
        </section>

        {/* Values */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900">How We Lead</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-zinc-100 bg-white p-4 text-sm leading-relaxed text-zinc-600 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{value.title}</p>
                <p className="mt-2">{value.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
