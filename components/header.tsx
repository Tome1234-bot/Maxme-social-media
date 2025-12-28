"use client"

import { Search, Bell, Menu, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm">
      <div className="flex h-16 items-center justify-between px-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent transition-all group-hover:scale-105">
              Maxme
            </div>
            <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
          </div>
        </Link>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-accent/10 hover:text-primary transition-colors"
            asChild
          >
            <Link href="/search">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-accent/10 hover:text-primary transition-colors relative"
            asChild
          >
            <Link href="/notifications">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-destructive rounded-full ring-2 ring-background" />
              <span className="sr-only">Notifications</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-accent/10 hover:text-primary transition-colors"
            asChild
          >
            <Link href="/messages">
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">Messages</span>
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-accent/10 hover:text-primary transition-colors"
            asChild
          >
            <Link href="/menu">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
