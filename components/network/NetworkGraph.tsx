'use client'

import { useState, useRef } from 'react'
import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react'
import { NETWORK_NODES } from '@/data/sample'
import type { NetworkNode } from '@/types'
import NodePanel from './NodePanel'

const VIEWBOX_W = 850
const VIEWBOX_H = 580

export default function NetworkGraph() {
  const [selected, setSelected] = useState<NetworkNode | null>(NETWORK_NODES[0])
  const [zoom, setZoom] = useState(1)
  const svgRef = useRef<SVGSVGElement>(null)

  const handleZoomIn  = () => setZoom(z => Math.min(z + 0.25, 2.5))
  const handleZoomOut = () => setZoom(z => Math.max(z - 0.25, 0.5))
  const handleReset   = () => setZoom(1)

  const edges = NETWORK_NODES.filter(n => n.parentId !== null).map(n => {
    const parent = NETWORK_NODES.find(p => p.id === n.parentId)!
    return { from: parent, to: n }
  })

  function edgeColor(to: NetworkNode): string {
    return to.level === 1 ? '#e4e4e7' : '#f4f4f5'
  }

  function nodeRadius(node: NetworkNode): number {
    if (node.level === 0) return 26
    if (node.level === 1) return 20
    return 13
  }

  const isSelected = (node: NetworkNode) => selected?.id === node.id

  return (
    <div className="relative flex h-full min-h-[520px] w-full overflow-hidden rounded-2xl border border-zinc-100 bg-white">
      {/* SVG canvas */}
      <div className="flex-1 overflow-hidden" onClick={() => setSelected(null)}>
        <svg
          ref={svgRef}
          viewBox={`${(VIEWBOX_W * (1 - zoom)) / 2} ${(VIEWBOX_H * (1 - zoom)) / 2} ${VIEWBOX_W / zoom} ${VIEWBOX_H / zoom}`}
          className="h-full w-full transition-all duration-300"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Clip paths for circular photos */}
          <defs>
            {NETWORK_NODES.map(node => {
              const r = nodeRadius(node)
              return (
                <clipPath key={`clip-${node.id}`} id={`clip-${node.id}`}>
                  <circle cx={node.x} cy={node.y} r={r - 1.5} />
                </clipPath>
              )
            })}
          </defs>

          {/* Edges */}
          {edges.map((edge, i) => (
            <line
              key={`edge-${i}`}
              x1={edge.from.x}
              y1={edge.from.y}
              x2={edge.to.x}
              y2={edge.to.y}
              stroke={edgeColor(edge.to)}
              strokeWidth={edge.to.level === 1 ? 1.5 : 1}
              strokeLinecap="round"
            />
          ))}

          {/* Nodes — L2 first so center renders on top */}
          {[...NETWORK_NODES].reverse().map((node) => {
            const r = nodeRadius(node)
            const sel = isSelected(node)
            const isCenter = node.level === 0

            return (
              <g
                key={node.id}
                onClick={(e) => { e.stopPropagation(); setSelected(node) }}
                className="cursor-pointer"
              >
                {/* Selection ring */}
                {sel && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={r + 5}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth={1.5}
                    opacity={0.5}
                  />
                )}

                {/* Background circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={r}
                  fill={isCenter ? '#18181b' : '#fff'}
                  stroke={sel ? '#3b82f6' : isCenter ? '#18181b' : '#d4d4d8'}
                  strokeWidth={sel ? 2 : 1.5}
                />

                {/* Photo — L0 and L1 show full photo, L2 show smaller */}
                {node.level < 2 ? (
                  <image
                    href={node.avatar}
                    x={node.x - r + 1.5}
                    y={node.y - r + 1.5}
                    width={(r - 1.5) * 2}
                    height={(r - 1.5) * 2}
                    clipPath={`url(#clip-${node.id})`}
                    preserveAspectRatio="xMidYMid slice"
                  />
                ) : (
                  // L2: small photo
                  <image
                    href={node.avatar}
                    x={node.x - r + 1}
                    y={node.y - r + 1}
                    width={(r - 1) * 2}
                    height={(r - 1) * 2}
                    clipPath={`url(#clip-${node.id})`}
                    preserveAspectRatio="xMidYMid slice"
                    opacity={0.85}
                  />
                )}

                {/* "You" label under center node */}
                {isCenter && (
                  <text
                    x={node.x}
                    y={node.y + r + 12}
                    textAnchor="middle"
                    fontSize={9}
                    fontWeight="600"
                    fill="#3b82f6"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    className="select-none pointer-events-none"
                  >
                    You
                  </text>
                )}
              </g>
            )
          })}
        </svg>
      </div>

      {/* Zoom controls */}
      <div className="absolute bottom-4 left-4 flex flex-col gap-1.5">
        <button
          onClick={handleZoomIn}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-500 shadow-sm hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
        >
          <ZoomIn size={14} />
        </button>
        <button
          onClick={handleZoomOut}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-500 shadow-sm hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
        >
          <ZoomOut size={14} />
        </button>
        <button
          onClick={handleReset}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-500 shadow-sm hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
        >
          <Maximize2 size={13} />
        </button>
      </div>

      {/* Zoom level pill */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <span className="rounded-full border border-zinc-100 bg-white px-3 py-1 text-xs font-medium text-zinc-400 shadow-sm">
          {Math.round(zoom * 100)}%
        </span>
      </div>

      {/* Node panel */}
      {selected && (
        <div className="pointer-events-none absolute right-4 top-4 z-10">
          <NodePanel node={selected} onClose={() => setSelected(null)} />
        </div>
      )}

      {!selected && (
        <div className="pointer-events-none absolute bottom-4 right-4">
          <p className="rounded-full border border-zinc-100 bg-white px-3 py-1 text-xs text-zinc-400 shadow-sm">
            Click any node to view profile
          </p>
        </div>
      )}
    </div>
  )
}
