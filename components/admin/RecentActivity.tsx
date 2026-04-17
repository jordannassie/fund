import { ADMIN_RECENT_ACTIVITY } from '@/data/sample'
import Avatar from '@/components/ui/Avatar'
import { Gift, UserPlus, Award } from 'lucide-react'

const TYPE_ICON = {
  badge:  { icon: Award,    color: 'text-amber-600',   bg: 'bg-amber-50'   },
  join:   { icon: UserPlus, color: 'text-blue-600',    bg: 'bg-blue-50'    },
  invite: { icon: Gift,     color: 'text-emerald-600', bg: 'bg-emerald-50' },
}

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-white shadow-sm">
      <div className="border-b border-zinc-100 px-5 py-4">
        <h2 className="font-semibold text-zinc-900">Recent Activity</h2>
      </div>
      <div className="divide-y divide-zinc-50">
        {ADMIN_RECENT_ACTIVITY.map((item, i) => {
          const { icon: Icon, color, bg } = TYPE_ICON[item.type as keyof typeof TYPE_ICON]
          return (
            <div key={i} className="flex items-center gap-3 px-5 py-3.5">
              <Avatar src={item.avatar} initials={item.user.slice(0,2).toUpperCase()} size="sm" />
              <div className="min-w-0 flex-1">
                <p className="text-sm text-zinc-900">
                  <span className="font-medium">{item.user}</span>{' '}
                  <span className="text-zinc-500">{item.detail}</span>
                </p>
                <p className="text-xs text-zinc-400">{item.time}</p>
              </div>
              <div className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg ${bg}`}>
                <Icon size={13} className={color} />
              </div>
            </div>
          )
        })}
      </div>
      <div className="border-t border-zinc-100 px-5 py-3">
        <button className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors">
          View all activity →
        </button>
      </div>
    </div>
  )
}
