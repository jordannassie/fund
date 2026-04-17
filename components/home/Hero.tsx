import Link from 'next/link'
import { ArrowRight, Users } from 'lucide-react'

const VISION_VIDEO =
  'https://cdn.coverr.co/videos/coverr-the-device-2t8x9cw9f3qtgnqos/1080p.mp4'

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

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
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
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
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

          {/* Vision video */}
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-zinc-100 bg-zinc-900 shadow-2xl shadow-zinc-900/10">
            <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/80">
              <span>Vision</span>
              <span>Live</span>
            </div>
            <video
              className="h-[300px] w-full object-cover"
              src={VISION_VIDEO}
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1521790366325-4e358e3f4f85?auto=format&fit=crop&w=900&q=60"
            />
            <div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent px-5 py-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/80">The Movement</p>
              <p className="mt-2 text-lg font-semibold">Real profiles. Visible growth. Gospel fund.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
