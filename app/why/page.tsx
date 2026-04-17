import Link from 'next/link'

const scriptureBlocks = [
  {
    verse: 'Acts 6:2',
    quote: '“It would not be right for us to neglect the ministry of the word of God in order to wait on tables.”',
  },
  {
    verse: 'Acts 6:4',
    quote: '“But we will devote ourselves to prayer and to the ministry of the word.”',
  },
  {
    verse: 'Acts 6:7',
    quote:
      '“So the word of God spread. The number of disciples in Jerusalem increased rapidly...”',
  },
]

const applicationCards = [
  { title: 'Fund Bible Distribution', body: 'Send Scripture directly where it is needed most.' },
  { title: 'Support Evangelism', body: 'Keep evangelists equipped and provisioned to reach new people.' },
  { title: 'Help Plant Churches', body: 'Back leaders and planting teams on the front line.' },
]

export default function WhyPage() {
  return (
    <div className="bg-white px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        {/* Hero */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-zinc-400">
            WHY 1B PROJECT EXISTS
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-zinc-900 sm:text-4xl">
            We help carry the funding burden so others can stay focused on the mission.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            1B Project exists to strengthen the spread of the Gospel by helping fund Bible
            distribution, evangelism, and church planting through trusted partners.
          </p>
        </section>

        {/* Biblical why */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900">The Biblical Why</h2>
          <p className="text-sm leading-relaxed text-zinc-600">
            In Acts 6, the apostles made it clear that it was not right for them to neglect prayer
            and the ministry of the Word in order to handle practical distribution needs. So others
            were appointed to help carry that responsibility. The result was that the Word of God
            spread and the number of disciples increased rapidly.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            {scriptureBlocks.map((block) => (
              <article
                key={block.verse}
                className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4 text-sm leading-relaxed text-zinc-600"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  {block.verse}
                </p>
                <p className="mt-3 font-medium text-zinc-900">{block.quote}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Application */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-zinc-900">What That Means Today</h2>
          <p className="text-sm leading-relaxed text-zinc-600">
            The mission of Jesus still needs people fully devoted to prayer, the ministry of the
            Word, evangelism, discipleship, and church planting. But too often, funding becomes the
            barrier that slows the mission down. 1B Project exists to help carry that burden so the
            Gospel can keep moving.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {applicationCards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-zinc-100 bg-white p-4 text-sm leading-relaxed text-zinc-600 shadow-sm"
              >
                <p className="text-lg font-semibold text-zinc-900">{card.title}</p>
                <p className="mt-2">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section>
          <div className="rounded-2xl border border-zinc-100 bg-zinc-950 px-6 py-6 text-center text-white">
            <p className="text-2xl font-semibold">The greatest barrier to spreading the Gospel is not the mission — it is funding.</p>
            <p className="mt-2 text-sm text-white/80">
              We exist to help solve that problem so the Gospel can go farther.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="space-y-4 text-center">
          <h2 className="text-2xl font-semibold text-zinc-900">Join the mission</h2>
          <p className="text-sm leading-relaxed text-zinc-600">
            Build your profile. Grow your network. Help fund the Gospel through 1B Project.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/profile"
              className="flex items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-zinc-700"
            >
              Create Your Profile
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center rounded-full border border-zinc-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
