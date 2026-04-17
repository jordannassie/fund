import Link from 'next/link'
import { ArrowRight, Users } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-24">
      {/* Subtle grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        {/* Eyebrow */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-500">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          12,847 members building together
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl sm:leading-tight">
          Join the 1B Project
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-zinc-500">
          Build your profile. Grow your network. Earn badges.{' '}
          <br className="hidden sm:block" />
          Help move the movement toward <span className="font-medium text-zinc-900">$1 Billion</span>.
        </p>

        {/* CTAs */}
        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/profile"
            className="flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-zinc-700 transition-colors"
          >
            Create Your Profile <ArrowRight size={16} />
          </Link>
          <Link
            href="/network"
            className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 transition-colors"
          >
            <Users size={15} /> See the Network
          </Link>
        </div>
      </div>
    </section>
  )
}
