import Image from 'next/image'

interface AvatarProps {
  src?: string
  initials: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  ring?: boolean
  ringColor?: string
}

const SIZE = {
  xs: { px: 28,  text: 'text-[10px]' },
  sm: { px: 36,  text: 'text-xs'     },
  md: { px: 44,  text: 'text-sm'     },
  lg: { px: 72,  text: 'text-lg'     },
  xl: { px: 96,  text: 'text-2xl'    },
}

export default function Avatar({ src, initials, size = 'md', className = '', ring = false, ringColor = 'ring-white' }: AvatarProps) {
  const { px, text } = SIZE[size]

  const base = `relative flex-shrink-0 overflow-hidden rounded-full bg-zinc-100 ${ring ? `ring-2 ${ringColor}` : ''} ${className}`

  return (
    <div className={base} style={{ width: px, height: px }}>
      {src ? (
        <Image
          src={src}
          alt={initials}
          fill
          className="object-cover"
          sizes={`${px}px`}
        />
      ) : (
        <div className={`flex h-full w-full items-center justify-center bg-zinc-200 font-semibold text-zinc-600 ${text}`}>
          {initials}
        </div>
      )}
    </div>
  )
}
