import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Pre-calculated node positions for the preview SVG (500 × 320)
const CENTER = { x: 250, y: 160 }
const L1 = [
  { x: 250, y: 70  },
  { x: 324, y: 113 },
  { x: 324, y: 207 },
  { x: 250, y: 250 },
  { x: 176, y: 207 },
  { x: 176, y: 113 },
]
const L2 = [
  { x: 210, y: 28  }, { x: 250, y: 18  }, { x: 290, y: 28  },
  { x: 385, y: 78  }, { x: 400, y: 120 },
  { x: 400, y: 196 }, { x: 388, y: 240 },
  { x: 290, y: 292 }, { x: 250, y: 302 },
  { x: 120, y: 240 }, { x: 106, y: 196 },
  { x: 106, y: 120 }, { x: 120, y: 78  },
]

interface NodeProps { cx: number; cy: number; r?: number; label?: string; isCenter?: boolean }

function Node({ cx, cy, r = 18, label, isCenter }: NodeProps) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={isCenter ? '#18181b' : '#fff'}
        stroke={isCenter ? '#18181b' : '#e4e4e7'}
        strokeWidth={isCenter ? 0 : 1.5}
      />
      {label && (
        <text
          x={cx}
          y={cy + 1}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={isCenter ? 9 : 8}
          fontWeight="600"
          fill={isCenter ? '#fff' : '#71717a'}
          fontFamily="system-ui, sans-serif"
        >
          {label}
        </text>
      )}
    </g>
  )
}

export default function NetworkPreview() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-zinc-400">Your branch</p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              Watch your network grow in real time
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-500">
              Every person you invite becomes a node in your branch. As they invite others, your network
              expands outward — and your rank, badges, and leaderboard position grow with it.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-sm text-zinc-600">
              {['See your full branch depth at a glance', 'Track each person you invited', 'Watch the network grow in real time', 'Click any node to view their profile'].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/network"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700 transition-colors"
            >
              Explore the network <ArrowRight size={14} />
            </Link>
          </div>

          {/* SVG preview */}
          <div className="relative flex items-center justify-center">
            <div className="w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm">
              <svg
                viewBox="0 0 500 320"
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* L2 edges */}
                {L2.map((n, i) => {
                  const parent = L1[Math.floor(i / 2.17)]
                  return (
                    <line
                      key={`l2e-${i}`}
                      x1={parent?.x ?? CENTER.x}
                      y1={parent?.y ?? CENTER.y}
                      x2={n.x}
                      y2={n.y}
                      stroke="#f4f4f5"
                      strokeWidth={1}
                    />
                  )
                })}
                {/* L1 edges */}
                {L1.map((n, i) => (
                  <line
                    key={`l1e-${i}`}
                    x1={CENTER.x}
                    y1={CENTER.y}
                    x2={n.x}
                    y2={n.y}
                    stroke="#e4e4e7"
                    strokeWidth={1.5}
                  />
                ))}
                {/* L2 nodes */}
                {L2.map((n, i) => (
                  <Node key={`l2n-${i}`} cx={n.x} cy={n.y} r={11} />
                ))}
                {/* L1 nodes */}
                {L1.map((n, i) => (
                  <Node key={`l1n-${i}`} cx={n.x} cy={n.y} r={16} label={['SM','MT','AK','DR','EL','JO'][i]} />
                ))}
                {/* Center node */}
                <Node cx={CENTER.x} cy={CENTER.y} r={24} label="You" isCenter />
              </svg>
            </div>
            {/* floating labels */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-zinc-100 bg-white px-4 py-1.5 shadow-sm">
              <p className="text-xs font-medium text-zinc-500">
                Sample network · <span className="text-zinc-900 font-semibold">47 members</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
