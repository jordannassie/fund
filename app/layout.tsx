import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/nav/Navbar'

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
        <footer className="border-t border-zinc-100 py-8 text-center text-xs text-zinc-400">
          <div className="mx-auto max-w-6xl px-4">
            <p>© {new Date().getFullYear()} 1B Project. All rights reserved.</p>
            <p className="mt-1 text-zinc-300">One fund. One mission. One billion.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
