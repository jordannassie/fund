'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '/',            label: 'Home' },
  { href: '/network',     label: 'Network' },
  { href: '/leaderboard', label: 'Leaderboard' },
  { href: '/profile',     label: 'Profile' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">
            1B
          </span>
          <span className="font-semibold text-zinc-900 tracking-tight">1B Project</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 sm:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-zinc-100 text-zinc-900'
                    : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-2">
          <Link
            href="/profile"
            className="hidden rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white hover:bg-zinc-700 transition-colors sm:block"
          >
            Join
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 sm:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-zinc-100 bg-white px-4 pb-4 sm:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="/profile"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-zinc-900 px-4 py-2 text-center text-sm font-medium text-white"
            >
              Join the Network
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
