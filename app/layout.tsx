import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/nav/Navbar'
import Link from 'next/link'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export const metadata: Metadata = {
  title: '1B Project — Build your network. Move the mission.',
  description:
    'A social fundraising network with visible network growth. Create a profile, invite others, earn badges, and help raise toward a single $1B Gospel Fund.',
  openGraph: {
    title: '1B Project',
    description: 'Build your profile. Grow your network. Help raise $1B.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-white text-zinc-900">
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <footer className="border-t border-zinc-100 py-8 text-xs text-zinc-400">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              <div>
                <p>© {new Date().getFullYear()} 1B Project. All rights reserved.</p>
                <p className="mt-0.5 text-zinc-300">One fund. One mission. One billion.</p>
              </div>
              <nav className="flex items-center gap-4 text-zinc-400">
                <Link href="/" className="hover:text-zinc-700 transition-colors">
                  Home
                </Link>
                <Link href="/network" className="hover:text-zinc-700 transition-colors">
                  Network
                </Link>
                <Link href="/leaderboard" className="hover:text-zinc-700 transition-colors">
                  Leaderboard
                </Link>
                <Link href="/profile" className="hover:text-zinc-700 transition-colors">
                  Profile
                </Link>
                <Link href="/why" className="hover:text-zinc-700 transition-colors">
                  Why
                </Link>
                <Link
                  href="/admin"
                  className="flex items-center gap-1 rounded-md border border-zinc-200 px-2 py-0.5 text-zinc-500 hover:border-zinc-300 hover:text-zinc-700 transition-colors"
                >
                  <span className="text-[10px] font-bold">⚙</span> Admin
                </Link>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
