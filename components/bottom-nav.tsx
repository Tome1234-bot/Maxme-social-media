"use client"

import { Home, Video, Users, UserPlus, Sparkles } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/videos", icon: Video, label: "Videos" },
  { href: "/community", icon: Users, label: "Community" },
  { href: "/", icon: Home, label: "Home", isMain: true },
  { href: "/network", icon: UserPlus, label: "Network" },
  { href: "/skillsphere", icon: Sparkles, label: "Skillsphere" },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 pb-safe">
      <div className="flex items-center justify-around h-16 max-w-screen-xl mx-auto px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all min-w-[60px]",
                isActive && !item.isMain && "text-foreground",
                !isActive && !item.isMain && "text-muted-foreground hover:text-foreground",
                item.isMain && "relative -mt-6",
              )}
            >
              {item.isMain ? (
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-primary via-accent to-primary shadow-lg shadow-primary/30">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
              ) : (
                <Icon className={cn("h-6 w-6", isActive && "scale-110")} />
              )}
              <span className={cn("text-xs font-medium", item.isMain && "mt-1")}>{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
