interface ProgressBarProps {
  value: number
  max?: number
  label?: string
  sublabel?: string
  color?: string
}

export default function ProgressBar({
  value,
  max = 100,
  label,
  sublabel,
  color = 'bg-blue-600',
}: ProgressBarProps) {
  const pct = Math.min(Math.max((value / max) * 100, 0), 100)

  return (
    <div className="w-full space-y-1.5">
      {(label || sublabel) && (
        <div className="flex items-center justify-between text-sm">
          {label && <span className="text-zinc-600">{label}</span>}
          {sublabel && <span className="font-medium text-zinc-900">{sublabel}</span>}
        </div>
      )}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
        <div
          className={`h-full rounded-full transition-all duration-500 ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
