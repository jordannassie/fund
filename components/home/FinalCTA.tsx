import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="bg-zinc-900 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
          One decision. One network.
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Start building your network
        </h2>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-zinc-400">
          Join the 1B Project today. Build your branch, earn your badges, and help move the
          movement toward $1 billion.
        </p>
        <Link
          href="/profile"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-100 transition-colors"
        >
          Create Your Profile <ArrowRight size={16} />
        </Link>

        {/* Social proof */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="flex -space-x-2">
            {['AC','CO','NP','DO','FA','SW','YA','HK'].map((initials) => (
              <div
                key={initials}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-zinc-900 bg-zinc-700 text-xs font-semibold text-white"
              >
                {initials}
              </div>
            ))}
          </div>
          <p className="text-sm text-zinc-500">
            <span className="text-zinc-300 font-medium">12,847 members</span> already building
          </p>
        </div>
      </div>
    </section>
  )
}
