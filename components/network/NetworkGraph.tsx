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

  // Build edge list from parentId relationships
  const edges = NETWORK_NODES.filter(n => n.parentId !== null).map(n => {
    const parent = NETWORK_NODES.find(p => p.id === n.parentId)!
    return { from: parent, to: n }
  })

  function nodeColor(node: NetworkNode): { fill: string; stroke: string; text: string } {
    if (node.level === 0) return { fill: '#18181b', stroke: '#18181b', text: '#ffffff' }
    if (node.level === 1) return { fill: '#ffffff', stroke: '#d4d4d8', text: '#3f3f46' }
    return { fill: '#fafafa', stroke: '#e4e4e7', text: '#a1a1aa' }
  }

  function nodeRadius(node: NetworkNode): number {
    if (node.level === 0) return 26
    if (node.level === 1) return 20
    return 14
  }

  function edgeColor(to: NetworkNode): string {
    if (to.level === 1) return '#e4e4e7'
    return '#f4f4f5'
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

          {/* Nodes (render L2 first, then L1, then center so center is on top) */}
          {[...NETWORK_NODES].reverse().map((node) => {
            const r = nodeRadius(node)
            const colors = nodeColor(node)
            const sel = isSelected(node)

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
                    opacity={0.6}
                  />
                )}
                {/* Node circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={r}
                  fill={colors.fill}
                  stroke={sel ? '#3b82f6' : colors.stroke}
                  strokeWidth={sel ? 2 : 1.5}
                />
                {/* Initials (L0 + L1 only) */}
                {node.level < 2 && (
                  <text
                    x={node.x}
                    y={node.y + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={node.level === 0 ? 10 : 8}
                    fontWeight="700"
                    fill={colors.text}
                    fontFamily="system-ui, -apple-system, sans-serif"
                    className="select-none pointer-events-none"
                  >
                    {node.initials}
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

      {/* Click hint */}
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
