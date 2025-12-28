"use client"
import { Search, Bell, Menu, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-20 items-center justify-between px-6 max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Logo container */}
            <div className="relative px-4 py-2 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10 group-hover:border-primary/30 transition-all duration-300">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-600 to-accent bg-clip-text text-transparent">
                Maxme
              </span>
            </div>
          </div>
        </Link>

        {/* Navigation Icons */}
        <nav className="flex items-center gap-2">
          {/* Search Button */}
          <Button
            variant="ghost"
            size="icon"
            className="relative h-11 w-11 rounded-xl hover:bg-primary/10 hover:scale-105 transition-all duration-200 group"
            asChild
          >
            <Link href="/search">
              <Search className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>

          {/* Notifications Button */}
          <Button
            variant="ghost"
            size="icon"
            className="relative h-11 w-11 rounded-xl hover:bg-primary/10 hover:scale-105 transition-all duration-200 group"
            asChild
          >
            <Link href="/notifications">
              <Bell className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              {/* Notification badge with pulse animation */}
              <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-destructive ring-2 ring-background"></span>
              </span>
              <span className="sr-only">Notifications</span>
            </Link>
          </Button>

          {/* Messages Button */}
          <Button
            variant="ghost"
            size="icon"
            className="relative h-11 w-11 rounded-xl hover:bg-primary/10 hover:scale-105 transition-all duration-200 group"
            asChild
          >
            <Link href="/messages">
              <MessageCircle className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="sr-only">Messages</span>
            </Link>
          </Button>

          {/* Divider */}
          <div className="h-8 w-px bg-border/60 mx-1" />

          {/* Menu Button - Highlighted */}
          <Button
            variant="ghost"
            size="icon"
            className="relative h-11 w-11 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 border border-primary/20 hover:border-primary/40 hover:scale-105 transition-all duration-200 group"
            asChild
          >
            <Link href="/menu">
              <Menu className="h-5 w-5 text-primary" />
              <span className="sr-only">Menu</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
